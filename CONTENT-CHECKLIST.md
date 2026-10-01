# Content still needed from the client

The website is complete and shows no placeholders to visitors. Where facts were not yet available, the site uses neutral wording, such as "will be announced as agreements are finalised". Nothing has been invented. When the client supplies the items below, replace that wording with the real details.

The client-facing version, with priorities and a launch checklist, is `docs/client-information-request.pdf`. This file maps each item to where it goes in the code.

Last updated: 1 October 2026.

## Decisions

| # | Question | Where it shows | Notes |
|---|---|---|---|
| 1 | **Legal name:** "Isintu Samakhosi Institution NPC" (brief, Umlazi Food Bank banner), "Sintu Samakhosi Institute NPC" (live site credentials, shield logo) or "Isintu Samakhosi Institute NPC" (organisational structure, 28 Sep 2026)? | Footer, Transparency, schema (`lib/site.ts`) | The site currently uses the brief's version. |
| 2 | Does **Section 18A** apply to all donations, or only to the SR Angel (GBV) programme? | Get Involved trust badges, Governance, Transparency | The site says "qualifying donations". |
| 3 | ~~Is the **Prof. / Dr** title correct for Nomagugu Ngobese?~~ | About, Leadership, News | Resolved 28 Sep 2026: the organisational structure says "Prof." |

## Facts and figures

| # | Item | Where it goes |
|---|---|---|
| 4 | NEC/EXCO names and roles received 28 Sep 2026 (`structure`, `executive` in `lib/about.ts`). Still needed: **photos and short bios** for the executive members, the **Deputy Chairperson**, and the spelling of "Dzimbiri" (the chart also shows "Dzimbi") | `lib/about.ts` → Leadership page |
| 5 | **Partner kingdoms, chiefdoms and councils** (with their permission) | Traditional Leadership, Where we work |
| 6 | **GBV rollout progress**: councils signed so far out of 25 | `COUNCILS_TARGET` / `councilsReached` in `app/gbv-centres/page.tsx` |
| 7 | **GBV pre-deployment documents 5 to 8** | `gbvSteps` in `components/Sections.tsx` |
| 8 | **Named partners** for each programme (chambers, Rural Fund, agriculture, SMME, mining, data) | `partners` in `lib/programmes.ts` |
| 9 | **Programme figures** (chambers formed, farmers trained, SMMEs incubated, and so on) | `status` in `lib/programmes.ts` |
| 10 | **Provinces with confirmed activity** beyond KwaZulu-Natal | `confirmed` in `app/where-we-work/page.tsx` |

## Giving

| # | Item | Where it goes |
|---|---|---|
| 11 | **SR Angel giving tiers**, and what each tier funds | Get Involved, SR Angel panel |
| 12 | **Banking details or a payment gateway** | Get Involved (phase 2: online donations) |
| 13 | **18A certificate process**: who issues it, and how long it takes | Get Involved |

## Documents and compliance

| # | Item | Where it goes |
|---|---|---|
| 14 | PDFs: CIPC certificate, NPO certificate, PBO/18A letter, PSEA policy, Code of Conduct, annual reports | `public/documents/` and links on Transparency. Visitors can request copies by email for now. |
| 15 | ~~Information Officer~~ Resolved 28 Sep 2026: POPIA office is Andile Sizwe Phahla and Fani Mhlongo. Confirm which of them is registered with the Information Regulator as Information Officer | Privacy notice |
| 16 | **Legal review** of the privacy notice before launch | Privacy notice |
| 17 | **Enquiry form delivery:** the static site opens the visitor's email app. To send directly, the client signs up to a form service (e.g. Web3Forms) with info@isintusamakhosi.org.za | `lib/enquiry.ts`, `app/contact/ContactForm.tsx` |

## News

| # | Item | Where it goes |
|---|---|---|
| 18 | **Umlazi Food Bank**: date, households reached and partners | `lib/news.ts` |
| 19 | Short reports, attendance and photos from the three 2026 business events | `lib/news.ts` |
| 20 | **Integrity Awards** outcome for Lindiwe Dzimbiri, and a comment from the Institution | `lib/news.ts` |
| 21 | A proper **portrait photo** of Lindiwe Dzimbiri. The current one is cropped from her awards card. | `public/images/photos/dzimbiri-portrait.jpg` |

## Brand, launch and consent

These items were added when the client information request was written.

| # | Item | Where it goes |
|---|---|---|
| 22 | **Vector logo** (SVG/AI) plus a light version for dark backgrounds | `public/images/logo-shield.png`, `logo-emblem.png`, `app/icon.png` |
| 23 | **Social media links** | Footer (`components/Footer.tsx`) and JSON-LD `sameAs` (`app/layout.tsx`) |
| 24 | **Domain and DNS access** for isintusamakhosi.org.za; hosting choice (Vercel recommended) | Deployment |
| 25 | Whether the client owns **isintusamakhosi.co.za**, printed on the Umlazi banner; if so, redirect it to .org.za | Deployment |
| 26 | **CMS decision**: will staff edit content themselves? | Architecture (currently `lib/*.ts` files) |
| 27 | **GBV accredited course names**, partner consent to be named, and **support helplines** to list | `app/gbv-centres/page.tsx` |
| 28 | **Photo consent** from people shown in the supplied photos | `lib/photos.ts`, `lib/gallery.ts` |
| 29 | Confirm the **tax number** 9111068293 (taken from the live site) | `lib/site.ts` |
| 30 | A named person for **final sign-off** before launch | Launch |
