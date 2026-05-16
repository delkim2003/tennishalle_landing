/**
 * Alpine.js Initialization
 * Agency Standard: CSP-kompatible IIFE (keine inline-scripts, keine ES-Module)
 *
 * LADEREIHENFOLGE (zwingend):
 *   1. alpine.min.js     → setzt window.Alpine
 *   2. alpine-init.js    → registriert Store, ruft Alpine.start() auf
 *
 * HINWEIS: Der Cookie-Banner läuft als reines Vanilla JS (cookie-banner.js).
 *          Alpine ist nur noch für den Language-Switcher zuständig.
 */
(function () {
  'use strict';

  var Alpine = window.Alpine;

  // Guard: Alpine muss geladen sein
  if (!Alpine) {
    console.error('[alpine-init] Alpine.js nicht geladen – Abbruch.');
    return;
  }

  var initialLang = localStorage.getItem('preferred_lang') ||
    (navigator.language && navigator.language.startsWith('de') ? 'de' : 'en');
  document.documentElement.lang = initialLang;

  // === Globaler Sprach-Store ===
  Alpine.store('lang', {
    current: initialLang,
    get value() { return this.current; },
    set value(val) {
      this.current = val;
      localStorage.setItem('preferred_lang', val);
      document.documentElement.lang = val;
    }
  });

  // toString/valueOf für Store (Template-Literals, Vergleiche)
  var langStore = Alpine.store('lang');
  Object.defineProperty(langStore, 'toString', {
    value: function () { return this.current; }
  });
  Object.defineProperty(langStore, 'valueOf', {
    value: function () { return this.current; }
  });

  // === Alpine starten ===
  Alpine.start();
  console.log('[alpine-init] Language Store registriert, Alpine gestartet.');
})();