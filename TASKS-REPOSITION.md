# TASKS — Repositioning & 4-case-study build-out (2026-08)

The governing task list for turning cybercyber.ai from a 2-case-study site into the
4-case-study, products-first lab site, per the research synthesis of 2026-08-24
(positioning comparables · the cybernetics/name research · multi-product art-direction
research). Work through it **in phase order**. Every task has QA criteria — a task is
not done until its QA passes. If a step conflicts with AGENTS.md, AGENTS.md wins;
stop and flag rather than improvise.

**Read first, every session:** `AGENTS.md` (the whole thing), then this file.

---

## 0 · Invariants (referenced by every task — do not restate per task)

- **I1 — Checker green.** `node check.mjs` exits 0 after every task. No exceptions.
- **I2 — Tokens only.** No literal font sizes; no literal hex outside a page's `:root`.
  If a task needs a new colour (e.g. a per-case accent), define it as a `:root` token
  on that page and use `var()` everywhere else. `check.mjs` enforces this.
- **I3 — Voice.** Plain, concrete, first-person, judgement-forward. Short declarative
  sentences. Middle dots (`&middot;`) between inline meta items, never em dashes.
  Never announce a category ("we are a lab/studio that…") — list what shipped.
  Figure captions close on the **outcome for the user**, not the mechanism.
- **I4 — Colour grammar.** Cyan = system speaking (live state, affordances, affirm side).
  Vermilion = studio judging (decisions, refusals, dates, seals, colon, cut side).
  Client colours never touch chrome (labels, rules, brackets); chrome colours never
  touch client work. New: a client accent may appear ONLY as a read-only data value
  (see task 4.2) and as the crest's fill variable (see task 4.3).
- **I5 — Marks are dots.** Generated marks use the dot grammar only. Lines/meanders/
  woven patterns are reserved against other work (IKARAO) and must never appear in
  cybercyber-issued marks — including on the IKARAO case study's own crest.
- **I6 — Motion.** Only the four moves (weight resolves, lines draw, surfaces press,
  dots settle). Every animated thing gets a `prefers-reduced-motion` twin.
- **I7 — Grids.** No dead-even column splits except the three sanctioned case-study
  comparisons. New paired layouts use displaced ratios (see AGENTS.md table).
- **I8 — Self-contained pages.** No build step, no shared CSS. New pages carry their
  own `<style>`/`<script>`. `mark.js` and `RaveoVF.woff2` are the only shared assets.
  Asset paths are RELATIVE (`media/…`, `mark.js`) — a leading `/` fails check.mjs.
- **I9 — Every page ships the full head/foot kit:** favicon set (5 `<link>` tags:
  favicon.svg, favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png,
  site.webmanifest), Web Analytics script (`cdn.vercel-insights.com/v1/script.js`),
  Speed Insights stub + `/_vercel/speed-insights/script.js`, canonical + OG tags,
  mobile nav (`#burger` + `#mobile` — check.mjs requires them), a `.status` block,
  and the footer crest (seeded from `document.title` via `mark.js`).
- **I10 — Verification is measured, not eyeballed.** Use `getBoundingClientRect()`/
  computed styles via headless Chrome, or the screenshot recipe below. Never conclude
  "broken" from an embedded browser pane (it freezes rAF and reports 0×0 viewports).
- **I11 — "cyber" vocabulary rules.** Never place the word "cyber" near "security" in
  any copy. Never write "we're reclaiming the word" or explain the etymology outside
  the journal note (task 5.1). The working vocabulary the etymology licenses —
  "governor", "steering", "feedback", "the helm" — is used plainly or not at all.
- **I12 — Screenshot recipe (headless Chrome).**
  `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless=new
  --disable-gpu --hide-scrollbars --force-device-scale-factor=1
  --window-size=W,H --virtual-time-budget=4200 --screenshot=/tmp/out.png "http://localhost:8799/PAGE"`
  Serve with `python3 -m http.server 8799` from the repo root. Budget < 4000ms
  captures the boot loader ("CALIBRATING") — use ≥ 4200. CSS `transition-delay`
  does NOT advance under virtual time: a staggered reveal's late element missing
  from a screenshot is an artifact, not a bug — verify those by isolating the
  component in a `_scratch.html` copy with a `#posterStage` fixed overlay
  (`position:fixed;inset:0;z-index:99999`), then DELETE the scratch file. Never
  commit `_*.html` scratch files.
