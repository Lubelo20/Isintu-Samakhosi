import Link from "next/link";
import type { ReactNode } from "react";
import type { PhotoKey } from "@/lib/photos";
import { Photo } from "./Photo";

type Props = {
  title: string;
  lede?: ReactNode;
  crumb?: { href: string; label: string };
  image?: PhotoKey;
  children?: ReactNode;
};

export function PageHero({ title, lede, crumb, image, children }: Props) {
  return (
    <>
      <div className={`page-hero${image ? " has-image" : ""}`}>
        <div className="wrap">
          <div className="page-hero-copy">
            {crumb && (
              <Link className="crumb" href={crumb.href}>
                ← {crumb.label}
              </Link>
            )}
            <h1>{title}</h1>
            {lede && <p>{lede}</p>}
            {children}
          </div>
          {image && <Photo name={image} fill className="page-hero-media" sizes="(max-width: 820px) 100vw, 45vw" priority />}
        </div>
      </div>
    </>
  );
}
