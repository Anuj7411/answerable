---
"@answerable/audit": minor
---

Add 12 more checks to the audit registry — meta foundations, Organization JSON-LD, OpenGraph, and Twitter cards. Audit grows from 5 to **17 checks** covering **~31 of 100 points**.

**A-series (meta & technical) — 7 new points:**

| ID | Check | Sev | Pts |
|---|---|---|---|
| A6 | Viewport meta (`width=device-width` + `initial-scale=1`) | high | 2 |
| A7 | charset declared as UTF-8 (modern or http-equiv form) | medium | 1 |
| A8 | robots meta consistent with intent (no accidental noindex, no contradictions) | high | 2 |
| A9 | Favicon linked (icon / shortcut icon / mask-icon) | medium | 1 |
| A10 | Apple touch icon linked | low | 1 |

**C-series (structured data) — 2 new points:**

| ID | Check | Sev | Pts |
|---|---|---|---|
| C2 | Organization JSON-LD present (walks plain objects, arrays, and `@graph` forms) | high | 2 |

**F-series (OpenGraph & Twitter) — 7 new points:**

| ID | Check | Sev | Pts |
|---|---|---|---|
| F1 | og:title set | high | 1 |
| F2 | og:description set | high | 1 |
| F3 | og:image declared with absolute http(s) URL | high | 2 |
| F5 | og:url declared as canonical absolute URL | medium | 1 |
| F6 | twitter:card set to a recognised type | high | 1 |
| F7 | twitter:image (or og:image fallback acceptable) | medium | 1 |

A8 deliberately *passes* when no robots meta is present — absence means the default (`index, follow`), which is the correct behaviour for a live page. The check fires only on accidental `noindex` (the most common SEO own-goal) or contradictory directives like `index, noindex`.

F7 implements the OpenGraph → Twitter fallback chain: a missing `twitter:image` passes if `og:image` is present, since X/Twitter falls back to it.
