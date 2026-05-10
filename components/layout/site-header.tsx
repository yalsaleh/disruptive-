import Link from "next/link"
import Image from "next/image"
import { Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300">
      <div className="flex items-center justify-between max-w-[1920px] mx-auto">
        
        {/* Left: Logo & Brand */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-14 h-14">
            <Image 
              src="/images/disruptive-logo.png" 
              alt="Disruptive Technologies" 
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
          <span className="font-heading text-xl font-medium text-white tracking-wide">
            Disruptive Technologies
          </span>
        </Link>
        
        {/* Center: Navigation - Glass Pill */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <nav className="glass-panel rounded-full px-8 py-2.5 flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-white/70 bg-black/10 border-white/10 backdrop-blur-xl shadow-lg">
            {["How It Works", "Use Cases", "Pricing", "Research Feed"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full opacity-50" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Actions (Search/Profile placeholders to match reference vibe) */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full">
            <User className="w-5 h-5" />
          </Button>
        </div>

      </div>
    </header>
  )
}
