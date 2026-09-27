# Isintu Samakhosi Institution website

The redesigned website for Isintu Samakhosi Institution NPC (isintusamakhosi.org.za), built by Lubelo Tech Solutions.

- **Stack:** Next.js 16 (App Router), TypeScript and plain CSS with design tokens. No UI framework.
- **Brief:** `docs/ISINTU-SAMAKHOSI-BRIEF.md`. The original approved prototype is `docs/prototype-homepage.html`.
- **Client information request:** `docs/client-information-request.pdf`, with an online version at https://claude.ai/code/artifact/e971a998-3559-4799-9dd0-fe32a80d925a
- **Content still owed by the client:** `CONTENT-CHECKLIST.md`

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
```

## Site map

The menu follows the live site: Home, About Us ▾, Our Work ▾, Traditional Leadership, Rural Development, News, Get Involved ▾, plus a **Support us** button.

| Page | Route |
|---|---|
| Home | `/` |
| About Us: Our story | `/about` |
| Leadership and board | `/about/leadership` |
| Governance | `/about/governance` |
| Our Work (programme hub) | `/our-work` |
| Programme pages (8) | `/our-work/[slug]` |
| Traditional Leadership | `/traditional-leadership` |
| Rural Development | `/rural-development` |
| News, and articles (6) | `/news`, `/news/[slug]` |
| Gallery (50 photos) | `/gallery` |
| Get Involved (includes the enquiry form) | `/get-involved` |
| GBV centres | `/gbv-centres` |
| Where we work | `/where-we-work` |
| Transparency | `/transparency` |
| Contact | `/contact` |
| Privacy notice | `/privacy` |

Routes match the live site, so old links keep working. `/programmes` and `/partner` (draft aliases) redirect; see `next.config.ts`.

## Where content lives

| File | What it holds |
|---|---|
| `lib/site.ts` | Fixed facts (registration numbers, contact details), the menu, footer links, pillars |
| `lib/about.ts` | Objectives, ethical standards, leadership bios |
| `lib/programmes.ts` | The 8 programmes (drives `/our-work/[slug]`) |
| `lib/news.ts` | News stories and research papers (drives `/news/[slug]`) |
| `lib/photos.ts` | Photo registry: size, alt text and a blur preview for each photo |
| `lib/gallery.ts` | Gallery categories |

Content follows the brief's rule: nothing is invented. Where facts are pending, pages use neutral wording, and the missing items are listed in `CONTENT-CHECKLIST.md`. A content string starting with `TODO:` renders as a visible dashed placeholder if one is needed during review.

## Design

- **Style:** white, clean and modern, built on the brief's tokens (indigo `#1C1F3B`, gold `#D6A13A`, green `#3E5B45`). The fonts are Young Serif for headings and Public Sans for body text.
- **Gold text:** text on light backgrounds uses `--gold-text` (`#8A6414`, 5.4:1 contrast, AA). `--gold-deep` is for decoration only.
- **Logo:** the header shows the live site's shield logo (`public/images/logo-shield.png`). The footer uses the gold emblem.
- **Motion:** `components/Motion.tsx` handles the scroll reveals, the header shadow and the count-up figures. Content stays visible without JavaScript, and all motion is off under `prefers-reduced-motion`.
- **Photos:** client photos are resized to at most 1600px and stripped of EXIF/GPS data. Every photo shows a tiny blur preview while loading, so no frame is ever empty.

## Contact form

`app/contact/actions.ts` validates on the server, catches spam with a honeypot field, requires POPIA consent, and sends email through the Resend HTTP API. No extra package is needed.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Required in production. In development, enquiries are logged to the console. |
| `CONTACT_TO` | Optional. Defaults to info@isintusamakhosi.org.za |
| `CONTACT_FROM` | Optional. A sender on a domain verified in Resend |

## Quality checks (27 September 2026)

- **Accessibility:** axe-core (WCAG 2.1 A/AA plus best practice) reports 0 violations on every page.
- **Layout:** no horizontal overflow and no empty image frames at 390px, 768px and 1280px widths.
- **SEO:** every page has a unique title, meta description, canonical URL and one H1. The site also has JSON-LD `NGO` schema, `sitemap.xml`, `robots.txt` and an Open Graph image.
- **Build:** lint and the production build pass. Every page is statically generated except `/contact`, which reads the `?topic=` query.
