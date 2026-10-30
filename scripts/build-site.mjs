// Publishes the site into public/ (vercel.json outputDirectory) by file type, so working files
// (AGENTS.md, TASKS-*.md, check.mjs, provenance .json, film generation scripts, unused media)
// are never served. api/ is a Vercel function, built from source separately.
//
// Dated media folders are added often, so this allowlists file types rather than folders: any
// file with a web or media extension is published from anywhere in the repo except SKIP_DIRS.
// Then every published page, script and stylesheet is checked for local references that don't
// resolve inside public/, and the build fails on any miss.

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public');
const SKIP_DIRS = new Set(['.git', '.claude', 'node_modules', 'api', 'scripts', 'public', 'media/_unused']);
const SKIP_FILES = new Set(['film-source.js']);
const PUBLISHED_EXTENSIONS = new Set([
  '.html', '.css', '.js', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif', '.mp4', '.webm',
  '.woff2', '.woff', '.ico', '.txt', '.xml', '.webmanifest', '.pdf',
]);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT);

const published = [];
const copy = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const rel = relative(ROOT, path);
    if (statSync(path).isDirectory()) {
      if (!SKIP_DIRS.has(rel)) copy(path);
    } else if (PUBLISHED_EXTENSIONS.has(extname(name).toLowerCase()) && !SKIP_FILES.has(name)) {
      cpSync(path, join(OUT, rel));
      published.push(join(OUT, rel));
    }
  }
};
copy(ROOT);

// Local references only: absolute (/x.js) resolve from public/, relative from the file's folder.
// Extensionless paths are routes; /_vercel/* is served by the platform.
const REF = /(?:\b(?:src|href|poster)=["']|\bimport\s*(?:[^'"]*?from\s*)?["']|\bimport\(\s*["']|url\(\s*["']?)([^"')\s]+)/g;
const missing = [];
for (const file of published.filter((f) => /\.(html|js|css)$/.test(f))) {
  for (const [, raw] of readFileSync(file, 'utf8').matchAll(REF)) {
    if (/^(?:[a-z]+:|\/\/|#|\$\{)/i.test(raw)) continue;
    const ref = raw.split(/[?#]/)[0];
    if (!ref || !extname(ref) || ref.startsWith('/_vercel/')) continue;
    const target = ref.startsWith('/') ? join(OUT, ref) : join(dirname(file), ref);
    if (!existsSync(target)) missing.push(`${relative(OUT, file)} → ${raw}`);
  }
}

console.log(`Site build: published ${published.length} files to public/`);
if (missing.length) {
  console.error(`Site build: ${missing.length} reference(s) point at files that aren't published:\n  ${missing.join('\n  ')}`);
  process.exit(1);
}
