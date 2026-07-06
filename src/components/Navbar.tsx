"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#philosophy" },
  { name: "Skills", href: "#mastery" },
  { name: "Experience", href: "#trajectory" },
  { name: "Projects", href: "#systems" },
  { name: "Education", href: "#academic" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-40 transition duration-300 ${
        scrolled
          ? "bg-obsidian/90 backdrop-blur-md border-b border-purple-500/20 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-purple-900/60 flex items-center justify-center border border-purple-500/40 group-hover:border-purple-400 transition duration-200">
            <Terminal className="w-4 h-4 text-purple-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-wide text-white font-mono">
              SHASHWAT<span className="text-purple-500">.</span>RAJ
            </span>
            <span className="text-[10px] text-purple-400 font-mono -mt-1 uppercase tracking-widest">Java Backend</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 font-mono text-xs lg:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-purple-200/80 hover:text-white hover:bg-purple-900/30 transition duration-200"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition duration-200 shadow-md"
          >
            Connect
          </a>
        </nav>
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-purple-900/30 text-purple-300 hover:text-white border border-purple-500/30 transition duration-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-6 p-6 rounded-2xl glass-panel border border-purple-500/40 shadow-2xl flex flex-col gap-3 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl text-sm font-medium text-purple-200 hover:text-white hover:bg-purple-900/40 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-xl bg-purple-600 text-white font-bold text-xs uppercase tracking-wider"
          >
            Connect Now
          </a>
        </div>
      )}
    </header>
  );
}
