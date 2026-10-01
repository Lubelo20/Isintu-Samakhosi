import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icons";
import Link from "next/link";
import { NewsGrid } from "@/components/NewsGrid";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/Sections";
import { forthcoming, sortedNews, toCard } from "@/lib/news";

export const metadata: Metadata = {
  title: "News and insights",
  description: "Events, recognition and community updates from Isintu Samakhosi Institution.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const [featured, ...rest] = sortedNews.map(toCard);
  const categories = [...new Set(rest.map((n) => n.category))];

  return (
    <>
      <PageHero
        image="audience-mkri"
        title="News and insights"
        lede="Events, recognition and community updates from the Institution and the people behind it."
      />

      <section>
        <div className="wrap">
          <h2 className="sr-only">Latest story</h2>
          <Link className="news-feature" href={`/news/${featured.slug}`}>
            {featured.image && (
              <div className={`news-feature-media${featured.image.poster ? " poster" : ""}`}>
                <Image src={featured.image.src} alt="" fill placeholder={featured.image.blur} sizes="(max-width: 820px) 100vw, 50vw" priority />
              </div>
            )}
            <div className="news-feature-body">
              <span className="news-latest">Latest</span>
              <div className="news-meta">
                <span className="news-cat">{featured.category}</span>
                {featured.date && <time dateTime={featured.date}>{featured.dateLabel}</time>}
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <span className="btn btn-ink">Read the story</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="surface">
        <div className="wrap">
          <div className="section-head">
            <h2>More stories</h2>
          </div>
          <NewsGrid items={rest} categories={categories} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Research and policy</h2>
            <p className="lede">Ideas that build nations. These papers are in preparation and will be published here.</p>
          </div>
          <div className="research-cards">
            {forthcoming.map((f) => (
              <article key={f.title}>
                <div className="research-top">
                  <Icon name="research" size={36} />
                  <span className="soon">Coming soon</span>
                </div>
                <span className="news-cat">{f.category}</span>
                <h3>{f.title}</h3>
                <p>{f.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CtaBand
            title="Media enquiries"
            body="Journalists and broadcasters can contact us for interviews, comment and images."
            href="/contact?topic=media"
            label="Contact us"
          />
        </div>
      </section>
    </>
  );
}
