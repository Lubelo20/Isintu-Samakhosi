import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Isintu Samakhosi Institution collects, uses and protects personal information under POPIA.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy notice" lede="How we handle your personal information under the Protection of Personal Information Act (POPIA)." />
      <section>
        <div className="wrap">
          <div className="prose" style={{ margin: "0 auto" }}>
            <h2 style={{ marginTop: 0 }}>Who we are</h2>
            <p>
              {site.legalName} (“the Institution”), {addressLine}. Email {site.email}.
            </p>
            <h2>What we collect</h2>
            <p>
              When you send an enquiry through this website we collect the details you give us: your name, email address and,
              if you choose, your phone number, organisation, province, traditional authority and message. If you donate, we
              also keep the details needed to issue a Section 18A certificate.
            </p>
            <h2>Why we collect it</h2>
            <ul>
              <li>To respond to your enquiry.</li>
              <li>To process donations and issue Section 18A tax certificates.</li>
              <li>To meet our legal and reporting obligations as an NPO and PBO.</li>
            </ul>
            <p>We only process your information with your consent, which you give by ticking the consent box on our forms.</p>
            <h2>Sharing</h2>
            <p>
              We do not sell your information. We share it only with service providers who help us run this website and deliver
              email, and with authorities where the law requires it.
            </p>
            <h2>How long we keep it</h2>
            <p>We keep enquiry information only as long as needed to deal with it, and donor records for as long as tax law requires.</p>
            <h2>Your rights</h2>
            <p>
              You may ask to see, correct or delete the personal information we hold about you, or withdraw your consent, by
              emailing {site.email}. You may also complain to the Information Regulator of South Africa.
            </p>
            <h2>Information Officer</h2>
            <p>
              Under POPIA, the head of the Institution acts as its Information Officer. You can reach the Information Officer at{" "}
              <a className="text-link" href={`mailto:${site.email}?subject=${encodeURIComponent("For the attention of the Information Officer")}`}>
                {site.email}
              </a>
              , marking your message for their attention.
            </p>
            <p>
              If you are not satisfied with our response, you may contact the Information Regulator of South Africa at{" "}
              <a className="text-link" href="https://inforegulator.org.za" rel="noopener noreferrer">
                inforegulator.org.za
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
