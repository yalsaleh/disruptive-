"use client"

import { cn } from "@/lib/utils"

type Spark = {
  top: string
  left: string
  size: number
  delay: string
  duration: string
  tone?: "blue" | "white" | "ink"
}

const DENSE: Spark[] = [
  { top: "12%", left: "8%", size: 10, delay: "0s", duration: "2.8s", tone: "blue" },
  { top: "18%", left: "78%", size: 14, delay: "0.4s", duration: "3.2s", tone: "white" },
  { top: "28%", left: "92%", size: 8, delay: "1.1s", duration: "2.4s", tone: "blue" },
  { top: "42%", left: "6%", size: 12, delay: "0.7s", duration: "3.6s", tone: "white" },
  { top: "55%", left: "88%", size: 16, delay: "0.2s", duration: "2.9s", tone: "blue" },
  { top: "68%", left: "14%", size: 9, delay: "1.5s", duration: "3.1s", tone: "white" },
  { top: "76%", left: "72%", size: 11, delay: "0.9s", duration: "2.6s", tone: "blue" },
  { top: "84%", left: "48%", size: 8, delay: "1.8s", duration: "3.4s", tone: "white" },
  { top: "22%", left: "42%", size: 7, delay: "2.1s", duration: "2.2s", tone: "blue" },
  { top: "48%", left: "58%", size: 10, delay: "0.5s", duration: "3s", tone: "white" },
  { top: "8%", left: "55%", size: 6, delay: "1.3s", duration: "2.5s", tone: "blue" },
  { top: "90%", left: "22%", size: 9, delay: "0.6s", duration: "2.7s", tone: "white" },
]

const LIGHT: Spark[] = [
  { top: "16%", left: "14%", size: 6, delay: "0.2s", duration: "3.2s", tone: "blue" },
  { top: "22%", left: "88%", size: 7, delay: "1.0s", duration: "3.6s", tone: "white" },
  { top: "78%", left: "12%", size: 5, delay: "1.4s", duration: "3s", tone: "blue" },
  { top: "82%", left: "84%", size: 6, delay: "0.6s", duration: "3.4s", tone: "white" },
]

function SparkIcon({ size, tone = "blue" }: { size: number; tone?: Spark["tone"] }) {
  const fill =
    tone === "white"
      ? "rgba(255,255,255,0.95)"
      : tone === "ink"
        ? "rgba(16,18,18,0.55)"
        : "rgba(107,157,184,0.95)"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="block opacity-80 drop-shadow-[0_0_4px_rgba(107,157,184,0.35)]"
    >
      <path
        d="M12 2L13.2 9.2L20 12L13.2 14.8L12 22L10.8 14.8L4 12L10.8 9.2L12 2Z"
        fill={fill}
      />
    </svg>
  )
}

export function GlassSparks({
  density = "dense",
  className,
}: {
  density?: "dense" | "light"
  className?: string
}) {
  const sparks = density === "dense" ? DENSE : LIGHT

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-[2] overflow-hidden", className)}
      aria-hidden
    >
      {sparks.map((spark, i) => (
        <span
          key={i}
          className="spark-twinkle absolute"
          style={{
            top: spark.top,
            left: spark.left,
            animationDelay: spark.delay,
            animationDuration: spark.duration,
          }}
        >
          <SparkIcon size={spark.size} tone={spark.tone} />
        </span>
      ))}
      <span className="glass-shimmer absolute inset-0" />
    </div>
  )
}
