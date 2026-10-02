/* WP-0 theme toggle — docs/OVERHAUL-2026-08.md §4 (WP-0). 30 Aug 2026.

   Builds the light/dark control at runtime (no JS → no control, which the
   package accepts) and persists the choice to localStorage("kaido-theme").
   The FIRST-PAINT read lives inline in each page's <head>, before the
   stylesheet, so a stored choice applies before anything renders; this file
   only builds the button and flips the attribute afterwards.

   Until the WP-1 gate ratifies the dark palette, "light" is the default in
   the boot snippet AND pinned as a static attribute on every <html>, so the
   live site is visually identical to the pre-WP-0 build. Components do not
   consume the role tokens yet, so on body.paper pages toggling changes only
   this control's own state — that is the deliverable: the mechanism, not
   the repaint. */
(function () {
  "use strict";
  var KEY = "kaido-theme";
  var root = document.documentElement;

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function store(theme) {
    try { localStorage.setItem(KEY, theme); } catch (e) { /* storage unavailable */ }
  }

  /* Hairline-stroke icons, matching the site's .ic icon grammar —
     stroke = currentColor, no fills, no glow. */
  var MOON =
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z"/></svg>';
  var SUN =
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<circle cx="8" cy="8" r="3"/>' +
    '<path d="M8 1.25v1.5M8 13.25v1.5M1.25 8h1.5M13.25 8h1.5M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M12.8 3.2l-1.1 1.1M4.3 11.7l-1.1 1.1"/></svg>';

  function paint(btn) {
    var t = current();
    btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
    btn.innerHTML = t === "dark" ? SUN : MOON;
  }

  function build() {
    /* app.html renders its own theme row inside the sidebar (WP-A, 2 Sep) — the fixed corner
       button collided with every page's header there. Same localStorage key, same attribute. */
    if (document.getElementById("app")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.setAttribute("data-wp0-toggle", "");
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store(next);
      paint(btn);
    });

    var links = document.querySelector(".masthead__links");
    if (links) {
      var li = document.createElement("li");
      li.setAttribute("data-wp0-toggle", "");
      li.appendChild(btn);
      links.appendChild(li);
    } else {
      btn.classList.add("theme-toggle--fixed");
      document.body.appendChild(btn);
    }
    paint(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
