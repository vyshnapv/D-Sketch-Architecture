function About() {
  return (
    <section id="about" style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-[#f8f7f4]">

      {/* ── SECTION 1: Hero Split ── */}
      <div style={{ display: "flex", minHeight: "620px" }}>

        {/* Image */}
        <div style={{ position: "relative", width: "50%", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80"
            alt="Interior Design"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.2)" }} />
          <div style={{ position: "absolute", bottom: 36, left: 36, background: "#d97706", padding: "20px 28px" }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: "white", lineHeight: 1 }}>10+</div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.85)", marginTop: 6 }}>Years of Excellence</div>
          </div>
        </div>

        {/* Content */}
        <div style={{ width: "50%", background: "white", padding: "80px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 18, letterSpacing: 5, textTransform: "uppercase", color: "#d97706", fontWeight: 800, marginBottom: 18 }}>About Us</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.2, marginBottom: 28 }}>
            Designing Spaces<br />
            <span style={{ color: "#d97706", fontStyle: "italic" }}>That Inspire</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: "#64748b", fontWeight: 300, marginBottom: 20 }}>
            D-Sketch Architecture was founded with a single belief — that great spaces have the power to transform lives. From the very first sketch to the final detail, we pour creativity, precision, and passion into every project we touch.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: "#64748b", fontWeight: 300 }}>
            Based in the heart of the city, our team of architects and designers brings together decades of experience across residential, commercial, and hospitality projects — always guided by your vision.
          </p>
        </div>
      </div>

      {/* ── SECTION 2: Stats Bar ── */}
      <div style={{ background: "#0f172a", padding: "48px 64px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {[
          { num: "300+", label: "Projects Completed" },
          { num: "150+", label: "Happy Clients" },
          { num: "98%",  label: "Client Satisfaction" },
          { num: "25+",  label: "Design Awards" },
        ].map((s, i) => (
          <div key={s.label} style={{
            textAlign: "center",
            padding: "8px 0",
            borderRight: i !== 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
          }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 42, fontWeight: 700, color: "#d97706", lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#94a3b8", marginTop: 10 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── SECTION 3: Who We Are ── */}
      <div style={{ background: "#f8f7f4", padding: "80px 64px", display: "flex", gap: 64, alignItems: "flex-start" }}>

        {/* Left label */}
        <div style={{ flexShrink: 0, width: 260 }}>
          <div style={{ width: 40, height: 3, background: "#d97706", marginBottom: 24 }} />
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: "#0f172a", lineHeight: 1.25 }}>
            Who<br />We Are
          </h3>
        </div>

        {/* Right grid */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 48px" }}>
          {[
            { title: "Our Mission", text: "To create spaces that inspire, endure, and reflect the true essence of those who inhabit them — balancing beauty with purpose in every design decision." },
            { title: "Our Vision",  text: "To be the most trusted architecture studio for clients who believe their environment should tell their story — crafted with integrity, innovation, and artistry." },
            { title: "What We Do", text: "Architecture, interior design, spatial planning, 3D visualization, and end-to-end project management — all under one roof, all tailored to you." },
            { title: "Our Values", text: "Honesty, craftsmanship, and collaboration. We believe the best designs come from listening deeply, thinking boldly, and executing flawlessly." },
          ].map((v) => (
            <div key={v.title}>
              <h4 style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "#d97706", fontWeight: 500, marginBottom: 12 }}>{v.title}</h4>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "#64748b", fontWeight: 300 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
      <hr
  style={{
    border: "none",
    height: "2px",
    backgroundColor: "#adafb2",
    margin: "0 100px",
  }}
/>
    </section>
  );
}

export default About;