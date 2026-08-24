import PageHeader from '../components/PageHeader'

export default function Quote() {
  return (
    <>
      <PageHeader title="Request a Free Quote" description="Tell us about your project and get a customized security testing quote." />
      <section className="py-16 bg-cyber-dark">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyber-gray">Full Name *</label>
                <input type="text" id="name" required className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyber-gray">Email *</label>
                <input type="email" id="email" required className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red" />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-cyber-gray">Company</label>
              <input type="text" id="company" className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red" />
            </div>
            <div>
              <label htmlFor="target" className="block text-sm font-medium text-cyber-gray">Target URL / IP</label>
              <input type="text" id="target" placeholder="e.g., example.com, 192.168.1.0/24" className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red" />
            </div>
            <div>
              <label htmlFor="targetType" className="block text-sm font-medium text-cyber-gray">Target Type</label>
              <select id="targetType" className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red">
                <option value="">Select target type</option>
                <option value="web">Web Application</option>
                <option value="api">API</option>
                <option value="mobile">Mobile App</option>
                <option value="network">Network</option>
                <option value="cloud">Cloud Infrastructure</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="scope" className="block text-sm font-medium text-cyber-gray">Scope (optional)</label>
              <input type="text" id="scope" placeholder="e.g., /admin, specific subdomains" className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red" />
            </div>
            <div>
              <label htmlFor="appCount" className="block text-sm font-medium text-cyber-gray">Number of Applications</label>
              <input type="number" id="appCount" className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red" />
            </div>
            <div>
              <label htmlFor="testType" className="block text-sm font-medium text-cyber-gray">Preferred Testing Type</label>
              <select id="testType" className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red">
                <option value="">Select testing type</option>
                <option value="blackbox">Black Box (no prior knowledge)</option>
                <option value="whitebox">White Box (full access)</option>
                <option value="greybox">Grey Box (partial access)</option>
                <option value="compliance">Compliance-focused</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cyber-gray">Additional Details</label>
              <textarea id="message" rows={4} className="mt-1 block w-full bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:ring-cyber-red focus:border-cyber-red"></textarea>
            </div>
            <div className="flex items-start space-x-3">
              <input type="checkbox" id="authorized" className="mt-1 h-4 w-4 text-cyber-red focus:ring-cyber-red border-cyber-border rounded" />
              <label htmlFor="authorized" className="text-sm text-cyber-gray">
                I confirm that I am authorized to request security testing for the target provided.
              </label>
            </div>
            <button type="submit" className="btn-primary w-full md:w-auto px-8 py-3">
              Request Quote
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
