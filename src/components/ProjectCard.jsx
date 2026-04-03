import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const gradients = {
    dsa: "linear-gradient(135deg, #0d2818, #1a4a2e, #0d1a12)",
    ai: "linear-gradient(135deg, #0d1f2b, #1a3a4a, #0d1a12)",
  };

  return (
    <div className="project-card glass-card">
      <div className="project-card-image">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} interface`}
            className="project-card-thumbnail"
          />
        ) : (
          <div
            className="project-card-image-inner"
            style={{ background: gradients[project.image] || gradients.dsa }}
          >
            🚀
          </div>
        )}
        <div className="project-card-overlay" />
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card-links">
          <a
            href={project.liveUrl}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
