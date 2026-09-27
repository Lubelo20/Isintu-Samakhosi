# Isintu Samakhosi Institution — Website Redesign Brief

> Use this file as the project brief when developing the site with Claude (Claude Code, a Claude Project, or chat). Paste or attach it at the start of a session, together with `isintu-samakhosi.html` (the approved homepage prototype).

- **Client:** Isintu Samakhosi Institution NPC
- **Live site (to be replaced):** https://isintusamakhosi.org.za
- **Developer:** Ndumiso Mngomezulu, Lubelo Tech Solutions
- **Status:** Homepage prototype approved as a direction. Inner pages still to be built. Client content collected and still to be merged in.

---

## 1. Instructions for Claude

When working on this project:

1. Treat the prototype `isintu-samakhosi.html` as the source of truth for the look and feel. Match its tokens, type scale and components exactly.
2. Use South African English (organisation, programme, centre, favour) and the en-ZA locale.
3. Write copy in plain, active, sentence-case language. Do not invent statistics, partners, people or claims. If something is missing, leave a clearly marked `TODO:` placeholder.
4. Never use emojis as icons. Use the custom SVG icon style described in section 5.
5. Keep all registration numbers exactly as written in section 3.
6. Build mobile-first, accessible to WCAG 2.1 AA, and respect `prefers-reduced-motion`.
7. Ask before adding new dependencies beyond the stack in section 8.

---

## 2. About the organisation

Isintu Samakhosi Institution is a Non-Profit Company working to restore the dignity, intellectual sovereignty and economic autonomy of African people through indigenous governance, cultural heritage and the philosophy of Ubuntu.

It works in partnership with chiefdoms and kingdoms across all nine provinces of South Africa to build economic, institutional and cultural infrastructure. The aim is for rural communities to generate their own wealth and govern their own affairs.

- **Tagline:** Abantu, Ubuntu, Isintu
- **Hero headline:** Reviving the power of African kingships
- **Positioning line:** Not charity. Infrastructure.
- **Quote:** "I am because we are: our custom and way of life."

### Target audiences, in priority order

1. **Donors and CSI/ESD funders.** They need trust signals, clear impact and an easy way to give (Section 18A).
2. **Government departments and institutional partners.** They need governance, standards and programme clarity.
3. **Traditional councils and Amakhosi.** They need respect, cultural legitimacy and a way to request programmes.
4. **Community members, entrepreneurs and volunteers.** They need plain language, ways to get involved and, later, isiZulu content.
5. **Media.** They need news and contact details.

---

## 3. Fixed facts (do not change)

| Item | Value |
|---|---|
| Legal name | Isintu Samakhosi Institution NPC |
| Company type | Non-Profit Company (Section 21) |
| Company registration | 2025/510829/08 |
| NPO number | 285-310 |
| PBO number | 930073548 |
| Email | info@isintusamakhosi.org.za |
| Phone | +27 76 800 8170 |
| Address | 25 Roosevelt Road, Winston Park, KwaZulu-Natal, 3610 |
| Domain | isintusamakhosi.org.za (the old OG tags wrongly used .co.za) |

**TODO:** Confirm with the client whether Section 18A certificates apply to all donations or only to the SR Angel (GBV) programme. The prototype says "Section 18A eligible" in the trust strip.

---

## 4. Design direction

The direction is **Heritage Modern + Institutional Clarity**. It should feel culturally rooted and dignified, and at the same time structured and credible enough for funders and government.

The signature element is a **beadwork-inspired triangle pattern**. It fills the hero panel, with a staggered one-time reveal on load, and repeats as thin bead bands between major sections. Use it with restraint. It is the one bold element, and everything around it stays quiet.

Things to avoid:
- Generic African stock photography
- Emoji icons
- All-caps eyebrow labels above headings
- Numbered markers on content that isn't a real sequence
- Fade-up animations on every section

---

## 5. Design system

### Colour tokens

