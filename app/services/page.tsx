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

        <section className="px-5 pb-24 pt-10 md:px-8 md:pb-32 md:pt-16">
          <div className="mx-auto max-w-[1280px]">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-fog transition-colors hover:text-brand-ink md:mb-14"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16 max-w-2xl md:mb-24"
            >
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
                Our companies
              </p>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
                Services we{" "}
                <span className="font-serif-accent italic text-brand-blue">own.</span>
              </h1>
              <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-brand-fog md:text-lg">
                Products and brands built under disruptive technologies. More coming soon.
              </p>
            </motion.div>

            <div className="grid gap-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-24">
              {SERVICES.map((service, i) => (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col items-center text-center"
                >
                  {service.href ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative mb-8 block h-40 w-full max-w-[300px] transition-transform duration-500 ease-out group-hover:-translate-y-1 md:mb-10 md:h-48 md:max-w-[340px]"
                      aria-label={`Visit ${service.name}`}
                    >
                      <Image
                        src={service.logo}
                        alt={service.name}
                        fill
                        unoptimized
                        priority={i < 3}
                        sizes="(max-width: 768px) 300px, 340px"
                        className="object-contain object-center"
                      />
                    </a>
                  ) : (
                    <div className="relative mb-8 h-40 w-full max-w-[300px] transition-transform duration-500 ease-out group-hover:-translate-y-1 md:mb-10 md:h-48 md:max-w-[340px]">
                      <Image
                        src={service.logo}
                        alt={service.name}
                        fill
                        unoptimized
                        priority={i < 3}
                        sizes="(max-width: 768px) 300px, 340px"
                        className="object-contain object-center"
                      />
                    </div>
                  )}

                  <div className="mb-3 flex items-center justify-center gap-2.5">
                    {service.href ? (
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-2xl font-semibold tracking-tight text-brand-ink transition-colors hover:text-brand-ink/70"
                      >
                        {service.name}
                      </a>
                    ) : (
                      <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-ink">
                        {service.name}
                      </h2>
                    )}
                    <span
                      className="font-body text-[10px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: service.accent }}
                    >
                      {service.status === "live" ? "Live" : "Soon"}
                    </span>
                  </div>

                  <p className="font-serif-accent text-lg italic text-brand-sage">
                    {service.tagline}
                  </p>
                  <p className="mt-4 max-w-[280px] font-body text-sm leading-relaxed text-brand-fog md:max-w-[300px] md:text-[15px]">
                    {service.description}
                  </p>

                  {service.href ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-ink/70 transition-colors hover:text-brand-ink"
                    >
                      Visit
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </motion.article>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-20 border-t border-brand-ink/10 pt-10 text-center font-body text-sm text-brand-fog/75 md:mt-28"
            >
              More services coming soon.
            </motion.p>
          </div>
        </section>

        <FooterSection />
      </div>
    </main>
  )
}
