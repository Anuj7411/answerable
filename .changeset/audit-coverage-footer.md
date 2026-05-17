---
'@answerable-kit/audit': patch
---

Add a framework-coverage footer to the console reporter so users scoring 100/100 understand they were audited against the currently-shipped subset (33 of 50 checks at v0.1.x), not the full spec. Also exports a new `TOTAL_PLANNED_CHECKS` constant for downstream tools that want to compute coverage themselves.
