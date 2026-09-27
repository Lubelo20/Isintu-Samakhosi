import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Standards } from "@/components/Sections";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Transparency",
  description: "Registration details, policies and annual reports for Isintu Samakhosi Institution NPC: NPO 285-310, PBO 930073548.",
  alternates: { canonical: "/transparency" },
};

const documents = [
  "Company registration certificate (CIPC)",
  "NPO registration certificate",
  "PBO and Section 18A approval letter",
  "Protection from Sexual Exploitation and Abuse (PSEA) policy",
  "Code of Conduct",
  "Annual reports",
];

export default function TransparencyPage() {
  return (
    <>
      <PageHero image="heritage-signing" title="Transparency" lede="Our registration details, policies and reports, in one place." />
      <section>
        <div className="wrap split">
          <div>
            <h2>Registration</h2>
          </div>
          <dl className="kv">
            <div><dt>Legal name</dt><dd>{site.legalName}</dd></div>
            <div><dt>Enterprise type</dt><dd>{site.companyType}</dd></div>
            <div><dt>Company registration</dt><dd>{site.reg}</dd></div>
            <div><dt>NPO number</dt><dd>{site.npo}</dd></div>
            <div><dt>PBO number</dt><dd>{site.pbo}</dd></div>
            <div><dt>Tax number</dt><dd>{site.taxNumber}</dd></div>
            <div><dt>Date of registration</dt><dd>{site.registered}</dd></div>
            <div><dt>Financial year end</dt><dd>{site.financialYearEnd}</dd></div>
            <div style={{ gridColumn: "1 / -1" }}><dt>Registered address</dt><dd>{addressLine}</dd></div>
          </dl>
        </div>
      </section>
      <section className="surface">
        <div className="wrap split">
          <div>
            <h2>Documents</h2>
          </div>
          <div>
            <ul className="plain-list" style={{ marginBottom: 24 }}>
              {documents.map((d) => (
                <li key={d} style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                  <span>{d}</span>
                  <a className="text-link" style={{ fontSize: ".9rem", whiteSpace: "nowrap" }} href={`mailto:${site.email}?subject=${encodeURIComponent("Document request: " + d)}`}>
                    Request a copy
                  </a>
                </li>
              ))}
            </ul>
            <p style={{ color: "var(--muted)", margin: 0 }}>Documents are available on request while we prepare them for download.</p>
          </div>
        </div>
      </section>
      <Standards />
    </>
  );
}
