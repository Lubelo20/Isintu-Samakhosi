import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactList } from "@/components/Sections";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Isintu Samakhosi Institution about partnerships, donations, traditional council requests, volunteering or media. Winston Park, KwaZulu-Natal.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { topic } = await searchParams;
  return (
    <>
      <PageHero
        image="mkri-table" title="Talk to us" lede="We respond to partnership, donor and council enquiries within a few working days." />
      <section className="contact">
        <div className="wrap">
          <div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: 24 }}>Send an enquiry</h2>
            <ContactForm topic={typeof topic === "string" ? topic : undefined} />
          </div>
          <div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: 24 }}>Contact details</h2>
            <ContactList />
          </div>
        </div>
      </section>
    </>
  );
}
