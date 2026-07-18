"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SERVICES } from "@/lib/services"

export function OwnedServicesSection() {
  const primary = SERVICES[0]

  return (
    <section id="companies" className="relative flex flex-col justify-center overflow-hidden px-5 py-16 md:px-8 md:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 50% at 75% 40%, rgba(255,152,21,0.08), transparent 55%), radial-gradient(ellipse 70% 50% at 20% 80%, rgba(215,231,240,0.35), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
              Companies we own
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">
              Services with a{" "}
              <span className="font-serif-accent italic text-brand-blue">signal.</span>
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-brand-fog">
              Products built under disruptive technologies — live brands, not slideware.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-ink/70 transition-colors hover:text-brand-ink"
          >
            All services
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {primary && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/services"
              className="glass-panel group relative flex flex-col overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/55 md:flex-row md:rounded-[2rem]"
            >
              <div
                className="pointer-events-none absolute -left-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: primary.accent }}
              />
              <div className="relative z-10 flex min-h-[200px] flex-1 items-center justify-center px-8 py-10 md:min-h-[260px] md:px-12">
                <div className="relative h-36 w-full max-w-[260px] md:h-44 md:max-w-[300px]">
                  <Image
                    src={primary.logo}
                    alt={primary.name}
                    fill
                    unoptimized
                    sizes="300px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-center border-t border-white/40 px-7 py-8 md:border-l md:border-t-0 md:px-10 md:py-12">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: primary.accent }}
                  />
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-brand-fog">
                    {primary.status === "live" ? "Live" : "Soon"}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-brand-ink md:text-3xl">
                  {primary.name}
                </h3>
                <p className="mt-1 font-serif-accent text-lg italic text-brand-blue">
                  {primary.tagline}
                </p>
                <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-brand-fog md:text-[15px]">
                  {primary.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-ink/65 transition-colors group-hover:text-brand-ink">
                  View services
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
