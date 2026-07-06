"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Server, Database, Cpu, ExternalLink, CheckCircle2, ShieldCheck, Layers } from "lucide-react";

interface ArchitectureSpec {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  metrics: string[];
  demo: string;
  featured: boolean;
}

const architectureCatalog: ArchitectureSpec[] = [
  {
    id: "airbnb",
    title: "Airbnb Backend Distributed System",
    subtitle: "Enterprise Microservices Architecture",
    description: "An end-to-end distributed booking, property listing, and payment processing engine built to simulate enterprise-scale real estate transactions with zero single point of failure.",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    tags: ["Spring Boot", "Microservices", "Docker", "Apache Kafka", "MySQL", "Redis", "Spring Security"],
    metrics: [
      "Sub-50ms search latency using Redis intelligent property caching",
      "Asynchronous booking notifications via Kafka event pipelines",
      "Fault-tolerant API Gateway with centralized JWT authentication",
      "Containerized multi-stage Docker deployment for 6+ microservices"
    ],
    demo: "https://api.airbnb-clone.shashwatraj.dev/swagger-ui.html",
    featured: true
  },
  {
    id: "lovable",
    title: "Lovable Clone // AI Web Generator Backend",
    subtitle: "Secure RESTful API & Code Engine",
    description: "The core backend system for an AI-powered website builder clone. Handles prompt tokenization, secure user workspace management, and database persistence with industry-grade testing standards.",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    tags: ["Spring Boot", "Spring Security / JWT", "Hibernate / JPA", "JUnit 5", "Mockito", "PostgreSQL"],
    metrics: [
      "Exceeded **70% automated test coverage** across domain models and controllers",
      "Stateless role-based JWT authentication and CORS security filters",
      "Optimized Hibernate ORM entity relationships preventing N+1 query leaks",
      "Automated integration testing pipeline with Spring Boot Test & H2"
    ],
    demo: "https://lovable-clone.shashwatraj.dev",
    featured: true
  },
  {
    id: "order-engine",
    title: "Distributed Order Processing Engine",
    subtitle: "High-Throughput Financial Transaction Pipeline",
    description: "An asynchronous order fulfillment and inventory reservation engine designed for flash-sale e-commerce spikes, capable of handling 10,000+ concurrent requests per second.",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    tags: ["Java 21", "Spring Cloud", "Kafka", "Redis Distributed Lock", "MySQL Partitioning", "Docker Compose"],
    metrics: [
      "Implemented Redis distributed locking to guarantee zero inventory overbooking",
      "Dead Letter Queue (DLQ) automated retry mechanism for failed payment webhooks",
      "Horizontal read-scale database replication with MySQL Sharding",
      "Real-time Prometheus & Grafana JVM metrics telemetry monitoring"
    ],
    demo: "#",
    featured: false
  }
];

export default function SystemArchitectures() {
  return (
    <section id="systems" className="py-28 relative z-10 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeader
        badge="Backend Projects"
        title="Featured Systems"
        subtitle="Backend Portfolio"
        description="Complex server-side architectures designed for high availability, fault tolerance, and clean domain-driven design."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {architectureCatalog.map((spec, idx) => (
          <motion.div
            key={spec.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative rounded-3xl glass-panel p-8 sm:p-9 border transition duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
              spec.featured 
                ? "border-purple-500/40 shadow-[0_15px_45px_rgba(168,85,247,0.22)] hover:border-purple-400 hover:shadow-[0_20px_55px_rgba(168,85,247,0.38)]" 
                : "border-purple-500/20 hover:border-purple-500/40 shadow-lg"
            }`}
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/25 transition duration-500 pointer-events-none" />
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-purple-500/15">
                <div className="p-3.5 rounded-2xl bg-purple-900/40 border border-purple-500/30 group-hover:border-purple-400 transition duration-300 shadow-lg">
                  {spec.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-[11px] font-mono text-purple-300 font-medium">
                  {spec.subtitle}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors">
                {spec.title}
              </h3>

              <p className="text-xs sm:text-sm text-purple-200/70 leading-relaxed mb-6 font-normal">
                {spec.description}
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-[11px] font-mono text-purple-400 uppercase tracking-wider font-bold">// Core System Specifications:</p>
                {spec.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-purple-100/90 leading-normal font-normal">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: metric.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-6 pt-5 border-t border-purple-500/15">
                {spec.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-purple-900/30 border border-purple-500/30 text-[11px] font-mono text-purple-300 hover:border-purple-400 transition duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                {spec.demo !== "#" ? (
                  <a
                    href={spec.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 hover:from-purple-500 hover:to-purple-800 text-white text-xs font-bold tracking-wide uppercase transition duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                  >
                    <span>View Live API Specs / Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="w-full py-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-center text-xs font-mono text-purple-300 font-bold flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span>Enterprise Architecture Verified</span>
                  </div>
                )}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
