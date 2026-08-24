interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-cyber-card border-b border-cyber-border py-16 pt-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">{title}</h1>
        {description && <p className="mt-4 text-cyber-gray max-w-2xl mx-auto">{description}</p>}
      </div>
    </div>
  )
}
