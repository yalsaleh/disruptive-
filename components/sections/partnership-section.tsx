"use client"

import Link from "next/link"
import {
  IconArrowUpRight,
  IconInstagram,
  IconNetwork,
  IconWhatsApp,
} from "@/components/ui/brand-icons"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const CHANNELS = [
  {
    name: "WhatsApp",
    role: "Support, sales, and ops in the inbox people already open daily.",
    icon: IconWhatsApp,
  },
  {
    name: "Instagram",
    role: "Turn DMs and comments into qualified conversations, automatically.",
    icon: IconInstagram,
  },
  {
    name: "Facebook",
    role: "Meet demand on Messenger with the same agentic workflows.",
    icon: IconNetwork,
  },
]

const STATS = [
  { value: "2.5B+", label: "WhatsApp users reached" },
  { value: "Native", label: "Meta channel deploy" },
  { value: "1 agent", label: "Across 3 surfaces" },
  { value: "AI Octopus", label: "Official partnership" },
]

export function PartnershipSection() {
  return (
    <section id="about" className="bg-[#2a3128] px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal
          direction="wipe"
          className="mb-16 grid gap-8 md:grid-cols-12 md:items-end"
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-bright md:col-span-3 md:self-start">
            02 / Distribution
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white md:col-span-6 md:text-6xl">
            The interface
            <br />
            is already open.
          </h2>
          <div className="md:col-span-3">
            <p className="font-body text-base leading-relaxed text-white/70">
              One agentic system, deployed inside the conversations your customers already use.
            </p>
            <Link href="#start" className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white">
              Explore the partnership
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid border-y border-white/20 md:grid-cols-12">
          <ScrollReveal direction="left" className="flex min-h-[360px] flex-col justify-between border-b border-white/20 py-8 md:col-span-4 md:min-h-[520px] md:border-b-0 md:border-r md:py-12 md:pr-12">
            <p className="max-w-[14rem] text-sm leading-relaxed text-white/65">
              Native reach, without forcing customers into another portal, dashboard, or app.
            </p>
            <div>
              <p className="font-display text-[8rem] font-semibold leading-[0.72] tracking-[-0.08em] text-brand-blue-bright md:text-[11rem]">
                3
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                channels · one operating layer
              </p>
            </div>
          </ScrollReveal>

          <div className="md:col-span-8 md:pl-12">
            {CHANNELS.map((channel, i) => {
              const Icon = channel.icon
              return (
                <ScrollReveal key={channel.name} delay={i * 0.08} amount={0.12}>
                  <article className="group grid gap-5 border-b border-white/20 py-8 md:grid-cols-12 md:items-center md:py-10">
                    <div className="flex items-center gap-4 md:col-span-4">
                      <Icon className="h-6 w-6 text-brand-blue-bright" />
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                        {channel.name}
                      </h3>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-white/70 md:col-span-6">
                      {channel.role}
                    </p>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-blue-bright md:col-span-2 md:text-right">
                      Native
                    </p>
                  </article>
                </ScrollReveal>
              )
            })}

            <ScrollReveal delay={0.22} className="grid grid-cols-2 gap-y-8 py-9 md:grid-cols-4 md:py-11">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 max-w-[8rem] font-body text-[11px] leading-snug text-white/55">
                    {stat.label}
                  </p>
                  </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
