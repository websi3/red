import { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  link: string
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <Link to={link} className="block h-full">
      <div className="cyber-card p-6 h-full flex flex-col hover:border-cyber-red/50 transition-all">
        <Icon className="h-10 w-10 text-cyber-red mb-4" />
        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{title}</h3>
        <p className="text-cyber-gray text-sm flex-grow">{description}</p>
        <div className="mt-4 text-cyber-red font-medium text-sm flex items-center group">
          Learn More →
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  )
}
