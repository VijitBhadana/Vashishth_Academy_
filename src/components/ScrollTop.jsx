import { useState, useEffect } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ position: "fixed", bottom: 28, right: 28, width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg,#e84118,#c23412)", color: "#fff", fontSize: 18, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(232,65,24,.4)", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform .2s,opacity .2s", opacity: visible ? 1 : 0, pointerEvents: visible ? "all" : "none", zIndex: 999 }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
      onMouseLeave={e => e.currentTarget.style.transform = ""}>
      ↑
    </button>
  );
}