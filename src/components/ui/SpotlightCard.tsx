import React, { useRef, useState, MouseEvent } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  as?: "div" | "article" | "section";
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(34, 211, 238, 0.12)",
  onClick,
  as: Component = "div",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Component
      ref={cardRef as any}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl bg-zinc-950/60 border border-white/[0.08] backdrop-blur-xl transition-all duration-300 ${className}`}
    >
      {/* Dynamic Cursor Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      {/* Dynamic Border Reflection */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-400/30 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          maskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent)`,
        }}
      />
      {/* Top Glass Edge Specular Highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </Component>
  );
};

export default SpotlightCard;
