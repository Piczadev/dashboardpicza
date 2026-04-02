# Design System Document

## 1. Overview & Creative North Star

### Creative North Star: "The Digital Alchemist"
This design system is built for the intersection of Web3's decentralized complexity and AI's fluid intelligence. It is not a standard corporate portal; it is a sophisticated, editorial-first experience that treats digital space like a high-end publication. We move beyond the "template" look by leaning into deep tonal depth, high-contrast serif typography, and a deliberate rejection of traditional structural lines.

The system breaks rigid grid expectations through **intentional asymmetry** and **overlapping elements**. By utilizing high-contrast typography scales (the tension between large, elegant serifs and precise, mono-spaced labels), we create a sense of professional authority mixed with creative edge.

---

## 2. Colors

The palette is anchored in a void-like deep charcoal, punctuated by vibrant, neon-inflected magentas and purples that feel like light emitting through darkness.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts or subtle tonal transitions. Use `surface-container-low` for sections sitting on a `surface` background to define scope without "boxing" the content in.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of frosted glass.
- **Base:** `surface` (#131313) for the deep background.
- **Layer 1:** `surface-container-low` (#1b1b1b) for primary content zones.
- **Layer 2:** `surface-container` (#1f1f1f) for cards or interactive modules.
- **Layer 3:** `surface-container-highest` (#353535) for hovering or active states.

### The "Glass & Gradient" Rule
To achieve a signature premium feel, use Glassmorphism for floating elements (semitransparent `surface` variants with `backdrop-blur: 20px`). For main CTAs and hero backgrounds, utilize a **Signature Texture**: a linear gradient transitioning from `primary` (#ddb7ff) to `secondary_container` (#5b00f0) at a 135-degree angle.

---

## 3. Typography

The typographic soul of this system lies in the contrast between the humanistic **Playfair Display** (Noto Serif equivalent) and the technical precision of **Inter** and **Space Grotesk**.

- **Display & Headline (Noto Serif):** These are the "Editorial" voice. Use these for storytelling, section headers, and big ideas. They should feel large, authoritative, and slightly "too big" for the space, creating a sense of luxury.
- **Title & Body (Inter):** The "Functional" voice. Used for readability in long-form blog content and complex Web3 data.
- **Labels (Space Grotesk):** The "Technical" voice. Used for metadata, tags, and AI-driven insights. The mono-style weight gives it a "terminal" or "code" feel, bridging the gap to the tech-forward brand personality.

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** rather than structural lines.

### The Layering Principle
Depth is achieved by "stacking" the surface-container tiers. For example, a `surface-container-lowest` card placed on a `surface-container-low` section creates a soft, natural lift without the need for a shadow.

### Ambient Shadows
When a floating effect is required (e.g., a modal or a primary action card), use **Ambient Shadows**:
- **Blur:** 40px - 60px
- **Opacity:** 4% - 8%
- **Color:** Tinted with `secondary` (#cdbdff) rather than pure black to mimic the glow of a dark-mode screen.

### The "Ghost Border" Fallback
If accessibility requires a boundary, use a **Ghost Border**: `outline-variant` at 15% opacity. Standard 100% opaque borders are strictly forbidden.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (Primary to Secondary Container) with white text. Roundedness: `full`.
- **Secondary:** Surface-container-high fill with a Ghost Border.
- **Tertiary:** Ghost button, using `primary` text and a subtle background shift on hover.

### Chips (Tags)
- **Style:** Small, `label-sm` typography, `surface-container-highest` background. 
- **Application:** Use for AI categories (e.g., "LLM", "Web3"). No borders; only tonal separation.

### Input Fields
- **Style:** `surface-container-lowest` background with a subtle inner shadow. 
- **States:** Active states should utilize a 1px glow using `primary` at 40% opacity rather than a solid stroke.

### Cards & Lists
- **Rule:** Forbid divider lines. Use vertical white space (`spacing-12` or `spacing-16`) to separate thoughts.
- **The "Elevated Card":** Cards should use a subtle `backdrop-blur` and a 10% opacity `outline` to feel like they are floating above the void.

---

## 6. Do's and Don'ts

### Do
- **Do** use generous white space (Spacing 16+) to let editorial serifs "breathe."
- **Do** overlap images with text blocks to create a custom, non-templated look.
- **Do** use `secondary_container` glows behind high-value elements to simulate "neon" depth.
- **Do** ensure all serif headings have high contrast against the background.

### Don't
- **Don't** use 1px solid dividers to separate content; use the Spacing Scale.
- **Don't** use standard "Drop Shadows" (0, 4, 4, 0). Always use ultra-diffused Ambient Shadows.
- **Don't** mix the Mono (Label) font with long-form body copy. Keep it for metadata only.
- **Don't** use pure #000000 for cards; it kills the "Glassmorphism" effect. Use the Surface tiers.