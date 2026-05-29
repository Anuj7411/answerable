# Gradient Exploration Prompt - Set B (Color Variety + Lighter Backgrounds)

**Purpose:** Generate 8 NEW gradient variations that expand the color palette beyond cyan/blue and use lighter backgrounds suitable for text-heavy contexts.

**Context:** Set A (Void Bloom, Cold Static, etc.) was strong but mostly black + cyan. Answerfox will have substantial text content (audit findings, fix explanations, documentation). Pure black backgrounds cause eye strain over long reading. Set B keeps the same anti-template visual ambition but adds color variety and softer dark backgrounds (charcoal, slate, stone, cream).

**Keep Set A as separate option pool. Set B is parallel, not replacement.**

---

## THE PROMPT (paste this into a new Claude Design prototype)

```
Design 8 NEW gradient hero backgrounds for Answerfox, an open-source AI-SEO toolkit. Each is full-bleed 1920x1080. Show all 8 side by side as a comparison grid.

═══════════════════════════════════════════════════════════════════
CONTEXT
═══════════════════════════════════════════════════════════════════

Previous gradient exploration (Set A) used midnight black + cyan as the dominant palette. This Set B expands the color palette to include warmer and softer tones, and uses LIGHTER backgrounds (charcoal, slate, stone, cream) that work better for a text-heavy product. The goal is the same: reject template SaaS aesthetics, achieve awwwards-level distinction.

═══════════════════════════════════════════════════════════════════
REFERENCE WEBSITES (study these URLs)
═══════════════════════════════════════════════════════════════════

PRIMARY visual inspiration:
- https://www.shader-gradient.co/  (the texture and asymmetry baseline)
- https://www.aesop.com/  (warm sophistication, cream + dark)
- https://www.muji.com/  (refined minimal palette)
- https://workspace.craftcms.com/  (lighter dark backgrounds done well for text)
- https://linear.app/  (medium-dark backgrounds for product surfaces)

BRAND TONE REFERENCES:
- https://stripe.com/  (sophisticated technical with subtle color)
- https://resend.com/  (editorial warm with restrained color)
- https://www.notion.so/  (cream-friendly product surfaces)
- https://www.fey.com/  (mid-dark sophisticated with color accents)

REJECT THESE (auto-fail criteria):
- Smooth CSS linear-gradient with 3+ rainbow colors blended
- Centered radial gradient with even falloff
- Pure black or pure white backgrounds (we want SOFTER mid-tones)
- Anything resembling the default Tailwind UI gradient
- Glow effects that look like CSS box-shadow on a colored circle

═══════════════════════════════════════════════════════════════════
HARD RULES (every gradient must satisfy)
═══════════════════════════════════════════════════════════════════

✅ Must include heavy noise/grain texture (looks like film, not CSS)
✅ Must be asymmetric (color distribution NOT centered)
✅ Maximum 3 colors per gradient (often 2 colors plus base)
✅ Must include subtle animation (8 to 30 second loops)
✅ Background should be a SOFTER mid-tone (NOT pure black or pure white)
✅ White or charcoal text overlay must remain readable

═══════════════════════════════════════════════════════════════════
GENERATE THESE 8 GRADIENT VARIATIONS (label clearly)
═══════════════════════════════════════════════════════════════════

────────────────────────────────────────────────────────────────────
VARIATION 1: SAGE MIST (NEW pattern, calming sophistication)
────────────────────────────────────────────────────────────────────

Description: Soft sage green mist drifting across a slate background. Calming, considered, sophisticated. Like fog rolling through a forest at dusk.
Colors: slate background #1F2937 + sage green #7FB069 mist + subtle warm white highlights #F2EFE9
Animation: mist drifts very slowly horizontally, 8 to 12 second loop
Texture: heavy noise across entire canvas, with the mist having softer painterly edges
Asymmetric: mist concentrated in lower-left, fading to upper-right
Inspiration websites:
  - https://www.aesop.com/  (warm sophistication)
  - https://www.muji.com/  (calm refined palette)
  - https://www.shader-gradient.co/  (Viola preset for the soft drift feel)

────────────────────────────────────────────────────────────────────
VARIATION 2: AMBER BLOOM (Void Bloom pattern, warm color)
────────────────────────────────────────────────────────────────────

Description: Same composition as Set A Void Bloom but with deep amber instead of cyan. 75% charcoal background with one warm amber bloom.
Colors: charcoal #252C38 (75% coverage) + deep amber #FFA500 (single bloom, 25% coverage)
Animation: bloom slowly expands and contracts every 12 seconds, like breath
Texture: heavy film grain across full canvas
Asymmetric: bloom in upper-right (mirror of Set A's lower-right)
Inspiration websites:
  - https://www.shader-gradient.co/  (Interstella preset for amber warmth)
  - https://www.anthropic.com/  (warm color bloom on dark)
  - https://resend.com/  (sophisticated warm restraint)

────────────────────────────────────────────────────────────────────
VARIATION 3: LAVENDER WASH (Ink Storm pattern, softer color)
────────────────────────────────────────────────────────────────────

Description: Lavender ink wash spreading across stone-colored background. Softer than Set A Ink Storm. Almost like watercolor on grey paper.
Colors: stone #2A2C38 background + lavender #B8A4D6 wash + subtle hint of dusty pink #D8B4D8
Animation: wash diffuses very slowly, almost still, like ink continuing to bleed
Texture: heavy noise, painterly edges, watercolor feel
Asymmetric: lavender concentrated upper-left, dispersing to lower-right
Inspiration websites:
  - https://www.metmuseum.org/art/collection/search#!?material=Ink  (museum ink works)
  - https://www.shader-gradient.co/  (Viola preset for the soft purple blooms)
  - https://www.studio-fnk.com/  (editorial design firms with watercolor sensibility)

────────────────────────────────────────────────────────────────────
VARIATION 4: CREAM & CORAL (LIGHT MODE, new pattern)
────────────────────────────────────────────────────────────────────

Description: Editorial magazine aesthetic. Warm cream background with a soft coral cloud. Light mode, excellent for text-heavy reading.
Colors: warm cream #F5F0E8 background + coral #FF6B6B soft cloud + accent of deep ink #2A2C38 (for text contrast)
Animation: coral cloud drifts gently, 15 second loop
Texture: heavy paper grain (like risograph or letterpress paper)
Asymmetric: coral concentrated lower-right
Inspiration websites:
  - https://www.aesop.com/  (cream + warm color sophistication)
  - https://www.notion.so/  (cream-friendly aesthetic)
  - https://www.printedmatter.org/  (editorial print sensibility)
  - https://www.it-s-nice-that.com/  (independent publication aesthetic)

────────────────────────────────────────────────────────────────────
VARIATION 5: MUSTARD STATIC (Cold Static pattern, vintage palette)
────────────────────────────────────────────────────────────────────

Description: Same monochrome static treatment as Set A Cold Static, but with mustard yellow on warm dark gray. Vintage, distinctive.
Colors: warm dark gray #2B2A28 base + mustard yellow #E5A823 vertical bands
Animation: subtle vertical drift, 1 pixel every 8 seconds
Texture: very heavy noise, CRT scan lines, analog signal feel
Inspiration websites:
  - https://www.fey.com/  (mid-dark sophisticated with warm accent)
  - https://www.shader-gradient.co/  (Interstella for the warm amber feel)
  - https://teenage.engineering/  (industrial design with vintage warmth)

────────────────────────────────────────────────────────────────────
VARIATION 6: FOREST CONTOUR (Topographic pattern, natural palette)
────────────────────────────────────────────────────────────────────

Description: Same topographic contour-line treatment as Set A Topographic Drift, but with forest green lines on slate. Cartographic but warmer.
Colors: slate #1F2937 background + forest green #4A7B4A lines + occasional moss accent #6B8E4E
Animation: lines drift horizontally at 2 different speeds (parallax built in)
Line treatment: varies in thickness, opacity, some broken/dotted
Inspiration websites:
  - https://www.mapbox.com/  (cartographic excellence)
  - https://stamen.com/  (terrain map styles)
  - https://www.allbirds.com/  (natural palette inspiration)

────────────────────────────────────────────────────────────────────
VARIATION 7: BURGUNDY ECLIPSE (LIGHT MODE, inverted)
────────────────────────────────────────────────────────────────────

Description: INVERSE of Set A Eclipse. Cream field with a deep burgundy circular void. Bold, editorial, light mode.
Colors: warm cream #FAF7F2 (80% coverage) + deep burgundy #6B2737 (circular void, 20%)
Animation: burgundy void slowly drifts horizontally, like a planet moving
Texture: heavy paper grain across BOTH cream and burgundy
Position: void in upper-center, slightly left of true center
Inspiration websites:
  - https://www.aesop.com/  (cream + deep accent color)
  - https://www.theinkjar.com/  (light mode editorial)
  - https://www.printedmatter.org/  (art publication light mode)

────────────────────────────────────────────────────────────────────
VARIATION 8: AURORA EMBERS (NEW pattern, multi-color particles)
────────────────────────────────────────────────────────────────────

Description: Like Set A Lime Dust but with multiple particle colors. Floating embers of different temperatures across a slate background. Distinctive without being rainbow.
Colors: slate #1F2937 background + particles in 4 distinct accent colors:
  - Coral #FF6B6B particles (warm)
  - Mustard #E5A823 particles (warm)
  - Teal #2DD4BF particles (cool)
  - Lavender #B8A4D6 particles (cool)
Each particle is one solid color, not blended. Particles scattered asymmetrically, denser in lower-left.
Animation: particles drift very slowly, like ash falling in still air, varying speeds per color
Texture: particles ARE the texture, plus subtle base grain
Inspiration websites:
  - https://teenage.engineering/  (multi-accent industrial design)
  - https://www.studio-fnk.com/  (sophisticated multi-color usage)
  - https://www.designboom.com/  (multi-color art installations)

═══════════════════════════════════════════════════════════════════
PRESENTATION INSTRUCTIONS
═══════════════════════════════════════════════════════════════════

Present all 8 gradients side by side in a 4x2 or 2x4 grid. Each clearly labeled at top with its name (Sage Mist, Amber Bloom, etc.). Each roughly 16:9 aspect ratio. Include a small description below each gradient. The comparison page itself should be styled minimally so the gradients are the focus.

═══════════════════════════════════════════════════════════════════
EVALUATION GOAL
═══════════════════════════════════════════════════════════════════

We will compare Set B (these 8) against Set A (the previous 8 with Void Bloom, Cold Static, etc.) and pick the strongest 1 to 2 across both sets to lock as the Answerfox brand signature. The chosen gradient must:

1. Look distinctly NOT-AI-template
2. Work behind hero text without competing
3. Feel handcrafted and considered
4. Be either a calm-enough background for adjacent text-heavy content OR clearly reserved for hero moments only

If any output looks like a smooth CSS linear gradient with 3+ rainbow colors, regenerate it with stronger adherence to the rules above.
```

