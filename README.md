# Spiker Heating & Air — Portfolio Concept

A full-site rebuild concept for Spiker Heating & Air, a real HVAC company in Wichita, KS
(hvacwichitaks.com), built as a portfolio piece using the `client-landing-builder` method:
scrape the real site, extract the real brand, and rebuild it as a premium, conversion-focused
Next.js site in one session.

**This is an unofficial, unaffiliated concept piece created for demonstration purposes.** It is
not a live or commissioned Spiker Heating & Air project. All business facts shown — name, phone
number, address, hours, license number, founding year, service list, and the customer reviews —
are real and pulled directly from Spiker's own live site and Testimonials page. The hero's
scroll-driven background photography is stock/bundled footage of a generic AC condenser
(visibly branded "AEROFLOW," not Spiker's own equipment), not real photos of Spiker's trucks,
technicians, or job sites.

## What's here

- `/` — the main landing page: scroll-driven hero, an honest comparison section, services,
  real customer reviews, and a call-to-action
- `/wichita-ac-repair-guide` — a generic "what to look for in an HVAC company" trust page
  (no named competitor — see note below)
- `/tools/repair-or-replace-calculator` — a free, genuinely interactive repair-vs-replace
  reasoning tool (no signup, no invented cost data)
- `/how-to/[slug]` — 10 local-intent guides on AC/furnace repair, troubleshooting, and
  maintenance, built from general, well-established HVAC knowledge
- `/all-pages` — a site map linking every page above in one place

No real competitor is named or researched anywhere on this site. Where the copy references
"other HVAC companies," it's describing general industry pain points, the same way the rest of
the portfolio's concept pieces do — never a specific real business.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion. Statically exported
(`output: 'export'`) so it deploys the same way as the other marieharvey.com portfolio-concept
subdomains — plain static files, no Node server required.

## Running it locally

```bash
npm install
npm run dev
```

## Deploying

This repo has **no CI build step** — cPanel's git deploy just copies files, it doesn't run
`npm install`/`npm run build`. Before pushing anything that should go live:

```bash
npm run build   # regenerates out/
git add out
git commit -m "Rebuild static export"
git push
```

`.cpanel.yml` copies `out/*` to `/home/marirahg/spikerheating.marieharvey.com/`.
