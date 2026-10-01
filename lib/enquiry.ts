import { provinces, roles, site } from "./site";

// Enquiry form checks. The site is a static export with no server, so the form is
// validated in the browser and handed to the visitor's email app, addressed to the
// Institution. To send directly instead, post the same fields to a form service.

export type EnquiryErrors = Partial<Record<string, string>>;

const clean = (v: FormDataEntryValue | null, max = 200) => String(v ?? "").trim().slice(0, max);

export function checkEnquiry(fd: FormData): { errors: EnquiryErrors; spam: boolean; mailto: string } {
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

  const errors: EnquiryErrors = {};
  if (v.name.length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = "Enter a valid email address, like name@example.co.za.";
  if (v.phone && !/^[+\d][\d\s()-]{6,}$/.test(v.phone)) errors.phone = "Enter a valid phone number, or leave it blank.";
  if (v.province && !(provinces as readonly string[]).includes(v.province)) errors.province = "Choose a province from the list.";
  if (!(roles as readonly string[]).includes(v.role)) errors.role = "Tell us who you are.";
  if (v.message.length < 10) errors.message = "Your message needs at least 10 characters.";
  if (!consent) errors.consent = "We need your consent to process your details.";

  const body = [
    v.message,
    "",
    "---",
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone || "-"}`,
    `Organisation: ${v.organisation || "-"}`,
    `Province: ${v.province || "-"}`,
    `Traditional authority / chiefdom: ${v.authority || "-"}`,
    `I am a: ${v.role}`,
    `POPIA consent: yes`,
  ].join("\n");
  const subject = `Website enquiry: ${v.role} – ${v.name}`;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Honeypot: real people never see or fill the "website" field.
  return { errors, spam: Boolean(clean(fd.get("website"))), mailto };
}
