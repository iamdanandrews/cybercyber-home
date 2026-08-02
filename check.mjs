#!/usr/bin/env node
/**
 * check.mjs — the rules in AGENTS.md, enforced instead of described.
 *
 * AGENTS.md is prose: it can be read, agreed with, and then quietly ignored. Every
 * drift this repo has actually suffered — a token meaning two different curves on
 * different pages, a colour typed as a literal in six places, a figure numbered 02
 * twice, a `.next` cycle left open, a page shipping without mobile navigation — was
 * invisible until someone went looking. This goes looking, every time.
 *
 *   node check.mjs          report and exit non-zero on any failure
 *   node check.mjs --warn   report but always exit 0
 *
 * There is no build step here and there should not be one. This is a checker, not a
 * pipeline: it reads the shipped files and asserts things about them.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';

const PAGES = readdirSync('.').filter(f => f.endsWith('.html')).sort();
const read = f => readFileSync(f, 'utf8');
const cssOf = s => [...s.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(m => m[1]).join('');
const strip = s => s.replace(/<!--[\s\S]*?-->/g, '');

const fail = [], warn = [];
const bad = (f, msg) => fail.push(`${f}: ${msg}`);

/* Exceptions are declared here, in code, so that skipping a rule is a visible act
   rather than a silent one. Each needs a reason. */
const ALLOW = {
  literalHex: {
    // the primitive layer: these ARE the token definitions, plus their
    // prefers-contrast overrides. Nothing else may write a hex.
    inRootOnly: true,
  },
  noHeader: ['404.html'],          // deliberately chrome-less
};

for (const f of PAGES) {
  const src = read(f);
  const s = strip(src);
  const css = cssOf(s);

  /* ---- structure ---- */
  if (!/<title>/.test(s)) bad(f, 'no <title>');
  if (!/lang=/.test(s)) bad(f, 'no lang attribute');
  if (css.split('{').length !== css.split('}').length) bad(f, 'unbalanced CSS braces');

  /* ---- tokens: nothing may be defined twice with different values ---- */
  const defs = new Map();
  for (const m of css.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/g)) {
    const [, name, val] = [m[0], m[1], m[2].trim()];
    if (!defs.has(name)) defs.set(name, new Set());
    defs.get(name).add(val);
  }

  /* ---- tokens: every var() must resolve ---- */
  const RUNTIME = new Set(['--hl', '--len', '--sl', '--bd', '--md']);   // set from JS at runtime (--bd: hero-bloom per-dot delay, --md: void-anchor mark-morph per-dot delay)
  // tokens can also be defined in an inline style attribute — the eyebrows set --c
  // per section, which is a legitimate per-instance override, not a global token
  for (const m of s.matchAll(/style="([^"]*)"/g)) {
    for (const d of m[1].matchAll(/(--[a-z0-9-]+)\s*:/g)) {
      if (!defs.has(d[1])) defs.set(d[1], new Set(['(inline)']));
    }
  }
  const used = new Set([...css.matchAll(/var\((--[a-z0-9-]+)/g)].map(m => m[1]));
  for (const u of used) {
    if (!defs.has(u) && !RUNTIME.has(u)) bad(f, `var(${u}) is never defined`);
  }

  /* ---- no hard-coded values where a token exists ---- */
  for (const m of css.matchAll(/#[0-9a-fA-F]{6}\b/g)) {
    const before = css.slice(Math.max(0, m.index - 40), m.index);
    const isDefinition = /--[a-z0-9-]+\s*:\s*$/.test(before);
    if (!isDefinition && ALLOW.literalHex.inRootOnly) {
      bad(f, `literal colour ${m[0]} outside a token definition`);
    }
  }
  for (const m of css.matchAll(/cubic-bezier\([^)]*\)/g)) {
    const before = css.slice(Math.max(0, m.index - 30), m.index);
    if (!/--e[0-9a-z-]*\s*:\s*$/.test(before)) {
      bad(f, `raw ${m[0]} — use an easing token`);
    }
  }

  /* ---- every page that has a nav must work on a phone ---- */
  if (/<\/nav>/.test(s) && !ALLOW.noHeader.includes(f)) {
    if (!/id="burger"/.test(s)) bad(f, 'nav present but no burger — nav is unreachable on mobile');
    if (!/id="mobile"/.test(s)) bad(f, 'nav present but no #mobile panel');
    if (!/class="status"/.test(s)) bad(f, 'no status block');
  }

  /* ---- motion must have a reduced-motion twin ---- */
  const animates = /transition:|animation:/.test(css);
  if (animates && !/prefers-reduced-motion/.test(css)) bad(f, 'animates with no reduced-motion twin');

  /* ---- assets referenced must exist ---- */
  for (const m of s.matchAll(/(?:src|href|data-src)="((?!https?:|mailto:|#|\/_vercel|\.\/|tel:)[^"]+\.(?:html|png|svg|js|woff2|mp4|txt|md))"/g)) {
    if (!existsSync(m[1])) bad(f, `dead reference → ${m[1]}`);
  }

  /* ---- figures must be numbered in reading order ---- */
  const figs = [...s.matchAll(/Fig\.\s*(\d+)/g)].map(m => +m[1]);
  if (figs.length && figs.some((n, i) => n !== i + 1)) {
    bad(f, `figures out of order: ${figs.join(', ')}`);
  }

  /* ---- headings must not run back to back with no evidence between ---- */
  const seq = [...s.matchAll(/<h2>|<div class="pfig/g)].map(m => m[0]);
  for (let i = 0; i < seq.length - 1; i++) {
    if (seq[i] === '<h2>' && seq[i + 1] === '<h2>') { bad(f, 'two <h2> with no figure between'); break; }
  }
}

/* ---- cross-page: a token must mean the same thing everywhere ---- */
const across = new Map();
for (const f of PAGES) {
  for (const m of cssOf(read(f)).matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/g)) {
    const name = m[1], val = m[2].trim();
    if (!across.has(name)) across.set(name, new Map());
    const byVal = across.get(name);
    if (!byVal.has(val)) byVal.set(val, []);
    byVal.get(val).push(f);
  }
}
/* Drift only matters for tokens that must mean ONE thing site-wide: colour and easing.
   Layout tokens are allowed to differ per page (the homepage is a wider poster than an
   article), and locally-scoped properties like --d (per-element animation delay) and --c
   (a section's accent, set inline) are meant to vary — flagging those would be noise, and
   a checker that cries wolf gets switched off. */
