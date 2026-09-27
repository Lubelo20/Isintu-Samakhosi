import { BeadBand } from "./Bead";
import { Logo } from "./Header";
import Link from "next/link";
import { programmes } from "@/lib/programmes";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <>
      <BeadBand />
      <footer className="site">
        <div className="wrap">
          <div className="top">
            <div>
              <Logo size={40} variant="emblem" />
              <p>Revitalising African kingships and building self-sustaining rural economies rooted in indigenous governance and Ubuntu.</p>
            </div>
            <div className="footer-cols">
              <nav aria-label="Footer">
                {footerNav.map((l) => (
                  <Link key={l.href} href={l.href}>
                    {l.label}
                  </Link>
                ))}
              </nav>
              <nav aria-label="Focus areas" className="focus">
                <b>Focus areas</b>
                {programmes.map((p) => (
                  <Link key={p.slug} href={`/our-work/${p.slug}`}>
                    {p.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="legal">
            <span>© {new Date().getFullYear()} {site.legalName}</span>
            <span>
              Reg {site.reg}, NPO {site.npo}, PBO {site.pbo}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
