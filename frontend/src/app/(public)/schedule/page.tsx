"use client";
import { getApiUrl } from '../../../lib/api';

import { useState } from "react";
import Link from "next/link";

const PRACTICE_AREAS = [
  "Corporate Law",
  "International Arbitration",
  "Intellectual Property",
  "Litigation & Dispute Resolution",
  "Compliance & Regulatory",
  "Real Estate Law",
  "Other",
];

export default function SchedulePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
  });
  const [status, setStatus] = useState<"" | "submitting" | "success" | "error">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(getApiUrl('/consultations'), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          message: formData.practiceArea
            ? `[${formData.practiceArea}] ${formData.message}`
            : formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", practiceArea: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
          <span className="eyebrow">GET IN TOUCH</span>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "3.5rem",
              maxWidth: "700px",
              marginBottom: "24px",
            }}
          >
            Schedule a <span className="highlight">Consultation</span>
          </h1>
          <p
            style={{
              color: "var(--text-muted-light)",
              fontSize: "1.125rem",
              maxWidth: "560px",
              lineHeight: 1.7,
            }}
          >
            Tell us about your legal matter. Our team will review your request and
            reach out to schedule your consultation.
          </p>
        </div>
      </section>

      {/* Form + Info Section */}
      <section style={{ padding: "80px 0", background: "var(--bg-offwhite)" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* Form */}
          <div className="admin-form-container" style={{ maxWidth: "100%" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <i
                  className="ph ph-check-circle"
                  style={{ fontSize: "4rem", color: "#22c55e", marginBottom: "16px", display: "block" }}
                ></i>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
                  Request Submitted Successfully
                </h3>
                <p style={{ color: "var(--text-muted)", marginBottom: "32px", lineHeight: 1.7 }}>
                  Thank you for reaching out. One of our attorneys will review your request
                  and contact you within 24–48 hours to confirm your consultation time.
                </p>
                <Link href="/" className="btn btn-primary">
                  Return to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0 24px",
                  }}
                >
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0 24px",
                  }}
                >
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251 91 250 2620"
                    />
                  </div>
                  <div className="form-group">
                    <label>Practice Area</label>
                    <select
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleChange}
                      className="status-select"
                      style={{ width: "100%", padding: "12px", fontSize: "1rem" }}
                    >
                      <option value="">Select a practice area…</option>
                      {PRACTICE_AREAS.map((pa) => (
                        <option key={pa} value={pa}>
                          {pa}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>How can we help you? *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your legal matter in as much detail as you are comfortable sharing…"
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="login-error">
                    Failed to submit your request. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-accent"
                  style={{ width: "100%", padding: "16px", fontSize: "1rem", marginTop: "8px" }}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <i className="ph ph-circle-notch"></i> Submitting…
                    </>
                  ) : (
                    <>
                      Submit Request <i className="ph ph-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                background: "white",
                padding: "32px",
                border: "1px solid var(--border-color)",
                borderRadius: "4px",
              }}
            >
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "20px",
                }}
              >
                What to Expect
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { icon: "ph ph-paper-plane-tilt", text: "Submit your request below" },
                  { icon: "ph ph-clock", text: "We respond within 24–48 hours" },
                  { icon: "ph ph-video-camera", text: "Initial consultation via phone or video" },
                  { icon: "ph ph-handshake", text: "Engage with the right legal team" },
                ].map((step, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "rgba(205,163,101,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className={step.icon} style={{ color: "var(--accent-gold)", fontSize: "1.1rem" }}></i>
                    </div>
                    <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", paddingTop: "6px" }}>
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "var(--bg-dark)",
                color: "var(--text-light)",
                padding: "32px",
                borderRadius: "4px",
              }}
            >
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "20px",
                }}
              >
                Contact Us Directly
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { icon: "ph ph-phone", text: "+251 91 250 2620" },
                  { icon: "ph ph-envelope-simple", text: "info@zadvocates.com" },
                  { icon: "ph ph-map-pin", text: "Bulgaria, ETHIOPIA" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <i
                      className={item.icon}
                      style={{ color: "var(--accent-gold)", fontSize: "1.25rem", flexShrink: 0 }}
                    ></i>
                    <span style={{ color: "var(--text-muted-light)", fontSize: "0.9375rem" }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
