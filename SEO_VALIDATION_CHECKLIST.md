# SEO Validation Checklist (POKSOD)

Use this checklist after `npm run dev` (or production deploy) to verify metadata and structured data for all key routes.

## Tools

- Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/
- Open Graph Debugger: https://developers.facebook.com/tools/debug/

## Pre-check

- Ensure dev server is running: `http://127.0.0.1:5173`
- Ensure sitemap is reachable: `http://127.0.0.1:5173/sitemap.xml`
- Ensure no console errors on each page

## Route Checks

### 1) Home `/`

URL:
- `http://127.0.0.1:5173/`

Expected:
- `<title>` and meta description are page-specific (not stale)
- Canonical: `https://www.poksod.com/`
- JSON-LD includes:
  - `WebPage`
  - `BreadcrumbList`
- `index.html` head includes:
  - `WebSite`
  - `Organization`
  - `Game`
  - `FAQPage`

### 2) Pillar `/pokdeng-2-bai`

URL:
- `http://127.0.0.1:5173/pokdeng-2-bai`

Expected:
- Canonical: `https://www.poksod.com/pokdeng-2-bai`
- JSON-LD includes:
  - `Article`
  - `WebPage`
  - `BreadcrumbList`

### 3) Promotions `/promotions`

URL:
- `http://127.0.0.1:5173/promotions`

Expected:
- Canonical: `https://www.poksod.com/promotions`
- JSON-LD includes:
  - `FAQPage`
  - `WebPage`
  - `BreadcrumbList`

### 4) Blog `/blog`

URL:
- `http://127.0.0.1:5173/blog`

Expected:
- Canonical: `https://www.poksod.com/blog`
- JSON-LD includes:
  - `Blog`
  - `WebPage`
  - `BreadcrumbList`
- `Blog.blogPost[]` items have valid `headline`, `description`, `url`

### 5) Reviews `/reviews`

URL:
- `http://127.0.0.1:5173/reviews`

Expected:
- Canonical: `https://www.poksod.com/reviews`
- JSON-LD includes:
  - `Review`
  - `WebPage`
  - `BreadcrumbList`

### 6) About `/about`

URL:
- `http://127.0.0.1:5173/about`

Expected:
- Canonical: `https://www.poksod.com/about`
- JSON-LD includes:
  - `AboutPage`
  - `WebPage`
  - `BreadcrumbList`

## Sitemap Checks

File:
- `public/sitemap.xml`

Expected URLs present:
- `https://www.poksod.com/`
- `https://www.poksod.com/pokdeng-2-bai`
- `https://www.poksod.com/promotions`
- `https://www.poksod.com/blog`
- `https://www.poksod.com/reviews`
- `https://www.poksod.com/about`

## Manual Spot Checks

- Internal links in navbar/footer navigate to route-based URLs (no broken `#` links)
- Open Graph preview renders correct title/description/image
- No duplicate canonical tags in final HTML
- No malformed JSON in any `application/ld+json` block

## Pass Criteria

- Rich Results Test reports no critical errors for each route
- Schema Validator parses all JSON-LD blocks without syntax errors
- Canonical, title, and description match route intent
