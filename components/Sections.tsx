// Sections shared between the home page and inner pages.
import Link from "next/link";
import { addressLine, site } from "@/lib/site";
import { triad } from "./Icons";

export function TriadSection({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <section className="triad">
      <div className="wrap">
        <div className="triad-head">
          <H style={headingLevel === 3 ? { fontSize: "clamp(2rem,4vw,3rem)" } : undefined}>The Ubuntu Triad</H>
          <p className="lede">Our values. Three commitments shape who we serve, how we work and what we protect.</p>
        </div>
        <div className="triad-grid">
          {triad.map(({ name, meaning, Icon, body }) => (
            <article key={name}>
              <span className="triad-badge">
                <Icon />
              </span>
              <h3>{name}</h3>
              <div className="meaning">{meaning}</div>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const gbvSteps = [
  { title: "Community baseline assessment", body: "Understanding the community before we act in it." },
  { title: "Traditional Council Resolution", body: "The council formally invites and owns the centre." },
  { title: "Referral pathway map", body: "Clear routes to police, health and social services." },
  { title: "Risk and safety plan", body: "Protecting survivors, staff and the User Group." },
];

export const gbvPartners =
  "DBT Studies, accredited GBV curriculum specialists, SABC 1, the Department of Social Development and the Department of Women, Youth and Persons with Disabilities";

export function Standards() {
  return (
    <section className="standards" id="standards">
      <div className="wrap">
        <div>
          <h2>Accountable by design</h2>
          <p className="lede" style={{ marginTop: 18 }}>
            We apply these frameworks as working disciplines across every programme, with formal accreditation in progress.
          </p>
        </div>
        <dl className="std-list">
          <div><dt>Core Humanitarian Standard</dt><dd>Quality and accountability, CHS Alliance</dd></div>
          <div><dt>ISO 9001:2015</dt><dd>Quality management</dd></div>
          <div><dt>King IV</dt><dd>Corporate governance principles</dd></div>
          <div><dt>UNDRIP</dt><dd>UN Declaration on the Rights of Indigenous Peoples</dd></div>
          <div><dt>UNCRC and CEDAW</dt><dd>Convention on the Rights of the Child, and Convention on the Elimination of All Forms of Discrimination Against Women</dd></div>
          <div><dt>Zero tolerance for PSEA breaches</dt><dd>Protection from sexual exploitation and abuse, across all operations</dd></div>
        </dl>
      </div>
    </section>
  );
}

export function ContactList() {
  return (
    <dl className="contact-list">
      <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
      <div><dt>Phone</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div>
      <div><dt>Office</dt><dd>{addressLine}</dd></div>
    </dl>
  );
}

export function CtaBand({ title, body, href, label }: { title: string; body?: string; href: string; label: string }) {
  return (
    <div className="cta-band">
      <div>
        <h2>{title}</h2>
        {body && <p>{body}</p>}
      </div>
      <Link className="btn btn-gold" href={href}>
        {label}
      </Link>
    </div>
  );
}
