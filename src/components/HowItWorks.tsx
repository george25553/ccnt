import { motion } from 'framer-motion'
import { Download, Zap, MessageSquare } from 'lucide-react'

interface Step {
  step: number
  icon: React.ElementType
  title: string
  subtitle: string
  body: string
  color: string
  glow: string
  border: string
  iconBg: string
}

const steps: Step[] = [
  {
    step: 1,
    icon: Download,
    title: 'Install the Miner',
    subtitle: '5-minute setup',
    body: 'Download the CCNT miner client. It integrates with your system\'s GPU scheduler and runs silently whenever your device is idle.',
    color: 'text-cyan-400',
    glow: 'glow-cyan',
    border: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/10',
  },
  {
    step: 2,
    icon: Zap,
    title: 'Earn CCNT Tokens',
    subtitle: 'Passive income from idle power',
    body: 'Your GPU processes real AI workloads during downtime. Every verified job earns you CCNT tokens, credited directly to your wallet.',
    color: 'text-blue-400',
    glow: 'glow-blue',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10',
  },
  {
    step: 3,
    icon: MessageSquare,
    title: 'Spend on AI Responses',
    subtitle: 'Access AI at network cost',
    body: 'Use your CCNT tokens to query AI models directly. No subscription, no markup — just compute at cost, powered by the network you helped build.',
    color: 'text-purple-400',
    glow: 'glow-purple',
    border: 'border-purple-500/20',
    iconBg: 'bg-purple-500/10',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Three steps to{' '}
            <span className="text-gradient">own the network.</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            Whether you want to mine, use AI, or both — CCNT is designed to be simple for everyday users.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px">
            <div className="h-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30" />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div className={`relative w-14 h-14 rounded-2xl ${s.iconBg} border ${s.border} flex items-center justify-center mb-6 ${s.glow}`}>
                <s.icon size={24} className={s.color} />
                <div className={`absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-[#020817] border ${s.border} flex items-center justify-center`}>
                  <span className={`text-xs font-bold ${s.color}`}>{s.step}</span>
                </div>
              </div>

              {/* Card */}
              <div className={`glass rounded-2xl p-6 border ${s.border} w-full hover:bg-white/[0.02] transition-all duration-300`}>
                <div className={`text-xs font-semibold ${s.color} mb-2 tracking-wide`}>{s.subtitle}</div>
                <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA inline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a href="#waitlist" className="btn-primary gap-2 mx-auto">
            Get Early Access
          </a>
        </motion.div>
      </div>
    </section>
  )
}