- **I13 — Commits.** One task (or tightly-related cluster) per commit. Message says
  what changed and why, wrapped at 72. Do not push unless the task says to.

**Human gates (stop and ask Dan — do not proceed past these on your own):**
- **G1** — IKARAO: what may be shown publicly, at what level of detail, and under
  what name. Blocks all of phase 6.
- **G2** — Homepage H1 and the About section statement: any change needs explicit
  sign-off. (Work-section copy is NOT gated; H1/About are.)
- **G3** — Offer mechanics wording (billing terms, slot counts): facts only Dan
  knows. Draft with `[DAN: …]` placeholders; do not invent numbers.
- **G4** — Kaido screenshots: if no Kaido-branded screens can be produced per task
  2.2, stop; do not ship Granite-Clinic-branded screens on the Kaido case study.

---

## 1 · Fix the stale "Granite Clinic" naming (the clinic product is now Kaido)

### 1.1 Rename on work-granite.html
- **Files:** `work-granite.html`
- The clinic product referenced as "Granite Clinic" / `granite.coach/clinic.html`
  is now **Kaido Health** at `https://www.kaidohealth.co/`. Update:
  1. Hero meta row: `Now piloting → Granite Clinic` becomes `Spun off → Kaido Health`
     linking `https://www.kaidohealth.co/`.
  2. The csintro paragraph: rewrite to re-lead with the **athlete coach** (this page
     reverts to the athlete story — the clinic story moves to its own case study in
     phase 2). Close the intro with one spin-off line, e.g.:
     "The clinic pilot outgrew the app: it's now Kaido Health, its own product —
     that story has its own page." (link the name; keep `.csintro a` underline style
     already defined).
  3. "For the people who prescribe" paragraph: replace the Granite-Clinic sentence
     with a Kaido pointer, keeping the "engine you can inspect" claim.
  4. Fig. 01 ("the loop, closed") uses Granite-Clinic-branded dashboards: MOVE this
     figure's concept to the Kaido case study (task 2.4) and restore this page's
     figure sequence to the athlete app only: delete Fig. 01, renumber Fig. 02–06
     back to Fig. 01–05 (highest-first replace; each caption string is unique).
  5. Hero device image: restore the athlete week view
     (`media/shots/g-week.webp`, portrait, `device-lg` without `dv-wide`) with the
     original caption "The week the engine builds — on-device".
- **QA:** `grep -c "Granite Clinic" work-granite.html` → 0.
  `grep -c "granite.coach/clinic" work-granite.html` → 0.
  `grep -o "Fig\. 0[0-9]" work-granite.html | sort -u` → exactly Fig. 01–05.
  check.mjs green. Screenshot per I12: hero shows a phone, not a dashboard.

### 1.2 Rename on index.html + llms.txt
- **Files:** `index.html`, `llms.txt`
- The Granite Work tile reverts to the athlete story (the Kaido tile arrives in 3.2):
  `pd` = "A strength coach for athletes whose sport isn't lifting."
  `pf` = "You rolled hard, not lifted heavy — so today's session already knows, and
  eases off." Media: restore `g-week.webp` + `g-coach.webp` portrait duo-stack
  (remove `dv-wide` overrides from this tile). Status span: `Alpha · granite.coach`.
- `llms.txt`: Granite entry reverts to athlete-only description; do NOT mention the
  clinic here (Kaido gets its own entry in 2.6).
- **QA:** `grep -c -i "clinic" index.html llms.txt` → 0 for both (until phase 2/3
  re-adds Kaido deliberately). check.mjs green.

