import { motion } from 'framer-motion'
import { ArrowRight, Play, Cpu, Network, Zap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

interface NodeProps {
  label: string
  color: 'cyan' | 'purple'
  left: string
  top: string
  delay: number
}

function NetworkNode({ label, color, left, top, delay }: NodeProps) {
  return (
    <motion.div
      className="absolute glass rounded-lg px-2.5 py-1.5 flex items-center gap-1.5"
      style={{ left, top, transform: 'translate(-50%, -50%)' }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3.5, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Cpu size={11} className={color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'} />
      <span className="text-xs font-mono text-slate-300 whitespace-nowrap">{label}</span>
      <div
        className={`w-1.5 h-1.5 rounded-full animate-pulse-slow ${
          color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'
        }`}
      />
    </motion.div>
  )
}

const NODES: NodeProps[] = [
  { label: 'Miner A', color: 'cyan', left: '12%', top: '18%', delay: 0.5 },
  { label: 'Miner B', color: 'cyan', left: '68%', top: '14%', delay: 0.8 },
  { label: 'Miner C', color: 'cyan', left: '8%', top: '58%', delay: 1.1 },
  { label: 'Miner D', color: 'cyan', left: '72%', top: '60%', delay: 1.4 },
  { label: 'Miner E', color: 'cyan', left: '52%', top: '74%', delay: 1.7 },
  { label: 'AI User', color: 'purple', left: '86%', top: '38%', delay: 0.6 },
]

const CONNECTIONS = [
  [100, 80, 200, 160],
  [200, 160, 320, 100],
  [200, 160, 280, 240],
  [320, 100, 380, 200],
  [280, 240, 380, 200],
  [100, 80, 60, 200],
  [60, 200, 160, 280],
  [280, 240, 360, 300],
]

function ArchDiagram() {
  return (
    <div className="relative w-full h-80 md:h-96">
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-purple-950/30" />
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
        {CONNECTIONS.map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={`${((x1 ?? 0) / 460) * 100}%`}
            y1={`${((y1 ?? 0) / 380) * 100}%`}
            x2={`${((x2 ?? 0) / 460) * 100}%`}
            y2={`${((y2 ?? 0) / 380) * 100}%`}
            stroke="rgba(59,130,246,0.25)"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.4, 1] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute glass-blue rounded-xl p-3 flex flex-col items-center gap-1.5 glow-blue"
        style={{ left: '38%', top: '32%', transform: 'translate(-50%, -50%)' }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Network size={18} className="text-blue-400" />
        <span className="text-xs font-mono text-blue-300 whitespace-nowrap">Coord Server</span>
      </motion.div>

      {NODES.map((n) => (
        <NetworkNode key={n.label} {...n} />
      ))}

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <Zap size={11} className="text-emerald-400" />
        <span className="text-xs font-mono text-emerald-400">CCNT tokens flowing</span>
      </motion.div>
    </div>
  )
}

const STATS = [
  { value: '24,563', label: 'Active nodes' },
  { value: '78%', label: 'Avg GPU utilization' },
  { value: '< 200ms', label: 'Median latency' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-[#020817] to-[#020817]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-600/6 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6"
          >
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Now in closed beta
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6"
          >
            <span className="text-gradient-white">The Consumer</span>
            <br />
            <span className="text-gradient">Compute Network</span>
            <br />
            <span className="text-gradient-white">for AI</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg"
          >
            CCNT turns idle laptops and PCs into a coordinated AI compute network.
            Mine tokens with unused GPU power, then spend them to access AI.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#waitlist" className="btn-primary gap-2">
              Join Waitlist
              <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn-secondary gap-2">
              <Play size={14} />
              See How It Works
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex flex-wrap gap-8"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <ArchDiagram />

          <motion.div
            className="absolute -bottom-6 -left-4 glass rounded-xl px-4 py-3 flex items-center gap-3"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Zap size={14} className="text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">1,245 CCNT</div>
              <div className="text-xs text-slate-500">Earned this week</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-700" />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
