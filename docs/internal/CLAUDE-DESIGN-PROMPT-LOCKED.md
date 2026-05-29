# Claude Design Master Prompt — LOCKED (Slate Family System)

**Status:** Current. Use this for every Claude Design session.
**Supersedes:** `CLAUDE-DESIGN-PROMPT-MULTIPAGE.md` (Aurora era, now historical).
**Source of truth for visuals:** `BRAND-SYSTEM-LOCKED.md`.

**Purpose:** Generate the 5 foundation screens (Landing, Pricing, Dashboard, Fix Studio, Sign-in) using the locked Slate Family palette. Once these pass the Anti-Generic Checklist, the design system is fully proven and ready for engineering.

---

## How to use

1. Open https://claude.ai/design in a new tab
2. Click "New prototype" then "High fidelity"
3. Copy the entire block under "THE PROMPT" below
4. Paste into Claude Design
5. Generate
6. Iterate using the Anti-Generic Checklist at the bottom

---

## THE PROMPT (paste this in full into Claude Design)

```
Design 5 foundational screens for Answerfox, an open-source AI-SEO toolkit launching in 2026. Show all 5 screens side by side in this session, sharing the same design system. The user evaluating these designs is visually sophisticated and will reject any output that looks like AI-generated template SaaS.

═══════════════════════════════════════════════════════════════════
PRODUCT IDENTITY
═══════════════════════════════════════════════════════════════════

Product name: Answerfox
Target domain: answerfox.dev
Tagline: The only open-source AI-SEO toolkit (SEO + AEO + GEO unified) that lives in your codebase and ships fixes as code.

GitHub repo: https://github.com/Anuj7411/answerable
npm scope: @answerable-kit
npm packages:
  - https://www.npmjs.com/package/@answerable-kit/audit
  - https://www.npmjs.com/package/@answerable-kit/cli
  - https://www.npmjs.com/package/@answerable-kit/core
  - https://www.npmjs.com/package/@answerable-kit/schemas
  - https://www.npmjs.com/package/@answerable-kit/metadata
  - https://www.npmjs.com/package/@answerable-kit/sitemap
  - https://www.npmjs.com/package/@answerable-kit/templates

Install command shown in demos: pnpm dlx @answerable-kit/cli audit yoursite.com

What Answerfox does: audits any website across SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) using a 55-check framework, then generates the actual code fixes using AI. Three scores side by side. Open source MIT license. Lives in CLI, GitHub Action, and a hosted web app.

Pricing:
- Free OSS forever (CLI, GitHub Action, audit engine, public score badge)
- Pro $29 per month (90 AI fixes per month, scheduled audits, 30-day history, email digest, detailed evidence)
- Studio $99 per month coming Q3 2026

═══════════════════════════════════════════════════════════════════
LOCKED BRAND SYSTEM (use EXACTLY these values, no deviation)
═══════════════════════════════════════════════════════════════════

This is the Slate Family system. Each page has its own ember color cousin on a shared slate base. The slate base never changes. Only the ember accent shifts per page.

SHARED BACKGROUND (every screen)
bg base:        #C9C5BE  (soft slate gray, the canvas)
bg elevated:    #D4D1CB  (cards, raised surfaces)
bg recessed:    #B8B4AD  (inset elements, depressions)
bg glass:       rgba(201, 197, 190, 0.6) with 12px backdrop blur

SHARED BORDERS
border subtle:  rgba(26, 24, 20, 0.08)  (card edges, hairlines)
border strong:  rgba(26, 24, 20, 0.16)  (active inputs, focus)

SHARED TEXT COLORS (dark ink on light slate)
text primary:   #1A1814  (body text, headings, high contrast)
text muted:     #4A453E  (captions, secondary)
text dim:       #7A736A  (disabled, metadata)
text inverse:   #F2EFE9  (text ON ember-filled buttons only)

EMBER COLORS (one per page, see screen specs below)
Slate Ember:      #E87B2C  (orange, the brand signature, landing + dashboard)
Slate Marigold:   #E8AA2A  (golden orange, pricing)
Slate Saffron:    #E5B225  (yellow, audit details)
Slate Amber:      #FFA500  (bright amber, Fix Studio)
Slate Terracotta: #C6553C  (red orange, sign in)
Slate Ochre:      #B85C1F  (burnt orange, docs)

FUNCTIONAL ACCENTS (use sparingly, only for states)
accent violet:   #A855F7  (Pro tier badge, premium)
accent lime:     #A3FF12  (success state, passing checks)
accent magenta:  #FF006E  (warnings, failing checks)

TYPOGRAPHY
Display font:  Geist (https://vercel.com/font/geist) variable, free
Body font:     Inter (https://rsms.me/inter/) variable, free
Mono font:     Geist Mono (numbers, scores, code, terminal)

TYPE SCALE
Hero headline:    72px / weight 600 / letter-spacing -0.04em
Section heading:  36px / weight 600 / letter-spacing -0.02em
Card heading:     20px / weight 600 / letter-spacing -0.01em
Body:             16px / weight 400
Caption:          14px / weight 400 / letter-spacing 0.01em
Mono scores:      24px mono / weight 500 / letter-spacing -0.02em / tabular-nums

COMPONENT TOKENS
Corner radius:    16px cards, 12px buttons, full pills
Borders:          1px hairline (rgba 26, 24, 20, 0.08)
Shadows:          AVOID. Use translucency and grain instead.
Hover states:     subtle inner ember glow + 1px translate up
Layout:           bento grids (12-col irregular), not symmetric rows

THE EMBER BLOOM (the signature visual element)
A single warm ember of the page's ember color, blooming softly with heavy grain texture, anchored asymmetrically (typically upper-right). Animation: 12-second breath loop (slowly expands and contracts). Heavy film grain across the entire canvas, not just the bloom. Painterly edges where bloom meets slate, never a smooth CSS gradient.

INTENSITY (varies per surface, see screen specs)
- 80% intensity: landing hero (impact moment)
- 60% intensity: other marketing pages (pricing, docs, sign-in)
- 35 to 40% intensity: product main surfaces (dashboard, fix studio)
- 25% intensity: admin surfaces (settings)

═══════════════════════════════════════════════════════════════════
REFERENCE WEBSITES (study these URLs for aesthetic anchoring)
═══════════════════════════════════════════════════════════════════

PRIMARY visual inspiration (the aesthetic we want):
- https://www.aesop.com/  (warm sophisticated light slate aesthetic, editorial)
- https://www.muji.com/  (refined minimal palette, calm)
- https://resend.com/  (warm editorial restraint with restrained color)
- https://www.notion.so/  (light-friendly product surfaces)

BRAND VIBE REFERENCES (study tone and density):
- https://linear.app/  (refined minimalism, sophisticated)
- https://stripe.com/  (sophisticated technical depth)
- https://vercel.com/  (typography excellence)
- https://www.fey.com/  (sophisticated data presentation)
- https://www.planetscale.com/  (developer dashboard density done well)

TYPOGRAPHY SOURCES:
- https://vercel.com/font/geist
- https://rsms.me/inter/

REJECT THESE LOOKS (auto-fail criteria):
- https://www.tryprofound.com/  (the $499 enterprise template look we avoid)
- https://peec.ai/  (mid-market template SaaS we avoid)
- https://otterly.ai/  (budget tool look we avoid)
- Any default Tailwind UI template (recognizable, generic)
- Any default Material UI screen (wrong aesthetic)

═══════════════════════════════════════════════════════════════════
HARD RULES (every screen must satisfy all of these)
═══════════════════════════════════════════════════════════════════

✅ Background is slate #C9C5BE (NOT pure black, NOT pure white, NOT midnight)
✅ Heavy film grain texture across entire canvas (looks like film, not CSS)
✅ Ember bloom asymmetric (NOT centered)
✅ Maximum 2 colors per page (slate base + that page's ember)
✅ 12-second breath animation on the ember bloom
✅ Dark ink text (#1A1814) for high readability
✅ Lighter slate cards (#D4D1CB) with hairline borders
✅ Glass surfaces use semi-transparent slate with backdrop blur

❌ REJECT (auto-fail criteria):
❌ Aurora rainbow gradients (deprecated, do not use)
❌ Smooth CSS linear-gradient with 3+ colors
❌ Dark or midnight backgrounds (we are light slate now)
❌ Pure white backgrounds (we want warm slate)
❌ Centered hero compositions
❌ Three-feature blocks with icons
❌ Default shadcn components without customization

═══════════════════════════════════════════════════════════════════
ANTI-GENERIC CHECKLIST (design FAILS if any of these appear)
═══════════════════════════════════════════════════════════════════

❌ Centered hero with subtle gradient and a "Get Started" button
❌ Three-feature blocks with cute icons in rows
❌ Purple gradient on white background (the universal AI startup look)
❌ "Built with Next.js" badges in the footer
❌ "Loved by developers at [generic company logos]" without real logos
❌ Stock isometric illustrations
❌ Default shadcn components without customization
❌ Generic Material Design or Bootstrap defaults
❌ Testimonial carousels
❌ Numbered step circles ("1, 2, 3 how it works")
❌ Big animated "5x your productivity" stats counters
❌ AI chat avatar with speech bubble in corner
❌ "Limited time offer" or fake scarcity badges
❌ Stock photography from Unsplash for hero images
❌ Em-dashes (the dash character) ANYWHERE in copy (the number one AI text tell)
❌ Words like "delve", "navigate", "tapestry", "realm", "leverage", "harness", "unlock the potential", "in today's fast-paced world", "seamless"
❌ Exclamation marks in product UI
❌ More than one emoji per page on marketing pages, zero in product UI
❌ Spinning loaders (use skeleton shimmer instead)
❌ Bouncy spring animations on serious data
❌ Auto-playing videos on landing page hero
❌ "AI-powered" repeated as adjective on every feature
❌ Generic "Get Started" or "Learn More" button labels (use specific verbs)

═══════════════════════════════════════════════════════════════════
COPY VOICE
═══════════════════════════════════════════════════════════════════

Tone: friendly + educational. Sharp, not warm. Confident, not cocky.

Good example:
"Answerfox audits any website across 55 checks and writes the fixes for you. Open source. Three scores: SEO, AEO, GEO. One tool."

Bad copy to NEVER produce (AI tells):
"Unlock the power of AI-driven SEO with Answerfox, the cutting-edge platform that leverages intelligent algorithms to deliver comprehensive optimization across the modern web's evolving landscape."

Word swaps (always):
"leverage" → "use"
"utilize" → "use"
"facilitate" → "help"
"robust" → specific quality
"comprehensive" → specific list
"seamless" → "smooth" or delete
"cutting-edge" → delete
"powerful" → specific capability
"intelligent" → specific behavior

═══════════════════════════════════════════════════════════════════
NOW DESIGN THESE 5 SCREENS (all in this session, shared design system)
═══════════════════════════════════════════════════════════════════

────────────────────────────────────────────────────────────────────
SCREEN 1: LANDING PAGE HERO (Slate Ember at 80% intensity)
────────────────────────────────────────────────────────────────────

Fidelity: HIGH FIDELITY
Purpose: A solo developer arrives from a tweet linking to answerfox.dev. Within 8 seconds they must understand what Answerfox does, see proof it works, and want to click. The most important moment of the entire product.

Page ember: Slate Ember #E87B2C
Bloom intensity: 80% (strongest of all screens)
Bloom position: upper-right corner

Key elements:
- Top nav: Answerfox logo (left, lockup with ember dot accent), nav links (Pricing, Docs, GitHub link to https://github.com/Anuj7411/answerable), "Sign in with GitHub" button (right, ghost style with dark ink)
- Animated ember bloom in upper-right area with heavy grain across full canvas
- Eyebrow text above headline: "Open-source AI-SEO toolkit" (caption size, text-muted)
- Hero headline (72px, tight tracking, weight 600, dark ink #1A1814): "The only AI-SEO toolkit that lives in your codebase and ships fixes as code."
- Sub-headline (20px, text-muted #4A453E): "Audit any site for SEO, AEO, and GEO across 55 checks. Then let AI write the fixes."
- Primary CTA: solid button filled with Slate Ember #E87B2C, white-inverse text #F2EFE9, label "Audit my site" (NOT "Get Started")
- Secondary CTA: ghost button with dark ink, hairline ember border, label "View on GitHub" with GitHub icon
- Below CTAs, tiny line in mono caption: "MIT licensed · 500+ stars on GitHub · 50K weekly npm downloads"
- A floating glass card (lighter slate #D4D1CB with hairline border) to the right or below the headline showing a real terminal mock:
    $ pnpm dlx @answerable-kit/cli audit vercel.com
    Audit running... done in 2.4s
    Score: 92/100 (Excellent)
    SEO 92  ·  AEO 87  ·  GEO 74  ·  Aggregate 84
- The composition is asymmetric. NOT centered.

Real data to use:
- Terminal command exactly: pnpm dlx @answerable-kit/cli audit vercel.com
- Scores: SEO 92, AEO 87, GEO 74, Aggregate 84
- GitHub link: https://github.com/Anuj7411/answerable
- The headline copy verbatim

────────────────────────────────────────────────────────────────────
SCREEN 2: PRICING SECTION (Slate Marigold at 60% intensity)
────────────────────────────────────────────────────────────────────

Fidelity: HIGH FIDELITY
Purpose: A Pro-curious visitor lands here and decides whether $29 per month is worth it. The pricing must make the upgrade decision obvious in 5 seconds.

Page ember: Slate Marigold #E8AA2A
Bloom intensity: 60%
Bloom position: behind the Pro card (subtle halo effect)

Key elements:
- Section heading (36px dark ink): "Free is for verification. Pro is for monitoring and fixing."
- Two cards side by side: Free and Pro
- Free card: minimal styling, slate base #C9C5BE, hairline border, no badge
- Pro card: lighter slate elevated background #D4D1CB, Slate Marigold 1px border, slightly elevated (translate-y -8px), "Most popular" pill at top in marigold
- Monthly/Annual toggle at top right (15% off annual badge in marigold)
- Each card: tier name in display weight 600, price in mono ($0 or $29), then a value-prop list
- Free card content:
  - "$0 forever"
  - "Audit engine (open source)"
  - "Three scores: SEO + AEO + GEO"
  - "CLI: pnpm dlx @answerable-kit/cli"
  - "GitHub Action"
  - "Public score badge for your README"
  - "Latest audit in web dashboard"
  - CTA button (ghost, hairline dark ink border): "Install the CLI"
- Pro card content:
  - "$29 per month"
  - "Everything in Free, plus:"
  - "AI generates fixes as code (90 per month)"
  - "Auto-audits every 24 hours"
  - "30-day history + trend graphs"
  - "Up to 3 sites"
  - "Weekly email digest"
  - "Detailed evidence per finding"
  - CTA button (solid Slate Marigold #E8AA2A fill, inverse white text): "Start Pro"
- Below cards: smaller card with violet accent for Studio: "Studio · $99/mo · Auto-PR + Team + API · Coming Q3 2026" with email capture input
- Subtle marigold bloom in background behind Pro card area

Real data:
- Use exact bullet points above
- Use exact pricing: $0, $29, $99 (Studio coming soon)

────────────────────────────────────────────────────────────────────
SCREEN 3: DASHBOARD HOME (Slate Ember at 35% intensity)
────────────────────────────────────────────────────────────────────

Fidelity: HIGH FIDELITY
Purpose: The screen the user opens daily. Must communicate scores and changes at a glance, and pull them into action without overwhelm. This is the ProductHunt demo screen.

Page ember: Slate Ember #E87B2C
Bloom intensity: 35% (much more subtle than landing hero, ambient brand presence)
Bloom position: subtle haze in upper-right of main content area

Key elements:
- Top nav (lighter slate glass surface, sticky): Answerfox logo + site switcher dropdown (current: "answerfox.dev") + AI fix counter ("Daily AI fixes: 2 of 3") + user avatar
- Left side nav (collapsible, lighter slate glass): icons + labels for Audits, Findings, AI Fixes, Settings. Active state uses Slate Ember as left border (3px width).
- Main content area: bento grid (12-col, irregular tiles)
- TOP ROW: three large score cards side by side + one smaller aggregate card
  - SEO 92 (lime accent dot for improving)
  - AEO 87 (lime accent dot for improving)
  - GEO 74 (magenta accent dot for declining)
  - Aggregate 84 (band: "Strong")
  - Each score card has the number in giant monospace dark ink, a thin Slate Ember progress bar showing 0-100 fill, the engine name in caption text
- LEFT TILE (2x normal width): "Score Trend (7 days)" with three lines plotted (SEO dark ink, AEO with violet accent, GEO with magenta accent) over a lighter slate card surface
- RIGHT TILE (1x): "Recent Findings" - a list of 3 findings:
  - "A4 Canonical missing on /pricing" (severity: high, magenta dot)
  - "G1 llms.txt absent" (severity: medium, ochre dot)
  - "C3 WebSite schema incomplete" (severity: low, dim text)
- MIDDLE TILE (1x): "AI Fixes" - shows "23 generated this month / 90 included" with Slate Ember progress ring
- LAST TILE (2x width): "Next scheduled audit" - timestamp + "Re-audit my site" button (solid Slate Ember fill, inverse text)
- Subtle ember bloom at 35% intensity in the background behind score cards area
- Each tile is a lighter slate card #D4D1CB with hairline border

Real data:
- Site: answerfox.dev
- Scores: SEO 92, AEO 87, GEO 74, Aggregate 84
- Findings exactly as listed above
- AI fixes counter: "2 of 3 used today (resets at midnight UTC)"

────────────────────────────────────────────────────────────────────
SCREEN 4: FIX STUDIO PANEL (Slate Amber at 40% intensity)
────────────────────────────────────────────────────────────────────

Fidelity: HIGH FIDELITY
Purpose: The screen that justifies the $29 per month. User clicks "Generate fix with AI" on a failing check, and AI generates real code in front of them. Must feel like magic but credible.

Page ember: Slate Amber #FFA500 (the brightest of the family, for the magical moment)
Bloom intensity: 40%
Bloom position: subtle halo behind the streaming text area

Key elements:
- Right side panel slides in over dashboard (40% viewport width)
- Background behind panel: dashboard slightly dimmed and blurred
- Panel surface: glass (semi-transparent lighter slate with backdrop blur 16px)
- Panel header: "Generate fix for A4 Canonical" + severity badge (high, magenta) + close X
- Sub-header: "Missing canonical link on /pricing page" (the finding description in text-muted)
- Streaming text area: shows AI thinking and writing the fix, with a subtle cursor blink in Slate Amber and lime accent on newly appearing characters that fade to dark ink over 200ms
- Code block (Geist Mono, with syntax highlighting on lighter slate surface) showing the generated fix:
    <link rel="canonical" href="https://answerfox.dev/pricing" />
- Below code block: explanation text from AI (1-2 sentences, dark ink, friendly tone): "This tells search engines and AI crawlers that /pricing is the authoritative version of this page, preventing duplicate content issues."
- Three action buttons at bottom:
  - "Copy code" (ghost button, hairline border)
  - "Download as .patch" (ghost button, hairline border)
  - "Apply to GitHub PR" (locked, with violet "Studio" pill)
- Bottom right transparency line in caption: "Generated in 2.1s. Daily AI fixes: 1 of 3 remaining."
- A subtle Slate Amber bloom (40% intensity) behind the streaming text area for the magical feel

Real data:
- Check ID: A4 Canonical
- Site: answerfox.dev
- Generated meta tag exactly: <link rel="canonical" href="https://answerfox.dev/pricing" />
- The explanation copy verbatim

────────────────────────────────────────────────────────────────────
SCREEN 5: SIGN-IN PAGE (Slate Terracotta at 60% intensity)
────────────────────────────────────────────────────────────────────

Fidelity: HIGH FIDELITY
Purpose: New user arrived from CLI footer link or marketing page. Must convert sign-up in under 5 seconds with zero friction.

Page ember: Slate Terracotta #C6553C (warm welcome color)
Bloom intensity: 60%
Bloom position: full left half of viewport, dominant

Key elements:
- Asymmetric layout: left side has terracotta ember bloom dominating (60% intensity, full height of viewport), right side is a centered glass card on slate
- Glass card content (the actual sign-in, lighter slate #D4D1CB):
  - Small Answerfox wordmark at top (dark ink)
  - Heading (36px dark ink): "Welcome to Answerfox"
  - Sub-text (text-muted): "Audit your site for SEO, AEO, and GEO. Generate AI fixes as code."
  - Primary button: "Continue with GitHub" (solid Slate Terracotta fill, inverse text, GitHub icon)
  - Secondary button: "Continue with Google" (ghost, hairline border, Google icon)
  - Small divider: "Free to sign up. No credit card."
  - Footer link: "Already have an account? Sign in" (linked text in violet)
- On the left terracotta bloom side: overlay text in dark ink: "MIT licensed. Used by 1,200+ indie founders."
- Glass card has 1px Slate Terracotta border
- Right side: slate base. Left side: terracotta bloom over slate with heavy grain.

Real data:
- Use the exact heading and sub-text copy above
- GitHub link target: https://github.com/Anuj7411/answerable
- "MIT licensed" reference is real (repo is MIT)

═══════════════════════════════════════════════════════════════════
THE SINGLE RULE
═══════════════════════════════════════════════════════════════════

If a design choice could appear on any other generic AI-SaaS landing page in 2026, do not ship it.

The Slate Family is uncommon enough in this category that it instantly differentiates Answerfox from Profound, Peec AI, Otterly, and every Tailwind-template AI SaaS. Warm orange embers on calm slate backgrounds are the visual signature that other tools cannot copy without disappointing their investors. We hold this line.

Now generate all 5 screens with consistent slate base, page-specific ember accents, heavy grain texture, and asymmetric compositions.
```

