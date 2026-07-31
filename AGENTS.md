# AGENTS.md — working on cybercyber.ai

Instructions for any agent (or person) editing this repo. Read this before changing a page.

## What this is

The cyber:cyber studio site. **13 hand-written, self-contained HTML pages. No build step, no framework, no dependencies, no `package.json`.** Each page carries its own `<style>` and `<script>` inline. `mark.js` is the only shared script and `RaveoVF.woff2` the only shared font.

This is a deliberate position, not an accident or a stage to be migrated away from. Do not introduce a bundler, a framework, a CSS preprocessor, or a component system. Do not split pages into partials. If a change seems to need a build step, it is the wrong change.

## Deploy

Push to `main` → Vercel deploys automatically. There is no staging.

- Apex `cybercyber.ai` **308-redirects to `www`** — verify live with `curl -sL` (follow redirects) or you will read the redirect, not the page.
- The CDN lags a push. Poll in a loop; the first check after a deploy is usually stale.
- `vercel.json` sets immutable long-cache headers on `woff2`/`svg` only. Renaming a font or an SVG is the way to bust its cache.

## Design system — read before touching CSS

**One shared type ladder, defined in `:root` on every page. Use the tokens; never add a literal font-size.**

| token | value | use |
|---|---|---|
| `--t-cap` | `clamp(10px,.28vw + 9px,11.5px)` | labels, nav, meta, coordinates |
| `--t-body` | `clamp(15px,.35vw + 13.6px,17px)` | body and prose |
| `--t-lead` | `clamp(18px,.9vw + 14px,22px)` | leads |
| `--t-mid` | `clamp(23px,2.4vw,30px)` | prose h2, case intros, ledger items |
| `--t-sub` | `clamp(24px,2.4vw + 14px,44px)` | statements, row titles |
| `--t-title` | `clamp(30px,4.4vw,58px)` | big statements |
| `--t-art` | `clamp(38px,7.5vw,104px)` | article H1, next-case |
| `--t-h2` | `clamp(46px,9vw,140px)` | section and page display headings |
| `--t-hero` | `clamp(34px,10vw,175px)` | the homepage wordmark only |

**Deliberately literal — do not "fix" these:** SVG seal text (user units in a viewBox-120 space, not the page scale), the prose drop cap (`3.2em`, relative to its own paragraph by design), the manifesto ghost numerals and 404's display numeral (decorative outline type, outside the reading hierarchy), and the homepage `.heroline`'s locked `16px` (a verified 10:1 ratio against the wordmark plus a 16px subhead floor both depend on it — `--t-body` would drop it to 15px).

**Colour:** `--ground:#0B0B0D` · `--paper:#F2ECEF` · `--accent:#EA4E32` (vermilion) · `--accent-ink:#0B0B0D` (ink on vermilion) · `--cyan:#22D3EE`. The accent is single and rationed. Dark-first; there is **no light mode and one is not wanted**.

**Grid:** section layouts are **never dead-even** — paired columns are displaced (`.nfy2` 1.12/.88, `.jrnl` .9/1.1 mirrored, `.proj` .94/1.06, `.shd.solo` 1.12/.88, `.shd.solo.rev` .88/1.12, `.who` .86/1.14, `.cfilm` 1.06/.94). Adding a dead-even split to a section breaks the system.

There are exactly **three deliberate exceptions**, all on the case studies, and all genuine like-for-like comparisons where displacement would misrepresent the content: `.pfig.pair .duo` (two devices side by side), `.decide .cols` (kept vs cut) and `.mech .trade` (trade-off vs trade-off). Those three were displaced once and reverted, because a balanced pair should read balanced. Don't "fix" them, and don't cite them as licence for a fourth.

**Fonts:** Raveo variable (`opsz` 14–32, `wght` 100–900) for display; Helvetica Neue for body; system mono for labels. `font-display:block` on every page — deliberate, because Raveo is preloaded and a swap flashed the browser's default sans (reported repeatedly as "I see Inter"; it was never Inter in the CSS).

## Traps that have already cost time

- **`.reveal` sections need `.in` to become visible.** Anything you add inside one is invisible until its observer fires. `#about` has its own observer at threshold `.55` and is deliberately excluded from the 2600ms boot fallback, because it holds a set-piece that must not burn off-screen.
- **`#coord`, `#cl`, `#spot`, `#hud`, `.colgrid` are hidden, NOT deleted** — `display:none!important`. JS still dereferences them; deleting the markup throws.
- **The reticle cursor is `#ret` on `index`/`manifesto` but `#iret` on the 11 sub-pages.** Grepping for `id="ret"` falsely reports it missing.
- **The Contact seal's geometry lives in ONE place now** — the page markup and CSS. It briefly existed twice (a `fileFor()` SVG-export string fed a download), and a global find-and-replace on coordinates silently broke the copy that wasn't on screen. The download was cut; if anything ever re-exports the seal, that duplication hazard comes back — generate from the same numbers, don't retype them.
- **Journal notes are numbered newest = Note 01.** Adding or removing a note renumbers every note below it, in `journal.html` (both `&#12300;0N&#12301;` and `Note 0N`) *and* in each article's own `<span class="ix">0N / JOURNAL</span>`. Articles also form a closed `.next` cycle — the last note wraps to the newest. Verify the cycle after editing; it has been left broken before.
- **Grouped selectors:** the shared mono-font rule lists several unrelated classes. Deleting a rule wholesale to remove one selector has stripped the mono face off half the interface. Filter the selector list instead.
- Every animated thing needs a `prefers-reduced-motion` twin.

## Verifying changes

**Measure, don't eyeball.** Read `getBoundingClientRect()` and computed styles. Several bugs here were invisible in screenshots and obvious in numbers (two coordinate systems coinciding by chance below 1408px; a variable-font weight that had not settled when a measurement ran).

If you verify in an embedded browser pane, note that **it may freeze `requestAnimationFrame`** — animations never advance, scrolled screenshots come back black, and boot fallbacks always fire. Do not conclude a change is broken from that; assert on geometry and computed values instead.

## Content voice

Plain, concrete, first-person, judgement-forward. Short declarative sentences. No manifesto grandeur, no clever wordplay, no em-dash-heavy throat-clearing. Claims must be verifiable or dropped. Separators between inline meta items are middle dots (`&middot;`), not em dashes.
