import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, gbvPartners, gbvSteps } from "@/components/Sections";

export const metadata: Metadata = {
  title: "GBV centres",
  description:
    "The National GBV Centre Rollout: GBV centres inside traditional councils, backed by community User Groups, with accredited training for traditional leaders. 25 councils in year one.",
  alternates: { canonical: "/gbv-centres" },
};

// Update with confirmed progress from the client (CONTENT-CHECKLIST.md, item 6).
const COUNCILS_TARGET = 25;
const councilsReached: number | null = null;

export default function GbvPage() {
  return (
    <>
      <PageHero
        image="community-gathering"
        title="A GBV centre in every traditional council"
        lede="Traditional courts are the first place many people turn. We are giving them accredited training, referral pathways and a centre of support."
      >
        <div className="ctas">
          <Link className="btn btn-gold" href="/get-involved#sr-angel">
            Become an SR Angel
          </Link>
          <Link className="btn btn-outline" href="/contact?topic=council">
            Request a centre for your council
          </Link>
        </div>
      </PageHero>

      <section>
        <div className="wrap split">
          <div>
            <h2>Why it matters</h2>
          </div>
          <div className="prose">
            <p>
              South Africa has among the highest rates of gender-based violence in the world. Rural communities and traditional
              councils remain underserved, and traditional courts, the primary Ubuntu governance structures in many villages,
              lack accredited training and referral pathways.
            </p>
            <p>
              We are establishing GBV centres inside traditional councils across the country. Each centre is supported by a
              community User Group (UG), which acts as the eyes, ears and accountability mechanism of the Institution on the
              ground.
            </p>
          </div>
        </div>
      </section>

      <section className="gbv">
        <div className="wrap">
          <h2 style={{ marginBottom: 32 }}>Rollout progress</h2>
          <div className="tracker" aria-label={councilsReached === null ? "Progress not yet published" : `${councilsReached} of ${COUNCILS_TARGET} councils`}>
            <div className="tracker-head">
              <span>Traditional councils, year one</span>
              <b>{councilsReached === null ? "—" : councilsReached} of {COUNCILS_TARGET}</b>
            </div>
            <div className="tracker-bar" aria-hidden="true">
              {Array.from({ length: COUNCILS_TARGET }, (_, i) => (
                <span key={i} className={councilsReached !== null && i < councilsReached ? "on" : undefined} />
              ))}
            </div>
            {councilsReached === null && (
              <p className="tracker-note">Progress will be published here as traditional councils sign on to the rollout.</p>
            )}
          </div>
          <div className="targets" style={{ marginTop: 0 }}>
            <div><b data-count="25">25</b><span>traditional councils in year one</span></div>
            <div><b data-count="5">5</b><span>accredited courses for traditional leaders</span></div>
            <div><b data-count="8">8</b><span>control documents before any centre opens</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <h2>No centre opens until the groundwork is done</h2>
          </div>
          <div>
            <p className="lede" style={{ marginBottom: 20 }}>
              All eight pre-deployment control documents must be filed before a centre opens. The first four are:
            </p>
            <ol className="steps steps-light">
              {gbvSteps.map((s) => (
                <li key={s.title}>
                  <div>
                    <strong>{s.title}</strong>
                    <span>{s.body}</span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="steps-more">Plus four further control documents, all filed and checked before a centre opens its doors.</p>
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="wrap split">
          <div>
            <h2>The model</h2>
          </div>
          <dl className="values" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <dt>Centres inside traditional councils</dt>
              <dd>The council formally resolves to host the centre, so it is owned locally from day one.</dd>
            </div>
            <div>
              <dt>Community User Groups</dt>
              <dd>Local people who act as the eyes, ears and accountability mechanism of the Institution on the ground.</dd>
            </div>
            <div>
              <dt>Accredited training</dt>
              <dd>A 5-course accredited programme for traditional leaders.</dd>
            </div>
            <div>
              <dt>Phased national rollout</dt>
              <dd>Starting with 25 traditional councils in the first year.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <h2>Partners</h2>
          </div>
          <div className="prose">
            <p>The programme is delivered in partnership with {gbvPartners}.</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }} id="sr-angel">
        <div className="wrap">
          <CtaBand
            title="Become an SR Angel"
            body="Give through the Social Responsibility Angel programme and receive a Section 18A tax certificate for your donation."
            href="/get-involved#sr-angel"
            label="How to give"
          />
        </div>
      </section>
    </>
  );
}
