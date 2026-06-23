import { useEffect, useRef, useState } from "react";

/* ── Reveal when element enters viewport ── */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Scroll-based parallax Y offset ── */
export function useParallax(speed = 0.35) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const calc = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
      setOffset(-rect.top * speed);
    };
    window.addEventListener("scroll", calc, { passive: true });
    calc();
    return () => window.removeEventListener("scroll", calc);
  }, [speed]);
  return { ref, offset };
}

/* ── Animated heading (any tag) ── */
const EFFECTS = {
  fadeUp: {
    hidden: { opacity: 0, transform: "translateY(32px)", filter: "blur(5px)" },
    shown:  { opacity: 1, transform: "translateY(0)",    filter: "blur(0)" },
  },
  slideLeft: {
    hidden: { opacity: 0, transform: "translateX(-44px)" },
    shown:  { opacity: 1, transform: "translateX(0)" },
  },
  slideRight: {
    hidden: { opacity: 0, transform: "translateX(44px)" },
    shown:  { opacity: 1, transform: "translateX(0)" },
  },
  scaleIn: {
    hidden: { opacity: 0, transform: "scale(0.84)", filter: "blur(4px)" },
    shown:  { opacity: 1, transform: "scale(1)",    filter: "blur(0)" },
  },
};

export function AnimatedHeading({
  tag: Tag = "h2",
  children,
  effect = "fadeUp",
  delay = 0,
  style = {},
  threshold = 0.2,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  const e = EFFECTS[effect] || EFFECTS.fadeUp;
  return (
    <Tag
      ref={ref}
      style={{
        transition: `opacity 0.8s cubic-bezier(.22,.61,.36,1) ${delay}ms, transform 0.8s cubic-bezier(.22,.61,.36,1) ${delay}ms, filter 0.8s ease ${delay}ms`,
        ...(visible ? e.shown : e.hidden),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
