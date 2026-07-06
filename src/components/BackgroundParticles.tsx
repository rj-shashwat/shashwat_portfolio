"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const staticParticles = [
  { top: "15%", left: "10%", duration: 6, delay: 0 },
  { top: "25%", left: "80%", duration: 8, delay: 1 },
  { top: "40%", left: "30%", duration: 7, delay: 0.5 },
  { top: "60%", left: "70%", duration: 9, delay: 2 },
  { top: "75%", left: "20%", duration: 6.5, delay: 1.5 },
  { top: "85%", left: "85%", duration: 7.5, delay: 0.8 },
  { top: "10%", left: "50%", duration: 8.5, delay: 2.5 },
  { top: "50%", left: "90%", duration: 6, delay: 1.2 },
  { top: "35%", left: "15%", duration: 7, delay: 0.3 },
  { top: "90%", left: "45%", duration: 8, delay: 1.8 },
  { top: "65%", left: "55%", duration: 6.8, delay: 0.7 },
  { top: "20%", left: "65%", duration: 7.2, delay: 2.1 },
];

export default function BackgroundParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-grid-pattern">
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-700/15 blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-1/4 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px]"
      />
      {mounted && (
        <div className="absolute inset-0">
          {staticParticles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-400/30"
              style={{
                top: p.top,
                left: p.left,
              }}
              animate={{
                y: [0, -35, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
