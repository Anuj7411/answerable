# Session Starter — Paste This Into Your New Claude Session

> Copy everything below the line and paste it as your first message in the new session.
> Make sure you're working in the `C:\Projects\answerable\` directory so Claude can read the supporting docs.

---

I'm starting a new project called **Answerfox** — an open-source, drop-in SEO toolkit + auto-auditor + playbook for indie developers and SaaS founders. The goal is for any developer to install it, run a few commands, and have production-grade SEO + AI-search-engine readiness without thinking about it.

## What's already decided (do not re-litigate)

- **Project name:** `answerable`
- **License:** MIT
- **Repo location:** new GitHub repo at `Anuj7411/answerable` (to be created during this session)
- **Tech stack:** TypeScript strict, Turborepo + pnpm monorepo, Vitest, Nextra for docs, MIT licensed
- **Scope of MVP:** Schemas + Metadata + Sitemap + Templates + Audit CLI (full scope in `ROADMAP.md`)
- **Timeline:** No urgency. Patience and great architecture over speed. Step by step.
- **Brand inspiration:** open-webui's clarity and polish
- **Origin context:** Spec was developed during a session on a sibling project (Sotto, a Secret Santa app at sottogames.com). Sotto will be the first real-world `examples/` entry.

## What I need you to do first

**Read these files in order before doing anything else:**

1. `docs/internal/PROJECT-SPEC.md` — Complete architectural decision record. This is the source of truth.
2. `docs/internal/ROADMAP.md` — Phase 1/2/3 breakdown.
3. `docs/internal/AUDIT-FRAMEWORK.md` — All 50 audit checks the tool must implement.

After reading, **summarize back to me in 5 bullet points** what you've understood so I can confirm 100% context transfer before we touch any code. If anything in the spec is unclear or you'd push back on, flag it then — not after we start building.

## How we work

- Patience over urgency. Architecture and quality first.
- Step by step. We agree on each phase before executing.
- No silent assumptions. If a decision wasn't documented, you ask.
- TypeScript strict mode, no `any`.
- Every public API has tests.
- Every doc page has a working code example.

## My role

I'm the product owner. I'll make the final call on scope changes, design tradeoffs, and brand decisions. You're the implementation lead — propose the cleanest path, then execute on my approval.

When you're ready with your 5-bullet summary, I'll review and then we plan the first concrete step (likely: create the GitHub repo and scaffold the monorepo).
