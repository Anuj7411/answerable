---
"@answerable-kit/cli": minor
---

Scaffold `@answerable-kit/cli` — the seventh and final library package — exposing the `answerable` command. Wraps the audit engine for terminal and CI use.

**Commands shipping today:**

- `answerable audit <url>` — fetch, run all 17 checks, print a human-readable report
- `answerable audit <url> --json` — emit JSON to stdout (CI integration)
- `answerable audit <url> --ci --min-score 80` — exit non-zero when score < threshold
- `answerable audit <url> --no-color` — disable ANSI for non-TTY pipelines
- `answerable explain <check-id>` — full doc for a single check (description · category · severity · rationale · docs URL)

**Exit codes:**

- `0` — success (and, with `--ci`, score ≥ threshold)
- `1` — CI threshold not met
- `2` — argument error, unknown check ID, or audit failure (network, parse)

**Architecture note.** Each command is split into a pure runner (`runAuditCommand`, `runExplainCommand`) that returns `{ stdout, exitCode, error? }`, and a thin commander registration that wires the runner to `process.stdout` / `process.exit`. The runners take an optional deps object for test injection (`{ auditImpl }`) — so tests never hit the network and never call `process.exit`.

**Deferred to Step 12:** `init`, `add`, and `verify` commands (need more design — interactive prompts, file-writing patterns, JSON-LD walking).
