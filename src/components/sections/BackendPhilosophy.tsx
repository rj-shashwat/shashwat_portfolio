"use client";

import React from "react";
import SectionHeader from "../SectionHeader";
import { ShieldCheck, Network, Code2, CheckCircle2, Terminal } from "lucide-react";

const engineeringPillars = [
  {
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    title: "100+ DSA Problems Solved",
    subtitle: "Algorithmic Efficiency & Data Structures",
    description: "Deep mastery of algorithms, time-complexity optimization, and data structure manipulation. Consistently writing high-performance code that scales under rigorous computational demands.",
    badge: "Algorithms",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
    title: "Clean & Testable Code",
    subtitle: "TDD, JUnit 5 & Mockito Mastery",
    description: "Engineering software with maintainability as a first-class citizen. Maintaining over 70% automated unit test coverage with comprehensive integration tests and strict adherence to SOLID principles.",
    badge: "Quality Assurance",
  },
  {
    icon: <Network className="w-6 h-6 text-purple-400" />,
    title: "Microservices Architecture",
    subtitle: "Spring Cloud, Docker & Apache Kafka",
    description: "Architecting distributed systems that communicate asynchronously via message brokers. Expertise in API Gateways, service discovery, distributed tracing, and fault-tolerant cloud deployments.",
    badge: "Distributed Systems",
  },
];

const highlights = [
  "B.Tech CSE Undergraduate (Graduation: 2026)",
  "Optimized SQL databases & caching layers for 45ms latency drop",
  "Engineered Spring Boot onboarding pipelines for 30% speedup",
  "Triaged & fixed 339+ critical defects during OnePlus quality analysis",
];

export default function BackendPhilosophy() {
  return (
    <section id="philosophy" className="py-20 relative z-10 max-w-5xl mx-auto px-6 md:px-12">
      <SectionHeader
        badge="About Me"
        title="Engineering Principles"
        subtitle="Backend Mindset"
        description="Combining rigorous theoretical foundations with modern distributed systems engineering to architect resilient server-side applications."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        <div className="lg:col-span-7 flex flex-col justify-between text-purple-200/80 text-base leading-relaxed">
          <div className="p-8 rounded-2xl bg-purple-950/40 border border-purple-500/30 h-full flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>DOMAIN DRIVEN DESIGN</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Architecting High-Concurrency Java Backends with Zero Component Coupling
              </h3>
              
              <p className="mb-4 text-purple-100/90 text-sm sm:text-base leading-relaxed">
                I am a <strong className="text-white font-semibold">Computer Science and Engineering undergraduate</strong> (Expected Graduation: <strong className="text-white font-semibold">2026</strong>) with a relentless focus on server-side architecture, database query optimization, and cloud-native microservices.
              </p>
              <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed">
                During my engineering experiences at <strong className="text-white font-semibold">Diginature</strong> and <strong className="text-white font-semibold">OnePlus</strong>, I demonstrated the ability to optimize critical infrastructure—reducing onboarding workflows by <strong className="text-white font-semibold">30%</strong> through automated deployments and identifying <strong className="text-white font-semibold">339+ critical system defects</strong> through rigorous log and API crash analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-purple-500/20">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-purple-100 font-medium leading-normal">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-950/80 to-obsidian border border-purple-500/30 h-full flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-purple-400 font-bold block mb-4">Manifesto ~</span>
              <p className="text-base sm:text-lg font-medium text-white italic leading-relaxed mb-6">
                &quot;I focus on writing clean, reliable Java code that builds strong server foundations. Whether it&apos;s designing REST APIs, managing databases, or structuring microservices, my goal is always simple: keep the system fast, secure, and easy to maintain.&quot;
              </p>
            </div>
            
            <div className="flex items-center justify-between border-t border-purple-500/20 pt-4 mt-4">
              <div>
                <p className="font-bold text-base text-white">Shashwat Raj</p>
                <p className="text-xs text-purple-300 font-mono">Java Backend Developer</p>
              </div>
              <div className="px-3 py-1 rounded-lg bg-purple-900/40 border border-purple-500/30 text-purple-200 text-xs font-mono font-bold">
                Class of &apos;26
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {engineeringPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl bg-purple-950/40 p-6 border border-purple-500/20 hover:border-purple-500/40 transition duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-purple-500/15">
                <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-500/30">
                  {pillar.icon}
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">
                  {pillar.badge}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                {pillar.title}
              </h4>

              <p className="text-xs text-purple-300 font-mono font-medium mb-3">
                {pillar.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-purple-200/70 leading-relaxed pt-2">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
