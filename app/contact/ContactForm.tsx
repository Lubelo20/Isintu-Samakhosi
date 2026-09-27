"use client";

import Link from "next/link";
import { useActionState } from "react";
import { provinces, roles } from "@/lib/site";
import { sendEnquiry, type FormState } from "./actions";

const topicToRole: Record<string, (typeof roles)[number]> = {
  partner: "Potential partner or funder",
  council: "Traditional leader or council",
  donor: "Donor or SR Angel",
  volunteer: "Volunteer or researcher",
  media: "Media",
};

export function ContactForm({ topic }: { topic?: string }) {
  const [state, action, pending] = useActionState<FormState, FormData>(sendEnquiry, { status: "idle" });
  const e = state.errors ?? {};
  const val = state.values ?? {};
  const err = (k: string) =>
    e[k] ? (
      <p className="error" id={`${k}-error`}>
        {e[k]}
      </p>
    ) : null;
  const a11y = (k: string) => ({ "aria-invalid": e[k] ? true : undefined, "aria-describedby": e[k] ? `${k}-error` : undefined });

  if (state.status === "ok") {
    return (
      <div className="notice ok" role="status">
        {state.message}
      </div>
    );
  }

  return (
    <form className="form" action={action} noValidate>
      {state.status === "error" && (
        <div className="notice err" role="alert">
          {state.message}
        </div>
      )}
      <div className="row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" autoComplete="name" required defaultValue={val.name} {...a11y("name")} />
          {err("name")}
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required defaultValue={val.email} {...a11y("email")} />
          {err("email")}
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="phone">
            Phone number <span className="hint">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={val.phone} {...a11y("phone")} />
          {err("phone")}
        </div>
        <div className="field">
          <label htmlFor="organisation">
            Organisation <span className="hint">(optional)</span>
          </label>
          <input id="organisation" name="organisation" autoComplete="organization" defaultValue={val.organisation} />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="role">I am a</label>
          <select id="role" name="role" required defaultValue={val.role ?? (topic ? topicToRole[topic] : "") ?? ""} {...a11y("role")}>
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
          <select id="province" name="province" defaultValue={val.province ?? ""} {...a11y("province")}>
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
        <input id="authority" name="authority" defaultValue={val.authority} />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required defaultValue={val.message} {...a11y("message")} />
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
        <button className="btn btn-ink" type="submit" disabled={pending}>
          {pending ? "Sending…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
