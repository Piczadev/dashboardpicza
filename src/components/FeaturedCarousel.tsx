import React from "react";
import { GlassCard } from "./GlassCard";

const FEATURED = [
  {
    id: 101,
    title: "El Sistema Operativo Neurobiológico Dual (TDAH)",
    excerpt:
      "Metodologías de Hyperfocus aplicadas al desarrollo ágil y cómo convertir el 'Burst & Crash' en una ventaja competitiva.",
    readTime: "7 min",
    icon: "🧠",
  },
  {
    id: 102,
    title: "OBS NDI: Zero-Latency Streaming Architecture",
    excerpt:
      "Integrando WebSockets y Python para automatizar transiciones y alertas visuales en vivo.",
    readTime: "12 min",
    icon: "📡",
  },
  {
    id: 103,
    title: "Agent Orchestrator: Mi Segundo Cerebro",
    excerpt:
      "Construyendo un puente entre Obsidian y Claude 3.5 Sonnet para automatización cognitiva profunda.",
    readTime: "9 min",
    icon: "🤖",
  },
];

export function FeaturedCarousel() {
  return (
    <section className="w-full py-28 px-6 lg:px-12 relative">
      {/* Background gradient wash */}
      <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <div className="flex items-center gap-4 mb-14">
          <div className="h-px bg-gradient-to-r from-transparent to-accent-violet/20 flex-grow" />
          <h2 className="font-mono uppercase tracking-[0.25em] text-xs text-gray-500">
            Artículos Destacados
          </h2>
          <div className="h-px bg-gradient-to-l from-transparent to-accent-cyan/20 flex-grow" />
        </div>

        {/* ── Carousel ── */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbars">
          {FEATURED.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[50vw] md:w-[400px]"
            >
              <GlassCard
                variant="glow"
                interactive
                className="p-8 h-full flex flex-col"
              >
                {/* Icon */}
                <span className="text-3xl mb-4 block">{item.icon}</span>

                <span className="text-xs font-mono text-accent-cyan/60 mb-3 block uppercase tracking-widest">
                  Lectura: {item.readTime}
                </span>

                <h3 className="font-serif text-2xl font-bold mb-4 leading-tight group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="mt-auto inline-flex items-center gap-2 text-xs font-mono uppercase text-gray-500 tracking-wider group-hover:text-accent-violet transition-colors">
                  Explorar
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* ── Scroll indicators ── */}
        <div className="flex justify-center gap-2 mt-6">
          {FEATURED.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === 0
                  ? "w-8 bg-accent-violet"
                  : "w-4 bg-surface-container-highest"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
