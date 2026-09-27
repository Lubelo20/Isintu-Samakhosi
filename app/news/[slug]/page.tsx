import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { P } from "@/components/Todo";
import { NewsCard } from "@/components/NewsGrid";
import { blurFor, formatDate, getNews, news, sizeFor, sortedNews, toCard } from "@/lib/news";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) return {};
  return {
    title: n.title,
    description: n.summary,
    alternates: { canonical: `/news/${n.slug}` },
    openGraph: { type: "article", title: n.title, description: n.summary, publishedTime: n.date ?? undefined },
  };
}

export default async function ArticlePage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) notFound();

  return (
    <>
      <PageHero title={n.title} crumb={{ href: "/news", label: "All news" }}>
        <div className="news-meta news-meta-hero">
          <span className="news-cat">{n.category}</span>
          {n.date && <time dateTime={n.date}>{formatDate(n.date)}</time>}
        </div>
      </PageHero>
      <section>
        <div className="wrap article-layout">
          <article className="article-main prose">
            {n.image && (
              <figure className={`photo article-figure${n.image.poster ? " poster" : ""}`}>
                <Image src={n.image.src} alt={n.image.alt} {...sizeFor(n.image.src)} placeholder={blurFor(n.image.src)} sizes="(max-width: 900px) 100vw, 720px" style={{ width: "100%", height: "auto" }} priority />
              </figure>
            )}
            <p className="article-lede">{n.summary}</p>
            {n.body.map((b) => (
              <P key={b} text={b} />
            ))}
          </article>
          <aside className="article-aside" aria-label="About this story">
            <div className="aside-card">
              <dl>
                <div><dt>Category</dt><dd>{n.category}</dd></div>
                {n.date && <div><dt>Date</dt><dd>{formatDate(n.date)}</dd></div>}
                <div><dt>Published by</dt><dd>{site.name}</dd></div>
              </dl>
              <Link className="btn btn-outline" href="/news">
                All news
              </Link>
            </div>
            <div className="aside-card aside-dark">
              <p>Want to support work like this?</p>
              <Link className="btn btn-gold" href="/get-involved">
                Get involved
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="surface" aria-labelledby="more-news">
        <div className="wrap">
          <div className="section-row">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2 id="more-news">More news</h2>
            </div>
            <Link className="btn btn-outline" href="/news">
              All news
            </Link>
          </div>
          <div className="cards news-cards">
            {sortedNews
              .filter((m) => m.slug !== n.slug)
              .slice(0, 3)
              .map((m) => (
                <NewsCard key={m.slug} n={toCard(m)} />
              ))}
          </div>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: n.title,
          description: n.summary,
          datePublished: n.date ?? undefined,
          image: n.image ? `${site.url}${n.image.src}` : undefined,
          publisher: { "@type": "NGO", name: site.name, url: site.url },
          mainEntityOfPage: `${site.url}/news/${n.slug}`,
        }}
      />
    </>
  );
}
