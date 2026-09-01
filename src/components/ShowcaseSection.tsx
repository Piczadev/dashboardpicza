import React, { useState } from "react";
import { SpotlightCard } from "./ui/SpotlightCard";

interface Project {
  id: string;
  title: string;
  role: string;
  company: string;
  period: string;
  category: "Web3 & DeFi" | "AI & Automation" | "UI & Systems";
  description: string;
  tags: string[];
  metric?: string;
  status: "Live" | "Production" | "Open Source" | "Architecture";
  glowColor: string;
  demoUrl?: string;
  repoUrl?: string;
}

interface CareerItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

const CATEGORIES = ["All", "Web3 & DeFi", "AI & Automation", "UI & Systems"] as const;

const PROJECTS: Project[] = [
  {
    id: "piczalabs-trading-engine",
    title: "PiczaLabs Financial UX & CEX Multi-Stream Engine",
    role: "Founder & Engineering Lead (EM)",
    company: "PiczaLabs",
    period: "Nov 2023 – Present",
    category: "Web3 & DeFi",
    description:
      "Led end-to-end architecture and UX delivery for high-concurrency consumer trading surfaces. Architected multi-stream WebSocket & REST client layers interfacing with Kraken and OKX CEX APIs with latency-aware batching for 60 FPS performance and 99.9% availability.",
    tags: ["React 19", "Next.js", "WebSockets", "Kraken/OKX APIs", "Playwright E2E", "TypeScript"],
    metric: "99.9% UI Uptime / 60 FPS",
    status: "Live",
    glowColor: "rgba(34, 211, 238, 0.15)",
    demoUrl: "https://piczadev.com",
    repoUrl: "https://github.com/Piczadev",
  },
  {
    id: "tonstarter-ido-launchpad",
    title: "Tonstarter IDO Launchpad & Fragment Pipeline",
    role: "Engineering Manager / Frontend Pod Lead",
    company: "Tonstarter (via PiczaLabs)",
    period: "Apr 2024 – Nov 2024",
    category: "Web3 & DeFi",
    description:
      "Directed a cross-functional pod of React, React Native, and backend engineers delivering consumer launchpad experiences on TON under high traffic spikes. Standardized API contracts and RPC retry strategies, cutting sprint cycle time by 30% with zero downtime during launches.",
    tags: ["TON Network", "React Native", "TypeScript", "Tolk/FunC", "Playwright", "Telegram"],
    metric: ">$500k USD / -30% Cycle Time",
    status: "Production",
    glowColor: "rgba(139, 92, 246, 0.15)",
    demoUrl: "https://ton.org",
    repoUrl: "https://github.com/Piczadev",
  },
  {
    id: "ethereum-mexico-social",
    title: "Ethereum México Mobile Social Platform",
    role: "Technical Project Manager & Engineering Lead",
    company: "Ethereum México",
    period: "Oct 2023 – Apr 2025",
    category: "Web3 & DeFi",
    description:
      "Managed full product lifecycle for a mobile consumer application tailored for the crypto community. Drove technical roadmap execution, sprint planning, and architecture review while facilitating technical community sessions in English.",
    tags: ["Ethereum", "React Native", "Product Management", "Community Systems", "EVM"],
    metric: "Bilingual Pod Leadership",
    status: "Production",
    glowColor: "rgba(20, 241, 149, 0.15)",
    demoUrl: "https://portrait.so/piczadev",
    repoUrl: "https://github.com/Piczadev",
  },
  {
    id: "autonomous-ai-swarms",
    title: "Autonomous Multi-Agent Swarms & Second Brain",
    role: "AI Systems Architect",
    company: "PiczaDev Intelligence",
    period: "2023 – Present",
    category: "AI & Automation",
    description:
      "Production-grade multi-agent architecture consuming foundational LLM APIs with systemic prompt chaining, paired with Obsidian PARA second-brain methodology and local models (Ollama) to automate triage and cognitive workflows (-70% manual overhead).",
    tags: ["Python", "FastAPI", "Ollama", "Claude/GPT APIs", "Obsidian PARA", "RAG"],
    metric: "-70% Operational Overhead",
    status: "Live",
    glowColor: "rgba(236, 72, 153, 0.15)",
    demoUrl: "https://portrait.so/piczadev",
    repoUrl: "https://github.com/Piczadev",
  },
  {
    id: "dev0-labs-systems",
    title: "Dev0 Labs Frontend Modernization & Market Pipelines",
    role: "Frontend Systems Engineer",
    company: "Dev0 Labs",
    period: "Mar 2021 – Dec 2023",
    category: "UI & Systems",
    description:
      "Led codebase migration to strict TypeScript across distributed clients, built Python data ingestion pipelines for market metrics, and delivered responsive component libraries with client-side caching.",
    tags: ["TypeScript", "Python", "Data Ingestion", "Component Systems", "Tailwind CSS"],
    metric: "Strict TS Architecture",
    status: "Production",
    glowColor: "rgba(59, 130, 246, 0.15)",
    demoUrl: "https://github.com/piczadev",
    repoUrl: "https://github.com/Piczadev",
  },
  {
    id: "liquid-glass-portal",
    title: "Liquid Glass Design System & Creator Portal",
    role: "Lead Frontend Architect",
    company: "PiczaDev",
    period: "2024 – Present",
    category: "UI & Systems",
    description:
      "Apple Liquid Glass and Stitch-inspired dark glassmorphic component framework with GPU-accelerated cursor spotlight glow, WCAG AA contrast compliance, and zero-runtime overhead in Next.js 16.",
    tags: ["Next.js 16", "Tailwind CSS", "TypeScript", "Glassmorphism", "Stitch MCP"],
    metric: "100% Type-Safe / WCAG AA",
    status: "Open Source",
    glowColor: "rgba(168, 85, 247, 0.15)",
    demoUrl: "https://piczadev.com",
    repoUrl: "https://github.com/Piczadev",
  },
];

