import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/Sections";
import { P } from "@/components/Todo";
import { getProgramme, programmes } from "@/lib/programmes";
import { pillars } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/our-work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgramme(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.summary,
    alternates: { canonical: `/our-work/${p.slug}` },
  };
}

const ruralSlugs = ["rural-fund", "rural-economic-development", "informal-mining-formalisation", "business-chambers"];

export default async function ProgrammePage({ params }: PageProps<"/our-work/[slug]">) {
  const { slug } = await params;
  const p = getProgramme(slug);
  if (!p) notFound();

  const idx = programmes.indexOf(p);
  const more = [1, 2, 3].map((n) => programmes[(idx + n) % programmes.length]);
  const checks = [p.pillars.consciousness, p.pillars.heritage, p.pillars.stewardship];
  const related =
    p.slug === "gbv-centre-rollout"
      ? { href: "/gbv-centres", label: "Read the full GBV centre rollout plan" }
      : ruralSlugs.includes(p.slug)
        ? { href: "/rural-development", label: "See our wider rural development approach" }
        : null;

  return (
    <>
      <PageHero title={p.name} lede={p.summary} crumb={{ href: "/our-work", label: "All programmes" }} image={p.image}>
        <div className="prog-hero-meta">
          <span className="prog-hero-tagline">{p.tagline}</span>
          <ul className="prog-chips">
            {p.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </PageHero>

      <section>
        <div className="wrap prog-story">
          <article className="prog-challenge">
            <h2 className="prog-label">The challenge</h2>
            {p.problem.map((t) => (
              <P key={t} text={t} />
            ))}
          </article>
          <article className="prog-approach">
            <h2 className="prog-label">Our approach</h2>
            {p.approach.map((t) => (
              <P key={t} text={t} />
            ))}
            {related && (
              <p>
                <Link className="text-link" href={related.href}>
                  {related.label}
                </Link>
              </p>
            )}
          </article>
        </div>
        {p.approachList && (
          <div className="wrap">
            <div className="approach-cards">
              {p.approachList.map((t) => {
                const [head, ...rest] = t.split(": ");
                const body = rest.join(": ");
                return (
                  <article key={t}>
                    <h3>{head}</h3>
                    <p>{body.charAt(0).toUpperCase() + body.slice(1)}</p>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="pillar-strip">
            <div className="pillar-strip-head">
              <h2>The Three Pillars check</h2>
              <span className="pillar-strip-note">How this programme answers each question</span>
            </div>
            <ul>
              {pillars.map((pl, i) => (
                <li key={pl.name}>
                  <span className="ps-name">
                    {pl.name} <small>{pl.zulu}</small>
                  </span>
                  <span className="ps-q ps-q-small">{pl.question}</span>
                  <div className="ps-a">
                    <P text={checks[i]} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="wrap">
          <div className="prog-panels">
            <article>
              <h2>Partners</h2>
              <ul>
                {p.partners.map((t) => (
                  <li key={t}>
                    <P text={t} />
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <h2>Targets and status</h2>
              <ul>
                {p.status.map((t) => (
                  <li key={t}>
                    <P text={t} />
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <CtaBand
            title={p.cta.label}
            body="Tell us about your organisation or council and we will be in touch."
            href={p.cta.href}
            label="Get in touch"
          />
        </div>
      </section>

      <section className="surface" aria-labelledby="more-programmes">
        <div className="wrap">
          <div className="section-row">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2 id="more-programmes">More programmes</h2>
            </div>
            <Link className="btn btn-outline" href="/our-work">
              All programmes
            </Link>
          </div>
          <div className="cards">
            {more.map((m) => (
              <Link className="card" href={`/our-work/${m.slug}`} key={m.slug}>
                {m.image && (
                  <div className="card-media">
                    <Photo fill name={m.image} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 380px" />
                  </div>
                )}
                <div className="card-body">
                  <div className="meta prog-tagline">{m.tagline}</div>
                  <h3>{m.name}</h3>
                  <span className="more">Explore programme</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
