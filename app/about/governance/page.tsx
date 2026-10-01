import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/Sections";
import { ethics } from "@/lib/about";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "How Isintu Samakhosi Institution is governed: an independent Board, a non-partisan stance, six core ethical standards, international quality frameworks and safeguarding.",
  alternates: { canonical: "/about/governance" },
};

const glance = [
  {
    title: "Independent Board",
    body: "Directors of high moral standing, with Amakhosi representation.",
    icon: <Icon name="board" />,
  },
  {
    title: "Non-partisan",
    body: "No alignment with, or support for, any political party or candidate.",
    icon: <Icon name="nonPartisan" />,
  },
  {
    title: "Zero tolerance",
    body: "For sexual exploitation and abuse, across all operations (PSEA).",
    icon: <Icon name="safeguarding" />,
  },
  {
    title: "Registered",
    body: `Registered NPO ${site.npo} and Public Benefit Organisation ${site.pbo}.`,
    icon: <Icon name="registered" />,
  },
];

const ethicIcons: Record<string, ReactNode> = {
  Integrity: <Icon name="integrity" />,
  Dignity: <Icon name="dignity" />,
  Accountability: <Icon name="accountability" />,
  Impartiality: <Icon name="impartiality" />,
  Confidentiality: <Icon name="confidentiality" />,
  Stewardship: <Icon name="stewardship" />,
};

const frameworks = [
  { name: "CHS", detail: "Core Humanitarian Standard on Quality and Accountability (CHS Alliance)" },
  { name: "ISO 9001:2015", detail: "Quality management systems" },
  { name: "King IV", detail: "Corporate governance principles" },
];

const rights = [
  { name: "UNDRIP", detail: "UN Declaration on the Rights of Indigenous Peoples, a foundational governance document" },
  { name: "UNCRC", detail: "Convention on the Rights of the Child" },
  { name: "CEDAW", detail: "Convention on the Elimination of All Forms of Discrimination Against Women" },
  { name: "PSEA", detail: "Zero-tolerance Protection from Sexual Exploitation and Abuse policy" },
  { name: "FPIC", detail: "Free, Prior and Informed Consent before engaging indigenous knowledge or heritage" },
];

const safeguarding = [
  "Mandatory induction for every volunteer",
  "Safeguarding training before engagement",
  "Signed Code of Conduct",
  "Signed PSEA policy",
];

export default function GovernancePage() {
  return (
    <>
      <PageHero
        image="heritage-signing"
        title="Accountable by design"
        lede="Independent governance, clear ethics and international standards, so communities, partners and funders can trust the work."
      />

      <section className="gov-glance-section">
        <div className="wrap">
          <h2 className="sr-only">At a glance</h2>
          <div className="gov-glance">
            {glance.map((g) => (
              <article key={g.title}>
                <span className="gov-icon">{g.icon}</span>
                <h3>{g.title}</h3>
                <p>{g.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap about-intro">
          <div>
            <h2 style={{ marginBottom: 24 }}>How we are governed</h2>
            <div className="prose">
              <p>
                The Institution is governed by a Board of Directors of high moral standing, with expertise in law, finance,
                heritage studies, community development and governance. Its composition reflects the communities we serve.
              </p>
            </div>
            <ul className="gov-principles">
              <li>
                <b>Amakhosi representation</b>
                <span>The Board includes representation from the Amakhosi network.</span>
              </li>
              <li>
                <b>Non-partisan by constitution</b>
                <span>We advocate on our objectives, but never align with or fund any political party or candidate.</span>
              </li>
              <li>
                <b>Evidence-led decisions</b>
                <span>The Ubuntu Data Bank supports programme design, CSI tracking and continuous improvement.</span>
              </li>
            </ul>
            <p style={{ marginTop: 24 }}>
              <Link className="text-link" href="/about/leadership">
                Meet our leadership
              </Link>
            </p>
          </div>
          <Photo name="heritage-museum-group" className="about-intro-photo" sizes="(max-width: 820px) 100vw, 40vw" />
        </div>
      </section>

      <section className="surface">
        <div className="wrap">
          <div className="section-head">
            <h2>Core ethical standards</h2>
            <p className="lede">Six commitments that apply to everyone who works with or for the Institution.</p>
          </div>
          <div className="ethic-cards">
            {ethics.map(([t, d]) => (
              <article key={t}>
                <span className="gov-icon">{ethicIcons[t]}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-photo-section">
        <div className="bg-photo" aria-hidden="true">
          <Photo fill name="heritage-museum-visit" sizes="100vw" />
        </div>
        <div className="wrap">
          <div className="section-head">
            <h2>Standards and rights</h2>
            <p className="lede">International frameworks applied as working disciplines across every programme.</p>
          </div>
          <div className="gov-frameworks">
            <article>
              <div className="gov-fw-head">
                <h3>Quality and governance</h3>
                <span className="gov-badge">Accreditation in progress</span>
              </div>
              <dl>
                {frameworks.map((f) => (
                  <div key={f.name}>
                    <dt>{f.name}</dt>
                    <dd>{f.detail}</dd>
                  </div>
                ))}
              </dl>
            </article>
            <article>
              <div className="gov-fw-head">
                <h3>Rights we uphold</h3>
              </div>
              <dl>
                {rights.map((f) => (
                  <div key={f.name}>
                    <dt>{f.name}</dt>
                    <dd>{f.detail}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <h2>Safeguarding</h2>
          </div>
          <div>
            <p className="lede" style={{ marginBottom: 24 }}>
              Everyone who volunteers or works with communities on our behalf must complete these steps before they start.
            </p>
            <ul className="gov-checks">
              {safeguarding.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="wrap split">
          <div>
            <h2>Registration</h2>
          </div>
          <div>
            <dl className="gov-reg">
              <div><dt>Company registration</dt><dd>{site.reg}</dd></div>
              <div><dt>NPO number</dt><dd>{site.npo}</dd></div>
              <div><dt>PBO number</dt><dd>{site.pbo}</dd></div>
              <div><dt>Registered</dt><dd>{site.registered}</dd></div>
            </dl>
            <p style={{ marginTop: 24 }}>
              <Link className="text-link" href="/transparency">
                Full registration details and documents
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <CtaBand
            title="Partner with confidence"
            body="Every programme is tested against our pillars and delivered under recognised standards, with transparent reporting."
            href="/get-involved"
            label="Get involved"
          />
        </div>
      </section>
    </>
  );
}
