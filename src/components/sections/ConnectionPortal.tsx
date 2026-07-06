"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Mail, Copy, Check, Send, Sparkles, Terminal, ArrowUpRight } from "lucide-react";

export default function ConnectionPortal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const officialEmail = "rjshashwatraj07lkl@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/shashwat-raj-19960424a/";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-28 relative z-10 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeader
        badge="Reach Me Out"
        title="Initiate Connection"
        subtitle="Get In Touch"
        description="Looking for an architecturally disciplined Java Backend Developer for full-time engineering roles or high-scale microservice projects? Let's connect directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="glass-panel rounded-3xl p-8 border border-purple-500/30 shadow-[0_15px_40px_rgba(168,85,247,0.18)]">
            <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2.5">
              <Terminal className="w-6 h-6 text-purple-400" />
              <span>Direct Channels</span>
            </h3>
            <p className="text-sm text-purple-200/70 leading-relaxed mb-8 font-normal">
              Whether you want to discuss distributed system architecture, Spring Boot scalability, or potential hiring opportunities, my inbox is always monitored and open.
            </p>
            <div className="p-4 rounded-2xl bg-purple-950/70 border border-purple-500/30 mb-5 flex items-center justify-between group hover:border-purple-400 transition duration-300">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono uppercase text-purple-400 font-bold">Official Email</p>
                  <p className="text-xs sm:text-sm font-bold text-white truncate font-mono">{officialEmail}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-purple-900/40 hover:bg-purple-600 text-purple-300 hover:text-white transition duration-200 shrink-0 relative"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-5 p-2.5 rounded-xl bg-green-500/20 border border-green-500/40 text-center text-xs font-mono text-green-300 font-bold flex items-center justify-center gap-2"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </motion.div>
              )}
            </AnimatePresence>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-between group hover:border-purple-400 transition duration-300 block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.7a1.68 1.68 0 0 0-1.68 1.68c0 .93.75 1.68 1.68 1.68a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.68-1.68-1.68Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-blue-400 font-bold">LinkedIn Profile</p>
                  <p className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">Shashwat Raj</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="mt-8 pt-6 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono">
              <span className="text-purple-300">Status:</span>
              <span className="text-green-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Immediate Onboarding Available</span>
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-purple-500/30 shadow-[0_20px_60px_rgba(168,85,247,0.2)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center mx-auto text-green-400 shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-white">Message Sent</h4>
                  <p className="text-sm text-purple-200/80 max-w-md mx-auto">
                    Thank you for reaching out! Your message has been received. I will review your note and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-purple-900/50 hover:bg-purple-600 border border-purple-500/40 text-xs font-mono font-bold text-white uppercase tracking-wider transition"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono uppercase text-purple-300 font-bold block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/50 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-400 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono uppercase text-purple-300 font-bold block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/50 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-400 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono uppercase text-purple-300 font-bold block">
                      Subject / Role Title *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Backend Engineer Opportunity at Tech Corp"
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/50 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-400 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono uppercase text-purple-300 font-bold block">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the project architecture, tech stack, or opportunity details..."
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/50 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-400 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 hover:from-purple-500 hover:to-purple-800 disabled:opacity-50 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition duration-300"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
