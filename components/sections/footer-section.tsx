import Image from "next/image"

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#f5f6f2] px-5 pb-8 pt-12 md:px-8 md:pb-10 md:pt-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 border-t border-brand-sage/25 pt-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Image
              src="/brand/logo-header.svg"
              alt="disruptive technologies"
              width={940}
              height={271}
              className="logo-sage mb-5 h-14 w-auto object-contain object-left md:h-16"
            />
            <p className="max-w-sm font-body text-sm leading-relaxed text-brand-fog">
              Building real agentic AI systems. Meta Business Partner via AI Octopus.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-fog">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {[
                ["/services", "Services"],
                ["#solutions", "Solutions"],
                ["#beliefs", "Beliefs"],
                ["#process", "Process"],
                ["#start", "Start"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-medium text-brand-ink transition-colors hover:text-[#526f7b]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-fog">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:aziz@disruptv.tech" className="text-sm text-brand-ink/80 transition-colors hover:text-brand-ink">
                aziz@disruptv.tech
              </a>
              <a href="mailto:f.burhama@disruptv.tech" className="text-sm text-brand-ink/80 transition-colors hover:text-brand-ink">
                f.burhama@disruptv.tech
              </a>
              <a
                href="https://wa.me/96566363363"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-ink/80 transition-colors hover:text-brand-ink"
              >
                +965 6636 3363
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-brand-sage/20 pt-5">
          <p className="font-body text-xs text-brand-fog">
            © {new Date().getFullYear()} disruptive technologies
          </p>
          <p className="font-body text-xs text-brand-fog">Kuwait · Built for real operations</p>
        </div>
      </div>
    </footer>
  )
}
