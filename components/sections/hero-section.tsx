"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

const EASE = [0.16, 1, 0.3, 1] as const

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay: number, from: "left" | "right" = "left") => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          clipPath: from === "left" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
        },
    animate: { opacity: 1, clipPath: "inset(0 0 0 0)" },
    transition: reduceMotion ? { duration: 0 } : { delay, duration: 0.9, ease: EASE },
  })

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[#f3f3ed] md:min-h-[calc(100svh-4.5rem)]">
      <div className="relative mx-auto flex min-h-[inherit] max-w-[1280px] flex-col px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-12 items-end border-b border-brand-ink/20 pb-4"
        >
          <p className="col-span-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-sage">
            Agentic automation
          </p>
          <p className="col-span-5 text-right text-[11px] font-medium uppercase tracking-[0.12em] text-brand-fog">
            Designed responsibly / Built to work
          </p>
        </motion.div>

        <div className="relative flex flex-1 flex-col justify-center py-10 md:py-12">
          <h1 className="font-display font-semibold leading-[0.82] tracking-[-0.075em] text-brand-ink">
            <motion.span
              {...reveal(0.05)}
              className="block text-[clamp(3.8rem,10.8vw,9.4rem)]"
            >
              Automate more<span className="text-brand-sage">.</span>
            </motion.span>

            <motion.span
              {...reveal(0.14, "right")}
              className="ml-[8%] block text-[clamp(3.8rem,10.8vw,9.4rem)] md:ml-[16%]"
            >
              Spend{" "}
              <span className="font-serif-accent font-normal italic tracking-[-0.045em] text-brand-sage">
                less.
              </span>
            </motion.span>

            <motion.span
              {...reveal(0.23)}
              className="ml-[2%] block text-[clamp(3.8rem,10.8vw,9.4rem)] md:ml-[5%]"
            >
              Move faster<span className="text-brand-blue-bright">.</span>
            </motion.span>
          </h1>

          <motion.div
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.34, duration: 0.8, ease: EASE }}
            className="mt-8 h-px origin-left bg-brand-ink/20"
          />
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { delay: 0.42, duration: 0.65, ease: EASE }}
          className="grid gap-8 border-t border-brand-ink/20 pt-7 md:grid-cols-12 md:items-end"
        >
          <p className="max-w-2xl text-base leading-relaxed text-brand-fog md:col-span-6 md:text-lg">
            High-quality AI systems that understand context, make decisions, and complete real
            work—without compromising trust, accuracy, or human oversight.
          </p>

          <div className="hidden md:col-span-2 md:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-sage">
              Systems / Channels / Oversight
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:col-span-4 md:justify-end">
            <Link
              href="#start"
              className="group inline-flex items-center gap-4 bg-brand-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-white"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </Link>
            <Link
              href="#solutions"
              className="group inline-flex items-center gap-3 border-b border-brand-ink/30 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink"
            >
              Explore systems
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
