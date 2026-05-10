"use client";

import { motion } from "framer-motion";

const STEPS = [
  { 
    id: "01", 
    title: "Discovery & Strategy", 
    desc: "We map your operational bottlenecks and design AI workflows that actually solve them. No fluff, just practical architecture." 
  },
  { 
    id: "02", 
    title: "Agent Design", 
    desc: "Building the brain. We configure reasoning capabilities, tool access, and strict ethical guardrails tailored to your business rules." 
  },
  { 
    id: "03", 
    title: "Meta Integration", 
    desc: "Connecting the agent to WhatsApp, Instagram, or internal tools via our AI Octopus infrastructure for seamless omnichannel deployment." 
  },
  { 
    id: "04", 
    title: "Deployment & Iteration", 
    desc: "We don't just hand over the keys. We monitor, refine, and scale the system as your business grows and adapts." 
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#EAE8E3] text-zinc-900 py-32 px-6 md:px-12 rounded-t-[3rem] -mt-12 relative z-30 shadow-[0_-20px_40px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Sticky Title */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <span className="text-xs font-mono tracking-[0.2em] text-zinc-500 mb-6 block">
              END-TO-END IMPLEMENTATION
            </span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
              From concept <br/>
              <span className="text-zinc-400">to production.</span>
            </h2>
            <p className="text-lg text-zinc-600 font-light max-w-md leading-relaxed">
              We handle the entire lifecycle. No fragmented tools or half-finished bots. Just end-to-end systems that work flawlessly inside your operations.
            </p>

            <a href="mailto:f.burhama@disruptv.tech" className="inline-block mt-12 rounded-full border border-zinc-300 bg-transparent px-8 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-500">
              Start Your Project
            </a>
          </div>
        </div>
        
        {/* Right Side: Scrolling Steps */}
        <div className="lg:col-span-7 flex flex-col gap-12 pt-12 lg:pt-0">
          {STEPS.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group border-b border-zinc-300 pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
                <span className="text-3xl font-mono text-zinc-300 group-hover:text-zinc-900 transition-colors duration-500">
                  {step.id}
                </span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-tight text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="text-xl text-zinc-500 font-light leading-relaxed group-hover:text-zinc-700 transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
