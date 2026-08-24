import {
  ShieldCheck,
  Globe,
  Smartphone,
  Cloud,
  Search,
  Code2,
} from 'lucide-react'

const services = [
  { icon: ShieldCheck, label: 'Ethical Hacking' },
  { icon: Globe, label: 'Web Security Testing' },
  { icon: Smartphone, label: 'Mobile App Security' },
  { icon: Cloud, label: 'Cloud Security Assessment' },
  { icon: Search, label: 'Vulnerability Assessment' },
  { icon: Code2, label: 'Security Audit & Code Review' },
]

export default function ServiceStrip() {
  return (
    <section className="py-6 bg-cyber-dark border-y border-cyber-border">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {services.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-sm font-medium text-cyber-gray hover:text-white transition-colors">
              <item.icon className="h-5 w-5 text-cyber-red" />
              <span>{item.label}</span>
              {index < services.length - 1 && (
                <span className="hidden sm:inline-block w-px h-6 bg-cyber-border"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
