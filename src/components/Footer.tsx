import { Link } from 'react-router-dom'
import { Shield, Facebook, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-border py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Shield className="h-8 w-8 text-cyber-red" />
              <span className="text-white">PENTESTX</span>
              <span className="text-cyber-red">SECURITY</span>
            </Link>
            <p className="text-cyber-gray text-sm mt-2">Secure Today, Protect Tomorrow</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-cyber-gray hover:text-cyber-red transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-cyber-gray hover:text-cyber-red transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-cyber-gray hover:text-cyber-red transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-cyber-gray hover:text-cyber-red transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-cyber-gray hover:text-cyber-red transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-cyber-gray hover:text-cyber-red transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/web-pentesting" className="text-cyber-gray hover:text-cyber-red transition-colors">Web Pentesting</Link></li>
              <li><Link to="/services/api-security" className="text-cyber-gray hover:text-cyber-red transition-colors">API Security</Link></li>
              <li><Link to="/services/mobile-security" className="text-cyber-gray hover:text-cyber-red transition-colors">Mobile Security</Link></li>
              <li><Link to="/services/vulnerability-assessment" className="text-cyber-gray hover:text-cyber-red transition-colors">Vulnerability Assessment</Link></li>
              <li><Link to="/services/security-audit" className="text-cyber-gray hover:text-cyber-red transition-colors">Security Audit</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-cyber-gray hover:text-cyber-red transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-cyber-gray hover:text-cyber-red transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-cyber-gray hover:text-cyber-red transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-cyber-gray hover:text-cyber-red transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-cyber-gray hover:text-cyber-red transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-cyber-border mt-8 pt-8 text-center text-sm text-cyber-gray">
          © 2026 Pentestx Security. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
