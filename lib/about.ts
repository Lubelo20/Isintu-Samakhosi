// Content for the About Us section: /about, /about/leadership, /about/governance.
import type { PhotoKey } from "./photos";

export const objectives = [
  "Conduct research, advocacy and education focused on African heritage, indigenous governance and economic emancipation.",
  "Preserve and promote indigenous knowledge systems, Nguni cultural practices and the living heritage of the Amakhosi.",
  "Develop leadership pipelines grounded in ethical governance, Ubuntu economics and the Three Founding Pillars.",
  "Run community development programmes addressing systemic inequality in township, village and rural economies.",
  "Act as a think-tank and policy platform aligned with Ubuntu philosophy, the NDP 2030 and Pan-African development frameworks.",
  "Facilitate access to digital infrastructure, data intelligence and financial services for underserved communities.",
];

export const ethics = [
  ["Integrity", "Acting with honesty, transparency and consistency, whether observed or not."],
  ["Dignity", "Treating every person with unconditional respect, regardless of gender, age, ethnicity, religion, disability or status."],
  ["Accountability", "Taking responsibility for our actions, decisions and their consequences for communities and stakeholders."],
  ["Impartiality", "Providing assistance based solely on need, without discrimination or political calculation."],
  ["Confidentiality", "Protecting personal and sensitive information entrusted to us by communities, partners and beneficiaries."],
  ["Stewardship", "Managing all resources with care, efficiency, intergenerational responsibility and transparency."],
];

export type Person = {
  name: string;
  role: string;
  photo?: PhotoKey;
  bio: string[];
  quote: string;
  slug: string;
  summary: string;
  quoteNote?: string;
};

export const leadership: Person[] = [
  {
    name: "Andile Sizwe Phahla",
    slug: "andile-phahla",
    summary: "Businessman, philanthropist and institution-builder with more than 20 years advancing dignity and development in KwaZulu-Natal and beyond.",
    role: "Founding President and Director",
    photo: "phahla-portrait",
    bio: [
      "Andile Sizwe Phahla is a businessman, philanthropist and institution-builder with more than 20 years of experience advancing dignity, opportunity and sustainable development in underserved communities in KwaZulu-Natal, Southern Africa and beyond.",
      "His leadership began in youth league structures, rising to Regional Secretary in eThekwini, Councillor in the eThekwini Municipality, Secretary of the Minority Party Block, Provincial Secretary, NEC member and Special Advisor to a trade union president. At bilateral level he served as Treasurer of the Afri Development Fund, a South Africa–Botswana partnership launched in Botswana to address matters of key economic and development importance, anchoring his work in continental advancement and cross-border financial architecture.",
      "Through the Andile Phahla Foundation he adopted Happy Hours School, a special-needs school in Hammarsdale, and launched Operation Vusa Ithemba, an annual school shoe drive for underprivileged learners.",
      "As Founding President he promotes the integration of traditional leadership structures, modern enterprise and technology as catalysts for village-based economies. A spiritual leader and practitioner of indigenous knowledge systems, he advocates for Ubuntu principles in leadership, economic empowerment and social development.",
    ],
    quote: "This is not a career. It is a calling.",
  },
  {
    name: "Lindiwe Cathrine Dzimbiri",
    slug: "lindiwe-dzimbiri",
    summary: "Royal-born leader of the Dzimbiri Clan who leads the Institution's engagement with Amakhosi, traditional councils and royal houses.",
    role: "Deputy President and International Ambassador",
    photo: "dzimbiri-portrait",
    bio: [
      "Lindiwe Cathrine Dzimbiri is a royal-born leader from the Dzimbiri Clan royal lineage who carries the active duty of Inkosikazi: a living responsibility to preserve cultural identity, guide ethical leadership and bridge heritage and modern institutions. Within Nguni tradition, women of royal standing are custodians of lineage, advisors in governance and anchors of social stability. She embodies umthombo wesizwe, the source of the nation.",
      "Over two decades as a paramedic, firefighter and company commander built her capability in command under pressure and community-centred crisis management.",
      "She founded a non-profit focused on youth and women's empowerment, has supported more than 500 business developments through township and rural programmes, and has helped more than 700 entrepreneurs reach markets and meet compliance requirements.",
      "She leads the Institution's indigenous leadership alignment, engaging directly with Amakhosi, traditional councils and royal houses, and represents the Institution on global, African and traditional platforms, positioning Ubuntu as a scalable model for ethical governance and building cross-border partnerships that channel international investment toward community-owned development.",
    ],
    quote: "She does not lead from title. She leads from duty.",
  },
  {
    name: "Prof. Nomagugu Patience Ngobese",
    slug: "nomagugu-ngobese",
    summary: "Cultural leader and educator known for reviving the Nomkhubulwane cultural practices, with three decades of work on indigenous knowledge.",
    role: "Board member and National Spokesperson",
    photo: "ngobese-portrait",
    bio: [
      "Prof. Nomagugu Patience Ngobese is a cultural leader, educator and activist whose work spans more than three decades of advancing cultural inclusion, indigenous knowledge systems and Ubuntu-based values. She is a Board Member for Ubuntu Heritage Governance, National Spokesperson for Ubuntuology and a Royal Council Endorsed Leader.",
      "She is widely recognised for her role in the revival of the Nomkhubulwane cultural practices and festivals, which reawakened spiritual and cultural traditions in communities across KwaZulu-Natal and beyond.",
      "Within the Institution she anchors the work in credible, community-endorsed cultural authority, advances a clear national narrative on Ubuntu as a living standard, supports cultural practitioners and traditional artisans in building sustainable enterprises, and champions women-led cultural enterprise.",
      "As a Royal Council Endorsed Leader, her endorsement by the Amakhosi and traditional councils gives the Institution the credibility to work within indigenous governance frameworks, so that programmes are culturally appropriate and community-endorsed. Her voice has featured on Ukhozi FM, SABC 1, e.tv and the BBC.",
    ],
    quote: "Akukhona ukuhlakanipha kwami, abangithumile.",
    quoteNote: "It is not my wisdom, but those who sent me.",
  },
];
