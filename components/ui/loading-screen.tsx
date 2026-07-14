"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type LoadingScreenProps = {
  onComplete?: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"mark" | "text" | "exit" | "done">("mark")

  useEffect(() => {
    const { body, documentElement } = document
    const prevBodyOverflow = body.style.overflow
    const prevScrollBehavior = documentElement.style.scrollBehavior

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    documentElement.style.scrollBehavior = "auto"
    body.style.overflow = "hidden"
    window.scrollTo(0, 0)

    const unlock = () => {
      body.style.overflow = prevBodyOverflow
      documentElement.style.scrollBehavior = prevScrollBehavior
      window.scrollTo(0, 0)
    }

    const textTimer = window.setTimeout(() => setPhase("text"), 500)
    const exitTimer = window.setTimeout(() => setPhase("exit"), 1900)
    const doneTimer = window.setTimeout(() => {
      unlock()
      setPhase("done")
      onComplete?.()
    }, 2500)

    return () => {
      window.clearTimeout(textTimer)
      window.clearTimeout(exitTimer)
      window.clearTimeout(doneTimer)
      unlock()
    }
  }, [onComplete])

  if (phase === "done") return null

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "exit" ? 0 : 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex max-w-[92vw] items-center gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <Image
              src="/brand/mark-loader.svg"
              alt=""
              width={1024}
              height={1024}
              priority
              unoptimized
              className="logo-sage h-28 w-28 object-contain object-center md:h-40 md:w-40 lg:h-48 lg:w-48"
            />
          </motion.div>

          <div
            className="min-w-0 overflow-hidden transition-[max-width]"
            style={{
              maxWidth: phase === "mark" ? 0 : "42rem",
              transitionDuration: "1100ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <motion.p
              initial={false}
              animate={
                phase === "mark"
                  ? { opacity: 0, x: -14, letterSpacing: "0.025em" }
                  : { opacity: 1, x: 0, letterSpacing: "-0.025em" }
              }
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="whitespace-nowrap px-0.5 pb-1 pt-0.5 font-display text-2xl font-semibold leading-[1.25] text-brand-ink md:text-4xl lg:text-5xl"
            >
              disruptive technologies
            </motion.p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
