import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsapReveal from "../hooks/useGsapReveal";
import { skillCategories } from "../data/skills";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useGsapReveal(".reveal", { stagger: 0.1 });
  const barsRef = useRef([]);

  useEffect(() => {
    const triggers = [];

    barsRef.current.forEach((bar) => {
      if (!bar) return;
      const level = bar.dataset.level;

      bar.style.transform = "scaleX(0)";

      const trigger = ScrollTrigger.create({
        trigger: bar,
        start: "top 90%",
        onEnter: () => {
          gsap.to(bar, {
            scaleX: level / 100,
            duration: 1.2,
            ease: "power3.out",
          });
        },
        once: true,
      });

      triggers.push(trigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  let barIndex = 0;

  return (
    <section className="section" id="skills" ref={containerRef}>
      <div className="container">
        <div className="section-label reveal">Expertise</div>
        <h2 className="section-title reveal">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p className="section-subtitle reveal">
          A diverse toolkit spanning development, artificial intelligence, and
          creative production.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div
              className="skill-category-card glass-card reveal"
              key={category.title}
            >
              <div className="skill-category-title">{category.title}</div>
              {category.skills.map((skill) => {
                const idx = barIndex++;
                return (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-icon">
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <div className="skill-name">
                        {skill.name}
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          data-level={skill.level}
                          ref={(el) => (barsRef.current[idx] = el)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
