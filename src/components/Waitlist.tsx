import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, User, Mail, ChevronDown } from 'lucide-react'

type Role = '' | 'miner' | 'ai_user' | 'investor' | 'developer' | 'other'

interface FormState {
  name: string
  email: string
  role: Role
}

const roles: { value: Role; label: string }[] = [
  { value: 'miner', label: 'Miner — I want to contribute GPU power' },
  { value: 'ai_user', label: 'AI User — I want to access AI at cost' },
  { value: 'investor', label: 'Investor — I want to learn more' },
  { value: 'developer', label: 'Developer — I want API / SDK access' },
  { value: 'other', label: 'Other' },
]

export default function Waitlist() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', role: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.name.trim()) { setError('Please enter your name.'); return }
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) { setError('Please enter a valid email.'); return }
    if (!form.role) { setError('Please select your role.'); return }

    setLoading(true)
    try {
      const sheetUrl = import.meta.env.VITE_SHEET_URL as string | undefined
      if (sheetUrl) {
        // no-cors: data is sent, response is opaque (can't be read cross-origin)
        await fetch(sheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            role: form.role,
            timestamp: new Date().toISOString(),
          }),
        })
      }
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/8 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">Join the Waitlist</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Be first in the network.
          </h2>
          <p className="text-slate-400 leading-relaxed">
            CCNT is in closed beta. Join the waitlist for early access — whether you want
            to mine, use AI, or build on top of the network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-8 border border-white/8"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center py-8 gap-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center"
                >
                  <CheckCircle2 size={32} className="text-emerald-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">You&apos;re on the list!</h3>
                  <p className="text-slate-400 text-sm">
                    Welcome to CCNT, {form.name.split(' ')[0]}. We&apos;ll reach out at{' '}
                    <span className="text-blue-400">{form.email}</span> when early access opens.
                  </p>
                </div>
                <div className="mt-2 px-4 py-2 glass rounded-full text-xs text-slate-400">
                  Expect an email within 48 hours
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-[#0d1526] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-[#0d1526] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    I&apos;m joining as a...
                  </label>
                  <div className="relative">
                    <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                    <select
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value as Role })}
                      className="w-full bg-[#0d1526] border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#0d1526] text-slate-400">
                        Select your role
                      </option>
                      {roles.map((r) => (
                        <option key={r.value} value={r.value} className="bg-[#0d1526] text-white">
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-red-400 text-center"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full gap-2 justify-center py-3.5 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      Request Early Access
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-600">
                  No spam. Early access only. Unsubscribe anytime.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
