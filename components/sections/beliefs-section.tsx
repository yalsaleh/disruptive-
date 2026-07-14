"use client"

import Link from "next/link"
import { IconArrowUpRight } from "@/components/ui/brand-icons"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const BELIEFS = [
  {
    label: "Core belief",
    title: "Quietly powerful.",
    body: "If a system needs explaining, it isn’t finished. We build tools that feel inevitable once they’re live — reliability over novelty, clarity over complexity.",
  },
  {
    label: "How we ship",
    title: "Outcomes, not theatre.",
    body: "No flashy dashboards for their own sake. No revolutionary claims that don’t ship. If it doesn’t move a company forward, it doesn’t leave the lab.",
  },
]

export function BeliefsSection() {
  return (
    <section id="beliefs" className="bg-brand-sage-soft/45 px-5 py-28 md:px-8 md:py-44">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal direction="wipe" className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-sage md:col-span-3">
            03 / Principles
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-brand-ink md:col-span-9 md:text-7xl">
            Good technology
            <br />
            <span className="font-serif-accent font-normal italic text-brand-sage">disappears</span>{" "}
            into the work.
          </h2>
        </ScrollReveal>

        <div className="grid border-y border-brand-sage/20 md:grid-cols-12">
          <ScrollReveal direction="left" className="py-10 md:col-span-8 md:min-h-[440px] md:border-r md:border-brand-sage/20 md:py-14 md:pr-14">
            <article className="flex h-full flex-col justify-between">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-brand-sage">
                {BELIEFS[0].label}
              </p>
              <div>
                <h3 className="max-w-2xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-brand-ink md:text-7xl">
                  Quietly
                  <br />
                  powerful.
                </h3>
                <p className="mt-7 max-w-xl font-body text-base leading-relaxed text-brand-fog">
                  {BELIEFS[0].body}
                </p>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1} className="py-10 md:col-span-4 md:py-14 md:pl-12">
            <article className="flex h-full flex-col justify-between">
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-brand-sage">
                  {BELIEFS[1].label}
                </p>
                <h3 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-ink">
                  {BELIEFS[1].title}
                </h3>
                <p className="mt-5 font-body text-sm leading-relaxed text-brand-fog md:text-base">
                  {BELIEFS[1].body}
                </p>
              </div>
              <div className="mt-12 flex items-end gap-3">
                <span className="h-2 w-2 bg-brand-sage" />
                <span className="h-4 w-4 bg-brand-sage/55" />
                <span className="h-7 w-7 bg-brand-sage/25" />
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="wipe" delay={0.08} className="mt-16 border-b border-brand-sage/20 pb-12 md:mt-24 md:grid md:grid-cols-12 md:items-end md:pb-16">
          <div className="md:col-span-9">
            <p className="max-w-4xl font-display text-3xl font-semibold leading-[1.04] tracking-[-0.04em] text-brand-ink md:text-5xl">
              Make work lighter.
              <br />
              <span className="text-brand-sage">Keep the standard high.</span>
            </p>
          </div>

          <div className="mt-10 flex flex-col items-start gap-6 md:col-span-3 md:mt-0 md:items-end">
            <p className="max-w-xs text-sm leading-relaxed text-brand-fog md:text-right">
              Less repetition, with accuracy, accountability, and human judgment intact.
            </p>
            <Link href="#start" className="btn-glass-dark shrink-0 px-6 py-3.5 text-sm">
              Talk to us
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
