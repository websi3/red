import PageHeader from '../components/PageHeader'
import { Shield, Target, Eye, FileCheck } from 'lucide-react'

export default function About() {
  return (
    <>
      <PageHeader title="About Pentestx Security" description="Authorized penetration testing and cybersecurity assessment services." />
      <section className="py-16 bg-cyber-dark">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8 text-cyber-gray">
            <p>
              Pentestx Security provides authorized penetration testing and cybersecurity assessment services
              designed to help organizations identify and remediate security weaknesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="cyber-card p-6">
                <Shield className="h-8 w-8 text-cyber-red mb-4" />
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
                <p className="text-sm mt-2">To help businesses secure their digital assets through professional, ethical, and authorized security testing.</p>
              </div>
              <div className="cyber-card p-6">
                <Target className="h-8 w-8 text-cyber-red mb-4" />
                <h3 className="text-xl font-bold text-white">Our Approach</h3>
                <p className="text-sm mt-2">We combine manual testing expertise with industry-standard tools to deliver actionable findings.</p>
              </div>
              <div className="cyber-card p-6">
                <Eye className="h-8 w-8 text-cyber-red mb-4" />
                <h3 className="text-xl font-bold text-white">Why Security Testing Matters</h3>
                <p className="text-sm mt-2">Proactive testing helps you find and fix vulnerabilities before they can be exploited.</p>
              </div>
              <div className="cyber-card p-6">
                <FileCheck className="h-8 w-8 text-cyber-red mb-4" />
                <h3 className="text-xl font-bold text-white">Responsible & Authorized Testing</h3>
                <p className="text-sm mt-2">We only test systems with explicit permission and treat all findings with strict confidentiality.</p>
              </div>
            </div>
            <div className="mt-8 p-6 cyber-card">
              <p className="text-sm">
                <span className="text-cyber-red font-semibold">Note:</span> All information on this page is for demonstration purposes.
                Actual company details, certifications, and project history will be added upon request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
