/**
 * Scroll-Progress Bar & Scroll-Reveal Animation
 * Agency Standard: Vite-bundled externe Script (keine inline-scripts für CSP)
 */
(function () {
  'use strict';

  // --- Scroll Progress Bar ---
  const progressBar = document.getElementById('scroll-progress') as HTMLElement | null;
  if (progressBar) {
    const bar = progressBar;
    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // --- Scroll Reveal (IntersectionObserver) ---
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
      document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    }
    observeReveals();

    // Dynamically added elements
    const bodyObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const el = node as Element;
            if (el.classList && el.classList.contains('reveal')) {
              revealObserver.observe(el);
            }
            if (el.querySelectorAll) {
              el.querySelectorAll('.reveal').forEach((child) => revealObserver.observe(child));
            }
          }
        });
      });
    });
    bodyObserver.observe(document.body, { childList: true, subtree: true });
  } else {
    // Show everything immediately when reduced motion is preferred
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }
})();