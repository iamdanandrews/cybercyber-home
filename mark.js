/* ------------------------------------------------------------------
   ONE LINE — extracted verbatim from the kené engine in
   Proposal/Shipibo/engine.js (the studio's own generative work), reduced to
   only what a single mark needs: a seeded spanning tree walked into one
   Hamiltonian cycle. ONE unbroken line that fills the field and never crosses
   itself — not an aesthetic of a single line, an actual single line, provably.
   Deterministic: the same sentence always yields the same mark. That is the
   point, and it is the same argument the products make.
   No imports, no build step. ~4KB.
------------------------------------------------------------------ */
(function(){
const DIRS = [[1,0],[0,1],[-1,0],[0,-1]];
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
function generateLoop(seedStr, q){
  const rng = mulberry32(xmur3(seedStr + '|line')());
  const idx = (x, y) => y * q + x;
  const seen = new Uint8Array(q * q);
  const conn = [];                       // open tree connections [x,y,dx,dy]
  const stack = [[Math.floor(rng() * q), Math.floor(rng() * q)]];
  seen[idx(stack[0][0], stack[0][1])] = 1;
  while (stack.length){
    const [x, y] = stack[stack.length - 1];
    const open = DIRS.filter(([dx, dy]) => {
      const nx = x + dx, ny = y + dy;
      return nx >= 0 && ny >= 0 && nx < q && ny < q && !seen[idx(nx, ny)];
    });
    if (!open.length){ stack.pop(); continue; }
    const [dx, dy] = open[Math.floor(rng() * open.length)];
    seen[idx(x + dx, y + dy)] = 1;
    conn.push([x, y, dx, dy]);
    stack.push([x + dx, y + dy]);
  }

  /* fine grid: each coarse cell is a 2x2 mini-loop; each tree
     connection merges two mini-loops. The result is one cycle. */
  const N = 2 * q;
  const nk = (x, y) => y * N + x;
  const ek = (a, b) => a < b ? a + '|' + b : b + '|' + a;
  const E = new Set();
  for (let y = 0; y < q; y++)
    for (let x = 0; x < q; x++){
      const a = nk(2 * x, 2 * y), b = nk(2 * x + 1, 2 * y);
      const c = nk(2 * x, 2 * y + 1), d = nk(2 * x + 1, 2 * y + 1);
      E.add(ek(a, b)); E.add(ek(c, d)); E.add(ek(a, c)); E.add(ek(b, d));
    }
  for (const [x, y, dx, dy] of conn){
    if (dx === 1){
      E.delete(ek(nk(2*x+1, 2*y), nk(2*x+1, 2*y+1)));
      E.delete(ek(nk(2*x+2, 2*y), nk(2*x+2, 2*y+1)));
      E.add(ek(nk(2*x+1, 2*y), nk(2*x+2, 2*y)));
      E.add(ek(nk(2*x+1, 2*y+1), nk(2*x+2, 2*y+1)));
    } else if (dx === -1){
      E.delete(ek(nk(2*x, 2*y), nk(2*x, 2*y+1)));
      E.delete(ek(nk(2*x-1, 2*y), nk(2*x-1, 2*y+1)));
      E.add(ek(nk(2*x-1, 2*y), nk(2*x, 2*y)));
      E.add(ek(nk(2*x-1, 2*y+1), nk(2*x, 2*y+1)));
    } else if (dy === 1){
      E.delete(ek(nk(2*x, 2*y+1), nk(2*x+1, 2*y+1)));
      E.delete(ek(nk(2*x, 2*y+2), nk(2*x+1, 2*y+2)));
      E.add(ek(nk(2*x, 2*y+1), nk(2*x, 2*y+2)));
      E.add(ek(nk(2*x+1, 2*y+1), nk(2*x+1, 2*y+2)));
    } else {
      E.delete(ek(nk(2*x, 2*y), nk(2*x+1, 2*y)));
      E.delete(ek(nk(2*x, 2*y-1), nk(2*x+1, 2*y-1)));
      E.add(ek(nk(2*x, 2*y-1), nk(2*x, 2*y)));
      E.add(ek(nk(2*x+1, 2*y-1), nk(2*x+1, 2*y)));
    }
  }
  const adj = new Map();
  for (const k of E){
    const [a, b] = k.split('|').map(Number);
    (adj.get(a) || adj.set(a, []).get(a)).push(b);
    (adj.get(b) || adj.set(b, []).get(b)).push(a);
  }
  const pts = [];
  let cur = 0, prev = -1;
  do {
    pts.push([cur % N, Math.floor(cur / N)]);
    const nb = adj.get(cur);
    const nxt = nb[0] === prev ? nb[1] : nb[0];
    prev = cur; cur = nxt;
  } while (cur !== 0);
  pts.push([0, 0]);                      // close the loop
  return { pts, N };
}
function toPath(pts, cut){
  const f = n => n.toFixed(1);
  if (pts.length < 3 || cut <= 0) return 'M' + pts.map(p => f(p[0]) + ' ' + f(p[1])).join('L');

  const out = ['M' + f(pts[0][0]) + ' ' + f(pts[0][1])];
  for (let i = 1; i < pts.length - 1; i++){
    const a = pts[i - 1], b = pts[i], c = pts[i + 1];
    const la = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const lc = Math.hypot(c[0] - b[0], c[1] - b[1]);
    const k  = Math.min(cut, la * 0.5, lc * 0.5);
    const p1 = [b[0] + (a[0] - b[0]) / la * k, b[1] + (a[1] - b[1]) / la * k];
    const p2 = [b[0] + (c[0] - b[0]) / lc * k, b[1] + (c[1] - b[1]) / lc * k];
    out.push('L' + f(p1[0]) + ' ' + f(p1[1]), 'L' + f(p2[0]) + ' ' + f(p2[1]));
  }
  const e = pts[pts.length - 1];
  out.push('L' + f(e[0]) + ' ' + f(e[1]));
  return out.join('');
}
/* The seal's reference. Same hash family as the line, different salt, so one
   sentence yields exactly one line AND one reference -- and the reference is
   the visible proof of the determinism, not a decorative counter. 36^6 keeps
   it to six characters. */
function serialOf(seedStr){
  const h = xmur3(seedStr + '|serial')() % 2176782336;
  return h.toString(36).toUpperCase().padStart(6, '0');
}
window.ccMark = function(seed, q){
  q = q || 7;
  const s = String(seed || 'cyber:cyber');
  const { pts, N } = generateLoop(s, q);
  return { d: toPath(pts, 0.42), N: N, points: pts.length, serial: serialOf(s) };
};
})();
