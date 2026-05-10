import { Quote } from "lucide-react"

export function PhilosophySection() {
  return (
    <section id="manifesto" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="w-full max-w-[1920px] mx-auto px-8">
        
        <div className="space-y-16 max-w-4xl">
          <div className="space-y-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">Our Philosophy</span>
            
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-[1.1] drop-shadow-sm">
              Technology should <br/>
              <span className="text-white/40 italic">disappear into function.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg font-light leading-relaxed text-white/60 text-left pt-8 border-t border-white/5">
            <div className="space-y-6">
              <p>
                <strong className="text-white font-medium block mb-3 text-sm uppercase tracking-wider">Core Belief</strong>
                If a system needs explaining, it's not finished. Disruptive exists to build quietly powerful systems — tools that feel inevitable once they're live.
              </p>
              <p>
                We build for reliability over novelty. Clarity over complexity. Outcomes over impressions.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                <strong className="text-white font-medium block mb-3 text-sm uppercase tracking-wider">Anti-Patterns</strong>
                We are allergic to flashy dashboards, over-designed UIs, and "revolutionary" claims that don't ship.
              </p>
              <p>
                If something doesn't move a company forward, it doesn't ship. No buzzwords. No fluff. Just systems that run.
              </p>
            </div>
          </div>

          <div className="relative mt-24 p-12 glass-panel rounded-[2rem] border border-white/5 bg-white/[0.02]">
            <Quote className="absolute top-8 left-8 w-6 h-6 text-white/20 rotate-180" />
            <blockquote className="font-heading text-3xl md:text-4xl font-normal text-white/90 italic leading-relaxed">
              "This was built for people who know what they're doing."
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  )
}
