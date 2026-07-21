export default function CaseStudies() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
      <h1 className="section-title">Case Studies</h1>
      <p style={{ maxWidth: '600px', marginBottom: '40px', color: 'var(--text-muted)' }}>
        Explore our track record of success. We have represented multinational corporations, sovereigns, and high-net-worth individuals in their most critical legal matters.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ color: 'var(--accent-gold)', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '8px' }}>CORPORATE LAW</div>
          <h3 style={{ marginBottom: '16px' }}>Cross-Border Merger Acquisition</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Successfully facilitated a $500M acquisition for a leading tech conglomerate spanning three jurisdictions.</p>
        </div>
        <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ color: 'var(--accent-gold)', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '8px' }}>INTERNATIONAL ARBITRATION</div>
          <h3 style={{ marginBottom: '16px' }}>Sovereign Dispute Resolution</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Secured a favorable ruling in a high-stakes bilateral investment treaty arbitration before the ICSID.</p>
        </div>
      </div>
    </div>
  );
}
