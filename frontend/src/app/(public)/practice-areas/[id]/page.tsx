import Link from "next/link";
import { notFound } from "next/navigation";

const STATIC_AREAS: Record<
  string,
  { name: string; description: string; content: string; iconUrl: string }
> = {
  "corporate-law": {
    name: "Corporate Law",
    iconUrl: "ph ph-bank",
    description:
      "Guiding businesses through formation, governance, mergers, acquisitions, and complex commercial transactions with strategic precision.",
    content: `Our corporate law practice provides end-to-end legal support for businesses at every stage — from startup formation and venture financing to large-scale mergers, acquisitions, and corporate restructuring.

We advise boards, executives, and shareholders on governance frameworks, fiduciary duties, and shareholder agreements. Our team has deep experience in cross-border transactions, helping clients navigate the legal complexities of operating across multiple jurisdictions.

Key services include:
• Company formation and structuring
• Mergers & acquisitions due diligence and documentation
• Joint ventures and strategic partnerships
• Corporate governance and board advisory
• Shareholder agreements and dispute resolution
• Private equity and venture capital transactions`,
  },
  "international-arbitration": {
    name: "International Arbitration",
    iconUrl: "ph ph-globe",
    description:
      "Resolving cross-border disputes efficiently through confidential and internationally enforceable arbitration proceedings.",
    content: `ZAdvocates is a recognized leader in international commercial and investment arbitration. We represent clients before all major arbitral institutions including the ICC, ICSID, LCIA, UNCITRAL, and regional arbitration centers worldwide.

Our experienced arbitration team handles complex, high-stakes disputes across sectors including energy, infrastructure, construction, technology, and financial services.

Key services include:
• ICC, LCIA, ICSID, and UNCITRAL arbitration
• Emergency arbitration and interim relief
• Enforcement of arbitral awards
• Investor-state dispute settlement (ISDS)
• Expert witness coordination
• Multi-jurisdictional dispute strategy`,
  },
  "intellectual-property": {
    name: "Intellectual Property",
    iconUrl: "ph ph-shield",
    description:
      "Protecting your innovations, trademarks, copyrights, and creative assets across jurisdictions worldwide.",
    content: `Our intellectual property practice provides comprehensive protection for your most valuable intangible assets. From patent prosecution to brand strategy, we work to secure and defend your competitive advantage globally.

We advise technology companies, creative enterprises, pharmaceutical firms, and individual inventors on all aspects of IP law, including licensing, enforcement, and portfolio management.

Key services include:
• Patent prosecution and portfolio management
• Trademark registration and enforcement
• Copyright protection and licensing
• Trade secret protection
• IP due diligence in M&A transactions
• IP litigation and dispute resolution`,
  },
  litigation: {
    name: "Litigation & Dispute Resolution",
    iconUrl: "ph ph-gavel",
    description:
      "Aggressive and strategic representation in court and through alternative dispute resolution mechanisms.",
    content: `Our litigation team represents clients in complex commercial disputes before courts at all levels, as well as in arbitration, mediation, and other alternative dispute resolution forums.

We are known for combining meticulous legal preparation with persuasive advocacy. Whether defending your business against a major claim or pursuing recovery of assets, we deliver results-oriented representation.

Key services include:
• Commercial and contractual disputes
• Corporate and securities litigation
• Cross-border enforcement actions
• Insolvency and restructuring disputes
• Construction and infrastructure disputes
• Employment and labor litigation`,
  },
  compliance: {
    name: "Compliance & Regulatory",
    iconUrl: "ph ph-file-text",
    description:
      "Helping organizations navigate complex regulations, mitigate risk, and maintain ethical business operations.",
    content: `Our compliance and regulatory practice helps businesses operate confidently in an increasingly complex regulatory environment. We provide practical guidance on everything from data protection and anti-corruption to financial services regulation and environmental compliance.

We work proactively with clients to build robust compliance programs, conduct internal investigations, and respond to regulatory inquiries.

Key services include:
• Regulatory advisory and risk assessment
• Anti-corruption and AML compliance (FCPA, UK Bribery Act)
• Data protection and GDPR compliance
• Financial services regulatory matters
• Environmental, social & governance (ESG) compliance
• Internal investigations and remediation`,
  },
  "real-estate": {
    name: "Real Estate Law",
    iconUrl: "ph ph-house",
    description:
      "Comprehensive legal support for property transactions, development projects, and real estate disputes.",
    content: `Our real estate practice advises developers, investors, lenders, and occupiers on the full spectrum of property-related matters. We handle everything from complex acquisition and development transactions to financing, leasing, and real estate disputes.

With a strong network across key markets, we provide practical advice that accounts for local law while aligning with global business objectives.

Key services include:
• Commercial property acquisitions and disposals
• Development and construction advisory
• Real estate finance and secured lending
• Commercial leasing (landlord and tenant)
• Property joint ventures and structuring
• Real estate dispute resolution`,
  },
};

