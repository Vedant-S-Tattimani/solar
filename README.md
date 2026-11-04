# Sunhearth — Solar Panels & Home Battery Installation

A production-ready Next.js application recreated from the Framer website ([https://sunhearth.framer.website/](https://sunhearth.framer.website/)) using TypeScript and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v20/v26)
- npm, pnpm, or yarn

### Installation
```bash
# Clone or navigate to the project directory
cd solar

# Install dependencies
npm install
```

### Running Locally
```bash
# Development server with Turbopack
npm run dev

# Or build & run production server
npm run build
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Architecture & Features

### 1. Typography & Colors
- **Font**: Figtree (Google Fonts via `next/font/google`, weights 400, 500, 600, 700) matching letter spacing, line heights, and font weights.
- **Palette**:
  - Canvas: `#FAF9F7`
  - Surface: `#F5F3F0`
  - Border: `#DED2C0`
  - Primary text: `#180102` (deep espresso)
  - Accent: `#F16B46` (hover: `#E0532E`)
  - Sand accents: `#D9CEB6`, `#F8F0E3`
- **Asymmetric Radii**: Recreated Framer's bespoke organic border geometry:
  - Hero Cover Banner & Quote Banners: `rounded-[64px_16px_64px_64px]`
  - Primary Action Buttons: `rounded-[32px_8px_32px_32px]`
  - Secondary Buttons: `rounded-[8px_32px_32px_8px]`
  - Cards: `rounded-[32px]` with inner images `rounded-[24px]` and specs `rounded-[20px]`
  - System card arrows: `rounded-[28px_8px_8px_28px]`
  - Certified Installer tiles: Asymmetric 4-tile sequence (`66px 16px 16px 66px`, `16px 66px 16px 16px`, `16px`, `16px 66px 66px 16px`)

### 2. Page & Route Structure
- `/`: Full landing page with all 13 sections:
  1. Header / Responsive Navbar with CSS logo mark
  2. Hero Section with status overlay pill, 4-stat specs bar, and partner logo carousel
  3. Why Sunhearth (11 hours outage stat, 90% self-power split bars, -80% bill reduction)
  4. Outage Quote Banner (“The whole street went dark for two days...”)
  5. 5-Tier Solutions catalog linking to detail pages
  6. 5-Step Process timeline (Day 1 to Week 6) & company milestone metrics
  7. Promise Quote Banner (“We install every system as if it were going on our own parents’ roof.”)
  8. Example Calculation section (San Jose solar + battery, NEM 3.0 breakdown)
  9. Team section (NABCEP-certified crew, no subcontractors)
  10. Reviews section (4.9 rating badge & 5 testimonial cards with avatars)
  11. Hardware specifications grid (Panels, Battery, Monitoring, Warranty)
  12. Free design & quote interactive form with client-side & API validation
  13. FAQ accordion with interactive toggle
  14. Bottom CTA banner & complete 4-column footer
- `/systems/[slug]`: Dynamic CMS system detail template statically generated with `generateStaticParams`:
  - `/systems/backup-essentials`
  - `/systems/solar-starter`
  - `/systems/solar-storage`
  - `/systems/whole-home-independence`
  - `/systems/off-grid-estate`
- `/privacy`: CCPA/CPRA-compliant Privacy Policy.
- `/terms`: Terms of Use agreement.
- `/api/quote`: Next.js Route Handler for quote submissions with anti-spam honeypot and input validation.

### 3. Assets & Local Data
- All 18 high-resolution photos and avatars have been downloaded locally to `/public/images/`.
- CMS data structured in `src/data/systems.ts` and `src/data/siteData.ts`.
- Zero external iframe embeds; pure semantic HTML and accessible UI components.

---

## ⚙️ Backend Integration Notes
The quote form submits to `POST /api/quote`:
- To connect email dispatch (e.g. via Resend or SendGrid), install the respective SDK and add your API key to `.env.local`:
  ```bash
  RESEND_API_KEY=re_...
  ```
  and uncomment the email send call inside `src/app/api/quote/route.ts`.