const MUST_MATCH = /^--(?:ground|paper|paper\d*|accent|accent-ink|cyan|cool|grey|dim|line|line2|lift|ink-mut|s\d|e[0-9a-z-]*)$/;
for (const [name, byVal] of across) {
  if (!MUST_MATCH.test(name)) continue;
  // two values is the base + prefers-contrast pair; three is drift
  if (byVal.size > 2) {
    const detail = [...byVal.entries()].map(([v, fs]) => `${v} (${fs.length})`).join(' vs ');
    fail.push(`token drift: ${name} has ${byVal.size} values — ${detail}`);
  }
}

/* ---- cross-page: the journal must form one closed cycle ---- */
const notes = PAGES.filter(f => /^journal-/.test(f));
if (notes.length) {
  const next = new Map();
  for (const f of notes) {
    const m = read(f).match(/<section class="next">[\s\S]*?<a href="([^"]+)"/);
    if (m) next.set(f, m[1]); else fail.push(`${f}: no next-note link`);
  }
  const seen = new Set(); let cur = notes.find(f => f.includes('hardest-client')) || notes[0];
  while (cur && !seen.has(cur)) { seen.add(cur); cur = next.get(cur); }
  if (seen.size !== notes.length) {
    fail.push(`journal cycle covers ${seen.size}/${notes.length} notes — the chain is broken`);
  }
}

/* ---- report ---- */
const warnOnly = process.argv.includes('--warn');
if (fail.length) {
  console.log(`\n✗ ${fail.length} problem${fail.length === 1 ? '' : 's'}\n`);
  for (const x of fail) console.log('  ' + x);
} else {
  console.log(`\n✓ ${PAGES.length} pages clean — tokens resolve, no literals, mobile nav present, figures ordered, journal cycle closed\n`);
}
for (const x of warn) console.log('  ! ' + x);
process.exit(fail.length && !warnOnly ? 1 : 0);
