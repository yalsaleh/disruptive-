"use client"

import Link from "next/link"
import {
  IconAgent,
  IconArrowUpRight,
  IconChannels,
  IconGovern,
} from "@/components/ui/brand-icons"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const SOLUTIONS = [
  {
    icon: IconAgent,
    title: "Agentic systems",
    tag: "Autonomous execution",
    desc: "Digital employees that understand context, reason through problems, and run full workflows on their own.",
    href: "#start",
  },
  {
    icon: IconChannels,
    title: "Meta & WhatsApp",
    tag: "Native distribution",
    desc: "Enterprise AI on WhatsApp, Instagram, and Facebook — native channels through our AI Octopus partnership.",
    href: "#about",
  },
  {
    icon: IconGovern,
    title: "Governed by design",
    tag: "Responsible by default",
    desc: "Guardrails, auditability, and human oversight built into every deployment from day one.",
    href: "#beliefs",
  },
]

export function FeaturesSection() {
  const [primary, ...secondary] = SOLUTIONS
  const PrimaryIcon = primary.icon

  return (
    <section id="solutions" className="border-t border-brand-sage/20 bg-brand-paper px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal direction="wipe" className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-sage md:col-span-3 md:self-start">
            01 / Solutions
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-brand-ink md:col-span-6 md:text-6xl">
            Less software.
            <br />
            <span className="text-brand-sage">More capability.</span>
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-brand-fog md:col-span-3">
            Focused automation designed around how your operation actually runs.
          </p>
        </ScrollReveal>

        <div className="grid border-y border-brand-sage/20 md:grid-cols-12">
          <ScrollReveal direction="left" className="md:col-span-7 md:border-r md:border-brand-sage/20">
            <Link
              href={primary.href}
              className="group relative flex min-h-[460px] flex-col justify-between overflow-hidden bg-brand-sage-soft/55 p-7 md:p-12"
            >
              <div
                className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-brand-blue-bright"
                style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%)" }}
              />
              <div className="relative flex items-center justify-between">
                <PrimaryIcon className="h-9 w-9 text-brand-ink" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-sage">
                  {primary.tag}
                </p>
              </div>
              <div className="relative max-w-xl">
                <h3 className="font-display text-4xl font-semibold leading-none tracking-[-0.04em] text-brand-ink md:text-5xl">
                  {primary.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-brand-fog">
                  {primary.desc}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink">
                  Explore the system
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </ScrollReveal>

          <div className="flex flex-col md:col-span-5">
            {secondary.map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal
                  key={item.title}
                  delay={0.08 + i * 0.08}
                  className="flex-1 border-b border-brand-sage/20 last:border-b-0"
                >
                  <Link
                    href={item.href}
                    className="group flex h-full min-h-[215px] flex-col justify-between p-7 transition-colors hover:bg-brand-wash md:p-9"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-7 w-7 text-brand-ink" />
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-sage">
                        {item.tag}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-brand-ink md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-fog">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
