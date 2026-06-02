import { useState } from "react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Residential Architecture",
  "Commercial Architecture",
  "Interior Design",
  "3D Visualization",
  "Landscape Design",
  "Project Management",
];

const SOCIALS = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "WhatsApp", href: "https://wa.me/919207045332" },
];

function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── MAIN FOOTER ── */}
      <div className="footer-main">
        {/* ── Brand Column ── */}
        <div className="footer-brand">
          <div style={{ marginBottom: 24 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                fontWeight: 700,
                color: "white",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              D<span style={{ color: "#d97706" }}>-</span>Sketch
            </h2>
            <p
              style={{
                fontSize: 9,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "#64748b",
                marginTop: 4,
              }}
            >
              Architecture
            </p>
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.85,
              color: "#94a3b8",
              fontWeight: 300,
              marginBottom: 28,
              maxWidth: 300,
            }}
          >
            Transforming ideas into timeless architecture, elegant interiors,
            and innovative living spaces — since 2014.
          </p>

          {/* Social Links */}
          <div style={{ display: "flex", gap: 12 }}>
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.name === "WhatsApp" ? "_blank" : undefined}
                rel={s.name === "WhatsApp" ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredLink(s.name)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  fontSize: 11,
                  letterSpacing: 1,
                  color: hoveredLink === s.name ? "#d97706" : "#94a3b8",
                  textDecoration: "none",
                  padding: "8px 16px",
                  border: `1px solid ${hoveredLink === s.name ? "#d97706" : "rgba(255,255,255,0.1)"}`,
                  transition: "all 0.25s",
                }}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* ── Quick Links Column ── */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(`ql-${link.label}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    fontSize: 14,
                    color:
                      hoveredLink === `ql-${link.label}`
                        ? "#d97706"
                        : "#94a3b8",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontWeight: 300,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: hoveredLink === `ql-${link.label}` ? 16 : 0,
                      height: 1,
                      background: "#d97706",
                      transition: "width 0.25s",
                      display: "inline-block",
                    }}
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Services Column ── */}
        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-list">
            {SERVICES.map((service) => (
              <li key={service}>
                <span
                  style={{
                    fontSize: 14,
                    color: "#94a3b8",
                    fontWeight: 300,
                  }}
                >
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact Column ── */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Address */}
            <div>
              <p className="footer-contact-label">Address</p>
              <p className="footer-contact-text">
                Honest Building, 1st Floor,
                <br />
                Opposite to Federal Bank,
                <br />
                Mongam, Malappuram - 673642
              </p>
            </div>
            {/* Phone */}
            <div>
              <p className="footer-contact-label">Phone</p>
              <a
                href="tel:9207045332"
                className="footer-contact-text"
                style={{ textDecoration: "none", display: "block" }}
                onMouseEnter={(e) => (e.target.style.color = "#d97706")}
                onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
              >
                +91 920 704 5332
              </a>
            </div>
            {/* Email */}
            <div>
              <p className="footer-contact-label">Email</p>
              <a
                href="mailto:info@dsketcharchitecture.com"
                className="footer-contact-text"
                style={{ textDecoration: "none", display: "block" }}
                onMouseEnter={(e) => (e.target.style.color = "#d97706")}
                onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
              >
                info@dsketcharchitecture.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <p
          style={{
            fontSize: 12,
            color: "#475569",
            margin: 0,
            fontWeight: 300,
          }}
        >
          © {currentYear} D-Sketch Architecture. All rights reserved.
        </p>
        <a
          href="#home"
          className="footer-back-top"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#d97706";
            e.currentTarget.style.borderColor = "#d97706";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#64748b";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          <span style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>
            Back to Top
          </span>
          <span style={{ fontSize: 16 }}>↑</span>
        </a>
      </div>

      {/* ── STYLES ── */}
      <style>{`
        /* ── Main Footer ── */
        .footer-main {
          background: #0f172a;
          padding: 80px 80px 60px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
          gap: 48px;
          border-top: 3px solid #d97706;
        }
        .footer-brand {
          padding-right: 32px;
        }
        .footer-column {}
        .footer-heading {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #d97706;
          font-weight: 600;
          margin: 0 0 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .footer-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-contact-label {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #64748b;
          font-weight: 500;
          margin: 0 0 6px;
        }
        .footer-contact-text {
          font-size: 14px;
          color: #e2e8f0;
          font-weight: 300;
          line-height: 1.7;
          margin: 0;
          transition: color 0.2s;
        }

        /* ── Bottom Bar ── */
        .footer-bottom {
          background: #0b1120;
          padding: 24px 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-back-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          text-decoration: none;
          padding: 8px 16px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.25s;
        }

        /* ── TABLET ── */
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            padding: 60px 48px 48px;
            gap: 40px;
          }
          .footer-brand {
            padding-right: 0;
            grid-column: span 2;
          }
          .footer-bottom {
            padding: 20px 48px;
          }
        }

        /* ── MOBILE ── */
        @media (max-width: 600px) {
          .footer-main {
            grid-template-columns: 1fr;
            padding: 48px 24px 36px;
            gap: 36px;
          }
          .footer-brand {
            grid-column: span 1;
          }
          .footer-bottom {
            padding: 20px 24px;
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
