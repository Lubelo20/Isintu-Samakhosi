import type { Metadata, Viewport } from "next";
import { Public_Sans, Young_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Motion } from "@/components/Motion";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Public_Sans({ weight: ["400", "500", "600", "700"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: ${site.headline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: site.url,
    siteName: site.name,
    title: `${site.name}: ${site.headline}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
  viewportFit: "cover",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/images/logo-shield.png`,
  email: site.email,
  telephone: site.phone,
  slogan: site.tagline,
  description: site.description,
  foundingDate: "2025-06-26",
  nonprofitStatus: "Nonprofit",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  identifier: [
    { "@type": "PropertyValue", propertyID: "CIPC company registration", value: site.reg },
    { "@type": "PropertyValue", propertyID: "NPO number", value: site.npo },
    { "@type": "PropertyValue", propertyID: "PBO number", value: site.pbo },
  ],
  areaServed: { "@type": "Country", name: "South Africa" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={orgSchema} />
        <Motion />
      </body>
    </html>
  );
}
