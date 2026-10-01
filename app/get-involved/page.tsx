import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { ContactList } from "@/components/Sections";
import { site } from "@/lib/site";
import { ContactForm } from "../contact/ContactForm";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Give as an SR Angel with Section 18A tax benefits, fund a programme through CSI or ESD, bring us to your council, or volunteer your skills.",
  alternates: { canonical: "/get-involved" },
};

const paths = [
  {
    href: "#sr-angel",
    title: "Donors and supporters",
    body: "Give to the GBV centre rollout as an SR Angel and receive a Section 18A tax certificate.",
    cta: "Give",
    icon: <Icon name="donors" size={44} />,
  },
  {
    href: "#partners",
    title: "Partners and funders",
    body: "Direct CSI or ESD budget into programmes that build rural and township economies.",
    cta: "Partner",
    icon: <Icon name="partnerships" size={44} />,
  },
  {
    href: "#councils",
    title: "Traditional councils",
    body: "Request a business chamber or GBV centre for your community. Built with you, not imposed.",
    cta: "Connect",
    icon: <Icon name="councils" size={44} />,
  },
  {
    href: "#volunteer",
    title: "Volunteers and researchers",
    body: "Share your skills in finance, law, agriculture, technology and research with community enterprises.",
    cta: "Volunteer",
    icon: <Icon name="volunteers" size={44} />,
  },
];

const programmeLinks = [
  { href: "/our-work/business-chambers", label: "Business chambers" },
  { href: "/our-work/rural-fund", label: "The Rural Fund" },
  { href: "/our-work/smme-coop-incubation", label: "SMME and co-op incubation" },
  { href: "/our-work/gbv-centre-rollout", label: "GBV centre rollout" },
];

const skills = ["Community development", "Agriculture", "Finance", "Law", "Technology", "Research"];

const safeguarding = ["Mandatory induction", "Safeguarding training", "Signed Code of Conduct", "Signed PSEA policy"];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        image="youth-group"
        title="Be part of the movement"
        lede="There are many ways to support the restoration of African self-governance and rural prosperity. Find the path that fits you."
      >
        <div className="ctas">
          <Link className="btn btn-gold" href="#sr-angel">
            Give
          </Link>
          <Link className="btn btn-outline" href="#get-in-touch">
            Get in touch
          </Link>
        </div>
      </PageHero>

      <div className="trust-badges">
        <div className="wrap">
          <span>
            <b>Registered NPO</b> {site.npo}
          </span>
          <span>
            <b>Public Benefit Organisation</b> {site.pbo}
          </span>
          <span>
            {/* 18A scope still to be confirmed (CONTENT-CHECKLIST.md, item 2). */}
            <b>Section 18A</b> tax certificates
          </span>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Choose your path</h2>
            <p className="lede">Four ways to take part. Pick one to jump to the details.</p>
          </div>
          <div className="path-cards">
            {paths.map((p) => (
              <a key={p.href} className="path-card" href={p.href}>
                <span className="gov-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <span className="more">{p.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="surface gi-section" id="sr-angel">
        <div className="wrap gi-split">
          <div>
            <h2>For donors and supporters</h2>
            <div className="prose">
              <p>
                Every contribution strengthens the movement. Your support funds farmer training, business incubation, cultural
                preservation and the infrastructure that lets rural communities govern their own prosperity.
              </p>
              <p>
                We are a registered Public Benefit Organisation (PBO {site.pbo}). Qualifying donations receive a Section 18A tax
                certificate.
              </p>
            </div>
          </div>
          <div className="pillar-strip angel-card">
            <span className="fund-kicker">Social Responsibility Angel</span>
            <h3>Become an SR Angel</h3>
            <p>Fund the National GBV Centre Rollout: centres inside traditional councils, community User Groups and accredited training for traditional leaders.</p>
            <ol className="angel-steps">
              <li>
                <b>Get in touch</b>
                <span>Tell us how you would like to give, as an individual or a company.</span>
              </li>
              <li>
                <b>Make your donation</b>
                <span>We send you the donation details for your gift.</span>
              </li>
              <li>
                <b>Receive your 18A certificate</b>
                <span>For qualifying donations, to claim your tax deduction.</span>
              </li>
            </ol>
            <Link className="btn btn-gold" href="/contact?topic=donor">
              Enquire about giving
            </Link>
          </div>
        </div>
      </section>

      <section className="gi-section" id="partners">
        <div className="wrap about-intro">
          <div>
            <h2 style={{ marginBottom: 20 }}>For partners and funders</h2>
            <div className="prose">
              <p>
                We are looking for strategic partners who share our vision of community-led development: financial institutions,
                government departments, development agencies and private companies.
              </p>
              <p>Direct your CSI or ESD budget into the programmes that match your mandate, with transparent reporting.</p>
            </div>
            <div className="link-chips">
              {programmeLinks.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 24 }}>
              <Link className="btn btn-ink" href="/contact?topic=partner">
                Start a partnership
              </Link>
            </p>
          </div>
          <Photo name="partner-stand" className="about-intro-photo" sizes="(max-width: 820px) 100vw, 40vw" />
        </div>
      </section>

      <section className="bg-photo-section gi-section" id="councils">
        <div className="bg-photo" aria-hidden="true">
          <Photo fill name="amakhosi-signing" sizes="100vw" />
        </div>
        <div className="wrap rd-feature">
          <div>
            <h2>For traditional leaders</h2>
            <p className="lede">
              If you are an inkosi, induna or member of a traditional council, we want to work with you. Our programmes are built in
              partnership with chiefdoms, not imposed on them.
            </p>
          </div>
          <Link className="btn btn-gold" href="/contact?topic=council">
            Connect your community
          </Link>
        </div>
      </section>

      <section className="gi-section" id="volunteer">
        <div className="wrap gi-split">
          <div>
            <h2>For volunteers and researchers</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              We welcome people with skills in these areas:
            </p>
            <ul className="skill-chips">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p style={{ marginTop: 24 }}>
              <Link className="btn btn-ink" href="/contact?topic=volunteer">
                Offer your skills
              </Link>
            </p>
          </div>
          <div className="volunteer-card">
            <h3>Before you start</h3>
            <p>Every volunteer completes these steps as a condition of engagement.</p>
            <ul className="gov-checks gov-checks-single">
              {safeguarding.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="surface gi-section" id="get-in-touch">
        <div className="wrap gi-contact">
          <div className="form-card">
            <h2>Get in touch</h2>
            <p className="lede">Tell us how you would like to be involved and we will respond within a few working days.</p>
            <ContactForm />
          </div>
          <div className="contact-aside">
            <h2>Contact details</h2>
            <ContactList />
            <p className="standards-note" style={{ textAlign: "left", marginTop: 24, marginBottom: 0 }}>
              Accountable by design.{" "}
              <Link className="text-link" href="/about/governance">
                How we are governed
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
