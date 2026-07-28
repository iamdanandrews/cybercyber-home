# cyber:cyber — homepage (bespoke trial)

A hand-built, fully-responsive rebuild of the cyber:cyber homepage in the **Instrument** art direction: a calibrate-on-load / cursor-reactive variable-font wordmark, a live register nav with London clock, signal-underline section titles, and a custom reticle cursor. One self-contained file (Raveo variable font embedded), full content parity with the Webflow site.

Trial to evaluate migrating the studio site off Webflow toward an Awwwards-grade bespoke build.

**Live:** https://iamdanandrews.github.io/cybercyber-home/

## Stack (as-is / intended)
- Single `index.html`, vanilla CSS + JS, zero dependencies.
- Variable Raveo Display (weight 100–900, optical size) for display; system mono for data.
- Progressive enhancement: reduced-motion and touch fallbacks throughout.
- Intended migration target: Astro + GSAP for the production build.
