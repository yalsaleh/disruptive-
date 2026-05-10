"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PartnershipSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="partnership" ref={containerRef} className="relative py-24 md:py-40 bg-black overflow-hidden">
      {/* Massive background text with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none"
      >
        <h2 className="text-[25vw] font-bold tracking-tighter leading-none">META</h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-16 mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase">Infrastructure // Meta Partner</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.1]"
            >
              Deploy where your <br/>
              <span className="italic text-white/40 font-serif">customers already live.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/50 max-w-sm text-lg font-light"
          >
            Through our exclusive partnership with AI Octopus, we build powerful automations directly into WhatsApp, Instagram, and Facebook.
          </motion.p>
        </div>

        {/* Data points as massive typographic elements, no boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="group cursor-default"
          >
            <div className="text-6xl md:text-8xl font-light text-white mb-4 md:mb-6 transition-transform group-hover:-translate-y-2 duration-500">
              2.5B<span className="text-green-500 font-serif italic">+</span>
            </div>
            <div className="h-[1px] w-full bg-white/10 mb-6 group-hover:bg-green-500/50 transition-colors duration-500" />
            <div className="text-xs font-mono text-white/40 tracking-[0.2em] uppercase">WhatsApp Users</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="group cursor-default"
          >
            <div className="text-6xl md:text-8xl font-light text-white mb-4 md:mb-6 transition-transform group-hover:-translate-y-2 duration-500">
              100<span className="text-blue-500 font-serif italic">%</span>
            </div>
            <div className="h-[1px] w-full bg-white/10 mb-6 group-hover:bg-blue-500/50 transition-colors duration-500" />
            <div className="text-xs font-mono text-white/40 tracking-[0.2em] uppercase">Native Integration</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="group cursor-default"
          >
            <div className="text-6xl md:text-8xl font-light text-white mb-4 md:mb-6 transition-transform group-hover:-translate-y-2 duration-500">
              3<span className="text-pink-500 font-serif italic">x</span>
            </div>
            <div className="h-[1px] w-full bg-white/10 mb-6 group-hover:bg-pink-500/50 transition-colors duration-500" />
            <div className="text-xs font-mono text-white/40 tracking-[0.2em] uppercase">Omnichannel Platforms</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
