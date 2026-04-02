import React from "react";
import { GlassCard } from "./GlassCard";
import { GlassForm } from "./GlassForm";

const SOCIALS = [
  { name: "Discord", icon: "💬", href: "https://discord.com", color: "group-hover:bg-[#5865F2] group-hover:text-white" },
  { name: "Twitter X", icon: "𝕏", href: "https://twitter.com/piczadev", color: "group-hover:bg-white group-hover:text-black" },
  { name: "GitHub", icon: "<>", href: "https://github.com/piczadev", color: "group-hover:bg-white group-hover:text-black" },
  { name: "WarpCast", icon: "⌘", href: "https://warpcast.com", color: "group-hover:bg-accent-violet group-hover:text-white" },
];

export function NewsletterPanel() {
  return (
    <section id="conexion" className="w-full py-28 px-6 lg:px-12 relative overflow-hidden">
      {/* ── Background glows ── */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-violet/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-cyan/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan/60 block mb-4">
            The Fluid Crystal Protocol
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Newsletter &{" "}
            <span className="text-gradient italic">Connections</span>
          </h2>
          <p className="font-sans text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            Join our decentralized transmission network. Sync your identity and
            receive the latest artifacts directly to your neural interface.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Newsletter */}
          <div className="w-full lg:w-1/2">
            <GlassCard variant="elevated" className="p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center">
                  <span className="text-white text-lg">✦</span>
                </div>
                <h3 className="font-sans font-bold text-lg text-white">Crystal Transmissions</h3>
              </div>
              <p className="font-sans text-sm text-gray-400 mb-8 leading-relaxed">
                Subscribe to receive weekly insights on fluid aesthetics, artifact engineering, and ecosystem governance updates.
              </p>
              <GlassForm />
              <p className="text-center text-xs font-mono text-gray-600 mt-4">
                Zero tracking. Zero telemetry. Pure encryption.
              </p>
            </GlassCard>
          </div>

          {/* Connections */}
          <div className="w-full lg:w-1/2">
            <GlassCard variant="elevated" className="p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center">
                  <span className="text-accent-cyan text-lg">⟐</span>
                </div>
                <h3 className="font-sans font-bold text-lg text-white">Sync Nodes</h3>
              </div>
              <p className="font-sans text-sm text-gray-400 mb-8 leading-relaxed">
                Connect with the collective across the multiversal social fabric.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block outline-none group"
                  >
                    <div className="glass-panel rounded-xl p-5 flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_-4px_rgba(139,92,246,0.25)]">
                      <div className={`w-11 h-11 rounded-full bg-surface-container-highest flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}>
                        <span className="text-lg font-bold">{social.icon}</span>
                      </div>
                      <span className="font-mono uppercase tracking-[0.15em] text-[10px] text-gray-500 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
