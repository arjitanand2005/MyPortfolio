import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsapReveal from "../hooks/useGsapReveal";

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(
          { val: 0 },
          {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: function () {
              setCount(Math.round(this.targets()[0].val));
            },
          }
        );
      },
      once: true,
    });

    return () => trigger.kill();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const containerRef = useGsapReveal(".reveal", { stagger: 0.12 });

  return (
    <section className="section" id="about" ref={containerRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-label reveal">About Me</div>
            <h2 className="section-title reveal">
              Crafting Digital
              <br />
              <span className="text-gradient">Experiences</span>
            </h2>
            <p className="reveal">
              I'm <span className="about-highlight">Arjit Anand</span>, a B.Tech student at{" "}
              <span className="about-highlight">RGIPT</span> with a passion for
              building things that live at the intersection of technology and
              creativity.
            </p>
            <p className="reveal">
              From developing{" "}
              <span className="about-highlight">AI-powered applications</span>{" "}
              and scalable web platforms to producing{" "}
              <span className="about-highlight">cinematic video edits</span>, I
              bring a unique blend of technical depth and creative vision to
              every project.
            </p>
            <p className="reveal">
              My focus areas include{" "}
              <span className="about-highlight">
                Artificial Intelligence, Full-Stack Web Development,
              </span>{" "}
              and <span className="about-highlight">Creative Video Editing</span>.
            </p>

            <div className="about-stats reveal">
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter target={10} suffix="+" />
                </div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter target={15} suffix="+" />
                </div>
                <div className="stat-label">Skills</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter target={2} suffix="+" />
                </div>
                <div className="stat-label">Years Exp</div>
              </div>
            </div>
          </div>

          <div className="about-visual reveal">
            <div className="about-visual-ring">
              <div className="about-visual-inner">AA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
