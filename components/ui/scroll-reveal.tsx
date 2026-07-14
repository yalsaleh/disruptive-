"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "wipe"
  amount?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.2,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()
  const hidden =
    direction === "left"
      ? { opacity: 0, x: -14 }
      : direction === "right"
        ? { opacity: 0, x: 14 }
        : direction === "wipe"
          ? { opacity: 0, y: 8, clipPath: "inset(0 0 100% 0)" }
          : { opacity: 0, y: 12 }

  return (
    <motion.div
      initial={reduceMotion ? false : hidden}
      whileInView={{ opacity: 1, x: 0, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: false, amount, margin: "0px 0px -8% 0px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { delay, duration: 0.62, ease: [0.16, 1, 0.3, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
