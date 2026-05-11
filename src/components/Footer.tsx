import { Cpu } from 'lucide-react'

const links = [
  { label: 'About', href: '#problem' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Waitlist', href: '#waitlist' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400">
                <Cpu size={14} className="text-white" />
              </div>
              <span className="text-lg font-bold text-white">CCNT</span>
            </div>
            <p className="text-xs text-slate-500">Coordinated Compute Network Technology</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8" />

        {/* Disclaimer + copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
            <strong className="text-slate-500">Disclaimer:</strong> CCNT tokens are intended for utility access
            to AI compute on the CCNT network. This page does not constitute investment advice, a securities
            offering, or any guarantee of financial return. Token utility is strictly limited to network compute access.
          </p>
          <p className="text-xs text-slate-600 whitespace-nowrap">
            © {new Date().getFullYear()} CCNT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
