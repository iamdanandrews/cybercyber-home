/* ------------------------------------------------------------------
   THE ISSUE MARK — a dot-matrix kamon.

   Every artifact this studio ships is issued: seeded from its own name, the
   engine draws a radially symmetric crest of dots — kamon by construction,
   dot-matrix by material — with the brand's colon always at its centre. The
   same seed always yields the same crest and the same six-character
   reference; that determinism is the point, and it is the same argument the
   products make.

   Geometry: a 13×13 grid masked to a disc, cells chosen by seeded weight
   under 180° rotational symmetry (the symmetry that preserves a vertical
   colon), the centre column reserved so the colon stands alone. Output is
   normalised to a 0..100 viewBox. Dots only — no strokes, no lines.

   No imports, no build step. ~3KB.
------------------------------------------------------------------ */
(function(){
function xmur3(str){
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++){
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}
function mulberry32(a){
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
/* The reference: same hash family as the crest, different salt — one seed,
   one crest, one reference. 36^6 keeps it to six characters. */
function serialOf(seedStr){
  const h = xmur3(seedStr + '|serial')() % 2176782336;
  return h.toString(36).toUpperCase().padStart(6, '0');
}

const N = 13, C = 6;                  // grid and its centre
const SPAN = 13.5;                    // 12 units of centres + 0.75 margin each side
const U = 100 / SPAN;                 // grid unit → viewBox units
const px = x => +(((x + 0.75) * U).toFixed(2));

function generate(seedStr, q){
  const rng = mulberry32(xmur3(seedStr + '|crest')());
  const pairs = q === 7 ? 18 : 14;    // the contact seal is denser than a chrome mark

  /* candidate cells: inside the disc, off the reserved colon column, in one
     half-plane — each carries its 180°-rotated twin. Weighted by the seeded
     rng in FIXED iteration order, so the choice is the seed's alone. */
  const cand = [];
  for (let y = 0; y < N; y++){
    for (let x = 0; x < N; x++){
      if (x === C) continue;                        // the colon's column
      if (y > C || (y === C && x > C)) continue;    // one half-plane only
      const dx = x - C, dy = y - C;
      if (dx*dx + dy*dy > 38) continue;             // the disc (r ≈ 6.2)
      /* radial bias: a crest has mass at its core, not an even scatter — the
         seeded weight is blended with closeness to centre, so dots gather
         around the colon and thin toward the rim */
      cand.push({ x, y, w: rng() * 0.62 + (1 - Math.sqrt(dx*dx + dy*dy) / 6.2) * 0.38 });
    }
  }
  cand.sort((a, b) => b.w - a.w);
  const chosen = cand.slice(0, pairs);
  const wLo = Math.min(...chosen.map(c => c.w)), wHi = Math.max(...chosen.map(c => c.w));
  const wSpan = wHi - wLo || 1;

  /* the twin shares its partner's weight, not a fresh one — a size gradient is
     still part of the crest's geometry, and the geometry has to obey the same
     180° symmetry as the positions or the colon stops being the mirror axis. */
  const dots = [];
  for (const c of chosen){
    const t = (c.w - wLo) / wSpan;                  // 0..1: how decisively this cell won its spot
    dots.push({ x: c.x, y: c.y, t });
    dots.push({ x: 2*C - c.x, y: 2*C - c.y, t });    // the 180° twin
  }
  /* the colon still anchors the crest, but by POSITION alone — fixed, centred,
     never moving — rather than also outsizing every field dot by half again.
     A kamon's hierarchy comes from placement, not from one mark shouting over
     the rest of the sheet. Field dots get a small, deterministic size spread
     instead — driven by the same weight that won them their place, so the
     ones that won decisively read a touch larger than the marginal ones. */
  const R  = +(0.34 * U).toFixed(2);
  const RC = +(0.40 * U).toFixed(2);
  const circle = (x, y, r) =>
    `M${(px(x) - r).toFixed(2)} ${px(y)}a${r} ${r} 0 1 0 ${(r*2).toFixed(2)} 0a${r} ${r} 0 1 0 ${(-r*2).toFixed(2)} 0`;
  /* pts: the same circles as plain {cx,cy,r} — field dots first, colon last, same
     order as the path above — so a caller can hold persistent <circle> elements
     and move them between marks instead of only ever replacing a path string. */
  const parts = [], pts = [];
  for (const d of dots){
    const r = +(R * (0.8 + d.t * 0.4)).toFixed(2);  // ±20% around R, deterministic
    parts.push(circle(d.x, d.y, r));
    pts.push({ cx: px(d.x), cy: px(d.y), r });
  }
  parts.push(circle(C, C - 1, RC), circle(C, C + 1, RC));
  pts.push({ cx: px(C), cy: px(C - 1), r: RC }, { cx: px(C), cy: px(C + 1), r: RC });
  return { d: parts.join(''), dots: dots.length + 2, pts };
}

window.ccMark = function(seed, q){
  const s = String(seed || 'cyber:cyber');
  const m = generate(s, q || 6);
  return { d: m.d, vb: '0 0 100 100', N: 100, dots: m.dots,
           points: m.dots, pts: m.pts, serial: serialOf(s) };
};
})();
