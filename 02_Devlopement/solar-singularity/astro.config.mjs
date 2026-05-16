// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * Astro-Konfiguration – SILBER PLUS Standard
 * Statischer Output, lokale Assets, kein CDN
 * Tailwind v4 via @tailwindcss/vite (Vite 5–8, Astro 6 kompatibel)
 * @astrojs/sitemap: Automatische sitemap.xml-Generierung (SILBER-Gate #2)
 */
export default defineConfig({
  output: 'static',
  site: 'https://alfa-padel.at',
  integrations: [sitemap()],
  build: {
    format: 'file',
    inlineStylesheets: 'never',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 500,
      sourcemap: false,
    },
    worker: {
      format: 'es',
    },
  },
});
