import { useEffect } from "react";
import { C, modalContent } from "../data/data";

export default function Modal({ id, onClose }) {
  const content = id ? modalContent[id] : null;

  useEffect(() => {
    document.body.style.overflow = id ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [id]);

  if (!content) return null;

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(10,20,40,.7)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(4px)" }}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 14, width: "100%", maxWidth: 680, maxHeight: "85vh", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 20px 60px rgba(0,0,0,.4)", fontFamily: "'Hind',sans-serif" }}>
        {/* Header */}
        <div style={{ background: `linear-gradient(135deg,${C.navy},#0d4a7a)`, padding: "22px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div>
            <span style={{ display: "inline-block", background: C.red, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", padding: "3px 12px", borderRadius: 3, marginBottom: 8 }}>{content.tag}</span>
            <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: ".02em", margin: 0 }}>{content.title}</h2>
          </div>
          <button onClick={onClose} style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.25)", color: "#fff", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background .2s" }}
            onMouseEnter={e => e.currentTarget.style.background = C.red}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,.15)"}>
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ overflowY: "auto", padding: "24px 28px", flex: 1 }}>
          <style>{`
            .modal-body p { font-size: 14px; color: #2c3e50; line-height: 1.8; margin-bottom: 16px; }
            .modal-body h3 { font-family: 'Rajdhani', sans-serif; font-size: 18px; font-weight: 700; color: #1a3a6b; margin: 20px 0 10px; padding-bottom: 6px; border-bottom: 2px solid #eef3fc; }
            .modal-body ul { padding-left: 20px; margin-bottom: 14px; }
            .modal-body ul li { font-size: 13.5px; color: #2c3e50; line-height: 1.7; margin-bottom: 5px; }
          `}</style>
          <div className="modal-body" dangerouslySetInnerHTML={{ __html: content.body }} />
        </div>

        {/* Footer */}
        <div style={{ padding: "16px 28px", borderTop: "1px solid #eef3fc", display: "flex", gap: 12, flexShrink: 0 }}>
          <button style={{ flex: 1, background: `linear-gradient(135deg,${C.red},#c23412)`, color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "11px", borderRadius: 7, border: "none", cursor: "pointer" }}>
            Enroll Now
          </button>
          <button onClick={onClose} style={{ flex: 1, background: "#fff", color: C.navy, fontFamily: "'Rajdhani',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "11px", borderRadius: 7, border: `1.5px solid ${C.navy}`, cursor: "pointer" }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}