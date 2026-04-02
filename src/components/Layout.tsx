import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* ── Global ambient orbs ── */}
      <div className="orb orb-violet w-[600px] h-[600px] -top-48 -left-48 opacity-30 animate-orb-drift fixed -z-10" />
      <div className="orb orb-cyan w-[400px] h-[400px] top-1/3 -right-32 opacity-20 animate-orb-drift fixed -z-10" style={{ animationDelay: "-5s" }} />
      <div className="orb orb-blue w-[500px] h-[500px] bottom-0 left-1/4 opacity-15 animate-orb-drift fixed -z-10" style={{ animationDelay: "-10s" }} />
      <div className="orb orb-magenta w-[300px] h-[300px] top-2/3 right-1/4 opacity-10 animate-orb-drift fixed -z-10" style={{ animationDelay: "-15s" }} />

      {/* ── Subtle grid scaffold ── */}
      <div className="fixed inset-0 pointer-events-none -z-[6] opacity-[0.12] bg-grid" />

      {/* ── Noise texture overlay ── */}
      <div className="fixed inset-0 pointer-events-none -z-[5] opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
