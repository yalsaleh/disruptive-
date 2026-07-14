"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function MarqueeSection() {
  return (
    <section className="relative px-5 py-4 md:px-8 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="gradient-band relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] px-8 py-14 text-white md:rounded-[2rem] md:px-14 md:py-20"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 20%, rgba(215,231,240,0.35), transparent 45%)",
        }} />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "#6b9db8" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full opacity-28 blur-3xl"
          style={{ background: "#2f5a73" }}
        />

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 font-body text-sm font-medium text-white/70">
              Ready when you are
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Let&apos;s build something{" "}
              <span className="font-serif-accent italic">that ships.</span>
            </h2>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-white/65 md:text-base">
              Agentic systems, Meta-native channels, and real operational impact — mapped to how you actually operate.
            </p>
          </div>
          <Link href="#contact" className="btn-glass-light px-6 py-3.5 text-sm">
            Talk to us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
