import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Traditional leadership and kingships",
  description:
    "African kingships and chieftaincies are living systems of governance. How Isintu Samakhosi works with Amakhosi, traditional councils and royal houses.",
  alternates: { canonical: "/traditional-leadership" },
};

const G = "#D6A13A";
const I = "#1C1F3B";
const N = "#3E5B45";
const icon = (children: ReactNode) => (
  <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
    {children}
  </svg>
);

const why = [
  {
    title: "Constitutionally recognised",
    body: "Chapter 12 of the Constitution recognises the institution of traditional leadership, and traditional leaders govern millions of people across Africa.",
  },
  {
    title: "Consulted, not empowered",
    body: "Yet Amakhosi are often reduced to ceremonial roles: acknowledged, but not resourced.",
  },
  {
    title: "A governance vacuum",
    body: "Rural communities fall between municipal government and traditional authority, with neither fully equipped to deliver development.",
  },
];

const whatWeDo: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Land value",
    body: "Activate commercial awareness of land value among chiefdoms, so they can manage their own economic futures.",
    icon: icon(<><path d="M3 34 15 14l8 12 5-7 9 15z" fill={N} /><circle cx="29" cy="9" r="4" fill={G} /></>),
  },
  {
    title: "Partnerships",
    body: "Connect traditional authorities with financial institutions, government and the private sector.",
    icon: icon(<><circle cx="15" cy="20" r="10" fill="none" stroke={I} strokeWidth="2.5" /><circle cx="25" cy="20" r="10" fill="none" stroke={G} strokeWidth="2.5" /></>),
  },
  {
    title: "Documentation",
    body: "Record and teach the governance protocols, conflict resolution and economic practices of African kingships.",
    icon: icon(<><path d="M6 8c5-2 10-2 14 1 4-3 9-3 14-1v24c-5-2-10-2-14 1-4-3-9-3-14-1z" fill="none" stroke={I} strokeWidth="2.5" strokeLinejoin="round" /><path d="M20 9v24" stroke={G} strokeWidth="2.5" /></>),
  },
  {
    title: "Policy",
    body: "Advocate for policy that recognises traditional leaders as active development partners, not honorary figures.",
    icon: icon(<><path d="M20 4 36 13H4z" fill={G} /><path d="M9 16v14M16 16v14M24 16v14M31 16v14" stroke={I} strokeWidth="2.5" /><path d="M5 34h30" stroke={I} strokeWidth="3" strokeLinecap="round" /></>),
  },
  {
    title: "Technology",
    body: "Integrate modern technology with traditional economies, bridging heritage and innovation.",
    icon: icon(<><rect x="8" y="8" width="24" height="24" rx="4" fill="none" stroke={I} strokeWidth="2.5" /><path d="M20 14 26 20 20 26 14 20z" fill={G} /><path d="M20 2v6M20 32v6M2 20h6M32 20h6" stroke={I} strokeWidth="2.5" /></>),
  },
  {
    title: "Verified need",
    body: "Use Amakhosi networks to verify community needs, so resources reach rightful beneficiaries.",
    icon: icon(<><circle cx="18" cy="18" r="11" fill="none" stroke={I} strokeWidth="2.5" /><path d="M26 26l9 9" stroke={I} strokeWidth="3" strokeLinecap="round" /><path d="M13 18l4 4 6-7" fill="none" stroke={G} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></>),
  },
];

const never = [
  "Displaces, diminishes or appropriates the governance sovereignty of Amakhosi.",
  "Exploits indigenous knowledge, cultural heritage or sacred systems without Free, Prior and Informed Consent (FPIC).",
  "Benefits external interests at the expense of chiefdom communities.",
  "Undermines the constitutional recognition of traditional leadership under Chapter 12 of the Constitution.",
];

