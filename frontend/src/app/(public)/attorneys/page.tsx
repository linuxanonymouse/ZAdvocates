export default async function AttorneysPage() {
  const res = await fetch("http://localhost:4001/attorneys", { cache: "no-store" });
  const attorneys = res.ok ? await res.json() : [];

  return (
    <main>
      <section className="stats" style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: 'var(--bg-offwhite)' }}>
          <div className="container">
              <div className="section-header">
                  <div className="header-left">
                      <span className="eyebrow">OUR TEAM</span>
                      <h2>World-Class Legal<br/>Professionals</h2>
                  </div>
              </div>
              
              <div className="practice-cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  {attorneys.map((attorney: any) => (
                    <div className="practice-card" key={attorney.id}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 24px', backgroundColor: '#e5e7eb', backgroundImage: `url('${attorney.imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <h3>{attorney.name}</h3>
                        <p style={{ color: 'var(--accent-gold)', fontWeight: 600, minHeight: 'auto', marginBottom: '8px' }}>{attorney.title}</p>
                        <p>{attorney.email}</p>
                    </div>
                  ))}
                  {attorneys.length === 0 && <p>No attorneys found.</p>}
              </div>
          </div>
      </section>
    </main>
  );
}
