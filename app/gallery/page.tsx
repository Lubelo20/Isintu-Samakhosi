import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photographs of Isintu Samakhosi Institution at work: community programmes, Amakhosi and heritage, enterprise and skills events, and rural infrastructure.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        lede="The Institution at work: with communities, Amakhosi, entrepreneurs and young people across KwaZulu-Natal."
        image="amakhosi-gathering"
      />
      <section>
        <div className="wrap">
          <Gallery />
        </div>
      </section>
    </>
  );
}
