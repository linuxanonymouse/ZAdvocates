import Link from "next/link";

export default function Sitemap() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
      <h1 className="section-title">Sitemap</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Navigate through our complete site directory.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        <div>
          <h3 style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}>Main Pages</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><Link href="/" style={{ color: 'var(--text-light)' }}>Home</Link></li>
            <li><Link href="/about" style={{ color: 'var(--text-light)' }}>About Us</Link></li>
            <li><Link href="/attorneys" style={{ color: 'var(--text-light)' }}>Attorneys</Link></li>
            <li><Link href="/practice-areas" style={{ color: 'var(--text-light)' }}>Practice Areas</Link></li>
            <li><Link href="/insights" style={{ color: 'var(--text-light)' }}>Insights</Link></li>
            <li><Link href="/careers" style={{ color: 'var(--text-light)' }}>Careers</Link></li>
            <li><Link href="/contact" style={{ color: 'var(--text-light)' }}>Contact</Link></li>
            <li><Link href="/schedule" style={{ color: 'var(--text-light)' }}>Schedule Consultation</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}>Resources</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><Link href="/news" style={{ color: 'var(--text-light)' }}>News & Events</Link></li>
            <li><Link href="/case-studies" style={{ color: 'var(--text-light)' }}>Case Studies</Link></li>
            <li><Link href="/faqs" style={{ color: 'var(--text-light)' }}>FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}>Legal</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><Link href="/privacy-policy" style={{ color: 'var(--text-light)' }}>Privacy Policy</Link></li>
            <li><Link href="/terms-of-use" style={{ color: 'var(--text-light)' }}>Terms of Use</Link></li>
            <li><Link href="/sitemap" style={{ color: 'var(--text-light)' }}>Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
