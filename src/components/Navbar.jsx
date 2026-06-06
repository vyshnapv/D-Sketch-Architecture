import { useState, useEffect } from "react";

const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  const handleQuoteClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setActive("Contact");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let observer;
    const timer = setTimeout(() => {
      const sectionIds = navLinks.map((link) => link.toLowerCase());
      const sections = sectionIds.map((id) => document.getElementById(id));

      const observerOptions = {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const activeLink = id.charAt(0).toUpperCase() + id.slice(1);
            setActive(activeLink);
          }
        });
      }, observerOptions);

      sections.forEach((section) => {
        if (section) observer.observe(section);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    if (menuOpen) {
      el.style.overflow = "hidden";
      el.style.touchAction = "none";
    } else {
      el.style.overflow = "";
      el.style.touchAction = "";
    }
    return () => {
      el.style.overflow = "";
      el.style.touchAction = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── ROOT ── */
        .nb-root {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          z-index: 9999;
          font-family: 'Outfit', sans-serif;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .nb-root.nb-scrolled {
          background: rgba(10,10,10,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.4);
        }
        .nb-root.nb-top {
          background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%);
        }

        /* ── INNER ── */
        .nb-inner {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 88px;
          transition: height 0.35s ease;
          gap: 1rem;
        }
        .nb-root.nb-scrolled .nb-inner { height: 68px; }

        /* ── LOGO ── */
        .nb-logo {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nb-logo-main {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          line-height: 0.95;
          color: #fff;
          letter-spacing: -1px;
          display: flex;
          align-items: baseline;
          gap: 2px;
          transition: transform 0.2s ease;
        }
        .nb-logo:hover .nb-logo-main { transform: translateY(-1px); }
        .nb-logo-d {
          color: #f59e0b;
          font-size: clamp(1.9rem, 3.5vw, 2.9rem);
          line-height: 1;
        }
        .nb-logo-dash {
          color: rgba(255,255,255,0.25);
          font-weight: 300;
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          margin: 0 1px;
        }
        .nb-logo-sketch { color: #fff; }
        .nb-logo-tag { display: flex; align-items: center; gap: 6px; margin-top: 3px; }
        .nb-logo-line { width: 18px; height: 1px; background: #f59e0b; flex-shrink: 0; }
        .nb-logo-sub {
          font-size: clamp(0.48rem, 0.9vw, 0.55rem);
          font-weight: 300;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        /* ── DESKTOP NAV ── */
        .nb-nav {
          display: flex;
          align-items: center;
          gap: 0.15rem;
          flex: 1;
          justify-content: center;
        }
        .nb-link {
          position: relative;
          font-size: clamp(0.7rem, 1vw, 0.78rem);
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          padding: 0.55rem clamp(0.6rem, 1.2vw, 1rem);
          border-radius: 3px;
          transition: color 0.2s;
          overflow: hidden;
          white-space: nowrap;
        }
        .nb-link::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.06);
          border-radius: 3px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nb-link:hover::before { opacity: 1; }
        .nb-link:hover { color: #fff; }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 50%;
          width: 0; height: 1.5px;
          background: #f59e0b;
          transform: translateX(-50%);
          transition: width 0.25s ease;
          border-radius: 2px;
        }
        .nb-link:hover::after,
        .nb-link.nb-active::after { width: calc(100% - 2rem); }
        .nb-link.nb-active { color: #fff; font-weight: 500; }

        /* ── CTA ── */
        .nb-cta-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
          margin-left: auto;
        }
        .nb-cta {
          position: relative;
          display: flex; align-items: center; gap: 9px;
          background: transparent; color: #fff;
          border: 1px solid rgba(245,158,11,0.6);
          padding: 0.6rem clamp(0.8rem, 1.5vw, 1.4rem);
          border-radius: 3px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.7rem, 1vw, 0.78rem);
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer; overflow: hidden;
          transition: color 0.3s, border-color 0.3s;
          white-space: nowrap;
        }
        .nb-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: #f59e0b;
          transform: translateX(-101%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }
        .nb-cta:hover::before { transform: translateX(0); }
        .nb-cta:hover { color: #000; border-color: #f59e0b; }
        .nb-cta span, .nb-cta svg { position: relative; z-index: 1; }
        .nb-cta-arrow { width: 13px; height: 13px; transition: transform 0.2s; }
        .nb-cta:hover .nb-cta-arrow { transform: translateX(3px); }

        /* ── HAMBURGER ── */
        .nb-ham {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 44px; height: 44px;
          padding: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .nb-ham:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.25);
        }
        .nb-ham span {
          display: block;
          height: 1.5px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }
        .nb-ham span:nth-child(1) { width: 22px; }
        .nb-ham span:nth-child(2) { width: 15px; }
        .nb-ham span:nth-child(3) { width: 19px; }
        .nb-ham.nb-open span:nth-child(1) { width: 20px; transform: translateY(6.5px) rotate(45deg); }
        .nb-ham.nb-open span:nth-child(2) { opacity: 0; width: 0; }
        .nb-ham.nb-open span:nth-child(3) { width: 20px; transform: translateY(-6.5px) rotate(-45deg); }

        /* ── OVERLAY ── */
        .nb-overlay {
          display: none;
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9998;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .nb-overlay.nb-open { opacity: 1; pointer-events: all; }

        /* ── DRAWER ── */
        .nb-drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(340px, 88vw);
          height: 100svh;
          height: 100dvh;
          background: #0a0a0a;
          border-left: 1px solid rgba(255,255,255,0.07);
          z-index: 9999;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.32, 0, 0.15, 1);
          display: flex;
          flex-direction: column;
          padding: 2rem 1.75rem 2.5rem;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          overflow-y: auto;
        }
        .nb-drawer.nb-open { transform: translateX(0); }

        .nb-drawer-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          padding-top: 1rem;
          flex-shrink: 0;
        }

        .nb-drawer-close {
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: none;
          cursor: pointer;
          color: rgba(255,255,255,0.5);
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .nb-drawer-close:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
          border-color: rgba(255,255,255,0.2);
        }

        .nb-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .nb-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          padding: 1rem 1.1rem;
          border-radius: 6px;
          border: 1px solid transparent;
          transition: background 0.18s, border-color 0.18s;
          min-height: 56px;
        }
        .nb-drawer-link-left { display: flex; align-items: center; gap: 12px; }
        .nb-drawer-link-num {
          font-size: 0.6rem;
          font-weight: 300;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
          width: 16px;
          transition: color 0.18s;
        }
        .nb-drawer-link-text {
          font-size: 1.05rem;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.02em;
          transition: color 0.18s;
        }
        .nb-drawer-link-arr {
          color: rgba(255,255,255,0.15);
          font-size: 1rem;
          transition: color 0.18s, transform 0.18s;
        }
        .nb-drawer-link:hover,
        .nb-drawer-link.nb-active {
          background: rgba(245,158,11,0.06);
          border-color: rgba(245,158,11,0.15);
        }
        .nb-drawer-link:hover .nb-drawer-link-text,
        .nb-drawer-link.nb-active .nb-drawer-link-text { color: #f59e0b; }
        .nb-drawer-link:hover .nb-drawer-link-num,
        .nb-drawer-link.nb-active .nb-drawer-link-num { color: rgba(245,158,11,0.5); }
        .nb-drawer-link:hover .nb-drawer-link-arr,
        .nb-drawer-link.nb-active .nb-drawer-link-arr {
          color: #f59e0b;
          transform: translateX(3px);
        }
        .nb-drawer-link.nb-active .nb-drawer-link-text { font-weight: 500; }

        .nb-drawer-bottom {
          margin-top: auto;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .nb-drawer-cta {
          width: 100%;
          background: #f59e0b;
          color: #000;
          border: none;
          padding: 1rem;
          border-radius: 5px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: background 0.2s, transform 0.15s;
          margin-bottom: 1.25rem;
          min-height: 48px;
        }
        .nb-drawer-cta:hover { background: #d97706; transform: translateY(-1px); }
        .nb-drawer-foot {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-align: center;
        }

        /* ════════════════════════════════
           BREAKPOINTS
        ════════════════════════════════ */

        /* Large desktops ≥ 1400px: full layout with generous padding */
        @media (min-width: 1400px) {
          .nb-inner { padding: 0 3rem; }
        }

        /* Medium desktops 1101px–1399px: tighter spacing so everything fits */
        @media (max-width: 1399px) and (min-width: 1101px) {
          .nb-inner { padding: 0 2rem; }
          .nb-link { padding: 0.55rem 0.7rem; }
          .nb-cta { padding: 0.6rem 1rem; }
        }

        /* ─── KEY FIX ───
           At ≤ 1100px the desktop nav + CTA no longer fit alongside the logo.
           Hide them and show the hamburger instead.
        ──────────────── */
        @media (max-width: 1100px) {
          .nb-nav,
          .nb-cta-wrap { display: none !important; }
          .nb-ham { display: flex; }
          .nb-overlay { display: block; }
          .nb-inner { padding: 0 1.5rem; }
        }

        /* Large phones 481px–768px */
        @media (max-width: 768px) {
          .nb-inner { padding: 0 1.25rem; height: 76px; }
          .nb-root.nb-scrolled .nb-inner { height: 62px; }
        }

        /* Small phones 361px–480px */
        @media (max-width: 480px) {
          .nb-logo-main { font-size: 1.9rem; }
          .nb-logo-d { font-size: 2.3rem; }
          .nb-logo-dash { font-size: 1.6rem; }
          .nb-inner { height: 72px; padding: 0 1.1rem; }
          .nb-root.nb-scrolled .nb-inner { height: 60px; }
          .nb-drawer { padding: 1.5rem 1.25rem 2rem; }
          .nb-drawer-head { margin-bottom: 1.75rem; }
        }

        /* Extra small phones ≤ 360px */
        @media (max-width: 360px) {
          .nb-logo-main { font-size: 1.6rem; }
          .nb-logo-d { font-size: 1.95rem; }
          .nb-logo-dash { font-size: 1.4rem; }
          .nb-logo-sub { letter-spacing: 0.28em; }
          .nb-inner { padding: 0 0.9rem; height: 68px; }
          .nb-root.nb-scrolled .nb-inner { height: 56px; }
          .nb-ham { width: 40px; height: 40px; }
          .nb-drawer { padding: 1.25rem 1rem 1.75rem; }
          .nb-drawer-link { padding: 0.85rem 0.9rem; }
          .nb-drawer-link-text { font-size: 0.95rem; }
        }

        /* Very wide / 4K screens ≥ 1800px */
        @media (min-width: 1800px) {
          .nb-inner { max-width: 1600px; padding: 0 4rem; }
          .nb-logo-main { font-size: 2.8rem; }
          .nb-logo-d { font-size: 3.3rem; }
          .nb-link { font-size: 0.85rem; padding: 0.6rem 1.2rem; }
          .nb-cta { font-size: 0.85rem; padding: 0.7rem 1.8rem; }
        }

        /* Landscape phones (height ≤ 500px) */
        @media (max-height: 500px) and (orientation: landscape) {
          .nb-inner { height: 60px; }
          .nb-root.nb-scrolled .nb-inner { height: 52px; }
          .nb-drawer { padding: 1rem 1.5rem 1.25rem; overflow-y: auto; }
          .nb-drawer-head { margin-bottom: 1.25rem; }
          .nb-drawer-link { min-height: 44px; padding: 0.65rem 1rem; }
          .nb-drawer-link-text { font-size: 0.9rem; }
          .nb-drawer-bottom { padding-top: 1.25rem; }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .nb-drawer, .nb-overlay, .nb-link,
          .nb-cta, .nb-cta::before,
          .nb-ham span { transition: none !important; }
        }
      `}</style>

      {/* Overlay */}
      <div
        className={`nb-overlay ${menuOpen ? "nb-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`nb-drawer ${menuOpen ? "nb-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="nb-drawer-head">
          
        </div>

        <div className="nb-drawer-links">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`nb-drawer-link ${active === link ? "nb-active" : ""}`}
              onClick={() => { setActive(link); closeMenu(); }}
            >
              <div className="nb-drawer-link-left">
                <span className="nb-drawer-link-num">0{i + 1}</span>
                <span className="nb-drawer-link-text">{link}</span>
              </div>
              <span className="nb-drawer-link-arr" aria-hidden="true">→</span>
            </a>
          ))}
        </div>

        <div className="nb-drawer-bottom">
          <button
            className="nb-drawer-cta"
            onClick={() => { handleQuoteClick(); closeMenu(); }}
          >
            Get Free Quote
          </button>
          <div className="nb-drawer-foot">© 2025 D-Sketch Architecture</div>
        </div>
      </div>

      {/* Navbar */}
      <header className={`nb-root ${scrolled ? "nb-scrolled" : "nb-top"}`}>
        <div className="nb-inner">

          {/* Logo */}
          <a className="nb-logo" href="#home" onClick={() => setActive("Home")}>
            <div className="nb-logo-main">
              <span className="nb-logo-d">D</span>
              <span className="nb-logo-dash">–</span>
              <span className="nb-logo-sketch">Sketch</span>
            </div>
            <div className="nb-logo-tag">
              <div className="nb-logo-line" />
              <span className="nb-logo-sub">Architecture</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="nb-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`nb-link ${active === link ? "nb-active" : ""}`}
                onClick={() => setActive(link)}
                aria-current={active === link ? "page" : undefined}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA — hidden at ≤ 1100px via CSS */}
          <div className="nb-cta-wrap">
            <button className="nb-cta" onClick={handleQuoteClick}>
              <span>Get Free Quote</span>
              <svg
                className="nb-cta-arrow"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 7H13M8 2L13 7L8 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Hamburger — shown at ≤ 1100px via CSS */}
          <button
            className={`nb-ham ${menuOpen ? "nb-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>

        </div>
      </header>
    </>
  );
}

export default Navbar;