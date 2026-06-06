import { useState } from "react";

const INFO = [
  {
    icon: "📍",
    label: "Address",
    lines: [
      "Honest Building, 1st Floor,",
      "Opposite to Federal Bank,",
      "Mongam, Malappuram - 673642,",
      "Kerala, India",
    ],
    link: "https://maps.google.com/?q=Mongam+Malappuram+Kerala",
    linkText: "Get Directions →",
  },
  {
    icon: "📞",
    label: "Phone",
    lines: ["9207045332"],
    link: "tel:9207045332",
    linkText: "Call Now →",
  },
  {
    icon: "🕐",
    label: "Working Hours",
    lines: [
      "Monday – Saturday",
      "9:00 AM – 5:00 PM",
      "Sunday: Closed",
    ],
    link: null,
    linkText: null,
  },
  {
    icon: "✉️",
    label: "Email",
    lines: ["info@dsketcharchitecture.com"],
    link: "mailto:info@dsketcharchitecture.com",
    linkText: "Send Email →",
  },
];

const SERVICES = [
  "Residential Architecture",
  "Commercial Architecture",
  "Interior Design",
  "3D Visualization",
  "Landscape Design",
  "Project Management",
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (name) => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1.5px solid ${focused === name ? "#d97706" : "#cbd5e1"}`,
    padding: "14px 0",
    fontSize: 15,
    color: "#0f172a",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.25s",
    boxSizing: "border-box",
  });

  const labelStyle = {
    fontSize: 10,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#94a3b8",
    fontWeight: 500,
    display: "block",
    marginBottom: 4,
  };

  return (
    <section
      id="contact"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f7f4" }}
    >
      {/* ── HERO ── */}
      <div
        style={{
          position: "relative",
          height: 380,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="Contact"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(15,23,42,0.7)",
          }}
        />
        <div style={{ position: "relative", padding: "0 80px" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#d97706",
              fontWeight: 500,
              marginBottom: 18,
            }}
          >
            Get In Touch
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Let's Build Something
            <br />
            <span style={{ color: "#d97706", fontStyle: "italic" }}>
              Beautiful Together
            </span>
          </h1>
          <div
            style={{ width: 56, height: 3, background: "#d97706", marginTop: 26 }}
          />
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          minHeight: 700,
        }}>
        <style>{`
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
        {/* ── LEFT: INFO PANEL ── */}
        <div
          style={{
            background: "#0f172a",
            padding: "72px 56px",
            display: "flex",
            flexDirection: "column",
            gap: 48,
          }}
        >
          <div>
            <div
              style={{ width: 36, height: 3, background: "#d97706", marginBottom: 24 }}
            />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                fontWeight: 700,
                color: "white",
                margin: "0 0 12px",
                lineHeight: 1.3,
              }}
            >
              Visit Our Studio
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "#94a3b8",
                fontWeight: 300,
                margin: 0,
              }}
            >
              We'd love to meet you and discuss your vision in person. Walk in or book an appointment.
            </p>
          </div>

          {INFO.map((item) => (
            <div key={item.label}>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#d97706",
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                {item.label}
              </p>
              {item.lines.map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 14,
                    color: "#e2e8f0",
                    margin: "0 0 2px",
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
                  {line}
                </p>
              ))}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: 8,
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "#d97706",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {item.linkText}
                </a>
              )}
            </div>
          ))}

         
        </div>

        {/* ── RIGHT: FORM ── */}
        <div style={{ background: "white", padding: "72px 64px" }}>
          {submitted ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  background: "#d97706",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  color: "white",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28,
                  color: "#0f172a",
                  margin: 0,
                }}
              >
                Message Received!
              </h3>
              <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, maxWidth: 360 }}>
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" }); }}
                style={{
                  marginTop: 12,
                  background: "none",
                  border: "1.5px solid #d97706",
                  color: "#d97706",
                  padding: "12px 32px",
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 48 }}>
                <div style={{ width: 36, height: 3, background: "#d97706", marginBottom: 24 }} />
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: "0 0 12px",
                  }}
                >
                  Send Us a Message
                </h2>
                <p style={{ fontSize: 14, color: "#94a3b8", margin: 0, lineHeight: 1.7 }}>
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {/* Row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      placeholder="Your name"
                      required
                      style={inputStyle("name")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      style={inputStyle("phone")}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    placeholder="your@email.com"
                    required
                    style={inputStyle("email")}
                  />
                </div>

                {/* Row 3 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                  <div>
                    <label style={labelStyle}>Service Required</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused("")}
                      style={{
                        ...inputStyle("service"),
                        cursor: "pointer",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 4px center",
                        paddingRight: 24,
                      }}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Budget Range</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      onFocus={() => setFocused("budget")}
                      onBlur={() => setFocused("")}
                      style={{
                        ...inputStyle("budget"),
                        cursor: "pointer",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 4px center",
                        paddingRight: 24,
                      }}
                    >
                      <option value="">Select budget</option>
                      <option>Below ₹10 Lakhs</option>
                      <option>₹10 – 25 Lakhs</option>
                      <option>₹25 – 50 Lakhs</option>
                      <option>₹50 Lakhs – 1 Crore</option>
                      <option>Above ₹1 Crore</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    placeholder="Tell us about your project — location, size, style preferences, timeline..."
                    rows={4}
                    style={{
                      ...inputStyle("message"),
                      resize: "none",
                      lineHeight: 1.7,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    alignSelf: "flex-start",
                    background: "#d97706",
                    color: "white",
                    border: "none",
                    padding: "18px 48px",
                    fontSize: 11,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#b45309")}
                  onMouseLeave={(e) => (e.target.style.background = "#d97706")}
                >
                  Send Message →
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* ── MAP STRIP ── */}
      <div style={{ height: 360, position: "relative" }}>
        <iframe
          title="D-Sketch Architecture Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d76.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMongam%2C+Malappuram%2C+Kerala!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block", filter: "grayscale(20%)" }}
          allowFullScreen=""
          loading="lazy"
        />
        {/* map label overlay */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 80,
            background: "#0f172a",
            padding: "20px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <p style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#d97706", margin: 0, fontWeight: 600 }}>Our Location</p>
          <p style={{ fontSize: 14, color: "white", margin: 0, fontWeight: 300 }}>Mongam, Malappuram — Kerala</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;