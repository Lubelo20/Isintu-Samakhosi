"use server";

import { provinces, roles, site } from "@/lib/site";

export type FormState = {
  status: "idle" | "ok" | "error";
  message?: string;
  errors?: Partial<Record<string, string>>;
  values?: Record<string, string>;
};

const clean = (v: FormDataEntryValue | null, max = 200) => String(v ?? "").trim().slice(0, max);
const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendEnquiry(_prev: FormState, fd: FormData): Promise<FormState> {
  // Honeypot: real people never see or fill this field.
  if (clean(fd.get("website"))) return { status: "ok", message: "Thank you. We will be in touch." };

  const v = {
    name: clean(fd.get("name"), 120),
    email: clean(fd.get("email"), 160),
    phone: clean(fd.get("phone"), 40),
    organisation: clean(fd.get("organisation"), 160),
    province: clean(fd.get("province"), 40),
    authority: clean(fd.get("authority"), 160),
    role: clean(fd.get("role"), 60),
    message: clean(fd.get("message"), 5000),
  };
  const consent = fd.get("consent") === "yes";

  const errors: Record<string, string> = {};
  if (v.name.length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = "Enter a valid email address, like name@example.co.za.";
  if (v.phone && !/^[+\d][\d\s()-]{6,}$/.test(v.phone)) errors.phone = "Enter a valid phone number, or leave it blank.";
  if (v.province && !(provinces as readonly string[]).includes(v.province)) errors.province = "Choose a province from the list.";
  if (!(roles as readonly string[]).includes(v.role)) errors.role = "Tell us who you are.";
  if (v.message.length < 10) errors.message = "Your message needs at least 10 characters.";
  if (!consent) errors.consent = "We need your consent to process your details.";

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values: v };
  }

  const text = [
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone || "-"}`,
    `Organisation: ${v.organisation || "-"}`,
    `Province: ${v.province || "-"}`,
    `Traditional authority / chiefdom: ${v.authority || "-"}`,
    `I am a: ${v.role}`,
    `POPIA consent: yes`,
    "",
    v.message,
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] RESEND_API_KEY not set; enquiry not emailed:\n" + text);
      return { status: "ok", message: "Thank you. (Development mode: the enquiry was logged, not emailed.)" };
    }
    console.error("[contact] RESEND_API_KEY is not configured");
    return { status: "error", message: `Sorry, the form is not working right now. Please email us at ${site.email}.`, values: v };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? `Website <website@isintusamakhosi.org.za>`,
        to: [process.env.CONTACT_TO ?? site.email],
        reply_to: v.email,
        subject: `Website enquiry: ${v.role} – ${v.name}`,
        text,
        html: `<pre style="font:14px/1.5 system-ui">${escape(text)}</pre>`,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error("[contact] send failed", err);
    return { status: "error", message: `Sorry, we could not send your message. Please email us at ${site.email}.`, values: v };
  }

  return { status: "ok", message: "Thank you. Your enquiry has been sent and we will respond within a few working days." };
}
