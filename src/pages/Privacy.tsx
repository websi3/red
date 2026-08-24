import PageHeader from '../components/PageHeader'

export default function Privacy() {
  return (
    <>
      <PageHeader title="Privacy Policy" description="How we handle your information." />
      <section className="py-16 bg-cyber-dark">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-cyber-gray space-y-4">
          <p>This Privacy Policy explains how Pentestx Security collects, uses, and protects your personal information when you use our website.</p>
          <h3 className="text-white font-bold text-lg">Information We Collect</h3>
          <p>We may collect personal information such as your name, email address, company name, and contact details when you fill out forms on our website.</p>
          <h3 className="text-white font-bold text-lg">How We Use Your Information</h3>
          <p>We use your information to respond to inquiries, provide services, and improve our website. We do not sell or share your personal data with third parties except as required by law.</p>
          <h3 className="text-white font-bold text-lg">Data Security</h3>
          <p>We implement reasonable security measures to protect your data, but no method of transmission over the internet is 100% secure.</p>
          <h3 className="text-white font-bold text-lg">Contact</h3>
          <p>For any privacy concerns, please contact us at nahidmiah3656@gmail.com.</p>
          <p className="text-sm mt-8">This policy is effective as of 2026.</p>
        </div>
      </section>
    </>
  )
}
