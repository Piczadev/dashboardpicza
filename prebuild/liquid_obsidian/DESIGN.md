# Design System Strategy: The Fluid Crystal

## 1. Overview & Creative North Star
This design system is engineered to feel less like a software interface and more like a high-end digital artifact. 

**Creative North Star: "The Fluid Crystal"**
The system is built on the interplay of deep, obsidian voids and hyper-luminous, refractive elements. We move away from the "flat web" by embracing a sophisticated, translucent, and deeply layered aesthetic. By utilizing intentional asymmetry, overlapping "glass" surfaces, and high-contrast typography, we create an editorial experience that feels premium, cinematic, and inherently Web3. 

The goal is not to contain information in boxes, but to allow data to float within a pressurized, liquid environment. This is achieved through aggressive backdrop blurs, prismatic light leaks, and a strict adherence to tonal layering over structural line-work.

---

## 2. Colors
Our palette is anchored in the depths of space, utilizing `#0e0e0e` as a foundation to allow vibrant, neon-inflected accents to "pop" with maximum luminescence.

*   **Primary (`#69daff`):** Electric Blue. Used for primary actions and "active" light glows.
*   **Secondary (`#ac89ff`):** Royal Purple. Used for depth-building and secondary brand highlights.
*   **Tertiary (`#ff5dd7`):** Cyan/Magenta fusion. Reserved for high-alert interactions and vibrant data visualization.
*   **Neutral (Surface Tiers):** Ranging from `surface-container-lowest` (#000000) to `surface-bright` (#2c2c2c).

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. They shatter the "liquid" illusion. Boundaries must be defined through:
1.  **Tonal Shifts:** Placing a `surface-container-low` element against a `surface` background.
2.  **Backdrop Refraction:** Using blur to imply a change in medium.
3.  **Light Leaks:** A 1px "Ghost Border" (10-20% opacity) that appears more like a glint of light on the edge of a lens than a physical line.

### The Glass & Gradient Rule
Every interactive surface should feel like it has "soul." Avoid flat fills. Main CTAs must use gradients transitioning from `primary` to `primary-container`. Floating elements must utilize **Glassmorphism**: semi-transparent surface tokens with a minimum `20px` backdrop-blur to allow background gradients to bleed through softly.

---

## 3. Typography
We use **Plus Jakarta Sans** as our sole typeface. The identity is conveyed through extreme scale contrast—heroic headlines paired with ultra-refined, widely spaced labels.

*   **Display & Headline:** Use `display-lg` (3.5rem) and `headline-lg` (2rem) for high-impact editorial moments. These should feel authoritative and clean.
*   **Body:** `body-md` (0.875rem) serves as the workhorse. High contrast (White on Obsidian) ensures readability despite the complex background textures.
*   **Label:** `label-sm` (0.6875rem) with an increased letter-spacing (+0.05em) provides a "technical" or "spec-sheet" feel, grounding the ethereal glass elements with precision.

---

## 4. Elevation & Depth
In this design system, height is indicated by light and clarity, not just shadows.

*   **The Layering Principle:** Stacking is the primary tool for hierarchy. A `surface-container-highest` card should sit atop a `surface-container-low` area. This creates a natural, "physical" lift.
*   **Ambient Aura Glows:** Instead of standard black drop shadows, use "Aura Glows." When an element floats, apply an extra-diffused shadow (40px-64px blur) at a very low opacity (e.g., 6%), using the `primary` or `surface-tint` color. This mimics the light refraction seen in premium optics.
*   **Ghost Borders:** If a container requires definition for accessibility, use the `outline-variant` at 15% opacity. It must look like a "specular highlight" on the edge of a glass pane.
*   **Glassmorphism Depth:** To create a "nested glass" look, increase the backdrop blur intensity as you move "closer" to the user (e.g., Base: 10px blur, Modal: 30px blur).

---

## 5. Components

### Buttons
*   **Primary:** A vibrant gradient fill (`primary` to `primary-dim`). On hover, the element should emit a `primary` aura glow (luminescence).
*   **Secondary/Glass:** A `surface-container-high` fill with 40% opacity and a `20px` backdrop-blur. 
*   **Sizing:** Use `rounding.full` for a "pill" aesthetic that feels ergonomic and fluid.

### Cards & Containers
*   **Floating Panes:** Forbid the use of dividers. Use `spacing.6` (2rem) of vertical white space to separate thoughts.
*   **Inner Glow:** Apply a subtle `0.5px` inner-shadow (inset) at the top edge of cards using `on-surface` at 20% opacity to simulate light hitting the top of the glass.

### Input Fields
*   **Stateful Refraction:** Inactive inputs use `surface-container-low`. Upon focus, the border morphs into a thin `primary` glow, and the background blur increases slightly.
*   **Validation:** Error states use `error` (#ff716c) but must maintain the glass aesthetic—use a soft red aura rather than a harsh solid red box.

### Chips & Tags
*   **Micro-Glass:** Small, capsule-shaped containers (`rounding.full`) with high backdrop-blur. Use `label-sm` typography for a "pro" metadata look.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** overlap elements. Let a glass card partially cover a background gradient to show off the refractive blur.
*   **Do** use asymmetrical layouts. Place large display type offset from the center to create a sense of movement.
*   **Do** use `primary_dim` and `secondary_dim` for subtle hover transitions to maintain the "liquid" feel.

### Don’t:
*   **Don’t** use pure `#000000` for cards; it kills the translucency. Always use a surface-container token with transparency.
*   **Don’t** use high-opacity borders. If it looks like a wireframe, it’s wrong.
*   **Don’t** clutter the "Glass Panes." Keep the content inside floating containers minimal; let the negative space do the work.
*   **Don’t** use standard "Drop Shadows." If the shadow is grey/black and tight, it will look dated. Think "Ambient Light," not "Shadow."