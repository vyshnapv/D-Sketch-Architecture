import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

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

        .nb-inner {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 88px;
          transition: height 0.35s ease;
        }
        .nb-root.nb-scrolled .nb-inner { height: 68px; }

        /* ── LOGO ── */
        .nb-logo {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          gap: 0;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nb-logo-main {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 2.4rem;
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
          font-size: 2.9rem;
          line-height: 1;
        }

        .nb-logo-dash {
          color: rgba(255,255,255,0.25);
          font-weight: 300;
          font-size: 2rem;
          margin: 0 1px;
        }

        .nb-logo-sketch { color: #fff; }

        .nb-logo-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 3px;
        }

        .nb-logo-line {
          width: 18px;
          height: 1px;
          background: #f59e0b;
          flex-shrink: 0;
        }

        .nb-logo-sub {
          font-size: 0.55rem;
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
        }

        .nb-link {
          position: relative;
          font-size: 0.78rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          padding: 0.55rem 1rem;
          border-radius: 3px;
          transition: color 0.2s;
          overflow: hidden;
        }
        .nb-link::before {
          content: '';
          position: absolute;
          inset: 0;
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
        }

        .nb-cta {
          position: relative;
          display: flex;
          align-items: center;
          gap: 9px;
          background: transparent;
          color: #fff;
          border: 1px solid rgba(245,158,11,0.6);
          padding: 0.6rem 1.4rem;
          border-radius: 3px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          overflow: hidden;
          transition: color 0.3s, border-color 0.3s;
          white-space: nowrap;
        }
        .nb-cta::before {
          content: '';
          position: absolute;
          inset: 0;
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
          width: 40px; height: 40px;
          padding: 8px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .nb-ham:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); }
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

        /* ── MOBILE OVERLAY ── */
        .nb-overlay {
          display: none;
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          z-index: 9998;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .nb-overlay.nb-open { opacity: 1; pointer-events: all; }

        /* ── MOBILE DRAWER ── */
        .nb-drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(340px, 88vw);
          height: 100dvh;
          background: #0a0a0a;
          border-left: 1px solid rgba(255,255,255,0.07);
          z-index: 9999;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.32, 0, 0.15, 1);
          display: flex;
          flex-direction: column;
          padding: 2rem 2rem 2.5rem;
        }
        .nb-drawer.nb-open { transform: translateX(0); }

        .nb-drawer-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 3rem;
        }

        .nb-drawer-close {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: none;
          cursor: pointer;
          color: rgba(255,255,255,0.5);
          transition: background 0.15s, color 0.15s;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .nb-drawer-close:hover { background: rgba(255,255,255,0.08); color: #fff; }

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
          transition: all 0.18s;
          group: true;
        }
        .nb-drawer-link-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
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
        }
        .nb-drawer-cta:hover { background: #d97706; transform: translateY(-1px); }

        .nb-drawer-foot {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-align: center;
        }

        @media (max-width: 960px) {
          .nb-nav, .nb-cta-wrap { display: none; }
          .nb-ham { display: flex; }
          .nb-overlay { display: block; }
          .nb-inner { padding: 0 1.5rem; }
        }

        @media (max-width: 480px) {
          .nb-logo-main { font-size: 2rem; }
          .nb-logo-d { font-size: 2.4rem; }
        }
      `}</style>

      {/* Overlay */}
      <div className={`nb-overlay ${menuOpen ? "nb-open" : ""}`} onClick={() => setMenuOpen(false)} />

      {/* Drawer */}
      <div className={`nb-drawer ${menuOpen ? "nb-open" : ""}`}>
        <div className="nb-drawer-head">
          <a className="nb-logo" href="#home">
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
          <button className="nb-drawer-close" onClick={() => setMenuOpen(false)}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="nb-drawer-links">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`nb-drawer-link ${active === link ? "nb-active" : ""}`}
              onClick={() => { setActive(link); setMenuOpen(false); }}
            >
              <div className="nb-drawer-link-left">
                <span className="nb-drawer-link-num">0{i + 1}</span>
                <span className="nb-drawer-link-text">{link}</span>
              </div>
              <span className="nb-drawer-link-arr">→</span>
            </a>
          ))}
        </div>

        <div className="nb-drawer-bottom">
          <button className="nb-drawer-cta">Get Free Quote</button>
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

          {/* Nav */}
          <nav className="nb-nav">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`nb-link ${active === link ? "nb-active" : ""}`}
                onClick={() => setActive(link)}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="nb-cta-wrap">
            <button className="nb-cta">
              <span>Get Free Quote</span>
              <svg className="nb-cta-arrow" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`nb-ham ${menuOpen ? "nb-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

        </div>
      </header>
    </>
  );
}

export default Navbar;