import React from "react";
import { SpotlightCard } from "./ui/SpotlightCard";
import { GlassForm } from "./GlassForm";

interface SocialNode {
  name: string;
  handle: string;
  category: "Professional & Web3" | "Content & Writing" | "Streaming & Media";
  icon: string;
  href: string;
  color: string;
}

const ALL_NODES: SocialNode[] = [
  // Professional & Web3
  {
    name: "LinkedIn",
    handle: "in/yahir-pizzadev",
    category: "Professional & Web3",
    icon: "💼",
    href: "https://www.linkedin.com/in/yahir-pizzadev",
    color: "group-hover:text-blue-400 group-hover:border-blue-400/40",
  },
  {
    name: "GitHub",
    handle: "github.com/Piczadev",
    category: "Professional & Web3",
    icon: "⌨️",
    href: "https://github.com/Piczadev",
    color: "group-hover:text-white group-hover:border-white/40",
  },
  {
    name: "Portrait Portfolio",
    handle: "portrait.so/piczadev",
    category: "Professional & Web3",
    icon: "🌐",
    href: "https://portrait.so/piczadev",
    color: "group-hover:text-cyan-400 group-hover:border-cyan-400/40",
  },
  {
    name: "Telegram Direct",
    handle: "t.me/piczadev",
    category: "Professional & Web3",
    icon: "✈️",
    href: "https://t.me/piczadev",
    color: "group-hover:text-sky-400 group-hover:border-sky-400/40",
  },
  {
    name: "ENS Protocol",
    handle: "piczadev.eth",
    category: "Professional & Web3",
    icon: "⟠",
    href: "https://app.ens.domains/piczadev.eth",
    color: "group-hover:text-purple-400 group-hover:border-purple-400/40",
  },
  {
    name: "Solana Protocol",
    handle: "pizzalabs.sol.site",
    category: "Professional & Web3",
    icon: "◎",
    href: "https://pizzalabs.sol.site",
    color: "group-hover:text-emerald-400 group-hover:border-emerald-400/40",
  },

  // Content & Writing
  {
    name: "X / Twitter",
    handle: "@Piczadev",
    category: "Content & Writing",
    icon: "𝕏",
    href: "https://x.com/Piczadev",
    color: "group-hover:text-zinc-200 group-hover:border-white/40",
  },
  {
    name: "Substack",
    handle: "@piczadev",
    category: "Content & Writing",
    icon: "📰",
    href: "https://substack.com/@piczadev",
    color: "group-hover:text-orange-400 group-hover:border-orange-400/40",
  },
  {
    name: "Bluesky",
    handle: "@piczadev.com",
    category: "Content & Writing",
    icon: "🦋",
    href: "https://bsky.app/profile/piczadev.com",
    color: "group-hover:text-sky-400 group-hover:border-sky-400/40",
  },
  {
    name: "Typefully",
    handle: "PiczaDev",
    category: "Content & Writing",
    icon: "✍️",
    href: "https://typefully.com/PiczaDev",
    color: "group-hover:text-cyan-300 group-hover:border-cyan-300/40",
  },

  // Streaming & Media
  {
    name: "YouTube",
    handle: "@piczadev",
    category: "Streaming & Media",
    icon: "▶️",
    href: "https://www.youtube.com/@piczadev",
    color: "group-hover:text-red-400 group-hover:border-red-400/40",
  },
  {
    name: "Twitch",
    handle: "piczadev0",
    category: "Streaming & Media",
    icon: "👾",
    href: "https://www.twitch.tv/piczadev0",
    color: "group-hover:text-purple-400 group-hover:border-purple-400/40",
  },
  {
    name: "Kick",
    handle: "piczadev0",
    category: "Streaming & Media",
    icon: "🟢",
    href: "https://kick.com/piczadev0",
    color: "group-hover:text-emerald-400 group-hover:border-emerald-400/40",
  },
  {
    name: "Instagram",
    handle: "@yha.piczadev",
    category: "Streaming & Media",
    icon: "📸",
    href: "https://www.instagram.com/yha.piczadev/",
    color: "group-hover:text-pink-400 group-hover:border-pink-400/40",
  },
  {
    name: "TikTok",
    handle: "@piczadev",
    category: "Streaming & Media",
    icon: "🎵",
    href: "https://www.tiktok.com/@piczadev",
    color: "group-hover:text-cyan-300 group-hover:border-cyan-300/40",
  },
  {
    name: "Facebook",
    handle: "Piczadev0",
    category: "Streaming & Media",
    icon: "👥",
    href: "https://www.facebook.com/Piczadev0",
    color: "group-hover:text-blue-500 group-hover:border-blue-500/40",
  },
];

export function NewsletterPanel() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const filteredNodes =
    selectedCategory === "All"
      ? ALL_NODES
      : ALL_NODES.filter((node) => node.category === selectedCategory);

  return (
    <section id="transmissions" className="w-full py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
              Transmission Network & Direct Signals
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Transmissions & <span className="text-gradient">Nodes</span>
          </h2>
          <p className="font-sans text-sm text-zinc-400 mt-3 leading-relaxed">
            Subscribe to engineering notes, real-time trading architecture breakdowns, and sovereign AI telemetry. Open to technical leadership, pod management, and Web3 advisory.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Newsletter Transmission Column */}
          <SpotlightCard
            className="p-8 md:p-10 flex flex-col justify-between"
            glowColor="rgba(139, 92, 246, 0.15)"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white text-base shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  ✦
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white leading-tight">
                    Direct Transmissions
                  </h3>
                  <span className="font-mono text-xs text-zinc-400">
                    No spam · High signal-to-noise
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 mb-8 leading-relaxed">
                Occasional technical notes for Web3 architects and AI engineers. Unsubscribe with a single click at any time.
              </p>
              <GlassForm />
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-center text-xs font-mono text-zinc-500">
              Zero third-party trackers · Cryptographic privacy respected
            </div>
          </SpotlightCard>

          {/* Social Nodes Column */}
          <SpotlightCard
            className="p-8 md:p-10 flex flex-col justify-between"
            glowColor="rgba(34, 211, 238, 0.15)"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-lg">
                    ⟐
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white leading-tight">
                      Verified Channels & Nodes
                    </h3>
                    <span className="font-mono text-xs text-zinc-400">
                      16 Connected Web3 & Media Nodes
                    </span>
                  </div>
                </div>
              </div>

              {/* Node Category Filters */}
              <div className="flex items-center gap-1.5 flex-wrap mb-4 bg-zinc-900/60 p-1 rounded-xl border border-white/[0.06]">
                {["All", "Professional & Web3", "Content & Writing", "Streaming & Media"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all duration-200 ${
                      selectedCategory === cat
                        ? "bg-zinc-800 text-cyan-300 font-semibold border border-cyan-400/30"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {cat === "All" ? "All Nodes" : cat.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                {filteredNodes.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] hover:border-cyan-400/40 hover:bg-zinc-800/70 transition-all duration-200 flex items-center gap-2.5 group"
                  >
                    <div className={`w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 text-xs shrink-0 transition-colors ${social.color}`}>
                      {social.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-serif font-semibold text-xs text-white group-hover:text-cyan-200 transition-colors truncate">
                        {social.name}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-400 truncate">
                        {social.handle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Identity: <span className="text-white font-semibold">Yahir Rivera</span></span>
              <a
                href="https://app.ens.domains/piczadev.eth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                piczadev.eth ↗
              </a>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

export default NewsletterPanel;

