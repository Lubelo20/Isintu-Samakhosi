import { photos } from "./photos";
import { posterBlur, posterSize } from "./poster-blur";

// News drawn only from client-supplied posters and photos (Sept 2026 content pack).
// Facts are limited to what the source material shows. Open questions are in CONTENT-CHECKLIST.md.

export type NewsItem = {
  slug: string;
  title: string;
  date: string | null; // ISO, null when unconfirmed
  category: "Event" | "Recognition" | "Community";
  summary: string;
  body: string[];
  image?: { src: string; alt: string; poster?: boolean };
};

export const news: NewsItem[] = [
  {
    slug: "youth-digital-empowerment-masterclass",
    title: "Youth digital empowerment and entrepreneurship master class",
    date: "2026-06-11",
    category: "Event",
    summary:
      "Khanyi Ndlela, the Institution's Secretary General (Youth Women), was guest speaker at a master class for young entrepreneurs in Durban.",
    body: [
      "Khanyi Ndlela, Secretary General (Youth Women) of the Institution, was the guest speaker at the Youth Digital Empowerment and Entrepreneurship Master Class, held at the Moses Kotane Research Institute in Durban on 11 June 2026.",
      "The master class, under the theme \"Empower. Equip. Connect. Succeed.\", brought private sector and young people together for conversations on skills development and future opportunities.",
    ],
    image: { src: "/images/posters/youth-digital-masterclass.jpg", alt: "Event poster for the Youth Digital Empowerment and Entrepreneurship Master Class, 11 June 2026, Durban", poster: true },
  },
  {
    slug: "liquor-traders-digital-transformation",
    title: "Skills development and digital transformation for liquor traders",
    date: "2026-05-28",
    category: "Event",
    summary:
      "President Andile Phahla joined the panel at a skills day for liquor traders, covering digital tools, compliance and financial management.",
    body: [
      "President Andile Phahla was a panellist at the Skills Development and Digital Transformation for Liquor Traders event, hosted with Sisonke Liquor Traders at the Moses Kotane Research Institute on 28 May 2026.",
      "Topics included business management, digital literacy and tools, e-commerce and online sales, digital marketing and social media, compliance and regulations, and data and financial management.",
      "The event forms part of the Institution's work in the township economy, helping local traders formalise and grow.",
    ],
    image: { src: "/images/posters/liquor-traders-digital.jpg", alt: "Event poster for Skills Development and Digital Transformation for Liquor Traders, 28 May 2026", poster: true },
  },
  {
    slug: "salon-beauty-wellness-business-day",
    title: "Salon, beauty and wellness business day",
    date: "2026-04-25",
    category: "Event",
    summary:
      "A business day on township inclusion and industry transformation for salon, beauty and wellness enterprises, with President Andile Phahla on the panel.",
    body: [
      "President Andile Phahla was a panellist at the Salon, Beauty and Wellness Business Day at the Moses Kotane Research Institute, 190 K.E. Masinga Road, Durban, on 25 April 2026.",
      "The day focused on driving township inclusion and industry transformation, bringing together owners and practitioners to shape the future of the industry.",
    ],
    image: { src: "/images/posters/salon-beauty-wellness-day.jpg", alt: "Event poster for the Salon, Beauty and Wellness Business Day, 25 April 2026", poster: true },
  },
  {
    slug: "lindiwe-dzimbiri-integrity-awards-nomination",
    title: "Deputy President nominated at the Integrity Awards",
    date: "2026-03-21",
    category: "Recognition",
    summary:
      "Lindiwe Dzimbiri was nominated in the Human Service and Development category of the 2026 Integrity Awards.",
    body: [
      "Deputy President and International Ambassador Lindiwe Dzimbiri was nominated in the Human Service and Development category of the Integrity Awards, held on 21 March 2026, in recognition of her contribution and impact.",
    ],
    image: { src: "/images/posters/integrity-awards-dzimbiri.jpg", alt: "Integrity Awards nomination card for Lindiwe Dzimbiri, Human Service and Development category", poster: true },
  },
  {
    slug: "dr-nomagugu-ngobese-honoured",
    title: "Board member Prof. Nomagugu Ngobese honoured",
    date: "2026-02-20",
    category: "Recognition",
    summary:
      "Board member and National Spokesperson Prof. Nomagugu Ngobese received an award in the Writers category at The Legends Experience.",
    body: [
      "Board member and National Spokesperson Prof. Nomagugu Ngobese was honoured in the Writers category at The Legends Experience in the uMgungundlovu District on 20 February 2026.",
      "Prof. Ngobese is widely recognised for her role in the revival of the Nomkhubulwane cultural practices and festivals, and for more than three decades of work on indigenous knowledge systems and Ubuntu-based values.",
    ],
    image: { src: "/images/photos/ngobese-award.jpg", alt: "Prof. Nomagugu Ngobese holding a glass award in front of an uMgungundlovu District Municipality backdrop" },
  },
  {
    slug: "umlazi-food-bank-programme",
    title: "Ubuntu in action: the Umlazi Food Bank Programme",
    date: null, // Date not supplied; see CONTENT-CHECKLIST.md
    category: "Community",
    summary:
      "Food parcels and fresh produce distributed to families in Umlazi through the Institution's food bank programme.",
    body: [
      "Under the banner \"Ubuntu in action\", the Umlazi Food Bank Programme distributed food and fresh produce to households in Umlazi.",
      "Its promise, in the programme's own words: \"Feeding hope. Restoring dignity. Building stronger communities.\"",
    ],
    image: { src: "/images/photos/umlazi-food-bank.jpg", alt: "Two people standing beside an Isintu Samakhosi Umlazi Food Bank Program banner with buckets of food ready for distribution" },
  },
];

export const sortedNews = [...news].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug);
}

export function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso + "T12:00:00").toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Research pieces announced as "coming soon" on the previous site.
export const forthcoming = [
  {
    category: "Thought leadership",
    title: "Why African kingships matter in 2026",
    summary: "A foundational piece setting out the Institution's thesis on the role of traditional governance in modern African development.",
  },
  {
    category: "Policy",
    title: "The co-op model: how Ubuntu can power rural economies",
    summary: "Exploring the business chamber and Rural Fund approach, a financial architecture designed for community ownership.",
  },
  {
    category: "Research",
    title: "From subsistence to sovereignty: rethinking informal mining",
    summary: "The case for community-based refinery centres and the formal integration of small-scale miners.",
  },
];

/** Tiny blurred preview for a news image, so its frame is never empty while loading. */
export function blurFor(src: string): `data:image/${string}` | undefined {
  const photo = Object.values(photos).find((p) => p.src === src);
  return (photo?.blur ?? posterBlur[src]) as `data:image/${string}` | undefined;
}

/** Intrinsic size of a news image, so its frame has the right shape before it loads. */
export function sizeFor(src: string) {
  const photo = Object.values(photos).find((p) => p.src === src);
  return photo ? { width: photo.width, height: photo.height } : (posterSize[src] ?? { width: 1400, height: 1400 });
}

/** Serialisable card data for news lists (keeps image data out of client bundles). */
export function toCard(n: NewsItem) {
  return {
    slug: n.slug,
    title: n.title,
    summary: n.summary,
    category: n.category,
    date: n.date,
    dateLabel: formatDate(n.date),
    image: n.image ? { src: n.image.src, poster: n.image.poster, blur: blurFor(n.image.src) } : undefined,
  };
}
