"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  badge?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  badge = "SYSTEM SPECIFICATION",
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-[11px] font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        <span>{badge}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4"
      >
        {title} <span className="text-gradient-purple font-extrabold">//</span> <span className="text-purple-300 font-light">{subtitle}</span>
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-purple-200/70 max-w-2xl leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-6"
      />
    </div>
  );
}
