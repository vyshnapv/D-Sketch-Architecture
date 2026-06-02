import { useState } from "react";

// ─── PROJECT DATA ────────────────────────────────────────────
// ↓↓↓  EDIT THIS ARRAY WITH YOUR REAL PROJECTS  ↓↓↓
const PROJECTS = [
  {
    id: 1,
    title: "Al Rashid Residence",
    category: "Residential",
    location: "Malappuram, Kerala",
    year: "2024",
    area: "4,200 sq ft",
    description:
      "A grand contemporary villa blending traditional Kerala elements with clean modern lines. Featuring double-height ceilings, natural stone accents, and expansive indoor-outdoor living spaces.",
    // ← REPLACE with your image URL or local path like "/projects/project1.jpg"
    image: "/Projects/project1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Horizon Commercial Hub",
    category: "Commercial",
    location: "Kozhikode, Kerala",
    year: "2023",
    area: "12,800 sq ft",
    description:
      "A multi-use commercial complex designed for energy efficiency and flexible workspace configurations, with a striking façade of louvered sunshades.",
    // ← REPLACE with your image URL or local path like "/projects/project2.jpg"
    image: "/Projects/project2.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Serenity Interiors",
    category: "Interior",
    location: "Calicut, Kerala",
    year: "2024",
    area: "2,600 sq ft",
    description:
      "A full apartment interior transformation — warm walnut millwork, custom partitions, and curated lighting deliver a serene yet sophisticated home.",
    // ← REPLACE with your image URL or local path like "/projects/project3.jpg"
    image: "/Projects/project3.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "The Green Courtyard Villa",
    category: "Residential",
    location: "Tirur, Kerala",
    year: "2023",
    area: "3,600 sq ft",
    description:
      "Designed around a central landscaped courtyard that draws natural light deep into the home, this project celebrates biophilic design principles.",
    // ← REPLACE with your image URL or local path like "/projects/project4.jpg"
    image: "/Projects/project4.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Spice Route Boutique Hotel",
    category: "Hospitality",
    location: "Malappuram, Kerala",
    year: "2022",
    area: "9,000 sq ft",
    description:
      "A heritage-inspired boutique hotel that weaves antique craftsmanship with contemporary amenities — carved wood screens, handmade tiles, and lush garden views.",
    // ← REPLACE with your image URL or local path like "/projects/project5.jpg"
    image: "/Projects/project5.jpg",
    featured: true,
  },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Interior", "Hospitality"];

// ─── COMPONENT ───────────────────────────────────────────────
function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f7f4" }}
    >
      {/* ── HERO ── */}
      <div className="projects-hero">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
          alt="Projects Hero"
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
            background: "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.5) 100%)",
          }}
        />

        {/* Hero content wrapper */}
        <div className="projects-hero-content">
          <div className="projects-hero-text">
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
              Our Work
            </p>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Projects That
              <br />
              <span style={{ color: "#d97706", fontStyle: "italic" }}>
                Define Spaces
              </span>
            </h1>
            <div
              style={{
                width: 60,
                height: 3,
                background: "#d97706",
                marginTop: 28,
              }}
            />

            {/* CTA Buttons */}
            <div className="projects-hero-buttons">
              <a
                href="#projects-grid"
                className="projects-btn projects-btn-primary"
              >
                <span className="projects-btn-text">View Projects</span>
                <span className="projects-btn-arrow">↓</span>
              </a>
              <a
                href="#contact"
                className="projects-btn projects-btn-outline"
              >
                <span className="projects-btn-text">Contact Us</span>
                <span className="projects-btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Count badge — in flow, not absolutely positioned */}
          <div className="projects-hero-badge">
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 42,
                fontWeight: 700,
                color: "white",
                lineHeight: 1,
              }}
            >
              300+
            </div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                marginTop: 6,
              }}
            >
              Projects Delivered
            </div>
          </div>
        </div>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="projects-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`projects-filter-btn ${active === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── GRID ── */}
      <div id="projects-grid" className="projects-grid">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setSelected(project)}
            // make first featured card span 2 cols
            wide={project.featured && i === 0}
          />
        ))}
      </div>

      {/* ── LIGHTBOX ── */}
      {selected && (
        <Lightbox project={selected} onClose={() => setSelected(null)} />
      )}

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        /* ── Hero ── */
        .projects-hero {
          position: relative;
          min-height: 480px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .projects-hero-content {
          position: relative;
          width: 100%;
          padding: 80px 80px 60px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
        }
        .projects-hero-text {
          flex: 1;
          min-width: 0;
        }

        /* ── CTA Buttons ── */
        .projects-hero-buttons {
          display: flex;
          gap: 16px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
        .projects-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
          position: relative;
          overflow: hidden;
        }
        .projects-btn-primary {
          background: #d97706;
          color: white;
          border: 2px solid #d97706;
        }
        .projects-btn-primary:hover {
          background: #b45309;
          border-color: #b45309;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(217,119,6,0.35);
        }
        .projects-btn-outline {
          background: rgba(255,255,255,0.08);
          color: white;
          border: 2px solid rgba(255,255,255,0.35);
          backdrop-filter: blur(8px);
        }
        .projects-btn-outline:hover {
          background: white;
          color: #0f172a;
          border-color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.2);
        }
        .projects-btn-arrow {
          font-size: 16px;
          line-height: 1;
          transition: transform 0.3s;
        }
        .projects-btn:hover .projects-btn-arrow {
          transform: translateX(4px);
        }
        .projects-btn-primary:hover .projects-btn-arrow {
          transform: translateY(2px);
        }

        /* ── Badge ── */
        .projects-hero-badge {
          flex-shrink: 0;
          background: #d97706;
          padding: 24px 36px;
          text-align: center;
        }

        /* ── Filter Tabs ── */
        .projects-filters {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 32px 40px 0;
          flex-wrap: wrap;
        }
        .projects-filter-btn {
          background: transparent;
          border: 1.5px solid #cbd5e1;
          padding: 10px 24px;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          color: #64748b;
          cursor: pointer;
          transition: all 0.25s;
        }
        .projects-filter-btn:hover {
          border-color: #d97706;
          color: #d97706;
        }
        .projects-filter-btn.active {
          background: #d97706;
          border-color: #d97706;
          color: white;
        }

        /* ── Grid ── */
        .projects-grid {
          padding: 40px 80px 72px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
        }

        /* ── Project Card wide ── */
        .project-card-wide {
          grid-column: span 2;
          aspect-ratio: 16/7;
        }
        .project-card-normal {
          grid-column: span 1;
          aspect-ratio: 4/3;
        }

        /* ── Lightbox ── */
        .lightbox-inner {
          background: white;
          max-width: 900px;
          width: 100%;
          display: flex;
          max-height: 90vh;
          overflow: hidden;
        }
        .lightbox-image {
          width: 55%;
          flex-shrink: 0;
        }
        .lightbox-detail {
          flex: 1;
          padding: 48px 40px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        /* ── TABLET — max-width: 1024px ── */
        @media (max-width: 1024px) {
          .projects-hero-content {
            padding: 60px 48px 48px;
            flex-direction: column;
            align-items: flex-start;
          }
          .projects-hero-badge {
            align-self: flex-start;
          }
          .projects-grid {
            padding: 40px 48px 60px;
            grid-template-columns: repeat(2, 1fr);
            gap: 6px;
          }
          .project-card-wide {
            grid-column: span 2;
            aspect-ratio: 16/7;
          }
        }

        /* ── MOBILE — max-width: 600px ── */
        @media (max-width: 600px) {
          .projects-hero {
            min-height: 520px;
          }
          .projects-hero-content {
            padding: 100px 24px 40px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .projects-hero-badge {
            padding: 16px 24px;
          }
          .projects-hero-badge > div:first-child {
            font-size: 32px !important;
          }
          .projects-hero-buttons {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .projects-btn {
            justify-content: center;
            padding: 14px 24px;
            width: 100%;
            box-sizing: border-box;
          }
          .projects-filters {
            padding: 24px 16px 0;
            gap: 6px;
          }
          .projects-filter-btn {
            padding: 8px 16px;
            font-size: 10px;
          }
          .projects-grid {
            padding: 24px 16px 48px;
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .project-card-wide {
            grid-column: span 1;
            aspect-ratio: 3/4;
          }
          .project-card-normal {
            aspect-ratio: 3/4;
          }
          .lightbox-inner {
            flex-direction: column;
            max-height: 95vh;
            overflow-y: auto;
          }
          .lightbox-image {
            width: 100%;
            height: 240px;
            flex-shrink: 0;
          }
          .lightbox-detail {
            padding: 28px 24px;
          }
        }
      `}</style>
    </section>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────
function ProjectCard({ project, onOpen, wide }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={wide ? "project-card-wide" : "project-card-normal"}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: 4,
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      />

      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.55) 50%, rgba(15,23,42,0.15) 100%)"
            : "linear-gradient(to top, rgba(15,23,42,0.80) 0%, rgba(15,23,42,0.20) 40%, transparent 100%)",
          transition: "background 0.4s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 0,
        }}
      >
        {/* category pill — absolutely positioned top-left */}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            background: "#d97706",
            padding: "5px 14px",
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "white",
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {project.category}
        </div>

        {/* Bottom content panel */}
        <div
          style={{
            padding: wide ? "28px 32px" : "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {/* Title */}
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: wide ? "clamp(20px, 2.5vw, 30px)" : "clamp(18px, 2vw, 24px)",
              fontWeight: 700,
              color: "white",
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {project.title}
          </h3>

          {/* Location & Year */}
          <p
            style={{
              fontSize: 11,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              margin: "8px 0 0",
              lineHeight: 1.4,
            }}
          >
            {project.location}  ·  {project.year}
          </p>

          {/* Accent line */}
          <div
            style={{
              width: 36,
              height: 2,
              background: "#d97706",
              marginTop: 12,
              transition: "width 0.3s",
              ...(hovered ? { width: 56 } : {}),
            }}
          />

          {/* hover reveal */}
          <div
            style={{
              maxHeight: hovered ? 200 : 0,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
              overflow: "hidden",
              marginTop: hovered ? 14 : 0,
            }}
          >
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.75)",
                margin: "0 0 16px",
                fontWeight: 300,
                maxWidth: 440,
              }}
            >
              {project.description}
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#d97706",
                fontWeight: 600,
              }}
            >
              View Project
              <span style={{ fontSize: 16, lineHeight: 1, transition: "transform 0.3s", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── LIGHTBOX ─────────────────────────────────────────────────
function Lightbox({ project, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.92)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px, 4vw, 40px)",
      }}
    >
      <div
        className="lightbox-inner"
        onClick={(e) => e.stopPropagation()}
      >
        {/* image */}
        <div className="lightbox-image">
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* detail */}
        <div className="lightbox-detail">
          <div style={{ marginBottom: "auto" }}>
            <p
              style={{
                fontSize: 10,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#d97706",
                fontWeight: 600,
                marginBottom: 14,
              }}
            >
              {project.category}
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(22px, 3vw, 28px)",
                fontWeight: 700,
                color: "#0f172a",
                margin: "0 0 24px",
                lineHeight: 1.25,
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.85,
                color: "#64748b",
                fontWeight: 300,
                marginBottom: 32,
              }}
            >
              {project.description}
            </p>

            {/* meta */}
            {[
              { label: "Location", value: project.location },
              { label: "Year", value: project.year },
              { label: "Area", value: project.area },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #f1f5f9",
                  padding: "12px 0",
                  fontSize: 13,
                }}
              >
                <span
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    fontSize: 10,
                    color: "#94a3b8",
                    fontWeight: 500,
                  }}
                >
                  {m.label}
                </span>
                <span style={{ color: "#0f172a", fontWeight: 500 }}>{m.value}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            style={{
              marginTop: 36,
              background: "#d97706",
              color: "white",
              border: "none",
              padding: "14px 28px",
              fontSize: 10,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              alignSelf: "flex-start",
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#b45309")}
            onMouseLeave={(e) => (e.target.style.background = "#d97706")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;