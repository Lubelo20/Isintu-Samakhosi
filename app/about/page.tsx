import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { CtaBand, TriadSection } from "@/components/Sections";
import { leadership, objectives } from "@/lib/about";
import { pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Who we are: the story, vision and mission of Isintu Samakhosi Institution, the Ubuntu Triad and the Three Founding Pillars.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="heritage-museum-group"
        title="I am because we are"
        lede="A vehicle for systemic change, institutional memory and intergenerational wisdom, rooted in the living philosophy of the Nguni peoples of Southern Africa."
      />

      <section>
        <div className="wrap about-intro">
          <div>
            <h2>Our story</h2>
            <div className="prose">
              <p>
                Isintu Samakhosi Institution is a Non-Profit Company registered on 26 June 2025, founded on the vision of
                restoring the dignity, intellectual sovereignty and economic autonomy of African people.
              </p>
              <p>
                Our name tells our story. It draws on <em>NTU</em>, the Bantu life-force, through which Abantu (the people)
                derive their humanity, Isintu (our custom and way of life) gives it form, and Ubuntu (“I am because we are”)
                expresses its relational ethic.
              </p>
              <p>
                We believe human flourishing is communal, leadership is stewardship, and resources are held in trust for present
                and future generations.
              </p>
              <p>
                The Institution was founded by <Link className="text-link" href="/about/leadership">Andile Sizwe Phahla</Link>,
                its Founding President, a KwaZulu-Natal businessman and philanthropist with more than 20 years in community
                development. It was registered in KwaZulu-Natal to bring traditional leadership, modern enterprise and technology
                together as catalysts for village-based economies.
              </p>
            </div>
          </div>
          <Photo name="great-king-book" className="about-intro-photo" sizes="(max-width: 820px) 100vw, 40vw" />
        </div>
      </section>

      <section className="surface">
        <div className="wrap">
          <div className="vm">
            <article className="vm-vision">
              <svg className="vm-icon" width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
                <path d="M26 4 48 26 26 48 4 26z" fill="none" stroke="#D6A13A" strokeWidth="2.5" />
                <path d="M26 16 36 26 26 36 16 26z" fill="#D6A13A" />
                <circle cx="26" cy="26" r="3.5" fill="#1C1F3B" />
              </svg>
              <span className="vm-label">Our vision</span>
              <span className="vm-rule" aria-hidden="true" />
              <p>
                A continent where the dignity, intellectual sovereignty and economic autonomy of African people are restored, and
                where traditional leadership is recognised, resourced and empowered to drive development in its own communities,
                on its own terms.
              </p>
            </article>
            <article className="vm-mission">
              <svg className="vm-icon" width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
                <path d="M26 5 47 45H5z" fill="none" stroke="#1C1F3B" strokeWidth="2.5" />
                <path d="M26 19 36 39H16z" fill="#D6A13A" />
                <rect x="24" y="31" width="4" height="4" fill="#3E5B45" />
              </svg>
              <span className="vm-label">Our mission</span>
              <span className="vm-rule" aria-hidden="true" />
              <p>
                To conduct research, advocacy and education on African heritage, indigenous governance and economic
                emancipation; to develop leaders grounded in ethical governance and Ubuntu economics; and to tackle systemic
                inequality in township, village and rural economies.
              </p>
            </article>
          </div>
        </div>
      </section>

      <TriadSection />

      <section className="bg-photo-section">
        <div className="bg-photo" aria-hidden="true">
          <Photo fill name="amakhosi-gathering-field" sizes="100vw" />
        </div>
        <div className="wrap">
          <div className="section-head">
            <h2>The Three Founding Pillars</h2>
            <p className="lede">The Triad sets our values. The pillars are the test every programme must pass.</p>
          </div>
          <div className="pillar-cards">
            {pillars.map((p) => (
              <article key={p.name}>
                <span className="pillar-zulu">{p.zulu}</span>
                <h3>{p.name}</h3>
                <p className="pillar-q">{p.question}</p>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="wrap split">
          <div>
            <h2>What we are incorporated to do</h2>
          </div>
          <ul className="objectives">
            {objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-row">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2>Leadership</h2>
              <p className="lede">The people guiding the Institution.</p>
            </div>
            <Link className="btn btn-outline" href="/about/leadership">
              Leadership and board
            </Link>
          </div>
          <div className="cards">
            {leadership.map((p) => (
              <Link className="card person-card" href={`/about/leadership#${p.slug}`} key={p.slug}>
                <div className="card-media">
                  {p.photo && <Photo fill name={p.photo} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 380px" />}
                </div>
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <div className="meta role-meta">{p.role}</div>
                  <p>{p.summary}</p>
                  <span className="more">Read biography</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CtaBand
            title="How we are governed"
            body="Non-partisan, independently governed, and held to international quality and accountability standards."
            href="/about/governance"
            label="Our governance"
          />
        </div>
      </section>
    </>
  );
}
