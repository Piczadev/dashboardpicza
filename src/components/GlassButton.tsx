import React, { ButtonHTMLAttributes } from "react";

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export function GlassButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: GlassButtonProps) {
  const base =
    "relative px-6 py-3 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/50 flex items-center justify-center gap-2 overflow-hidden";

  const variants: Record<string, string> = {
    primary: [
      "bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end",
      "text-white",
      "shadow-[0_0_24px_-4px_rgba(124,58,237,0.5),0_0_48px_-8px_rgba(34,211,238,0.2)]",
      "hover:shadow-[0_0_32px_-2px_rgba(124,58,237,0.7),0_0_64px_-8px_rgba(34,211,238,0.3)]",
      "hover:-translate-y-0.5",
      "active:scale-[0.98]",
    ].join(" "),
    secondary: [
      "glass-panel",
      "text-primary-bright",
      "hover:bg-surface-container-high/80",
      "hover:text-white",
      "hover:shadow-[0_0_20px_-4px_rgba(139,92,246,0.3)]",
      "active:scale-[0.98]",
    ].join(" "),
    tertiary: [
      "text-primary",
      "hover:bg-surface-container/50",
      "backdrop-blur-sm",
      "active:scale-[0.98]",
    ].join(" "),
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {/* Shimmer overlay for primary */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer bg-[length:200%_100%] pointer-events-none" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
