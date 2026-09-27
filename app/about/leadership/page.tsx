import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/Sections";
import { leadership } from "@/lib/about";

export const metadata: Metadata = {
  title: "Leadership and board",
  description:
    "Meet the leadership of Isintu Samakhosi Institution: Founding President Andile Phahla, Deputy President Lindiwe Dzimbiri and National Spokesperson Prof. Nomagugu Ngobese.",
  alternates: { canonical: "/about/leadership" },
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        image="phahla-speaking"
        title="Leadership and board"
        lede="Governed by a Board of Directors with expertise in law, finance, heritage studies, community development and governance, including representation from the Amakhosi network."
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
