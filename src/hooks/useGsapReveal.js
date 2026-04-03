import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapReveal(selector = ".reveal", options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(selector);
      if (!elements?.length) return;

      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            y: 60,
            opacity: 0,
            scale: 0.97,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: options.duration || 1,
            delay: options.stagger ? i * (options.stagger || 0.1) : 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: options.start || "top 85%",
              end: options.end || "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector, options.duration, options.stagger, options.start, options.end]);

  return containerRef;
}
