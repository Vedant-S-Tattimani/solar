# K-Tech Solar — Website

Marketing website for **K-Tech Solar**, a solar and renewable-energy shop in Tilakwadi, Belgaum (Karnataka). It presents the shop's ten systems — solar PV, wind, solar water heating and air source heat pumps — with prices, specs, recent installs, customer reviews and a quote form that hands enquiries to the shop on WhatsApp.

All scripts, product data, fonts, images and videos are self-hosted in this repository.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploying to Cloudflare Workers

The site deploys as the Worker `ktech-solar` (see `wrangler.jsonc`), served at `https://ktech-solar.<your-account>.workers.dev`.

```bash
npx wrangler login     # once
npm run deploy         # OpenNext build + wrangler deploy
```

To test the production build in Cloudflare's local runtime first:

```bash
npm run build:cf
npx wrangler dev       # http://localhost:8787
```

OpenNext recommends building from Linux/WSL; building on Windows works for this site but prints a warning.

## Pages

| Route | What it shows |
|---|---|
| `/` | Home: hero, savings, all 10 systems, process, installs, reviews, quote form, FAQ |
| `/systems/<slug>` | One page per system (see below) |
| `/privacy`, `/terms` | Legal pages |
| `/thank-you` | Confirmation page after a quote request |

### Systems

| # | System | Price from | Slug |
|---|---|---|---|
| 1 | DC Solar System | ₹1,29,000 | `backup-essentials` |
| 2 | Rooftop Solar System | ₹3,59,000 | `solar-starter` |
| 3 | Hybrid Solar System | ₹6,49,000 | `solar-storage` |
| 4 | Wind + Solar Hybrid | ₹5,49,000 | `whole-home-independence` |
| 5 | Off-Grid Solar System | ₹6,49,000 | `off-grid-estate` |
| 6 | Ground-Mounted Solar Power Plant | ₹38,00,000 | `ground-mounted-plant` |
| 7 | Standalone Wind Turbine System | ₹2,89,000 | `wind-turbine` |
| 8 | Solar Water Heater | ₹45,000 | `solar-water-heater` |
| 9 | Residential Air Source Heat Pump | ₹1,65,000 | `heat-pump-residential` |
| 10 | Commercial Air Source Heat Pump | ₹6,20,000 | `heat-pump-commercial` |

The first five slugs are kept from the first version of the site so existing links keep working.

## Quote form

Submitting the form on the home page:

1. opens WhatsApp to the shop (+91 89718 74508) with the customer's details pre-filled — the customer taps **Send** in WhatsApp;
2. posts the form to `/api/enquiry`, which validates it, then shows the thank-you page.

`/api/enquiry` does not store or forward enquiries yet. To also receive them by email, add a provider (for example Resend) inside `src/app/api/enquiry/route.ts` and keep its API key in `.env.local`.

## How it is put together

Everything the browser loads is a static file, so the site needs no filesystem at runtime (required on Cloudflare Workers).

```
src/app/
  route.ts                 GET /                -> public/site/home.html
  systems/[slug]/route.ts  GET /systems/<slug>  -> public/site/<slug>.html (allow-listed slugs)
  privacy/, terms/         GET /privacy, /terms -> public/site/*.html
  api/enquiry/route.ts     quote form endpoint (validation only)
  thank-you/page.tsx       React thank-you page
  not-found.tsx            404 page
src/lib/sitePage.ts        reads a page through Cloudflare's ASSETS binding (fetch in dev)
                           and makes link-preview image URLs absolute
public/
  site/                    pre-rendered HTML for every page
  cms/                     binary product (10 systems) and review collections
  assets/js/               client runtime: hydration, animations, page transitions, form
  assets/media/            images (WebP), fonts and background videos
  images/ktech/            install and product photos (JPEG, 512/1024/full widths)
  _headers                 cache and security headers for static files
```

Each page is pre-rendered HTML. When it loads, the runtime in `public/assets/js/` hydrates it and runs the animations and page transitions. The runtime reads page content from three places, and **all three must agree**, or the page will switch back to old text after loading:

1. the HTML in `public/site/`, including the handover JSON script at the end of each file;
2. text literals inside the modules in `public/assets/js/`;
3. the binary collections in `public/cms/` (system cards, system pages and reviews).

Change site text in all three places together rather than editing one HTML file by hand.

## Known issues and next steps

- Enquiries only arrive if the customer taps **Send** in WhatsApp; add email delivery in `/api/enquiry` for a second copy.
- The privacy and terms pages contain placeholder legal text written for the US; have them reviewed for Indian law before launch.
- Photos for systems 6–10 are free stock images (Unsplash); replace them with K-Tech installs when available.
