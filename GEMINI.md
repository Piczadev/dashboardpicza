# PiczaDev Creator Dashboard & Website (Liquid Glass Experience)

This project is a design-to-code orchestration hub for **PiczaDev** (Yahir Rivera Flores), focused on building a premium, modern, and minimalist website with a **Liquid Glass** (Glassmorphism) aesthetic.

## Project Overview

*   **Goal:** Unify Landing Page, Blog, Newsletter, and News/Featured sections into a cohesive digital experience.
*   **Aesthetic:** Apple-inspired "Liquid Glass" – deep dark backgrounds (#131313) with vibrant blue-purple gradients and cyan accents.
*   **User Identity:** [Yahir Rivera Flores (piczadev.eth)](USER.md) – Software Developer & AI Automation Lead.
*   **Key Design Assets:** [Stitch Screens](Stitch Instructions.md) (Desktop & Mobile variants).

## Technology Stack (Proposed)

*   **Framework:** Next.js (TypeScript)
*   **Styling:** TailwindCSS (following the "No-Line" Rule for sectioning).
*   **CMS:** Markdown CMS / MDX for blog and newsletter content.
*   **Design Tooling:** [Stitch MCP](https://stitch.googleapis.com/mcp) (Google) for screen generation and design-to-code bridging.

## Directory Structure

*   `prebuild/`: Contains the primary design assets and outputs from Stitch.
    *   `product_requirements_document.md`: The core PRD for the website.
    *   `*/code.html`: Raw HTML/Tailwind exports for individual screens (e.g., Blog, Landing, Newsletter).
    *   `*/screen.png`: Visual references for the exported screens.
    *   `avatarlogos/`: Brand identity assets (logos, avatars).
*   `mcp-config.json`: Configuration for the Stitch MCP server and project metadata.
*   `Stitch Instructions.md`: A mapping of Stitch project and screen IDs.
*   `USER.md`: Detailed profile and cognitive patterns of the project owner.

## Development Conventions

*   **Aesthetic Priority:** Prioritize tonal depth and ambient shadows over solid borders. Use hierarchical surface tiers (`surface-container-low`, etc.) for depth.
*   **Typography:** Editorial contrast between **Noto Serif** (Display/Headlines) and **Inter/Space Grotesk** (Functional/Technical).
*   **Engineering Mindset:** "High-Performance Engineering" – automated workflows, prompt-driven development, and skeptical/curious solution exploration.
*   **Accessibility:** Adhere to WCAG AA contrast standards and ARIA labeling for the glassmorphism UI.

## Key Operational Info

*   **Stitch Integration:** Use the `stitch` MCP tools to fetch, edit, or generate screens based on the instructions in [Stitch Instructions.md](Stitch Instructions.md).
*   **Prompting:** Utilize the templates in [README.md](README.md) for generating new components or content updates.
*   **Building:** (TODO: Once implementation begins, add build/deploy commands here).

## Identity Context

The project owner has a high-performance "Burst & Crash" productivity pattern and uses an "External Brain" (Obsidian + AI) for systemic organization. Maintain consistency with this data-driven, automated, and tech-forward mindset.