### 1.3 Migrate the clinic media assets
- **Files:** `media/shots/`
- `g-clinic-today.webp`, `g-clinic-queue.webp`, `g-patient-session.webp` carry
  GRANITE CLINIC sidebar branding. Move them to `media/_unused/` (do not delete)
  pending Kaido-branded replacements (task 2.2). Nothing may reference them after
  1.1/1.2 — verify before moving.
- **QA:** `grep -rn "g-clinic-\|g-patient-session" *.html` → 0 matches.
  check.mjs green (it catches dead references).

---

## 2 · The Kaido case study (new page: work-kaido.html)

### 2.1 Page skeleton
- **Files:** new `work-kaido.html` (copy `work-granite.html` as the base — it has
  the correct chrome, nav, reveal system, reticle `#iret`, footer crest wiring).
- Strip the Granite content; keep structure: cshero → csbody (csintro → stakes →
  figures → aud → h2 blocks → ledger/kept-cut → scope). Set: `<title>Kaido — cyber:cyber</title>`,
  meta description, OG tags (`og:url` = `https://cybercyber.ai/work-kaido.html`),
  canonical, eyebrow `Case study · 01 / KAIDO` (numbering per 3.1), view-transition
  names `t-kaido`/`m-kaido`/`mk-kaido`, eyebrow crest seeded `"kaido"`.
- **QA:** page serves 200 locally; check.mjs green (it will demand mobile nav,
  status block, reduced-motion twins, figure order); all I9 items present —
  `grep -c "speed-insights" work-kaido.html` → 2 (stub + script),
  `grep -c "site.webmanifest" work-kaido.html` → 1.

### 2.2 Kaido-branded screens
- **Source repo:** `/Users/da/Proposal/kaidohealth` (marketing site + `clinic-demo.html`
  interactive demo + `media/demo.mp4` + `app.html` patient app).
- Produce ≥ 4 Kaido-branded captures (KAIDO in the product chrome, not GRANITE
  CLINIC): (a) the clinician caseload/"needs you first" view, (b) the approval/review
  queue with struck-old/new values + reasons, (c) the interactive threshold view
  (drag-the-line), (d) the patient app view showing a criteria-gated exercise.
  Method: serve the kaidohealth repo locally and screenshot `clinic-demo.html` /
  `app.html` states per I12, or export from that repo's own assets. Convert to WEBP
  q90 into `media/shots/` as `k-caseload.webp`, `k-queue.webp`, `k-threshold.webp`,
  `k-patient.webp`, with real pixel dimensions recorded for width/height attrs.
- If none of these can be produced Kaido-branded → **G4, stop.**
- **QA:** `ls media/shots/k-*.webp` → 4 files; open each and confirm the visible
  product name is Kaido; each referenced `<img>` has correct width/height attrs.

### 2.3 Copy — positioning facts (use these, do not invent)
- Kaido Health · kaidohealth.co · criteria-based rehab planning for physiotherapy /
  MSK clinics · £200/month per clinic · built with practising physiotherapists ·
  piloting with a working physio · spun off the Granite engine.
