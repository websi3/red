import PageHeader from '../components/PageHeader'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" description="Get in touch to discuss your security testing needs." />
      <section className="py-16 bg-cyber-dark">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cyber-gray">Full Name *</label>
                    <input type="text" id="name" required className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-cyber-gray">Company</label>
                    <input type="text" id="company" className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyber-gray">Email *</label>
                  <input type="email" id="email" required className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red" />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-cyber-gray">Website / Application URL</label>
                  <input type="url" id="website" className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-cyber-gray">Service Required</label>
                  <select id="service" className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red">
                    <option value="">Select a service</option>
                    <option value="web-pentesting">Web Application Penetration Testing</option>
                    <option value="api-security">API Security Testing</option>
                    <option value="mobile-security">Mobile Application Security Testing</option>
                    <option value="vulnerability-assessment">Vulnerability Assessment</option>
                    <option value="security-audit">Security Audit & Code Review</option>
                    <option value="reporting">Security Reporting & Remediation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cyber-gray">Message *</label>
                  <textarea id="message" rows={5} required className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red"></textarea>
                </div>
                <div className="text-sm text-cyber-gray">
                  <p className="mb-4">⚠️ Only submit systems that you own or have explicit authorization to have tested.</p>
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto px-8 py-3">
                  Request Security Assessment
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-cyber-red mt-0.5" />
                    <div>
                      <p className="text-cyber-gray text-sm">Email</p>
                      <p className="text-white">nahidmiah3656@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-cyber-red mt-0.5" />
                    <div>
                      <p className="text-cyber-gray text-sm">Phone</p>
                      <p className="text-white">+880 1783-481487</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-cyber-red mt-0.5" />
                    <div>
                      <p className="text-cyber-gray text-sm">Location</p>
                      <p className="text-white">Bangladesh (Remote)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cyber-card p-6">
                <h4 className="text-white font-semibold">Authorization Notice</h4>
                <p className="text-cyber-gray text-sm mt-2">
                  Only submit systems that you own or have explicit authorization to have tested.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
