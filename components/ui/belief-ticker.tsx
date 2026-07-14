"use client"

const WORDS = [
  "Agentic systems",
  "WhatsApp-native",
  "Governed by design",
  "Quiet power",
  "Outcomes over hype",
  "Meta partnership",
  "Ships, doesn’t slide",
  "Digital employees",
  "AI Octopus",
]

export function BeliefTicker({ tone = "light" }: { tone?: "light" | "ink" }) {
  const loop = [...WORDS, ...WORDS]
  const isInk = tone === "ink"

  return (
    <div
      className={`relative overflow-hidden border-y py-4 ${
        isInk
          ? "border-[#9db4be] bg-[#b9ced7]"
          : "border-[#c7d6dc] bg-[#e4edf1]"
      }`}
      aria-hidden
    >
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent md:w-28 ${
          isInk ? "from-[#b9ced7]" : "from-[#e4edf1]"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent md:w-28 ${
          isInk ? "from-[#b9ced7]" : "from-[#e4edf1]"
        }`}
      />
      <div className="animate-ticker flex w-max items-center gap-10 whitespace-nowrap will-change-transform">
        {loop.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-flex items-center gap-10">
            <span className="font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-[#31454e] md:text-[13px]">
              {word}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#617d89]" />
          </span>
        ))}
      </div>
    </div>
  )
}