export default function TraditionalLeadershipPage() {
  return (
    <>
      <PageHero
        image="inkosi-meeting"
        title="Sovereign living heritage"
        lede="African kingships and chieftaincies are living systems of governance, justice and community organisation. The Amakhosi chieftaincy structure is central to all our work."
      />

      <section>
        <div className="wrap about-intro">
          <div>
            <h2 style={{ marginBottom: 24 }}>The heart of the Institution</h2>
            <div className="prose">
              <p>
                Isintu Samakhosi exists at the intersection of Amakhosi traditional governance, Ubuntu philosophical ethics,
                indigenous cultural heritage and rural economic development.
              </p>
              <p>
                We work to make sure traditional leadership structures are not merely preserved in museums or mentioned in
                constitutions, but actively restored as functional pillars of community life.
              </p>
            </div>
          </div>
          <Photo name="amakhosi-signing" className="about-intro-photo" sizes="(max-width: 820px) 100vw, 40vw" />
        </div>
      </section>

      <section className="surface">
        <div className="wrap">
          <div className="section-head">
            <h2>Why traditional leadership matters</h2>
          </div>
          <div className="why-cards">
            {why.map((w) => (
              <article key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
          <div className="why-answer">
            <span>Our answer</span>
            <p>
              Not a choice between modern and traditional governance, but equipping traditional leaders with the tools,
              partnerships and economic infrastructure to govern effectively alongside modern institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-photo-section quote-feature">
        <div className="bg-photo" aria-hidden="true">
          <Photo fill name="amakhosi-gathering" sizes="100vw" />
        </div>
        <div className="wrap">
          <figure>
            <blockquote>
              “…not all solutions will come from politicians or experts. Traditional leadership is the pillar of the African
              continent and mustn’t be sidelined.”
            </blockquote>
            <figcaption>King Zwelithini kaBhekuzulu</figcaption>
          </figure>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>What we do</h2>
            <p className="lede">Six ways we restore traditional leadership as a working pillar of community life.</p>
          </div>
          <div className="ethic-cards">
            {whatWeDo.map((w) => (
              <article key={w.title}>
                <span className="gov-icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="pillar-strip commitment">
            <div className="pillar-strip-head">
              <h2>Our commitment to Amakhosi sovereignty</h2>
              <span className="pillar-strip-note">UNDRIP is a foundational governance document for us</span>
            </div>
            <p className="commitment-lead">We will never pursue any programme, partnership or commercial activity that:</p>
            <ul>
              {never.map((n) => (
                <li key={n}>
                  <span className="ps-q">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="wrap about-intro">
          <div>
            <h2 style={{ marginBottom: 24 }}>Cultural heritage</h2>
            <div className="prose">
              <p>
                Through research, documentation and community education, we preserve the protocols, languages, rituals and
                governance systems that define African kingships.
              </p>
              <p>
                Every project must show a documented contribution to African heritage, Nguni cultural practice and indigenous
                knowledge. We embed UNESCO Intangible Cultural Heritage standards in all preservation work, and recognise the land,
                water and environment as the physical expression of Isintu.
              </p>
            </div>
          </div>
          <div className="heritage-grid">
            <Photo fill name="great-king-book" sizes="(max-width: 820px) 50vw, 20vw" />
            <Photo fill name="traditional-regalia" sizes="(max-width: 820px) 50vw, 20vw" />
            <Photo fill name="heritage-museum-visit" sizes="(max-width: 820px) 50vw, 20vw" />
            <Photo fill name="inkosi-portrait" sizes="(max-width: 820px) 50vw, 20vw" />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="prog-panels">
            <article>
              <h2>How councils work with us</h2>
              <ul>
                <li>
                  <p>An inkosi, induna or traditional council invites us to meet. Programmes are built with chiefdoms, never imposed on them.</p>
                </li>
                <li>
                  <p>Together we agree which programmes fit the community&apos;s own development goals.</p>
                </li>
                <li>
                  <p>For GBV centres, the council formally resolves to host the centre, and a community User Group keeps it accountable.</p>
                </li>
              </ul>
            </article>
            <article>
              <h2>Kingdoms and chiefdoms</h2>
              <ul>
                <li>
                  <p>We work in partnership with chiefdoms and kingdoms across South Africa&apos;s nine provinces.</p>
                </li>
                <li>
                  <p>Partner kingdoms, chiefdoms and councils will be named here with their permission.</p>
                </li>
              </ul>
              <p style={{ marginTop: 18 }}>
                <Link className="text-link" href="/contact?topic=council">
                  Bring us to your council
                </Link>
              </p>
            </article>
          </div>
          <p className="standards-note" style={{ marginTop: 20, marginBottom: 0 }}>
            This section will grow to include profiles of specific kingships, historical articles, photo essays and video
            interviews with traditional leaders.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CtaBand
            title="Bring us to your council"
            body="If you are an inkosi, induna or member of a traditional council, we would like to work with you. Our programmes are built with chiefdoms, not imposed on them."
            href="/contact?topic=council"
            label="Request a meeting"
          />
        </div>
      </section>
    </>
  );
}
