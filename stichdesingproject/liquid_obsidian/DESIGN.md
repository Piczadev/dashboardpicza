# Liquid Crystal Design System

### 1. Overview & Creative North Star
**Creative North Star: The Ethereal Forge**
Liquid Crystal is a high-end editorial design system that bridges the gap between the surgical precision of Web3 technology and the fluid, organic movement of a living digital organism. It moves away from the "flat box" era toward a world of depth, refraction, and atmospheric lighting.

The system uses intentional asymmetry and varying card scales (Bento Grid) to create a sense of discovery. Visual hierarchy is established not through density of information, but through the "weight" of light and shadow, treating the screen as a three-dimensional glass canvas.

### 2. Colors
The palette is built on deep obsidian neutrals (#0e0e0e) contrasted with high-chroma primary (Cyan) and secondary (Violet) accents that mimic the properties of light-emitting diodes and refracted gems.

- **The "No-Line" Rule:** 1px solid borders are strictly forbidden for layout sectioning. Content areas must be defined by shifts in background color (e.g., transitioning from `surface` to `surface-container-high`) or by the soft glow of an aura background.
- **Surface Hierarchy & Nesting:** Use `surface-container-low` at 40% opacity with a `backdrop-blur-3xl` for global navigation. Use `surface-container-high` for content cards to create a physical "lift" from the obsidian base.
- **The Glass & Gradient Rule:** Interactive cards must utilize "Glassmorphism" (rgba 255, 255, 255, 0.03) with high backdrop blurs (20px-40px). 
- **Signature Textures:** Apply radial gradients for hero backgrounds, blending `primary/10` and `secondary/10` to create atmospheric depth without using heavy assets.

### 3. Typography
The system exclusively uses **Plus Jakarta Sans**, a typeface that balances geometric clarity with modern warmth.

**Typographic Rhythm:**
- **Display (Hero):** 3rem (48px) to 5rem (80px), Extrabold, -0.05em tracking. This creates a high-impact, editorial "masthead" feel.
- **Headlines:** 2.25rem (36px), Bold. Used for section titles in the Bento grid.
- **Body Large:** 1.25rem (20px) to 1.125rem (18px), Light/Medium. High tracking for readability.
- **Labels/Caps:** 10px to 11px, Bold, Uppercase, 0.1em tracking. These are used for "Micro-copy" and ecosystem tags.

### 4. Elevation & Depth
Depth is the core differentiator of Liquid Crystal. It is achieved through light simulation rather than structural lines.

- **The Layering Principle:** Stack `glass-card` elements over "Aura Glows" (primary/10 blur 120px) to create the illusion of suspended objects.
- **Ambient Shadows:** The system uses a specific "Crystal Refraction" shadow:
  - `inset -10px -10px 50px rgba(0, 0, 0, 0.5)`
  - `inset 10px 10px 50px rgba(255, 255, 255, 0.1)`
  - `0 0 80px rgba(105, 218, 255, 0.15)`
- **Glassmorphism:** All floating UI (like the mobile bottom bar) must use `backdrop-blur-2xl` and a 0.5px border of `white/10` to simulate the edge of a glass pane.

### 5. Components
- **Buttons (Primary):** Pill-shaped, gradient-filled (Primary to Secondary), with an `aura-glow` filter. They should feel like they are emitting light.
- **Buttons (Secondary):** Transparent glass-card base with white text.
- **Bento Cards:** Large corner radii (2.5rem / 40px). Use varied spans (8-column vs 4-column) to create an editorial layout.
- **Iconography:** Use Material Symbols Outlined, 100-200 weight, with `FILL 1` for active states to maintain the "solid gem" aesthetic.
- **Navigation:** Top app bars must be fixed with a 40% opacity container and a bottom border of `white/10`.

### 6. Do's and Don'ts
**Do:**
- Use heavy blurs (40px+) to soften the transition between different data sections.
- Use gradients for text on prominent brand elements.
- Implement subtle scale animations (1.05x) on card hover to enhance the "floating" feel.

**Don't:**
- Never use sharp 90-degree corners; the minimum radius for small items is 0.5rem.
- Avoid pure black (#000000) for text; use `on-surface` (#ffffff) for contrast or `slate-400` for hierarchy.
- Do not use solid, opaque backgrounds for floating elements; always favor glass with backdrop-filter.