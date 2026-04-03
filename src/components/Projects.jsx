import useGsapReveal from "../hooks/useGsapReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const containerRef = useGsapReveal(".reveal", { stagger: 0.15 });

  return (
    <section className="section" id="projects" ref={containerRef}>
      <div className="container">
        <div className="section-label reveal">Portfolio</div>
        <h2 className="section-title reveal">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="section-subtitle reveal">
          A selection of projects that showcase my passion for building
          intelligent, performant, and beautifully designed applications.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="reveal" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
