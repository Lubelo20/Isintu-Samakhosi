import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <PageHero title="We could not find that page" lede="It may have moved when we rebuilt the website.">
      <div className="ctas">
        <Link className="btn btn-gold" href="/">
          Go to the home page
        </Link>
        <Link className="btn btn-outline" href="/contact">
          Contact us
        </Link>
      </div>
    </PageHero>
  );
}
