"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PublicHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <i className="ph ph-bank"></i>
          <div className="logo-text">
            <span className="logo-title">ZADVOCATES</span>
          </div>
        </Link>
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <i className={`ph ${mobileMenuOpen ? "ph-x" : "ph-list"}`}></i>
        </button>
        <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""} onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link href="/practice-areas" className={pathname.startsWith("/practice-areas") ? "active" : ""} onClick={closeMenu}>Practice Areas</Link>
            </li>
            <li>
              <Link href="/attorneys" className={pathname.startsWith("/attorneys") ? "active" : ""} onClick={closeMenu}>Attorneys</Link>
            </li>
            <li>
              <Link href="/insights" className={pathname.startsWith("/insights") ? "active" : ""} onClick={closeMenu}>Insights</Link>
            </li>
            <li>
              <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={closeMenu}>About Us</Link>
            </li>
            <li>
              <Link href="/careers" className={pathname === "/careers" ? "active" : ""} onClick={closeMenu}>Careers</Link>
            </li>
          </ul>
        </nav>
        <div className={`header-actions ${mobileMenuOpen ? "actions-open" : ""}`}>
          <Link href="/schedule" className="btn btn-primary" onClick={closeMenu}>Schedule a Consultation</Link>
        </div>
      </div>
    </header>
  );
}
