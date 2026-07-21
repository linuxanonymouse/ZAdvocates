import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      background: 'var(--bg-dark)',
      color: 'var(--text-light)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative glow */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(193,157,92,0.15) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '8rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', marginBottom: '0', lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '16px', color: 'var(--text-muted-light)' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-muted-light)', maxWidth: '450px', marginBottom: '40px', fontSize: '1rem', lineHeight: 1.7 }}>
          The page you are looking for might have been moved, deleted, or never existed. Let us help you find your way.
        </p>
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '14px 32px',
          background: 'var(--accent-gold)',
          color: 'var(--bg-dark)',
          borderRadius: '4px',
          fontWeight: 600,
          fontSize: '0.875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          textDecoration: 'none',
          transition: 'opacity 0.2s'
        }}>
          <i className="ph ph-house"></i> Return Home
        </Link>
      </div>
    </div>
  );
}