```css
:root{
  --indigo:#1C1F3B;     /* primary dark, header, hero, GBV, footer */
  --indigo-2:#282C52;   /* hover / secondary dark */
  --gold:#D6A13A;       /* accent, primary buttons, bead pattern */
  --gold-deep:#A87A1F;  /* gold text on light backgrounds (contrast) */
  --green:#3E5B45;      /* supporting accent (rural / land), used sparingly */
  --paper:#F0EFEA;      /* page background, light text on indigo */
  --white:#FFFFFF;      /* surfaces */
  --ink:#1C1F3B;        /* body text */
  --muted:#565A73;      /* secondary text */
  --line:#D9D7CE;       /* borders / rules */
}
```

Dark mode overrides `--ink`, `--muted`, `--line`, `--surface`, `--bg` and `--paper` (see the prototype). Gold text switches from `--gold-deep` to `--gold` on dark backgrounds.

### Typography

- **Headings:** Young Serif (Google Fonts), weight 400, fallback Georgia, serif.
- **Body/UI:** Public Sans, weights 400, 500, 600 and 700, fallback system-ui.
- **Scale:** H1 `clamp(2.6rem, 6.4vw, 5.2rem)`, H2 `clamp(2rem, 4vw, 3rem)`, H3 `1.5rem`, body `1.0625rem` with line-height 1.6, lede `1.2rem`.
- Keep line lengths under about 65 characters for body text.

### Layout

- Max content width is 1180px, with side padding of `clamp(20px, 4vw, 40px)`.
- Section vertical padding is `clamp(72px, 10vw, 128px)`.
- Two-column "heading left, content right" splits collapse to one column below 820px.
- Rounded pill buttons (radius 999px). Cards and panels use an 18px radius. Rules are 1px `--line`.

### Components (all in the prototype)

- **Sticky indigo header:** triangle wordmark, 5 nav links and a gold "Partner with us" button. Below 920px it becomes a hamburger menu.
- **Buttons:** `btn-gold` (primary), `btn-ghost` (on indigo), `btn-ink` (on light).
- **Bead band:** an 18px repeating SVG divider.
- **Trust strip:** a 4-column definition list of registration numbers.
- **Triad cards:** a top rule, custom geometric SVG icon, serif title, gold meaning line and body text.
- **Programme explorer:** an accessible tablist with a vertical list on desktop, horizontal scroll tabs on mobile, arrow-key navigation, and a detail panel with fact pills.
- **Target figures:** large gold serif number with a label.
- **Numbered steps:** only for the real GBV pre-deployment sequence.
- **"Ways to help" cards:** 4-up, with the first highlighted in indigo.
- **Contact definition list and footer.**

### Icon style

Simple geometric SVGs built from triangles, circles and diamonds in indigo, gold and green. No outlined "generic" icon sets.

### Logo

**TODO:** Replace the placeholder triangle mark with the client's real logo (SVG preferred). The old site used `logo-dark.png`. A light version is needed for the indigo header.

---

## 6. Sitemap

```
/                       Home (prototype done)
/about                  Our story, the Ubuntu Triad, the Three Pillars, leadership & board
/programmes             Programme hub (explorer + pillars)
/programmes/[slug]      One page per programme (8)
/traditional-leadership Traditional leadership & kingships
/where-we-work          Nine-province map: chambers, councils, GBV centres
/gbv-centres            National GBV Centre Rollout + SR Angel programme
/news                   News & insights (list)
/news/[slug]            Article
/partner                Ways to give & partner (SR Angel, CSI, councils, volunteers)
/transparency           Registration docs, policies (PSEA etc.), annual reports
/contact                Contact details + enquiry form
```

**Main nav (6 max):** About, Programmes, Traditional Leadership, GBV Centres, News, Contact. Add a gold "Partner with us" button.

Programme slugs:
`business-chambers`, `rural-fund`, `rural-economic-development`, `township-economy`, `smme-coop-incubation`, `informal-mining-formalisation`, `ubuntu-data-bank`, `gbv-centre-rollout`

---

## 7. Page content

### 7.1 Home (built)

The sections, in order:

1. **Hero:** tagline, headline, intro paragraph and two buttons ("See our programmes", "Support the movement"), with the bead panel alongside.
2. **Quote line.**
3. **Bead band.**
4. **Trust strip:** NPC, NPO, PBO and 18A.
5. **Manifesto:** "Not charity. Infrastructure." plus two paragraphs.
6. **Ubuntu Triad:**
   - Abantu (the people)
   - Ubuntu (I am because we are)
   - Isintu (our custom and way of life)
