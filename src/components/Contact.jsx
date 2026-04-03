import useGsapReveal from "../hooks/useGsapReveal";
import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

export default function Contact() {
  const containerRef = useGsapReveal(".reveal", { stagger: 0.12 });

  return (
    <section className="section contact-section" id="contact" ref={containerRef}>
      <div className="container">
        <div className="section-label reveal" style={{ justifyContent: "center" }}>
          Get In Touch
        </div>
        <h2 className="contact-heading section-title reveal">
          Let's Build Something
          <br />
          <span className="text-gradient">Extraordinary</span>
        </h2>
        <p className="section-subtitle reveal" style={{ margin: "0 auto", textAlign: "center" }}>
          Whether you have a project in mind, want to collaborate, or just want
          to say hi — my inbox is always open.
        </p>

        <div className="reveal" style={{ textAlign: "center" }}>
          <a href="mailto:arjitanand2005@gmail.com" className="contact-email">
            arjitanand2005@gmail.com
          </a>
        </div>

        <div className="contact-socials reveal">
          <a
            href="https://github.com/arjitanand2005"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arjit-anand-955106381/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:arjitanand2005@gmail.com"
            className="btn-icon"
            aria-label="Gmail"
          >
            <FiMail />
          </a>
        </div>

        <div className="contact-resume reveal" style={{ textAlign: "center" }}>
          <a href="/ARJIT_RESUME.pdf" className="btn-primary" download>
            <FiDownload />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
