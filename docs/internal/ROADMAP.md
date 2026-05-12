# Roadmap

## Phase 1 — MVP (Target: 4-6 weeks from kickoff)

**Goal:** Indie devs can install Answerable, scaffold trust-signal pages, run an audit, and ship with confidence.

### In scope

- [ ] Monorepo scaffold (Turborepo + pnpm)
- [ ] `@answerable/core` — shared types and utilities
- [ ] `@answerable/schemas` — 8 schema generators (Organization, SoftwareApp, FAQPage, Article, Breadcrumb, Product, HowTo, WebSite)
- [ ] `@answerable/metadata` — Next.js App Router metadata helpers
- [ ] `@answerable/sitemap` — Sitemap builder with smart defaults
- [ ] `@answerable/templates` — 5 page templates (About, Privacy, Terms, FAQ, Contact)
- [ ] `@answerable/audit` — 50-check audit engine for Next.js sites
- [ ] `@answerable/cli` — Unified `answerable` command
- [ ] CI on GitHub Actions (test, lint, typecheck, audit-self)
- [ ] Changesets-based publishing to npm
- [ ] Nextra docs site at `answerable.dev` (or fallback domain)
- [ ] `examples/sotto/` — real-world example
- [ ] `examples/basic-nextjs/` — minimal starter
- [ ] Production-ready README with badges, screenshots, quickstart
- [ ] CONTRIBUTING.md
- [ ] LICENSE (MIT)
- [ ] Issue templates
- [ ] GitHub Discussions enabled

### Out of scope (defer to Phase 2)

- Pages Router support
- Astro / Remix / SvelteKit support
- AI content generation
- Search Console integration
- Multi-language audit
- Visual screenshot regression
- Performance audit (LCP/INP/CLS scoring — beyond what Lighthouse already does)

### Definition of done (Phase 1)

- ✅ `pnpm install` works in fresh clone
- ✅ All packages publish to npm without errors
- ✅ `npx answerable init` works in fresh Next.js project
- ✅ `npx answerable audit https://example.com` returns sensible report
- ✅ Docs site live with all recipes documented
- ✅ Audit-self on docs site returns score >= 90
- ✅ Sotto example imports the published packages and works
- ✅ README quickstart can be completed in < 5 minutes by a new user

## Phase 2 — Expansion (Target: 2-3 months post-MVP)

**Theme:** Wider framework support + smarter automation.

- [ ] Next.js Pages Router support
- [ ] Astro adapter
- [ ] Remix adapter
- [ ] AI content generators (`answerable generate-faq --about my-product`)
- [ ] GitHub Action for CI integration
- [ ] Google Search Console auto-submit
- [ ] Bing Webmaster Tools auto-submit
- [ ] Multi-locale audit support
- [ ] Audit caching and historical tracking
- [ ] Brand consistency analyzer (cross-page brand-token validation)
- [ ] Schema diff tool (`answerable diff --before --after`)

## Phase 3 — Scale (Target: 6+ months out)

**Theme:** Network effects + community.

- [ ] Hosted SaaS dashboard (continuous monitoring)
- [ ] Competitor tracking
- [ ] Team / agency features
- [ ] Premium audit (deeper checks, AI advisory)
- [ ] White-label option for agencies
- [ ] Community plugin system
- [ ] Conference talks + content marketing

**Note:** Phase 3 monetization, if pursued, never compromises the MIT core. The community version remains complete and free forever.

## What "Done with Phase 1" Looks Like

A solo dev shipping a SaaS landing page can:

1. Run `pnpm add @answerable/cli` (5 sec)
2. Run `npx answerable init` (2 min — interactive prompts)
3. Get: complete metadata setup, 5 trust pages, sitemap, robots, JSON-LD on every page
4. Run `npx answerable audit https://my-site.com` (30 sec)
5. See a score of 85+ out of 100 on first try
6. Push to production with confidence

If that journey works for any Next.js dev with zero SEO knowledge, Phase 1 is done.
