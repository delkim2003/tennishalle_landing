/**
 * Alpine.js + Cookies Initialization
 * Agency Standard: Vite-bundled externe Script (keine inline-scripts für CSP)
 */
import Alpine from 'alpinejs';
import Cookies from 'js-cookie';

(window as any).Alpine = Alpine;
(window as any).Cookies = Cookies;

const initialLang = localStorage.getItem('preferred_lang') || (navigator.language?.startsWith('de') ? 'de' : 'en');
document.documentElement.lang = initialLang;

// Globaler Sprach-Store
(Alpine.store as any)('lang', {
  current: initialLang,
  get value() { return this.current; },
  set value(val: string) {
    this.current = val;
    localStorage.setItem('preferred_lang', val);
    document.documentElement.lang = val;
  }
});

Object.defineProperty((Alpine as any).store('lang'), 'toString', {
  value: function () { return this.current; }
});
Object.defineProperty((Alpine as any).store('lang'), 'valueOf', {
  value: function () { return this.current; }
});

Alpine.start();
