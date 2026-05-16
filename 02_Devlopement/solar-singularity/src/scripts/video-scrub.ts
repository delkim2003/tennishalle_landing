/**
 * Video-Scrubbing: Scroll-gesteuertes Hintergrundvideo
 * Agency Standard: Vite-bundled externe Script (keine inline-scripts für CSP)
 * Performance: requestAnimationFrame-Throttling, passive Scroll-Listener
 */
(function () {
  'use strict';

  const video = document.getElementById('bg-video') as HTMLVideoElement | null;
  if (!video) return;
  const v = video;

  let raf: number | null = null;
  let target = 0;
  let ready = false;
  let maxScroll = 0;
  let duration = 0;

  // Cache des maximalen Scroll-Werts (scrollHeight – clientHeight)
  function updateMaxScroll() {
    maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  }

  function onScroll() {
    if (!ready || !duration) return;

    target = (window.scrollY / (maxScroll || 1)) * duration;
    if (raf === null) {
      raf = requestAnimationFrame(() => {
        if (Number.isFinite(target)) {
          v.currentTime = target;
        }
        raf = null;
      });
    }
  }

  function init() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.innerWidth < 768;

    if (reduced || mobile) {
      v.pause();
      v.style.display = 'none';
      return;
    }

    duration = v.duration;
    updateMaxScroll();
    ready = true;

    // Video MUSS pausiert bleiben – currentTime wird ausschließlich per Scroll gesetzt
    v.pause();
    v.currentTime = 0;
    // Initialen Frame rendern
    v.addEventListener('seeked', function seekHandler() {
      v.removeEventListener('seeked', seekHandler);
    }, { once: true });
  }

  // Warte auf geladene Metadaten, bevor init() läuft (defer-safe)
  if (v.readyState >= 1) {
    init();
  } else {
    v.addEventListener('loadedmetadata', function onMeta() {
      v.removeEventListener('loadedmetadata', onMeta);
      init();
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateMaxScroll, { passive: true });
})();
