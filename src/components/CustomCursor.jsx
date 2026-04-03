import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check for touch device
    if ("ontouchstart" in window) return;

    const onMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onMouseOver = (e) => {
      const tag = e.target.closest("a, button, .video-card, .project-card, .btn-primary, .btn-outline");
      if (tag) {
        cursor.classList.add("hovering");
      } else {
        cursor.classList.remove("hovering");
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    let raf;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      cursor.style.left = `${pos.current.x}px`;
      cursor.style.top = `${pos.current.y}px`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
