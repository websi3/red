import { Link } from 'react-router-dom'
import { Shield, Lock, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cyber-dark pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,0,0,0.15),transparent_60%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-red/5 rounded-full blur-3xl"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <p className="section-label">PROFESSIONAL PENETRATION TESTING & CYBERSECURITY SERVICES</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              PROTECT WHAT <br />
              <span className="text-cyber-red">MATTERS MOST</span>
            </h1>
            <p className="text-xl text-cyber-gray font-medium">
              Identify vulnerabilities. Fix weaknesses. Strengthen your security.
            </p>
            <p className="text-cyber-gray max-w-lg">
              We help businesses find and fix security weaknesses before attackers can exploit them.
              Professional, ethical and authorized security testing services for a safer tomorrow.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/services" className="btn-primary flex items-center gap-2">
                <span className="text-lg">◉</span> Our Services
              </Link>
              <Link to="/contact" className="btn-secondary flex items-center gap-2">
                ✉ Contact Us
              </Link>
            </div>
          </div>

          {/* Right visual – replace with your hero-cybersecurity.png */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-card to-black rounded-2xl border border-cyber-border overflow-hidden">
                {/* HUD-like decoration */}
                <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-cyber-red/40 rounded-tl-lg"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-cyber-red/40 rounded-br-lg"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-cyber-red/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-cyber-red/30 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-cyber-red/60" />
                </div>
                <div className="absolute top-10 right-10 text-cyber-red/40 animate-pulse">
                  <Lock className="w-12 h-12" />
                </div>
                <div className="absolute bottom-10 left-10 text-cyber-red/30 animate-float">
                  <Globe className="w-16 h-16" />
                </div>
                <div className="absolute bottom-1/3 left-8 space-y-1 opacity-30">
                  <div className="w-16 h-0.5 bg-cyber-red"></div>
                  <div className="w-24 h-0.5 bg-cyber-red"></div>
                  <div className="w-20 h-0.5 bg-cyber-red"></div>
                </div>
                <div className="absolute top-1/3 right-8 space-y-1 opacity-30">
                  <div className="w-12 h-0.5 bg-cyber-red"></div>
                  <div className="w-20 h-0.5 bg-cyber-red"></div>
                  <div className="w-16 h-0.5 bg-cyber-red"></div>
                </div>
                {/* Placeholder – replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-cyber-muted text-sm">
                  <span className="bg-cyber-card/80 px-4 py-2 rounded border border-cyber-border">
                    hero-cybersecurity.png
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