- Doctrine lines that may be quoted verbatim (they are the product's own voice):
  "Proposes and monitors, never clears." / "Return isn't a date. It's thresholds,
  met on the body." / "Admin tools write the plan. Criteria tools govern the
  recovery." / "Kaido does not recommend how often to see someone. It tells you
  when they're done."
- The cybercyber-side story (this page's actual argument): **the spin-off proves the
  method** — one deterministic engine, proven with athletes, regoverned for clinics.
  Tell it with numbers and dates, Metalab-Slack style, once, in the csintro.
- Register: sceptical MSK physio reads this and nods. No "AI for physios", no
  wellness warmth. Per I3: captions close on outcomes (what the clinician/patient
  gets), not mechanisms.
- **QA:** csintro ≤ 5 sentences and contains "£200" and "physiotherapist";
  `grep -ci "AI-powered\|revolutioni\|seamless\|empower" work-kaido.html` → 0.

### 2.4 Figures
- Fig. 01 · the review queue (pair: "The clinician approves" / "The patient just
  trains" — the loop-closed concept migrated from Granite's old Fig. 01, now with
  Kaido-branded screens k-queue + k-patient).
- Fig. 02 · the caseload between visits (k-caseload).
- Fig. 03 · the threshold ("Move the line, watch the decision change" — k-threshold).
- Landscape dashboard shots use the `dv-wide` device variant (define it in this
  page's CSS as on work-granite: no fixed aspect-ratio in the class; per-image
  `style="aspect-ratio:W/H"`); portrait patient shots use the standard `.device`.
- This page is the FIRST user of the phase-4 conventions: specimen window (4.1)
  and accent readout (4.2) — build it with them from the start.
- **QA:** figures numbered 01..N in reading order (check.mjs enforces); pair
  layouts only where genuinely like-for-like (I7); every `<img>` has alt text
  describing content, not filename.

### 2.5 Wire into nav + registers on ALL pages
- **Files:** all 13 existing pages + the new page.
- Mobile nav `msub` rows and the homepage register rows (`.irow sub`) currently list
  Granite/Frame. New order everywhere: **Kaido · Granite · Frame** (IKARAO joins in
  phase 6). Homepage register `iv` text for Kaido: "Rehab platform · criteria-based".
- **QA:** `grep -l 'work-kaido.html' *.html | wc -l` → 14 (every page links it);
  order check: in each nav, Kaido's link precedes Granite's.

### 2.6 sitemap + llms.txt
- Add `work-kaido.html` to `sitemap.xml` (priority 0.9, lastmod = commit date).
  Add a Kaido entry to `llms.txt` under Work, above Granite: one sentence, the
  spin-off fact + "proposes and monitors, never clears" + kaidohealth.co link.
- **QA:** `curl -s localhost:8799/sitemap.xml | grep -c work-kaido` → 1;
  llms.txt Work section lists 3 items in order Kaido/Granite/Frame.

---

## 3 · Homepage Work restructure (products-first)

### 3.1 Case-study numbering
- New canonical order: **01 Kaido · 02 Granite · 03 Frame · 04 IKARAO** (04 gated).
- Update each case page's eyebrow `ix` (`01 / KAIDO`, `02 / GRANITE`, `03 / FRAME`)
  and each page's next-case link at the bottom to form a closed cycle
  Kaido → Granite → Frame → Kaido (extend to IKARAO in phase 6).
- **QA:** eyebrow numbers match the canonical order; follow the next-case links
  from Kaido and confirm you return to Kaido in exactly 3 hops.

### 3.2 The Work reel
- **Files:** `index.html`
- Three tiles in canonical order (Kaido tile is new; reuse the `.proj` structure).
  Kaido tile: media = `k-caseload.webp` + `k-patient.webp` duo-stack (wide + portrait
  mix as built in phase 2); `pd` = "Criteria-based rehab planning for clinics.";
  `pf` = one outcome sentence in the product's register (e.g. the discharge-on-
  criteria consequence — draft, then check against I3); `pm` spans:
  `SaaS · B2B` / `Web + iOS` / `live` span `Piloting · kaidohealth.co`.
- Work section lead paragraph inverts to products-first. Draft (refine under I3, do
  not announce a category): "Three products of our own — designed, built, and
  shipped from this studio. And a few times a year, a client gets the same team."
- **QA:** tile count = 3; view-transition-name uniqueness (`grep -o
  'view-transition-name:[a-z-]*' index.html | sort | uniq -d` → empty); the word
  "lab" does not newly appear in the Work section; check.mjs green.

### 3.3 The engine story block
- One compact strip in the Work section (between lead and reel, or after the reel —
  judge against the grid): the Metalab-style storied artifact. Draft copy:
  "One engine, two products. We built a deterministic coaching engine for Granite —
  every decision traceable, tested, on-device. When physiotherapists saw the weekly
  rewrite, the engine got a second job: Kaido now proposes and monitors rehab plans
  a clinician approves. Same rules, different governor." — trim under I3; "governor"
  stays (I11 licenses it used plainly).
- Layout: displaced two-column per I7; no new imagery required.
- **QA:** block present once; contains "engine" and both product names; no
  etymology, no "cybernetics", no "reclaim" (I11).

### 3.4 Offer mechanics lines
- **Files:** `index.html` (Offerings section)
- Add ONE mechanics sentence per offer, Lickability/Sanctuary pattern (facts about
  engagement risk/shape, not adjectives). Use placeholders for facts Dan must
  supply: `[DAN: billing cadence]`, `[DAN: slots per year]`, `[DAN: what happens
  week 1]`. **G3 — placeholders must be resolved by Dan before this commits.**
- **QA:** no `[DAN:` strings remain in committed HTML
  (`grep -rn "\[DAN:" *.html` → 0); each offer has exactly one added sentence.

---

## 4 · Art-direction system upgrades (the conventions the new pages run on)

### 4.1 The specimen window
- **Concept:** authorship in the fixture, diversity in the specimen. One documented
  component: the case-media frame — hairline border + the viewfinder corner
  brackets as the mat; fixed aspect ratios; client pixels at full brightness
  inside; house mono caption row below. Light-UI screenshots (Frame) and vivid
  work (IKARAO) sit inside WITHOUT tinting, dimming, or recolouring.
- **Implement:** as a copy-paste CSS/HTML block documented in AGENTS.md (task 4.4)
  and first used on work-kaido.html (phase 2). Retrofit work-granite.html and
  work-frame.html figure frames ONLY if the diff stays mechanical (same markup,
  new mat) — otherwise log as follow-up, don't churn shipped pages.
- **QA:** on a dark-page screenshot, a light screenshot inside the window shows a
  visible hairline mat on all sides (no "blooming" edge against the ground);
  identical corner-bracket geometry across all case pages that use it.

### 4.2 Per-case accent as a read-only instrument value
- Each case page's `csmeta` gains one entry: `Accent · [swatch] #HEX` — a small
  square chip + the hex as mono text. The client's colour reported as DATA.
- **Compliance with I2:** define the colour once as a token in that page's `:root`
  (e.g. `--case-accent:#0E7C7B;`) — check.mjs permits hex only there — and style
  the chip `background:var(--case-accent)`. The token must be used ONLY by the
  chip (and the crest fill if 4.3 applies). It never colours text, rules, or hovers.
- Values: Kaido = its teal (sample from the live product chrome), Granite = its
  green/teal accent, Frame = belt-accent red or navy (sample from framebjj.app),
  IKARAO = pending G1.
- **QA:** `grep -n "case-accent" work-*.html` → defined in `:root` and used ≤ 2
  times per page; check.mjs green; chip renders as a square, not a pill.

### 4.3 Crest colour variable (dots stay dots)
- Case-page crests (eyebrow mark, tile marks) may take `var(--case-accent)` as
  fill instead of vermilion — the ONE sanctioned fusion point of client identity
  and house system. Geometry stays `ccMark` dot grammar (I5). The IKARAO crest, in
  particular, is dots — the client's kené line-engine appears only inside specimen
  windows as the work itself.
- **QA:** every `ccMark` call on case pages unchanged in q/seed semantics
  (`grep -o "ccMark([^)]*)" work-*.html` — seeds are the product names); no SVG
  `<path>` mark anywhere uses stroke-based line drawing in cybercyber chrome.

### 4.4 Codify in AGENTS.md
- Add a section "The portfolio chrome (2026-08)" covering: fixture-vs-specimen
  rule; the specimen-window component (markup + CSS reference block); per-case
  accent token rules (define in `:root`, chip + crest only); crest-colour-variable
  rule and the dots-only restatement; the `signal: response` principle — the
  site's pair layouts (say-this/plan-changes, kept/cut, two-tone grammar) are the
  house rhetorical form; new sections should prefer call-and-response pairs over
  single statements where a genuine pair exists (never force one).
  Also add I11's cyber-vocabulary rules and the I12 screenshot recipe (with the
  virtual-time/transition-delay trap) to the traps section.
