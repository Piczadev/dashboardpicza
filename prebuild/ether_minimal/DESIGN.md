# Design System Document

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

This system moves beyond the standard "Link-in-Bio" template by treating the interface as a high-end editorial gallery. It rejects the "flat web" in favor of a layered, tactile experience where depth is defined by light and material rather than lines and boxes. It is designed for creators who value intentionality, where every card is a curated artifact and every interaction feels like turning the page of a premium matte magazine. By mixing sharp corners with hyper-rounded "pill" elements and utilizing sophisticated tonal layering, we create a space that feels both architecturally sound and airily modern.

---

## 2. Colors
Our palette is rooted in high-fidelity neutrals with a singular, high-energy accent to drive conversion and focus.

*   **Primary (#354ecf / #667DFF):** Used for critical actions and brand signatures.
*   **Neutral Foundation:** We rely on a sophisticated range of greys (from `surface-container-lowest` #FFFFFF to `surface-dim` #DADADA) to create structure without visual noise.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. Traditional "dividers" are a sign of lazy UI. Instead, boundaries must be defined solely through:
1.  **Background Color Shifts:** A `surface-container-low` (#F3F3F3) section sitting on a `surface` (#f9f9f9) background.
2.  **Vertical Whitespace:** Using our Spacing Scale (specifically 8, 10, or 12) to create breathing room that acts as a natural separator.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of paper.
*   **The Base Layer:** Use `surface` (#f9f9f9).
*   **The Content Well:** Use `surface-container-low` (#F3F3F3) for secondary content areas.
*   **The Focal Card:** Use `surface-container-lowest` (#FFFFFF) for primary interactive elements to make them "pop" against the base.

### The "Glass & Gradient" Rule
To elevate hero sections, use the **Signature Texture**: Transitioning from `primary` (#354ecf) to `primary-container` (#5168e9) with a 15-degree angle. For floating navigation or overlays, apply **Glassmorphism**: use `surface-container-lowest` at 70% opacity with a `24px` backdrop-blur.

---

## 3. Typography
Typography is the voice of the curator. We use a dual-font approach to balance authority with readability.

*   **Display & Headlines (Plus Jakarta Sans):** Used for large, expressive moments. These should feel bold and spacious. High-contrast sizing (e.g., `display-lg` vs. `body-md`) is encouraged to create an editorial rhythm.
*   **Titles & Body (Inter / Switzer):** These are the workhorses. They provide clarity and a modern, Swiss-inspired aesthetic. 
*   **Labeling:** Labels should be used sparingly in `label-md` or `label-sm`, often in uppercase with a slight letter-spacing increase (+0.05em) to denote "metadata" status.

---

## 4. Elevation & Depth
We eschew the "Material 1" style of heavy shadows. Depth is an atmosphere, not an effect.

*   **The Layering Principle:** Stacking is our primary method of elevation. A `surface-container-lowest` card placed on a `surface-container-low` background creates a "soft lift" that is felt, not seen.
*   **Ambient Shadows:** When a card requires true floating status (e.g., on hover), use a shadow tinted with the `on-surface` color:
    *   *Blur:* 30px | *Spread:* -5px | *Opacity:* 6% | *Offset-Y:* 10px.
*   **The "Ghost Border" Fallback:** If a container lacks sufficient contrast against its background, use a **Ghost Border**: 1px solid `outline-variant` (#c5c5d6) at **15% opacity**. It should be almost invisible.
*   **Corner Logic:** Use `rounded-xl` (1.5rem) for main profile cards and social blocks. Use `rounded-full` (9999px) for buttons and small tags to create a "pill" contrast against the architectural sharp corners of the screen edges.

---

## 5. Components

### Cards (The Core Unit)
*   **Style:** `surface-container-lowest` background, `rounded-xl` corners.
*   **Interaction:** On hover, apply an **Ambient Shadow** and scale the card by 1.02x.
*   **Content:** No internal dividers. Use `spacing-4` (1rem) as the standard internal padding.

### Buttons
*   **Primary:** Rounded-full (pill), `primary` background, `on-primary` text. Use the **Signature Texture** gradient for the "Support" or "Main CTA" buttons.
*   **Secondary:** Rounded-full, `surface-container-highest` background, `on-surface` text.
*   **Tertiary:** No background. `primary` text with an underline appearing only on hover.

### Social Integrations & Chips
*   **Platform Chips:** Use `secondary-container` for the background with a `rounded-md` corner to differentiate from action buttons.
*   **Link Indicators:** Use a subtle "arrow-up-right" icon in the `outline` color to indicate external navigation without cluttering the UI.

### Input Fields
*   **Style:** `surface-container-low` background with a `rounded-md` corner. No border in its default state.
*   **Active State:** A 1px **Ghost Border** becomes visible at 40% opacity, and the label shifts to `primary` color.

---

## 6. Do's and Don'ts

### Do's
*   **Do** embrace asymmetry. Place a large 2x2 card next to two 1x1 cards to break the "grid" feel.
*   **Do** use gradients in hero cards to create depth where images are not available.
*   **Do** use `on-surface-variant` for secondary text to maintain a soft, sophisticated hierarchy.
*   **Do** prioritize whitespace. If it looks "empty," you are doing it right.

### Don'ts
*   **Don't** use black (#000000) for text. Use `on-surface` (#1a1c1c) for better optical comfort.
*   **Don't** use standard "drop shadows" that look like blurry black smudges. Always tint your shadows.
*   **Don't** use lines to separate list items. Use a `0.5px` shift in background color or 12px of vertical space.
*   **Don't** crowd the edges. Ensure a minimum of `spacing-6` (1.5rem) from the screen edge to any container.