7. **Programmes:** the explorer with all 8 programmes, plus the Three Pillars as "Every programme must answer three questions".
8. **GBV centres feature:** the targets 25 / 5 / 8, the pre-deployment steps and partners.
9. **Governance and standards.**
10. **Partner:** four ways to help.
11. **Contact.**
12. **Footer.**

### 7.2 The frameworks (how to present them)

The old site presented two "three-part" frameworks without explaining how they relate. Keep them distinct like this:

- **The Ubuntu Triad** is the organisation's values: who we serve, how we work and what we protect.
  - **Abantu (the people):** Our first loyalty is to the communities we serve: the rural poor, indigenous peoples, women and girls, youth, and those at the margins. Every decision begins and ends with one question. Does this serve the people?
  - **Ubuntu (I am because we are):** Ubuntu is not sentiment. It is a governance system. Relationships built on dignity, reciprocity and mutual accountability are the infrastructure of all our work.
  - **Isintu (our custom and way of life):** We honour and protect indigenous knowledge, customary law and the governance sovereignty of Amakhosi.
- **The Three Founding Pillars** are the evaluation lens that every programme is tested against.
  - **Consciousness (Ukwazi):** Does it cultivate critical awareness and self-determination?
  - **Heritage (Isintu):** Does it preserve and revitalise indigenous knowledge and Amakhosi governance?
  - **Stewardship (Ubuntu):** Does it manage resources with intergenerational accountability?

### 7.3 Programmes

For each programme page, use this template: summary, the problem, our approach, the Three Pillars check, partners, targets or status, and a call to action. Fill in anything unknown as `TODO:`.

1. **Business chambers.** Chambers in all nine provinces, in direct partnership with chiefdoms and kingdoms. They are the commercial arm of traditional leadership. Each runs on a co-operative model with an Ubuntu-inspired savings and investment culture, so communities become co-owners, not dependants.
2. **The Rural Fund.** Set up with credible financial institutions to channel project and industrial funding into rural development. Communities can save, invest and access venture capital through a structured platform. It is a financial vehicle, not a grant programme.
3. **Rural economic development.** Sustainable agriculture, local infrastructure and small business development. This includes farmer training in modern techniques, community marketplaces and microloans for rural entrepreneurs.
4. **Township economy.** Spaza shops, local service providers and community-owned retail. These businesses are access points for goods and services, creating jobs and growth from within.
5. **SMME and co-op incubation.** Incubating SMMEs and co-ops in rural communities, from business registration to market access, so they can formalise, grow and compete.
6. **Informal mining formalisation.** Bringing small-scale subsistence miners into the formal economy. Community-based refinery centres mean communities keep benefiting even after mines are exhausted.
7. **Ubuntu Data Bank and digital infrastructure.** Access to digital infrastructure, data intelligence and financial services. The Ubuntu Data Bank (UDB) is the central operational intelligence system, supporting evidence-based programme design, CSI tracking, beneficiary data management and continuous improvement, without compromising community sovereignty.
8. **National GBV Centre Rollout.** See section 7.4.

### 7.4 GBV Centres

- **Context:** South Africa has among the highest GBV rates globally. Rural communities and traditional councils are underserved, and traditional courts lack accredited training and referral pathways.
- **Partners:** DBT Studies, accredited GBV curriculum specialists, SABC 1, the Department of Social Development, and the Department of Women, Youth and Persons with Disabilities.
- **Model:** each centre sits in a traditional council and is supported by a community User Group (UG), which acts as the eyes, ears and accountability mechanism on the ground.
- **Before any centre opens:** all 8 pre-deployment control documents must be filed. The known ones are the community baseline assessment, the Traditional Council Resolution, the referral pathway map, and the risk and safety plan. **TODO:** get the other 4 from the client.
- **Training:** an accredited 5-course programme for traditional leaders.
- **Donors:** the Social Responsibility Angel (SR Angel) programme, with Section 18A tax deduction benefits.
- **Rollout:** a phased national rollout, targeting 25 traditional councils in year one.
- **Feature idea:** a progress tracker showing "X of 25 councils".

### 7.5 Governance and standards

