# Answerfox Brand Brief

**Purpose:** Single source of truth for visual identity, voice, and copy guidelines. Paste relevant sections into Claude Design when starting any new prototype. Reference this when writing any product copy.

**Status:** Locked direction 2026-05-20.
**Use with:** claude.ai/design, shadcn/ui, skiper-ui.com, 21st.dev, Aceternity UI.

---

## 1. Project Context (paste this into Claude Design as your first prompt)

> Answerfox is an open-source AI-SEO toolkit for indie developers building SaaS products. It audits any website across SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) using a 50-check framework, then uses AI to generate the actual code fixes (meta tags, schema markup, content rewrites) which users can download as patches or auto-merge as GitHub PRs.
>
> The product has two access modes: a free open-source CLI (`pnpm dlx @answerable-kit/cli`) and a paid hosted SaaS ($29/mo) that adds AI fix generation, citation tracking across ChatGPT/Perplexity/Gemini, and audit history.
>
> Target user: solo indie developers building Next.js, Astro, or Remix SaaS products. They live in their terminal, ship via Vercel, and find tools through Twitter and Hacker News. They are technically sophisticated, allergic to marketing fluff, and respect tools that respect their intelligence.
>
> Visual ambition: award-show worthy. Not template SaaS. Reference brands include Shader Gradient (shadergradient.co), Skiper UI (skiper-ui.com), and 21st.dev marketplace components. The product should feel futuristic, dense without being cluttered, and unmistakably handcrafted.

---

## 2. Brand Positioning

**The single sentence:**
> Answerfox is the only open-source AI-SEO toolkit (SEO + AEO + GEO unified) that lives in your codebase and ships fixes as code.

**Three pillars:**
- **Open source first** (audit engine is MIT-licensed, anyone can verify our claims)
- **Lives in your codebase** (npm install, GitHub Action, CI-first)
- **Ships fixes as code** (AI generates real patches, not vague advice)

**The differentiator no one else has:**
Three scores for the price of one: SEO, AEO, GEO. Side by side. Honestly weighted.

---

## 3. Color System

### Dark mode (default)

| Token | Hex | Use |
|---|---|---|
| `bg.base` | `#0A0E1A` | Page background |
| `bg.elevated` | `#10162A` | Cards, modals, raised surfaces |
| `bg.glass` | `rgba(20, 26, 48, 0.6)` + 12px blur | Floating panels, glassmorphism |
| `text.primary` | `#F2F4F8` | Body text, headings |
| `text.muted` | `#7B8BA8` | Captions, secondary info |
| `text.dim` | `#4A5A78` | Disabled, metadata |
| `accent.cyan` | `#00F0FF` | Links, info, focus rings |
| `accent.violet` | `#A855F7` | Premium tier, Pro features |
| `accent.magenta` | `#FF006E` | Warnings, alert states |
| `accent.lime` | `#A3FF12` | Success, passing checks |
| `border.subtle` | `rgba(255, 255, 255, 0.08)` | Card edges |
| `border.strong` | `rgba(255, 255, 255, 0.16)` | Active inputs, selection |

### The Aurora Gradient (hero element)

The signature visual. Use sparingly: hero background, CTA buttons, score bars, brand mark accents.

```css
background: linear-gradient(
  135deg,
  #00F0FF 0%,
  #A855F7 50%,
  #FF006E 100%
);
```

Even better: animate it as a shader (see Shader Gradient reference). The gradient should subtly shift over 8-12 seconds, never aggressively. Calm but alive.

### Light mode (secondary, ship in v2)

Light mode exists but is not the default. Indie devs prefer dark. Build dark first, port to light later.

---

## 4. Typography

