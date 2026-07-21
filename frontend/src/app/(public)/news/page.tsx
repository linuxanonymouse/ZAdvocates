export default function News() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
      <h1 className="section-title">News & Events</h1>
      <p style={{ maxWidth: '600px', marginBottom: '40px', color: 'var(--text-muted)' }}>
        Stay up to date with the latest firm announcements, speaking engagements, and industry events featuring our attorneys.
      </p>
      <div style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--accent-gold)' }}>No recent news</h3>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Check back soon for updates from ZAdvocates.</p>
      </div>
    </div>
  );
}
