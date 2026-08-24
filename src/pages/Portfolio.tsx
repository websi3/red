import PageHeader from '../components/PageHeader'

const caseStudies = [
  {
    title: 'Sample Web Application Assessment',
    description: 'Demonstration project: OWASP Top 10 testing on a demo e-commerce platform.',
    findings: ['SQL Injection', 'XSS', 'Broken Authentication'],
    status: 'Resolved',
  },
  {
    title: 'Sample API Security Review',
    description: 'Demonstration project: Testing a mock REST API for authentication and authorization flaws.',
    findings: ['IDOR', 'Mass Assignment', 'Rate Limiting Bypass'],
    status: 'Resolved',
  },
]

export default function Portfolio() {
  return (
    <>
      <PageHeader title="Portfolio" description="Example projects and case studies (demonstration only)." />
      <section className="py-16 bg-cyber-dark">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white">{study.title}</h3>
                <p className="text-cyber-gray text-sm mt-2">{study.description}</p>
                <div className="mt-4">
                  <span className="text-cyber-red font-semibold">Findings:</span>
                  <ul className="list-disc list-inside text-cyber-gray text-sm mt-1">
                    {study.findings.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 text-sm">
                  <span className="text-cyber-gray">Status: </span>
                  <span className="text-green-400">{study.status}</span>
                </div>
                <div className="mt-4 text-xs text-cyber-muted italic">
                  * This is a demonstration case study. Actual client projects are confidential.
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-cyber-gray text-sm">
            <p>All projects are anonymized. For real case studies, please contact us.</p>
          </div>
        </div>
      </section>
    </>
  )
}
