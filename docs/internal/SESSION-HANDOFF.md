# Session Handoff — 2026-05-29

**Purpose:** Read this file fully before doing anything. It is the source of truth for resuming the Answerfox project in a new Claude Code session.

This handoff supersedes the previous one (which was about the v0.1.0 npm publish). All foundation work since then is captured here.

---

## 60-Second Recap

Anuj has been building **Answerfox**, an open-source AI-SEO toolkit launching as a SaaS. The OSS packages are already live on npm at v0.1.2. The SaaS launch foundation has been fully designed and architected through this session.

**Current state:** Every foundation document is locked. The prototype landing page works in a browser. The next step is engineering work (scaffolding `apps/web` per the TRD).

**User's strategic frame:** Solo lifestyle business, indie developer customer, $5-20K MRR target in 18-24 months. OSS first + paid SaaS for hosted convenience. Per `STRATEGIC-POSITIONING.md`.

**User's working style:** "Recommend, don't ask." Decisive options preferred over neutral menus. See `~/.claude/projects/C--Projects-answerable/memory/MEMORY.md`.

---

## What Is Locked (Every Foundation Document)

All seven documents live under `docs/internal/`. Read in this order if catching up:

| # | File | Status | Purpose |
|---|---|---|---|
| 1 | `STRATEGIC-POSITIONING.md` | ✅ Locked | The why. Positioning sentence, three pillars, OSS+SaaS doctrine, 10 differentiators vs Profound/Peec/Otterly/Searchable, future bets, ProductHunt strategy. |
| 2 | `BRAND-BRIEF.md` | ✅ Locked (historical) | Original Aurora-era brand exploration. Voice rules, anti-AI checklist still apply. Gradient direction superseded. |
| 3 | `BRAND-SYSTEM-LOCKED.md` | ✅ Source of truth | Slate Family system: 6 ember cousins on `#D6D2CB` slate base. Per-page color mapping. Intensity scale (80/60/35/40/60). Three-tier system (primary + Dawn Strip secondary + Ink Drop tertiary). CSS tokens. |
| 4 | `PRD-V1.md` | ✅ Locked | 14 features (5 free + 6 paid + 3 platform foundations). 8 user journeys. Pricing: Free + Pro $29 + Studio $99 Phase 2. Launch checklist. 11 risks. |
| 5 | `CLAUDE-DESIGN-PROMPTS-LOCKED-V33.md` | ✅ Ready | Per-screen Claude Design prompts incorporating v3.3 bloom learnings. For when the user wants to regenerate any screen in Claude Design. |
| 6 | `TRD-V1.md` | ✅ Locked | Technical architecture. Full Postgres schema. Every PRD feature mapped to services. Tech stack: Cloudflare everywhere + Neon + Auth.js + Resend + Gemini 3.5 Flash + Stripe. Cost model. 14-week build plan. |
| 7 | `SESSION-HANDOFF.md` | This file | Continuity bridge between sessions. |

**Also relevant:** the older docs `CLAUDE-DESIGN-PROMPT.md`, `CLAUDE-DESIGN-PROMPT-MULTIPAGE.md`, `GRADIENT-EXPLORATION-PROMPT.md`, `GRADIENT-EXPLORATION-PROMPT-SET-B.md` are historical exploration artifacts from earlier in this session. The current source of truth for design prompts is `CLAUDE-DESIGN-PROMPTS-LOCKED-V33.md`.

---

## What Is Built

### OSS packages (live on npm)

| Package | Version | Status |
|---|---|---|
| `@answerfox/audit` | 0.1.2 | Live. 33 of 50 checks shipped. Three-score (SEO/AEO/GEO) coverage footer added. |
| `@answerfox/cli` | 0.1.2 | Live. `audit`, `explain`, `init`, `add` commands. |
| `@answerfox/core` | 0.1.2 | Live. Branded types, errors, `Check<T>` interface. |
| `@answerfox/schemas` | 0.1.2 | Live. 8 JSON-LD generators. |
| `@answerfox/metadata` | 0.1.2 | Live. `defineSeo()` for Next.js. |
| `@answerfox/sitemap` | 0.1.2 | Live. `buildSitemap()` + `sitemapIndex()`. |
| `@answerfox/templates` | 0.1.2 | Live. 5 trust-page templates. |

**Publishing pipeline:** Trusted Publishing via OIDC (no token). Workflow at `.github/workflows/release.yml`. Runs on push to main.

### Prototype (visual proof, browser-runnable)

Path: `prototype/landing/`

