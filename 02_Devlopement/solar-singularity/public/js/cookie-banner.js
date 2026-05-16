/**
 * Cookie Banner – Pure Vanilla JS
 * Keine Alpine-Abhängigkeit. Keine Race Conditions. Keine Frameworks.
 * DSGVO-konform, Agency Standard SILBER PLUS.
 *
 * HTML-Struktur (CookieBanner.astro):
 *   div#cookie-banner > h3#cookie-banner-title, p#cookie-banner-desc,
 *   button#cookie-btn-necessary, button#cookie-btn-all,
 *   span#cookie-banner-detail-de, span#cookie-banner-detail-en
 *
 * Footer-Trigger:
 *   button[onclick*="open-cookie-settings"] öffnet den Banner erneut.
 */
(function () {
  'use strict';

  var CONSENT_KEY = 'cookie_consent';
  var LANG_KEY = 'preferred_lang';
  var STORAGE = localStorage;

  // === Hilfsfunktionen ===
  function readConsent() {
    try {
      var raw = getCookie(CONSENT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function writeConsent(consent) {
    var json = JSON.stringify(consent);
    // 30 Tage, SameSite=Strict, Secure falls HTTPS
    var secure = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = CONSENT_KEY + '=' + encodeURIComponent(json) +
      '; path=/; max-age=' + (60 * 60 * 24 * 30) +
      '; SameSite=Strict' + secure;
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function removeCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict';
  }

  function getLang() {
    var stored = STORAGE.getItem(LANG_KEY);
    if (stored === 'en' || stored === 'de') return stored;
    return (navigator.language || '').startsWith('de') ? 'de' : 'en';
  }

  function setLangTexts(lang) {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    var title = document.getElementById('cookie-banner-title');
    var desc = document.getElementById('cookie-banner-desc');
    var btnNecessary = document.getElementById('cookie-btn-necessary');
    var btnAll = document.getElementById('cookie-btn-all');
    var detailDe = document.getElementById('cookie-banner-detail-de');
    var detailEn = document.getElementById('cookie-banner-detail-en');

    if (lang === 'en') {
      if (title) title.textContent = 'Cookie Settings';
      if (desc) desc.textContent = 'We use technically necessary cookies and optional analytics cookies. You can adjust your preferences at any time.';
      if (btnNecessary) btnNecessary.textContent = 'Necessary Only';
      if (btnAll) btnAll.textContent = 'Accept All';
      if (detailDe) detailDe.classList.add('hidden');
      if (detailEn) detailEn.classList.remove('hidden');
    } else {
      if (title) title.textContent = 'Cookie-Einstellungen';
      if (desc) desc.textContent = 'Wir verwenden technisch notwendige Cookies und optionale Analyse-Cookies. Du kannst deine Präferenzen jederzeit anpassen.';
      if (btnNecessary) btnNecessary.textContent = 'Nur Notwendige';
      if (btnAll) btnAll.textContent = 'Alle Akzeptieren';
      if (detailDe) detailDe.classList.remove('hidden');
      if (detailEn) detailEn.classList.add('hidden');
    }
  }

  function showBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.classList.remove('hidden');
    banner.setAttribute('aria-hidden', 'false');
    // Fokus auf ersten Button für A11y
    var firstBtn = banner.querySelector('button');
    if (firstBtn) setTimeout(function () { firstBtn.focus(); }, 100);
  }

  function hideBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.classList.add('hidden');
    banner.setAttribute('aria-hidden', 'true');
  }

  function accept(analytics) {
    var consent = {
      necessary: true,
      analytics: !!analytics,
      timestamp: new Date().toISOString()
    };
    writeConsent(consent);
    hideBanner();

    if (analytics) {
      console.log('[cookie-banner] Analytics-Cookies accepted.');
      // Hier ggf. Analytics-Tracking aktivieren
    }
  }

  // === Event Listener ===
  function bindButtons() {
    var btnNecessary = document.getElementById('cookie-btn-necessary');
    var btnAll = document.getElementById('cookie-btn-all');

    if (btnNecessary) {
      btnNecessary.addEventListener('click', function () { accept(false); });
    }
    if (btnAll) {
      btnAll.addEventListener('click', function () { accept(true); });
    }

    // Global Event vom Footer
    window.addEventListener('open-cookie-settings', function () {
      removeCookie(CONSENT_KEY);
      showBanner();
    });
  }

  // === Initialisierung ===
  function init() {
    var consent = readConsent();
    if (consent) {
      // Consent existiert bereits → Banner nicht anzeigen
      // Analytics ggf. aktivieren
      return;
    }

    // Consent nicht vorhanden → Banner anzeigen
    var lang = getLang();
    setLangTexts(lang);
    showBanner();
  }

  // DOM-ready oder sofort, falls schon geladen
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      bindButtons();
      init();
    });
  } else {
    bindButtons();
    init();
  }

  console.log('[cookie-banner] Vanilla JS Cookie-Consent initialisiert.');
})();