const CAREER_TIMELINE: CareerItem[] = [
  {
    company: "PiczaLabs",
    role: "Founder & Engineering Lead (EM)",
    period: "Nov 2023 – Present · Remote",
    location: "Mexico City / Remote",
    description: [
      "Led end-to-end product architecture and UX delivery for high-concurrency consumer trading surfaces, maintaining 99.9% UI availability during extreme market volatility.",
      "Architected multi-stream WebSocket & REST client layers interfacing with Kraken and OKX CEX APIs, implementing latency-aware message batching to guarantee smooth 60 FPS consumer UI performance.",
      "Institutionalized Playwright E2E testing across critical financial transaction flows and automated CI/CD checks, significantly reducing release regression rates.",
      "Engineered IP allowlisting and transport-layer cryptographic key isolation across client-server boundaries for consumer financial operations.",
    ],
    tags: ["Pod Leadership", "React 19", "CEX APIs", "WebSockets", "Playwright E2E", "Security Hardening"],
  },
  {
    company: "Tonstarter (via PiczaLabs)",
    role: "Engineering Manager / Frontend Pod Lead",
    period: "Apr 2024 – Nov 2024 · Remote",
    location: "Remote",
    description: [
      "Directed a cross-functional pod of React, React Native, and backend engineers delivering consumer launchpad experiences under peak traffic spikes.",
      "Standardized API contract specifications and RPC retry strategies between React Native mobile/web clients and backend services, cutting sprint cycle time by 30%.",
      "Established end-to-end Playwright test suites covering wallet connections and transaction flows, resulting in zero critical outages during major token launch events.",
      "Implemented DORA metrics to track code review SLAs, sprint predictability, and continuous deployment cadence across client platforms.",
    ],
    tags: ["TON Network", "React Native", "DORA Metrics", "API Contracts", "Zero Downtime"],
  },
  {
    company: "Ethereum México",
    role: "Technical Project Manager & Engineering Lead",
    period: "Oct 2023 – Apr 2025 · Remote",
    location: "Monterrey / Remote",
    description: [
      "Managed full product lifecycle for a mobile consumer application, aligning cross-functional teams across Engineering, Design, and Product.",
      "Drove technical roadmap execution, sprint planning, and architecture review while facilitating technical community sessions in English.",
    ],
    tags: ["Technical PM", "EVM", "React Native", "Sprint Planning", "Bilingual Lead"],
  },
  {
    company: "Dev0 Labs",
    role: "Frontend Systems Engineer",
    period: "Mar 2021 – Dec 2023 · Remote",
    location: "Remote",
    description: [
      "Led migration to strict TypeScript across legacy codebases, reducing runtime errors and improving cross-team developer velocity.",
      "Built Python data ingestion pipelines for market metrics and delivered responsive component libraries with client-side caching.",
    ],
    tags: ["TypeScript", "Python Data Pipelines", "Component Library", "Performance"],
  },
  {
    company: "YouTube & Crypto Education",
    role: "Content Creator & Technical Educator",
    period: "Sep 2020 – Present",
    location: "Mexico",
    description: [
      "Created technical educational content on cryptocurrencies, on-chain mechanics, trading, and digital security.",
      "Optimized production and video distribution with OBS Studio, Apple VideoToolbox, and automated editing pipelines.",
    ],
    tags: ["OBS Studio", "Audio 48kHz/32-bit", "SEO", "Technical Education"],
  },
];

