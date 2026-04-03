import { FiExternalLink, FiFilm, FiPlay } from "react-icons/fi";
import useGsapReveal from "../hooks/useGsapReveal";

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1RyCpjRxWnyGsacD0_4h77xADlPP4iR6t?usp=sharing";

export default function VideoPortfolio() {
  const containerRef = useGsapReveal(".reveal", { stagger: 0.12 });

  return (
    <section
      className="section video-section"
      id="videos"
      ref={containerRef}
    >
      <div className="container">
        <div className="section-label reveal">Cinematic Work</div>
        <h2 className="section-title reveal">
          Video <span className="text-gradient">Portfolio</span>
        </h2>
        <p className="section-subtitle reveal">
          From cinematic edits and motion graphics to promotional videos —
          crafted with precision in Adobe Premiere Pro &amp; After Effects.
        </p>

        {/* Drive CTA */}
        <div className="drive-cta reveal">
          <div className="drive-cta-glow" />
          <div className="drive-cta-content">
            <div className="drive-cta-icon-ring">
              <FiPlay className="drive-cta-icon" />
            </div>
            <h3 className="drive-cta-heading">
              Watch the Full Collection
            </h3>
            <p className="drive-cta-text">
              All my cinematic edits, reels, and motion graphics — curated in
              one place. Browse the complete portfolio on Google Drive.
            </p>
            <a
              href={DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary drive-cta-btn"
              id="video-drive-link"
            >
              <span>
                <FiFilm style={{ marginRight: 8, verticalAlign: "middle" }} />
                Open Video Portfolio
              </span>
              <FiExternalLink
                style={{ position: "relative", zIndex: 1 }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