---

## Quality control: Anti-Generic Checklist

Run through this for EACH of the 5 screens after generation. If 3 or more screens fail any of these, repaste the rules section and regenerate.

| Check | Pass criteria |
|---|---|
| Background is slate `#C9C5BE`? | ✅ |
| Heavy film grain across full canvas? | ✅ |
| Page-specific ember color used correctly? | ✅ |
| Ember bloom asymmetric (not centered)? | ✅ |
| Dark ink text for readability? | ✅ |
| Glass cards use lighter slate `#D4D1CB`? | ✅ |
| Hairline borders, not heavy shadows? | ✅ |
| Real data on screen (not lorem ipsum)? | ✅ |
| No em-dashes anywhere in copy? | ✅ |
| No centered hero compositions? | ✅ |
| No three-feature icon blocks? | ✅ |
| No default-feeling shadcn? | ✅ |

If a design feels too dark/aurora-y/cyan-purple: it has drifted to the old palette. Force regeneration with explicit "use Slate Family colors, slate #C9C5BE background, dark ink text" instruction.

---

## What to do after generation

1. Screenshot all 5 screens
2. Run the Anti-Generic Checklist on each
3. Send screenshots to Claude Code for critical feedback against `BRAND-SYSTEM-LOCKED.md`
4. Iterate if needed
5. Once all 5 pass, the system is proven and we move to TRD

---

## The single sentence (memorize)

> Answerfox is the only open-source AI-SEO toolkit (SEO + AEO + GEO unified) that lives in your codebase and ships fixes as code.

Every screen in this generation must reinforce this positioning.