export default async function PracticeAreaDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Try to fetch from backend first
  let area: {
    name: string;
    description: string;
    content?: string;
    iconUrl?: string;
    attorneys?: { id: number; name: string; title: string }[];
  } | null = null;

  try {
    const res = await fetch(`http://localhost:4001/practice-areas/${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      area = await res.json();
    }
  } catch {
    // fall through to static data
  }

  // Fall back to static data for predefined slugs
  if (!area && STATIC_AREAS[id]) {
    area = STATIC_AREAS[id];
  }

  if (!area) {
    notFound();
  }

  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          background: "var(--bg-dark)",
          color: "var(--text-light)",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div className="container">
          <div style={{ marginBottom: "24px" }}>
            <Link
              href="/practice-areas"
              style={{
                color: "var(--text-muted-light)",
                fontSize: "0.875rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <i className="ph ph-arrow-left"></i> All Practice Areas
            </Link>
          </div>
          <span className="eyebrow">PRACTICE AREA</span>
          {area.iconUrl && (
            <div style={{ fontSize: "3rem", color: "var(--accent-gold)", margin: "16px 0" }}>
              <i className={area.iconUrl}></i>
            </div>
          )}
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "3rem",
              maxWidth: "700px",
              marginBottom: "24px",
            }}
          >
            {area.name}
          </h1>
          <p
            style={{
              color: "var(--text-muted-light)",
              fontSize: "1.125rem",
              maxWidth: "600px",
              lineHeight: 1.7,
            }}
          >
            {area.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--bg-offwhite)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "60px",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.85,
                  whiteSpace: "pre-wrap",
                  color: "var(--text-dark)",
                }}
              >
                {area.content || area.description}
              </div>

              {area.attorneys && area.attorneys.length > 0 && (
                <div style={{ marginTop: "48px" }}>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "var(--font-heading)",
                      marginBottom: "24px",
                    }}
                  >
                    Related Attorneys
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {area.attorneys.map((attorney) => (
                      <div
                        key={attorney.id}
                        style={{
                          background: "white",
                          padding: "16px 24px",
                          border: "1px solid var(--border-color)",
                          borderRadius: "4px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <strong>{attorney.name}</strong>
                          <p
                            style={{
                              fontSize: "0.875rem",
                              color: "var(--accent-gold)",
                            }}
                          >
                            {attorney.title}
                          </p>
                        </div>
                        <Link
                          href="/attorneys"
                          style={{ color: "var(--accent-gold)", fontSize: "0.875rem" }}
                        >
                          View Profile <i className="ph ph-arrow-right"></i>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <div>
              <div
                style={{
                  background: "var(--bg-dark)",
                  color: "var(--text-light)",
                  padding: "40px 32px",
                  borderRadius: "4px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "var(--font-heading)",
                    marginBottom: "16px",
                  }}
                >
                  Need Legal Advice?
                </h3>
                <p
                  style={{
                    color: "var(--text-muted-light)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    marginBottom: "32px",
                  }}
                >
                  Speak with one of our experienced attorneys to discuss your
                  situation and explore your legal options.
                </p>
                <Link
                  href="/schedule"
                  className="btn btn-accent"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Schedule a Consultation
                </Link>
              </div>

              <div
                style={{
                  background: "white",
                  padding: "32px",
                  border: "1px solid var(--border-color)",
                  borderRadius: "4px",
                  marginTop: "24px",
                }}
              >
                <h4
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Other Practice Areas
                </h4>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {Object.entries(STATIC_AREAS)
                    .filter(([slug]) => slug !== id)
                    .slice(0, 5)
                    .map(([slug, pa]) => (
                      <li key={slug}>
                        <Link
                          href={`/practice-areas/${slug}`}
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--text-muted)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <i className={pa.iconUrl} style={{ color: "var(--accent-gold)" }}></i>
                          {pa.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
