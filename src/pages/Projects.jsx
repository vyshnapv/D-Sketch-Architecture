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
      <div
        style={{
          position: "relative",
          height: 440,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
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
            background: "rgba(15,23,42,0.65)",
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
            Our Work
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
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
        </div>

        {/* bottom count badge */}
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 48,
            background: "#d97706",
            padding: "20px 32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 38,
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

      {/* ── GRID ── */}
      <div
        style={{
          padding: "72px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
        }}
      >
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
    </section>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────
function ProjectCard({ project, onOpen, wide }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: wide ? "span 2" : "span 1",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: wide ? "16/7" : "4/3",
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
            ? "rgba(15,23,42,0.75)"
            : "rgba(15,23,42,0.35)",
          transition: "background 0.4s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 32,
        }}
      >
        {/* category pill */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            background: "#d97706",
            padding: "5px 14px",
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "white",
            fontWeight: 600,
          }}
        >
          {project.category}
        </div>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: wide ? 28 : 22,
            fontWeight: 700,
            color: "white",
            margin: "0 0 8px",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: 12,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            margin: 0,
          }}
        >
          {project.location} · {project.year}
        </p>

        {/* hover reveal */}
        <div
          style={{
            marginTop: 20,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.35s",
          }}
        >
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.8)",
              margin: "0 0 18px",
              fontWeight: 300,
              maxWidth: 480,
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
            <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
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
        padding: 40,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          maxWidth: 900,
          width: "100%",
          display: "flex",
          maxHeight: "90vh",
          overflow: "hidden",
        }}
      >
        {/* image */}
        <div style={{ width: "55%", flexShrink: 0 }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* detail */}
        <div
          style={{
            flex: 1,
            padding: "48px 40px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
                fontSize: 28,
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
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;