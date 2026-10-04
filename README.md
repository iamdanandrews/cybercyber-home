# cybercyber.ai

The cyber:cyber studio site — an independent studio shaping brands and building distinctive digital products.

**Live:** https://cybercyber.ai (Vercel; push to `main` deploys)

18 hand-written, self-contained HTML pages. Vanilla CSS and JavaScript, zero dependencies, **no build step**. Each page carries its own `<style>` and `<script>`; `mark.js` and `RaveoVF.woff2` are the only shared assets.

That is the finished position, not a staging post — an earlier note here proposed migrating to Astro + GSAP and the hand-coded build replaced it. The reasoning is written up in the journal note ["The hardest client was us"](https://cybercyber.ai/journal-hardest-client.html).

## Structure

| | |
|---|---|
| `index.html` | Home — reactive Raveo wordmark, the offer, work, the Contact seal |
| `manifesto.html` | Working commitments linked to project evidence |
| `journal.html` + 9 `journal-*.html` | Working notes, numbered newest-first |
| `work-ikarao.html`, `work-granite.html`, `work-kaido.html`, `work-frame.html` | One commissioned identity and three owned products, with stage-labelled evidence |
| `404.html` | |
| `mark.js` | The dot-matrix kamon generator — seeds a radially symmetric crest of dots plus a six-character reference, both deterministic from a name |
| `llms.txt` | Machine-readable site summary for LLM/agent consumers |
| `AGENTS.md` | **Read this before editing.** Design tokens, conventions, and the traps |

## Before you change anything

Read [AGENTS.md](AGENTS.md). It documents the shared type ladder, the no-dead-even-grid rule, the deliberately-literal exceptions, and a list of traps that have each already cost real time — hidden-not-deleted elements the JS still dereferences, the reticle's two ids, the seal geometry that exists in two places, and the journal renumbering cascade.

## Native product evidence

Granite and Frame include recordings from the current native app repositories,
captured on 4 October 2026 with isolated demo data. Playback is visitor-controlled
and each recording has a text walkthrough. Frame’s lead and technique-detail
images use full source frames with responsive delivery copies. Capture provenance,
source commits and editing ranges are in
`media/shots/native-walkthrough-provenance-20261004.json`.