const EDUCATION = [
  {
    institution: "IBERO Puebla",
    degree: "Associate's Degree (TSU) in Computer Systems Networking & Telecommunications",
    period: "Completed 2021",
    location: "Puebla, México",
  },
  {
    institution: "Ironhack CDMX",
    degree: "Front-end Web Design, Web Development & Multimedia Systems",
    period: "Completed 2021",
    location: "Mexico City",
  },
];

export function ShowcaseSection() {
  const [viewMode, setViewMode] = useState<"projects" | "experience">("projects");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="showcase" className="w-full py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-32 right-10 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header & Main Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                Engineering Track Record & Systems
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Systems & <span className="text-gradient">Experience</span>
            </h2>
            <p className="font-sans text-sm text-zinc-400 mt-3 max-w-xl leading-relaxed">
              Proven track record leading cross-functional pods, architecting consumer financial trading platforms, and deploying resilient Web3 protocols.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-zinc-900/90 p-1.5 rounded-2xl border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setViewMode("projects")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                viewMode === "projects"
                  ? "bg-zinc-800 text-cyan-300 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] font-semibold"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              Systems Showcase
            </button>
            <button
              onClick={() => setViewMode("experience")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                viewMode === "experience"
                  ? "bg-zinc-800 text-cyan-300 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] font-semibold"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              Career & Pod Leadership
            </button>
          </div>
        </div>

        {/* View Mode: Projects Showcase */}
        {viewMode === "projects" && (
          <div>
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-violet-600/20 text-violet-300 border border-violet-500/30 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 bg-zinc-900/50 border border-white/[0.04]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <SpotlightCard
                  key={project.id}
                  className="p-7 flex flex-col justify-between h-full group"
                  glowColor={project.glowColor}
                >
                  <div>
                    {/* Header: Category & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400/90 px-2.5 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/20">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.08]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {project.status}
                      </span>
                    </div>

                    {/* Role & Period */}
                    <div className="text-[11px] font-mono text-zinc-400 mb-2">
                      <span className="text-zinc-300 font-semibold">{project.role}</span> · {project.company}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Metric Callout */}
                    {project.metric && (
                      <div className="mb-5 px-3.5 py-2 rounded-xl bg-zinc-900/70 border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400 text-[11px]">Benchmark</span>
                        <span className="text-emerald-400 font-semibold">{project.metric}</span>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between gap-3">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}

                    <a
                      href="https://www.linkedin.com/in/yahir-pizzadev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      <span>Review Details</span>
                      <span>→</span>
                    </a>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        )}

        {/* View Mode: Career & Pod Leadership Timeline */}
        {viewMode === "experience" && (
          <div className="space-y-8 animate-fade-in-up">
            {/* Career Roles */}
            <div className="space-y-6">
              {CAREER_TIMELINE.map((item, index) => (
                <SpotlightCard
                  key={index}
                  className="p-8 md:p-10"
                  glowColor="rgba(139, 92, 246, 0.12)"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        {item.role}
                      </h3>
                      <div className="font-mono text-sm text-cyan-300 font-medium mt-1">
                        {item.company} · <span className="text-zinc-400">{item.location}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-zinc-300 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/[0.08] self-start md:self-auto">
                      {item.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 font-sans text-sm text-zinc-300 leading-relaxed">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-violet-300 px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Education & Academic Credentials */}
            <div className="pt-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Education & Credentials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {EDUCATION.map((edu, eIdx) => (
                  <SpotlightCard
                    key={eIdx}
                    className="p-7 flex flex-col justify-between"
                    glowColor="rgba(34, 211, 238, 0.12)"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                          {edu.institution}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">{edu.period}</span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-white mb-2">
                        {edu.degree}
                      </h4>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
                      📍 {edu.location}
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
