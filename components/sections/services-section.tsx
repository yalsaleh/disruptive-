"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "01",
    title: "Agentic AI Systems",
    shortTitle: "Autonomous",
    desc: "We build intelligent agents that understand context, reason through complex problems, and execute full workflows autonomously. Not just chatbots—digital employees.",
    color: "from-blue-500/20 to-transparent",
  },
  {
    id: "02",
    title: "Meta & WhatsApp",
    shortTitle: "Omnichannel",
    desc: "Powered by our AI Octopus partnership, we deploy enterprise-grade AI directly where your customers are: WhatsApp, Instagram, and Facebook.",
    color: "from-green-500/20 to-transparent",
  },
  {
    id: "03",
    title: "Custom Workflows",
    shortTitle: "Integration",
    desc: "From HR onboarding to complex booking flows, we design AI systems that connect to your databases, CRMs, and internal tools seamlessly.",
    color: "from-purple-500/20 to-transparent",
  },
  {
    id: "04",
    title: "Ethical & Safe",
    shortTitle: "Governance",
    desc: "Responsible AI designed with strict guardrails, auditability, and human oversight. We build trust through transparency and accuracy.",
    color: "from-orange-500/20 to-transparent",
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="w-full py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-light tracking-tight text-white"
        >
          Beyond Chatbots.<br />
          <span className="text-white/40 italic font-serif">Real Operational Impact.</span>
        </motion.h2>
      </div>

      {/* Expanding Accordion */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-[600px] md:h-[700px] flex flex-col md:flex-row gap-4 relative z-10">
        {SERVICES.map((service, idx) => {
          const isActive = active === idx;
          
          return (
            <motion.div
              key={service.id}
              onMouseEnter={() => setActive(idx)}
              onClick={() => setActive(idx)}
              layout
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/[0.02] backdrop-blur-md transition-colors duration-500",
                isActive ? "flex-[4] md:flex-[5] bg-white/[0.05]" : "flex-[1] md:flex-[1] hover:bg-white/[0.04]"
              )}
            >
              {/* Active Background Glow */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={cn("absolute inset-0 bg-gradient-to-br opacity-50", service.color)}
                  />
                )}
              </AnimatePresence>

              {/* Desktop Inactive State (Vertical Text) */}
              <div
                className={cn(
                  "hidden md:flex absolute inset-0 py-10 flex-col items-center justify-between transition-opacity duration-300",
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                <span className="text-2xl font-light text-white/40">{service.id}</span>
                <span
                  className="text-2xl font-light text-white/60 tracking-widest uppercase whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {service.shortTitle}
                </span>
              </div>

              {/* Mobile Inactive State (Horizontal Text) */}
              <div
                className={cn(
                  "md:hidden absolute inset-0 px-6 flex items-center justify-between transition-opacity duration-300",
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                <span className="text-xl font-light text-white/40">{service.id}</span>
                <span className="text-lg font-light text-white/60 tracking-widest uppercase">
                  {service.shortTitle}
                </span>
              </div>

              {/* Active State Content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-4xl md:text-6xl font-light text-white/20">{service.id}</span>
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                      </motion.div>
                    </div>

                    <div className="max-w-xl">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-3xl md:text-5xl font-light text-white tracking-tight mb-4 md:mb-6"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-white/60 md:text-lg font-light leading-relaxed"
                      >
                        {service.desc}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
