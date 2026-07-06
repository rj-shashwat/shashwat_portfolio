"use client";

import React, { useState } from "react";
import { Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  const [activeEgg, setActiveEgg] = useState<"spidey" | "gojo" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-purple-500/20 bg-obsidian/90 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-between gap-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/15">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-600/30 flex items-center justify-center border border-purple-400">
              <Terminal className="w-4 h-4 text-purple-300" />
            </div>
            <span className="font-extrabold text-base tracking-wider text-white font-mono">
              SHASHWAT<span className="text-purple-500">.</span>RAJ
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-purple-200/70 font-mono font-medium" suppressHydrationWarning>
            <a href="#philosophy" suppressHydrationWarning className="hover:text-white transition-colors">About</a>
            <a href="#mastery" suppressHydrationWarning className="hover:text-white transition-colors">Stack</a>
            <a href="#trajectory" suppressHydrationWarning className="hover:text-white transition-colors">Experiences</a>
            <a href="#systems" suppressHydrationWarning className="hover:text-white transition-colors">Projects</a>
            <a href="#academic" suppressHydrationWarning className="hover:text-white transition-colors">Academic</a>
            <a href="#contact" suppressHydrationWarning className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-900/40 hover:bg-purple-600/40 border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white text-xs font-mono uppercase tracking-wider transition duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-purple-400/70">
          <p>© {new Date().getFullYear()} Shashwat Raj. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Java Backend Developer | Spring Boot &amp; Microservices</span>
          </p>
        </div>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-purple-400/50">
          <button
            onClick={() => setActiveEgg(activeEgg === "spidey" ? null : "spidey")}
            className="hover:text-purple-300 transition flex items-center gap-1.5 focus:outline-none"
            title="Peter Parker's Backend Principle"
          >
            <span>🕸️</span>
            <span className="underline decoration-purple-500/40 underline-offset-2">&quot;With great power...&quot;</span>
          </button>
          <span>•</span>
          <button
            onClick={() => setActiveEgg(activeEgg === "gojo" ? null : "gojo")}
            className="hover:text-purple-300 transition flex items-center gap-1.5 focus:outline-none"
            title="Satoru Gojo's Domain"
          >
            <span>🤞</span>
            <span className="underline decoration-purple-500/40 underline-offset-2">&quot;Throughout Heaven &amp; Earth...&quot;</span>
          </button>
        </div>
        {activeEgg && (
          <div className="mt-2 p-4 rounded-2xl bg-purple-950/90 border border-purple-500/40 text-left max-w-md w-full shadow-2xl relative font-mono text-xs transition-all">
            <button
              onClick={() => setActiveEgg(null)}
              className="absolute top-3 right-3 text-[10px] text-purple-300 hover:text-white transition px-2 py-0.5 rounded bg-purple-900/60 border border-purple-500/30"
            >
              ✕
            </button>
            {activeEgg === "spidey" ? (
              <div className="pr-6">
                <p className="font-bold text-red-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <span>🕸️ Peter Parker (Spider-Man)</span>
                </p>
                <p className="text-purple-100 italic leading-relaxed">
                  &quot;With great computational power comes great responsibility for clean code. No matter how complex the distributed system gets, we always weave our microservices cleanly without tangling the API payload.&quot;
                </p>
              </div>
            ) : (
              <div className="pr-6">
                <p className="font-bold text-blue-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <span>🤞 Satoru Gojo (Jujutsu Kaisen)</span>
                </p>
                <p className="text-purple-100 italic leading-relaxed">
                  &quot;Throughout Heaven and Earth, my Java backend alone is the honored one. Inside the Limitless Domain of Spring Boot, latency drops to zero and null pointer exceptions cease to exist.&quot;
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </footer>
  );
}
