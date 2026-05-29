
import { useState } from "react";
import { C } from "../data/data";

const navItems = [
  { label: "About Us",       items: ["About Vashishth Academy","Success Stories"] },
  { label: "Our Courses",    items: ["UPSC Foundation", "PPSC Coaching", "IAS / IPS Batch", "Online Courses", "Test Series"] },
  { label: "How to Prepare", items: ["Study Plan", "Recommended Books", "Syllabus Guide", "Interview Tips"] },
  { label: "Daily Updates",  items: ["Current Affairs", "News Analysis", "Editorials"] },
  { label: "Media",          items: ["Videos", "Our gallery", "Math Topic Videos"] },
  { label: "Announcement",   items: [], direct: true },
];

export default function Navbar({ onContact, onNavigate }) {
  const [hovered, setHovered]   = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub]   = useState(null);

  const toggleSub = (idx) => setOpenSub(openSub === idx ? null : idx);

  const handleSubClick = (e, sub) => {
    e.preventDefault();
    if (onNavigate) onNavigate(sub);
  };

  const handleSubClickMobile = (e, sub) => {
    e.preventDefault();
    if (onNavigate) onNavigate(sub);
    setMenuOpen(false);
    setOpenSub(null);
  };

  // Direct nav item click (e.g. Announcement with no dropdown)
  const handleDirectClick = (e, item) => {
    e.preventDefault();
    if (item.direct && onNavigate) {
      onNavigate(item.label);
      setMenuOpen(false);
    }
  };

  return (
    <nav style={{ background: "#fff", position: "sticky", top: 0, zIndex: 500, fontFamily: "'Hind',sans-serif" }}>

      {/* ── Ticker ── */}
      <div style={{ background: C.navy, height: 34, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ overflow: "hidden", flex: 1, padding: "0 16px" }}>
          <style>{`
            @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
            @media(max-width:600px){ .ticker-text{ font-size:10px !important } }
          `}</style>
          <div style={{ display: "flex", gap: 48, animation: "ticker 28s linear infinite", width: "max-content" }}>
            {[0, 1].map(k => (
              <span key={k} className="ticker-text" style={{ color: "#c8d9f0", fontSize: 12, whiteSpace: "nowrap" }}>
                Daily Live Classes — Join Now &nbsp;|&nbsp; Daily Free Current Affairs &nbsp;|&nbsp;
                Admissions Open: <b style={{ color: C.gold }}>+91-94640-31200</b> &nbsp;|&nbsp;
                IAS / IPS / PCS / UPSC / PPSC Coaching &nbsp;|&nbsp;
                New Batch Starting Soon — <b style={{ color: C.gold }}>Limited Seats</b>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Bar ── */}
      <div style={{ display: "flex", alignItems: "center", padding: "0 16px", height: 64, gap: 8 }}>

        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.navy, border: `2px solid ${C.red}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg viewBox="0 0 28 28" fill="none" width="26" height="26">
              <circle cx="14" cy="14" r="13" stroke="#f9a825" strokeWidth="1.5"/>
              <path d="M14 4 L18 10 L14 8 L10 10 Z" fill="#f9a825"/>
              <path d="M8 12 L14 8 L20 12 L20 22 L8 22 Z" fill="none" stroke="#fff" strokeWidth="1.2"/>
              <path d="M11 22 L11 16 L14 14 L17 16 L17 22" fill="none" stroke="#fff" strokeWidth="1.2"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 14, fontWeight: 700, color: C.navy, letterSpacing: ".04em", lineHeight: 1.1 }}>
              Vashishth IAS Academy
            </div>
            <div style={{ fontSize: 9, color: C.red, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase" }}>
              Ludhiana · Making Future
            </div>
          </div>
        </div>

        {/* ── Desktop Nav Links ── */}
        <ul className="desktop-nav" style={{ display: "flex", alignItems: "center", flex: 1, listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item, idx) => (
            <li
              key={idx}
              style={{ position: "relative" }}
              onMouseEnter={() => !item.direct && setHovered(idx)}
              onMouseLeave={() => !item.direct && setHovered(null)}
            >
              {/* Direct link (Announcement) */}
              {item.direct ? (
                <a
                  href="#"
                  onClick={(e) => handleDirectClick(e, item)}
                  style={{
                    display: "flex", alignItems: "center", padding: "0 10px", height: 64,
                    fontSize: 11, fontWeight: 700, color: C.red,
                    letterSpacing: ".04em", textTransform: "uppercase",
                    textDecoration: "none", whiteSpace: "nowrap", userSelect: "none",
                    borderBottom: `3px solid ${C.red}`,
                    transition: "all .2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#fef5f3"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                >
                  {item.label}
                </a>
              ) : (
                /* Dropdown link */
                <>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 4, padding: "0 10px", height: 64,
                    fontSize: 11, fontWeight: 700, color: hovered === idx ? C.red : C.navy,
                    letterSpacing: ".04em", textTransform: "uppercase", cursor: "pointer",
                    background: hovered === idx ? "#fef5f3" : "transparent",
                    whiteSpace: "nowrap", userSelect: "none", transition: "all .2s"
                  }}>
                    {item.label}
                    {item.items.length > 0 && (
                      <span style={{ fontSize: 9, display: "inline-block", transform: hovered === idx ? "rotate(180deg)" : "none", transition: "transform .2s" }}>▾</span>
                    )}
                  </div>

                  {item.items.length > 0 && hovered === idx && (
                    <ul style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: `1px solid #dde6f0`, borderTop: `3px solid ${C.red}`, minWidth: 200, boxShadow: "0 8px 24px rgba(26,58,107,.12)", borderRadius: "0 0 6px 6px", listStyle: "none", margin: 0, padding: 0, zIndex: 200 }}>
                      {item.items.map((sub, si) => (
                        <li key={si}>
                          <a
                            href="#"
                            onClick={(e) => handleSubClick(e, sub)}
                            style={{ display: "block", padding: "9px 16px", fontSize: 12, color: C.navy, fontWeight: 500, borderBottom: si < item.items.length - 1 ? "1px solid #f0f4f9" : "none", textDecoration: "none", transition: "all .2s", cursor: "pointer" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "#f5f9ff"; e.currentTarget.style.color = C.red; e.currentTarget.style.paddingLeft = "22px"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = C.navy; e.currentTarget.style.paddingLeft = "16px"; }}>
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        {/* ── Desktop Buttons ── */}
        <div className="desktop-actions" style={{ display: "flex", gap: 8, flexShrink: 0, marginLeft: "auto" }}>
          <button onClick={onContact}
            style={{ background: C.navy, color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: ".06em", padding: "7px 12px", borderRadius: 4, textTransform: "uppercase", cursor: "pointer", border: "none", transition: "background .2s", whiteSpace: "nowrap" }}
            onMouseEnter={e => e.currentTarget.style.background = C.red}
            onMouseLeave={e => e.currentTarget.style.background = C.navy}>
            Contact Us
          </button>
          <button
  onClick={() => window.open("/vashishth-brochure.pdf", "_blank")}
  style={{
    background: C.gold,
    color: C.navy,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: ".06em",
    padding: "7px 12px",
    borderRadius: 4,
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    whiteSpace: "nowrap",
    transition: "all .2s"
  }}
  onMouseEnter={e => {
    e.currentTarget.style.background = "#fb8c00";
    e.currentTarget.style.color = "#fff";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background = C.gold;
    e.currentTarget.style.color = C.navy;
  }}
>
  Brochures
</button>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-btn"
          aria-label="Toggle menu"
          style={{ display: "none", flexDirection: "column", gap: 5, cursor: "pointer", padding: 8, border: "none", background: "transparent", marginLeft: "auto", flexShrink: 0 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2, background: C.navy, borderRadius: 2,
              transition: "all .3s",
              transform: menuOpen ? (i === 0 ? "translateY(7px) rotate(45deg)" : i === 2 ? "translateY(-7px) rotate(-45deg)" : "none") : "none",
              opacity: menuOpen && i === 1 ? 0 : 1
            }}/>
          ))}
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className="mobile-menu"
        style={{ display: "none", background: "#fff", borderTop: "1px solid #eee", overflow: "hidden", maxHeight: menuOpen ? 700 : 0, transition: "max-height .35s ease" }}>
        {navItems.map((item, idx) => (
          <div key={idx} style={{ borderBottom: "1px solid #f0f4f9" }}>
            {item.direct ? (
              /* Direct item — full-width tap */
              <a
                href="#"
                onClick={(e) => handleDirectClick(e, item)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", padding: "13px 20px", fontSize: 12, fontWeight: 700,
                  color: C.red, textTransform: "uppercase", letterSpacing: ".04em",
                  background: "#fff9f7", textDecoration: "none", cursor: "pointer",
                  boxSizing: "border-box",
                }}>
                {item.label}
                <span style={{ fontSize: 10 }}>→</span>
              </a>
            ) : (
              <>
                <button
                  onClick={() => item.items.length > 0 && toggleSub(idx)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "13px 20px", fontSize: 12, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: ".04em", background: "transparent", border: "none", cursor: item.items.length > 0 ? "pointer" : "default" }}>
                  {item.label}
                  {item.items.length > 0 && (
                    <span style={{ fontSize: 10, transition: "transform .25s", transform: openSub === idx ? "rotate(180deg)" : "none" }}>▾</span>
                  )}
                </button>
                {item.items.length > 0 && (
                  <div style={{ maxHeight: openSub === idx ? 400 : 0, overflow: "hidden", transition: "max-height .25s ease", background: "#f8fbff" }}>
                    {item.items.map((sub, si) => (
                      <a
                        key={si}
                        href="#"
                        onClick={(e) => handleSubClickMobile(e, sub)}
                        style={{ display: "block", padding: "10px 28px", fontSize: 12, color: C.navy, fontWeight: 500, textDecoration: "none", borderBottom: si < item.items.length - 1 ? "1px solid #eef2f8" : "none", cursor: "pointer" }}
                        onMouseEnter={e => { e.currentTarget.style.color = C.red; e.currentTarget.style.background = "#fff"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = C.navy; e.currentTarget.style.background = ""; }}>
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}

        {/* Mobile action buttons */}
        <div style={{ display: "flex", gap: 10, padding: "14px 20px" }}>
          <button onClick={onContact} style={{ flex: 1, padding: 9, fontSize: 11, fontWeight: 700, background: C.navy, color: "#fff", borderRadius: 4, border: "none", cursor: "pointer", textTransform: "uppercase", letterSpacing: ".05em" }}>Contact Us</button>
         <button
  onClick={() => {
    window.open("/vashishth-brochure.pdf", "_blank");
    setMenuOpen(false);
  }}
  style={{
    flex: 1,
    padding: 9,
    fontSize: 11,
    fontWeight: 700,
    background: C.gold,
    color: C.navy,
    borderRadius: 4,
    border: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: ".05em"
  }}
>
  Brochures
</button>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg,${C.navy} 60%,${C.red} 100%)` }} />

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav    { display: none !important; }
          .desktop-actions{ display: none !important; }
          .hamburger-btn  { display: flex !important; }
          .mobile-menu    { display: block !important; }
        }
      `}</style>
    </nav>
  );
}