# @answerfox/core

## 0.2.0

### Minor Changes

- d164034: Rebrand to Answerfox. The toolkit is now published under the `@answerfox/*` scope, the CLI command is `answerfox`, the base error class is `AnswerfoxError`, and documentation links point to `answerfox.dev`. This is the first unified `0.2.0` release across all seven packages under the new brand. Users on `@answerable-kit/*` should migrate to `@answerfox/*`.

## 0.1.1

### Patch Changes

- 07e0c2f: Refresh package README headers: replace stale "Pre-alpha" notices with accurate v0.1.0 release context. No code or API changes — documentation only.

## 0.1.0

### Minor Changes

- eeb3966: Introduce the core primitives every other Answerfox package builds on:

  - Branded `URLString` and `AbsoluteUrl` types with zod schemas; `parseAbsoluteUrl` / `tryParseAbsoluteUrl` helpers.
  - `Severity` enum (`critical` / `high` / `medium` / `low`) with `SEVERITY_ORDER` and `severityRank`.
  - `Category` enum (six audit categories) plus `CATEGORY_ID_PREFIX` and `CATEGORY_POINT_BUDGET` constants that mirror AUDIT-FRAMEWORK.md.
  - `AnswerfoxError` base class with `InvalidUrlError` and `SchemaValidationError` subclasses, all carrying stable error codes.
  - `Check` interface and `defineCheck()` identity helper for authoring typed audit checks.
