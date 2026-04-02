import React from "react";
import { GlassCard } from "./GlassCard";
import { GlassButton } from "./GlassButton";
const FILTERS = ["All", "Solana", "Ethereum", "Base"];
const FEATURED = {
  title: "Obsidian Monolith #001",
  network: "Ethereum",
  rarity: "Ultra Rare",
  creator: "Created by PiczaDev",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDChI-iC7RbgBqjgj2FMTEkxwDXrQ7ZicC02FxzvvErFqUDqCgNXkts52QX5UDVRAoXIIEvXchxfp3mElhvj3mWRkWNy2DkCy3dKMcyuQV-S54N60_JDqE3xEyJwODAtLWkgm554gTY6RIdVww2w4TCVLw0dBeiWAc_5LkuKHM9Cq2PsOICkq8tV6L9sN4mgQCcf-ZdRRnSmtWrdWvJRI2uXhwlpwN0Cu8k_tbx6PSADLFYmXJoijhQrvqOIQM-GF2hTUdDJHSwAGQ",
};
const SIDE_FEATURE = {
  title: "Liquid Core VI",
  price: "1.4 ETH",
  description:
    "The sixth iteration of the liquid core series exploring high-pressure digital fluids.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB6cpnN-67-Y2UzrxDqzoTUrWsedm9KqO3FUHwzdA-7JSurRL4qBEkKWoicaAlHiDa3lcXWb6AEWSJ3s1g4sm4jqw7DRbfvppW6Oo4IBXCfUJFexEwdEdDNVBBkEkJW8WLMqsaL3g7eoKCKp2eTn8jMByWp5TK3rS1X4eNEbhMlZsRNHu6MlixDqozdct1OMfDYVpKHjj6Ad9yf1CJcRVcpZG7wsoc2r_pCgw2xIcPFHXwNlhHqhuJgGf0ZZ0exnxuQ0CY6RtCivMg",
};
const GRID_ITEMS = [
  {
    title: "Prism Refraction",
    network: "BASE",
    floor: "0.25 ETH",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXR4g0MTbPJ9qIX9Yupmy8IuTAlXTc4bO-EP7uS1p5xL94KVoMWYbicVas-ahezmg5e1ikORLW14EK4ny7mDeXtGy1CO6ubTIKCxhiZYpg3E_BewUP8X4n1pasIpf1Nux29BOPN6Z3ctOgUKjEzp3rlzJnHg8gFzKJZmbw7WBuF70v_iSo1PN1JRHmr2k1JA_K6oznU9dzeZibJ0Ptgdb5QfVTtvI-_-zcpLIYclV2aLKgXAyMX5pjnN5jnSzsKIM-xjjkJVej_34",
  },
  {
    title: "Neural Pathway",
    network: "SOL",
    floor: "450 SOL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlj_3iQn13UwDxtaHne0hDSNt5NPV81KqhLhiOrXDbi2_kofQzdKVdyLpTwj551i5Dv5OpqLvCPDfaVv-lb-E0sK9WlIR72K-YYeiCUqm3IDAI9CI7Y23D_mVEZ0yWDBXeq19ObP44zjC2ELU6qIwA2Nxdu8omsQpNXBAJoWOVVMMU7joS9js8eI7vtBqipeF4dhDPrZ_hYfJLlX4GNy81cUMg3tBkK0UNFih_qoN_pDxRKTrykDRFDtbXikqZOERrCD34fU_0hII",
  },
  {
    title: "Glass Geometry",
    network: "ETH",
    floor: "2.1 ETH",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAiUKwe63PnuR5GO2gjqZaHe2ftXtaxBQdw5Q77_ZJ1K2LhR5fZkPjCgdgSqE3myQP85pLjIWHeVkukQ2azp1UypZT92XUB3KSBWcJ6BHBWo5_ssYeRqUFL2qoFW7w-h_Xm0FFIDSdkGHa967yWZfqHFeJva3bly9nTbCiRgL1_RWU80GfabUWzNntbgbcYni9AHNtJ4-xArqvy9u0V_WSmbBT8ENcdPf0AatL-xnOwOkeEoEN6dtHhrR3Us-z-SvdfCpI3OIp3tQ",
  },
];
export function ArtifactsVault() {
  return (
    <section id="vault" className="w-full py-28 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-[520px] h-[520px] bg-accent-violet/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-[420px] h-[420px] bg-accent-cyan/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan/60 block mb-4">
              Digital Collectibles Archive
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Artifacts <span className="text-gradient italic">Vault</span>
            </h2>
            <p className="font-sans text-gray-500 mt-4 max-w-xl text-sm leading-relaxed">
              A curated selection of hyper-luminous digital assets engineered for the next evolution of decentralized culture.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap bg-surface-container-low/60 p-2 rounded-full border border-white/[0.06] backdrop-blur-md">
            {FILTERS.map((filter, index) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all duration-300 ${
                  index === 0
                    ? "bg-surface-container-highest text-accent-cyan border border-accent-cyan/20"
                    : "text-gray-500 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <GlassCard variant="elevated" className="lg:col-span-4 overflow-hidden">
            <div className="relative h-full min-h-[320px] md:min-h-[420px]">
              <img
                src={FEATURED.image}
                alt="Featured artifact"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] bg-accent-violet/20 text-accent-violet border border-accent-violet/20">
                      {FEATURED.rarity}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
                      {FEATURED.network}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                    {FEATURED.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
                    {FEATURED.creator}
                  </p>
                </div>
                <GlassButton variant="primary" className="text-xs px-6 py-3">
                  Bid Now
                </GlassButton>
              </div>
            </div>
          </GlassCard>
          <GlassCard variant="glow" className="lg:col-span-2 overflow-hidden flex flex-col">
            <div className="relative aspect-square">
              <img
                src={SIDE_FEATURE.image}
                alt="Liquid core artifact"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-serif text-xl font-bold text-white">{SIDE_FEATURE.title}</h4>
                <span className="text-xs font-mono text-accent-cyan">{SIDE_FEATURE.price}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                {SIDE_FEATURE.description}
              </p>
              <button className="mt-6 text-[10px] font-mono uppercase tracking-[0.25em] text-accent-cyan hover:text-white transition-colors">
                View Details
              </button>
            </div>
          </GlassCard>
          {GRID_ITEMS.map((item) => (
            <GlassCard key={item.title} variant="subtle" className="lg:col-span-2 overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={item.image}
                  alt={`${item.title} artifact`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">
                    {item.network}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-sans font-semibold text-white">{item.title}</h4>
                  <span className="text-xs text-gray-500 font-mono uppercase">{item.floor}</span>
                </div>
                <button className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-500 hover:text-accent-cyan transition-colors">
                  Quick Bid
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
