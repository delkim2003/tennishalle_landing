/**
 * Video-Scrubbing: Scroll-gesteuertes Hintergrundvideo
 * Agency Standard: CSP-kompatible IIFE (keine inline-scripts, keine ES-Module)
 * Performance: requestAnimationFrame-Throttling, passive Scroll-Listener
 */
(function () {
  'use strict';

  var video = document.getElementById('bg-video');
  if (!video) return;
  var v = video;

  // Warten auf 'loadedmetadata', um sicherzustellen, dass video.duration verfügbar ist
  v.addEventListener('loadedmetadata', function() {
    if (!v.duration) {
      console.error('[video-scrub] Video duration not available.');
      return;
    }
    ready = true; // Nur hier 'ready' setzen, wenn Dauer verfügbar ist
    v.pause();
    v.currentTime = 0;
    // Initialen Frame rendern
    v.addEventListener('seeked', function seekHandler() {
      v.removeEventListener('seeked', seekHandler);
    }, { once: true });
  }, { once: true });

  // Wenn das Video bereits geladen ist (z.B. im Cache), direkt initialisieren
  if (v.duration) {
    ready = true;
    v.pause();
    v.currentTime = 0;
    v.addEventListener('seeked', function seekHandler() {
      v.removeEventListener('seeked', seekHandler);
    }, { once: true });
  }

  var raf = null;
  var target = 0;
  var ready = false;
  var maxScroll = 0;

  // Cache des maximalen Scroll-Werts (scrollHeight – clientHeight)
  function updateMaxScroll() {
    maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  }

  function onScroll() {
    if (!ready) return;

    target = (window.scrollY / (maxScroll || 1)) * v.duration;
    if (raf === null) {
      raf = requestAnimationFrame(function () {
        if (isFinite(target)) {
          v.currentTime = target;
        }
        raf = null;
      });
    }
  }

  function init() {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var mobile = window.innerWidth < 768;

    if (reduced || mobile) {
      v.pause();
      v.style.display = 'none';
      return;
    }

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

  init();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateMaxScroll, { passive: true });
})();