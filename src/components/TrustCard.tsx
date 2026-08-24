import { LucideIcon } from 'lucide-react'

interface TrustCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function TrustCard({ icon: Icon, title, description }: TrustCardProps) {
  return (
    <div className="cyber-card p-6 flex flex-col items-start">
      <Icon className="h-8 w-8 text-cyber-red mb-3" />
      <h4 className="text-lg font-bold text-white">{title}</h4>
      <p className="text-cyber-gray text-sm mt-1">{description}</p>
    </div>
  )
}
