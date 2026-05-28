# Answerable — Landing prototype

Browser-runnable preview of the locked Slate Family landing page.

## How to open

The simplest way:

```
# from the repo root
cd prototype/landing
npx serve .
# then open the printed URL (usually http://localhost:3000)
```

Or any static server. Do not just `file://` open `index.html` — Babel and the `<script src="*.jsx">` references want `http://` to work cleanly.

## What changed vs the original Claude Design export

The original bloom engine strobed grain frames at 8 Hz which caused itchy shimmer. v2 has these fixes:

| Aspect | Original | v2 |
|---|---|---|
| Grain frame rate | strobed at 8 Hz | smooth crossfade every 3.2s |
| Grain alpha (multiply pass) | 0.28 | 0.14 |
| Grain alpha (overlay pass) | 0.36x grainMul | 0.18x grainMul |
| Bloom breath period | 12s | 22s |
| Bloom breath amplitude | 0.12 | 0.06 |
| Tonal gradient | static | slow 60s rotation (shader-feel) |
| Render FPS | 26 | 30 |

The result: calm, slow shader-gradient-style background that does not strain the eyes during long reading sessions.

## Files

| File | Purpose |
|---|---|
| `index.html` | Entry point; loads React, Babel, the engine, and the page |
| `slate.css` | Locked design system tokens and component primitives |
| `bloom-engine.js` | The canvas renderer (eye-friendly v2) |
| `shared.jsx` | Bloom wrapper + GitHub/Google icons |
| `landing.jsx` | The Landing screen with tuned bloom opts |
| `app.jsx` | Renders Landing centered at 1440x900 |

## Source

Originally exported from Claude Design (`https://claude.ai/design`) on 2026-05-28 via Anthropic's design API. The original artifact lived under `anserable-3/project/`. This directory is the integrated + eye-friendly version.

## Next steps after preview

Once the visual feel is locked, this prototype gets ported to the real Next.js app at `apps/web/` (to be scaffolded). At that point this directory becomes historical reference.
