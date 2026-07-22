# Accredian Enterprise — Partial Clone

A partial front-end clone of [enterprise.accredian.com](https://enterprise.accredian.com/), built as a
Next.js (App Router) assignment. It recreates the landing page's structure, tone and section flow —
hero, trusted-by strip, value props, process, program catalogue, testimonials, FAQ and a working
lead-capture form — with original copy and an original visual identity rather than copied assets.

## Live links

- **Live deployment:** _add your Vercel URL here after deploying_
- **Repository:** _add your GitHub repo URL here_

## Tech stack

- **Next.js 14** (App Router, functional components, hooks)
- **React 18**
- **Tailwind CSS** for styling, with a small custom design-token set (colors, fonts) in `tailwind.config.js`
- **Next.js Route Handlers** (`app/api/lead/route.js`) for the lead-capture API
- **next/font/google** for self-hosted, zero-layout-shift fonts (Fraunces / Manrope / JetBrains Mono)

No UI kit or component library is used — every component is hand-built and reusable.

## Project structure

```
app/
  layout.js          # Root layout, fonts, metadata
  page.js             # Assembles all sections
  globals.css         # Tailwind layers + base styles/tokens
  api/lead/route.js   # POST/GET handler for the lead-capture form
components/
  Navbar.jsx          # Sticky nav, mobile menu (client component)
  Hero.jsx
  TrustedBy.jsx
  ValueProps.jsx
  Process.jsx
  Programs.jsx
  Testimonials.jsx
  FAQ.jsx             # Accordion (client component)
  LeadForm.jsx         # Bonus: lead capture form wired to /api/lead
  Footer.jsx
  Section.jsx          # Shared layout wrapper reused by every section
lib/
  data.js              # All section copy/content in one place
```

Content lives in `lib/data.js` so sections stay presentational and reusable — swapping the
copy, programs, or testimonials doesn't require touching component code.

## Setup instructions

Requires Node.js 18.18+ (or 20+).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset is auto-detected as Next.js — no extra configuration needed.
4. Deploy. Every push to `main` will redeploy automatically.

## Approach

1. **Research the reference, don't scrape it.** I couldn't pull the live page's rendered markup
   directly (it's a client-rendered SPA), so I worked from the site's publicly indexed copy and
   section descriptions to understand its structure: hero → trust signals → value props → "how it
   works" → program catalogue → testimonials → lead form → footer. I then wrote **original copy**
   for every section rather than reproducing any text verbatim.
2. **Design a distinct visual identity**, rather than a generic SaaS template. The site targets HR/L&D
   decision-makers evaluating a training vendor, so I leaned into an "academic-credibility" palette
   (ink navy, warm cream, an academic gold accent, an emerald secondary) with a serif display face
   (Fraunces) for headlines and a clean grotesk (Manrope) for body text — closer to a university
   prospectus than a typical startup landing page.
3. **Build section-by-section as reusable components**, each pulling its copy from `lib/data.js` and
   sharing a common `Section` wrapper for consistent spacing/typography, so new sections are cheap to
   add and existing ones are easy to reorder.
4. **Wire up a real (if minimal) API integration** for the bonus lead-capture requirement: the form
   posts JSON to a Next.js Route Handler, which validates input server-side and returns a typed
   success/error response the UI reacts to.
5. **Responsiveness and accessibility as defaults, not an afterthought**: mobile nav, fluid type
   scale, `:focus-visible` outlines, `prefers-reduced-motion` handling, and semantic form labelling
   were built in from the start rather than patched on at the end.

## AI usage

I used Claude throughout this assignment. Specifically:

- **Where AI helped:**
  - Researching the reference site's likely section structure and messaging themes (via web search),
    since the live site is a client-rendered SPA I couldn't directly scrape.
  - Scaffolding the Next.js App Router project structure, Tailwind config, and component boilerplate.
  - Drafting first-pass section copy, the design token plan (colors/type/layout), and the lead-capture
    API route.
  - Writing this README structure.

- **What I modified/would modify manually:**
  - Verified none of the generated copy is a verbatim copy of the reference site's actual text —
    all section content was rewritten to be original.
  - Adjusted the color/typography system so it wouldn't read as a generic AI-generated template
    (avoided default gradient-hero and stock SaaS palettes in favor of an academic-credibility
    identity suited to an enterprise L&D buyer).
  - Reviewed component boundaries for reusability (e.g. extracting `Section.jsx` and centralizing
    content in `lib/data.js`) rather than leaving copy hard-coded inside JSX.
  - Before final submission: test the build locally (`npm run build`), check responsive breakpoints
    in the browser at 375px/768px/1280px, and proofread all copy.

## Improvements with more time

- Replace the mock `/api/lead` filesystem persistence with a real datastore (Postgres via Vercel
  Postgres/Supabase, or a CRM webhook like HubSpot/Salesforce) — the current implementation writes to
  `/tmp` as a demo-only mock, which is **not** persistent on serverless deployments.
  Rate-limit the endpoint and add basic spam protection (honeypot field or Turnstile/reCAPTCHA).
- Add scroll-triggered reveal animations for section entrances, done deliberately and sparingly per
  the "orchestrated moment" principle rather than scattered effects everywhere.
  Restore `alt` text for hero and section imagery.
- Add a proper 404 page, an `/programs/[slug]` detail route per program, and OpenGraph/social preview
  images.
- Add unit tests for the API route (input validation edge cases) and basic component tests with
  React Testing Library.
- Swap partner "logos" (currently text wordmarks, since I don't have rights to reproduce the actual
  institutional logos) for licensed or original SVG marks.
- Add an analytics/consent layer and a CMS (e.g. Sanity/Contentful) so non-technical marketers can
  edit copy without a deploy.

## Notes on scope

Per the assignment, this is a **partial** clone focused on structure, responsiveness, component
reusability and clarity — not a pixel-perfect visual match, and no content, images, or logos were
copied directly from the reference site.
