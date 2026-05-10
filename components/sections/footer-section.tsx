"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FooterSection() {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-8 md:pt-32 md:pb-12 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Massive Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-8 md:gap-12">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-8xl font-light tracking-tighter leading-[1.1] mb-4 md:mb-6"
            >
              Ready to <br/>
              <span className="italic font-serif text-white/50">automate?</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a href="mailto:f.burhama@disruptv.tech" className="group relative flex items-center justify-center w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500">
              <span className="text-lg font-light tracking-tight">Let's Talk</span>
              <ArrowUpRight className="absolute top-8 right-8 w-6 h-6 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            </a>
          </motion.div>
        </div>

        {/* Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-medium tracking-tight mb-4">Disruptive Technologies</h3>
            <p className="text-white/40 font-light max-w-sm text-sm leading-relaxed mb-6">
              Building real agentic AI systems for businesses. Meta Business Partner via AI Octopus.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:f.burhama@disruptv.tech" className="text-sm font-mono text-white/60 hover:text-white transition-colors">
                f.burhama@disruptv.tech
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono text-white/40 tracking-widest uppercase mb-2">Navigation</span>
            <a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Meta Partnership</a>
            <a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Process</a>
          </div>

          {/* Socials / Legal */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono text-white/40 tracking-widest uppercase mb-2">Connect</span>
            <a href="https://instagram.com/disruptv.tech" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-white/70 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">LinkedIn</a>
            <div className="mt-8 text-xs font-mono text-white/30">
              © 2026 DISRUPTIVE TECHNOLOGIES. <br/> ALL RIGHTS RESERVED.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
