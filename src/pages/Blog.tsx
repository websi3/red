import PageHeader from '../components/PageHeader'

const blogPosts = [
  {
    title: 'Understanding the OWASP Top 10',
    excerpt: 'A brief overview of the most critical web application security risks.',
    date: '2026-08-20',
    link: '#',
  },
  {
    title: 'Why API Security Matters',
    excerpt: 'Common API vulnerabilities and how to test for them.',
    date: '2026-08-15',
    link: '#',
  },
]

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" description="Articles and insights on cybersecurity and penetration testing." />
      <section className="py-16 bg-cyber-dark">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {blogPosts.map((post) => (
            <div key={post.title} className="cyber-card p-6 mb-6">
              <h3 className="text-2xl font-bold text-white">{post.title}</h3>
              <p className="text-cyber-gray text-sm mt-1">{post.date}</p>
              <p className="text-cyber-gray mt-3">{post.excerpt}</p>
              <a href={post.link} className="inline-block mt-3 text-cyber-red hover:underline">Read More →</a>
            </div>
          ))}
          <div className="text-center text-cyber-gray text-sm mt-8">
            <p>More articles coming soon.</p>
          </div>
        </div>
      </section>
    </>
  )
}
