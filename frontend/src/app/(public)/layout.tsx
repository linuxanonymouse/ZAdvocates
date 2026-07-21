import Link from "next/link";

import PublicHeader from "./PublicHeader";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <PublicHeader />

        {children}

        <footer className="footer">
            <div className="container footer-top">
                <div className="footer-col brand-col">
                    <Link href="/" className="logo">
                        <i className="ph ph-bank"></i>
                        <div className="logo-text">
                            <span className="logo-title">ZADVOCATES</span>
                        </div>
                    </Link>
                    <p>ZAdvocates is a premier law firm providing strategic legal counsel to clients around the world.</p>
                    <div className="social-links">
                        <a href="#"><i className="ph ph-linkedin-logo"></i></a>
                        <a href="#"><i className="ph ph-twitter-logo"></i></a>
                        <a href="#"><i className="ph ph-facebook-logo"></i></a>
                        <a href="#"><i className="ph ph-instagram-logo"></i></a>
                    </div>
                </div>
                <div className="footer-col links-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/attorneys">Attorneys</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-col links-col">
                    <h4>Practice Areas</h4>
                    <ul>
                        <li><Link href="/practice-areas/corporate-law">Corporate Law</Link></li>
                        <li><Link href="/practice-areas/international-arbitration">International Arbitration</Link></li>
                        <li><Link href="/practice-areas/intellectual-property">Intellectual Property</Link></li>
                        <li><Link href="/practice-areas/litigation">Litigation & Dispute Resolution</Link></li>
                        <li><Link href="/practice-areas/compliance">Compliance & Regulatory</Link></li>
                    </ul>
                </div>
                <div className="footer-col links-col">
                    <h4>Resources</h4>
                    <ul>
                        <li><Link href="/insights">Insights</Link></li>
                        <li><Link href="/news">News & Events</Link></li>
                        <li><Link href="/case-studies">Case Studies</Link></li>
                        <li><Link href="/faqs">FAQs</Link></li>
                    </ul>
                </div>
                <div className="footer-col contact-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><i className="ph ph-map-pin"></i> bulgaria, ETHIOPIA</li>
                        <li><i className="ph ph-phone"></i> +251 91 250 2620</li>
                        <li><i className="ph ph-envelope-simple"></i> info@zadvocates.com</li>
                    </ul>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; 2026 ZAdvocates. All Rights Reserved.</p>
                <div className="legal-links">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-of-use">Terms of Use</Link>
                    <Link href="/sitemap">Sitemap</Link>
                </div>
            </div>
        </footer>
    </>
  );
}
