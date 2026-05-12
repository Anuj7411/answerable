# Answerable

> The drop-in SEO toolkit that makes any site answerable by AI search engines.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![CI](https://github.com/Anuj7411/answerable/actions/workflows/ci.yml/badge.svg)](https://github.com/Anuj7411/answerable/actions/workflows/ci.yml)
[![Status: Pre-Alpha](https://img.shields.io/badge/status-pre--alpha-orange.svg)](#status)

Install one package. Run one command. Your site is SEO-ready, AI-search-ready, and audited continuously — without you becoming an SEO expert.

## Why Answerable?

Indie developers and SaaS founders waste **20–40 hours per launch** on SEO that should be automated. Existing tools each solve a slice — `next-seo` gives components but no strategy, Lighthouse audits but doesn't fix, Ahrefs costs hundreds per month, and AI-search readiness is barely covered anywhere.

Answerable is the missing tool that combines all three:

| | Drop-in fixes | Continuous audit | Plain-English teaching |
|---|:---:|:---:|:---:|
| `next-seo` | partial | ❌ | ❌ |
| Lighthouse | ❌ | partial | ❌ |
| Ahrefs / Semrush | ❌ | ✅ | ❌ |
| **Answerable** | ✅ | ✅ | ✅ |

## Status

**Pre-alpha — under active construction.** The monorepo scaffold is in place; package implementations are landing incrementally. See [ROADMAP](./docs/internal/ROADMAP.md) for the Phase 1 / 2 / 3 breakdown.

Nothing on npm yet. Star and watch the repo to follow along.

## Planned packages

| Package | Purpose |
|---|---|
| `@answerable/core` | Shared types, utilities, error classes |
| `@answerable/schemas` | Type-safe JSON-LD generators (Organization, FAQPage, Article, ...) |
| `@answerable/metadata` | Next.js metadata API helpers |
| `@answerable/sitemap` | Sitemap builder with smart defaults |
| `@answerable/templates` | Trust-signal page templates (About, Privacy, Terms, FAQ, Contact) |
| `@answerable/audit` | 50-check audit engine with auto-fix |
| `@answerable/cli` | Unified `answerable` command-line entrypoint |

## Quickstart (planned)

```bash
# In your existing Next.js project:
pnpm add @answerable/schemas @answerable/metadata @answerable/sitemap
npx answerable init        # interactive setup
npx answerable audit https://your-site.com
```

A score of 85+ on first audit is the design target. Full quickstart docs land with v0.1.

## Repository layout

```
answerable/
├── packages/      # Published npm packages
├── apps/          # Docs site + live playground
├── examples/      # Real-world integrations
├── checklists/    # Pre-launch / monthly-audit / AI-readiness checklists
└── docs/internal/ # Project spec, roadmap, audit framework
```

## Contributing

Contributions are welcome once Phase 1 lands. See [CONTRIBUTING.md](./CONTRIBUTING.md). In the meantime, feel free to open [Discussions](https://github.com/Anuj7411/answerable/discussions) for feedback on the architecture.

## License

[MIT](./LICENSE) © 2026 Anuj Ojha. The community version is and will remain complete and free forever.
