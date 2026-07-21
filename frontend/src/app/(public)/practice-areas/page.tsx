import { getApiUrl } from '../../../lib/api';
import Link from "next/link";

const FALLBACK_AREAS = [
  {
    id: "corporate-law",
    slug: "corporate-law",
    name: "Corporate Law",
    description:
      "Guiding businesses through formation, governance, mergers, acquisitions, and complex commercial transactions with strategic precision.",
    iconUrl: "ph ph-bank",
  },
  {
    id: "international-arbitration",
    slug: "international-arbitration",
    name: "International Arbitration",
    description:
      "Resolving cross-border disputes efficiently through confidential and internationally enforceable arbitration proceedings.",
    iconUrl: "ph ph-globe",
  },
  {
    id: "intellectual-property",
    slug: "intellectual-property",
    name: "Intellectual Property",
    description:
      "Protecting your innovations, trademarks, copyrights, and creative assets across jurisdictions worldwide.",
    iconUrl: "ph ph-shield",
  },
  {
    id: "litigation",
    slug: "litigation",
    name: "Litigation & Dispute Resolution",
    description:
      "Aggressive and strategic representation in court and through alternative dispute resolution mechanisms.",
    iconUrl: "ph ph-gavel",
  },
  {
    id: "compliance",
    slug: "compliance",
    name: "Compliance & Regulatory",
    description:
      "Helping organizations navigate complex regulations, mitigate risk, and maintain ethical business operations.",
    iconUrl: "ph ph-file-text",
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate Law",
    description:
      "Comprehensive legal support for property transactions, development projects, and real estate disputes.",
    iconUrl: "ph ph-house",
  },
];

export default async function PracticeAreasPage() {
  let areas: typeof FALLBACK_AREAS = [];
  try {
    const res = await fetch(getApiUrl('/practice-areas'), {
      cache: "no-store",
    });
    const data = res.ok ? await res.json() : [];
    areas = data.length > 0 ? data : FALLBACK_AREAS;
  } catch {
    areas = FALLBACK_AREAS;
  }

  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          position: 'relative',
          color: 'var(--text-light)',
          paddingTop: '140px',
          paddingBottom: '100px',
          overflow: 'hidden',
        }}
      >
        {/* Background image layer */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.8) 50%, rgba(17,24,39,0.95) 100%)',
        }}></div>
        {/* Decorative gold accent line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">OUR PRACTICE AREAS</span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3.5rem',
              maxWidth: '700px',
              marginBottom: '24px',
            }}
          >
            Comprehensive Legal Solutions
            <br />
            Tailored to <span className="highlight">You</span>
          </h1>
          <p
            style={{
              color: 'var(--text-muted-light)',
              fontSize: '1.125rem',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}
          >
            We combine legal excellence with deep industry insight to deliver
            practical, effective, and results-driven solutions across every
            major area of law.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="practice-areas" style={{ paddingTop: "80px" }}>
        <div className="container">
          <div className="practice-cards" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {areas.map(
              (area: {
                id: number | string;
                slug: string;
                name: string;
                description: string;
                iconUrl?: string;
              }) => (
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="practice-card"
                  key={area.id}
                  style={{ textAlign: "left", padding: "40px 32px" }}
                >
                  <i
                    className={area.iconUrl || "ph ph-briefcase"}
                    style={{ display: "block", textAlign: "left" }}
                  ></i>
                  <h3 style={{ textAlign: "left" }}>{area.name}</h3>
                  <p style={{ textAlign: "left" }}>{area.description}</p>
                  <span className="learn-more">
                    Learn More <i className="ph ph-arrow-right"></i>
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="why-choose"
        style={{ padding: "80px 0" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            GET IN TOUCH
          </span>
          <h2
            style={{
              fontSize: "2.5rem",
              color: "var(--text-light)",
              marginBottom: "24px",
            }}
          >
            Not Sure Which Practice Area <br />
            Applies to Your Case?
          </h2>
          <p
            style={{
              color: "var(--text-muted-light)",
              maxWidth: "500px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Our attorneys will assess your situation and connect you with the
            right legal team. Schedule a free consultation today.
          </p>
          <Link href="/schedule" className="btn btn-accent" style={{ fontSize: "1rem", padding: "16px 40px" }}>
            Schedule a Consultation <i className="ph ph-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}
