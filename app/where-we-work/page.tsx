import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/Sections";
import { provinces } from "@/lib/site";

export const metadata: Metadata = {
  title: "Where we work",
  description: "Isintu Samakhosi works with chiefdoms and kingdoms across South Africa's nine provinces. See where our business chambers, councils and GBV centres are.",
  alternates: { canonical: "/where-we-work" },
};

// Only confirmed activity. No map pins without confirmed data (brief §7.6).
const confirmed: Partial<Record<(typeof provinces)[number], string>> = {
  "KwaZulu-Natal": "Head office in Winston Park. Umlazi Food Bank Programme. Events in Durban and the uMgungundlovu District.",
};

export default function WhereWeWorkPage() {
  return (
    <>
      <PageHero
        image="food-distribution-2"
        title="Where we work"
        lede="We work in partnership with chiefdoms and kingdoms across all nine provinces of South Africa. This page lists confirmed activity only and will grow as partnerships are confirmed."
      />
      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Nine provinces</h2>
          </div>
          <ul className="provinces">
            {provinces.map((p) => (
              <li key={p} className={confirmed[p] ? "active" : undefined}>
                <b>{p}</b>
                <span>{confirmed[p] ? "Active" : "To be confirmed"}</span>
              </li>
            ))}
          </ul>
          <p className="standards-note" style={{ marginTop: 28, marginBottom: 0 }}>
            We list only confirmed activity. More provinces will be added as partnerships with kingdoms, chiefdoms and
            traditional councils are confirmed.
          </p>
        </div>
      </section>
      <section className="surface">
        <div className="wrap split">
          <div>
            <h2>KwaZulu-Natal</h2>
          </div>
          <div>
            <div className="prose">
              <p>{confirmed["KwaZulu-Natal"]}</p>
            </div>
            <Photo name="food-distribution" sizes="(max-width: 820px) 100vw, 50vw" className="narrow" />
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <CtaBand title="Want us in your area?" body="Traditional councils and chiefdoms can request a business chamber or GBV centre." href="/contact?topic=council" label="Request a meeting" />
        </div>
      </section>
    </>
  );
}
