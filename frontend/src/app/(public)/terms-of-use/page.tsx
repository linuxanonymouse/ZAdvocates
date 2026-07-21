export default function TermsOfUse() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '60vh', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="section-title">Terms of Use</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Last updated: July 2026</p>
      
      <div style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>
          By accessing or using the ZAdvocates website, you agree to comply with and be bound by these Terms of Use.
        </p>
        <h3 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--accent-gold)' }}>1. No Legal Advice</h3>
        <p style={{ marginBottom: '16px' }}>
          The content on this website is provided for general informational purposes only and does not constitute legal advice. Accessing this website does not create an attorney-client relationship between you and ZAdvocates.
        </p>
        <h3 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--accent-gold)' }}>2. Intellectual Property</h3>
        <p style={{ marginBottom: '16px' }}>
          All materials contained on this site, including text, logos, and graphics, are the property of ZAdvocates and may not be reproduced without prior written consent.
        </p>
      </div>
    </div>
  );
}
