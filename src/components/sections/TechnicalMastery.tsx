"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { 
  Terminal, Server, Database, Cloud, Shield, Cpu, 
  Code, GitBranch, CheckCircle2, Layers, Wrench, Sparkles
} from "lucide-react";

interface TechCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface SkillItem {
  name: string;
  category: string;
  level: "Expert" | "Advanced" | "Intermediate" | "Basic";
  percentage: number;
  desc: string;
  highlight?: boolean;
}

const categories: TechCategory[] = [
  { id: "all", name: "All Technologies", icon: <Layers className="w-4 h-4" /> },
  { id: "languages", name: "Languages", icon: <Code className="w-4 h-4" /> },
  { id: "frameworks", name: "Frameworks & Architecture", icon: <Server className="w-4 h-4" /> },
  { id: "databases", name: "Databases & Caching", icon: <Database className="w-4 h-4" /> },
  { id: "devops", name: "DevOps & Testing", icon: <Wrench className="w-4 h-4" /> },
];

const technicalArsenal: SkillItem[] = [
  { name: "Java 17 / 21", category: "languages", level: "Expert", percentage: 95, desc: "Core language, Stream API, Concurrency, OOP, Functional Programming, JVM Memory Model", highlight: true },
  { name: "SQL", category: "languages", level: "Advanced", percentage: 85, desc: "Complex JOINs, indexing, stored procedures, execution plan analysis, query tuning", highlight: true },
  { name: "Python", category: "languages", level: "Basic", percentage: 40, desc: "Scripting syntax, basic automation scripts, fundamental data structures & algorithms", highlight: false },
  { name: "Spring Boot 3.x", category: "frameworks", level: "Expert", percentage: 95, desc: "Dependency Injection, RESTful APIs, Actuator telemetry, custom Auto-configuration", highlight: true },
  { name: "Microservices", category: "frameworks", level: "Expert", percentage: 90, desc: "Service discovery, API Gateway, distributed tracing, resilience & circuit breaking", highlight: true },
  { name: "Spring Security / JWT", category: "frameworks", level: "Advanced", percentage: 85, desc: "Role-based authorization, OAuth2, token validation filters, stateless CORS/CSRF", highlight: true },
  { name: "Hibernate / JPA", category: "frameworks", level: "Advanced", percentage: 85, desc: "ORM mapping, lazy vs eager fetching, 2nd-level cache, entity relationship tuning", highlight: true },
  { name: "REST APIs & GraphQL", category: "frameworks", level: "Advanced", percentage: 80, desc: "OpenAPI/Swagger documentation, semantic versioning, pagination, rate limiting", highlight: false },
  { name: "Spring Cloud", category: "frameworks", level: "Advanced", percentage: 80, desc: "Eureka Discovery, Config Server, Feign Clients, Resilience4j fault tolerance", highlight: false },
  { name: "MySQL / PostgreSQL", category: "databases", level: "Expert", percentage: 90, desc: "Relational modeling, ACID transaction isolation, table partitioning, performance tuning", highlight: true },
  { name: "Redis Caching", category: "databases", level: "Advanced", percentage: 85, desc: "In-memory data structures, session replication, distributed locking, pub/sub messaging", highlight: true },
  { name: "MongoDB", category: "databases", level: "Intermediate", percentage: 65, desc: "NoSQL document stores, flexible schema design, BSON aggregation pipelines", highlight: false },
  { name: "Apache Kafka", category: "devops", level: "Advanced", percentage: 85, desc: "Event-driven messaging, topic partitioning, consumer groups, async event streaming", highlight: true },
  { name: "Docker & Containers", category: "devops", level: "Advanced", percentage: 85, desc: "Multi-stage Dockerfiles, Docker Compose orchestration, containerized server setups", highlight: true },
  { name: "JUnit 5 & Mockito", category: "devops", level: "Advanced", percentage: 85, desc: "Test-driven development, integration harnesses, mocking dependencies, 70%+ coverage", highlight: true },
  { name: "GitHub Actions (CI/CD)", category: "devops", level: "Intermediate", percentage: 70, desc: "Automated build pipelines, regression execution workflows, docker deployment automation", highlight: false },
  { name: "Git & Version Control", category: "devops", level: "Advanced", percentage: 85, desc: "Branching strategies, collaborative pull requests, rebase workflows, commit hygiene", highlight: false },
];

export default function TechnicalMastery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedSkills = activeCategory === "all" 
    ? technicalArsenal 
    : technicalArsenal.filter((skill) => skill.category === activeCategory);

  return (
    <section id="mastery" className="py-28 relative z-10 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeader
        badge="Tech Stack"
        title="Engineering Stack"
        subtitle="Tools & Technologies"
        description="A specialized backend toolkit focused on architecting high-concurrency Java systems, scalable relational databases, and resilient event pipelines."
      />
      <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-4 mb-14">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition duration-300 font-mono ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-white shadow-[0_0_25px_rgba(168,85,247,0.45)] scale-105 border border-purple-400"
                  : "glass-panel text-purple-200/70 hover:text-white hover:border-purple-500/50 hover:bg-purple-900/30 border border-purple-500/20"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              key={skill.name}
              className={`group relative rounded-3xl glass-panel p-6 sm:p-7 border transition duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between ${
                skill.highlight 
                  ? "border-purple-500/40 shadow-[0_8px_30px_rgba(168,85,247,0.18)] hover:border-purple-400 hover:shadow-[0_12px_35px_rgba(168,85,247,0.3)]" 
                  : "border-purple-500/20 hover:border-purple-500/40"
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 rounded-full blur-xl group-hover:bg-purple-600/20 transition duration-300 pointer-events-none" />

              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors font-mono">
                    {skill.name}
                  </h4>
                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border shrink-0 font-semibold ${
                      skill.level === "Expert"
                        ? "bg-purple-600/30 text-purple-200 border-purple-400/60 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                        : skill.level === "Advanced"
                        ? "bg-purple-900/50 text-purple-300 border-purple-500/40"
                        : skill.level === "Intermediate"
                        ? "bg-purple-950/60 text-purple-400 border-purple-800"
                        : "bg-obsidian/80 text-purple-400/80 border-purple-900"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-purple-200/70 leading-relaxed font-normal mb-6">
                  {skill.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-purple-500/15">
                <div className="flex items-center justify-between text-[11px] font-mono text-purple-300/80 mb-2">
                  <span>Proficiency</span>
                  <span className="font-bold text-white">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-purple-950/80 rounded-full h-2 overflow-hidden border border-purple-500/30">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 via-purple-300 to-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
