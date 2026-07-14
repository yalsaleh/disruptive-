import type { ReactNode, SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

function Base({ size = 24, children, className, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {children}
    </svg>
  )
}

/** Orbiting nodes — agentic systems */
export function IconAgent({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <circle cx="12" cy="12" r="2.5" {...stroke} />
      <circle cx="12" cy="4.5" r="1.6" {...stroke} />
      <circle cx="18.7" cy="15.8" r="1.6" {...stroke} />
      <circle cx="5.3" cy="15.8" r="1.6" {...stroke} />
      <path d="M12 7v2.4M15.9 14.3l-1.9-1.1M8.1 14.3l1.9-1.1" {...stroke} />
    </Base>
  )
}

/** Signal waves — messaging channels */
export function IconChannels({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path d="M5.5 9.5c3.2-3.5 9.8-3.5 13 0" {...stroke} />
      <path d="M7.8 12.2c2-2.2 6.4-2.2 8.4 0" {...stroke} />
      <path d="M10.2 14.8c.9-1 2.7-1 3.6 0" {...stroke} />
      <circle cx="12" cy="17.6" r="1.2" fill="currentColor" />
    </Base>
  )
}

/** Shield with check — governance */
export function IconGovern({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path
        d="M12 3.5l7 3.2v5.1c0 3.7-2.7 6.3-7 8.2-4.3-1.9-7-4.5-7-8.2V6.7l7-3.2z"
        {...stroke}
      />
      <path d="M9.2 11.6l2 2 3.8-4" {...stroke} />
    </Base>
  )
}

/** WhatsApp-inspired chat bubble and handset */
export function IconWhatsApp({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path
        d="M12 3.5a8.4 8.4 0 00-7.1 12.9L3.8 20.5l4.2-1.1A8.4 8.4 0 1012 3.5z"
        {...stroke}
      />
      <path
        d="M8.3 7.7c.3-.4.7-.5 1.1-.3l1.2.7c.4.2.5.6.4 1l-.5 1.2a7.3 7.3 0 003.2 3.2l1.2-.5c.4-.1.8 0 1 .4l.7 1.2c.2.4.1.8-.3 1.1-.6.5-1.4.7-2.2.5-3.3-.7-5.9-3.3-6.6-6.6-.2-.7.1-1.4.8-1.9z"
        {...stroke}
      />
    </Base>
  )
}

/** Rounded frame + lens — Instagram */
export function IconInstagram({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" {...stroke} />
      <circle cx="12" cy="12" r="3.4" {...stroke} />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </Base>
  )
}

/** Facebook-inspired lowercase mark */
export function IconNetwork({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path
        d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4c-.3 0-1.5-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V10H7.2v3h2.9v8h3.6z"
        fill="currentColor"
      />
    </Base>
  )
}

/** Crosshair target — discovery */
export function IconDiscover({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <circle cx="12" cy="12" r="7" {...stroke} />
      <path d="M12 5v2.5M12 16.5V19M5 12h2.5M16.5 12H19" {...stroke} />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </Base>
  )
}

/** Layered hex — agent design */
export function IconDesign({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path d="M12 3.8l6.5 3.7v7.5L12 18.7l-6.5-3.7V7.5L12 3.8z" {...stroke} />
      <path d="M12 8.2l3.4 2v3.9l-3.4 2-3.4-2V10.2l3.4-2z" {...stroke} />
    </Base>
  )
}

/** Linked panels — integration */
export function IconIntegrate({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <rect x="3.5" y="7" width="6.5" height="10" rx="2.2" {...stroke} />
      <rect x="14" y="7" width="6.5" height="10" rx="2.2" {...stroke} />
      <path d="M10 12h4" {...stroke} />
    </Base>
  )
}

/** Paper plane — launch */
export function IconLaunch({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path d="M4.2 11.2l15.6-6.5-6.5 15.6-2.2-7-6.9-2.1z" {...stroke} />
      <path d="M11.1 13.3l8.7-8.6" {...stroke} />
    </Base>
  )
}

/** Envelope — email */
export function IconMail({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="3" {...stroke} />
      <path d="M5 8l7 5.2L19 8" {...stroke} />
    </Base>
  )
}

/** External arrow */
export function IconArrowUpRight({ size, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path d="M7 17L17 7" {...stroke} />
      <path d="M9.5 7H17v7.5" {...stroke} />
    </Base>
  )
}
