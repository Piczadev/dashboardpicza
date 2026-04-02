# Architecture

## Overview
This application is built with **Next.js** using the **Pages Router** mechanism. It acts as an integration layer for the PiczaDev personal site, uniting the capabilities of a Landing Page, a Markdown Blog, a Newsletter sign-up, and Featured Articles.

## Frameworks
- **Next.js:** Chosen for SEO optimization, SSR/SSG capabilities, and fast subsequent page loads.
- **Tailwind CSS v4:** Handles the styling. We rely heavily on `@theme` blocks and utility classes for Glassmorphism.
- **React 19:** Functional components with Hooks.

## Directory Structure
- `src/components/`: Contains UI primitives (`GlassCard`, `GlassButton`) and complex sections (`Hero`, `BlogFeed`).
- `src/pages/`: Contains the routes. `index.tsx` serves as the unified dashboard.
- `src/styles/`: Contains `globals.css` which defines the liquid glass CSS variables and utility functions.
- `public/assets/`: Placeholders for vector graphics and logos.

## Component Strategy
We use atomic-like design for glass UI primitives (`GlassCard`, `GlassButton`, `GlassForm`) which encapsulate all standard shadows, blurs, and opacities according to the "No-Line" rule. Section components (`Hero`, `BlogFeed`) compose these primitives with content.
