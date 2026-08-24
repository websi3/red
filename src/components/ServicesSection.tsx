import ServiceCard from './ServiceCard'
import TrustCard from './TrustCard'
import {
  Globe,
  Code2,
  Smartphone,
  Search,
  ClipboardCheck,
  ShieldCheck,
  Bug,
  FileCheck,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Application\nPenetration Testing',
    description: 'Find and exploit web vulnerabilities',
    link: '/services/web-pentesting',
  },
  {
    icon: Code2,
    title: 'API Security\nTesting',
    description: 'Secure your APIs from common threats',
    link: '/services/api-security',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application\nSecurity Testing',
    description: 'Identify risks in mobile apps',
    link: '/services/mobile-security',
  },
  {
    icon: Search,
    title: 'Vulnerability\nAssessment',
    description: 'Discover and prioritize security weaknesses',
    link: '/services/vulnerability-assessment',
  },
  {
    icon: ClipboardCheck,
    title: 'Security Audit &\nCode Review',
    description: 'Ensure secure code and compliance',
    link: '/services/security-audit',
  },
]

const trustCards = [
  {
    icon: ShieldCheck,
    title: 'Authorized',
    description: 'Confidential & Authorized Testing',
  },
  {
    icon: Bug,
    title: 'Manual Testing',
    description: 'Human-led security assessment',
  },
  {
    icon: FileCheck,
    title: 'Actionable Reports',
    description: 'Clear findings & remediation guidance',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-cyber-dark" id="services">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label">— OUR SERVICES —</p>
          <h2 className="section-heading">Comprehensive Security Testing Solutions</h2>
          <p className="text-cyber-gray mt-4">Find risks. Reduce threats. Build a stronger security posture.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: 5 service cards in 2-3 layout */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          {/* Right: 3 trust cards stacked */}
          <div className="lg:col-span-2 space-y-6">
            {trustCards.map((card) => (
              <TrustCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
