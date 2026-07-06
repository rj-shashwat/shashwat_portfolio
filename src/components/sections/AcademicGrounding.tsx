"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, School } from "lucide-react";

const courseworkList = [
  "Object-Oriented Programming (Java)",
  "Data Structures & Algorithms",
  "Database Management Systems (DBMS)",
  "Operating Systems & Kernel Architecture",
  "Computer Networks (TCP/IP & HTTP/2)",
  "Distributed Systems & Consensus",
  "Software Engineering Principles",
  "Cloud Computing Fundamentals",
];

export default function AcademicGrounding() {
  return (
    <section id="academic" className="py-28 relative z-10 max-w-5xl mx-auto px-6 md:px-12">
      <SectionHeader
        badge="Academic Info"
        title="Computer Science"
        subtitle="Education & Background"
        description="Formal computer science education providing deep theoretical grounding in algorithms, system architecture, and database theory."
      />

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl glass-panel p-8 sm:p-12 border border-purple-500/40 shadow-[0_20px_50px_rgba(168,85,247,0.18)] overflow-hidden group"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/25 transition duration-700" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-purple-500/20">
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-950 border border-purple-400/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] shrink-0">
                <GraduationCap className="w-8 h-8 text-purple-200" />
              </div>
              <div>
                <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30 inline-block mb-3 font-semibold">
                  Expected Graduation: 2026
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-300 transition-colors">
                  IMS Engineering College (AKTU)
                </h3>
                <p className="text-lg font-bold text-gradient-purple mt-1 font-mono">
                  B.Tech in Computer Science and Engineering
                </p>
                <div className="flex items-center gap-4 mt-3 text-xs sm:text-sm text-purple-300/80 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-purple-400" /> 2022 – 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-purple-400" /> Ghaziabad, India
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-purple-950/80 border border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.25)] shrink-0 min-w-[150px]">
              <div className="flex items-center gap-1.5 text-purple-300 mb-1">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-[11px] font-mono uppercase font-bold">Cumulative GPA</span>
              </div>
              <p className="text-3xl font-black text-white text-gradient-neon font-mono">
                7.60 <span className="text-sm font-normal text-purple-300">/ 10.0</span>
              </p>
            </div>
          </div>
          <div className="pt-8">
            <h4 className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-5 flex items-center gap-2 font-bold">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Core Curriculum &amp; Specializations:</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {courseworkList.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-purple-950/50 border border-purple-500/20 text-xs sm:text-sm text-purple-100 font-medium hover:border-purple-400 transition duration-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-3xl glass-panel p-6 sm:p-8 border border-purple-500/30 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-purple-300">
              <School className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">D.A.V Public School (CBSE)</h4>
              <p className="text-xs sm:text-sm text-purple-300 font-mono">Patna, India • Completed 2022</p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-sm border-t sm:border-t-0 pt-4 sm:pt-0 border-purple-500/20 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-center sm:text-right">
              <span className="text-[10px] text-purple-400 uppercase font-bold block">12th Grade (Senior Secondary)</span>
              <span className="text-lg font-bold text-white">80.1%</span>
            </div>
            <div className="w-px h-8 bg-purple-500/30 hidden sm:block" />
            <div className="text-center sm:text-right">
              <span className="text-[10px] text-purple-400 uppercase font-bold block">10th Grade (Secondary)</span>
              <span className="text-lg font-bold text-white">81.6%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
