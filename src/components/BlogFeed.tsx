import React, { useState } from "react";
import Link from "next/link";
import { SpotlightCard } from "./ui/SpotlightCard";

interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime?: string;
  gradient?: string;
  [key: string]: any;
}

interface BlogFeedProps {
  posts?: Post[];
}

const CATEGORIES = ["All", "Web3", "AI", "Design"];

export function BlogFeed({ posts = [] }: BlogFeedProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter(
          (post) =>
            post.category?.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <section id="research" className="w-full py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-300">
                Technical Knowledge Vault
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Research & <span className="text-gradient">Transmissions</span>
            </h2>
            <p className="font-sans text-sm text-zinc-400 mt-2 max-w-lg leading-relaxed">
              Deep dives into high-trust interface architecture, local LLM orchestration, and smart contract protocol design.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbars bg-zinc-900/80 p-1.5 rounded-2xl border border-white/[0.08] backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-zinc-800 text-cyan-300 border border-cyan-400/30 shadow-[0_0_12px_rgba(34,211,238,0.2)] font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block h-full focus:outline-none group"
            >
              <SpotlightCard
                className="p-7 flex flex-col justify-between h-full"
                glowColor="rgba(139, 92, 246, 0.15)"
              >
                <div>
                  <div className="mb-4 flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-violet-500/10 text-violet-300 rounded-md border border-violet-500/20">
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{post.date}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold mb-3 text-white group-hover:text-cyan-200 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-zinc-400 flex-grow mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Read Article</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogFeed;

