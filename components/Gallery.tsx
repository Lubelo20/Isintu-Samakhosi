"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryGroups } from "@/lib/gallery";
import { photos, type PhotoKey } from "@/lib/photos";

type Item = { key: PhotoKey; group: string };
const all: Item[] = galleryGroups.flatMap((g) => g.photos.map((key) => ({ key, group: g.id })));

export function Gallery() {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const items = filter === "all" ? all : all.filter((i) => i.group === filter);
  const current = index === null ? null : items[index];

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  const step = (n: number) => setIndex((i) => (i === null ? i : (i + n + items.length) % items.length));

  return (
    <>
      <div className="chips" role="group" aria-label="Filter photos">
        {[{ id: "all", label: "All" }, ...galleryGroups].map((g) => (
          <button key={g.id} type="button" className="chip" aria-pressed={filter === g.id} onClick={() => setFilter(g.id)}>
            {g.label}
            <span>{g.id === "all" ? all.length : galleryGroups.find((x) => x.id === g.id)!.photos.length}</span>
          </button>
        ))}
      </div>

      <ul className="masonry" aria-live="polite">
        {items.map((it, i) => {
          const p = photos[it.key];
          return (
            <li key={it.key}>
              <button type="button" className="tile" onClick={() => setIndex(i)} aria-label={`View larger: ${p.alt}`}>
                <Image src={p.src} alt={p.alt} width={p.width} height={p.height} placeholder={p.blur} sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 380px" />
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        {current && (
          <figure>
            <Image
              key={current.key}
              src={photos[current.key].src}
              alt={photos[current.key].alt}
              width={photos[current.key].width}
              height={photos[current.key].height}
              sizes="90vw"
            />
            <figcaption>
              <span>{photos[current.key].alt}</span>
              <span className="count">
                {index! + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="lb-btn lb-close" onClick={() => setIndex(null)} aria-label="Close">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M5 5l12 12M17 5 5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
        <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="Previous photo">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M14 4 7 11l7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label="Next photo">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="m8 4 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </dialog>
    </>
  );
}
