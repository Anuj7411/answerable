# Multi-Page Claude Design Prompt - Foundation 5 Screens

**Purpose:** Design 5 foundational screens in one Claude Design session to lock the visual language across marketing AND product surfaces. Once these look right, every other screen follows.

**How to use:**
1. Open claude.ai/design → New prototype → High fidelity
2. Paste the prompt below in full
3. Generate
4. Iterate until all 5 screens pass the Anti-Generic Checklist (at the bottom)

---

## THE PROMPT (paste this in full into Claude Design)

```
You are designing the foundational 5 screens for Answerfox, an open-source AI-SEO toolkit launching in 2026 targeting indie developers. The user evaluating this design is visually sophisticated and will reject anything that looks like AI-generated template SaaS.

═══════════════════════════════════════════════════════════════════
PRODUCT IDENTITY
═══════════════════════════════════════════════════════════════════

Product name: Answerfox
Target domain: answerfox.dev
Tagline: The only open-source AI-SEO toolkit (SEO + AEO + GEO unified) that lives in your codebase and ships fixes as code.

GitHub repo: https://github.com/Anuj7411/answerable
npm scope: @answerable-kit
npm packages:
  - https://www.npmjs.com/package/@answerable-kit/audit (the audit engine)
  - https://www.npmjs.com/package/@answerable-kit/cli (the CLI tool)
  - https://www.npmjs.com/package/@answerable-kit/core (branded types)
  - https://www.npmjs.com/package/@answerable-kit/schemas (JSON-LD generators)
  - https://www.npmjs.com/package/@answerable-kit/metadata (Next.js metadata)
  - https://www.npmjs.com/package/@answerable-kit/sitemap (sitemap builder)
  - https://www.npmjs.com/package/@answerable-kit/templates (trust-page templates)

Install command shown in demos: pnpm dlx @answerable-kit/cli audit yoursite.com

What Answerfox does: audits any website across SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) using a 55-check framework, then generates the actual code fixes using AI. Three scores side by side. Open source MIT license. Lives in CLI, GitHub Action, and a hosted web app.

Pricing:
- Free OSS forever (CLI, GitHub Action, audit engine, public score badge)
- Pro $29 per month (90 AI fixes per month + scheduled audits + 30-day history + email digest + detailed evidence)
- Studio $99 per month coming Q3 2026 (auto-PR to GitHub + API access + team accounts + unlimited fixes)

═══════════════════════════════════════════════════════════════════
DESIGN REFERENCES (Claude Design: study these URLs for aesthetic cues)
═══════════════════════════════════════════════════════════════════

PRIMARY visual inspiration (PULL FROM THESE):
- https://www.shader-gradient.co/  (animated WebGL gradient meshes - use for hero background)
- https://skiper-ui.com/  (distinctive animated component library - card patterns, button patterns)
- https://21st.dev/  (premium shadcn variants marketplace - dashboard components)
- https://ui.aceternity.com/  (animated React components - hero patterns, motion)
- https://magicui.design/  (motion components, text animations)

BRAND VIBE REFERENCES (study these for tone and density):
- https://linear.app/  (minimalist sharp, monochrome with subtle gradients)
- https://vercel.com/  (brutalist elegant, heavy black/white contrast, geometric)
- https://stripe.com/  (dense data + spacious chrome, technical sophistication)
- https://resend.com/  (editorial, gentle whitespace, warm but refined)
- https://planetscale.com/  (developer dashboard density done well)

TYPOGRAPHY SOURCES:
- Geist sans + Geist Mono from Vercel: https://vercel.com/font/geist
- Inter variable font: https://rsms.me/inter/

REJECT THESE AESTHETIC PATTERNS (the competitors we are NOT):
- https://www.tryprofound.com/ (the $499 enterprise look we avoid)
- https://peec.ai/ (mid-market template SaaS we avoid)
- https://otterly.ai/ (budget tool look we avoid)
- Any default Tailwind UI template (looks instantly recognizable)
- Any default Material UI screen (wrong aesthetic)

═══════════════════════════════════════════════════════════════════
DESIGN SYSTEM (use these EXACT values across all 5 screens)
═══════════════════════════════════════════════════════════════════

COLOR PALETTE (dark mode default, no light mode in v1)
Background base:        #0A0E1A  (deep midnight)
Background elevated:    #10162A  (raised surface, cards)
Background glass:       rgba(20, 26, 48, 0.6) + 12px backdrop-blur
Text primary:           #F2F4F8  (warm white)
Text muted:             #7B8BA8  (cool gray)
Text dim:               #4A5A78  (disabled, metadata)
Border subtle:          rgba(255, 255, 255, 0.08)
Border strong:          rgba(255, 255, 255, 0.16)

ACCENT COLORS
Accent cyan:            #00F0FF  (electric cyan - links, focus, info)
Accent violet:          #A855F7  (premium tier, Pro features)
Accent magenta:         #FF006E  (warnings, alerts, fail states)
Accent lime:            #A3FF12  (success, passing checks)

THE SIGNATURE AURORA GRADIENT (use for hero background, primary CTAs, score bars, brand mark)
linear-gradient(135deg, #00F0FF 0%, #A855F7 50%, #FF006E 100%)

Best implementation: animated WebGL shader like shader-gradient.co. Slow drift over 8 to 12 seconds. Subtle, calm but alive.

TYPOGRAPHY (use these specific fonts)
Display font:           Geist (https://vercel.com/font/geist) - variable, free from Vercel
Body font:              Inter (https://rsms.me/inter/) - variable, free
Mono font:              Geist Mono - all numbers, scores, code, terminal output

TYPE SCALE
Hero headline:          72px / weight 600 / letter-spacing -0.04em
Section heading:        36px / weight 600 / letter-spacing -0.02em
Card heading:           20px / weight 600 / letter-spacing -0.01em
Body:                   16px / weight 400
Caption:                14px / weight 400 / letter-spacing 0.01em
Mono scores:            24px mono / weight 500 / letter-spacing -0.02em / tabular-nums

COMPONENT TOKENS
Corner radius:          16px on cards (rounded-2xl), 12px on buttons (rounded-xl), full on pills
Borders:                hairline 1px using rgba white at 0.08 alpha
Shadows:                AVOID heavy drop shadows. Use inner glow or backdrop blur instead.
Layout:                 bento grids (12-col irregular), not symmetric rows
Hover states:           subtle inner glow + 1px translate up

═══════════════════════════════════════════════════════════════════
2026 DESIGN TRENDS TO USE INTENTIONALLY
═══════════════════════════════════════════════════════════════════

✅ Glass morphism (semi-translucent cards over animated mesh gradient backgrounds)
✅ Aurora / iridescent gradients (the signature visual identity)
✅ Bento grid layouts (irregular tile compositions, not rigid columns)
✅ Variable font weights and tight letter-spacing on display text
✅ Animated mesh gradients in hero areas (shader-gradient style)
✅ Spatial depth through layering and translucency (not box-shadow)
✅ Sharp data: monospace numbers, tabular-nums, color-coded by state
✅ Hand-finished feel: custom focus rings, custom toggles, custom range sliders
✅ Restrained motion (everything animates, nothing jitters)
✅ AI-first interfaces with real data on screen, never lorem ipsum

═══════════════════════════════════════════════════════════════════
ANTI-GENERIC CHECKLIST (design FAILS if any of these appear)
═══════════════════════════════════════════════════════════════════

❌ Centered hero with subtle gradient and a "Get Started" button (every AI SaaS does this)
❌ Three-feature blocks with cute icons in rows (template SaaS tell)
❌ Purple gradient on white background (the universal AI startup look)
❌ "Built with Next.js" badges in the footer
❌ "Loved by developers at [generic company logos]" without real logos
❌ Stock isometric illustrations
❌ Default shadcn components without customization (instant template recognition)
❌ Generic Material Design or Bootstrap defaults
❌ Testimonial carousels
❌ Numbered step circles ("1, 2, 3 how it works")
❌ Big animated "5x your productivity" stats counters
❌ AI chat avatar with speech bubble in corner
❌ "Limited time offer" or fake scarcity badges
❌ Lottie animations from the LottieFiles browse page (recognizable)
❌ Stock photography from Unsplash for hero images
❌ Em-dashes (the dash character) ANYWHERE in copy (the number one AI text tell)
❌ Words like "delve", "navigate", "tapestry", "realm", "leverage", "harness", "unlock the potential", "in today's fast-paced world", "seamless"
❌ Exclamation marks in product UI (looks AI-eager)
❌ More than one emoji per page on marketing pages (zero in product UI)
❌ Spinning loaders (use skeleton shimmer instead)
❌ Bouncy spring animations on serious data (use ease-out)
❌ Auto-playing videos on landing page hero
❌ "AI-powered" repeated as adjective on every feature
❌ Generic "Get Started" or "Learn More" button labels (use specific verbs)

═══════════════════════════════════════════════════════════════════
COPY VOICE
═══════════════════════════════════════════════════════════════════

Tone: friendly + educational. Sharp, not warm. Confident, not cocky.

Good example copy:
"Answerfox audits any website across 55 checks and writes the fixes for you. Open source. Three scores: SEO, AEO, GEO. One tool."

Bad copy to never produce (AI tells):
"Unlock the power of AI-driven SEO with Answerfox, the cutting-edge platform that leverages intelligent algorithms to deliver comprehensive optimization across the modern web's evolving landscape."

Word swaps (always):
"leverage" → "use"
"utilize" → "use"
"facilitate" → "help"
"robust" → specific quality
"comprehensive" → specific list
"seamless" → "smooth" or delete
"cutting-edge" → delete (show do not tell)
"powerful" → specific capability
"intelligent" → specific behavior

═══════════════════════════════════════════════════════════════════
REQUIRED ELEMENTS ON EVERY RELEVANT SCREEN
═══════════════════════════════════════════════════════════════════

1. Three-score display element (when contextual): SEO + AEO + GEO scores must always appear together, side by side, with aurora gradient fills. Never just one score.
2. Real data (always when displaying examples): actual scores, actual findings, actual citations. Never lorem ipsum.
3. Aurora gradient (at least one prominent use per page).
4. Glass surface (at least one floating panel with backdrop blur per page).

═══════════════════════════════════════════════════════════════════
NOW DESIGN THESE 5 SCREENS (all in this session, share the design system)
═══════════════════════════════════════════════════════════════════

────────────────────────────────────────────────────────────────────
SCREEN 1: Landing page hero (above the fold + immediately below)
────────────────────────────────────────────────────────────────────

Fidelity: HIGH FIDELITY
Purpose: A solo developer arrives from a tweet linking to answerfox.dev. Within 8 seconds they must understand what Answerfox does, see proof it works, and want to click. This is the most important moment of the entire product.

Key elements:
- Top nav: Answerfox logo (left), nav links (Pricing, Docs, GitHub link to https://github.com/Anuj7411/answerable), "Sign in with GitHub" button (right)
- Animated aurora gradient mesh background (shader-gradient.co style, low opacity over #0A0E1A)
- Eyebrow text above headline: "Open-source AI-SEO toolkit"
- Hero headline (72px, tight tracking, weight 600): "The only AI-SEO toolkit that lives in your codebase and ships fixes as code."
- Sub-headline (20px, text-muted): "Audit any site for SEO, AEO, and GEO across 55 checks. Then let AI write the fixes."
- One primary CTA with aurora gradient fill: "Audit my site" (NOT "Get Started")
- Secondary CTA (ghost button): "View on GitHub" with GitHub icon
- Below CTAs: a tiny line "MIT licensed - 500+ stars on GitHub - 50K weekly npm downloads"
- A floating glass card to the right or below containing a real terminal mock:
  $ pnpm dlx @answerable-kit/cli audit vercel.com
  Audit running... done in 2.4s
  Score: 92/100 (Excellent)
  ┌─ SEO 92 ──── AEO 87 ──── GEO 74 ──── Aggregate 84 ─┐
- Asymmetric composition. NOT centered hero.

Real data shown on screen:
- Terminal command exactly: pnpm dlx @answerable-kit/cli audit vercel.com
- Scores in mock: SEO 92, AEO 87, GEO 74, Aggregate 84
- GitHub link: https://github.com/Anuj7411/answerable
- The headline copy verbatim

────────────────────────────────────────────────────────────────────
SCREEN 2: Pricing section (as it appears on the landing page)
────────────────────────────────────────────────────────────────────

Fidelity: HIGH FIDELITY
Purpose: A Pro-curious visitor lands here and decides whether $29 per month is worth it. The pricing must make the upgrade decision obvious in 5 seconds.

Key elements:
- Section heading (36px): "Free is for verification. Pro is for monitoring + fixing."
- Two cards side by side: Free and Pro
- Free card: minimal styling, deep midnight background, hairline border, no badge
- Pro card: aurora gradient border (1px), slightly elevated (translate-y -8px), "Most popular" pill at top
- Monthly/Annual toggle at top right of cards section (15% off annual badge)
- Each card: tier name (display weight 600), price in mono ($0 or $29), then a value-prop list
- Free card content:
  - "$0 forever"
  - "Audit engine (open source)"
  - "Three scores: SEO + AEO + GEO"
  - "CLI: pnpm dlx @answerable-kit/cli"
  - "GitHub Action"
  - "Public score badge for your README"
  - "Latest audit in web dashboard"
  - CTA button (ghost): "Install the CLI"
- Pro card content:
  - "$29 per month"
  - "Everything in Free, plus:"
  - "AI generates fixes as code (90 per month)"
  - "Auto-audits every 24 hours"
  - "30-day history + trend graphs"
  - "Up to 3 sites"
  - "Weekly email digest"
  - "Detailed evidence per finding"
  - CTA button (aurora gradient fill): "Start Pro"
- Below cards: smaller card with violet accent for Studio: "Studio - $99/mo - Auto-PR + Team + API - Coming Q3 2026" with email capture input

Real data:
- Use exact bullet points above
- Use exact pricing: $0, $29, $99 (Studio coming soon)
- No fake testimonials, no comparison table at bottom

────────────────────────────────────────────────────────────────────
SCREEN 3: Dashboard home (signed-in Pro user, the product's defining screen)
────────────────────────────────────────────────────────────────────

Fidelity: HIGH FIDELITY
Purpose: This is the screen the user opens daily to see how their sites are doing. Must communicate scores and changes at a glance, and pull them into action without overwhelm. This is the ProductHunt demo screen.

Key elements:
- Top nav (glass, sticky): Answerfox logo + site switcher dropdown (current: "answerfox.dev") + AI fix counter ("Daily AI fixes: 2 of 3") + user avatar
- Left side nav (collapsible, glass): icons + labels for Audits, Findings, AI Fixes, Settings. Active state uses aurora gradient as left border (3px width).
- Main content area: bento grid (12-col, irregular tiles)
- TOP ROW: three large score cards side by side + one smaller aggregate card
  - SEO 92 (lime accent dot for improving)
  - AEO 87 (lime accent dot for improving)
  - GEO 74 (magenta accent dot for declining)
  - Aggregate 84 (band: "Strong")
  - Each score card has the number in giant monospace, a thin aurora-gradient bar showing 0-100 fill, the engine name in caption text
- LEFT TILE (2x normal width): "Score Trend (7 days)" with three lines plotted (SEO cyan, AEO violet, GEO magenta) over a glass surface
- RIGHT TILE (1x): "Recent Findings" - a list of 3 findings:
  - "A4 Canonical missing on /pricing" (severity: high, magenta)
  - "G1 llms.txt absent" (severity: medium, cyan)
  - "C3 WebSite schema incomplete" (severity: low, dim)
- MIDDLE TILE (1x): "AI Fixes" - shows "23 generated this month / 90 included" with aurora-gradient progress ring
- LAST TILE (2x width): "Next scheduled audit" - timestamp + "Re-audit my site" button (aurora gradient)
- Subtle animated mesh gradient background, far less prominent than landing hero
- Each tile is a glass card with hairline border

Real data:
- Site: answerfox.dev
- Scores: SEO 92, AEO 87, GEO 74, Aggregate 84
- Findings exactly as listed above with severity colors
- AI fixes counter: "2 of 3 used today (resets at midnight UTC)"
- Trend: 7 days, three lines diverging realistically (SEO stable around 90-92, AEO climbing 80-87, GEO dropping 80-74)

────────────────────────────────────────────────────────────────────
SCREEN 4: Fix Studio panel (the magic moment screen)
────────────────────────────────────────────────────────────────────

Fidelity: HIGH FIDELITY
Purpose: The screen that justifies the $29 per month. User clicks "Generate fix with AI" on a failing check, and AI generates real code in front of them. Must feel like magic but credible.

Key elements:
- Right side panel slides in over dashboard (40% viewport width)
- Background behind panel: dashboard slightly dimmed and blurred
- Panel header: "Generate fix for A4 Canonical" + severity badge (high, magenta) + close X
- Sub-header: "Missing canonical link on /pricing page" (the finding description)
- Streaming text area: shows AI thinking + writing the fix, with a subtle cursor blink and lime accent on newly appearing characters that fade to text-primary over 200ms
- Code block (Geist Mono, with syntax highlighting) showing the generated fix:
  <link rel="canonical" href="https://answerfox.dev/pricing" />
- Below code block: explanation text from AI (1-2 sentences, no AI tells, friendly tone): "This tells search engines and AI crawlers that /pricing is the authoritative version of this page, preventing duplicate content issues."
- Three action buttons at bottom:
  - "Copy code" (ghost button)
  - "Download as .patch" (ghost button)
  - "Apply to GitHub PR" (locked, with violet "Studio" pill)
- Bottom right transparency line: "Generated in 2.1s. Daily AI fixes: 1 of 3 remaining."
- The panel itself is a glass surface (semi-transparent, backdrop blur 16px)

Real data:
- Check ID: A4 Canonical
- Site: answerfox.dev
- Generated meta tag exactly: <link rel="canonical" href="https://answerfox.dev/pricing" />
- The explanation copy verbatim

────────────────────────────────────────────────────────────────────
SCREEN 5: Sign-in page
────────────────────────────────────────────────────────────────────

Fidelity: HIGH FIDELITY
Purpose: New user arrived from CLI footer link or marketing page. Must convert sign-up in under 5 seconds with zero friction.

Key elements:
- Asymmetric layout: left side has animated aurora mesh gradient (full height), right side is a centered glass card on the deep midnight background
- Glass card content (the actual sign-in):
  - Small Answerfox wordmark at top
  - Heading (36px): "Welcome to Answerfox"
  - Sub-text (text-muted): "Audit your site for SEO, AEO, and GEO. Generate AI fixes as code."
  - Primary button: "Continue with GitHub" (aurora gradient outline + GitHub icon)
  - Secondary button: "Continue with Google" (ghost + Google icon)
  - Small divider: "Free to sign up. No credit card."
  - Footer link: "Already have an account? Sign in" (linked text in cyan)
- On the left aurora gradient side: a quote or proof element. Suggest: "MIT licensed. Used by 1,200+ indie founders." in display text overlaid on the gradient.
- Glass card has aurora gradient border (subtle, 1px)
- Background: deep midnight on right, animated gradient mesh on left half

Real data:
- Use the exact heading and sub-text copy above
- GitHub link target: https://github.com/Anuj7411/answerable (the OAuth would go to the actual repo's OAuth)
- "MIT licensed" reference real (the repo is MIT)

═══════════════════════════════════════════════════════════════════
THE SINGLE RULE
═══════════════════════════════════════════════════════════════════

If a design choice could appear on any other generic AI-SaaS landing page in 2026, do not ship it. We are competing with Profound ($155M funded), Peec AI ($29M funded), and Otterly. They will all converge on the same purple-gradient template SaaS look. We win by refusing to.

Now design all 5 screens with consistent design tokens, real data, and aurora gradient as the unifying visual element.
```

