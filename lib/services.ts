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
    logo: "/brand/yalla-sim.svg",
    accent: "#FF9815",
    status: "live",
  },
  {
    id: "mnaqsa",
    name: "Mnaqsa",
    tagline: "Tenders, found for you.",
    description:
      "Search the tenders market in one place and get timely alerts straight to WhatsApp — so you never miss an opportunity.",
    logo: "/brand/mnaqsa.svg",
    accent: "#111210",
    status: "live",
  },
  {
    id: "wathefni",
    name: "Wathefni",
    tagline: "Hiring and people, organized.",
    description:
      "Put every application on a filterable, searchable list, review hired employees, keep track of your team, and give HR the tools to run hiring with clarity.",
    logo: "/brand/wathefni.svg",
    accent: "#6B7280",
    status: "live",
  },
]
