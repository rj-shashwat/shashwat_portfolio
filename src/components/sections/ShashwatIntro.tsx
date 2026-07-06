"use client";

import React from "react";
import { Terminal as TerminalIcon, ArrowRight, Download, Mail, Server, ShieldCheck, Cpu } from "lucide-react";

export default function ShashwatIntro() {
  return (
    <section className="relative pt-36 pb-20 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-left relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span>JAVA 21 &amp; SPRING BOOT ARCHITECT // CLASS OF 2026</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4 leading-tight">
          SHASHWAT <span className="text-purple-400">RAJ</span>
        </h1>

        <p className="text-lg sm:text-2xl font-bold text-purple-300 mb-6 font-mono flex items-center gap-2.5">
          <TerminalIcon className="w-6 h-6 text-purple-400 inline shrink-0" />
          <span>Java Backend Developer | Spring Boot &amp; Microservices</span>
        </p>

        <p className="text-base sm:text-lg text-purple-200/80 max-w-3xl leading-relaxed mb-10 font-normal">
          Computer Science undergraduate specializing in architecting resilient, highly scalable server-side systems and distributed microservices. Proven track record in optimizing SQL pipelines, accelerating enterprise onboarding workflows by 30%, and engineering clean, testable Java applications with 100+ algorithmic problems solved.
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-14 font-mono" suppressHydrationWarning>
          <a
            href="#systems"
            suppressHydrationWarning
            className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg transition duration-200"
          >
            <span suppressHydrationWarning>View Architectures</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/shashwat-raj-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            suppressHydrationWarning
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 text-purple-200 hover:text-white font-semibold text-sm border border-purple-500/40 hover:border-purple-400 transition duration-200"
          >
            <Download className="w-4 h-4" />
            <span suppressHydrationWarning>Resume PDF</span>
          </a>

          <a
            href="#contact"
            suppressHydrationWarning
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-purple-950/40 text-purple-300 hover:text-white font-semibold text-sm border border-purple-800 hover:border-purple-600 transition duration-200"
          >
            <Mail className="w-4 h-4" />
            <span suppressHydrationWarning>Direct Inbox</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-purple-500/20 max-w-3xl font-mono">
          <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xs uppercase font-bold">Algorithms</span>
            </div>
            <p className="text-2xl font-black text-white">100+ Solved</p>
            <p className="text-xs text-purple-300 mt-1">Verified DSA optimization</p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase font-bold">Code Quality</span>
            </div>
            <p className="text-2xl font-black text-white">70%+ Coverage</p>
            <p className="text-xs text-purple-300 mt-1">JUnit 5 &amp; Mockito TDD</p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <Server className="w-4 h-4" />
              <span className="text-xs uppercase font-bold">Performance</span>
            </div>
            <p className="text-2xl font-black text-white">&lt;50ms Latency</p>
            <p className="text-xs text-purple-300 mt-1">Redis &amp; SQL query tuning</p>
          </div>
        </div>

      </div>
    </section>
  );
}
