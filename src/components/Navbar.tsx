import React from "react";
import Link from "next/link";
import { GlassButton } from "./GlassButton";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 lg:px-12 backdrop-blur-2xl bg-surface/60 border-b border-white/[0.04]">
      {/* Left — Logo */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan p-[1.5px]">
          <div className="w-full h-full bg-surface rounded-full flex items-center justify-center">
            <span className="font-serif font-bold text-sm text-gradient">P</span>
          </div>
        </div>
        <span className="font-serif font-semibold text-lg text-white tracking-wide hidden sm:block">
          PiczaDev
        </span>
      </div>

      {/* Center — Links */}
      <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
        {[
          { href: "/", label: "Ecosystem" },
          { href: "/blog", label: "Artifacts" },
          { href: "/destacados", label: "Vault" },
          { href: "/newsletter", label: "Newsletter" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-accent-cyan transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-accent-cyan after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-3">
        {/* Search icon */}
        <button className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        {/* Bell icon */}
        <button className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all relative">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-accent-cyan rounded-full" />
        </button>
        {/* CTA */}
        <GlassButton variant="primary" className="hidden sm:flex text-xs py-2 px-5 h-9">
          Connect Wallet
        </GlassButton>
        {/* Mobile menu */}
        <button className="md:hidden text-gray-400 hover:text-white ml-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
