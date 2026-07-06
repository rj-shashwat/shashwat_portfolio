"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Terminal, Bug, TrendingUp, CheckCircle2, Calendar, MapPin, Briefcase } from "lucide-react";

interface TrajectoryMilestone {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  icon: React.ReactNode;
  badge: string;
  badgeIcon: React.ReactNode;
  description: string;
  achievements: string[];
  skills: string[];
}

const careerMilestones: TrajectoryMilestone[] = [
  {
    role: "Backend Developer",
    company: "Diginature",
    period: "Jun 2025 – Aug 2025",
    location: "Remote / On-site",
    type: "Internship / Contract",
    icon: <Terminal className="w-5 h-5 text-purple-300" />,
    badge: "30% Performance Boost",
    badgeIcon: <TrendingUp className="w-4 h-4 text-green-400" />,
    description: "Architected and optimized core server-side microservices for enterprise client workflows, focusing on high-speed SQL processing and CI/CD automation.",
    achievements: [
      "Engineered automated onboarding pipelines using Spring Boot and RESTful APIs, resulting in a **30% faster onboarding experience** for enterprise users.",
      "Implemented automated CI/CD deployment workflows with GitHub Actions and Docker, reducing manual release errors by over 80%.",
      "Optimized complex SQL database queries and caching layers with MySQL and Redis, cutting average endpoint response latency by 45ms.",
      "Collaborated with cross-functional frontend and DevOps engineering teams to establish API documentation standards using Swagger/OpenAPI."
    ],
    skills: ["Java 17", "Spring Boot", "REST APIs", "MySQL", "Redis", "Docker", "CI/CD Automation"]
  },
  {
    role: "Software Quality Analyst",
    company: "OnePlus",
    period: "Jul 2024 – Dec 2024",
    location: "Hyderabad / Remote",
    type: "Internship",
    icon: <Bug className="w-5 h-5 text-purple-300" />,
    badge: "339+ Defects Discovered",
    badgeIcon: <CheckCircle2 className="w-4 h-4 text-purple-400" />,
    description: "Spearheaded backend API verification, exception log debugging, and system stability analysis for consumer-facing OxygenOS applications and cloud synchronization services.",
    achievements: [
      "Uncovered, documented, and triaged **339+ critical software defects** across mobile backend APIs and cloud synchronization services.",
      "Analyzed server crash logs, exception stack traces, and API payload discrepancies to assist core development teams in pinpointing root causes.",
      "Developed automated regression scripts and test harnesses for backend API validation, significantly enhancing pre-release stability.",
      "Participated in agile sprint retrospectives and quality gate reviews, ensuring zero P0/P1 defects leaked into production builds."
    ],
    skills: ["API Testing", "Log Debugging", "Postman / REST", "Defect Triaging", "Agile QA", "System Analysis"]
  }
];

export default function CareerTrajectory() {
  return (
    <section id="trajectory" className="py-28 relative z-10 max-w-5xl mx-auto px-6 md:px-12">
      <SectionHeader
        badge="Experiences"
        title="Professional Journey"
        subtitle="Work Experience"
        description="Real-world engineering experience in building high-velocity backend systems and enforcing enterprise software quality standards."
      />

      <div className="relative border-l-2 border-purple-600/30 ml-4 md:ml-32 space-y-16">
        {careerMilestones.map((milestone, idx) => (
          <motion.div
            key={milestone.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-950 border-2 border-purple-300 flex items-center justify-center shadow-[0_0_18px_#a855f7]">
              {milestone.icon}
            </div>
            <div className="hidden md:flex absolute -left-40 top-2.5 flex-col items-end text-right pr-6 w-36">
              <span className="text-sm font-bold text-white font-mono">{milestone.period}</span>
              <span className="text-xs text-purple-400 font-mono mt-0.5">{milestone.type}</span>
            </div>
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-purple-500/30 shadow-[0_15px_40px_rgba(168,85,247,0.15)] hover:border-purple-400 transition duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition duration-300 pointer-events-none" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-5 border-b border-purple-500/20">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-purple-300 transition-colors">
                      {milestone.role}
                    </h3>
                    <span className="text-lg font-extrabold text-gradient-purple">
                      @ {milestone.company}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-2 text-xs text-purple-300/80 font-mono">
                    <span className="flex items-center gap-1 md:hidden">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" /> {milestone.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" /> {milestone.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/50 border border-purple-400/50 text-xs font-mono font-bold text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0 self-start md:self-auto">
                  {milestone.badgeIcon}
                  <span>{milestone.badge}</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-purple-200/80 mb-6 leading-relaxed font-normal">
                {milestone.description}
              </p>
              <ul className="space-y-3 mb-7">
                {milestone.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-purple-100/90 leading-relaxed font-normal">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 shadow-[0_0_8px_#c084fc]" />
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }} />
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-1.5 pt-5 border-t border-purple-500/15">
                <span className="text-xs font-mono text-purple-400 mr-2 font-bold">// Stack:</span>
                {milestone.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300 hover:border-purple-400 transition duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
