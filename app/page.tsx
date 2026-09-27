import Link from "next/link";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/Sections";
import { NewsCard } from "@/components/NewsGrid";
import { sortedNews, toCard } from "@/lib/news";
import type { PhotoKey } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

// The home page introduces the Institution and routes visitors onward.
// Detail lives on its own page: About Us, Our Work, GBV centres, Get Involved, Contact.
const focusAreas: { title: string; body: string; href: string; image: PhotoKey }[] = [
  {
    title: "Traditional leadership",
    body: "Restoring Amakhosi as functional pillars of community life, not ceremonial figures.",
    href: "/traditional-leadership",
    image: "amakhosi-signing",
  },
  {
    title: "Rural development",
    body: "Building the infrastructure that lets rural communities develop themselves.",
    href: "/rural-development",
    image: "greenhouse-seedlings",
  },
  {
    title: "Business chambers and the Rural Fund",
    body: "Co-operative chambers and a rural fund that make communities co-owners, not dependants.",
    href: "/our-work/business-chambers",
    image: "poultry-house",
  },
  {
    title: "Township economy and SMMEs",
    body: "Helping spaza shops, co-ops and small enterprises formalise, grow and compete.",
    href: "/our-work/township-economy",
    image: "workshop-hall",
  },
  {
    title: "Informal mining formalisation",
    body: "Mineral wealth that benefits the communities who live on the land.",
    href: "/our-work/informal-mining-formalisation",
    image: "amakhosi-gathering-field",
  },
  {
    title: "National GBV centres",
    body: "Accredited GBV support inside traditional councils, backed by community User Groups.",
    href: "/gbv-centres",
    image: "community-gathering",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="triad-line">{site.tagline}</div>
            <h1>{site.headline}</h1>
            <p>
              We restore the dignity, intellectual sovereignty and economic autonomy of African people, through indigenous
              governance, cultural heritage and the living philosophy of Ubuntu.
            </p>
            <div className="ctas">
              <Link className="btn btn-gold" href="/about">
                About us
              </Link>
              <Link className="btn btn-outline" href="/our-work">
                Our work
              </Link>
            </div>
          </div>
          <div className="beadpanel hero-photo">
            <Photo fill name="amakhosi-gathering" sizes="(max-width: 820px) 100vw, 42vw" priority />
            <div className="band band-gold" role="presentation" />
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="wrap">
          <h2>
            Not charity.<span>Infrastructure.</span>
          </h2>
          <div>
            <p>
              Isintu Samakhosi Institution is a Non-Profit Company building the economic, institutional and cultural
              infrastructure that lets rural communities generate their own wealth and govern their own affairs.
            </p>
            <p>
              We work in partnership with chiefdoms and kingdoms across all nine provinces of South Africa. Communities become
              co-owners of their economic future, not dependants.
            </p>
            <p style={{ marginTop: 28 }}>
              <Link className="btn btn-ink" href="/about">
                Read our story
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="surface" aria-labelledby="focus">
        <div className="wrap">
          <div className="section-row">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2 id="focus">What we do</h2>
              <p className="lede">Our key focus areas, each tested against the Three Founding Pillars.</p>
            </div>
            <Link className="btn btn-outline" href="/our-work">
              All programmes
            </Link>
          </div>
          <div className="cards">
            {focusAreas.map((f) => (
              <Link className="card" href={f.href} key={f.href}>
                <div className="card-media">
                  <Photo fill name={f.image} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 380px" />
                </div>
                <div className="card-body">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                  <span className="more">Learn more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="gbv gbv-teaser" aria-labelledby="gbv-teaser">
        <div className="wrap">
          <div>
            <h2 id="gbv-teaser">A GBV centre in every traditional council</h2>
            <p>
              Accredited GBV support inside traditional councils, each backed by a community User Group. No centre opens until
              the groundwork is done.
            </p>
            <div className="ctas">
              <Link className="btn btn-gold" href="/gbv-centres">
                See the rollout plan
              </Link>
              <Link className="btn btn-ghost" href="/get-involved#sr-angel">
                Become an SR Angel
              </Link>
            </div>
          </div>
          <div className="targets">
            <div><b data-count="25">25</b><span>traditional councils in year one</span></div>
            <div><b data-count="5">5</b><span>accredited courses for traditional leaders</span></div>
            <div><b data-count="8">8</b><span>control documents before any centre opens</span></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="in-action">
        <div className="wrap">
          <div className="section-row">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2 id="in-action">Ubuntu in action</h2>
              <p className="lede">With communities, Amakhosi, entrepreneurs and young people.</p>
            </div>
            <Link className="btn btn-outline" href="/gallery">
              View gallery
            </Link>
          </div>
          <div className="mosaic">
            <Photo fill className="m-a" name="umlazi-food-bank" caption="Umlazi Food Bank Programme" sizes="(max-width: 820px) 100vw, 45vw" />
            <Photo fill className="m-b" name="inkosi-meeting" sizes="(max-width: 820px) 50vw, 35vw" />
            <Photo fill className="m-c" name="poultry-house-interior" sizes="(max-width: 820px) 50vw, 25vw" />
            <Photo fill className="m-c" name="heritage-museum-group" sizes="(max-width: 820px) 50vw, 25vw" />
            <Photo fill className="m-b" name="youth-session" sizes="(max-width: 820px) 50vw, 35vw" />
          </div>
        </div>
      </section>

      <section className="surface" aria-labelledby="latest-news">
        <div className="wrap">
          <div className="section-row">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2 id="latest-news">Latest news</h2>
              <p className="lede">Events, recognition and community updates.</p>
            </div>
            <Link className="btn btn-outline" href="/news">
              All news
            </Link>
          </div>
          <div className="cards news-cards">
            {sortedNews.slice(0, 3).map((n) => (
              <NewsCard key={n.slug} n={toCard(n)} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <CtaBand
            title="Join the movement for rural prosperity"
            body="Donors, companies, traditional councils and volunteers all have a place in this work."
            href="/get-involved"
            label="Get involved"
          />
        </div>
      </section>
    </>
  );
}
