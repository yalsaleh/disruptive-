export function MarqueeSection() {
  return (
    <div className="w-full bg-black py-16 md:py-24 overflow-hidden flex items-center relative z-10">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* We repeat the text multiple times to ensure a seamless infinite loop */}
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className="text-5xl md:text-9xl font-bold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.15)] mx-4 md:mx-8 hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.8)] md:hover:[-webkit-text-stroke:2px_rgba(255,255,255,0.8)] transition-all duration-500 cursor-default"
          >
            NOT JUST CHATBOTS • REAL AGENTIC SYSTEMS • 
          </span>
        ))}
      </div>
    </div>
  );
}
