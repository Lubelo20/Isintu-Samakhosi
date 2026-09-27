import { programmes } from "./programmes";

// Fixed facts from the brief (section 3). Do not change without client sign-off.
export const site = {
  url: "https://isintusamakhosi.org.za",
  name: "Isintu Samakhosi Institution",
  // TODO: The live site lists the legal name as "Sintu Samakhosi Institute NPC" with
  // "Isintu Samakhosi Institution" as the trading name. The brief says
  // "Isintu Samakhosi Institution NPC". Confirm with the client.
  legalName: "Isintu Samakhosi Institution NPC",
  companyType: "Non-Profit Company (Section 21)",
  reg: "2025/510829/08",
  npo: "285-310",
  pbo: "930073548",
  taxNumber: "9111068293",
  registered: "26 June 2025",
  financialYearEnd: "28/29 February",
  email: "info@isintusamakhosi.org.za",
  phone: "+27 76 800 8170",
  phoneHref: "tel:+27768008170",
  address: {
    street: "25 Roosevelt Road",
    locality: "Winston Park",
    region: "KwaZulu-Natal",
    postalCode: "3610",
    country: "ZA",
  },
  tagline: "Abantu, Ubuntu, Isintu",
  headline: "Reviving the power of African kingships",
  description:
    "A Non-Profit Company restoring the dignity, intellectual sovereignty and economic autonomy of African people through indigenous governance, cultural heritage and Ubuntu.",
} as const;

export const addressLine = `${site.address.street}, ${site.address.locality}, ${site.address.region}, ${site.address.postalCode}`;

export type NavLink = { href: string; label: string };
export type NavItem = NavLink & { children?: NavLink[] };

// Top menu mirrors the live site: Home, About Us, Our Work, Traditional Leadership,
// Rural Development, News, Get Involved. Dropdowns reach every other page.
export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    children: [
      { href: "/about", label: "Our story" },
      { href: "/about/leadership", label: "Leadership and board" },
      { href: "/about/governance", label: "Governance" },
      { href: "/where-we-work", label: "Where we work" },
      { href: "/gallery", label: "Gallery" },
      { href: "/transparency", label: "Transparency" },
    ],
  },
  {
    href: "/our-work",
    label: "Our Work",
    children: [
      { href: "/our-work", label: "All programmes" },
      ...programmes
        .filter((p) => p.slug !== "gbv-centre-rollout")
        .map((p) => ({ href: `/our-work/${p.slug}`, label: p.name })),
      { href: "/gbv-centres", label: "National GBV centres" },
    ],
  },
  { href: "/traditional-leadership", label: "Traditional Leadership" },
  { href: "/rural-development", label: "Rural Development" },
  { href: "/news", label: "News" },
  {
    href: "/get-involved",
    label: "Get Involved",
    children: [
      { href: "/get-involved", label: "Ways to get involved" },
      { href: "/get-involved#sr-angel", label: "Become an SR Angel" },
      { href: "/contact", label: "Contact us" },
    ],
  },
];

export const footerNav: NavLink[] = [
  ...mainNav.map(({ href, label }) => ({ href, label })),
  { href: "/gbv-centres", label: "GBV centres" },
  { href: "/gallery", label: "Gallery" },
  { href: "/where-we-work", label: "Where we work" },
  { href: "/transparency", label: "Transparency" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy notice" },
];

export const provinces = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "Northern Cape",
  "North West",
  "Western Cape",
] as const;

export const pillars = [
  {
    name: "Consciousness",
    zulu: "Ukwazi",
    question: "Does it build critical awareness and self-determination?",
    body: "The cultivation of critical awareness, decolonial thought and African epistemology, giving communities knowledge, voice and self-determination. All programmes must cultivate critical awareness of historical, socio-economic and systemic realities.",
  },
  {
    name: "Heritage",
    zulu: "Isintu",
    question: "Does it revitalise indigenous knowledge and Amakhosi governance?",
    body: "The active preservation, revitalisation and integration of African indigenous knowledge systems, Nguni cultural practice and the living heritage of the Amakhosi. The Amakhosi chieftaincy structure is affirmed as a sovereign living heritage institution central to all programme delivery.",
  },
  {
    name: "Stewardship",
    zulu: "Ubuntu",
    question: "Does it manage resources with accountability to future generations?",
    body: "Fiduciary, environmental and intergenerational responsibility over every resource entrusted to the Institution. All resources, whether financial, human, natural, cultural or digital, are managed with long-term sustainability, transparency and intergenerational accountability.",
  },
] as const;

export const roles = ["Potential partner or funder", "Traditional leader or council", "Donor or SR Angel", "Volunteer or researcher", "Media", "Other"] as const;
