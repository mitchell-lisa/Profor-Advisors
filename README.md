# Profor Advisors

Website for Profor Advisors. Built and maintained by MJL Collective.

**Status:** `scaffold` — plumbing only. No real business content yet.
The site is `noindex` and disallowed in `robots.txt` until `status` is changed
in `src/lib/business.ts`.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4
- Deployed on Vercel, auto-deploys from `main`

## How this repo is organized

| Path | What it is |
|---|---|
| `src/lib/business.ts` | **Single source of truth.** Every business fact lives here — name, phone, address, hours, services, reviews, SEO. Components read from it; nothing is hardcoded elsewhere. |
| `src/app/layout.tsx` | Fonts, metadata, `noindex` while private |
| `src/app/page.tsx` | The page |
| `src/app/robots.ts` / `sitemap.ts` | Driven by `status` and `seo.siteUrl` |
| `src/app/globals.css` | Color + type tokens |

### The one rule

If a fact is not verified, it stays `null`. Components render nothing for
`null` rather than showing a guess. Never invent years in business,
credentials, awards, staff, pricing, or claims.

## Local development

```bash
git clone https://github.com/mitchell-lisa/Profor-Advisors.git
cd Profor-Advisors
npm install
npm run dev          # http://localhost:3000
```

Before pushing anything meaningful:

```bash
npm run build        # must be clean
```

## Deployment

Push to `main` → Vercel builds and deploys production automatically.
Any other branch produces a preview URL.

## Going live

1. Fill in `src/lib/business.ts` with verified facts.
2. Set `seo.siteUrl` to the real domain.
3. Change `status` from `"scaffold"` to `"client"` — this turns off `noindex`
   and enables the sitemap.
4. Attach the domain in Vercel (owner buys the domain in their own account).
