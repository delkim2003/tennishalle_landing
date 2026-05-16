# 🎾 Solar Singularity – Tennis-Club Landingpage

> **Demo-Präsenz** | Service-Paket **SILBER** | Astro SSG + Tailwind CSS  
> **Live:** [demo3.einfach-online.dev](https://demo3.einfach-online.dev)  
> **Hosting:** IONOS Webspace (Apache, EU)  
> **Stand:** 16. Mai 2026

---

## 📋 Projektdokumentation

### 🔭 Überblick

**Solar Singularity** ist eine hochperformante, DSGVO-konforme Tennis-Club-Landingpage – entwickelt als Demo-Präsenz für das einfach-online.dev Portfolio. Die Seite demonstriert das **SILBER-Service-Paket**: Astro Static Site Generation (SSG), Tailwind CSS, Alpine.js-Interaktivität und multilinguale Unterstützung (DE/EN), deployt auf IONOS-Webspace.

### 🏗️ Tech-Stack (SILBER-Paket)

| Kategorie | Technologie | Begründung |
|-----------|------------|------------|
| **Framework** | [Astro 5](https://astro.build) | Static Site Generation – 0 KB JS am Client standardmäßig |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) | Utility-First, Tree-Shaken im Build |
| **Interaktivität** | [Alpine.js 3](https://alpinejs.dev) | Leichtgewichtige Reaktivität (Cookie-Banner, Booking-Widget) |
| **Icons** | [Phosphor Icons](https://phosphoricons.com) | Lokal gehostet via @phosphor-icons/core |
| **Fonts** | Lokal gehostetes System-Font-Stack | Keine externen Google-Fonts-Anfragen |
| **Build** | Vite (via Astro) | Blitzschnelle HMR-Entwicklung, optimierter Production-Build |
| **Hosting** | IONOS Webspace (Apache) | EU-Standort, DSGVO-konform |
| **SSL** | IONOS Zertifikat (autom.) | HTTPS-Erzwingung via `public/_headers` |

### 📁 Projektstruktur

```
solar-singularity/
├── public/                          # Statische Assets (direkt kopiert)
│   ├── _headers                     # Security-Header (CSP, HSTS, X-Frame)
│   ├── robots.txt                   # Crawling-Regeln + Sitemap-Referenz
│   ├── favicon.ico / favicon.svg    # Favicons
│   └── js/                          # Kompilierte Alpine.js-Scripts
│       ├── alpine-init.js           # Alpine-Initialisierung (DE/EN-Store)
│       ├── cookie-banner.js         # DSGVO-Cookie-Banner-Logik
│       ├── scroll-reveal.js         # Intersection-Observer-Animationen
│       └── video-scrub.js           # Video-Scrub-Animation (Scroll-gesteuert)
│
├── src/
│   ├── components/                  # Wiederverwendbare Astro-Komponenten
│   │   ├── BookingWidget.astro      # Buchungs-Widget (Alpine-gesteuert)
│   │   ├── CookieBanner.astro       # DSGVO-Cookie-Zustimmungsbanner
│   │   ├── FactCard.astro           # Zahlen/Daten/Fakten-Karte
│   │   ├── GlassCard.astro          # Glassmorphismus-Karte (Features)
│   │   ├── LanguageSwitcher.astro   # DE/EN Sprachumschalter
│   │   ├── LogoHero.astro           # Animiertes Logo mit Glow-Effekt
│   │   ├── QuoteBlock.astro         # Zitat-Block mit Autor
│   │   ├── SponsorCard.astro        # Sponsor-Logo-Karte
│   │   ├── VideoBackground.astro    # Video-Hintergrund (optimiertes WebM/MP4)
│   │   └── sections/                # Seiten-Sections
│   │       ├── HeroSection.astro    # Hero mit Video-Background + CTA
│   │       ├── FeaturesSection.astro # 3-Feature-Grid mit GlassCards
│   │       ├── FactsSection.astro   # Statistiken & Kennzahlen
│   │       ├── QuoteSection.astro   # Testimonial-Zitat
│   │       ├── SponsorsSection.astro # Sponsor-Grid
│   │       ├── ContactSection.astro # Kontaktformular + Standort
│   │       ├── CTASection.astro     # Call-to-Action (Mitglied werden)
│   │       └── FooterSection.astro  # Footer mit rechtlichen Links
│   │
│   ├── data/
│   │   └── sponsors.ts              # Sponsor-Stammdaten (Name, Logo, URL)
│   │
│   ├── layouts/
│   │   └── MainLayout.astro         # Haupt-Layout (Head, Meta, Header, Footer)
│   │
│   ├── pages/
│   │   ├── index.astro              # Startseite (One-Pager, alle Sections)
│   │   ├── impressum.astro          # Impressum (rechtlich erforderlich)
│   │   └── datenschutz.astro        # Datenschutzerklärung (rechtlich erforderlich)
│   │
│   ├── scripts/
│   │   ├── alpine-init.ts           # Alpine.js Store + i18n-Logik
│   │   ├── cookie-banner.ts         # Cookie-Consent-Management
│   │   ├── scroll-reveal.ts         # Scrollbasierte Reveal-Animationen
│   │   └── video-scrub.ts           # Video-Frame-Scrubbing via Scroll
│   │
│   └── styles/
│       └── global.css               # Globale Styles (Tailwind, Custom Properties)
│
├── dist/                            # Build-Output (SSG-generiert)
│   ├── index.html                   # Startseite (~77 KB, optimiert)
│   ├── impressum.html               # Impressum (~12 KB)
│   ├── datenschutz.html             # Datenschutzerklärung (~17 KB)
│   ├── robots.txt                   # Crawling-Regeln
│   ├── sitemap-0.xml                # Sitemap
│   ├── sitemap-index.xml            # Sitemap-Index
│   ├── _headers                     # Security-Header
│   └── assets/                      # Optimierte Assets (JS, CSS, Videos, Fonts)
│
├── 03_QA/                           # Qualitätssicherung (Projekt-Root)
│   ├── QA_SECURITY_AUDIT_BERICHT.md # Sicherheits-Audit (0 CVEs, 12/12 Header-Checks bestanden)
│   └── PRE_PRODUKTIONS_BERICHT.html # Kundenfreundlicher HTML-Bericht
│
├── astro.config.mjs                 # Astro-Konfiguration (SSG, IONOS-Deployment)
├── package.json                     # Dependencies & Scripts
├── tsconfig.json                    # TypeScript-Konfiguration
├── .htmlvalidate.json               # HTML-Validierungskonfiguration
├── .gitignore                       # Git-Ausschlussregeln
└── .env                             # Umgebungsvariablen (Build-Konfiguration)
```

---

## 🚀 Entwicklung

### Voraussetzungen

- **Node.js** ≥ 20 LTS
- **npm** ≥ 10

### Installation

```bash
npm install
```

### Entwicklungsserver

```bash
npm run dev
# → http://localhost:4321
```

### Production-Build

```bash
npm run build
# → Output: dist/
```

Der Build wird automatisch via `astro.config.mjs` für IONOS-Webspace optimiert:
- Ausgabe-Pfad: `dist/`
- Asset-Präfix: `/assets/`
- `_headers`-Datei wird als statische Datei behandelt (notwendig für IONOS Apache `.htaccess`-Ersatz)
- SSG-Modus (`output: 'static'`)

### Build-Vorschau

```bash
npm run preview
# → http://localhost:4321 (Build-Vorschau)
```

---

## 🌍 Deployment

### Zielplattform: IONOS Webspace

Die Seite wird als statisches HTML/CSS/JS auf IONOS-Webspace (Apache) deployt. Das Deployment erfolgt via SFTP (manuell oder per CI/CD-Skript).

**Wichtige Konfiguration für IONOS:**

1. **`public/_headers`** → Wird als `_headers` in `dist/` kopiert und steuert:
   - `Content-Security-Policy` (strikte CSP, keine unsicheren Quellen)
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy` (minimale Berechtigungen)
   - `Strict-Transport-Security` (HSTS, 1 Jahr)

2. **`.htaccess` (IONOS-spezifisch):** Für Clean-URLs und SSL-Erzwingung muss auf dem IONOS-Server eine `.htaccess` hinterlegt werden (nicht im Repository, da Server-seitig konfiguriert).

3. **Domain:** `demo3.einfach-online.dev` → zeigt auf `/webseiten/demo/paddelburgau/`

### Deployment-Schritte

```bash
# 1. Build erstellen
npm run build

# 2. dist/-Inhalt via SFTP nach IONOS übertragen
#    Ziel: /webseiten/demo/paddelburgau/

# 3. Erfolgskontrolle
curl -sI https://demo3.einfach-online.dev/
# Erwartet: HTTP/1.1 200 OK
```

---

## 🏆 QA-Ergebnisse (SILBER-Gates)

Volle QA-Dokumentation unter `../03_QA/`.

### Performance (Lighthouse)

| Metrik | Wert | Schwellwert | Status |
|--------|------|-------------|--------|
| Performance | **99** | ≥ 95 | ✅ |
| Accessibility | **100** | ≥ 90 | ✅ |
| Best Practices | **96** | ≥ 90 | ✅ |
| SEO | **100** | ≥ 90 | ✅ |

> Lighthouse-Report unter `../03_QA/lighthouse-report.json`

### Sicherheit (Security Audit)

| Check | Ergebnis |
|-------|----------|
| `npm audit` Vulnerabilities | **0** ✅ |
| Security-Header (12/12) | Alle aktiv ✅ |
| CORS-Wildcards | Keine ✅ |
| Body-Parser-Limit | Nicht anwendbar (statische Site, kein Backend) |
| CDN-Abhängigkeiten | **0 externe Requests** ✅ |
| DSGVO-Cookie-Scan | 0 Cookies vor Consent ✅ |
| Lokale Assets (100%) | Alle Assets lokal gehostet ✅ |

> Vollständiger Audit-Bericht: `../03_QA/QA_SECURITY_AUDIT_BERICHT.md`

### Semantic & Accessibility (SILBER-Gate)

| Check | Ergebnis |
|-------|----------|
| HTML-Validierung (`html-validate`) | Fehlerfrei ✅ |
| WCAG 2.2 AA (`pa11y`) | Bestanden ✅ |
| Semantische Struktur | `<main>`, `<section>`, `<nav>`, `<footer>` korrekt ✅ |
| ARIA-Labels | Alle interaktiven Elemente beschriftet ✅ |
| Kontrast-Ratio | ≥ 4.5:1 (AA) ✅ |

### SEO-Integrität (SILBER-Gate)

| Check | Ergebnis |
|-------|----------|
| `robots.txt` | Vorhanden, valide ✅ |
| `sitemap-index.xml` | Generiert, alle URLs enthalten ✅ |
| Meta-Tags | `title`, `description`, `og:*`, `twitter:*` ✅ |
| Canonical-URLs | Korrekt gesetzt ✅ |
| Broken Links | Keine (0/3 Seiten) ✅ |
| Rechtliche Deep-Links | Impressum & Datenschutz 1-Klick erreichbar ✅ |

### DSGVO-Compliance (SILBER-Gate)

| Check | Ergebnis |
|-------|----------|
| Impressum | Von jeder Seite 1-Klick erreichbar ✅ |
| Datenschutzerklärung | Von jeder Seite 1-Klick erreichbar ✅ |
| Cookie-Banner | Vorhanden, Opt-in-Prinzip ✅ |
| Cookies vor Consent | 0 (null) ✅ |
| localStorage vor Consent | 0 (null) ✅ |
| Externe Tracker | Keine (0) ✅ |
| CDN-Assets | 0% extern, 100% lokal ✅ |

---

## 🎨 Design-System

### Farbpalette

| Farbe | Hex | Verwendung |
|-------|-----|------------|
| Tennis-Green | `#97D700` | Primary-Akzente, CTAs, Hover-States |
| Court-Clay | `#E45C2E` | Secondary-Akzente, Warnungen |
| Deep-Dark | `#0A0A0F` | Hintergrund (Dark Mode) |
| Card-Glass | `rgba(255,255,255,0.05)` | Glassmorphismus-Karten |
| Text-Primary | `#F5F5F5` | Haupttext |
| Text-Secondary | `#A0A0B0` | Sekundärtext |

### Typografie

- **System-Font-Stack:** `'Inter', system-ui, -apple-system, sans-serif`
- **Headings:** Fett, mit Gradient-Text-Effekt (Grün → Weiß)
- **Fließtext:** 1rem/1.6, optimale Lesbarkeit

### Komponenten-Bibliothek

- **GlassCard:** Glassmorphismus mit `backdrop-filter: blur(20px)`, Hover-Glow-Effekt
- **FactCard:** Große Zahlen mit animiertem Count-Up, subtilem Gradient-Rand
- **QuoteBlock:** Zitat mit dekorativem Anführungszeichen, Autor-Avatar
- **SponsorCard:** Logo-Darstellung mit Hover-Scale-Effekt
- **BookingWidget:** Alpine.js-gesteuert, 3-Schritt-Formular (Personen → Datum → Kontakt)
- **CookieBanner:** Slide-up-Animation, DE/EN-Text, "Alle akzeptieren" / "Nur essenzielle"
- **LanguageSwitcher:** DE ↔ EN Toggle, persistent via localStorage
- **LogoHero:** SVG-Logo mit CSS-Glow-Animation (Puls-Effekt)
- **VideoBackground:** Optimiertes `<video>` mit Mobile-WebM-Fallback, Scroll-Scrub

---

## 🌐 Internationalisierung (i18n)

Die Seite unterstützt **Deutsch (DE)** und **Englisch (EN)**. Die Sprachumschaltung erfolgt über den **LanguageSwitcher** (oben rechts im Header) und wird via Alpine.js `$store` und `localStorage` persistiert.

**Implementierung:**
- Alpine.js Store (`alpine-init.ts`) hält `currentLang`, `translations`-Objekt und `t(key)`-Helper
- Alle Text-Inhalte sind als `data-i18n`-Attribute oder Alpine `x-text`-Bindings definiert
- Cookie-Banner, Booking-Widget und Footer passen sich dynamisch an

---

## 🛡️ Sicherheit

- **Helmet.js CSP-Äquivalent** via `public/_headers` (IONOS Apache)
- **Keine externen CDNs** – alle Assets (Fonts, Icons, Skripte) lokal gehostet
- **Keine Tracker** – 0 Google Analytics, 0 Facebook Pixel, 0 externe Requests
- **X-Frame-Options: DENY** – Clickjacking-Schutz
- **HSTS** – Erzwingung von HTTPS für 1 Jahr
- **Permissions-Policy** – Minimal-Permission-Set (kein Mikrofon, Kamera, Standort)

---

## 📊 Build-Statistiken

| Metrik | Wert |
|--------|------|
| Seiten (SSG) | 3 HTML-Seiten |
| JS am Client | ~8 KB (Alpine.js + Scripts, brotli-komprimiert) |
| CSS gesamt | ~15 KB (Tailwind, purged, brotli-komprimiert) |
| Video-Assets | 6 Videos (MP4 + WebM, ~16 MB gesamt, optimiert) |
| Build-Zeit | ~8s (Astro SSG) |
| 0 JS (Standard) | Alle Seiten funktionieren ohne JS (nur Alpine-Hydration on-demand) |

---

## 📝 Scripts (package.json)

| Script | Beschreibung |
|--------|-------------|
| `npm run dev` | Astro-Dev-Server (HMR) |
| `npm run build` | Production-Build (SSG) |
| `npm run preview` | Build-Vorschau |
| `npm run astro` | Astro-CLI-Zugriff |

---

## 🤝 Mitwirkende

- **Entwicklung & Design:** einfach-online.dev (Philipp)
- **QA & Audit:** Agency OS v2.5 – Automatisierte SILBER-Gate-Prüfung
- **Hosting:** IONOS (EU, DSGVO-konform)

---

## 📄 Lizenz

Alle Rechte vorbehalten. Dieses Projekt ist eine Demo-Präsenz des einfach-online.dev Portfolios und nicht zur Weiterverwendung freigegeben.

---

> **🍃 Solar Singularity** – *Where tennis meets the future.* | **Solar Singularity** – *Wo Tennis auf Zukunft trifft.*