The Institution applies these standards, with formal accreditation in progress:

- Core Humanitarian Standard (CHS Alliance)
- ISO 9001:2015 quality management
- King IV governance principles

It also upholds:

- UNDRIP
- UNCRC
- CEDAW
- A zero-tolerance PSEA policy

### 7.6 Pages that still need client content

For each of these, merge in the collected client content. Where content is missing, write `TODO:` placeholders; do not invent it.

- **/about:** founding story, vision and mission, leadership and board bios with photos.
- **/traditional-leadership:** the relationship with Amakhosi, which kingdoms and chiefdoms they partner with, and the governance model.
- **/where-we-work:** real locations only. No map pins without confirmed data.
- **/news:** articles, dates and images.
- **/transparency:** downloadable documents (registration certificates, PSEA policy, annual reports).
- **/partner:** SR Angel giving tiers, banking details or a payment gateway, and the 18A certificate process.

---

## 8. Technical specification

### Recommended stack

- **Framework:** Next.js (App Router) with TypeScript. The current site is already Next.js.
- **Styling:** CSS variables from section 5. Use Tailwind only if the whole project adopts it, mapping the tokens into `tailwind.config`.
- **Fonts:** load with `next/font/google` (Young Serif, Public Sans).
- **Content:** MDX or a JSON file for programmes and news to start with. A headless CMS (e.g. Sanity) can come later if the client will edit content.
- **Forms:** a contact and enquiry form with server-side validation, spam protection (honeypot or Turnstile) and email delivery (e.g. Resend) to info@isintusamakhosi.org.za.
- **Images:** `next/image`, WebP/AVIF, with descriptive alt text.
- **Hosting:** Vercel or the client's existing host.

### SEO and metadata fixes (the old site had problems)

- Correct `og:url` to **https://isintusamakhosi.org.za**; the old site pointed to .co.za.
- Give every page a unique `<title>` and meta description. The old site repeated one description everywhere.
- Add an OG image (1200×630) using the bead pattern and wordmark.
- Add JSON-LD `NGO` / `Organization` schema with the address, contact details and registration identifiers.
- Add a sitemap.xml, robots.txt and canonical URLs.
- Set `lang="en-ZA"`.

### Accessibility checklist

- Colour contrast AA or better. On light backgrounds, use `--gold-deep` for gold text.
- Visible focus states (3px gold outline).
- The programme explorer follows the ARIA tabs pattern with arrow keys, Home and End.
- The mobile menu has `aria-expanded` and closes when a link is chosen.
- Respect `prefers-reduced-motion`, including disabling the bead reveal.
- Use a proper heading hierarchy, one H1 per page.

### POPIA

- Add a privacy notice covering form submissions and any donor data.
- Include consent checkboxes on forms.
- **TODO:** confirm who the client's Information Officer is.

---

## 9. Future features (phase 2)

- An English / isiZulu language toggle. Use professional translation, not machine translation.
- A GBV and business chamber rollout tracker.
- An online donation flow with automated 18A certificate requests.
- A resource library covering policies, curricula and reports.
- An imbizo and events calendar.
- A professional photography shoot of councils, communities and leadership portraits, to replace the pattern-led placeholders.

---

## 10. Open questions for the client

1. Can they supply the logo files (SVG, light and dark)?
2. Does Section 18A apply to all donations, or only to SR Angel?
3. What are the remaining 4 of the 8 GBV pre-deployment documents?
4. Can they share leadership and board names, roles and photos?
5. Which kingdoms, chiefdoms and provinces are confirmed partners so far?
6. What progress has been made against the 25-council target?
7. Is there a donation method (banking details or a payment gateway)?
8. Will they edit content themselves? That decides whether a CMS is needed.
9. Who is the POPIA Information Officer?

---

## 11. Suggested build order

1. Set up the project with tokens, fonts, layout, header, footer and the bead components.
2. Port the Home page from the prototype.
3. Build the programmes hub and the 8 programme pages from a shared template.
4. Build the GBV Centres and Partner pages.
5. Build About, Traditional Leadership and Contact (with the working form).
6. Build News and Transparency.
7. Do the SEO, schema, accessibility and performance pass.
8. Hand over to the client for content review, then launch and redirect the old URLs.