- **QA:** AGENTS.md diff reviewed against this file — every rule stated here
  appears there; no contradictions with existing AGENTS.md rules.

---

## 5 · The name (journal note)

### 5.1 New journal note: the cybernetics story
- **Files:** new `journal-*.html` (pick a slug like `journal-the-word.html`),
  `journal.html`, ALL other journal articles (renumbering), `sitemap.xml`, `llms.txt`.
- Content (the ONLY place the etymology is ever explained — I11): working title
  "The word before it drifted" (Dan may retitle). The verified facts to build from:
  Wiener 1948, kybernetes = helmsman; Wiener's own note that *governor* descends
  from the same Greek via Latin *gubernator*; Maxwell 1868 "On Governors";
  Ashby: "only variety can absorb variety"; the drift (cyberpunk 1982/Gibson 1984,
  the 104 cyber-coinages by 1994, security as the last serious use); and the
  reduplication reading — doubling a word in English means *the real one* (the
  salad-salad construction) — so cyber:cyber is the cyber that means cyber:
  steering, feedback, a governor with a human at the helm. Then land it on the
  products: Granite observes and rewrites weekly; Kaido proposes and monitors,
  never clears. Close plainly, no manifesto grandeur.
- **Trap — the renumbering cascade (this has been broken before):** the new note
  becomes Note 01. Renumber EVERY other note in `journal.html` (both the
  `&#12300;0N&#12301;` bracket numerals and the "Note 0N" labels) AND each
  article's own `<span class="ix">0N / JOURNAL</span>`. The articles form a closed
  `.next` cycle, newest wrapping from oldest — re-link it including the new note
  and walk the full cycle to verify it closes.
