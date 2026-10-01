import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/Sections";
import { executive, leadership, structure } from "@/lib/about";

export const metadata: Metadata = {
  title: "Leadership and board",
  description:
    "Meet the leadership of Isintu Samakhosi Institution: the National Executive Council and Executive Committee, led by Founding President Andile Phahla.",
  alternates: { canonical: "/about/leadership" },
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        image="phahla-speaking"
        title="Leadership and board"
        lede="The Institution is led by its National Executive Council (NEC) and Executive Committee (EXCO), with expertise in law, finance, heritage, technology and community development, including representation from the Amakhosi network."
      />

      <section>
        <div className="wrap">
          <nav className="people-index" aria-label="Leaders on this page">
            {leadership.map((p) => (
              <a key={p.slug} href={`#${p.slug}`}>
                <span className="pi-photo">{p.photo && <Photo fill name={p.photo} sizes="56px" />}</span>
                <span>
                  <b>{p.name}</b>
                  <small>{p.role}</small>
                </span>
              </a>
            ))}
          </nav>

          <div className="people">
            {leadership.map((p) => (
              <article className="person" id={p.slug} key={p.slug}>
                <div className="portrait">{p.photo && <Photo name={p.photo} fill sizes="280px" />}</div>
                <div>
                  <h2 className="person-name">{p.name}</h2>
                  <div className="role">{p.role}</div>
                  <blockquote>
                    “{p.quote}”{p.quoteNote && <small>{p.quoteNote}</small>}
                  </blockquote>
                  {p.bio.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="wrap">
          <div className="section-head">
            <h2>Organisational structure</h2>
            <p className="lede">The offices of the National Executive Council and Executive Committee.</p>
          </div>
          <div className="org-grid">
            {structure.map((o) => (
              <article key={o.title}>
                <h3>{o.title}</h3>
                <dl>
                  {o.holders.map(([role, name]) => (
                    <div key={role}>
                      <dt>{role}</dt>
                      <dd>{name}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <h2>Executive members</h2>
          </div>
          <dl className="std-list exec-list">
            {executive.map((m) => (
              <div key={m.name}>
                <dt>{m.name}</dt>
                <dd className="role-meta">{m.role}</dd>
                <dd>{m.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CtaBand
            title="Work with our leadership"
            body="Traditional councils, partners and funders can request a meeting with the Institution."
            href="/contact?topic=council"
            label="Request a meeting"
          />
        </div>
      </section>
    </>
  );
}
