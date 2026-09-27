import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/Sections";
import { getProgramme } from "@/lib/programmes";

export const metadata: Metadata = {
  title: "Rural development",
  description:
    "Rural South Africa is not poor because it lacks resources. How Isintu Samakhosi builds the infrastructure that lets communities develop themselves: land value, co-ops, the Rural Fund, mining and environmental stewardship.",
  alternates: { canonical: "/rural-development" },
};

const G = "#D6A13A";
const I = "#1C1F3B";
const N = "#3E5B45";
const icon = (children: ReactNode) => (
  <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
    {children}
  </svg>
);

const strategy: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Land value activation",
    body: "Helping chiefdoms commercialise communal land, including agriculture, tourism, mining and renewable energy, on their own terms.",
    icon: icon(<><path d="M3 34 15 14l8 12 5-7 9 15z" fill={N} /><circle cx="29" cy="9" r="4" fill={G} /></>),
  },
  {
    title: "Business chamber co-ops",
    body: "Co-operative business chambers in each province, the commercial engine of traditional communities.",
    icon: icon(<><circle cx="13" cy="15" r="6" fill={G} /><circle cx="27" cy="15" r="6" fill={I} /><path d="M3 34c0-7 4-11 10-11s10 4 10 11zM17 34c0-7 4-11 10-11s10 4 10 11z" fill={N} opacity=".85" /></>),
  },
  {
    title: "Agricultural modernisation",
    body: "Training farmers in modern techniques while respecting indigenous agricultural knowledge.",
    icon: icon(<><path d="M20 36V18" stroke={N} strokeWidth="2.5" strokeLinecap="round" /><path d="M20 20C20 12 14 8 7 8c0 8 6 12 13 12zM20 24c0-7 5-11 13-11 0 7-5 11-13 11z" fill={G} /><path d="M8 36h24" stroke={I} strokeWidth="2.5" strokeLinecap="round" /></>),
  },
  {
    title: "Community marketplaces",
    body: "Physical and digital marketplaces where rural producers sell directly, cutting out exploitative middlemen.",
    icon: icon(<><path d="M4 16 20 5l16 11z" fill={G} /><path d="M8 16v18h24V16" fill="none" stroke={I} strokeWidth="2.5" /><rect x="16" y="23" width="8" height="11" fill={N} /></>),
  },
  {
    title: "Microloans and savings",
    body: "Access to capital through community-owned financial structures.",
    icon: icon(<><ellipse cx="20" cy="28" rx="13" ry="5" fill={I} /><ellipse cx="20" cy="21" rx="13" ry="5" fill={N} /><ellipse cx="20" cy="14" rx="13" ry="5" fill={G} /></>),
  },
];

const environment = [
  "Environmental assessments for all infrastructure, agricultural and economic development programmes.",
  "Working with Amakhosi to protect culturally significant sites, sacred landscapes and indigenous knowledge systems.",
  "Aligning with SDG 13 (Climate Action), SDG 15 (Life on Land) and South African environmental legislation.",
  "Embedding UNESCO Intangible Cultural Heritage standards in all preservation and documentation work.",
];

const relatedSlugs = ["business-chambers", "rural-fund", "rural-economic-development", "informal-mining-formalisation"];

export default function RuralDevelopmentPage() {
  return (
    <>
      <PageHero
        image="poultry-house-interior"
        title="Resources exist. Infrastructure doesn’t."
        lede="Rural South Africa is not poor because it lacks resources. It is poor because the mechanisms for unlocking those resources have never been built for the people who live there."
      />

      <section>
        <div className="wrap about-intro">
          <div>
            <h2 style={{ marginBottom: 24 }}>A different approach</h2>
            <p className="rd-statement">
              We do not deliver development to communities. We build the infrastructure that allows communities to develop
              themselves.
            </p>
          </div>
          <Photo name="greenhouse-seedlings" className="about-intro-photo" sizes="(max-width: 820px) 100vw, 40vw" />
        </div>
      </section>

      <section className="surface">
        <div className="wrap">
          <div className="section-head">
            <h2>Our strategy</h2>
            <p className="lede">Five ways we unlock the value that already exists in rural communities.</p>
          </div>
          <div className="strategy-cards">
            {strategy.map((s) => (
              <article key={s.title}>
                <span className="gov-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap fund-feature">
          <div className="pillar-strip fund-card">
            <span className="fund-kicker">Financial infrastructure</span>
            <h2>The Rural Fund</h2>
            <p>
              The financial backbone of our development work. With credible financial institutions, it channels industrial and
              project funding into rural communities through co-operative ownership.
            </p>
            <ul className="fund-points">
              <li>Communities become investors and co-owners</li>
              <li>Less reliance on government grants</li>
              <li>Venture capital for communities once excluded</li>
            </ul>
            <Link className="btn btn-gold" href="/our-work/rural-fund">
              About the Rural Fund
            </Link>
          </div>
          <Photo name="poultry-house" className="fund-photo" fill sizes="(max-width: 820px) 100vw, 45vw" />
        </div>
      </section>

      <section className="surface">
        <div className="wrap">
          <div className="section-head">
            <h2>Mining and mineral resources</h2>
          </div>
          <div className="prog-story">
            <article className="prog-challenge">
              <h3 className="prog-label">The challenge</h3>
              <p>
                Many rural communities sit on significant mineral deposits. The informal mining sector, often overlooked or
                criminalised, is both an opportunity and a risk.
              </p>
            </article>
            <article className="prog-approach">
              <h3 className="prog-label">Our response</h3>
              <p>
                We formalise small-scale subsistence mining, creating legitimate employment, and build community-based refinery
                centres so mineral wealth benefits the people on the land, long after mines are depleted.
              </p>
              <p>
                <Link className="text-link" href="/our-work/informal-mining-formalisation">
                  More about informal mining formalisation
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-photo-section env-section">
        <div className="bg-photo" aria-hidden="true">
          <Photo fill name="cabbage-field" sizes="100vw" />
        </div>
        <div className="wrap">
          <div className="section-head">
            <h2>Environmental stewardship</h2>
            <p className="lede">
              The land, water and natural environment are the physical expression of Isintu: the ancestral covenant between
              Abantu and their territory.
            </p>
          </div>
          <ul className="env-principles">
            <li>Take only what is needed</li>
            <li>Restore what is used</li>
            <li>Protect what is sacred</li>
          </ul>
          <div className="env-cards">
            {environment.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-row">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2>The programmes behind this strategy</h2>
            </div>
            <Link className="btn btn-outline" href="/our-work">
              All programmes
            </Link>
          </div>
          <div className="cards cards-quad">
            {relatedSlugs.map((s) => {
              const p = getProgramme(s);
              if (!p) return null;
              return (
                <Link className="card" href={`/our-work/${p.slug}`} key={p.slug}>
                  {p.image && (
                    <div className="card-media">
                      <Photo fill name={p.image} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 280px" />
                    </div>
                  )}
                  <div className="card-body">
                    <div className="meta prog-tagline">{p.tagline}</div>
                    <h3>{p.name}</h3>
                    <span className="more">Explore programme</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CtaBand
            title="Invest in rural prosperity"
            body="Partner with us on land value, co-operatives, the Rural Fund or mining formalisation."
            href="/contact?topic=partner"
            label="Start a partnership"
          />
        </div>
      </section>
    </>
  );
}
