import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-astria.png"
          alt="Ethereal Landscape"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}
          priority
          quality={100}
        />
        {/* Darker Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Cinematic Overlay Gradient - Subtle bottom fade for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1920px] relative z-20 flex-grow flex flex-col justify-between mx-auto px-12 py-16">
        
        {/* Top/Left Content - Title and Tagline */}
        <div className="pt-32 pl-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4 drop-shadow-2xl">
            Quiet Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide drop-shadow-lg max-w-2xl">
            Systems that think. Technology that works quietly.
          </p>
        </div>

        {/* Bottom Content */}
        <div className="space-y-8">
          {/* Centered Button */}
          <div className="flex justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            <Button variant="outline" size="lg" className="rounded-full border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 px-12 h-16 text-lg font-light tracking-wide backdrop-blur-sm transition-all hover:scale-105">
              Start Exploring
            </Button>
          </div>

          {/* Bottom Text - Left and Right */}
          <div className="flex items-end justify-between w-full animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
            {/* Bottom Left */}
            <p className="text-sm text-white/60 font-light max-w-xs">
              Clarity begins with a good question.
            </p>

            {/* Bottom Right */}
            <p className="text-sm text-white/60 font-light">
              Disruptive Technologies ©2025
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}
