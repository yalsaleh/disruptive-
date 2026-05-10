import { Server, Workflow, Database, Shield, Cpu, Network } from "lucide-react"

const capabilities = [
  {
    icon: Server,
    title: "Custom AI Systems",
    description: "Bespoke systems designed around your company's real operations. Not consumer chatbots. Not generic dashboards.",
    details: ["Internal AI Tools", "Decision Support", "Data Intelligence Layers"]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "We identify friction inside organizations and remove it using AI + software. The goal is less noise, fewer steps.",
    details: ["Process Automation", "System Connection", "Human-in-the-loop Reduction"]
  },
  {
    icon: Database,
    title: "AI Integration",
    description: "We don't just 'add AI' — we integrate it correctly. Connecting AI to real data and ensuring reliability.",
    details: ["Data Pipeline Integration", "Legacy System Bridging", "Secure Deployment"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Systems built for the real world require real security. We prioritize data protection and access control.",
    details: ["SOC2 Compliance Ready", "On-premise Deployment", "Role-based Access"]
  },
  {
    icon: Cpu,
    title: "Operational AI",
    description: "Not chatbots for show. We build operational intelligence that runs quietly in the background.",
    details: ["Autonomous Agents", "Predictive Maintenance", "Resource Optimization"]
  },
  {
    icon: Network,
    title: "Infrastructure",
    description: "Robust architecture designed for long-term use, not just demos. Scalable, maintainable, and reliable.",
    details: ["Cloud Native", "Edge Computing", "Real-time Processing"]
  }
]

export function CapabilitiesSection() {
  return (
    <section id="systems" className="py-32 bg-background relative overflow-hidden">
      {/* Ambient background glow - Neutral/Warm */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1920px] mx-auto px-8 relative z-10">
        <div className="mb-24 text-left max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 block">Core Capabilities</span>
          <h2 className="font-heading text-5xl md:text-6xl font-normal text-white mb-8 drop-shadow-sm leading-tight">
            System Architecture
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl">
            We deliver working AI systems, not prototypes. If it doesn't operate in production, it doesn't count.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, i) => (
            <div 
              key={i} 
              className="group glass-panel p-10 rounded-3xl hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-white/20 flex flex-col items-start"
            >
              <div className="mb-8 inline-flex p-3 rounded-xl bg-white/5 text-white/80 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                <item.icon className="w-6 h-6 stroke-[1]" />
              </div>

              <h3 className="font-heading text-2xl font-normal text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-white/60 text-base leading-relaxed mb-8 font-light">
                {item.description}
              </p>

              <ul className="space-y-3 mt-auto w-full pt-6 border-t border-white/5">
                {item.details.map((detail, j) => (
                  <li key={j} className="flex items-center text-xs font-medium uppercase tracking-wider text-white/30 group-hover:text-white/50 transition-colors">
                    <span className="w-1 h-1 bg-white/40 mr-3 rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
