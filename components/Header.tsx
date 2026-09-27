"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  // Menu state is tied to the path it was opened on, so everything closes on navigation.
  const [menuOn, setMenuOn] = useState<string | null>(null);
  const [sub, setSub] = useState<{ path: string; href: string } | null>(null);
  const open = menuOn === pathname;
  const openSub = sub?.path === pathname ? sub.href : null;

  const closeAll = () => {
    setMenuOn(null);
    setSub(null);
  };

  // Close on Escape and on clicks outside the header.
  useEffect(() => {
    if (!open && !openSub) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) closeAll();
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open, openSub]);

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className="site">
      <div ref={navRef} className={`wrap nav${open ? " open" : ""}`}>
        <Logo size={70} variant="shield" showName={false} />
        <ul id="menu">
          {mainNav.map((item) => {
            const expanded = openSub === item.href;
            const active = isCurrent(item.href) || item.children?.some((c) => isCurrent(c.href.split("#")[0]));
            return (
              <li key={item.href} className={[item.children && "has-sub", expanded && "expanded", item.href === "/" && "home-link"].filter(Boolean).join(" ") || undefined}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  data-active={active || undefined}
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <>
                    <button
                      type="button"
                      className="sub-btn"
                      aria-expanded={expanded}
                      aria-controls={`sub-${item.href.slice(1)}`}
                      aria-label={`${item.label} pages`}
                      onClick={() => setSub(expanded ? null : { path: pathname, href: item.href })}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <ul className="sub" id={`sub-${item.href.slice(1)}`}>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} aria-current={pathname === c.href ? "page" : undefined} onClick={closeAll}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
          <li className="menu-cta">
            <Link className="btn btn-gold" href="/get-involved" onClick={closeAll}>
              Support us
            </Link>
          </li>
        </ul>
        <Link className="btn btn-gold nav-cta" href="/get-involved">
          Support us
        </Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => (open ? closeAll() : setMenuOn(pathname))}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
            {open ? (
              <path d="M6 6l14 14M20 6 6 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 7h20M3 13h20M3 19h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}

// "shield" is the live site's header logo (public/images/logo-shield.png, from isintusamakhosi.org.za/logo.png).
// "emblem" is the gold mark from the live site's logo-dark.png, for dark backgrounds.
const logos = {
  shield: { src: "/images/logo-shield.png", ratio: 191 / 240 },
  badge: { src: "/images/logo-badge.png", ratio: 1 },
  emblem: { src: "/images/logo-emblem.png", ratio: 1 },
};

export function Logo({
  size = 44,
  variant = "badge",
  showName = true,
}: {
  size?: number;
  variant?: keyof typeof logos;
  showName?: boolean;
}) {
  const logo = logos[variant];
  return (
    <Link className="mark" href="/" aria-label="Isintu Samakhosi Institution home">
      <Image src={logo.src} alt="" width={Math.round(size * logo.ratio)} height={size} priority />
      {showName && (
        <span>
          <b>Isintu Samakhosi</b>
          <small>Institution NPC</small>
        </span>
      )}
    </Link>
  );
}
