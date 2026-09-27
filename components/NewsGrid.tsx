"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type NewsCardData = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string | null;
  dateLabel: string;
  image?: { src: string; poster?: boolean; blur?: `data:image/${string}` };
};

export function NewsCard({ n }: { n: NewsCardData }) {
  return (
    <Link className="card news-card" href={`/news/${n.slug}`}>
      {n.image && (
        <div className={`card-media${n.image.poster ? " poster" : ""}`}>
          <Image src={n.image.src} alt="" fill placeholder={n.image.blur} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 380px" />
        </div>
      )}
      <div className="card-body">
        <div className="news-meta">
          <span className="news-cat">{n.category}</span>
          {n.date && <time dateTime={n.date}>{n.dateLabel}</time>}
        </div>
        <h3>{n.title}</h3>
        <p>{n.summary}</p>
        <span className="more">Read more</span>
      </div>
    </Link>
  );
}

// Filterable grid of news cards. Data is prepared on the server.
export function NewsGrid({ items, categories }: { items: NewsCardData[]; categories: string[] }) {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? items : items.filter((n) => n.category === filter);
  return (
    <>
      <div className="chips" role="group" aria-label="Filter news">
        {["All", ...categories].map((c) => (
          <button key={c} type="button" className="chip" aria-pressed={filter === c} onClick={() => setFilter(c)}>
            {c}
            <span>{c === "All" ? items.length : items.filter((n) => n.category === c).length}</span>
          </button>
        ))}
      </div>
      <div className="cards news-cards" aria-live="polite">
        {shown.map((n) => (
          <NewsCard key={n.slug} n={n} />
        ))}
      </div>
    </>
  );
}