---

## What this prompt does differently from a single-screen prompt

| Multi-page advantage | How it helps |
|---|---|
| One design system instance | Tokens get applied uniformly across all 5 screens, no drift |
| One aurora gradient style | The signature element looks the same on hero, dashboard, and panel |
| Reusable components surface | Score cards, glass surfaces, buttons get defined once, used 5 times |
| Tone consistency | Copy voice carries across marketing + product surfaces |
| Faster iteration | One bad output to fix, not five separate sessions |

## Why these 5 screens (not the others)

| Screen | What it teaches us |
|---|---|
| Landing hero | Marketing aesthetic, animated gradient, hero typography, primary CTA style |
| Pricing section | Conversion moment, card composition, tier visual hierarchy |
| Dashboard home | Product aesthetic, bento grid, three-score visual (our differentiator), data density |
| Fix Studio panel | The magic moment screen, glass overlay, streaming text effect, code block treatment |
| Sign-in | Onboarding entry, asymmetric layout, gradient as backdrop, simple conversion |

Together these establish:
- Marketing surface (landing + pricing + sign-in)
- Product surface (dashboard + fix studio)
- Static and animated treatments
- Dense and spacious layouts
- The aurora gradient in 4 different contexts

Once these are locked, every other screen (audit details, settings, billing, error states, empty states, email templates) is a derivative.

