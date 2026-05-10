import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background py-32 border-t border-white/5 relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1920px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h3 className="font-heading text-3xl font-normal text-white tracking-tight">Disruptive Technologies</h3>
            <p className="text-white/50 max-w-sm leading-relaxed font-light text-base">
              Systems that think. Technology that works quietly.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">Explore</h4>
            <nav className="flex flex-col gap-4 text-white/60 font-light text-sm">
              <Link href="#systems" className="hover:text-white transition-colors">Systems</Link>
              <Link href="#manifesto" className="hover:text-white transition-colors">Manifesto</Link>
              <Link href="#protocol" className="hover:text-white transition-colors">Protocol</Link>
              <Link href="/login" className="hover:text-white transition-colors">Client Access</Link>
            </nav>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">Legal</h4>
            <nav className="flex flex-col gap-4 text-white/60 font-light text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span className="pt-4 opacity-30 text-xs">© 2025 Disruptive Technologies Inc.</span>
            </nav>
          </div>

        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-white/30 font-light uppercase tracking-wider">
          <span>San Francisco, CA</span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
            System Status: Operational
          </span>
        </div>
      </div>
    </footer>
  )
}