**Display font (headings, hero, marketing):** `Aeonik Pro` or `Söhne` (paid). Free fallback: `Geist` (Vercel's open-source font, fits the developer aesthetic).

**Body font:** `Inter` (free, open source, designer-loved).

**Monospace (code, terminal output, scores):** `JetBrains Mono` or `Geist Mono`.

**Type scale (Tailwind-compatible):**

| Use | Size | Weight | Letter spacing |
|---|---|---|---|
| Hero headline | `text-7xl` (4.5rem) | 600 | `-0.04em` |
| Section heading | `text-4xl` (2.25rem) | 600 | `-0.02em` |
| Card heading | `text-xl` (1.25rem) | 600 | `-0.01em` |
| Body | `text-base` (1rem) | 400 | `0` |
| Caption | `text-sm` (0.875rem) | 400 | `0.01em` |
| Mono / scores | `text-2xl` (1.5rem) mono | 500 | `-0.02em` |

**Rule:** Tight letter spacing on big text. Default on body. Slightly open on small captions for readability.

---

## 5. Component Aesthetic

**The look:**
- Glass cards over animated mesh gradient backgrounds
- Subtle inner glows on hover, never aggressive shadows
- Rounded corners: `rounded-2xl` (16px) for cards, `rounded-xl` (12px) for buttons, `rounded-full` for pills
- Hairline borders (`border-white/8` style) instead of heavy borders
- Bento grid layouts for dashboard sections
- Score bars use the aurora gradient
- Numbers (scores, metrics) in monospace with tabular-nums

**The vibe:**
- Layered (depth through translucency, not shadows)
- Restrained motion (everything animates, nothing jitters)
- Density where it matters (data), space where it breathes (chrome)
- Hand-finished feel (custom focus rings, custom toggles, no shadcn-default tells)

---

## 6. Motion and Animation

**Principle:** Motion is information, not decoration. Every animation should communicate state, not show off.

**Library:** Framer Motion + react-three-fiber (for shader effects).

**Use motion for:**
- Score bars filling on first render (1.2s, ease-out)
- Aurora gradient slow continuous shift in hero (8-12s loop)
- Card entrance on viewport enter (fade + 8px translate up, 400ms, ease-out)
- Number count-ups on metric reveals (600ms, ease-out)
- Skeleton shimmer during async loads (1.5s loop)
- Page transitions (subtle fade through, 200ms)

**Never:**
- Spinning loaders (use skeleton shimmer instead)
- Bouncy spring animations on serious data (use ease-out)
- Auto-playing videos on landing page hero
- Anything that demands attention without reason

---

## 7. Voice and Copy Guidelines

### Tone

**Friendly + educational.** Warm enough to be human, sharp enough to respect the reader's intelligence. We are talking to senior developers who hate being talked down to.

### Rules (NON-NEGOTIABLE)

| Rule | Why | Example |
|---|---|---|
| **No em-dashes (`—`) anywhere** | Top tell of AI-generated content. We will never use one. | Use commas, colons, or periods instead |
| **No `—`-style asides** | Same reason | Use parentheses or restructure the sentence |
| **No "delve", "navigate", "tapestry", "realm"** | AI vocabulary tells | Use plain words: explore, find, mix, area |
| **No "harness the power of", "unlock the potential"** | Marketing cliché + AI tell | Just say what the thing does |
| **No "in today's fast-paced world"** | Worst AI opener | Start with the user's problem |
| **No three-feature hero sections with icons** | Every AI-built SaaS does this | Use one strong claim + one visual demo |
| **No "AI-powered" prefix on every feature** | Overused; we already say AI in the name | Say what it does, not how |
| **No generic "Get Started" buttons** | Boring | Use specific verbs: "Audit my site", "See it work" |
| **No exclamation marks in product UI** | Looks unprofessional and AI-eager | Use periods. Confidence comes from calm. |
| **No emoji in body copy** | Date stamp on copy | Use sparingly in marketing only (one per page max) |

### Word swaps

| Replace | With |
|---|---|
| "leverage" | "use" |
| "utilize" | "use" |
| "facilitate" | "help" or "make easier" |
| "robust" | "solid" or specific quality |
| "comprehensive" | "complete" or specific list |
| "seamless" | "smooth" or just delete it |
| "cutting-edge" | (just delete; show, don't tell) |
| "powerful" | specific capability |
| "intelligent" | specific behavior |
| "revolutionary" | (just delete) |
| "game-changer" | (just delete) |

### Voice examples

**Bad (AI-generated tells):**
> Unlock the power of AI-driven SEO with Answerfox—the cutting-edge platform that leverages intelligent algorithms to deliver comprehensive optimization across the modern web's evolving landscape.

**Good:**
> Answerfox audits any website across 55 checks and writes the fixes for you. Open source. Three scores: SEO, AEO, GEO. One tool.

**Bad:**
> Our intelligent agents work tirelessly to ensure your site is optimized!

**Good:**
> Run the audit. We will show what is broken and write the patch.

---

## 8. Layout Patterns

### Landing page

| Section | Purpose | Notes |
|---|---|---|
| 1. Hero | Hook + the single sentence + primary CTA | Aurora gradient background, animated. Single big claim. Demo screenshot or short video below the fold |
| 2. "See it work" | Show, do not tell | 30-second demo video: terminal → audit → score → PR opens |
| 3. The three scores | Differentiator section | Three score cards side by side. Aurora-gradient fills. Real example data |
| 4. How it works (in your code) | Workflow integration story | Code snippet of `pnpm dlx @answerable-kit/cli`. GitHub Action YAML snippet. Real terminal output |
| 5. What we check | Build credibility | 50-check breakdown, expandable. Link to public framework spec |
| 6. Open source proof | Trust marker | GitHub stars badge, contributors, npm downloads, "verify any claim" callout |
| 7. Pricing | Convert | Free / Pro $29 / Studio $99. Three cards. Friendly comparison table below |
| 8. FAQ | Close objections | "Why pay if it is open source?", "How is this different from Profound?", etc. |
| 9. Footer | Standard | Links, social, status |

### Dashboard

| Element | Pattern |
|---|---|
| Top bar | Logo + site selector + user avatar. Glass background. |
| Side nav | Collapsible, icon + label. Active state uses aurora gradient as left border |
| Main content | Bento grid (12-column, irregular tiles) |
| Score cards | Three primary tiles (SEO, AEO, GEO), one secondary (Aggregate). Aurora-gradient fills, monospace numbers |
| Findings list | Dense table, severity-color-coded, click to expand for evidence |
| Fix Studio | Side panel slides in from right. Shows AI-generated diff with accept/reject |

---

## 9. Tools and Component Sources

**Use:**
- **claude.ai/design** — primary tool for visual prototyping
- **shadcn/ui** — base components (then heavily customize, never default)
- **Skiper UI (skiper-ui.com)** — distinctive animated components
- **21st.dev** — marketplace for premium custom shadcn variants
- **Aceternity UI** — high-quality animated React components
- **Magic UI** — additional motion components
- **Shader Gradient (shadergradient.co)** — for hero shader backgrounds
- **react-three-fiber + drei** — for any 3D / shader work
- **Framer Motion** — for all UI motion
- **Lucide** — icons (clean, customizable, free)
- **Vercel Geist** — typography (free)

**Do not use:**
- Default shadcn components without customization (everyone uses them, looks template)
- Material UI (wrong aesthetic for our brand)
- Bootstrap (period)
- Stock Unsplash photography (use abstract / 3D / generative imagery instead)
- Lottie animations from LottieFiles browse page (recognizable, used everywhere)

---

## 10. The Anti-AI-Generated Checklist

Before publishing any page, screen, or copy, audit against this list:

- [ ] No em-dashes anywhere
- [ ] No three-feature hero block with icons
- [ ] No centered hero with subtle gradient + "Get Started" button
- [ ] No "AI-powered" or "intelligent" repeated as adjective
- [ ] No generic stock illustrations
- [ ] No "Built with [stack]" badges in footer
- [ ] No purple gradient on white background (the universal AI startup look)
- [ ] No "Loved by developers at [generic logos]" without real logos
- [ ] No "5x your productivity" or similar productivity-bro phrasing
- [ ] No three-step "how it works" with numbered circles
- [ ] No 47 testimonial cards in a carousel (use 3 real ones)
- [ ] No "Limited time offer" or fake scarcity
- [ ] Has at least one custom illustration, animation, or visual we made ourselves
- [ ] Has at least one piece of real data on screen (real score, real citation, real audit)
- [ ] Reads like a human wrote it (read aloud test)

---

## 11. First Deliverables (for Claude Design)

**Order of design work in Claude Design:**

| Order | Deliverable | Why first |
|---|---|---|
| 1 | Design system (colors + type + components) | Foundation for everything else |
| 2 | Landing page hero | Sets visual tone, becomes ProductHunt screenshot |
| 3 | Pricing section | Confirms color usage for primary CTAs |
| 4 | Dashboard home (three scores) | The product's defining screen |
| 5 | Audit details view | Where users spend most time |
| 6 | Fix Studio panel | The magic moment screen |
| 7 | Citation tracker view | Differentiator screen |
| 8 | Sign-in / Sign-up | Onboarding entry |
| 9 | Empty states + error states | Polish |
| 10 | Email templates | Comes later, with Canva MCP if needed |

---

## 12. The Prompt to Use When Starting a New Claude Design File

When opening a new prototype in Claude Design, paste this as the starting prompt:

> Create a [WIREFRAME / HIGH FIDELITY] design for [SCREEN NAME] of Answerfox, an open-source AI-SEO toolkit.
>
> Brand: futuristic, distinctive, award-show worthy. Reference: Shader Gradient, Skiper UI, 21st.dev. NOT template-feel.
>
> Color palette: dark mode default. Background #0A0E1A. Aurora gradient for accents: #00F0FF to #A855F7 to #FF006E. Text #F2F4F8 primary, #7B8BA8 muted. Lime #A3FF12 for success.
>
> Typography: Geist (display), Inter (body), Geist Mono (numbers and code). Tight letter spacing on big text.
>
> Components: glass cards over animated mesh gradient, hairline borders, rounded-2xl, bento grid layouts where dense. Layered through translucency, never aggressive shadows.
>
> Voice and copy: friendly + educational. Zero em-dashes. Zero AI tells. Plain language. Real data on screen.
>
> Reject: template SaaS feel, centered hero with subtle gradient, three-feature blocks with icons, purple-on-white AI-startup look.
>
> Screen-specific requirements: [DESCRIBE THIS SCREEN'S JOB]

---

## 13. The Single Rule (Hang On Your Wall)

If a design choice could appear on any other generic AI-SaaS landing page in 2026, do not ship it.

That is the entire brand in one rule.
