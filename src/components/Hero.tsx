import React from "react";
import { GlassButton } from "./GlassButton";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14 pb-16 overflow-hidden"
    >
      {/* Concentrated background glows */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-radial-glow rounded-full pointer-events-none" />
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-cyan-400/[0.07] rounded-full blur-[90px] pointer-events-none animate-pulse-slow" />
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-32 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center animate-fade-in-up">
        {/* Avatar Orb with Fluid Halo */}
        <div className="relative mb-6 group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-violet-500 via-cyan-400 to-emerald-400 p-[2px] shadow-[0_0_45px_rgba(139,92,246,0.4)] transition-transform duration-500 group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center overflow-hidden relative">
              <img
                src="/assets/avatar-yahir.jpg"
                alt="Yahir Rivera (PiczaDev)"
                className="w-full h-full object-cover grayscale contrast-125 opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/30 via-transparent to-cyan-950/20 pointer-events-none" />
            </div>
          </div>
          {/* Active telemetry dot */}
          <div className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-zinc-950 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
        </div>

        {/* Identity & Protocol Tag */}
        <a
          href="https://app.ens.domains/piczadev.eth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-cyan-400/40 backdrop-blur-md mb-6 transition-all duration-200 group cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300 group-hover:text-white transition-colors">
            piczadev.eth · Engineering Lead @ PiczaLabs ↗
          </span>
        </a>

        {/* Display Title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight leading-[1.05]">
          <span className="text-white">Yahir</span>{" "}
          <span className="text-gradient">Rivera Flores</span>
        </h1>

        {/* Subtitle / Headline */}
        <h2 className="font-mono text-sm sm:text-base md:text-lg text-zinc-300 uppercase tracking-widest mb-4 font-semibold">
          Engineering Manager — <span className="text-cyan-300">Frontend & Consumer Financial Systems</span>
        </h2>

        {/* Value Proposition */}
        <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-3xl mb-8 font-normal leading-relaxed">
          Leading cross-functional pods delivering high-scale consumer financial surfaces, low-latency market integrations (<span className="text-white font-medium">Kraken, OKX</span>), decentralized protocols (<span className="text-purple-300 font-medium">Solana, TON, EVM</span>), and sovereign <span className="text-cyan-300 font-medium">AI agent orchestration</span>.
        </p>

        {/* Quick Highlights / Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10 text-xs font-mono text-zinc-400">
          <a
            href="https://pizzalabs.sol.site"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/[0.08] hover:border-emerald-400/40 flex items-center gap-1.5 transition-colors"
          >
            <span className="text-emerald-400">◎</span> pizzalabs.sol
          </a>
          <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.08] flex items-center gap-1.5">
            <span className="text-violet-400">📍</span> Puebla, México (Remote)
          </span>
          <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.08] flex items-center gap-1.5">
            <span className="text-cyan-400">⚡</span> 4+ YOE Pod Leadership
          </span>
          <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.08] flex items-center gap-1.5">
            <span className="text-emerald-400">🛡️</span> DORA & Playwright E2E
          </span>
        </div>

        {/* Actions Cluster */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up animate-delay-200">
          <GlassButton
            variant="primary"
            className="w-full sm:w-auto text-sm px-8 py-3.5 font-mono uppercase tracking-wider shadow-[0_0_25px_rgba(139,92,246,0.35)]"
            onClick={() => scrollTo("#showcase")}
          >
            Explore Systems & Experience
          </GlassButton>
          <a
            href="https://www.linkedin.com/in/yahir-pizzadev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm px-7 py-3.5 rounded-full font-mono uppercase tracking-wider bg-zinc-900/80 border border-white/10 hover:border-cyan-400/40 text-zinc-300 hover:text-white transition-all duration-300"
          >
            <span>LinkedIn</span>
            <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.2Z" />
            </svg>
          </a>
          <a
            href="https://github.com/Piczadev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm px-6 py-3.5 rounded-full font-mono uppercase tracking-wider bg-zinc-900/80 border border-white/10 hover:border-white/40 text-zinc-300 hover:text-white transition-all duration-300"
          >
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

