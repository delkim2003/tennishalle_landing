/**
 * Scroll-Progress Bar & Scroll-Reveal Animation
 * Agency Standard: CSP-kompatible IIFE (keine inline-scripts, keine ES-Module)
 */
(function () {
  'use strict';

  // --- Scroll Progress Bar ---
  var progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    var bar = progressBar;
    function updateProgress() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // --- Scroll Reveal (IntersectionObserver) ---
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            requestAnimationFrame(function () {
              entry.target.classList.add('is-visible');
            });
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    function observeReveals() {
      document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });
    }
    observeReveals();

    // Dynamically added elements
    var bodyObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            var el = node;
            if (el.classList && el.classList.contains('reveal')) {
              revealObserver.observe(el);
            }
            if (el.querySelectorAll) {
              el.querySelectorAll('.reveal').forEach(function (child) { revealObserver.observe(child); });
            }
          }
        });
      });
    });
    bodyObserver.observe(document.body, { childList: true, subtree: true });
  } else {
    // Show everything immediately when reduced motion is preferred
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();