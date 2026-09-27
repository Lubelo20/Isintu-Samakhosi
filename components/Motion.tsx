"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Progressive enhancement: content is visible without JS. With JS, elements
// below the fold fade up as they enter the viewport. Honours reduced motion.
const REVEAL = [
  "section h2",
  "section .lede",
  ".section-head",
  ".prose > *",
  ".card",
  ".way",
  ".photo:not(.page-hero-media)",
  ".triad-grid article",
  ".values > div",
  ".person",
  ".check li",
  ".std-list > div",
  ".targets > div",
  ".steps li",
  ".never li",
  ".cta-band",
  ".explorer",
  ".masonry li",
  ".kv > div",
  ".provinces li",
  ".plain-list li",
  ".contact-list > div",
  ".pillars li",
  ".pillar-cards article",
  ".ethic-cards article",
  ".vm article",
  ".objectives li",
  ".people-index a",
  ".gov-glance article",
  ".gov-principles li",
  ".gov-frameworks article",
  ".gov-checks li",
  ".gov-reg > div",
  ".pillar-strip li",
  ".prog-story article",
  ".approach-cards article",
  ".prog-panels article",
  ".why-cards article",
  ".why-answer",
  ".quote-feature .wrap > figure",
  ".heritage-grid .photo",
  ".strategy-cards article",
  ".fund-points li",
  ".env-principles li",
  ".env-cards p",
  ".news-feature",
  ".research-cards article",
  ".aside-card",
  ".path-card",
  ".angel-steps li",
  ".volunteer-card",
  ".form-card",
].join(",");

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const start = performance.now();
  const dur = 1200;
  const tick = (t: number) => {
    const k = Math.min(1, (t - start) / dur);
    el.textContent = String(Math.round(target * (1 - Math.pow(1 - k, 3))));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function Motion() {
  const pathname = usePathname();

  // Header gains a shadow once the page scrolls.
  useEffect(() => {
    const header = document.querySelector("header.site");
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const main = document.getElementById("main");
    if (!main) return;

    const pending = new Set<HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          pending.delete(el);
          el.classList.add("in");
          if (el.dataset.count) countUp(el);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const seen = new WeakSet<Element>();
    const prepare = () => {
      const vh = window.innerHeight;
      main.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
        if (seen.has(el) || el.closest(".page-hero, .hero, .lightbox")) return;
        seen.add(el);
        if (reduce || el.getBoundingClientRect().top < vh * 0.92) return; // already on screen: leave as is
        // Stagger siblings that reveal together.
        const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.matches(REVEAL)) : [];
        el.style.setProperty("--d", `${Math.min(sibs.indexOf(el), 6) * 70}ms`);
        el.classList.add("reveal");
        pending.add(el);
        io.observe(el);
      });
      if (!reduce) {
        main.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          if (seen.has(el)) return;
          seen.add(el);
          io.observe(el);
        });
      }
    };

    prepare();
    // Pick up content rendered later (e.g. gallery filters), batched per frame.
    let queued = 0;
    const mo = new MutationObserver(() => {
      if (!queued) queued = requestAnimationFrame(() => ((queued = 0), prepare()));
    });
    mo.observe(main, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(queued);
      io.disconnect();
      mo.disconnect();
      // Never leave content hidden once we stop watching it.
      pending.forEach((el) => el.classList.remove("reveal"));
    };
  }, [pathname]);

  return null;
}