---

## Color palette summary across Set B

| # | Variation | Background | Accent(s) | Mode |
|---|---|---|---|---|
| 1 | Sage Mist | Slate #1F2937 | Sage #7FB069 + warm white | Dark |
| 2 | Amber Bloom | Charcoal #252C38 | Amber #FFA500 | Dark |
| 3 | Lavender Wash | Stone #2A2C38 | Lavender #B8A4D6 + dusty pink | Dark |
| 4 | Cream & Coral | Cream #F5F0E8 | Coral #FF6B6B | **LIGHT** |
| 5 | Mustard Static | Warm gray #2B2A28 | Mustard #E5A823 | Dark |
| 6 | Forest Contour | Slate #1F2937 | Forest green #4A7B4A | Dark |
| 7 | Burgundy Eclipse | Cream #FAF7F2 | Burgundy #6B2737 | **LIGHT** |
| 8 | Aurora Embers | Slate #1F2937 | Coral + Mustard + Teal + Lavender | Dark |

**You now have 16 total options across Set A + Set B.** Coverage:

- 12 dark mode variations (most options)
- 2 explicit light mode variations (Cream & Coral, Burgundy Eclipse)
- 8 different accent color directions
- 4 background lightness levels (cream, slate, charcoal, midnight)

## How to evaluate Set B vs Set A

