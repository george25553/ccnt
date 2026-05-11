import { motion } from 'framer-motion'
import { Cpu, Coins, Brain, Network, LucideIcon } from 'lucide-react'

interface Pillar {
  icon: LucideIcon
  color: 'cyan' | 'blue' | 'purple' | 'green'
  step: string
  title: string
  body: string
}

const pillars: Pillar[] = [
  {
    icon: Cpu,
    color: 'cyan',
    step: '01',
    title: 'Contribute Idle GPU Power',
    body: "Install the CCNT miner on any modern laptop or PC. It runs silently in the background, contributing spare GPU cycles you're not using.",
  },
  {
    icon: Coins,
    color: 'blue',
    step: '02',
    title: 'Earn CCNT Tokens',
    body: 'For every verified compute job your device completes, you earn CCNT utility tokens — proportional to the work contributed.',
  },
  {
    icon: Brain,
    color: 'purple',
    step: '03',
    title: 'Spend Tokens on AI',
    body: 'Use your CCNT tokens to send prompts, run models, and access AI responses — at costs far below centralized cloud providers.',
  },
  {
    icon: Network,
    color: 'green',
    step: '04',
    title: 'CCNT Coordinates Everything',
    body: 'Our hybrid architecture uses a fast centralized coordination layer to route jobs intelligently across a decentralized physical compute network.',
  },
]

const colorMap: Record<
  Pillar['color'],
  { icon: string; bg: string; border: string; step: string }
> = {
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', step: 'text-cyan-500/40' },
  blue: { icon: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', step: 'text-blue-500/40' },
  purple: { icon: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', step: 'text-purple-500/40' },
  green: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', step: 'text-emerald-500/40' },
}

export default function Solution() {
  return (
    <section id="solution" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">The Solution</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            A network built by people,
            <br />
            <span className="text-gradient">for people.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            CCNT creates a self-sustaining compute economy. Contributors power the network,
            users consume it, and tokens make the whole system work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => {
            const c = colorMap[p.color]
            return (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative glass rounded-2xl p-7 border ${c.border} group hover:bg-white/[0.02] transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute top-4 right-6 text-6xl font-black ${c.step} select-none`}>
                  {p.step}
                </div>
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>
                  <p.icon size={22} className={c.icon} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-white max-w-2xl mx-auto leading-tight">
            &ldquo;Mine with your idle laptop.{' '}
            <span className="text-gradient">Spend to use AI.</span>{' '}
            Own a piece of the network.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
