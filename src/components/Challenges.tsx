import { motion } from 'framer-motion'
import { Timer, WifiOff, Layers } from 'lucide-react'

const challenges = [
  {
    icon: Timer,
    problem: 'Latency',
    solution: 'Geographic node clustering',
    body: 'Consumer nodes introduce variable latency compared to data centers. CCNT solves this by clustering nearby nodes into regional pools, so jobs are routed to the geographically closest available compute — keeping median response times under 200ms.',
    color: 'text-red-400',
    iconBg: 'bg-red-500/10',
    border: 'border-red-500/20',
    badgeBg: 'bg-red-500/10',
    badgeText: 'text-red-400',
    solutionColor: 'text-emerald-400',
  },
  {
    icon: WifiOff,
    problem: 'Node Dropout',
    solution: 'Hot standbys + heartbeat monitoring',
    body: 'Consumer devices go offline unexpectedly — laptops close, connections drop. CCNT\'s coordination server runs continuous heartbeat checks and maintains hot-standby nodes pre-loaded with model shards, ready to take over within milliseconds.',
    color: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    badgeBg: 'bg-orange-500/10',
    badgeText: 'text-orange-400',
    solutionColor: 'text-emerald-400',
  },
  {
    icon: Layers,
    problem: 'Shard Pre-loading',
    solution: 'Predictive model pre-loading',
    body: 'Large AI models must be distributed across multiple nodes as shards. Cold-loading shards per request would be too slow. CCNT uses usage pattern analysis to predictively pre-load model shards onto likely-to-be-needed nodes before requests arrive.',
    color: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    badgeBg: 'bg-yellow-500/10',
    badgeText: 'text-yellow-400',
    solutionColor: 'text-emerald-400',
  },
]

export default function Challenges() {
  return (
    <section id="challenges" className="relative py-24 overflow-hidden">
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
          <span className="section-label mb-4 inline-flex">Engineering Challenges</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Hard problems.
            <br />
            <span className="text-gradient">Real solutions.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Building a consumer compute network isn&apos;t simple. Here&apos;s how we&apos;ve engineered
            our way through the most critical challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((c, i) => (
            <motion.div
              key={c.problem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`glass rounded-2xl p-7 border ${c.border} group hover:bg-white/[0.02] transition-all duration-300`}
            >
              {/* Problem badge */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center`}>
                  <c.icon size={20} className={c.color} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Challenge</div>
                  <div className={`text-sm font-bold ${c.color}`}>{c.problem}</div>
                </div>
              </div>

              {/* Solution badge */}
              <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg bg-emerald-500/8 border border-emerald-500/15 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400">Solved: {c.solution}</span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
