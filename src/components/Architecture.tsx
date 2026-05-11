import { motion } from 'framer-motion'
import { Server, Database, GitBranch, Wallet, Monitor, Globe, LucideIcon } from 'lucide-react'

interface ArchNode {
  icon: LucideIcon
  title: string
  subtitle: string
  body: string
  color: string
  iconBg: string
  border: string
  layer: 'coordination' | 'compute'
}

const nodes: ArchNode[] = [
  {
    icon: Server,
    title: 'Coordination Server',
    subtitle: 'Centralized layer',
    body: 'High-performance central hub that orchestrates all job routing, node health checks, and network state. Optimized for sub-50ms response times.',
    color: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    layer: 'coordination',
  },
  {
    icon: Database,
    title: 'Node Registry',
    subtitle: 'Capability index',
    body: 'Real-time registry of all active miner nodes, their GPU specs, geographic location, current load, and reliability scores.',
    color: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    layer: 'coordination',
  },
  {
    icon: GitBranch,
    title: 'Job Router',
    subtitle: 'Intelligent dispatch',
    body: 'Routes inference jobs to optimal node clusters based on latency, capacity, and model compatibility. Handles shard distribution for large models.',
    color: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    layer: 'coordination',
  },
  {
    icon: Wallet,
    title: 'Token Ledger',
    subtitle: 'Compute economy',
    body: 'Tracks all CCNT token balances, job completions, and compute credits. Verifies work proofs before issuing token rewards to miners.',
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    layer: 'coordination',
  },
  {
    icon: Monitor,
    title: 'Consumer Miner Client',
    subtitle: 'Decentralized compute',
    body: 'Lightweight desktop app that manages GPU allocation, communicates with the coordination server, and executes AI inference shards securely.',
    color: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    layer: 'compute',
  },
  {
    icon: Globe,
    title: 'User Interface',
    subtitle: 'AI access layer',
    body: 'Web and API interface where users spend CCNT tokens to send prompts and receive AI responses, transparently routed through the network.',
    color: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    layer: 'compute',
  },
]

export default function Architecture() {
  const coordNodes = nodes.filter((n) => n.layer === 'coordination')
  const computeNodes = nodes.filter((n) => n.layer === 'compute')

  return (
    <section id="architecture" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">Technical Architecture</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Hybrid by design.
            <br />
            <span className="text-gradient">Fast by necessity.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            CCNT uses centralized coordination for speed and reliability, while keeping
            compute decentralized across thousands of consumer devices.
          </p>
        </motion.div>

        {/* Architecture legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-slate-300 font-medium">Centralized Coordination Layer</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300 font-medium">Decentralized Compute Layer</span>
          </div>
        </motion.div>

        {/* Coordination layer */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-4 flex items-center gap-3">
            <div className="flex-1 h-px bg-blue-500/20" />
            Coordination Layer
            <div className="flex-1 h-px bg-blue-500/20" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coordNodes.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`glass rounded-xl p-5 border ${n.border} group hover:bg-white/[0.03] transition-all duration-300`}
              >
                <div className={`w-9 h-9 rounded-lg ${n.iconBg} flex items-center justify-center mb-3`}>
                  <n.icon size={18} className={n.color} />
                </div>
                <div className={`text-xs font-semibold ${n.color} mb-1`}>{n.subtitle}</div>
                <h4 className="text-sm font-bold text-white mb-2">{n.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{n.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrow connector */}
        <div className="flex justify-center items-center gap-4 py-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-700/40" />
          <div className="flex flex-col items-center gap-1">
            <div className="text-xs text-slate-600 font-mono">API ↕ WebSocket</div>
            <div className="w-px h-8 bg-gradient-to-b from-blue-500/40 to-emerald-500/40" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-700/40" />
        </div>

        {/* Compute layer */}
        <div>
          <div className="text-xs font-semibold text-emerald-400 tracking-widest uppercase mb-4 flex items-center gap-3">
            <div className="flex-1 h-px bg-emerald-500/20" />
            Compute Layer
            <div className="flex-1 h-px bg-emerald-500/20" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {computeNodes.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`glass rounded-xl p-6 border ${n.border} group hover:bg-white/[0.03] transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${n.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <n.icon size={20} className={n.color} />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold ${n.color} mb-1`}>{n.subtitle}</div>
                    <h4 className="text-sm font-bold text-white mb-2">{n.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{n.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
