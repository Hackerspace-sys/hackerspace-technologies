# HackerSpace Technologies (HST) — Corporate Website

> **“Building Technology. Creating Possibilities.”**  
> Official corporate digital headquarters for **HackerSpace Technologies (HST)** — an independent technology company building digital products, intelligent software, infrastructure, and technology-driven businesses.

---

## 1. Project Overview & Architecture

This repository contains the production-ready source code for the official HackerSpace Technologies corporate website. Built with a strict **₹0 infrastructure budget**, the site is architected for maximum speed, zero layout shift, pristine accessibility, and seamless automated deployment.

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) with custom HST design tokens
- **Icons:** [Lucide Astro](https://lucide.dev/)
- **Hosting Target:** Cloudflare Pages (Free Plan) with GitHub Pages compatibility
- **Output:** 100% pre-rendered static HTML (`dist/`)
- **SEO & Metadata:** Automated `sitemap-index.xml`, `robots.txt`, OpenGraph tags, Twitter Cards, and schema.org JSON-LD

---

## 2. Brand Identity & Design System

The visual system is derived strictly from the official **HST Logo**:
- **HST Red:** `#FF2626` (Exact accent sampled from the monogram vector)
- **Pure Black:** `#050505` (Hero, vision statements, footer)
- **Graphite / Charcoal:** `#111111` / `#191919` (High-contrast surface cards)
- **Neutral Gray:** `#777777` (Secondary labels, borders)
- **Pure White:** `#FFFFFF` (Primary editorial surfaces)

The design embraces Swiss-inspired typography, confident headlines, generous whitespace, and restrained red interactive accents.

---

## 3. Site Structure & Routes

Every route is statically pre-rendered to a clean directory URL (no 404s on page reloads):

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero, Brand Intro, Venture Showcase, Capabilities, Approach, Founder, Vision, Contact |
| `/about` | **About HST** | Mission, origin, operating philosophy, and venture studio governance |
| `/ventures` | **Ventures Directory** | Searchable, category-filtered portfolio of all 9 HST initiatives |
| `/ventures/[slug]` | **Venture Dossiers** | Individual technical specifications, problem/solution, and modules |
| `/founder` | **Founder Profile** | In-depth biography of Krishna Attipatla, core philosophy, and focus areas |
| `/innovation` | **Capabilities** | The 6 core engineering disciplines and 4-step architecture lifecycle |
| `/contact` | **Contact & Inquiries** | Functional inquiry form with honeypot anti-spam and direct channels |
| `/privacy` | **Privacy Policy** | Comprehensive GDPR/DPDP-aligned data minimization policy |
| `/terms` | **Terms of Use** | Legal framework, proprietary IP, and disclaimers |
| `/404` | **Custom 404** | Branded editorial 404 recovery page |

---

## 4. Local Development

### Prerequisites
- Node.js `v22.0.0` or higher
- npm `v10.0.0` or higher
- Git

### Quickstart
```bash
# 1. Clone repository
git clone https://github.com/Hackerspace-sys/hackerspace-technologies.git
cd hackerspace-technologies

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser to view the site.

### Production Build & Preview
```bash
# Build production static bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Deployment Guide (Zero-Cost Production Setup)

### Primary Destination: Cloudflare Pages (Recommended)
Cloudflare Pages provides a 100% free production plan with unlimited bandwidth, global edge CDN, automated HTTPS, and instant deployments on Git push.

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "feat: initial production corporate website"
   git branch -M main
   git remote add origin https://github.com/Hackerspace-sys/hackerspace-technologies.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Log into your free [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Navigate to **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**.
   - Select the `hackerspace-technologies` repository.
   - Configure the build settings:
     - **Project Name:** `hackerspace-technologies`
     - **Production Branch:** `main`
     - **Framework Preset:** `Astro`
     - **Build Command:** `npm run build`
     - **Build Output Directory:** `dist`
     - **Node.js Version:** Set environment variable `NODE_VERSION` to `22` (in Settings → Environment variables).
   - Click **Save and Deploy**.
   - Your site will be published at:  
     `https://hackerspace-technologies.pages.dev`

### Alternative: GitHub Pages (Built-in Fallback)
This repository includes a ready-to-run GitHub Actions workflow in `.github/workflows/deploy.yml`.
To enable GitHub Pages:
1. In your GitHub repository, go to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Push any commit to `main`, and GitHub Actions will automatically build and publish the site.

---

## 6. Content Maintenance & Future Updates

All content is strictly separated from presentation logic:

### Adding or Editing Ventures
Open `src/data/ventures.ts`. Each venture is represented as a structured TypeScript object. You can adjust status (`live`, `in-development`, `concept`, `incubation`), add features, update one-liners, or add new ventures. The portfolio directory and detail pages (`/ventures/[slug]`) update automatically upon save!

### Updating the Founder Photograph
1. Save your founder portrait as `krishna-attipatla.jpg`.
2. Place it in `public/images/founder/krishna-attipatla.jpg`.
3. In `src/data/founder.ts`, verify `photoPath: "/images/founder/krishna-attipatla.jpg"`.
4. Run `npm run build` — the photograph will seamlessly replace the editorial placeholder.

### Editing Official Contact Info
Open `src/data/site.ts` and modify `siteConfig.contact.email` or `siteConfig.contact.location`.

---

## 7. License & Rights

© 2024–2026 HackerSpace Technologies (HST). All Rights Reserved. Proprietary software architecture and brand assets.
