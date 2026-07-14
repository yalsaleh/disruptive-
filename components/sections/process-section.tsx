"use client"

import {
  IconDesign,
  IconDiscover,
  IconIntegrate,
  IconLaunch,
} from "@/components/ui/brand-icons"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const STEPS = [
  {
    id: "01",
    title: "Discovery",
    desc: "Map bottlenecks and design AI workflows that actually solve them.",
    detail: "We sit with your ops, spot the friction, and define what an agent should own end-to-end.",
    icon: IconDiscover,
  },
  {
    id: "02",
    title: "Agent design",
    desc: "Configure reasoning, tools, and guardrails for your business rules.",
    detail: "Tools, memory, and escalation paths — shaped around how your team already works.",
    icon: IconDesign,
  },
  {
    id: "03",
    title: "Integration",
    desc: "Connect to WhatsApp, Meta, or internal systems via AI Octopus.",
    detail: "Native channel hooks and system wiring so the agent lives where work already happens.",
    icon: IconIntegrate,
  },
  {
    id: "04",
    title: "Launch",
    desc: "Deploy, monitor, and iterate as your operations grow.",
    detail: "Ship carefully, watch the signals, and tighten the loop as volume scales.",
    icon: IconLaunch,
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative flex flex-col justify-center border-t border-brand-sage/20 bg-brand-paper px-5 py-24 md:px-8 md:py-36"
    >
      <div className="relative mx-auto grid w-full max-w-[1280px] gap-14 lg:grid-cols-12 lg:items-start lg:gap-20">
        <ScrollReveal direction="left" className="lg:sticky lg:top-32 lg:col-span-4">
          <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-fog">
            04 / Process
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-brand-ink md:text-5xl lg:text-6xl">
            Four moves.
            <br />
            <span className="text-brand-sage">One clear path.</span>
          </h2>
          <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-brand-fog md:text-base">
            Every stage has an outcome. Nothing is hidden behind process theatre.
          </p>

          <div className="mt-10 flex items-center gap-4 border-t border-brand-sage/20 pt-5">
            <span className="h-2 w-2 bg-brand-sage" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-fog">
              Discovery to live operation
            </p>
          </div>
        </ScrollReveal>

        <div className="border-t border-brand-sage/25 lg:col-span-8">
          {STEPS.map((item, i) => {
            const StepIcon = item.icon
            return (
              <ScrollReveal key={item.id} delay={i * 0.06} amount={0.12}>
                <article className="group grid gap-6 border-b border-brand-sage/25 py-8 transition-colors hover:bg-brand-wash/60 md:grid-cols-12 md:gap-5 md:px-5 md:py-10">
                  <div className="flex items-start justify-between md:col-span-2">
                    <span className="font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-brand-sage/55 md:text-5xl">
                      {item.id}
                    </span>
                    <StepIcon className="h-5 w-5 text-brand-sage md:hidden" />
                  </div>

                  <div className="md:col-span-4">
                    <StepIcon className="mb-5 hidden h-5 w-5 text-brand-sage md:block" />
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-brand-ink md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-fog">
                      {item.desc}
                    </p>
                  </div>

                  <div className="md:col-span-6 md:pt-10">
                    <p className="max-w-lg text-sm leading-relaxed text-brand-fog md:text-base">
                      {item.detail}
                    </p>
                    <div className="mt-6 h-px w-8 bg-brand-sage transition-all duration-300 group-hover:w-16" />
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
