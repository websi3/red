import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Globe, Code2, Smartphone, Search, ClipboardCheck, Shield } from 'lucide-react'

const serviceData: Record<string, { icon: any; title: string; description: string; scope: string[]; deliverables: string[] }> = {
  'web-pentesting': {
    icon: Globe,
    title: 'Web Application Penetration Testing',
    description: 'Find and exploit web vulnerabilities through authorized manual and automated testing.',
    scope: ['Authentication', 'Authorization', 'Input Validation', 'Session Management', 'Business Logic', 'API Endpoints'],
    deliverables: ['Executive Summary', 'Technical Findings', 'Severity Ratings', 'Exploitation Evidence', 'Reproduction Steps', 'Remediation Guidance'],
  },
  'api-security': {
    icon: Code2,
    title: 'API Security Testing',
    description: 'Secure your APIs from common threats including authentication, authorization, and input validation flaws.',
    scope: ['Authentication', 'Authorization', 'Input Validation', 'Business Logic', 'Rate Limiting', 'Data Exposure'],
    deliverables: ['Executive Summary', 'Technical Findings', 'Severity Ratings', 'Exploitation Evidence', 'Reproduction Steps', 'Remediation Guidance'],
  },
  'mobile-security': {
    icon: Smartphone,
    title: 'Mobile Application Security Testing',
    description: 'Identify risks in mobile apps including insecure data storage, weak encryption, and reverse engineering.',
    scope: ['Data Storage', 'Network Communication', 'Authentication', 'Authorization', 'Code Obfuscation', 'Reverse Engineering'],
    deliverables: ['Executive Summary', 'Technical Findings', 'Severity Ratings', 'Exploitation Evidence', 'Reproduction Steps', 'Remediation Guidance'],
  },
  'vulnerability-assessment': {
    icon: Search,
    title: 'Vulnerability Assessment',
    description: 'Discover and prioritize security weaknesses across your systems using a combination of automated scanning and manual validation.',
    scope: ['Network Scanning', 'Service Enumeration', 'Configuration Review', 'Patch Management', 'Risk Prioritization'],
    deliverables: ['Executive Summary', 'Technical Findings', 'Severity Ratings', 'Exploitation Evidence', 'Reproduction Steps', 'Remediation Guidance'],
  },
  'security-audit': {
    icon: ClipboardCheck,
    title: 'Security Audit & Code Review',
    description: 'Ensure secure code and compliance with a thorough review of application source code and security controls.',
    scope: ['Source Code Review', 'Configuration Review', 'Access Controls', 'Encryption Practices', 'Logging & Monitoring'],
    deliverables: ['Executive Summary', 'Technical Findings', 'Severity Ratings', 'Code Snippets', 'Reproduction Steps', 'Remediation Guidance'],
  },
}

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const service = serviceData[serviceId || '']

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-cyber-gray">Service not found.</p>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <>
      <PageHeader title={service.title} description={service.description} />
      <section className="py-16 bg-cyber-dark">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="cyber-card p-8 space-y-8">
            <div className="flex items-center space-x-4">
              <Icon className="h-12 w-12 text-cyber-red" />
              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">What We Test</h3>
              <ul className="list-disc list-inside text-cyber-gray space-y-1">
                {service.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Deliverables</h3>
              <ul className="list-disc list-inside text-cyber-gray space-y-1">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-cyber-border">
              <Link to="/contact" className="btn-primary inline-block">
                Request This Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
