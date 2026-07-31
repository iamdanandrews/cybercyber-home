# cybercyber.ai

The cyber:cyber studio site — a product design lab in London.

**Live:** https://cybercyber.ai (Vercel; push to `main` deploys)

13 hand-written, self-contained HTML pages. Vanilla CSS and JavaScript, zero dependencies, **no build step**. Each page carries its own `<style>` and `<script>`; `mark.js` and `RaveoVF.woff2` are the only shared assets.

That is the finished position, not a staging post — an earlier note here proposed migrating to Astro + GSAP and the hand-coded build replaced it. The reasoning is written up in the journal note ["The hardest client was us"](https://cybercyber.ai/journal-hardest-client.html).

## Structure

| | |
|---|---|
| `index.html` | Home — reactive Raveo wordmark, the offer, work, the Contact seal |
| `manifesto.html` | Ten beliefs, in a distinct art direction |
| `journal.html` + 7 `journal-*.html` | Working notes, numbered newest-first |
| `work-granite.html`, `work-frame.html` | Case studies, using real screens from the shipping apps |
| `404.html` | |
| `mark.js` | The kené generative engine — seeds one unbroken Hamiltonian line, plus the seal reference |
| `llms.txt` | Machine-readable site summary for LLM/agent consumers |
| `AGENTS.md` | **Read this before editing.** Design tokens, conventions, and the traps |

## Before you change anything

Read [AGENTS.md](AGENTS.md). It documents the shared type ladder, the no-dead-even-grid rule, the deliberately-literal exceptions, and a list of traps that have each already cost real time — hidden-not-deleted elements the JS still dereferences, the reticle's two ids, the seal geometry that exists in two places, and the journal renumbering cascade.
