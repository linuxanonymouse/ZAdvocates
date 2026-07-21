"use client";
import { getApiUrl } from '../../../lib/api';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function InsightsPage() {
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(getApiUrl('/insights'))
      .then(res => res.ok ? res.json() : [])
      .then(data => { setInsights(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main>
      <section className="insights" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="container">
              <span className="eyebrow">KNOWLEDGE &amp; EXPERTISE</span>
              <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>All Insights &amp; News</h2>
              
              {loading ? (
                <p style={{ color: 'var(--text-muted-light)' }}>Loading insights...</p>
              ) : insights.length === 0 ? (
                <div style={{ padding: '60px 40px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <i className="ph ph-article" style={{ fontSize: '3rem', color: 'var(--accent-gold)', marginBottom: '16px', display: 'block' }}></i>
                  <h3 style={{ color: 'var(--text-light)', marginBottom: '8px' }}>No Insights Yet</h3>
                  <p style={{ color: 'var(--text-muted-light)' }}>Check back soon for legal analysis and industry updates from our attorneys.</p>
                </div>
              ) : (
                <div className="insights-grid">
                    {insights.map((insight: any) => (
                      <article className="insight-card" key={insight.id}>
                          <div className="insight-img" style={{ backgroundImage: `url('${insight.imageUrl || '/assets/glass.png'}')` }}></div>
                          <div className="insight-content">
                              <span className="category">{insight.category}</span>
                              <h3>{insight.title}</h3>
                              <Link href={`/insights/${insight.id}`} className="read-more">Read More <i className="ph ph-arrow-right"></i></Link>
                          </div>
                      </article>
                    ))}
                </div>
              )}
          </div>
      </section>
    </main>
  );
}
