import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-cyber-red/20 to-cyber-dark border-y border-cyber-border">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Zap className="h-8 w-8 text-cyber-red" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Need a security assessment for your website or application?
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Send us a message today →
            </Link>
            <div className="text-sm text-cyber-gray">
              Secure Your Business. <span className="text-cyber-red font-semibold">Before Attackers Do.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
