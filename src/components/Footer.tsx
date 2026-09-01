import React from "react";
import Link from "next/link";

const FOOTER_LINKS = {
  Navigation: [
    { href: "#ecosystem", label: "Ecosystem Matrix" },
    { href: "#showcase", label: "Systems & Experience" },
    { href: "#research", label: "Research Vault" },
    { href: "#transmissions", label: "Transmissions & Contact" },
  ],
  "Core Nodes": [
    { href: "https://www.linkedin.com/in/yahir-pizzadev", label: "LinkedIn Profile" },
    { href: "https://github.com/Piczadev", label: "GitHub Repositories" },
    { href: "https://portrait.so/piczadev", label: "Portrait Portfolio" },
    { href: "https://t.me/piczadev", label: "Telegram Direct" },
    { href: "https://app.ens.domains/piczadev.eth", label: "ENS Domain (piczadev.eth)" },
    { href: "https://pizzalabs.sol.site", label: "Solana Site (pizzalabs.sol)" },
  ],
  "Writing & Media": [
    { href: "https://www.youtube.com/@piczadev", label: "YouTube Channel" },
    { href: "https://substack.com/@piczadev", label: "Substack Publications" },
    { href: "https://x.com/Piczadev", label: "X / Twitter" },
    { href: "https://bsky.app/profile/piczadev.com", label: "Bluesky Feed" },
    { href: "https://typefully.com/PiczaDev", label: "Typefully Hub" },
  ],
  "Live & Social": [
    { href: "https://www.twitch.tv/piczadev0", label: "Twitch Broadcast" },
    { href: "https://kick.com/piczadev0", label: "Kick Streams" },
    { href: "https://www.instagram.com/yha.piczadev/", label: "Instagram" },
    { href: "https://www.tiktok.com/@piczadev", label: "TikTok" },
    { href: "https://www.facebook.com/Piczadev0", label: "Facebook" },
  ],
};

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden mt-8 border-t border-white/[0.06] bg-zinc-950/80">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-violet-600/[0.07] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Identity & Mission */}
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-serif font-bold text-xs text-gradient">P</span>
                </div>
              </div>
              <span className="font-serif font-bold text-lg text-white">PiczaDev</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Yahir Rivera Flores · High-performance Web3 systems & AI automation. Infrastructure for the decentralized future.
            </p>
            <div className="flex items-center gap-2 mt-2 font-mono text-[11px] text-zinc-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>PiczaOS Protocol · Operational</span>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group} className="flex flex-col gap-2.5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 font-semibold mb-1">
                  {group}
                </span>
                {links.map((link) => (
                  link.href.startsWith("#") ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className="font-sans text-xs text-zinc-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-sans text-xs text-zinc-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.06] text-zinc-400 font-mono text-xs">
          <span>
            © {new Date().getFullYear()} PiczaDev (Yahir Rivera Flores). All rights reserved.
          </span>
          <div className="flex items-center gap-4 text-[11px] text-zinc-400">
            <a
              href="https://app.ens.domains/piczadev.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-purple-300 transition-colors"
            >
              piczadev.eth ↗
            </a>
            <span>·</span>
            <a
              href="https://pizzalabs.sol.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-300 transition-colors"
            >
              pizzalabs.sol ↗
            </a>
            <span>·</span>
            <span className="text-cyan-400">Liquid Glass Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

