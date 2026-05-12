# Changesets

This directory holds [changesets](https://github.com/changesets/changesets) — small markdown files describing user-facing changes that ship in the next release.

## How to add one

```bash
pnpm changeset
```

Pick which packages changed, choose `patch` / `minor` / `major`, and write a short summary aimed at end users (not commit-style internal notes).

## How releases happen

1. PRs that touch published packages must include a changeset.
2. On merge to `main`, a "Version Packages" PR is opened automatically (via the Changesets GitHub action — wired up in Phase 1).
3. Merging that PR bumps versions, updates changelogs, and publishes to npm.

## When *not* to add a changeset

Internal-only changes (docs, CI tweaks, refactors with no API change) don't need a changeset. If unsure, add one — it's cheap.
