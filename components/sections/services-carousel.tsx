"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CardData = {
  id: string;
  number: string;
  subtitle: string;
  titleSans: string;
  titleSerif: string;
  description: string;
  glowColor: string;
};

const CARDS: CardData[] = [
  {
    id: "agentic-ai",
    number: "01",
    subtitle: "CAPABILITY // AUTONOMOUS",
    titleSans: "Agentic AI",
    titleSerif: "Systems.",
    description: "We build intelligent agents that understand context, reason through complex problems, and execute full workflows autonomously.",
    glowColor: "from-blue-500/20",
  },
  {
    id: "meta-integration",
    number: "02",
    subtitle: "CAPABILITY // OMNICHANNEL",
    titleSans: "Meta &",
    titleSerif: "WhatsApp.",
    description: "Powered by our AI Octopus partnership, we deploy enterprise-grade AI directly where your customers are: WhatsApp, Instagram, and Facebook.",
    glowColor: "from-green-500/20",
  },
  {
    id: "custom-workflows",
    number: "03",
    subtitle: "CAPABILITY // INTEGRATION",
    titleSans: "Custom",
    titleSerif: "Workflows.",
    description: "From HR onboarding to complex booking flows, we design AI systems that connect to your databases, CRMs, and internal tools seamlessly.",
    glowColor: "from-purple-500/20",
  },
  {
    id: "ethical-ai",
    number: "04",
    subtitle: "CAPABILITY // GOVERNANCE",
    titleSans: "Ethical &",
    titleSerif: "Safe.",
    description: "Responsible AI designed with strict guardrails, auditability, and human oversight. We build trust through transparency and accuracy.",
    glowColor: "from-orange-500/20",
  },
];

export function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div id="services" className="w-full pt-16 pb-24 md:py-32 relative overflow-hidden bg-black">
      {/* Ethereal Background Glow matching the hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-light tracking-tight text-white"
        >
          Beyond Chatbots.<br />
          <span className="text-white/40">Real Operational Impact.</span>
        </motion.h2>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={scrollPrev}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollNext}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing relative z-20" ref={emblaRef}>
        <div className="flex gap-8 px-6 md:px-12 ml-[5vw] md:ml-[15vw]">
          {CARDS.map((card, index) => {
            const isActive = index === selectedIndex;
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "flex-[0_0_85%] md:flex-[0_0_420px] min-w-0 relative group transition-all duration-700 ease-out",
                  isActive ? "opacity-100" : "opacity-40 hover:opacity-60"
                )}
              >
                {/* Ultra-creative card design */}
                <div className="h-[450px] md:h-[520px] pl-6 md:pl-10 py-8 flex flex-col justify-between relative overflow-hidden group">
                  
                  {/* Animated Active Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10">
                    {isActive && (
                      <motion.div
                        layoutId="activeCarouselBorder"
                        className="absolute top-0 left-0 w-[2px] h-full bg-white shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                      />
                    )}
                  </div>

                  {/* Hover Ambient Glow */}
                  <div className={cn("absolute -inset-x-20 -inset-y-20 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 blur-3xl pointer-events-none", card.glowColor)} />

                  {/* Massive Watermark */}
                  <div className="absolute -right-4 -top-12 text-[180px] md:text-[240px] font-light text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-700 pointer-events-none select-none tracking-tighter">
                    {card.number}
                  </div>

                  {/* Top: Subtitle */}
                  <div className="relative z-10">
                    <span className={cn(
                      "text-[10px] font-mono tracking-[0.2em] transition-colors duration-500",
                      isActive ? "text-white/80" : "text-white/40"
                    )}>
                      {card.subtitle}
                    </span>
                  </div>

                  {/* Middle/Bottom: Content */}
                  <div className="relative z-10 mb-4">
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight flex flex-col gap-1">
                      <span>{card.titleSans}</span>
                      <span className="font-serif italic text-white/60 group-hover:text-white/90 transition-colors duration-500">{card.titleSerif}</span>
                    </h3>
                    <p className="text-white/50 leading-relaxed font-light text-base md:text-lg max-w-sm group-hover:text-white/70 transition-colors duration-500">
                      {card.description}
                    </p>

                    {/* Minimalist Explore Line */}
                    <div className="flex items-center gap-4 mt-12 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="h-[1px] w-8 bg-white group-hover:w-16 transition-all duration-700 ease-out" />
                      <span className="text-xs tracking-[0.2em] uppercase text-white">Explore</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
