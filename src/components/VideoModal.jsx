import { useState, useEffect, useCallback } from "react";

export default function VideoModal({ video, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger open animation
    requestAnimationFrame(() => setIsOpen(true));

    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(onClose, 400);
  }, [onClose]);

  if (!video) return null;

  return (
    <div
      className={`video-modal-backdrop ${isOpen ? "open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <button
        className="video-modal-close"
        onClick={handleClose}
        aria-label="Close video"
      >
        ✕
      </button>
      <div className="video-modal-content">
        <iframe
          width="100%"
          height="100%"
          src={video.embedUrl + "?autoplay=1"}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
