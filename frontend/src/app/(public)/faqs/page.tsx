export default function FAQs() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '60vh', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="section-title text-center">Frequently Asked Questions</h1>
      <p style={{ marginBottom: '40px', color: 'var(--text-muted)', textAlign: 'center' }}>
        Common inquiries about our legal services and consultation processes.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { q: "How do I schedule an initial consultation?", a: "You can schedule an initial consultation by clicking the 'Schedule a Consultation' button at the top of the page, or by reaching out to us via our Contact page." },
          { q: "What jurisdictions do you practice in?", a: "Our attorneys are qualified in multiple jurisdictions globally and we partner with local counsel where necessary to provide seamless cross-border representation." },
          { q: "How does your firm bill for services?", a: "We offer flexible fee structures, including traditional hourly billing, fixed fees for specific matters, and alternative fee arrangements tailored to the client's needs." }
        ].map((faq, i) => (
          <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '8px', color: 'var(--text-light)' }}>{faq.q}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
