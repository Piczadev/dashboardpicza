import React from "react";
import { GlassButton } from "./GlassButton";
import { GlassCard } from "./GlassCard";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[92vh] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* ── Concentrated glow behind avatar ── */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial-glow rounded-full pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent-cyan/[0.08] rounded-full blur-[80px] pointer-events-none animate-glow-pulse" />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center animate-fade-in-up">
        {/* ── Avatar ── */}
        <div className="relative mb-8">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent-violet via-accent-cyan to-accent-blue p-[2px] shadow-[0_0_40px_-4px_rgba(139,92,246,0.5)]">
            <div className="w-full h-full rounded-full bg-surface-container flex items-center justify-center overflow-hidden">
              <span className="font-serif text-4xl font-bold text-gradient">Y</span>
            </div>
          </div>
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-accent-cyan border-2 border-surface shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        </div>

        {/* ── Subtitle ── */}
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan/80 mb-4">
          Executive Portfolio
        </span>

        {/* ── Title ── */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight leading-[1.05]">
          <span className="text-white">Yahir</span>{" "}
          <span className="text-gradient">Rivera</span>
        </h1>

        {/* ── Role ── */}
        <p className="font-sans text-base md:text-lg text-gray-400 max-w-lg mb-10 font-light">
          CEO de <span className="text-primary font-medium">PizzaLabs</span> — Arquitecto Web3 & IA
        </p>

        {/* ── CTAs ── */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 animate-fade-in-up animate-delay-200">
          <GlassButton variant="primary" className="text-sm px-8 py-3.5" onClick={() => document.getElementById("vault")?.scrollIntoView({ behavior: "smooth" })}>
            View selected work
          </GlassButton>
          <GlassButton variant="secondary" className="text-sm px-8 py-3.5" onClick={() => document.getElementById("conexion")?.scrollIntoView({ behavior: "smooth" })}>
            Start a conversation
          </GlassButton>
        </div>

        {/* ── Vision + Stats Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl animate-fade-in-up animate-delay-300">
          {/* Vision statement — spans 2 cols */}
          <GlassCard variant="elevated" className="md:col-span-2 p-8 text-left">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent-violet/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan/60 block mb-2">
                  Vision Statement
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-3">
                  Diseñando el tejido de la descentralización.
                </h3>
              </div>
            </div>
            <p className="font-sans text-sm text-gray-400 leading-relaxed">
              Liderando la convergencia entre inteligencia artificial, distributed ledger y protocolos de liquidez para la próxima generación de PizzaLabs.
            </p>
          </GlassCard>

          {/* Stats card */}
          <GlassCard variant="glow" className="p-8 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-serif text-5xl font-bold text-gradient mb-2">14+</span>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Shipping Projects</span>
          </GlassCard>
        </div>

        {/* ── Feature Pills ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 w-full max-w-5xl animate-fade-in-up animate-delay-400">
          {[
            {
              icon: "✦",
              title: "IA Agents",
              desc: "Autonomous smart automation for governance & optimization.",
              color: "text-accent-violet",
            },
            {
              icon: "◆",
              title: "Vault Protocol",
              desc: "Smart key, trustless all architectural frameworks.",
              color: "text-accent-cyan",
            },
            {
              icon: "⟐",
              title: "Join the Labs",
              desc: "Community-first, zero-trust governance.",
              color: "text-accent-magenta",
            },
          ].map((item) => (
            <GlassCard key={item.title} variant="default" interactive className="p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xl ${item.color}`}>{item.icon}</span>
                <h4 className="font-sans font-semibold text-sm text-white">{item.title}</h4>
              </div>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
