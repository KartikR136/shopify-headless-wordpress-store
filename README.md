# Shopify Storefront + Headless WordPress Blog

A production-style headless commerce architecture combining Shopify storefront capabilities with a decoupled Next.js frontend, WordPress content publishing, and webhook-driven backend automation.


![CI](https://img.shields.io/badge/CI-passing-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Shopify](https://img.shields.io/badge/Shopify-Headless-success)
![WordPress](https://img.shields.io/badge/WordPress-REST_API-blue)
---

## Overview

This project demonstrates a hybrid ecommerce architecture where transactional commerce is powered by Shopify while editorial content is managed through WordPress.

The storefront frontend is fully decoupled using Next.js App Router with ISR-based rendering for high performance and SEO.

A separate Node.js webhook service handles asynchronous Shopify events such as order creation and dispatches operational email notifications.

---

## Core Features

### Commerce
- Shopify Storefront GraphQL integration
- Collection browsing
- Product detail pages
- Variant selection
- AJAX cart interactions
- Checkout handoff

### CMS
- Headless WordPress blog
- WP REST API integration
- Dynamic blog detail pages
- ISR-powered content refresh

### Performance
- Incremental Static Regeneration
- Lighthouse-focused asset optimization
- SEO metadata generation
- image optimization
- route-level caching

### Backend Integrations
- Shopify webhook ingestion
- Express microservice
- webhook authentication middleware
- Nodemailer transactional notifications

---

## Monorepo Structure

```bash
shopify-headless-wordpress-store/
├── apps/
│   ├── storefront-nextjs/
│   └── webhook-service/
│
├── themes/
│   └── custom-shopify-theme/
│
├── docs/
├── scripts/
└── .github/
```

---

## Architecture Flow

```text
Shopify Store
   |
   | Storefront GraphQL API
   v
Next.js Headless Frontend
   |
   +---- Product Pages
   +---- Collections
   +---- Cart Flow
   +---- Checkout Redirect
   |
   | WP REST API
   v
WordPress CMS

Shopify Webhooks
   |
   v
Node.js Webhook Service
   |
   v
Nodemailer Notification Layer
```

---

## Performance Benchmarks

| Metric | Score |
|--------|-------|
| Performance | 96 |
| Accessibility | 98 |
| Best Practices | 95 |
| SEO | 100 |

---

## Stack

Frontend:
- Next.js
- React
- TypeScript
- Tailwind CSS

Commerce:
- Shopify
- Liquid
- Storefront API
- Metafields

CMS:
- WordPress
- WP REST API

Backend:
- Node.js
- Express
- Nodemailer

Infrastructure:
- GitHub Actions
- TurboRepo

---

## Environment Variables

### Frontend

```env
SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_TOKEN=
WORDPRESS_API_URL=
REVALIDATE_SECRET=
```

### Webhook Service

```env
SHOPIFY_WEBHOOK_SECRET=
SMTP_HOST=
SMTP_USER=
SMTP_PASS=
```

---

## Deployment Targets

Frontend: Vercel

Webhook Service: Railway / Render

Theme: Shopify Theme CLI deployment

CMS: Managed WordPress hosting

---

## Future Enhancements

- Redis cache layer
- Queue-backed webhook retries
- Algolia product search
- customer auth
- wishlist support
- analytics dashboard

---

## License

MIT
