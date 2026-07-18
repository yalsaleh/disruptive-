"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/layout/site-header"
import { FooterSection } from "@/components/sections/footer-section"
import { SERVICES } from "@/lib/services"

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-brand-paper text-brand-ink">
      <div className="relative z-10">
        <SiteHeader />

        <section className="px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
          <div className="mx-auto max-w-[1280px]">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-fog transition-colors hover:text-brand-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 max-w-2xl md:mb-16"
            >
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
                Our companies
              </p>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
                Services we{" "}
                <span className="font-serif-accent italic text-brand-blue">own.</span>
              </h1>
              <p className="mt-4 font-body text-base leading-relaxed text-brand-fog md:text-lg">
                Products and brands built under disruptive technologies. More coming soon.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, i) => (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.55 }}
                  className="group relative flex h-full flex-col border border-brand-ink/12 bg-white p-8 transition-colors duration-300 hover:border-brand-ink/25 md:p-9"
                >
                  <div className="mb-8 flex h-24 shrink-0 items-center justify-center border-b border-brand-ink/10 pb-8">
                    <Image
                      src={service.logo}
                      alt={service.name}
                      width={service.logoWidth}
                      height={service.logoHeight}
                      unoptimized
                      priority={i < 3}
                      className="object-contain"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxHeight: "4rem",
                        maxWidth: "12.5rem",
                      }}
                    />
                  </div>

                  <div className="mb-3 flex flex-wrap items-center gap-2.5">
                    <h2 className="font-display text-xl font-semibold tracking-tight text-brand-ink">
                      {service.name}
                    </h2>
                    <span
                      className="px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wider text-white"
                      style={{ background: service.accent }}
                    >
                      {service.status === "live" ? "Live" : "Soon"}
                    </span>
                  </div>

                  <p className="font-body text-sm font-medium text-brand-fog">{service.tagline}</p>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-brand-fog/90">
                    {service.description}
                  </p>

                  {service.href ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glass mt-8 w-fit px-5 py-2.5 text-sm"
                    >
                      Visit
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <p className="mt-8 font-body text-xs font-medium text-brand-fog/70">
                      Part of the disruptive family
                    </p>
                  )}
                </motion.article>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.55 }}
                className="flex min-h-[280px] flex-col items-center justify-center border border-dashed border-brand-sage/30 bg-transparent px-6 text-center"
              >
                <p className="font-display text-lg font-semibold tracking-tight text-brand-ink/50">
                  More soon
                </p>
                <p className="mt-2 max-w-[200px] font-body text-sm text-brand-fog/70">
                  New services will show up here as we launch them.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </main>
  )
}
