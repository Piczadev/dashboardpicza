import React, { useState } from "react";
import Link from "next/link";
import { GlassButton } from "./GlassButton";

const NAV_LINKS = [
  { href: "#ecosystem", label: "Ecosystem Matrix" },
  { href: "#showcase", label: "Experience & Systems" },
  { href: "#research", label: "Research Vault" },
  { href: "#transmissions", label: "Contact & Transmissions" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 py-3 backdrop-blur-2xl bg-zinc-950/80 border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left — Logo & Status Pill */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-violet via-accent-cyan to-accent-blue p-[1.5px] shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                <span className="font-serif font-bold text-sm text-gradient">P</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base text-white tracking-wide leading-tight">
                PiczaDev
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                Yahir Rivera · piczadev.eth
              </span>
            </div>
          </Link>

          {/* Telemetry Status Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/[0.08] text-[11px] font-mono text-zinc-300 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">Open to Engineering Leadership</span>
          </div>
        </div>

        {/* Center — Anchor Navigation */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="hover:text-cyan-400 transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-violet-500 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right — Actions & CTA */}
        <div className="flex items-center gap-3">
          <GlassButton
            variant="primary"
            className="hidden sm:flex text-xs py-2 px-5 h-9 font-mono uppercase tracking-wider"
            onClick={() => scrollTo("#transmissions")}
          >
            Get in Touch
          </GlassButton>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-4 pb-2 border-t border-white/[0.08] flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-zinc-300 animate-fade-in-up">
          <div className="flex items-center gap-2 px-2 py-1 text-[10px] text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Architecture</span>
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="px-2 py-2 rounded-lg hover:bg-white/[0.06] hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <GlassButton
              variant="primary"
              className="w-full text-xs py-2.5 font-mono uppercase tracking-wider"
              onClick={() => scrollTo("#transmissions")}
            >
              Get in Touch
            </GlassButton>
          </div>
        </div>
      )}
    </nav>
  );
}
