import React from "react";
import Link from "next/link";
import { GlassCard } from "./GlassCard";

interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  gradient?: string;
  [key: string]: any;
}

interface BlogFeedProps {
  posts?: Post[];
}

export function BlogFeed({ posts = [] }: BlogFeedProps) {
  return (
    <section id="blog" className="w-full py-28 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan/60 block mb-3">
              Research Lab
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              Research &<br />
              <span className="italic font-light text-gradient">Artifacts</span>
            </h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbars">
            {["All", "Web3", "AI", "Design"].map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                  i === 0
                    ? "bg-accent-violet/20 text-accent-violet border border-accent-violet/20"
                    : "bg-surface-container-high/40 text-gray-500 hover:text-primary hover:bg-surface-container-highest/60 border border-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-3xl">
              <GlassCard
                variant="elevated"
                interactive
                as="article"
                className={`p-8 flex flex-col h-full animate-fade-in-up animate-delay-${(idx + 1) * 100}`}
              >
                {/* Top gradient accent line */}
                <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${post.gradient || 'from-accent-violet to-accent-cyan'} opacity-40`} />

                <div className="mb-6 flex justify-between items-start">
                  <span className="text-xs font-mono px-3 py-1 bg-accent-violet/10 rounded-full text-accent-violet border border-accent-violet/10">
                    {post.category}
                  </span>
                  <span className="text-xs font-mono text-gray-600">{post.date}</span>
                </div>

                <h3 className="font-serif text-xl font-bold mb-4 group-hover:text-accent-cyan transition-colors leading-snug text-white">
                  {post.title}
                </h3>

                <p className="font-sans text-gray-500 text-sm flex-grow mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-sm font-mono text-gray-500 group-hover:text-accent-cyan transition-colors">
                  <span>Read Artifact</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
