export default function Contact() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
      <h1 className="section-title">Contact Us</h1>
      <p style={{ maxWidth: '600px', marginBottom: '40px', color: 'var(--text-muted)' }}>
        Get in touch with our expert legal team. We are available to answer your questions and provide strategic counsel for your most pressing challenges.
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h3 style={{ marginBottom: '16px' }}>Global Headquarters</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
            <i className="ph ph-map-pin"></i> Bulgaria, Ethiopia<br/>
            (Please call to arrange an appointment)
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
            <i className="ph ph-phone"></i> +251 91 250 2620
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            <i className="ph ph-envelope-simple"></i> info@zadvocates.com
          </p>
        </div>
      </div>
    </div>
  );
}
