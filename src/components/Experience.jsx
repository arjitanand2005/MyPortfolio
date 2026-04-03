import useGsapReveal from "../hooks/useGsapReveal";
import { HiLightBulb } from "react-icons/hi2";
import { FiLayers, FiMonitor, FiFilm } from "react-icons/fi";

const steps = [
  {
    icon: HiLightBulb,
    title: "Problem Solving",
    description:
      "Every project begins with deep analysis. I break down complex problems into manageable pieces, research solutions, and architect systems that scale elegantly.",
  },
  {
    icon: FiLayers,
    title: "Building Scalable Apps",
    description:
      "From database design to API architecture, I build applications with clean code, modular patterns, and performance optimization at the core.",
  },
  {
    icon: FiMonitor,
    title: "UI/UX Focus",
    description:
      "Design isn't just visuals — it's experience. I prioritize intuitive interfaces, smooth animations, accessibility, and responsive design across all devices.",
  },
  {
    icon: FiFilm,
    title: "Storytelling in Video",
    description:
      "Video editing is about emotion and narrative. I combine color grading, motion graphics, sound design, and pacing to create compelling visual stories.",
  },
];

export default function Experience() {
  const containerRef = useGsapReveal(".reveal", { stagger: 0.15 });

  return (
    <section className="section" id="experience" ref={containerRef}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-label reveal" style={{ justifyContent: "center" }}>
            Workflow
          </div>
          <h2 className="section-title reveal">
            How I <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle reveal" style={{ margin: "0 auto 3rem" }}>
            A systematic approach to delivering excellence — from ideation to execution.
          </p>
        </div>

        <div className="experience-timeline">
          {steps.map((step, i) => (
            <div className="experience-item reveal" key={i}>
              <div className="experience-dot">
                <step.icon />
              </div>
              <div className="experience-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
