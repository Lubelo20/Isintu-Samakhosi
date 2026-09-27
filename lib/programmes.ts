import type { PhotoKey } from "./photos";

// Programme content, drawn from the live site and client material. Strings starting
// with "TODO:" render as visible placeholders (see CONTENT-CHECKLIST.md).

export type Programme = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  explorer: string[];
  facts: string[];
  problem: string[];
  approach: string[];
  approachList?: string[];
  pillars: { consciousness: string; heritage: string; stewardship: string };
  partners: string[];
  status: string[];
  image?: PhotoKey;
  cta: { label: string; href: string };
};

export const programmes: Programme[] = [
  {
    slug: "business-chambers",
    name: "Business chambers",
    tagline: "The commercial arm of traditional leadership",
    summary:
      "Business chambers in all nine provinces, set up in direct partnership with chiefdoms and kingdoms, so communities become co-owners of their economy, not dependants.",
    explorer: [
      "We are establishing business chambers across all nine provinces, in direct partnership with chiefdoms and kingdoms. They give communities a formal structure for taking part in the economy.",
      "Each chamber runs on a co-operative model that builds a culture of saving and investment inspired by Ubuntu.",
    ],
    facts: ["All nine provinces", "Co-operative model", "Community co-ownership"],
    problem: [
      "Rural communities under traditional leadership have land, labour and enterprise, but no formal structure through which to take part in the wider economy. Too often, value created on communal land leaves the community.",
    ],
    approach: [
      "We are establishing business chambers across all nine provinces of South Africa, in direct partnership with chiefdoms and kingdoms. The chambers serve as the commercial arm of traditional leadership, creating formal structures through which communities can participate in the economy.",
      "Each chamber operates on a co-operative model, fostering an investment and savings culture inspired by Ubuntu. Communities become co-owners, not dependants.",
    ],
    pillars: {
      consciousness: "Activates commercial awareness of land value among chiefdoms, so they can manage their own economic futures.",
      heritage: "Chambers are formed with chiefdoms and kingdoms and sit under traditional leadership, not beside it.",
      stewardship: "A co-operative savings and investment model keeps ownership and returns inside the community.",
    },
    partners: ["Chiefdoms and kingdoms across South Africa's nine provinces", "Named partners will be announced as agreements are finalised"],
    status: ["Being established across all nine provinces, in direct partnership with chiefdoms and kingdoms"],
    image: "amakhosi-signing",
    cta: { label: "Bring a chamber to your council", href: "/contact?topic=council" },
  },
  {
    slug: "rural-fund",
    name: "The Rural Fund",
    tagline: "A financial vehicle, not a grant programme",
    summary:
      "A fund, built with credible financial institutions, that channels project and industrial finance into rural development through co-operative ownership.",
    explorer: [
      "With credible financial institutions, we are establishing a fund that channels project and industrial finance into rural development.",
      "Communities can save, invest and access venture capital through a structured platform, reducing reliance on government support.",
    ],
    facts: ["Savings and investment", "Venture capital access", "Institutional partners"],
    problem: [
      "Rural communities have historically been excluded from formal financial systems. Development finance tends to arrive as grants, which keeps communities dependent on government and donors rather than building their own capital.",
    ],
    approach: [
      "In partnership with credible financial institutions, Isintu Samakhosi is establishing a rural fund to channel project and industrial funding into rural development. The fund will let communities save, invest and access venture capital through a structured platform.",
      "This is not a grant programme. It is a financial vehicle designed to make communities self-sustaining, turning them into investors and co-owners of their economic future. Inspired by Ubuntu, it fosters a culture of saving, investing and collective wealth-building.",
    ],
    pillars: {
      consciousness: "Builds financial literacy and a culture of saving and investing.",
      heritage: "Capital flows through chiefdom structures to the communities they serve.",
      stewardship: "Co-operative ownership holds wealth in trust for present and future generations.",
    },
    partners: ["Credible financial institutions, to be named once agreements are public"],
    status: ["Being established, with a co-operative ownership structure"],
    image: "poultry-house",
    cta: { label: "Talk to us about investing", href: "/contact?topic=partner" },
  },
  {
    slug: "rural-economic-development",
    name: "Rural economic development",
    tagline: "Growth that starts in the village",
    summary:
      "Sustainable agriculture, local infrastructure and small business development, including farmer training, community marketplaces and microloans.",
    explorer: [
      "We support sustainable agriculture, better local infrastructure and small business development in rural areas.",
      "That includes training farmers in modern techniques, helping build community marketplaces and providing microloans to rural entrepreneurs.",
    ],
    facts: ["Farmer training", "Community marketplaces", "Microloans"],
    problem: [
      "Rural South Africa is not poor because it lacks resources. It is poor because the mechanisms for unlocking those resources have never been built for the people who live there.",
    ],
    approach: [
      "We do not deliver development to communities. We build the infrastructure that allows communities to develop themselves.",
    ],
    approachList: [
      "Land value activation: helping chiefdoms understand and commercialise the value of communal land, including agriculture, tourism, mining and renewable energy, on their own terms.",
      "Business chamber co-ops: co-operative chambers in each province that serve as the commercial engine of traditional communities.",
      "Agricultural modernisation: training farmers in modern techniques while respecting indigenous agricultural knowledge.",
      "Community marketplaces: physical and digital marketplaces where rural producers sell directly, cutting out exploitative middlemen.",
      "Microloans and savings: access to capital through community-owned financial structures.",
    ],
    pillars: {
      consciousness: "Farmers and entrepreneurs gain skills and market knowledge they control.",
      heritage: "Modern techniques are introduced alongside, not instead of, indigenous agricultural knowledge.",
      stewardship: "Environmental assessments and Ubuntu ecological principles: take only what is needed, restore what is used, protect what is sacred.",
    },
    partners: ["Traditional councils and rural communities", "Agricultural, training and finance partners will be announced as agreements are finalised"],
    status: ["Ongoing: farmer training, community marketplaces and microloans", "Progress figures will be published as programmes report"],
    image: "greenhouse-seedlings",
    cta: { label: "Partner on rural development", href: "/contact?topic=partner" },
  },
  {
    slug: "township-economy",
    name: "Township economy",
    tagline: "Wealth generated from within",
    summary:
      "Support for spaza shops, local service providers and community-owned retail: the businesses that keep money and jobs inside townships.",
    explorer: [
      "We support township enterprise, including spaza shops, local service providers and community-owned retail.",
      "These businesses are vital access points for goods and services, creating jobs and growth inside the community.",
    ],
    facts: ["Spaza shops", "Local services", "Community-owned retail"],
    problem: [
      "Township businesses are vital access points for goods and services, yet many operate without the skills, compliance support or market links they need to grow.",
    ],
    approach: [
      "We support the creation of township economies, including spaza shops, local service providers and community-owned retail. These small businesses generate employment and stimulate economic growth from within.",
      "In 2026 the Institution's President took part as a panellist in business days for township salon, beauty and wellness enterprises and for liquor traders, covering business management, digital tools, e-commerce, compliance and financial management.",
    ],
    pillars: {
      consciousness: "Practical business, digital and compliance knowledge for township traders.",
      heritage: "Township enterprise is grounded in Ubuntu: reciprocity, mutual support and wealth that stays in the community.",
      stewardship: "Community-owned retail keeps value circulating locally.",
    },
    partners: ["Moses Kotane Research Institute (event host)", "Wear Your Brand", "Sisonke Liquor Traders"],
    status: ["2026 business days held for salon, beauty and wellness enterprises and for liquor traders", "Further figures will be published as the programme reports"],
    image: "workshop-hall",
    cta: { label: "Support township enterprise", href: "/contact?topic=partner" },
  },
  {
    slug: "smme-coop-incubation",
    name: "SMME and co-op incubation",
    tagline: "From registration to market access",
    summary:
      "Incubation for small, medium and micro enterprises and co-operatives in rural communities, so they can formalise, grow and compete.",
    explorer: [
      "We incubate small, medium and micro enterprises and co-operatives within rural communities.",
      "Our support helps community businesses formalise, grow and compete.",
    ],
    facts: ["Business registration", "Growth support", "Market access"],
    problem: [
      "Community-based businesses often stay informal because the path from idea to registered, compliant, market-ready enterprise is unclear and expensive.",
    ],
    approach: [
      "We incubate small, medium and micro enterprises and co-operatives within rural communities. From business registration to market access, we provide the support structures that allow community-based businesses to formalise, grow and compete.",
    ],
    pillars: {
      consciousness: "Entrepreneurs learn to run, formalise and grow their own enterprises.",
      heritage: "Supports community-based cultural practitioners and traditional artisans in building sustainable enterprises.",
      stewardship: "Co-operatives spread ownership and accountability across members.",
    },
    partners: ["Incubation, mentoring and supplier-development partners will be announced as agreements are finalised"],
    status: ["Supporting community businesses from registration to market access"],
    image: "youth-session",
    cta: { label: "Volunteer as a mentor", href: "/contact?topic=volunteer" },
  },
  {
    slug: "informal-mining-formalisation",
    name: "Informal mining formalisation",
    tagline: "Mineral wealth that benefits the land it comes from",
    summary:
      "Bringing small-scale subsistence miners into the formal economy, with community-based refinery centres that keep benefits local long after a mine closes.",
    explorer: [
      "Rural communities sit on mineral wealth that is mostly exploited by outsiders or mined informally with no benefit to the community. We champion bringing small-scale miners into the formal economy.",
      "Community-based refinery centres let communities keep participating in the economy even after a mine is exhausted.",
    ],
    facts: ["Small-scale miners", "Community refineries", "Long-term benefit"],
    problem: [
      "Many rural communities in South Africa sit on significant mineral deposits that are largely exploited by outsiders or mined informally without economic benefit to the community. The informal mining sector, often overlooked or criminalised, is both an opportunity and a risk.",
    ],
    approach: [
      "Isintu Samakhosi works to formalise small-scale subsistence mining, creating legitimate employment for individuals and families.",
      "By establishing community-based refinery centres, we make sure mineral wealth benefits the people who live on the land, not just during extraction but long after mines are depleted.",
    ],
    pillars: {
      consciousness: "Miners and communities understand the value of the resources on their land.",
      heritage: "Land is treated as the physical expression of Isintu, the ancestral covenant between Abantu and their territory.",
      stewardship: "Refinery centres extend benefits beyond the life of a mine, and environmental assessments are required for all development programmes.",
    },
    partners: ["Mining, regulatory and refinery partners will be announced as agreements are finalised"],
    status: ["Championing the formal integration of small-scale miners and planning community-based refinery centres"],
    image: "amakhosi-gathering-field",
    cta: { label: "Discuss a mining partnership", href: "/contact?topic=partner" },
  },
  {
    slug: "ubuntu-data-bank",
    name: "Ubuntu Data Bank",
    tagline: "Data-driven decisions, sovereignty intact",
    summary:
      "Digital infrastructure, data intelligence and financial services for underserved communities, anchored by the Ubuntu Data Bank (UDB).",
    explorer: [
      "We connect underserved communities to digital infrastructure, data and financial services.",
      "The Ubuntu Data Bank is our central intelligence system, supporting evidence-based programme design, CSI tracking and beneficiary records while bridging traditional governance and modern decision-making.",
    ],
    facts: ["Digital access", "CSI tracking", "Evidence-based design"],
    problem: [
      "Underserved communities lack access to digital infrastructure, data and financial services, and development decisions about them are often made without reliable evidence or their consent.",
    ],
    approach: [
      "We facilitate access to digital infrastructure, data intelligence and financial services. The Ubuntu Data Bank (UDB) is the Institution's central operational intelligence system, supporting evidence-based programme design, CSI tracking, beneficiary data management and continuous improvement.",
      "Through digital platforms, we bridge traditional governance structures and modern data-driven decision-making, so communities benefit from technology without compromising their sovereignty.",
    ],
    pillars: {
      consciousness: "Communities and councils see the evidence behind decisions that affect them.",
      heritage: "Amakhosi governance networks identify and verify community needs.",
      stewardship: "Communities benefit from technology without compromising their sovereignty.",
    },
    partners: ["Technology and data partners will be announced as agreements are finalised"],
    status: ["The Institution's central operational intelligence system for programme design, CSI tracking and beneficiary data"],
    image: "audience-mkri",
    cta: { label: "Partner on digital infrastructure", href: "/contact?topic=partner" },
  },
  {
    slug: "gbv-centre-rollout",
    name: "National GBV centre rollout",
    tagline: "Accredited support inside traditional councils",
    summary:
      "GBV centres inside traditional councils nationwide, each backed by a community User Group, with accredited training for traditional leaders.",
    explorer: [
      "We are establishing GBV centres in traditional councils nationwide, each supported by a community User Group.",
      "The programme includes accredited training for traditional leaders and the SR Angel donor programme with Section 18A tax benefits.",
    ],
    facts: ["25 councils in year one", "5-course training", "Section 18A"],
    problem: [
      "South Africa has among the highest rates of gender-based violence in the world. Rural communities and traditional councils remain underserved, and traditional courts lack accredited training and referral pathways.",
    ],
    approach: [
      "We are establishing GBV centres in traditional councils across the country, each supported by a community User Group. See the GBV centres page for the full rollout plan.",
    ],
    pillars: {
      consciousness: "Accredited training for traditional leaders on GBV response.",
      heritage: "Centres sit inside traditional councils, which formally resolve to host them.",
      stewardship: "Eight control documents must be filed before any centre opens.",
    },
    partners: [
      "DBT Studies",
      "Accredited GBV curriculum specialists",
      "SABC 1",
      "Department of Social Development",
      "Department of Women, Youth and Persons with Disabilities",
    ],
    status: ["Phased national rollout targeting 25 traditional councils in year one."],
    image: "community-gathering",
    cta: { label: "See the rollout plan", href: "/gbv-centres" },
  },
];

export function getProgramme(slug: string) {
  return programmes.find((p) => p.slug === slug);
}
