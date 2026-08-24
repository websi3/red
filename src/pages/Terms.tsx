import PageHeader from '../components/PageHeader'

export default function Terms() {
  return (
    <>
      <PageHeader title="Terms of Service" description="Terms and conditions for using our services." />
      <section className="py-16 bg-cyber-dark">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-cyber-gray space-y-4">
          <p>By using the Pentestx Security website and services, you agree to the following terms.</p>
          <h3 className="text-white font-bold text-lg">Services</h3>
          <p>We provide authorized penetration testing and security assessment services. All testing requires explicit written authorization from the system owner.</p>
          <h3 className="text-white font-bold text-lg">Limitation of Liability</h3>
          <p>Our services are provided "as is." We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
          <h3 className="text-white font-bold text-lg">Governing Law</h3>
          <p>These terms are governed by the laws of Bangladesh.</p>
          <h3 className="text-white font-bold text-lg">Changes to Terms</h3>
          <p>We may update these terms from time to time. Continued use of the website constitutes acceptance of the updated terms.</p>
          <p className="text-sm mt-8">Last updated: 2026.</p>
        </div>
      </section>
    </>
  )
}
