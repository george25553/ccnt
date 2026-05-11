import { motion } from 'framer-motion'
import { FlaskConical, Radio, ArrowLeftRight, CreditCard, CheckCircle2 } from 'lucide-react'

interface Phase {
  phase: number
  icon: React.ElementType
  title: string
  tag: string
  status: 'active' | 'upcoming' | 'future'
  milestones: string[]
  color: string
  bg: string
  border: string
}

const phases: Phase[] = [
  {
    phase: 1,
    icon: FlaskConical,
    title: 'Closed Beta',
    tag: 'Live now',
    status: 'active',
    milestones: [
      'Invite-only miner client',
      'Coordination server v1',
      'Internal job routing',
      'Token ledger prototype',
    ],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
  },
  {
    phase: 2,
    icon: Radio,
    title: 'Open Mining',
    tag: 'Coming soon',
    status: 'upcoming',
    milestones: [
      'Public miner download',
      'Node registry v2',
      'Geographic clustering',
      'Miner dashboard & analytics',
    ],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    phase: 3,
    icon: ArrowLeftRight,
    title: 'Peer Trading',
    tag: 'Planned',
    status: 'future',
    milestones: [
      'Token transfer between users',
      'Compute marketplace',
      'Third-party API access',
      'Developer SDK',
    ],
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    phase: 4,
    icon: CreditCard,
    title: 'Real Money On-Ramp',
    tag: 'Future',
    status: 'future',
    milestones: [
      'Fiat-to-token conversion',
      'Enterprise billing',
      'SLA-backed compute tiers',
      'Global compliance framework',
    ],
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
]

const statusBadge: Record<Phase['status'], string> = {
  active: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  upcoming: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  future: 'bg-slate-700/40 text-slate-400 border border-slate-700',
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">Roadmap</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            The path to{' '}
            <span className="text-gradient">open compute.</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            We&apos;re building in phases — shipping fast, learning from the community,
            and expanding as the network grows.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-px">
            <div className="h-full bg-gradient-to-r from-emerald-500/40 via-blue-500/30 via-purple-500/20 to-pink-500/10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col"
              >
                {/* Phase icon + connector dot */}
                <div className="flex justify-center mb-6">
                  <div className={`relative w-14 h-14 rounded-2xl ${p.bg} border ${p.border} flex items-center justify-center`}>
                    <p.icon size={24} className={p.color} />
                    {p.status === 'active' && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-emerald-400/30"
                        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className={`glass rounded-2xl p-5 border ${p.border} flex-1 group hover:bg-white/[0.02] transition-all duration-300`}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Phase {p.phase}</div>
                      <h3 className={`text-base font-bold ${p.color}`}>{p.title}</h3>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${statusBadge[p.status]}`}>
                      {p.tag}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {p.milestones.map((m) => (
                      <li key={m} className="flex items-start gap-2">
                        <CheckCircle2
                          size={13}
                          className={`flex-shrink-0 mt-0.5 ${
                            p.status === 'active' ? 'text-emerald-400' : 'text-slate-600'
                          }`}
                        />
                        <span className="text-xs text-slate-400 leading-relaxed">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
