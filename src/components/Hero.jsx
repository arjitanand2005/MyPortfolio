import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ParticleCanvas from "./ParticleCanvas";
import { HiArrowDown } from "react-icons/hi2";

export default function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Split name into chars
      const nameEl = nameRef.current;
      if (nameEl) {
        const text = nameEl.textContent;
        nameEl.innerHTML = "";
        nameEl.style.opacity = 1;
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.classList.add("char");
          span.textContent = char === " " ? "\u00A0" : char;
          nameEl.appendChild(span);
        });

        const chars = nameEl.querySelectorAll(".char");

        tl.to(chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: "power3.out",
        });
      }

      tl.to(
        ".hero-eyebrow",
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

      tl.to(
        ".hero-tagline",
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

      tl.to(
        ".hero-subtext",
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

      tl.to(
        ".hero-ctas",
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

      tl.to(
        ".hero-scroll-indicator",
        { opacity: 0.6, duration: 1, ease: "power2.out" },
        "-=0.2"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="hero" ref={heroRef} id="hero">
      <ParticleCanvas />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow" style={{ transform: "translateY(20px)" }}>
          Full Stack Developer & Video Editor
        </p>

        <h1 className="hero-name" ref={nameRef}>
          Arjit Anand
        </h1>

        <p className="hero-tagline" style={{ transform: "translateY(20px)" }}>
          Building intelligent systems & cinematic experiences
        </p>

        <p className="hero-subtext" style={{ transform: "translateY(20px)" }}>
          Code &bull; Create &bull; Captivate
        </p>

        <div className="hero-ctas" style={{ transform: "translateY(20px)" }}>
          <button
            className="btn-primary"
            onClick={() => scrollToSection("#projects")}
          >
            <span>View Projects</span>
          </button>
          <button
            className="btn-outline"
            onClick={() => scrollToSection("#videos")}
          >
            Watch Edits
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
