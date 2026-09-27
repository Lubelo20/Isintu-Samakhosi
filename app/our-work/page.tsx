import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/Sections";
import { getProgramme, type Programme } from "@/lib/programmes";
import { pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Eight programmes building economic, institutional and cultural infrastructure in township, village and rural economies, each tested against the Three Founding Pillars.",
  alternates: { canonical: "/our-work" },
};

// Programmes grouped by theme, so the page reads as three clear areas of work.
const themes: { id: string; title: string; intro: string; slugs: string[] }[] = [
  {
    id: "economic",
    title: "Economic infrastructure",
    intro: "Structures that let communities own, finance and grow their own enterprises.",
    slugs: ["business-chambers", "rural-fund", "township-economy", "smme-coop-incubation"],
  },
  {
    id: "land",
    title: "Land and resources",
    intro: "Unlocking the value of land, minerals and data on the community's own terms.",
    slugs: ["rural-economic-development", "informal-mining-formalisation", "ubuntu-data-bank"],
  },
  {
    id: "protection",
    title: "Social protection",
    intro: "Accredited support for survivors of gender-based violence, inside traditional councils.",
    slugs: ["gbv-centre-rollout"],
  },
];

function ProgrammeCard({ p }: { p: Programme }) {
  return (
    <Link className="card prog-card" href={`/our-work/${p.slug}`}>
      {p.image && (
        <div className="card-media">
          <Photo fill name={p.image} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 380px" />
        </div>
      )}
      <div className="card-body">
        <div className="meta prog-tagline">{p.tagline}</div>
        <h3>{p.name}</h3>
        <p>{p.summary}</p>
        <span className="more">Explore programme</span>
      </div>
    </Link>
  );
}

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        image="workshop-hall"
        title="Building infrastructure, not dependency"
        lede="We do not do charity. We build economic, institutional and cultural infrastructure that lets communities generate their own wealth and govern their own affairs."
      />

      <section className="pillar-strip-section">
        <div className="wrap">
          <div className="pillar-strip">
            <div className="pillar-strip-head">
              <h2>Every programme must answer three questions</h2>
              <Link className="text-link" href="/about">
                About the Three Founding Pillars
              </Link>
            </div>
            <ul>
              {pillars.map((p) => (
                <li key={p.name}>
                  <span className="ps-name">
                    {p.name} <small>{p.zulu}</small>
                  </span>
                  <span className="ps-q">{p.question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {themes.map((t, i) => (
        <section key={t.id} id={t.id} className={`theme${i % 2 ? " surface" : ""}`}>
          <div className="wrap">
            <div className="section-head">
              <h2>{t.title}</h2>
              <p className="lede">{t.intro}</p>
            </div>
            <div className={`cards${t.slugs.length === 1 ? " cards-single" : t.slugs.length === 4 ? " cards-quad" : ""}`}>
              {t.slugs.map((s) => {
                const p = getProgramme(s);
                return p ? <ProgrammeCard key={s} p={p} /> : null;
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-photo-section">
        <div className="bg-photo" aria-hidden="true">
          <Photo fill name="greenhouse-seedlings" sizes="100vw" />
        </div>
        <div className="wrap rd-feature">
          <div>
            <h2>One rural development strategy</h2>
            <p className="lede">
              Land value activation, business chamber co-ops, agricultural modernisation, community marketplaces, and microloans
              and savings, all backed by the Rural Fund.
            </p>
          </div>
          <Link className="btn btn-gold" href="/rural-development">
            Our rural development approach
          </Link>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="standards-note">
            Every programme is delivered under the Core Humanitarian Standard, ISO 9001:2015 and King IV, with formal accreditation
            in progress.{" "}
            <Link className="text-link" href="/about/governance">
              How we are governed
            </Link>
          </p>
          <CtaBand
            title="Fund a programme"
            body="Direct CSI or ESD budget into the programmes that match your mandate, with transparent reporting."
            href="/get-involved"
            label="Ways to partner"
          />
        </div>
      </section>
    </>
  );
}
