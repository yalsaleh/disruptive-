"use client"

import { IconArrowUpRight, IconMail, IconWhatsApp } from "@/components/ui/brand-icons"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CtaSection() {
  return (
    <section id="start" className="bg-[#1b1e1a] px-5 py-24 text-white md:px-8 md:py-36">
      <ScrollReveal direction="wipe" className="mx-auto max-w-[1280px]">
        <div className="flex items-center justify-between border-b border-white/20 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-bright">
            05 / Start
          </p>
          <p className="hidden text-xs font-medium text-white/55 sm:block">
            Replies within one working day
          </p>
        </div>

        <h2 className="max-w-6xl py-12 font-display text-5xl font-semibold leading-[0.88] tracking-[-0.06em] text-white md:py-20 md:text-7xl lg:text-[7.2rem]">
          Bring us the work
          <br />
          <span className="font-serif-accent font-normal italic text-brand-blue-bright">
            that should not exist.
          </span>
        </h2>

        <div className="grid gap-10 border-t border-white/20 pt-9 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-white/65 md:text-lg">
              We&apos;ll map the right system, its guardrails, and a practical path to production.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-white/45">
              <span>Agent scoping</span>
              <span>Responsible deployment</span>
            </div>
          </div>

          <div className="md:col-span-2" />

          <div className="border-t border-white/25 md:col-span-5">
            <a
              href="https://wa.me/96566363363"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/25 py-5 text-white"
            >
              <span className="flex items-center gap-4">
                <IconWhatsApp className="h-5 w-5" />
                <span>
                  <span className="block font-display text-lg font-semibold">WhatsApp</span>
                  <span className="block text-xs text-white/45">Fastest way to start</span>
                </span>
              </span>
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="mailto:aziz@disruptv.tech"
              className="group flex items-center justify-between border-b border-white/25 py-5 text-white"
            >
              <span className="flex items-center gap-4">
                <IconMail className="h-5 w-5" />
                <span>
                  <span className="block font-display text-lg font-semibold">Email</span>
                  <span className="block text-xs text-white/45">aziz@disruptv.tech</span>
                </span>
              </span>
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
