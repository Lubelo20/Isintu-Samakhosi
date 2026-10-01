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
npm run build      # static site written to out/
npx serve out      # preview the static build at http://localhost:3000
npm run lint
```

## Static site and hosting

The site is a **fully static export** (`output: "export"` in `next.config.ts`). `npm run build` writes plain HTML, CSS, JavaScript and images to `out/`, which any static host can serve: GitHub Pages, Netlify, Vercel or the client's cPanel hosting. There is no server code.

- **Preview:** every push to `main` publishes the site to GitHub Pages through `.github/workflows/deploy-pages.yml`, at https://lubelo20.github.io/Isintu-Samakhosi/
- **Sub-folders:** set `NEXT_PUBLIC_BASE_PATH` (for example `/Isintu-Samakhosi`) when the site is served from a sub-folder. Leave it unset on the real domain.
- **Images** are served as they are through `lib/image-loader.ts`; the photos are already resized and stripped of EXIF data.
- **Redirects:** a static host cannot run `next.config` redirects. The old draft aliases (`/programmes`, `/partner`, `/about-us`) were never live, so they were dropped. Old live-site URLs should be redirected at the host when the domain moves.

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

Routes match the live site, so old links keep working.

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

The form (`app/contact/ContactForm.tsx`, checks in `lib/enquiry.ts`) validates in the browser, catches spam with a honeypot field and requires POPIA consent. Because the site is static, a valid enquiry opens the visitor's email app with a message to info@isintusamakhosi.org.za already filled in.

To send enquiries directly without the email app, post the same fields to a form service such as Web3Forms or Formspree (free tiers, no server needed). This needs an account on the client's email address.

## Quality checks (27 September 2026)

- **Accessibility:** axe-core (WCAG 2.1 A/AA plus best practice) reports 0 violations on every page.
- **Layout:** no horizontal overflow and no empty image frames at 390px, 768px and 1280px widths.
- **SEO:** every page has a unique title, meta description, canonical URL and one H1. The site also has JSON-LD `NGO` schema, `sitemap.xml`, `robots.txt` and an Open Graph image.
- **Build:** lint and the production build pass. Every page is statically generated.
- **Devices (1 October 2026):** every page checked at 320, 375, 390, 412, 768, 1024, 1280, 1440 and 1920px wide, as a static build in a sub-folder: no horizontal scroll, broken images, missing files or console errors. Menu, gallery viewer and enquiry form tested on phone, tablet and desktop.
