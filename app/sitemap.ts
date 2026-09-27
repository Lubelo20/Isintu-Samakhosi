import type { MetadataRoute } from "next";
import { news } from "@/lib/news";
import { programmes } from "@/lib/programmes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/about/leadership", "/about/governance", "/our-work", "/traditional-leadership", "/rural-development", "/where-we-work", "/gbv-centres", "/news", "/gallery", "/get-involved", "/transparency", "/contact", "/privacy"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...programmes.map((p) => ({ url: `${site.url}/our-work/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...news.map((n) => ({ url: `${site.url}/news/${n.slug}`, lastModified: n.date ?? undefined, priority: 0.5 })),
  ];
}