| Screen | File | Status |
|---|---|---|
| 01 Landing | `landing.jsx` | ✅ Approved (slate ember at 80%) |
| 02 Pricing | `pricing.jsx` | ✅ Built (slate marigold at 60%) |
| 03 Dashboard | `dashboard.jsx` | ✅ Built (slate ember at 35%, with SVG sidebar icons) |
| 04 Fix Studio | `fix-studio.jsx` | ✅ Built (slate amber at 40%, transparent base overlay) |
| 05 Sign-in | `signin.jsx` | ✅ Built (slate terracotta at 60%) |

**Engine:** `bloom-engine.js` v3.4 — 5-pass bloom (atmospheric haze + body + soft-light halo + multiply core + NO white pinpoint), grain crossfade (3.2s tile cycle), lissajous orbit with two distinct periods, slow tonal rotation, 30 FPS render.

**To open:** `cd prototype/landing && npx serve .` then http://localhost:5500. Tab bar at top switches between 5 screens.

### Documentation site (`apps/docs`)

| Status | Detail |
|---|---|
| ⚠ Nextra build broken | Nextra 4 + Next 15 prerender issue. Decoupled from release pipeline (PR #19). Not blocking anything. Fix is future work. |

---

## The Single Sentence (Locked Positioning)

> **Answerfox is the only open-source AI-SEO toolkit (SEO + AEO + GEO unified) that lives in your codebase and ships fixes as code.**

Three pillars: **OSS first · Lives in your codebase · Ships fixes as code**.

Differentiator: **Unified SEO + AEO + GEO three-score system**, ships in audit engine v0.2.0+ (next OSS release).

---

## Active Task: Begin Week 1 of the TRD Build Plan

Per `TRD-V1.md` section 25:

**Week 1-2 — Foundations:**
- Scaffold `apps/web` with Next.js 15 App Router
- Configure Tailwind 4 with Slate Family tokens from `BRAND-SYSTEM-LOCKED.md`
- Port `prototype/landing/bloom-engine.js` v3.4 to a TypeScript ESM module at `apps/web/src/components/bloom/engine.ts`
- Create the `<Bloom />` React component wrapper at `apps/web/src/components/bloom/Bloom.tsx`
- Set up Auth.js v5 with GitHub OAuth (primary) and Google OAuth (secondary)
- Set up Drizzle + Neon Postgres
- Run the initial migrations for `users`, `sessions`, `sites`, `audits`, `findings` (DDL in TRD section 5)
- Wire Sentry + PostHog
- Deploy the Landing screen to Cloudflare Pages staging

**Before any code is written, the next session should:**
1. Read this handoff fully
2. Confirm the prototype runs (open localhost:5500 with the dev server)
3. Confirm the OSS packages are live (`npm view @answerfox/audit version` returns 0.1.2)
4. Ask the user: "Ready to scaffold `apps/web`?" before touching the filesystem

---

## Decision History (The Big Choices, So Nothing Gets Re-Litigated)

| Decision | Locked answer | Reference |
|---|---|---|
| Success goal | Solo lifestyle business, $5-20K MRR | STRATEGIC-POSITIONING.md §2 |
| Primary customer | Indie developers / solo founders on Next.js, Astro, Remix | STRATEGIC-POSITIONING.md §2 |
| Business model | Free OSS + Pro $29/mo + Studio $99/mo (Phase 2) | PRD-V1.md §7 |
| License | MIT, with AGPL on cloud-critical parts when/if needed | STRATEGIC-POSITIONING.md §2 |
| AI fix is MVP must-have | Yes | PRD-V1.md F6 |
| Unified SEO + AEO + GEO scoring | Ships in v0.2.0 of OSS audit engine | STRATEGIC-POSITIONING.md §7.5 |
| AI vendor | Gemini 3.5 Flash on free tier, paid fallback | TRD-V1.md §3, §9 |
| AI fix quota | 90/month (3/day) per Pro user | PRD-V1.md F6 |
| Auth | Auth.js v5 (NextAuth), free OSS | TRD-V1.md §24 |
| Hosting | Cloudflare Pages + Workers (no Vercel Pro, no AWS) | TRD-V1.md §24 |
| Free tier dashboard | Latest audit only, no history | PRD-V1.md §5 (revised) |
| Default theme | Light slate only at launch | BRAND-SYSTEM-LOCKED.md, TRD-V1.md §24 |
| Annual billing | Yes at launch, 15% discount | TRD-V1.md §24 |
| Brand signature gradient | Slate Family (6 ember cousins) | BRAND-SYSTEM-LOCKED.md |
| Slate base color | `#D6D2CB` (was `#C9C5BE`, lifted to prevent brown multiply) | BRAND-SYSTEM-LOCKED.md, prototype v3.3 fix |
| Landing ember | `#F89444` orange at 80% intensity | prototype, BRAND-SYSTEM-LOCKED.md |
| White pinpoint at bloom center | REMOVED PERMANENTLY (it looked like a sun) | prototype v3.2 fix, all design prompts forbid it |
| Bloom motion | Slow lissajous with two periods, 22-26s breath | prototype v3.4, user explicitly approved |
| Grain | Smooth crossfade between tiles every 3.2s, not strobe | prototype v3.2 fix |
| Launch timeline | 14.5 weeks from PRD lock (early-to-mid Sept 2026) | PRD-V1.md §1 |

---

## What We Will NOT Build (Discipline Through Subtraction)

Anti-goals from PRD-V1.md §15 and STRATEGIC-POSITIONING.md §9. Anything from this list that comes up in conversation should be politely deferred:

- White-label agency reports (wrong customer)
- Enterprise SSO/SAML (wrong customer)
- Multi-user team accounts (v1; Studio in Phase 2 only)
- Real-time anything (batched is fine and cheaper)
- AI chat interface (gimmicky, kills focus)
- Custom dashboards/widgets (opinionated > flexible)
- Browser extension (not our customer's workflow)
- Mobile app (audits are not a mobile use case)
- Backlink monitoring (Ahrefs' job)
- Keyword research (different category)
- Multi-language SEO at launch (English first)
- Local SEO (different category)
- AI Citation Tracking at launch (Phase 2, separate launch event)

---

## User Preferences and Working Style

These are confirmed through many sessions of work. The new agent should internalize them.

| Preference | Detail |
|---|---|
| Decision style | "Recommend, don't ask." Give a concrete recommendation with reasoning. Use `AskUserQuestion` only when truly needed for non-trivial branching. Never give neutral menus. |
| Voice in product copy | Friendly + educational. Sharp not warm. **Zero em-dashes anywhere.** Use commas, periods, or restructure. AI-tells to avoid: delve, leverage, harness, unlock the potential, seamless, in today's fast-paced world. |
| Voice in our internal chats | Same. The user reads carefully and notices em-dashes and AI-isms. |
| Decisiveness | The user wants forward progress. After enough exploration, they want a lock. When they say "we can proceed," lock and move. |
| Iteration on feel | User has strong design instincts. When they say "too brown" or "too still" or "too fast," they are right. Don't argue, iterate. |
| Money pressure | User is bootstrapping with no revenue yet. Free tiers preferred until forced off. Per TRD-V1.md §22. |
| OSS commitment | The OSS engine is a strategic moat. Stay MIT. The AGPL option is reserved for SaaS-critical components if needed. |

---

## Known Issues

| Issue | Severity | Plan |
|---|---|---|
| Nextra docs site does not build (Next 15 + Nextra 4 prerender) | Low | Decoupled from release pipeline. Fix in dedicated PR when there's time. Does not block launch. |
| 17 audit checks still unshipped (33 of 50) | Medium | Add incrementally. v0.2.0 ships the 5 GEO checks (G1-G5) per STRATEGIC-POSITIONING.md §7.5. |
| OSS `apps/docs` references old `@answerable/*` scope in a few corners | Low | Already renamed to `@answerfox/*` per PR #22. If any lingering references, fix in passing. |
| No marketing site yet (only the prototype) | Expected | This is the Week 1-2 build per TRD-V1.md §25. |

---

## Important Files To Be Aware Of

| Path | What it is |
|---|---|
| `package.json` (root) | Turborepo + pnpm workspaces config. `release` script runs `build:packages && changeset publish`. |
| `.github/workflows/release.yml` | OSS publish via Trusted Publishing (OIDC, no token) |
| `packages/audit/AUDIT-FRAMEWORK.md` | The 55-check spec (50 original + 5 GEO planned for v0.2.0) |
| `packages/audit/src/checks/registry.ts` | Where new checks get registered |
| `prototype/landing/bloom-engine.js` | The v3.4 bloom renderer. Ports to TypeScript at apps/web/src/components/bloom/engine.ts in Week 1. |
| `prototype/landing/index.html` | Entry point for browser preview |
| `~/.claude/projects/C--Projects-answerable/memory/MEMORY.md` | User auto-memory, persists across sessions |

---

## Working Conventions (Established)

| Convention | Detail |
|---|---|
| Small PRs | One concept per PR. Multi-PR sequences are normal. |
| Changesets | Every package-affecting PR adds a changeset under `.changeset/`. |
| Branch protection on main | Requires PR + CI green + linear history. No direct push. |
| Commit messages | Conventional commits (feat:, fix:, docs:, chore:, prototype:). Include `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>` at the end. |
| File creation policy | Do NOT create documentation (`*.md`, READMEs) unless explicitly asked. Currently the foundation docs are all the user wants. |
| Em-dashes | Forbidden in product copy and the user's preference is to avoid them in chats too. |
| Marketing claims | Real numbers only. No fake testimonials, no fake counters, no "trusted by Y companies" without real logos. |

---

## Quick Command Reference

```bash
# Open the visual prototype
cd prototype/landing && npx serve .
# Then open http://localhost:5500

# Verify all OSS packages are live at v0.1.2
for pkg in audit cli core schemas metadata sitemap templates; do
  echo "@answerfox/$pkg -> $(curl -s https://registry.npmjs.org/@answerfox/$pkg/latest | python -c "import sys,json; print(json.load(sys.stdin).get('version','MISSING'))" 2>/dev/null)"
done

# Run the full check (typecheck + lint + 162 tests)
pnpm check

# OSS publish (only when changesets exist on main)
# Trusted Publishing fires automatically on push to main

# Run a real audit from the OSS CLI
pnpm dlx @answerfox/cli audit https://vercel.com
```

---

## The Opening Message For The New Session

When you start the new Claude Code session, paste this exact message as your first prompt:

> Read `docs/internal/SESSION-HANDOFF.md` fully before doing anything else.
>
> We are picking up Answerfox, an open-source AI-SEO toolkit launching as a SaaS. All seven foundation documents are locked (STRATEGIC-POSITIONING, BRAND-BRIEF, BRAND-SYSTEM-LOCKED, PRD-V1, CLAUDE-DESIGN-PROMPTS-LOCKED-V33, TRD-V1, SESSION-HANDOFF). The OSS packages are live on npm at v0.1.2. The visual prototype at `prototype/landing/` validates the v3.4 bloom engine and all 5 foundation screens.
>
> The active task is Week 1 of the TRD build plan: scaffold `apps/web` with Next.js 15, configure Tailwind with Slate Family tokens, port the v3.4 bloom engine to TypeScript, set up Auth.js v5 with GitHub OAuth, set up Drizzle + Neon Postgres, run initial migrations, wire Sentry + PostHog.
>
> Before writing any code, confirm the prototype still runs (start the dev server, check localhost:5500) and propose the exact Week 1 day-by-day plan. I prefer the "recommend, don't ask" style — give me a concrete plan and I'll approve or tweak.
>
> Voice rules: zero em-dashes anywhere. Friendly + educational tone. No AI-tells (delve, leverage, harness, unlock the potential, seamless, in today's fast-paced world).

---

## Success Criteria For The Next Session

When the next session ends, these should be true:

1. The user understands what was built and what is next, with no confusion
2. `apps/web` directory exists with Next.js 15 scaffolded
3. Tailwind config has the Slate Family tokens
4. The Bloom component renders the v3.4 engine in a React app
5. Auth.js v5 is wired up with at least GitHub OAuth working end-to-end
6. Drizzle schema is defined per `TRD-V1.md` §5
7. Initial Neon migration runs cleanly
8. Sentry + PostHog initialized
9. A working Landing page renders at `localhost:3000` (or staging URL)
10. A new commit history exists on a feature branch like `feat/web-foundations-week-1`
11. This handoff doc gets updated with the new current state

---

## Final Reminders For The Next Agent

1. **Read the strategic positioning doc** before suggesting any pivot or feature. The user has thought hard about positioning.
2. **Trust the prototype.** The bloom engine v3.4 is the visual truth. Port it faithfully.
3. **The TRD is the implementation truth.** Every architectural decision is justified there.
4. **The user is the visual decider.** When the user pushes back on feel ("too brown," "too fast," "too still"), iterate. Don't argue.
5. **Stay free-tier first.** Cost discipline is part of the strategy.
6. **No new docs unless asked.** The seven foundation docs are enough. Do not add more.
7. **Zero em-dashes. Ever.**

---

**Last session ended: 2026-05-29**
**TRD-V1.md committed on branch `docs/strategic-positioning`. Needs to be merged to main.**
**Welcome the user with: "Picking up from the v3.4 prototype + TRD lock. Ready to scaffold apps/web for Week 1?"**
