import Image from "next/image";
import { GlassNavbar } from "@/components/layout/glass-navbar";
import { ServicesCarousel } from "@/components/sections/services-carousel";
import { PartnershipSection } from "@/components/sections/partnership-section";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-white/30 selection:text-white">
      {/* HERO SECTION - Minimalist */}
      <section className="relative h-[85svh] md:h-[100svh] overflow-hidden flex flex-col justify-between p-4 md:p-12 rounded-b-[2rem] md:rounded-none z-20 shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Background"
            fill
            priority
            className="object-cover md:object-[center_center] object-[center_30%] animate-slow-pan"
          />
          {/* Subtle gradient overlay at the bottom to ensure button visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:from-black/80" />
        </div>

        {/* Top Nav */}
        <div className="relative z-10 flex justify-center w-full mt-4 md:mt-2">
          <GlassNavbar />
        </div>

        {/* Bottom Content */}
        <div className="relative z-10 w-full flex justify-center mt-auto pb-8 md:pb-12">
          <a href="#services" className="rounded-full border border-white/30 bg-white/5 px-10 py-4 text-sm md:text-base font-medium text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-md shadow-[0_4px_24px_0_rgba(0,0,0,0.2)]">
            Start Exploring
          </a>
        </div>
      </section>

      {/* SERVICES CAROUSEL SECTION */}
      <section className="relative z-20 bg-black">
        <ServicesCarousel />
      </section>

      {/* META PARTNERSHIP SECTION */}
      <PartnershipSection />

      {/* MARQUEE SECTION */}
      <MarqueeSection />

      {/* PROCESS / IMPLEMENTATION SECTION (Light Theme) */}
      <ProcessSection />

      {/* FOOTER SECTION */}
      <FooterSection />
    </main>
  );
}
