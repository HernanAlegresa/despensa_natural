# Despensa Natural

E-commerce storefront for **Despensa Natural** — a natural food brand based in Montevideo, Uruguay, specializing in real food without ultra-processed ingredients: granola, honey, nuts, and healthy snacks.

Live site: [despensanatural.com](https://despensanatural.com)

---

## Tech Stack

- **Framework** — Next.js 15 (App Router, Server Components, Turbopack)
- **Language** — TypeScript 5 (strict mode)
- **Styling** — Tailwind CSS 3 · `cva` · `clsx` · `tailwind-merge`
- **Animations** — Framer Motion
- **UI Primitives** — Radix UI
- **Icons** — Lucide React
- **Backend** — Supabase (contact form only)
- **Deployment** — Vercel

---

## Features

- Product catalog with search, filtering (category, collection, price), and sorting
- Product detail pages with image gallery and add-to-cart
- Persistent cart via `localStorage` (slide-out drawer, quantity controls)
- Fully responsive — mobile-first design
- Informational pages: shipping, contact, about
- Contact form connected to Supabase
- SEO-ready: `sitemap.xml`, `robots.txt`, Open Graph metadata, canonical URLs
- Image optimization: AVIF + WebP, custom breakpoints
- Security headers configured globally (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)

---

## Project Structure

```
app/                         # Pages (Next.js App Router)
├── page.tsx                 # Home — Hero, Featured Products, Category Showcase, Brand Story
├── catalogo/                # Product catalog with filters
├── producto/[slug]/         # Product detail page
├── envios/                  # Shipping information
├── contacto/                # Contact form
├── quienes-somos/           # About the brand
└── api/
    ├── contact/             # Contact form endpoint (Supabase)
    └── waitlist/            # Waitlist endpoint (inactive)

components/
├── layout/                  # Header, Footer, navigation
├── sections/                # Homepage sections (Hero, FeaturedProducts, CategoryShowcase, BrandStory)
├── shop/                    # ProductCard, ProductGrid, filters, search, sort
├── pdp/                     # Product gallery, related products
├── cart/                    # CartDrawer
├── contact/                 # ContactForm, FAQ accordion
└── ui/                      # Design system primitives (input, select, toast, skeleton…)

config/
└── site.ts                  # ⭐ Central brand config — start here

contexts/
├── CartContext.tsx           # Cart state + localStorage persistence
└── ToastContext.tsx          # Toast notifications

data/
└── despensaNatural/         # Static product catalog (TypeScript)
    ├── products.ts
    ├── categories.ts
    └── collections.ts

hooks/                       # useShopFilters, useShopSearch, useShopSort
lib/
├── types/                   # TypeScript types (Product, Cart, ShopFilters…)
├── shop/                    # Filtering and sorting logic
└── products/                # Product data helpers

public/
├── brand/                   # Logo assets
├── hero/                    # Hero section images
├── products/                # Product images
├── quienes-somos/           # About page images
└── envios/                  # Shipping zone map
```

---

## Configuration

All brand settings are centralized in **`config/site.ts`**. This is the single source of truth for name, description, navigation, social links, contact info, currency, and feature flags.

```typescript
export const siteConfig = {
  name: "Despensa Natural",
  description: "Alimentos reales sin ultraprocesados...",
  email: "despensanatural9@gmail.com",
  url: "https://despensanatural.com",
  social: {
    instagram: "https://www.instagram.com/despensanaturaluy",
    whatsapp: "https://wa.me/59899426168",
  },
  mainNav: [...],
  announcement: "",   // empty = announcement bar hidden
  currency: "UYU",
  features: {
    store: true,
    waitlist: false,
    portfolio: false,
  },
};
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values.

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL — used for sitemap, canonical URLs, and Open Graph |
| `NEXT_PUBLIC_SUPABASE_URL` | No* | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No* | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | No* | Supabase service role key |

*Required if the contact form is active.

---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/HernanAlegresa/despensa_saludable.git
cd despensa_saludable

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev          # Dev server with Turbopack
npm run dev:webpack  # Dev server with Webpack (fallback)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
```

---

## Deployment

The project is deployed on **Vercel**, connected to the `main` branch.

1. Push to `main` triggers an automatic deployment
2. Set the environment variables listed above in the Vercel project settings
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain

---

## Architecture Notes

**Static product catalog** — Products, categories, and collections are defined as TypeScript objects in `data/despensaNatural/`. There is no CMS or database for product data. To add or update products, edit those files directly and redeploy.

**Cart is client-side only** — The cart persists in `localStorage`. There is no server-side cart, session, or order management. The checkout page is a placeholder — it collects a shipping address but does not process payments.

**No authentication** — The site has no user accounts or login system.

**Supabase is used minimally** — Only for the contact form submission. It is not used for product data, authentication, or orders.

**URL structure** — All routes are in Spanish (`/catalogo`, `/producto/[slug]`, `/envios`, `/contacto`, `/quienes-somos`). Legacy English paths (`/shop`, `/shipping`, `/contact`, etc.) are permanently redirected via `next.config.ts`.

---

## Potential Next Steps

- **Payment integration** — MercadoPago or Stripe for actual checkout
- **Order management** — Store orders in Supabase, email confirmations
- **Product CMS** — Replace static data files with a headless CMS (Sanity, Contentful) or Supabase table for non-technical product updates
- **WhatsApp order flow** — Pre-fill a WhatsApp message with the cart contents as an interim checkout solution
- **Admin panel** — Simple dashboard for order tracking and product management

---

## License

MIT
