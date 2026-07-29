/* cyber:cyber — inertia smooth scroll (Lenis-lite).
   Fail-safe by design: disabled for reduced-motion + touch; the wheel handler
   is wrapped so any error self-removes the listener and restores native scroll. */
(function () {
  try {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    if (matchMedia('(hover:none),(pointer:coarse)').matches) return;
    if (!('requestAnimationFrame' in window)) return;

    var target = window.scrollY || 0, current = target, ease = 0.11, running = false;
    function maxScroll() { return Math.max(0, (document.documentElement.scrollHeight || 0) - window.innerHeight); }
    function loop() {
      var d = target - current;
      current += d * ease;
      if (Math.abs(d) < 0.5) { current = target; window.scrollTo(0, Math.round(current)); running = false; return; }
      window.scrollTo(0, current);
      requestAnimationFrame(loop);
    }
    function onWheel(e) {
      try {
        if (e.ctrlKey) return;            // let pinch-zoom through
        if (e.deltaMode !== 0) return;    // line/page-mode devices: keep native scroll
        e.preventDefault();
        target = Math.max(0, Math.min(target + e.deltaY, maxScroll()));
        if (!running) { running = true; current = window.scrollY; requestAnimationFrame(loop); }
      } catch (err) { window.removeEventListener('wheel', onWheel, { passive: false }); }
    }
    window.addEventListener('wheel', onWheel, { passive: false });
    // keep target in sync when scroll happens by other means (keyboard, anchor, scrollbar, hash jump)
    window.addEventListener('scroll', function () { if (!running) { target = window.scrollY; current = window.scrollY; } }, { passive: true });
    window.addEventListener('resize', function () { target = Math.min(target, maxScroll()); }, { passive: true });
  } catch (err) { /* any setup failure -> native scroll, no-op */ }
})();
