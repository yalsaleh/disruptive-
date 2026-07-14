export type Service = {
  id: string
  name: string
  tagline: string
  description: string
  logo: string
  accent: string
  href?: string
  status: "live" | "soon"
}

/** Add new owned products here — they appear on /services automatically. */
export const SERVICES: Service[] = [
  {
    id: "yalla-sim",
    name: "Yalla SIM",
    tagline: "Connectivity, simplified.",
    description:
      "Our eSIM and connectivity brand — built for seamless mobile access with a signal-strong identity.",
    logo: "/brand/yalla-sim.png",
    accent: "#FF9815",
    status: "live",
  },
]