Once you generate Set B, look at all 16 side by side and ask:

1. **Which gradient SCREAMS Answerfox as a brand?** (your gut)
2. **Which feels most distinctive vs Profound, Peec, Otterly?**
3. **Which works best with our text-heavy product surface?**
4. **Which can become the brand signature that scales across hero, favicon, loading states, social cards?**

Shortlist 2 to 3 favorites across both sets, then we apply them to the actual landing page hero in context.

## On text readability (your concern, properly addressed)

The smart pattern for Answerfox:

| Surface | Background | Gradient role |
|---|---|---|
| Landing page hero | The chosen gradient (full intensity) | Star of the show |
| Pricing section | Charcoal #1F2937 with subtle gradient hint at edges | Supporting role |
| Dashboard main | Slate #252C38 (calm) | No prominent gradient, only on score cards |
| Documentation pages | Cream #F5F0E8 OR slate #252C38 | No gradient, focus on readability |
| Email digest | Cream background | No gradient |

So even if we pick a dark hero gradient, the rest of the product can be lighter and text-friendly. The gradient is a HERO MOMENT, not the whole environment.

## What I will NOT do until you have generated Set B

I am not touching TRD, design system implementation, or other screens. We are in gradient exploration mode. Take your time generating Set B, then send screenshots and we narrow down to the final brand signature.
