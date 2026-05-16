/**
 * Cookie-Banner Alpine.js Data Registration
 * Agency Standard: Vite-bundled externe Script (keine inline-scripts für CSP)
 */
import type { Alpine } from 'alpinejs';

document.addEventListener('alpine:init', () => {
  const A = (window as any).Alpine as Alpine;
  A.data('cookieBanner', () => ({
    show: false,
    consent: null as { necessary: boolean; analytics: boolean; timestamp: string } | null,
    init() {
      const stored = (window as any).Cookies.get('cookie_consent');
      if (!stored) { this.show = true; }
      else { try { this.consent = JSON.parse(stored); } catch (e) { /* ignore */ } }
    },
    acceptAll() {
      this.consent = { necessary: true, analytics: true, timestamp: new Date().toISOString() };
      (window as any).Cookies.set('cookie_consent', JSON.stringify(this.consent), { expires: 30, sameSite: 'strict' });
      this.show = false;
    },
    acceptNecessary() {
      this.consent = { necessary: true, analytics: false, timestamp: new Date().toISOString() };
      (window as any).Cookies.set('cookie_consent', JSON.stringify(this.consent), { expires: 30, sameSite: 'strict' });
      this.show = false;
    }
  }));
});
