import { motion } from 'framer-motion'
import { Cpu, ShoppingCart, Brain, Shield } from 'lucide-react'

const flows = [
  {
    icon: Cpu,
    from: 'You',
    action: 'Mine tokens',
    description: 'Contribute idle GPU power and earn CCNT tokens for every verified job.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    arrow: '→',
  },
  {
    icon: Brain,
    from: 'You',
    action: 'Spend on AI',
    description: 'Use CCNT tokens to access AI models, send prompts, and get responses.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    arrow: '→',
  },
  {
    icon: ShoppingCart,
    from: 'You',
    action: 'Acquire tokens',
    description: 'Purchase CCNT tokens to access AI compute even without mining.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    arrow: '→',
  },
  {
    icon: Shield,
    from: 'You',
    action: 'Hold for AI access',
    description: 'Reserve tokens for future AI usage — utility stored for when you need it.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    arrow: '→',
  },
]

export default function TokenEconomy() {
  return (
    <section id="tokens" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/4 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">Token Economy</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            A closed-loop{' '}
            <span className="text-gradient">compute economy.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            CCNT tokens are utility tokens for accessing AI compute — not investments.
            They power a self-sustaining loop where contributors and users both benefit.
          </p>
        </motion.div>

        {/* Economy loop visual */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {flows.map((f, i) => (
            <motion.div
              key={f.action}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`glass rounded-2xl p-6 border ${f.border} group hover:bg-white/[0.02] transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                <f.icon size={20} className={f.color} />
              </div>
              <div className={`text-xs font-bold ${f.color} mb-2 tracking-wide uppercase`}>
                {f.action}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto glass rounded-2xl p-6 border border-slate-700/50 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield size={16} className="text-slate-400" />
            <span className="text-sm font-semibold text-slate-300">Utility Token Disclosure</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            CCNT tokens are utility tokens designed exclusively for accessing AI compute on the CCNT network.
            They are not financial instruments, investment contracts, or securities. CCNT does not promise,
            guarantee, or imply any financial return, token price appreciation, or profit from holding or acquiring tokens.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