## What to do after generation

1. Run the Anti-Generic Checklist from the prompt against all 5 outputs
2. If 3 or more screens fail, repaste the rules section and ask Claude Design to fix specific issues by screen number
3. Iterate per-screen if some are good and others are bad. Tell Claude Design exactly which screen needs adjustment.
4. When all 5 pass, you have your design system locked
5. Then design the remaining 5 screens (audit details, settings, error states, email templates, leaderboard) using the same prompt template, swapping out the screen-specific sections

## Real URLs embedded for Claude Design context

**Product (5 URLs):**
- answerfox.dev (target domain)
- https://github.com/Anuj7411/answerable
- 7 npm package URLs under @answerable-kit (audit, cli, core, schemas, metadata, sitemap, templates)

**Visual inspiration to pull from (5 URLs):**
- https://www.shader-gradient.co/
- https://skiper-ui.com/
- https://21st.dev/
- https://ui.aceternity.com/
- https://magicui.design/

**Brand vibe references (5 URLs):**
- https://linear.app/
- https://vercel.com/
- https://stripe.com/
- https://resend.com/
- https://planetscale.com/

**Typography (2 URLs):**
- https://vercel.com/font/geist
- https://rsms.me/inter/

**Competitor look to reject (3 URLs):**
- https://www.tryprofound.com/
- https://peec.ai/
- https://otterly.ai/

Total: 25 URLs anchored. Claude Design has rich context to triangulate from.

## The single rule

If a design choice could appear on any other generic AI-SaaS landing page in 2026, do not ship it.
