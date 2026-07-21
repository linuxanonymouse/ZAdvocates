export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '60vh', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="section-title">Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Last updated: July 2026</p>
      
      <div style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>
          At ZAdvocates, we are committed to protecting the privacy and security of the personal information of our clients and website visitors. This Privacy Policy describes how we collect, use, and protect your information.
        </p>
        <h3 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--accent-gold)' }}>1. Information We Collect</h3>
        <p style={{ marginBottom: '16px' }}>
          We may collect personal information such as your name, email address, and phone number when you voluntarily submit it through our contact forms or consultation requests.
        </p>
        <h3 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--accent-gold)' }}>2. How We Use Information</h3>
        <p style={{ marginBottom: '16px' }}>
          Your information is used solely for the purpose of responding to your inquiries, scheduling consultations, and providing legal services. We do not sell or share your data with third parties for marketing purposes.
        </p>
      </div>
    </div>
  );
}
