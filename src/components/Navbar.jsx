import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Edits", href: "#videos" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="container">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            A<span>.</span>A
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={(e) => scrollTo(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div
            className={`nav-hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link"
            onClick={(e) => scrollTo(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
