import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
          <div className="hero-bg"></div>
          <div className="container hero-container">
              <div className="hero-content">
                  <span className="eyebrow">GLOBAL PERSPECTIVE. LOCAL EXPERTISE.</span>
                  <h1>Defending Rights.<br/>Delivering <span className="highlight">Justice.</span></h1>
                  <p>ZAdvocates is a full-service law firm providing trusted legal counsel to businesses and individuals worldwide.</p>
                  <div className="hero-buttons">
                      <Link href="/practice-areas" className="btn btn-accent">Explore Our Services <i className="ph ph-arrow-right"></i></Link>
                      <button className="btn btn-play"><i className="ph ph-play-circle"></i> Watch Our Story</button>
                  </div>
              </div>
          </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
          <div className="container stats-container">
              <div className="stat-item">
                  <i className="ph ph-globe"></i>
                  <div className="stat-text">
                      <h3>25+</h3>
                      <p>Years of Excellence</p>
                  </div>
              </div>
              <div className="stat-item">
                  <i className="ph ph-user"></i>
                  <div className="stat-text">
                      <h3>500+</h3>
                      <p>Clients Worldwide</p>
                  </div>
              </div>
              <div className="stat-item">
                  <i className="ph ph-scales"></i>
                  <div className="stat-text">
                      <h3>35+</h3>
                      <p>Countries Served</p>
                  </div>
              </div>
              <div className="stat-item">
                  <i className="ph ph-shield-check"></i>
                  <div className="stat-text">
                      <h3>98%</h3>
                      <p>Client Satisfaction</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Practice Areas Section */}
      <section className="practice-areas">
          <div className="container">
              <div className="section-header">
                  <div className="header-left">
                      <span className="eyebrow">OUR PRACTICE AREAS</span>
                      <h2>Comprehensive Legal Solutions<br/>Tailored to You</h2>
                  </div>
                  <div className="header-right">
                      <p>We combine legal excellence with industry insight to deliver practical, effective, and results-driven solutions.</p>
                  </div>
              </div>
              
              <div className="practice-cards">
                  <a href="/practice-areas/corporate-law" className="practice-card">
                      <i className="ph ph-bank"></i>
                      <h3>Corporate Law</h3>
                      <p>Guiding businesses through formation, governance, and complex transactions.</p>
                      <span className="learn-more">Learn More <i className="ph ph-arrow-right"></i></span>
                  </a>
                  <a href="/practice-areas/international-arbitration" className="practice-card">
                      <i className="ph ph-globe"></i>
                      <h3>International Arbitration</h3>
                      <p>Resolving disputes efficiently through confidential and enforceable arbitration.</p>
                      <span className="learn-more">Learn More <i className="ph ph-arrow-right"></i></span>
                  </a>
                  <a href="/practice-areas/intellectual-property" className="practice-card">
                      <i className="ph ph-shield"></i>
                      <h3>Intellectual Property</h3>
                      <p>Protecting innovations, brands, and creative assets worldwide.</p>
                      <span className="learn-more">Learn More <i className="ph ph-arrow-right"></i></span>
                  </a>
                  <a href="/practice-areas/litigation" className="practice-card">
                      <i className="ph ph-gavel"></i>
                      <h3>Litigation & Dispute Resolution</h3>
                      <p>Aggressive representation in court and alternative dispute resolution.</p>
                      <span className="learn-more">Learn More <i className="ph ph-arrow-right"></i></span>
                  </a>
                  <a href="/practice-areas/compliance" className="practice-card">
                      <i className="ph ph-file-text"></i>
                      <h3>Compliance & Regulatory</h3>
                      <p>Helping organizations navigate complex regulations and mitigate risk.</p>
                      <span className="learn-more">Learn More <i className="ph ph-arrow-right"></i></span>
                  </a>
              </div>
          </div>
      </section>

      {/* Why Choose ZAdvocates Section */}
      <section className="why-choose">
          <div className="container why-choose-container">
              <div className="why-left">
                  <span className="eyebrow">WHY CHOOSE ZADVOCATES</span>
                  <h2>Your Success.<br/>Our <span className="highlight">Commitment.</span></h2>
                  <p>We are committed to providing exceptional legal services with integrity, discretion, and a relentless focus on achieving the best outcomes for our clients.</p>
                  <button className="btn btn-outline">Learn More About Us <i className="ph ph-arrow-right"></i></button>
              </div>
              <div className="why-right">
                  <div className="feature-item">
                      <i className="ph ph-globe"></i>
                      <div className="feature-text">
                          <h3>Global Reach</h3>
                          <p>A truly global network with deep regional knowledge.</p>
                      </div>
                  </div>
                  <div className="feature-item">
                      <i className="ph ph-users"></i>
                      <div className="feature-text">
                          <h3>Client-Centered</h3>
                          <p>Tailored solutions designed around your goals.</p>
                      </div>
                  </div>
                  <div className="feature-item">
                      <i className="ph ph-star"></i>
                      <div className="feature-text">
                          <h3>Proven Excellence</h3>
                          <p>Decades of experience delivering measurable results.</p>
                      </div>
                  </div>
                  <div className="feature-item">
                      <i className="ph ph-shield-check"></i>
                      <div className="feature-text">
                          <h3>Uncompromising Integrity</h3>
                          <p>We uphold the highest standards of ethics and professionalism.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Insights & News Section */}
      <section className="insights">
          <div className="container">
              <div className="insights-header">
                  <h2>INSIGHTS & NEWS</h2>
                  <a href="/insights" className="view-all">View All Insights <i className="ph ph-arrow-right"></i></a>
              </div>
              
              <div className="insights-grid">
                  <article className="insight-card">
                      <div className="insight-img" style={{ backgroundImage: "url('/assets/glass.png')" }}></div>
                      <div className="insight-content">
                          <span className="category">CORPORATE LAW</span>
                          <h3>Key Legal Considerations for Cross-Border Mergers</h3>
                          <a href="/insights/1" className="read-more">Read More <i className="ph ph-arrow-right"></i></a>
                      </div>
                  </article>
                  <article className="insight-card">
                      <div className="insight-img" style={{ backgroundImage: "url('/assets/gavel.png')" }}></div>
                      <div className="insight-content">
                          <span className="category">INSIGHTS</span>
                          <h3>Navigating Regulatory Changes in the Global Market</h3>
                          <a href="/insights/2" className="read-more">Read More <i className="ph ph-arrow-right"></i></a>
                      </div>
                  </article>
                  <article className="insight-card">
                      <div className="insight-img" style={{ backgroundImage: "url('/assets/city.png')" }}></div>
                      <div className="insight-content">
                          <span className="category">DISPUTE RESOLUTION</span>
                          <h3>Arbitration vs Litigation: Which is Right for You?</h3>
                          <a href="/insights/3" className="read-more">Read More <i className="ph ph-arrow-right"></i></a>
                      </div>
                  </article>
              </div>
          </div>
      </section>
    </main>
  );
}
