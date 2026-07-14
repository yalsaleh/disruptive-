import { SiteHeader } from "@/components/layout/site-header"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PartnershipSection } from "@/components/sections/partnership-section"
import { BeliefsSection } from "@/components/sections/beliefs-section"
import { ProcessSection } from "@/components/sections/process-section"
import { CtaSection } from "@/components/sections/cta-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-brand-ink px-4 py-3 text-sm font-semibold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="relative min-h-screen bg-brand-paper text-brand-ink">
        <HeroSection />
        <FeaturesSection />
        <PartnershipSection />
        <BeliefsSection />
        <ProcessSection />
        <CtaSection />
        <FooterSection />
      </main>
    </>
  )
}
