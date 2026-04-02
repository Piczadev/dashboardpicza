import React from "react";
import Link from "next/link";

const FOOTER_LINKS = {
  Secciones: [
    { href: "#inicio", label: "Ecosystem" },
    { href: "#blog", label: "Artifacts" },
    { href: "/newsletter", label: "Vault" },
    { href: "#conexion", label: "Governance" },
  ],
  Legal: [
    { href: "/docs", label: "Documentation" },
    { href: "/security", label: "Security" },
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full py-16 px-6 lg:px-12 relative overflow-hidden mt-12">
      {/* Gradient divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-violet/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-2xl h-48 bg-accent-violet/[0.06] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan p-[1.5px]">
                <div className="w-full h-full bg-surface rounded-full flex items-center justify-center">
                  <span className="font-serif font-bold text-xs text-gradient">P</span>
                </div>
              </div>
              <span className="font-serif font-semibold text-lg">PiczaDev</span>
            </div>
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              Software Developer and Digital Strategist. Building at the intersection of Web3, AI, and High-Performance Engineering.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group} className="flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600 mb-1">
                  {group}
                </span>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-sm text-gray-500 hover:text-accent-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { href: "https://github.com/piczadev", label: "GH" },
              { href: "https://twitter.com/piczadev", label: "X" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface-container-high/40 flex items-center justify-center text-gray-500 hover:text-accent-cyan hover:bg-surface-container-highest/60 transition-all duration-300 border border-white/[0.04]"
              >
                <span className="font-mono text-xs font-bold">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.04]">
          <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} PiczaDev. The Fluid Crystal Protocol.
          </span>
          <span className="font-mono text-[10px] text-gray-700 uppercase tracking-widest">
            piczadev.eth · pizzalabs.sol
          </span>
        </div>
      </div>
    </footer>
  );
}
