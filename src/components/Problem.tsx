import { motion } from 'framer-motion'
import { Lock, DollarSign, Server, Cpu, LucideIcon } from 'lucide-react'

interface ProblemItem {
  icon: LucideIcon
  color: 'red' | 'orange' | 'yellow' | 'blue'
  title: string
  body: string
}

const problems: ProblemItem[] = [
  {
    icon: Lock,
    color: 'red',
    title: 'Monopolized by Big Tech',
    body: 'Amazon, Google, and Microsoft control virtually all accessible AI compute infrastructure — deciding who gets access and at what price.',
  },
  {
    icon: DollarSign,
    color: 'orange',
    title: 'Prohibitively Expensive',
    body: 'GPU cloud costs are out of reach for most builders, researchers, and individuals. Inference and training costs continue to climb.',
  },
  {
    icon: Server,
    color: 'yellow',
    title: 'Dangerously Centralized',
    body: "A handful of data centers handle the world's AI workloads. Outages, policy changes, or geopolitical events can instantly cut off access.",
  },
  {
    icon: Cpu,
    color: 'blue',
    title: 'Billions of GPUs Sit Idle',
    body: 'Over a billion consumer devices with capable GPUs sit mostly idle every day — a massive untapped compute resource going to waste.',
  },
]

const colorMap: Record<
  ProblemItem['color'],
  { icon: string; bg: string; border: string; glow: string }
> = {
  red: { icon: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', glow: 'group-hover:shadow-red-500/10' },
  orange: { icon: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20', glow: 'group-hover:shadow-orange-500/10' },
  yellow: { icon: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', glow: 'group-hover:shadow-yellow-500/10' },
  blue: { icon: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', glow: 'group-hover:shadow-blue-500/10' },
}

function ProblemCard({ icon: Icon, color, title, body, index }: ProblemItem & { index: number }) {
  const c = colorMap[color]
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group glass rounded-2xl p-6 border ${c.border} hover:bg-white/[0.03] hover:shadow-xl ${c.glow} transition-all duration-300`}
    >
      <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
        <Icon size={20} className={c.icon} />
      </div>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
    </motion.div>
  )
}

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">The Problem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            AI compute is broken.
            <br />
            <span className="text-gradient">Here&apos;s why.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            The current AI infrastructure model concentrates power in the hands of a few corporations,
            leaving the rest of us dependent on their pricing, policies, and availability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <ProblemCard key={p.title} {...p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 relative h-px"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 glass rounded-full">
            <span className="text-xs text-slate-400 font-medium">CCNT changes this</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
