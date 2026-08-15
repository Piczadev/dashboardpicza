import React, { useState } from "react";
import { GlassButton } from "./GlassButton";

export function GlassForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Subscription failed");
      }

      setStatus("success");
      setMessage(data.message);
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-full relative z-10"
      onSubmit={handleSubmit}
    >
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 ml-1">
        Email address
      </label>
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full bg-surface-container-lowest/60 text-white placeholder-gray-600 px-5 py-4 rounded-xl focus:outline-none transition-all duration-300 border border-white/[0.06] focus:border-accent-violet/30 focus:shadow-[inset_0_0_12px_rgba(139,92,246,0.08),0_0_20px_-4px_rgba(139,92,246,0.2)] backdrop-blur-md font-mono text-sm"
          disabled={status === "loading" || status === "success"}
          required
        />
      </div>
      
      {message && (
        <p className={`font-mono text-[11px] uppercase tracking-widest mt-1 ml-1 ${status === "success" ? "text-accent-cyan" : "text-accent-magenta"}`}>
          {message}
        </p>
      )}

      <GlassButton 
        type="submit" 
        variant="primary" 
        className="w-full py-3.5 text-xs uppercase tracking-[0.15em]"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed" : "Subscribe"}
      </GlassButton>
    </form>
  );
}
