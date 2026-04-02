import React, { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "glow" | "subtle";
  interactive?: boolean;
  as?: "div" | "article";
}

export function GlassCard({
  children,
  className = "",
  variant = "default",
  interactive = false,
  as: Tag = "div",
}: GlassCardProps) {
  const variantStyles: Record<string, string> = {
    default: "glass-panel",
    elevated: "glass-panel-elevated",
    glow: "glass-panel-glow",
    subtle: "bg-surface-container-low/40 backdrop-blur-xl border border-white/[0.04]",
  };

  const interactiveStyles = interactive
    ? "cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.3)] hover:border-accent-violet/20 group"
    : "";

  return (
    <Tag
      className={`
        relative overflow-hidden rounded-2xl
        ${variantStyles[variant]}
        ${interactiveStyles}
        ${className}
      `}
    >
      {/* Top highlight — simulates light hitting glass edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
