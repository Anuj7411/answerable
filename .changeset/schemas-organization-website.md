---
"@answerable/schemas": minor
---

Introduce the first two JSON-LD generators of the eight Phase 1 will ship:

- **`organization()`** — emits a `WithContext<Organization>` with name, url, optional logo, description, sameAs, and a nested ContactPoint (defaulting `contactType` to `"customer support"`).
- **`webSite()`** — emits a `WithContext<WebSite>`. When `searchUrlTemplate` is supplied, attaches a `SearchAction` with the standard `query-input: "required name=search_term_string"` field.

All URL inputs are validated as absolute http(s) URLs at runtime via `@answerable/core`; invalid input throws `InvalidUrlError`. A bad `searchUrlTemplate` (missing the `{search_term_string}` placeholder) throws `SchemaValidationError`.
