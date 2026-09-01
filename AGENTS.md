# 🏛️ PiczaDev Portal — Master Architecture & Design System Guidelines (AGENTS.md)

## 1. Role & Objective
This repository represents the **PiczaDev** (`piczadev.com`) brand system and portal codebase.
Default output should feel like **infrastructure for the decentralized future**: technical, intentional, and culturally aware.

### Core Identity
- **Builder**: Yahir Rivera Flores (`piczadev.eth` / `piczadev`).
- **Domain**: High-performance Web3 systems + AI automation, built like infrastructure, presented like culture.
- **Tone**: Elite engineering, dark cyber-minimalism, high trust, precision.

---

## 2. Visual Identity & Design Principles

- **Aesthetic:** High-tech, dark glassmorphism, fluid crystal protocol (Apple Liquid Glass inspired).
- **Palette (90% Void / 10% Accent):**
  - Base Background: `#09090b` / `#0a0a0f` (Deep Void)
  - Surface Containers: `#121216` (Low), `#18181f` (Medium / Container), `#20202a` (Elevated)
  - Primary Accents:
    - Electric Violet: `#8b5cf6` / `#9945FF`
    - Cyan Glow: `#22d3ee` / `#00C2FF`
    - High-Tech Green: `#14F195`
    - Magenta Accent: `#ec4899` / `#d946ef`
  - Text Hierarchy:
    - Primary Headings: `#ffffff`
    - Primary Body / Secondary: `#d4d4d8` / `#a1a1aa` (at least WCAG AA contrast)
    - Technical Monospace: `#71717a` to `#a1a1aa`
- **Typography:**
  - Titles / Display: `Space Grotesk`, `Sora`, or `Inter` in bold.
  - Functional / Technical: `JetBrains Mono` or `IBM Plex Mono`.
- **Layered Glass Rules:**
  - `Level 1 (Base/Surface)`: `bg-zinc-950/40 backdrop-blur-md border border-white/[0.04]`
  - `Level 2 (Cards/Containers)`: `bg-zinc-900/60 backdrop-blur-xl border border-white/[0.08]`
  - `Level 3 (Spotlight/Interactive)`: Spotlight hover effects with responsive cursor lighting (`SpotlightCard`).
- **Performance Constraints:**
  - Avoid rendering more than 2 full-screen blur filters simultaneously on mobile (`@media (max-width: 768px)`).
  - Use GPU-accelerated CSS properties (`transform`, `opacity`, `will-change`).

---

## 3. Core Architecture & Sections

1. **Interactive Identity & Navigation**:
   - Status telemetry indicator (`● Available for Architecture / Projects`).
   - Direct CTA `Get in Touch` and smooth anchor navigation (`#ecosystem`, `#showcase`, `#research`, `#transmissions`).
2. **Hero Portal**:
   - Avatar orb with subtle radial halo, clear value proposition, and dual CTAs (`Explore Portal & Work`, `Start a Conversation`).
3. **Portal Bento Grid (`PortalBentoGrid.tsx`)**:
   - 2x1 Vision Statement & Core Focus.
   - 1x1 Live Tech Stack tags with interactive hover feedback.
   - 1x1 Live Metric HUD (Deployments, Uptime, Production Status).
   - Full-width Core Disciplines (Real-time Systems, AI Agent Orchestration, High-Trust Interfaces).
4. **Showcase & Projects Hub (`ShowcaseSection.tsx`)**:
   - Modular engineering cards with category filters (`All`, `Web3 / DeFi`, `AI & Automation`, `UI / Systems`).
   - GitHub and Live Demo actions.
5. **Research Vault (`BlogFeed.tsx`)**:
   - MDX technical articles, reading times, tags, and search/category navigation.
6. **Transmission Hub (`NewsletterPanel.tsx`)**:
   - Minimalist newsletter subscription with focus glow ring and verified social grid (GitHub, X, Discord, Warpcast).

---

## 4. Quality & Execution Checklist

- [x] **Type Safety**: 100% TypeScript with zero unhandled `any` declarations.
- [x] **Contrast Compliance**: All muted text meets WCAG AA on dark backgrounds (`text-zinc-400` / `#a1a1aa` minimum).
- [x] **Responsive Fluidity**: Flawless layout at 375px (mobile), 768px (tablet), and 1440px+ (desktop).
- [x] **Clean Code**: Modular components with isolated responsibilities and clear props interfaces.
