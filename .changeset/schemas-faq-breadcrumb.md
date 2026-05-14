---
"@answerable/schemas": minor
---

Add two more JSON-LD generators and refactor the shared narrowing pattern into an internal helper:

- **`faqPage()`** — emits a `WithContext<FAQPage>` with each `{ question, answer }` entry mapped to a `Question` + nested `Answer`. The most-leveraged generator for AI answer engines (Perplexity, Claude, ChatGPT all key off FAQPage). Drives audit check `C4`.
- **`breadcrumb()`** — emits a `WithContext<BreadcrumbList>` with `position` auto-numbered from 1 in input order. Drives audit check `C7`.

Both generators batch their validation failures: a single `SchemaValidationError.issues` array enumerates every empty question / answer / breadcrumb name in the input rather than throwing on the first.
