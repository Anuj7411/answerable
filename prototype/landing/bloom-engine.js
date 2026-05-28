/* ============================================================
   ANSWERABLE — SLATE FAMILY BLOOM ENGINE (v2, eye-friendly)
   Parameterized grain + ember bloom for every screen background.

   v2 fixes (vs Claude Design original):
   - Grain crossfades between tiles over ~3.2s instead of strobing
     at 8Hz. Removes the visible "boil" / itchy shimmer.
   - Grain alpha defaults reduced from 0.28 to 0.14 for less
     overall texture noise.
   - Overlay grain pass cut from 0.36x to 0.18x (much subtler).
   - Bloom breath period lengthened from 12s to 22s with amplitude
     halved (0.12 -> 0.06). Inspired by shadergradient.co pacing.
   - New slow tonal drift (60s rotation of the diagonal gradient)
     adds shader-style "alive but calm" feel without flicker.
   - FPS lifted to 30 for smoother bloom motion.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- film grain tiles ---------- */
  function makeNoise(size, bias) {
    bias = bias || 0;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    const id = ctx.createImageData(size, size);
    const d = id.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = Math.max(0, Math.min(255, ((Math.random() * 255) | 0) + bias));
      d[i] = d[i + 1] = d[i + 2] = v;
      d[i + 3] = 255;
    }
    ctx.putImageData(id, 0, 0);
    return c;
  }
  const PAPER = Array.from({ length: 6 }, () => makeNoise(256, 18));

  /*
    grain v2: crossfades between two adjacent tiles instead of
    cutting between them every 1/8 of a second. The two-tile
    blend makes the texture feel like a slowly breathing film
    stock rather than a strobing noise generator.
  */
  function grainPair(ctx, W, H, baseAlpha, mode, t, tileSeconds) {
    const len = PAPER.length;
    const phase = (t / tileSeconds) % len;
    const a = Math.floor(phase);
    const b = (a + 1) % len;
    const blend = phase - a; // 0..1

    const draw = (tile, alpha) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.globalCompositeOperation = mode;
      const pat = ctx.createPattern(tile, 'repeat');
      ctx.fillStyle = pat;
      ctx.fillRect(0, 0, W + 600, H + 600);
      ctx.restore();
    };

    // smooth fade between two tiles. cos curve keeps the sum visually
    // constant (no perceived brightness pulse) while still moving.
    const wA = 0.5 + 0.5 * Math.cos(blend * Math.PI);
    const wB = 1 - wA;
    if (PAPER[a]) draw(PAPER[a], baseAlpha * wA);
    if (PAPER[b]) draw(PAPER[b], baseAlpha * wB);
  }

  function rgba(rgb, a) {
    return 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + a + ')';
  }

  /* ---------- the bloom renderer ----------
     opts:
       base        slate base hex (e.g. '#C9C5BE')
       toneA/B     subtle diagonal tonal shift rgba strings
       ember       [r,g,b] main ember
       core        [r,g,b] hot core (defaults to ember)
       intensity   0..1 master alpha multiplier
       cx,cy       bloom center as fraction of W/H
       radius      bloom radius as fraction of W
       period      breath loop seconds (default 22, was 12)
       breathAmp   breath scale amplitude (default 0.06, was 0.12)
       grainMul    paper-grain alpha (default 0.14, was 0.28)
       grainTime   seconds per grain crossfade (default 3.2)
       tonePeriod  seconds for full tonal rotation (default 60)
       shadow      optional cool counter-shadow opposite bloom
  */
  function makeRenderer(opts) {
    const base = opts.base || '#C9C5BE';
    const ember = opts.ember || [232, 123, 44];
    const core = opts.core || ember;
    const I = opts.intensity == null ? 0.8 : opts.intensity;
    const fcx = opts.cx == null ? 0.78 : opts.cx;
    const fcy = opts.cy == null ? 0.28 : opts.cy;
    const fr = opts.radius == null ? 0.52 : opts.radius;
    const period = opts.period || 22;
    const bAmp = opts.breathAmp == null ? 0.06 : opts.breathAmp;
    const grainMul = opts.grainMul == null ? 0.14 : opts.grainMul;
    const grainTime = opts.grainTime || 3.2;
    const tonePeriod = opts.tonePeriod || 60;
    const toneA = opts.toneA || 'rgba(200,195,188,0.40)';
    const toneB = opts.toneB || 'rgba(178,173,165,0.50)';

    return function (ctx, W, H, t) {
      // base
      ctx.fillStyle = base; ctx.fillRect(0, 0, W, H);

      /* slow tonal rotation: the diagonal gradient angle drifts
         around a circle over `tonePeriod` seconds. Gives a quiet
         alive-but-not-distracting motion like shadergradient.co */
      const angle = (t / tonePeriod) * Math.PI * 2;
      const cosA = Math.cos(angle), sinA = Math.sin(angle);
      const cxC = W / 2, cyC = H / 2;
      const half = Math.max(W, H);
      const x1 = cxC - cosA * half, y1 = cyC - sinA * half;
      const x2 = cxC + cosA * half, y2 = cyC + sinA * half;
      const tone = ctx.createLinearGradient(x1, y1, x2, y2);
      tone.addColorStop(0, toneA);
      tone.addColorStop(1, toneB);
      ctx.fillStyle = tone; ctx.fillRect(0, 0, W, H);

      // ember bloom (slower, subtler breath)
      const breath = (1 - bAmp) + Math.sin(t * (Math.PI * 2 / period)) * bAmp;
      const cx = W * fcx, cy = H * fcy;
      const r = W * fr * breath;
      ctx.save();
      ctx.globalCompositeOperation = 'multiply';
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, rgba(ember, 0.78 * I));
      g.addColorStop(0.25, rgba(ember, 0.45 * I));
      g.addColorStop(0.60, rgba([Math.round(ember[0]*0.78), Math.round(ember[1]*0.78), Math.round(ember[2]*1.05)], 0.16 * I));
      g.addColorStop(1, rgba(ember, 0));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const cg = ctx.createRadialGradient(cx - 25, cy + 10, 0, cx - 25, cy + 10, r * 0.4);
      cg.addColorStop(0, rgba(core, 0.42 * I));
      cg.addColorStop(1, rgba(core, 0));
      ctx.fillStyle = cg; ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // optional cool counter-shadow for depth
      if (opts.shadow) {
        const s = opts.shadow;
        ctx.save();
        ctx.globalCompositeOperation = 'multiply';
        const sg = ctx.createRadialGradient(W * s.cx, H * s.cy, 0, W * s.cx, H * s.cy, W * 0.5);
        sg.addColorStop(0, rgba(s.rgb, (s.a == null ? 0.18 : s.a) * I));
        sg.addColorStop(1, rgba(s.rgb, 0));
        ctx.fillStyle = sg; ctx.fillRect(0, 0, W, H);
        ctx.restore();
      }

      /* film grain — calm crossfade between two tiles instead of
         strobing. Multiply pass at full grainMul, overlay pass at
         a quiet 18% of that for subtle highlight texture. */
      grainPair(ctx, W, H, grainMul, 'multiply', t, grainTime);
      grainPair(ctx, W, H, grainMul * 0.18, 'overlay', t + 1.6, grainTime);
    };
  }

  /* ---------- mount + RAF loop ---------- */
  function mountBloom(canvas, opts) {
    opts = opts || {};
    const cssW = opts.w || canvas.clientWidth || 1440;
    const cssH = opts.h || canvas.clientHeight || 900;
    // downscaled backing for perf; grain reads slightly coarser (film-like)
    const scale = opts.renderScale || 0.62;
    const W = Math.round(cssW * scale);
    const H = Math.round(cssH * scale);
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    const render = makeRenderer(opts);

    const start = performance.now();
    let last = 0;
    const FPS = opts.fps || 30; /* lifted from 26 for smoother bloom drift */
    const INT = 1000 / FPS;
    function frame(now) {
      if (now - last >= INT) {
        last = now;
        const t = Math.max(0, (now - start) / 1000);
        try { render(ctx, W, H, t); } catch (e) {}
      }
      requestAnimationFrame(frame);
    }
    render(ctx, W, H, 0);
    requestAnimationFrame(frame);
    return canvas;
  }

  window.mountBloom = mountBloom;
})();
