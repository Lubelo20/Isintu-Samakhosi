"use client";

import Link from "next/link";
import { useState, useSyncExternalStore, type FormEvent } from "react";
import { checkEnquiry, type EnquiryErrors } from "@/lib/enquiry";
import { provinces, roles, site } from "@/lib/site";

const topicToRole: Record<string, (typeof roles)[number]> = {
  partner: "Potential partner or funder",
  council: "Traditional leader or council",
  donor: "Donor or SR Angel",
  volunteer: "Volunteer or researcher",
  media: "Media",
};

const noop = () => () => {};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "error" | "ok">("idle");
  const [e, setErrors] = useState<EnquiryErrors>({});
  // Links like /contact?topic=council preselect "I am a". Read in the browser, since the page is static.
  const topicRole = useSyncExternalStore(
    noop,
    () => topicToRole[new URLSearchParams(window.location.search).get("topic") ?? ""] ?? "",
    () => "",
  );
  const [picked, setRole] = useState<string | null>(null);
  const role = picked ?? topicRole;

  const submit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const { errors, spam, mailto } = checkEnquiry(new FormData(ev.currentTarget));
    setErrors(errors);
    if (Object.keys(errors).length) {
      setStatus("error");
      return;
    }
    if (!spam) window.location.href = mailto;
    setStatus("ok");
  };
  const err = (k: string) =>
    e[k] ? (
      <p className="error" id={`${k}-error`}>
        {e[k]}
      </p>
    ) : null;
  const a11y = (k: string) => ({ "aria-invalid": e[k] ? true : undefined, "aria-describedby": e[k] ? `${k}-error` : undefined });

  if (status === "ok") {
    return (
      <div className="notice ok" role="status">
        Thank you. Your email app should now open with your enquiry ready to send. If it does not, email us at{" "}
        <a className="text-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      {status === "error" && (
        <div className="notice err" role="alert">
          Please fix the highlighted fields.
        </div>
      )}
      <div className="row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" autoComplete="name" required {...a11y("name")} />
          {err("name")}
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required {...a11y("email")} />
          {err("email")}
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="phone">
            Phone number <span className="hint">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" {...a11y("phone")} />
          {err("phone")}
        </div>
        <div className="field">
          <label htmlFor="organisation">
            Organisation <span className="hint">(optional)</span>
          </label>
          <input id="organisation" name="organisation" autoComplete="organization" />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="role">I am a</label>
          <select id="role" name="role" required value={role}
            onChange={(ev) => setRole(ev.target.value)} {...a11y("role")}>
            <option value="" disabled>
              Choose one
            </option>
            {roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
          {err("role")}
        </div>
        <div className="field">
          <label htmlFor="province">
            Province <span className="hint">(optional)</span>
          </label>
          <select id="province" name="province" {...a11y("province")}>
            <option value="">Choose a province</option>
            {provinces.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          {err("province")}
        </div>
      </div>
      <div className="field">
        <label htmlFor="authority">
          Traditional authority or chiefdom <span className="hint">(optional)</span>
        </label>
        <input id="authority" name="authority" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required {...a11y("message")} />
        {err("message")}
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="field">
        <div className="consent">
          <input id="consent" name="consent" type="checkbox" value="yes" required {...a11y("consent")} />
          <label htmlFor="consent" style={{ fontWeight: 400, margin: 0 }}>
            I agree that Isintu Samakhosi Institution may use these details to respond to my enquiry, as set out in the{" "}
            <Link className="text-link" href="/privacy">
              privacy notice
            </Link>
            .
          </label>
        </div>
        {err("consent")}
      </div>
      <div>
        <button className="btn btn-ink" type="submit">
          Send enquiry
        </button>
      </div>
    </form>
  );
}