- **QA:** check.mjs green (it verifies the cycle and numbering); walking `.next`
  from the new note visits all 8 notes and returns; sitemap + llms.txt updated;
  the strings "reclaim" and "cybersecurity" do not appear
  (`grep -ci "reclaim\|cybersecurity" journal-the-word.html` → 0).

---

## 6 · IKARAO case study — **BLOCKED ON G1**

### 6.1 Pre-flight (do not build until G1 answers these)
- What name appears publicly? What screens/outputs may be shown? Is the client
  named or is this an unnamed row (Meta-glasses precedent exists for unnamed)?
- Depending on the answer this is either: a full case study `work-ikarao.html`
  (04 in the cycle, wired per 2.5/3.1 patterns), or an unnamed Work row without a
  case page. Both variants follow every phase-4 convention; the crest is dots in
  the case accent (4.3); the kené line-work appears only inside specimen windows.
- **QA (when unblocked):** same battery as phase 2 (skeleton QA, nav wiring,
  sitemap/llms.txt, numbering + closed next-cycle through all 4).

---

## 7 · Final QA sweep (after every phase lands)

1. `node check.mjs` → green.
2. Full-link audit: every internal href resolves 200 locally
   (`grep -ohE 'href="[a-zA-Z0-9_.-]+\.html' *.html | sort -u` then curl each).
3. Naming audit: `grep -rci "granite clinic" *.html llms.txt` → 0 everywhere.
4. `llms.txt`, `sitemap.xml`, homepage registers, mobile navs, and case-study
   eyebrows all agree on the same canonical order and count.
5. Screenshot each case page hero + one mid-page figure per I12; confirm specimen
   mats on light media and accent chips rendering.
6. OG check: each new page's `og:image` resolves (reuse `media/og.png` unless a
   per-case OG is commissioned — flag as optional follow-up).
7. Push, then verify LIVE (www.cybercyber.ai, follow redirects, CDN lags — poll):
   new pages 200, old `granite.coach/clinic` references gone from rendered HTML.
8. Update memory files (`granite-coach-clinic-split`, `cybercyber-bespoke-home`)
   to record: Kaido naming migration done, 4-case-study structure, new AGENTS.md
   sections — so future sessions don't resurrect "Granite Clinic".

---

## Parked (explicitly out of scope for this list)
- Homepage H1 / About statement changes (G2 — needs Dan, separate task).
- Per-case OG images.
- Retrofitting specimen windows onto work-granite/work-frame if non-mechanical.
- Dribbble post refresh to reflect 4 case studies.
- Light-mode: still does not exist and is still not wanted.
