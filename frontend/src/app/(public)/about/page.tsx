export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--bg-dark) 0%, #1a2332 100%)',
        color: 'var(--text-light)',
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(193,157,92,0.08) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">ABOUT ZADVOCATES</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', maxWidth: '700px', marginBottom: '24px' }}>
            Your Success.<br/>Our <span className="highlight">Commitment.</span>
          </h1>
          <p style={{ color: 'var(--text-muted-light)', fontSize: '1.125rem', maxWidth: '600px', lineHeight: 1.7 }}>
            We are committed to providing exceptional legal services with integrity, discretion, and a relentless focus on achieving the best outcomes for our clients.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="why-choose" style={{ padding: '80px 0' }}>
        <div className="container why-choose-container">
          <div className="why-left">
            <span className="eyebrow">OUR VALUES</span>
            <h2>Built on <span className="highlight">Trust.</span><br/>Driven by <span className="highlight">Results.</span></h2>
            <p>For over a decade, ZAdvocates has provided strategic legal counsel to businesses and individuals worldwide. Our multidisciplinary team brings together expertise across corporate law, arbitration, intellectual property, and regulatory compliance.</p>
          </div>
          <div className="why-right">
            <div className="feature-item">
              <i className="ph ph-globe"></i>
              <div className="feature-text">
                <h3>Global Reach</h3>
                <p>A truly global network with deep regional knowledge across Africa, Europe, and the Middle East.</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="ph ph-users"></i>
              <div className="feature-text">
                <h3>Client-Centered</h3>
                <p>Tailored solutions designed around your specific goals and challenges.</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="ph ph-shield-check"></i>
              <div className="feature-text">
                <h3>Integrity First</h3>
                <p>We uphold the highest standards of legal ethics and professional conduct.</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="ph ph-trophy"></i>
              <div className="feature-text">
                <h3>Proven Track Record</h3>
                <p>A history of landmark cases and successful outcomes across multiple jurisdictions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>OUR MISSION</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-light)', marginBottom: '24px' }}>
            Delivering <span className="highlight">Justice</span> with Excellence
          </h2>
          <p style={{ color: 'var(--text-muted-light)', fontSize: '1.125rem', lineHeight: 1.8 }}>
            Our mission is to empower our clients with the legal knowledge and advocacy they need to navigate complex challenges. We believe that access to exceptional legal counsel should not be a privilege, but a standard—one we uphold with every case we take on.
          </p>
        </div>
      </section>
    </main>
  );
}
