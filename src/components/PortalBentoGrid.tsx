import React, { useState } from "react";
import { SpotlightCard } from "./ui/SpotlightCard";

const TECH_STACK = [
  { name: "React 19 / Native", icon: "RN", category: "Mobile & Web", color: "text-cyan-400 border-cyan-500/20" },
  { name: "Next.js 16", icon: "NX", category: "Fullstack", color: "text-white border-white/20" },
  { name: "TypeScript", icon: "TS", category: "Core", color: "text-blue-400 border-blue-500/20" },
  { name: "Solana & TON", icon: "W3", category: "Web3", color: "text-purple-400 border-purple-500/20" },
  { name: "CEX APIs (Kraken/OKX)", icon: "CEX", category: "Trading", color: "text-amber-400 border-amber-500/20" },
  { name: "Playwright E2E", icon: "PW", category: "Quality", color: "text-emerald-400 border-emerald-500/20" },
  { name: "Python & FastAPI", icon: "PY", category: "AI/Backend", color: "text-yellow-400 border-yellow-500/20" },
  { name: "Tailwind CSS", icon: "TW", category: "UI/UX", color: "text-sky-400 border-sky-500/20" },
];

const DISCIPLINES = [
  {
    icon: "⚡",
    title: "Consumer Financial UX & Real-Time Systems",
    desc: "Multi-stream WebSockets & SSE integrating Kraken and OKX APIs with latency-aware message batching, guaranteeing 60 FPS UI performance and 99.9% uptime under extreme volatility.",
    glow: "rgba(139, 92, 246, 0.15)",
    tag: "High-Frequency Trading Surfaces",
  },
  {
    icon: "🚀",
    title: "High-Scale Web3 & IDO Protocols",
    desc: "Directing pods across React, React Native and smart contracts (TON, Solana, EVM). Managed >$500k USD IDO volume on Tonstarter, cutting sprint cycle time by 30% via API specifications.",
    glow: "rgba(34, 211, 238, 0.15)",
    tag: "Decentralized Protocols",
  },
  {
    icon: "🤖",
    title: "Autonomous Agent Swarms & Sovereign Ops",
    desc: "Multi-agent pipelines consuming foundational LLM APIs with systemic prompt chaining, paired with an Obsidian PARA second-brain to automate triage and cognitive workflows (-70% manual load).",
    glow: "rgba(20, 241, 149, 0.15)",
    tag: "Sovereign AI & Automation",
  },
];

export function PortalBentoGrid() {
  return (
    <section id="ecosystem" className="w-full py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-300">
                Engineering Leadership & Architecture
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ecosystem <span className="text-gradient">Matrix</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-md leading-relaxed">
            Hands-on Engineering Manager specializing in low-latency consumer financial platforms, Web3 protocols, and AI-accelerated delivery.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Module 1: Vision Statement (Spans 2 cols on md/lg) */}
          <SpotlightCard
            className="md:col-span-2 p-8 flex flex-col justify-between"
            glowColor="rgba(139, 92, 246, 0.15)"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  Engineering Philosophy
                </span>
                <span className="font-mono text-[11px] text-zinc-400 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  PiczaLabs OS
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                Building consumer financial systems like infrastructure, presented with cultural precision.
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                4+ years leading cross-functional pods to bridge client-side experiences with high-throughput backend services. Driving engineering velocity through DORA metrics, Playwright E2E automation, and Vibe Coding workflows to build scalable, resilient digital products.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>piczadev.eth · dev@piczadev.com</span>
              <span className="text-cyan-400">Puebla, México (Remote)</span>
            </div>
          </SpotlightCard>

          {/* Module 2: Live Tech Stack Tags */}
          <SpotlightCard
            className="p-6 flex flex-col justify-between"
            glowColor="rgba(34, 211, 238, 0.15)"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                  Tech Core
                </span>
                <span className="text-xs text-zinc-400 font-mono">8 Key Pillars</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {TECH_STACK.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/[0.06] hover:border-cyan-400/40 hover:bg-zinc-800/60 transition-all duration-200 flex items-center gap-2 group cursor-default"
                  >
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/[0.05] border ${tech.color}`}>
                      {tech.icon}
                    </span>
                    <span className="text-xs text-zinc-300 group-hover:text-white font-medium truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
              ● DORA Metrics & Strict TypeScript
            </div>
          </SpotlightCard>

          {/* Module 3: Live Metric Telemetry HUD */}
          <SpotlightCard
            className="p-6 flex flex-col justify-between"
            glowColor="rgba(20, 241, 149, 0.15)"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                  Leadership HUD
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active EM
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                    <span>UI Availability (Volatility)</span>
                    <span className="text-white font-semibold">99.9% Uptime</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full w-[99.9%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                    <span>IDO Transaction Flow</span>
                    <span className="text-white font-semibold">&gt;$500k USD</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full w-[95%]" />
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
                  <div className="text-zinc-400 text-[10px]">VELOCITY & TRIAGE IMPACT</div>
                  <div className="text-zinc-200 mt-1">Cycle Time: <span className="text-cyan-400">-30%</span> · Ops Load: <span className="text-violet-400">-70%</span></div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400 flex justify-between">
              <span>Testing Rigor</span>
              <span className="text-emerald-400">Playwright E2E</span>
            </div>
          </SpotlightCard>

          {/* Module 4: Core Disciplines (Full Width) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
            {DISCIPLINES.map((item) => (
              <SpotlightCard
                key={item.title}
                className="p-7 flex flex-col justify-between"
                glowColor={item.glow}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-cyan-400 group cursor-pointer">
                  <span>Architecture & Pod Metrics</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortalBentoGrid;
