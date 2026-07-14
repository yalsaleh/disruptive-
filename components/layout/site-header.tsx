"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#beliefs", label: "Beliefs" },
  { href: "/#process", label: "Process" },
  { href: "/#start", label: "Start" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-ink/15 bg-[#f3f3ed]/95 backdrop-blur-md">
      <div className="relative mx-auto grid h-16 max-w-[1280px] grid-cols-12 items-center px-5 md:h-[4.5rem] md:px-8">
        <Link href="/" className="relative z-10 col-span-7 flex shrink-0 items-center md:col-span-3" aria-label="disruptive technologies">
          <Image
            src="/brand/logo-header.svg"
            alt="disruptive technologies"
            width={940}
            height={271}
            priority
            className="logo-sage h-10 w-auto object-contain object-left md:h-12"
          />
        </Link>

        <nav className="col-span-6 hidden items-center justify-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-2 font-body text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-fog transition-colors hover:text-brand-ink"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand-ink transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="relative z-10 col-span-3 hidden justify-end md:flex">
          <Link
            href="/#start"
            className="inline-flex items-center gap-3 border-l border-brand-ink/20 py-2 pl-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-ink"
          >
            Start a project
            <span aria-hidden>↗</span>
          </Link>
        </div>

        <button
          type="button"
          className="relative z-10 col-span-5 ml-auto inline-flex h-11 w-11 items-center justify-center border border-brand-ink/20 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-b border-brand-ink/15 bg-[#f3f3ed] md:hidden"
          >
            <div className="mx-auto flex max-w-[1280px] flex-col px-5 py-4">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-brand-ink/10 py-4 text-sm font-semibold uppercase tracking-[0.08em]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#start"
                onClick={() => setOpen(false)}
                className="mt-4 bg-brand-ink px-5 py-4 text-center text-sm font-semibold text-white"
              >
                Get started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
