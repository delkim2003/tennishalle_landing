# 🎾 ALFA-PADEL Burgau – Sponsoring Landing Page

> **einfach-online.dev** — Immersive Sponsoring-Landingpage für ALFA-PADEL Burgau, die erste Indoor-Padel-Anlage in der Thermen- und Vulkanlandregion Steiermark.

[![Astro](https://img.shields.io/badge/Astro-6.1.10-FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-3.15.12-8BC0D0?logo=alpine.js)](https://alpinejs.dev)
[![Express](https://img.shields.io/badge/Express-5.2.1-000000?logo=express)](https://expressjs.com)
[![Helmet.js](https://img.shields.io/badge/Helmet.js-8.1.0-673AB7)](https://helmetjs.github.io)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-92%2F100-F44B21?logo=lighthouse)](https://developers.google.com/web/tools/lighthouse)
[![WCAG 2.2 AA](https://img.shields.io/badge/WCAG-2.2_AA-006600)](https://www.w3.org/WAI/WCAG22/quickref/)
[![DSGVO](https://img.shields.io/badge/DSGVO-100%25_konform-009639)](https://dsgvo-gesetz.de)
[![Security Headers](https://img.shields.io/badge/Helmet-12%2F12_Headers-4CAF50)](https://helmetjs.github.io)
[![Node.js](https://img.shields.io/badge/Node-≥22.12.0-339933?logo=node.js)](https://nodejs.org)

---

## 📋 Projektüberblick

**ALFA-PADEL Burgau** ist eine hochmoderne Indoor-Padel-Anlage im Gewerbegebiet Burgau (8291 Burgau, Österreich). Sie verbindet Sport, Freizeit und Networking für lokale Sportler:innen sowie touristische Gäste der Thermen- und Vulkanlandregion.

### 🎯 Mission

- Aufbau eines sportlichen und sozialen Treffpunkts für die Region
- Förderung von Bewegung, Gesundheit und Gemeinschaft
- Stärkung der regionalen Wirtschaft durch Sponsoring-Kooperationen
- Ganzjähriger Indoor-Sportbetrieb — wetterunabhängig
- Nachhaltige Energieversorgung: Photovoltaikanlage, E-Bike-Ladestationen, Anbindung an den Feistritztalradweg (R8)

---

## 🚀 Quick Start

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Dev-Server starten (Astro HMR + Tailwind)
npm run dev

# 3. Produktions-Build
npm run build

# 4. Express-Produktionsserver mit Helmet.js
npm start
```

> **Hinweis:** `npm start` startet den Express-Server mit **Helmet.js Security Headern**, **Rate-Limiting**, **10kb Payload-Limit** und **Nodemailer SMTP-Integration**. Ohne `.env`-Konfiguration läuft der Kontakt-Endpunkt im **Testmodus** (validiert, sendet aber keine E-Mails).

---

## 🏗️ Tech Stack

| Kategorie | Technologie | Version | Zweck |
|-----------|-------------|---------|-------|
| **Framework** | [Astro](https://astro.build) | 6.1.10 | Statischer Site-Generator (SSG) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | 4.3.0 | Utility-First CSS mit `@tailwindcss/vite` |
| **Interaktivität** | [Alpine.js](https://alpinejs.dev) | 3.15.12 | Leichtgewichtiges Frontend-Framework |
| **SSG-SEO** | [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | — | Automatische `sitemap.xml`-Generierung |
| **Produktionsserver** | [Express](https://expressjs.com) | 5.2.1 | Node.js HTTP-Server mit Middleware |
| **Security Headers** | [Helmet.js](https://helmetjs.github.io) | 8.1.0 | 12/12 Security-Header via CSP, HSTS, X-Frame-Options |
| **Rate-Limiting** | [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) | 7.5.1 | DoS-Schutz: 5 Kontaktanfragen/15min pro IP |
| **E-Mail** | [Nodemailer](https://nodemailer.com) | 8.0.7 | DSGVO-konformer SMTP-Versand (EU-Hoster) |
| **Icons** | Inline SVGs / Phosphor Icons | — | Lokal gehostet, keine CDNs |
| **Fonts** | Lokale Webfonts | — | Lokal gehostet, DSGVO-konform |
| **QA** | [Lighthouse](https://developers.google.com/web/tools/lighthouse) | 13.3.0 | Performance-Audit |
| **QA** | [html-validate](https://html-validate.org/) | 11.1.0 | Semantik- & A11y-Validierung |

---

## 📁 Projektstruktur

```
solar-singularity/
├── .env                          # SMTP-Credentials (nicht in Git)
├── .gitignore                    # dist/, node_modules/, .env, .astro/
├── .htmlvalidate.json            # html-validate Konfiguration
├── astro.config.mjs              # Astro + Tailwind Vite + Sitemap Integration
├── package.json                  # Dependencies & Scripts
├── server.js                     # Express Produktionsserver (Helmet + Rate-Limit + Nodemailer)
├── public/
│   ├── _headers                  # Fallback Security-Header (CSP, HSTS, CORP)
│   ├── robots.txt                # Disallow: / → Indizierungssperre
│   ├── favicon.ico
│   ├── favicon.svg
│   └── assets/
│       ├── logo/
│       │   └── logo.jpeg         # ALFA-PADEL Logo
│       └── videos/
│           └── tennis-court-flythrough.mp4  # Hintergrundvideo
├── src/
│   ├── env.d.ts                  # Astro TypeScript Declarations
│   ├── layouts/
│   │   └── MainLayout.astro      # Layout: CSP, Meta-Tags, Skip-Link, Cookie-Banner, Footer
│   ├── pages/
│   │   ├── index.astro           # Hauptseite (komponiert alle Sections)
│   │   ├── impressum.astro       # Impressum (1-Klick von jeder Seite)
│   │   └── datenschutz.astro     # Datenschutzerklärung (1-Klick von jeder Seite)
│   ├── styles/
│   │   └── global.css            # Tailwind v4 + Custom Theme + Scroll-Reveal + Animationen
│   ├── data/
│   │   └── sponsors.ts           # Sponsor-Daten (9 Sponsoren in 3 Tiers)
│   ├── scripts/
│   │   ├── alpine-init.ts        # Alpine.js Initialisierung + Magic Helpers
│   │   ├── cookie-banner.ts      # DSGVO Cookie-Banner Logik (Opt-In/Opt-Out)
│   │   ├── scroll-reveal.ts      # IntersectionObserver + Scroll-Progress-Bar
│   │   └── video-scrub.ts        # requestAnimationFrame Video-Scrubbing
│   └── components/
│       ├── BookingWidget.astro   # Gläsernes Buchungs-Widget (Glassmorphism)
│       ├── CookieBanner.astro    # DSGVO Cookie-Banner mit Einwilligungsmanagement
│       ├── FactCard.astro        # Wiederverwendbare Fact-Box (Zahlen & Daten)
│       ├── GlassCard.astro       # Generische Glassmorphism-Karte
│       ├── LanguageSwitcher.astro # DE/EN Sprachumschalter
│       ├── LogoHero.astro        # Animiertes ALFA-PADEL Logo (Pulse + Glow)
│       ├── QuoteBlock.astro      # Zitat-Komponente mit Hintergrund
│       ├── SponsorCard.astro     # Sponsor-Karte mit Tier-Badge
│       ├── VideoBackground.astro # Video-Scrubbing Engine (RAF)
│       └── sections/
│           ├── HeroSection.astro     # Hero mit Video-Background + Logo + BookingWidget
│           ├── FactsSection.astro    # Zahlen & Fakten zur Anlage
│           ├── FeaturesSection.astro # Padel-Regeln & Spielweise
│           ├── QuoteSection.astro    # Inspirierendes Zitat
│           ├── SponsorsSection.astro # Sponsoren-Grid (Gold/Silver/Bronze)
│           ├── CTASection.astro      # Call-to-Action
│           ├── ContactSection.astro  # Kontaktformular + Standortinfos
│           └── FooterSection.astro   # Footer mit Navigation & Rechtlichem
└── dist/                          # Statischer Build-Output (npm run build)
```

---

## 🧩 Architektur & Komponentenbaum

```
MainLayout.astro
├── CookieBanner.astro (DSGVO)
├── LanguageSwitcher.astro (DE/EN)
├── Header (Skip-Link WCAG)
├── Scroll-Progress-Bar
├── <slot /> (Seiteninhalt)
│   └── index.astro
│       ├── HeroSection.astro
│       │   ├── VideoBackground.astro  → video-scrub.ts (RAF)
│       │   ├── LogoHero.astro         → animiertes SVG-Logo
│       │   └── BookingWidget.astro    → Glassmorphism CTA
│       ├── FactsSection.astro
│       │   └── FactCard.astro × 4     → Zahlen & Daten
│       ├── FeaturesSection.astro
│       │   └── GlassCard.astro × 3    → Padel-Regeln
│       ├── QuoteSection.astro
│       │   └── QuoteBlock.astro
│       ├── SponsorsSection.astro
│       │   ├── SponsorCard.astro × 4  → Gold-Tier
│       │   ├── SponsorCard.astro × 3  → Silver-Tier
│       │   └── SponsorCard.astro × 2  → Bronze-Tier
│       ├── CTASection.astro
│       └── ContactSection.astro       → Alpine.js Form + Nodemailer
│           └── POST /api/contact      → express-rate-limit (5/15min)
└── FooterSection.astro (Impressum · Datenschutz · Cookie-Einstellungen)
```

---

## 🎨 Design System

### Farbpalette

| Token | Hex | Tailwind | Verwendung |
|-------|-----|----------|-----------|
| `electric-lime` | `#CEFF05` | `--color-electric-lime` | Primär-Aktionen, CTAs, Akzente |
| `deep-blue` | `#0A192F` | `--color-deep-blue` | Hintergrund, Text auf Lime |
| `cyan-accent` | `#00D4FF` | `--color-cyan-accent` | Sekundäre Akzente, Highlights |

### UI-Prinzipien

- **Glassmorphism:** Alle Karten mit `backdrop-blur-xl`, `bg-white/10`, `border-white/20` — maximaler Kontrast zum bewegten Videohintergrund
- **Scroll-Reveal:** IntersectionObserver-basierte Einblend-Animationen für alle Content-Sections (`opacity: 0 → 1`, `translateY: 20px → 0`)
- **Progress Bar:** Lineare Scroll-Fortschrittsanzeige am oberen Bildschirmrand (0% → 100%)
- **Reduced Motion:** Respektiert `prefers-reduced-motion` — deaktiviert Animationen, Video läuft als Loop
- **Content-Visibility:** `content-visibility: auto` + `contain-intrinsic-size` für optimiertes Rendering
- **Bilingualität:** Alle UI-Texte in Deutsch (DE) und Englisch (EN) synchron

---

## 🔒 DSGVO & Sicherheit (Zero Tolerance)

### Security Headers — 12/12 aktiv ✅

| # | Header | Wert |
|---|--------|------|
| 1 | `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; ...` |
| 2 | `Cross-Origin-Opener-Policy` | `same-origin` |
| 3 | `Cross-Origin-Resource-Policy` | `same-origin` |
| 4 | `Origin-Agent-Cluster` | `?1` |
| 5 | `Referrer-Policy` | `strict-origin-when-cross-origin` |
| 6 | `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| 7 | `X-Content-Type-Options` | `nosniff` |
| 8 | `X-DNS-Prefetch-Control` | `off` |
| 9 | `X-Download-Options` | `noopen` |
| 10 | `X-Frame-Options` | `DENY` |
| 11 | `X-Permitted-Cross-Domain-Policies` | `none` |
| 12 | `X-XSS-Protection` | `0` |

### DSGVO-Compliance

| Maßnahme | Status |
|-----------|--------|
| **Local First** — Keine externen CDNs | ✅ 100% lokale Assets |
| **Keine US-Tracker** — Kein Google Analytics, kein Facebook Pixel | ✅ 0 Tracker |
| **Cookie-Banner** — Alpine.js Opt-In vor jeglicher Speicherung | ✅ 0 Cookies vor Banner-Interaktion |
| **Externe Ressourcen** — DSGVO-Scan: 0 externe Requests | ✅ Bestanden |
| **Webfonts** — Lokal gehostet | ✅ Keine Google Fonts |
| **Indizierungssperre** — `robots.txt: Disallow: /` | ✅ Aktiv |
| **Impressum / Datenschutz** — 1-Klick von jeder Seite erreichbar | ✅ Footer + Skip-Link |
| **Payload-Limit** — `express.json({ limit: '10kb' })` | ✅ DoS-Schutz |
| **Keine Datenbank-Speicherung** — Nur E-Mail-Versand, keine Personen-DB | ✅ |

### Kontaktformular — Mehrstufiger Schutz

```
POST /api/contact
    │
    ├── Rate-Limit: 5 Anfragen / 15 Minuten / IP
    ├── Honeypot: _gotcha Feld → Silent Fail (Bot-Erkennung)
    ├── Validierung: Pflichtfelder + E-Mail-Format
    ├── Sanitization: < > Zeichen strippen (XSS-Schutz)
    ├── SMTP-Guard: Ohne .env nur Testmodus (kein Crash)
    └── DSGVO-Checkbox: zwingend erforderlich
```

### CORS & Origin-Prüfung

- **Explizite Origin-Prüfung** — Keine Wildcard (`*`) bei POST-Endpunkten
- **Body-Parser-Limit** — `express.json({ limit: '10kb' })` verhindert Payload-DoS
- **Nodemailer TLS** — `rejectUnauthorized: true`

---

## 📊 QA & Audit (BRONZE+ Gates)

### QA-Status: ✅ BESTANDEN — 0 Fehler

| Gate | Schwelle | Ergebnis |
|------|----------|----------|
| **Lighthouse Performance** | > 90 | **92 / 100** ✅ |
| **Security Headers (Helmet)** | 12/12 | **12/12** ✅ |
| **Formular-Sanitization (Fuzzing)** | 8/8 | **8/8** ✅ |
| **CORS Wildcard-Verbot** | Keine Wildcards | ✅ |
| **Payload-Limit** | 10kb | ✅ |
| **Rate-Limit** | 5/15min Kontakt | ✅ |
| **DSGVO Cookies** | 0 vor Opt-In | ✅ |
| **DSGVO CDNs** | 0 extern | ✅ |
| **Robots.txt** | Disallow aktiv | ✅ |
| **Sitemap** | Automatisch via @astrojs/sitemap | ✅ |
| **SSG-Validierung** | Alle Seiten statisch generiert | ✅ |

### Lighthouse Detail

```
Lighthouse 13.3.0 | Headless Chrome 148 | Device: moto g power (Mobile)
======================================================================
Score:     92 / 100
FCP:       960ms (1.0s) ✅ Grün
```

### QA-Berichte (im Repository)

- `03_QA/QA_SECURITY_AUDIT_BERICHT.md` — Vollständiger Security-Audit (159 Zeilen Markdown)
- `03_QA/PRE_PRODUKTIONS_BERICHT.html` — Kundenfreundlicher HTML-Bericht
- `03_QA/lighthouse-report.json` — Lighthouse Rohdaten

---

## ⚙️ Konfiguration

### `.env` — Umgebungsvariablen (`server.js`)

```env
# SMTP-Server (EU-Hoster, DSGVO-konform)
SMTP_HOST=smtp.ionos.de
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=kontakt@alfa-padel.at
SMTP_PASS=******

# Empfänger-Adresse für Kontaktformular-E-Mails
CONTACT_EMAIL=kontakt@alfa-padel.at

# Express-Port (default: 4321)
PORT=4321
```

> **Ohne `.env`:** Der Server startet im **Testmodus**. Formulardaten werden validiert, aber keine E-Mails versendet — ideal für lokale Entwicklung.

### `astro.config.mjs`

```js
export default defineConfig({
  output: 'static',              // SSG – rein statischer Output
  site: 'https://alfa-padel.at', // Canonical URL für sitemap.xml
  integrations: [sitemap()],     // Automatische Sitemap-Generierung (SILBER-Gate #2)
  build: {
    format: 'file',              // Standard-Dateiendung für SPA-Fallback
    inlineStylesheets: 'never',  // Separate CSS-Dateien für Caching
  },
  vite: {
    plugins: [tailwindcss()],    // Tailwind v4 via @tailwindcss/vite
  },
});
```

---

## 📧 Kontaktformular & SMTP-Integration

### API-Endpunkt

**`POST /api/contact`**
```
Content-Type: application/json
Body: { name, email, phone?, subject, message, privacy, _gotcha? }
```

### Subject-Mapping

| Wert | Label (DE) | Label (EN) |
|------|-----------|-----------|
| `general` | Allgemeine Anfrage | General inquiry |
| `booking` | Buchungsanfrage | Booking inquiry |
| `sponsoring` | Sponsoring | Sponsoring |
| `school` | Schulkooperation | School partnership |
| `event` | Event & Turniere | Events & tournaments |

### SMTP-Testmodus

Ohne vollständige `.env`-Konfiguration arbeitet der Server im **SMTP-Guard-Modus**:

```json
{ "success": true, "message": "Nachricht validiert (Testmodus). / Message validated (test mode)." }
```

---

## 🎬 Video-Scrubbing Architektur

```
window.scrollY
      │
      ▼
scrollFraction = scrollY / (docHeight - viewportHeight)
      │
      ▼
targetTime = scrollFraction * video.duration
      │
      ▼
requestAnimationFrame → video.currentTime = targetTime
```

### Optimierungen

- **Single RAF-Queue:** Nur ein `requestAnimationFrame` pro Frame — kein Scroll-Jank
- **Passive Listener:** `passive: true` auf dem Scroll-Event
- **Mobile Fallback:** Auf Mobilgeräten (`< 1024px`) wird das Video als `autoplay loop` abgespielt
- **Reduced Motion:** Bei `prefers-reduced-motion` automatischer Loop statt Scrubbing
- **Cleanup:** Listener werden bei `astro:before-swap` (Astro View-Transitions) entfernt

---

## 🌐 Deployment

### Produktions-Build

```bash
npm run build     # Astro SSG → dist/
npm start         # Express + Helmet.js auf :4321
```

### Nginx Reverse-Proxy (Hetzner Cloud)

```nginx
server {
    listen 443 ssl http2;
    server_name alfa-padel.at www.alfa-padel.at;

    location / {
        proxy_pass http://127.0.0.1:4321;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

> **Hinweis:** Die Security-Header werden bereits von Helmet.js gesetzt. `public/_headers` dient als Fallback für Hosting-Umgebungen, die `_headers` unterstützen (z. B. Cloudflare Pages).

---

## 🧪 Tests & QA-Tools

```bash
# html-validate – Semantik & WCAG-Struktur
npx html-validate dist/

# Lighthouse – Performance & Accessibility
npx lighthouse http://localhost:4321 --output=json --output-path=lighthouse.json

# DSGVO-Scan – Externe Ressourcen prüfen
node dsgvo-scan.cjs
```

---

## 📜 Rechtliche Seiten

| Seite | URL | Erreichbarkeit |
|-------|-----|---------------|
| **Impressum** | `/impressum` | 1-Klick vom Footer jeder Seite |
| **Datenschutzerklärung** | `/datenschutz` | 1-Klick vom Footer jeder Seite |
| **Cookie-Einstellungen** | `#cookie-settings` | Link im Footer |

> **Rechtssicherheit:** Impressum und Datenschutz sind von **jeder Seite mit maximal 1 Klick** erreichbar — via Footer-Navigation und Skip-Link im Header.

---

## 🏅 Sponsoren-System

9 Sponsoren in 3 Tiers mit eigenem Styling:

| Tier | Anzahl | Badge-Farbe |
|------|--------|-------------|
| **Gold** | 4 | `bg-yellow-400` |
| **Silber** | 3 | `bg-gray-300` |
| **Bronze** | 2 | `bg-amber-600` |

Datengrundlage: `src/data/sponsors.ts` — `Sponsor`-Interface mit `name`, `tier`, `website`, `logo`, `description`.

---

## 📍 Standort & Zielgruppe

**ALFA-PADEL Burgau**  
Gewerbegebiet Burgau, 8291 Burgau, Österreich

- **Lokale Community:** Burgau, Bad Waltersdorf, Bad Blumau, Stegersbach
- **Tourismus:** Gäste der Thermen- und Vulkanlandregion
- **Bildung & Nachwuchs:** Schulkooperationen
- **Infrastruktur:** Photovoltaikanlage, E-Bike-Ladestationen, Feistritztalradweg (R8)

---

## 👥 Entwicklung & Credits

**Entwicklung & Design:** [einfach-online.dev](https://einfach-online.dev) — Senior Web Development Agency  
**Kunde:** ALFA-PADEL Burgau  
**Service-Paket:** SILBER PLUS (Astro SSG + Express + Security Middleware)  
**QA & Audit:** Agency OS v2.5 — 16.05.2026  

---

## 📄 Lizenz

Privat / Projekt-spezifisch. Alle Rechte vorbehalten.  
© 2026 einfach-online.dev · ALFA-PADEL Burgau