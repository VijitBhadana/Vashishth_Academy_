// import { useState } from "react";
// import { C, toppers } from "../data/data";

// function SectionTitle({ children, sub }) {
//   return (
//     <div style={{ textAlign: "center", marginBottom: 42 }}>
//       <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 36, fontWeight: 700, color: C.navy, letterSpacing: ".02em", display: "inline-block", position: "relative", marginBottom: 10 }}>
//         {children}
//         <span style={{ display: "block", margin: "8px auto 0", width: 60, height: 3, background: `linear-gradient(90deg,${C.red},${C.gold})`, borderRadius: 2 }} />
//       </h2>
//       {sub && <p style={{ fontSize: 14, color: "#4a5e7a", maxWidth: 680, margin: "12px auto 0", lineHeight: 1.6 }}>{sub}</p>}
//     </div>
//   );
// }

// export default function ToppersCoverflow() {
//   const [active, setActive] = useState(0);
//   const n = toppers.length;

//   function layout(i) {
//     const diff = ((i - active + n) % n + n) % n;
//     const rel = diff > n / 2 ? diff - n : diff;
//     const abs = Math.abs(rel);
//     if (abs === 0) return { tx: 0,        tz: 0,    ry: 0,    scale: 1,    opacity: 1,   zIndex: 10 };
//     if (abs === 1) return { tx: rel*200,   tz: -80,  ry: rel*-28, scale: .82, opacity: .85, zIndex: 8  };
//     if (abs === 2) return { tx: rel*170,   tz: -160, ry: rel*-38, scale: .66, opacity: .55, zIndex: 6  };
//     return               { tx: rel*150,   tz: -240, ry: rel*-45, scale: .5,  opacity: 0,   zIndex: 1  };
//   }

//   return (
//     <section style={{ padding: "60px 0 70px", background: "#fff", fontFamily: "'Hind',sans-serif" }}>
//       <SectionTitle sub="Our students have achieved top ranks in UPSC, PPSC, NDA, CDS and SSC examinations across India.">
//         Our Toppers
//       </SectionTitle>
//       <div style={{ position: "relative", width: "100%", height: 380, display: "flex", alignItems: "center", justifyContent: "center", perspective: 1200 }}>
//         {["‹","›"].map((arrow, ai) => (
//           <button key={ai} onClick={() => setActive(ai === 0 ? ((active - 1 + n) % n) : (active + 1) % n)}
//             style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", [ai === 0 ? "left" : "right"]: 20, width: 46, height: 46, background: C.navy, border: "none", borderRadius: "50%", color: "#fff", fontSize: 18, cursor: "pointer", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(26,58,107,.3)", transition: "background .2s" }}
//             onMouseEnter={e => e.currentTarget.style.background = C.red}
//             onMouseLeave={e => e.currentTarget.style.background = C.navy}>
//             {arrow}
//           </button>
//         ))}
//         <div style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d" }}>
//           {toppers.map((t, i) => {
//             const { tx, tz, ry, scale, opacity, zIndex } = layout(i);
//             return (
//               <div key={i} onClick={() => setActive(i)}
//                 style={{ position: "absolute", width: 220, top: "50%", left: "50%", transformOrigin: "center center", borderRadius: 14, overflow: "hidden", cursor: "pointer", boxShadow: "0 8px 32px rgba(26,58,107,.18)", transition: "all .55s cubic-bezier(.4,0,.2,1)", background: "#1a2a3a", transform: `translate(${tx}px, calc(-50%)) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`, opacity, zIndex }}>
//                 <img src={t.img} alt={t.name} style={{ width: "100%", height: 180, objectFit: "cover", objectPosition: "top", display: "block" }}
//                   onError={e => { e.currentTarget.style.cssText = "background:linear-gradient(135deg,#1a3a6b,#0d5e8a);width:100%;height:180px;display:block"; e.currentTarget.removeAttribute("src"); }} />
//                 <div style={{ padding: "14px 16px 16px", background: "#111e2e", color: "#fff" }}>
//                   <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 4, letterSpacing: ".02em" }}>{t.name}</div>
//                   <div style={{ fontSize: 11.5, color: C.gold, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 10 }}>{t.exam}</div>
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
//                     <span style={{ background: `linear-gradient(135deg,${C.red},${C.gold})`, color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontSize: 22, fontWeight: 700, padding: "4px 14px", borderRadius: 6 }}>{t.score}</span>
//                     <span style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(249,168,37,.35)", color: C.gold, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4, letterSpacing: ".05em" }}>{t.pct}</span>
//                   </div>
//                   <button style={{ width: "100%", padding: 8, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 6, color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Hind',sans-serif", transition: "all .2s" }}
//                     onMouseEnter={e => { e.currentTarget.style.background = C.red; e.currentTarget.style.borderColor = C.red; }}
//                     onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.15)"; }}>
//                     View Profile
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 32 }}>
//         {toppers.map((_, i) => (
//           <button key={i} onClick={() => setActive(i)}
//             style={{ width: i === active ? 28 : 10, height: 10, borderRadius: i === active ? 5 : "50%", background: i === active ? C.navy : "#ccd8ea", border: "none", cursor: "pointer", outline: "none", transition: "all .3s", padding: 0 }} />
//         ))}
//       </div>
//     </section>
//   );
// }
import { useState } from "react";

/* ── Google Fonts ── */
const FontLink = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Hind:wght@400;500;600&display=swap');`}</style>
);

/* ── Color tokens ── */
const C = { navy: "#1a3a6b", red: "#e84118", gold: "#f9a825", bg: "#f0f4fa" };

/* ── Data ── */
const toppers = [
  { name: "Arjun Sharma",  exam: "IAS – UPSC CSE", score: "AIR 24", pct: "98.4%", img: "https://randomuser.me/api/portraits/men/32.jpg"   },
  { name: "Priya Verma",   exam: "IPS – UPSC CSE", score: "AIR 51", pct: "97.1%", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rahul Mehta",   exam: "PPSC PCS",        score: "Rank 3", pct: "94.6%", img: "https://randomuser.me/api/portraits/men/56.jpg"   },
  { name: "Sneha Kapoor",  exam: "NDA – Defence",   score: "AIR 18", pct: "96.2%", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Vikram Singh",  exam: "CDS – IMA",       score: "AIR 42", pct: "93.8%", img: "https://randomuser.me/api/portraits/men/74.jpg"   },
  { name: "Anjali Gupta",  exam: "SSC CGL",         score: "Rank 7", pct: "99.1%", img: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "Karan Bhatia",  exam: "IAS – UPSC CSE",  score: "AIR 88", pct: "95.3%", img: "https://randomuser.me/api/portraits/men/18.jpg"   },
  { name: "Ritu Yadav",    exam: "PPSC PCS",        score: "Rank 9", pct: "92.7%", img: "https://randomuser.me/api/portraits/women/36.jpg" },
];

/* ══════════════════════════════════════════
   DESKTOP COVERFLOW (≥ 768px)
══════════════════════════════════════════ */
function DesktopCoverflow({ active, setActive }) {
  const n = toppers.length;

  const layout = (i) => {
    let offset = i - active;
    if (offset > n / 2) offset -= n;
    if (offset < -n / 2) offset += n;
    const abs = Math.abs(offset);
    const sign = offset === 0 ? 0 : offset / abs;
    const cardW = 220;
    const spread = 200;
    if (offset === 0) return { tx: -cardW / 2, tz: 0,    ry: 0,          scale: 1,    opacity: 1,    zIndex: 10 };
    if (abs === 1)    return { tx: -cardW / 2 + sign * (spread + cardW * 0.15),         tz: -180, ry: -sign * 42, scale: 0.82, opacity: 0.88, zIndex: 7  };
    if (abs === 2)    return { tx: -cardW / 2 + sign * (spread * 1.85 + cardW * 0.2),   tz: -340, ry: -sign * 56, scale: 0.66, opacity: 0.55, zIndex: 4  };
    return              { tx: -cardW / 2 + sign * (spread * 2.6 + cardW * 0.2),         tz: -480, ry: -sign * 65, scale: 0.5,  opacity: 0,    zIndex: 1  };
  };

  return (
    <div style={{ position: "relative", width: "100%", height: 380, display: "flex", alignItems: "center", justifyContent: "center", perspective: 1200 }}>
      {/* Prev */}
      <button
        onClick={() => setActive(((active - 1) % n + n) % n)}
        style={arrowStyle}
        onMouseEnter={e => e.currentTarget.style.background = C.red}
        onMouseLeave={e => e.currentTarget.style.background = C.navy}
      >‹</button>

      {/* Next */}
      <button
        onClick={() => setActive((active + 1) % n)}
        style={{ ...arrowStyle, left: "auto", right: 20 }}
        onMouseEnter={e => e.currentTarget.style.background = C.red}
        onMouseLeave={e => e.currentTarget.style.background = C.navy}
      >›</button>

      <div style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d" }}>
        {toppers.map((t, i) => {
          const { tx, tz, ry, scale, opacity, zIndex } = layout(i);
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                position: "absolute", width: 220, top: "50%", left: "50%",
                transformOrigin: "center center",
                borderRadius: 14, overflow: "hidden", cursor: "pointer",
                boxShadow: "0 8px 32px rgba(26,58,107,.18)",
                transition: "all .55s cubic-bezier(.4,0,.2,1)",
                background: "#1a2a3a",
                transform: `translate(${tx}px, calc(-50%)) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                opacity, zIndex,
              }}
            >
              <TopperCardInner t={t} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MOBILE CARD SLIDER (< 768px)
══════════════════════════════════════════ */
function MobileSlider({ active, setActive }) {
  const n = toppers.length;
  return (
    <div style={{ width: "100%", overflow: "hidden", padding: "16px 0 8px" }}>
      <div
        style={{
          display: "flex",
          transition: "transform .5s cubic-bezier(.4,0,.2,1)",
          transform: `translateX(calc(-${active * 100}% + 0px))`,
        }}
      >
        {toppers.map((t, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              minWidth: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 300,
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(26,58,107,.22)",
                background: "#1a2a3a",
                transform: i === active ? "scale(1)" : "scale(0.93)",
                opacity: i === active ? 1 : 0.6,
                transition: "transform .4s ease, opacity .4s ease",
              }}
            >
              <TopperCardInner t={t} />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile swipe arrows */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 20 }}>
        <button
          onClick={() => setActive(((active - 1) % n + n) % n)}
          style={mobileArrowStyle}
          onMouseEnter={e => e.currentTarget.style.background = C.red}
          onMouseLeave={e => e.currentTarget.style.background = C.navy}
        >‹</button>
        <button
          onClick={() => setActive((active + 1) % n)}
          style={mobileArrowStyle}
          onMouseEnter={e => e.currentTarget.style.background = C.red}
          onMouseLeave={e => e.currentTarget.style.background = C.navy}
        >›</button>
      </div>
    </div>
  );
}

/* ── Shared card inner ── */
function TopperCardInner({ t }) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <img
        src={t.img}
        alt={t.name}
        style={{ width: "100%", height: 180, objectFit: "cover", objectPosition: "top", display: "block" }}
        onError={e => {
          e.currentTarget.style.cssText = "background:linear-gradient(135deg,#1a3a6b,#0d5e8a);width:100%;height:180px;display:block";
          e.currentTarget.removeAttribute("src");
        }}
      />
      <div style={{ padding: "14px 16px 16px", background: "#111e2e", color: "#fff" }}>
        <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 4, letterSpacing: ".02em" }}>{t.name}</div>
        <div style={{ fontSize: 11.5, color: C.gold, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 10 }}>{t.exam}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ background: `linear-gradient(135deg,${C.red},${C.gold})`, color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontSize: 22, fontWeight: 700, padding: "4px 14px", borderRadius: 6 }}>{t.score}</span>
          <span style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(249,168,37,.35)", color: C.gold, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4, letterSpacing: ".05em" }}>{t.pct}</span>
        </div>
        <button
          style={{ width: "100%", padding: 8, background: hovered ? C.red : "rgba(255,255,255,.08)", border: `1px solid ${hovered ? C.red : "rgba(255,255,255,.15)"}`, borderRadius: 6, color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Hind',sans-serif", transition: "all .2s" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          View Profile
        </button>
      </div>
    </>
  );
}

/* ── Shared styles ── */
const arrowStyle = {
  position: "absolute", top: "50%", transform: "translateY(-50%)", left: 20,
  width: 46, height: 46, background: C.navy, border: "none", borderRadius: "50%",
  color: "#fff", fontSize: 22, cursor: "pointer", zIndex: 100,
  display: "flex", alignItems: "center", justifyContent: "center",
  boxShadow: "0 4px 16px rgba(26,58,107,.3)", transition: "background .2s",
};

const mobileArrowStyle = {
  width: 42, height: 42, background: C.navy, border: "none", borderRadius: "50%",
  color: "#fff", fontSize: 20, cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  boxShadow: "0 4px 16px rgba(26,58,107,.25)", transition: "background .2s",
};

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function ToppersCoverflow() {
  const [active, setActive] = useState(0);
  const n = toppers.length;

  return (
    <>
      <FontLink />
      <style>{`
        .tc-section {
          padding: 40px 0 50px;
          background: linear-gradient(180deg, #f0f4fa 0%, #e8eef8 100%);
          overflow: hidden;
          font-family: 'Hind', sans-serif;
        }

        /* ── Section Title ── */
        .tc-title-wrap { text-align: center; margin-bottom: 36px; }
        .tc-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: ${C.navy};
          letter-spacing: .02em;
          display: inline-block;
          position: relative;
          margin-bottom: 10px;
        }
        .tc-title-bar {
          display: block;
          margin: 8px auto 0;
          width: 60px; height: 3px;
          background: linear-gradient(90deg, ${C.red}, ${C.gold});
          border-radius: 2px;
        }
        .tc-sub {
          font-size: 14px;
          color: #4a5e7a;
          max-width: 620px;
          margin: 12px auto 0;
          line-height: 1.6;
          padding: 0 16px;
        }

        /* ── Dots ── */
        .tc-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 32px;
          flex-wrap: wrap;
          padding: 0 16px;
        }
        .tc-dot {
          height: 10px;
          border-radius: 5px;
          background: #ccd8ea;
          border: none;
          cursor: pointer;
          outline: none;
          transition: all .3s;
          padding: 0;
        }
        .tc-dot.active {
          background: ${C.navy};
          width: 28px !important;
        }

        /* ── Desktop only ── */
        .tc-desktop { display: block; }
        .tc-mobile  { display: none;  }

        @media (max-width: 767px) {
          .tc-desktop { display: none !important; }
          .tc-mobile  { display: block !important; }
          .tc-title   { font-size: 26px; }
          .tc-sub     { font-size: 13px; }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .tc-title { font-size: 30px; }
        }
      `}</style>

      <section className="tc-section">
        {/* Title */}
        <div className="tc-title-wrap">
          <h2 className="tc-title">
            Our Toppers
            <span className="tc-title-bar" />
          </h2>
          <p className="tc-sub">
            Proud of our students who cracked the toughest exams in India — their success is our mission
          </p>
        </div>

        {/* Desktop coverflow */}
        <div className="tc-desktop">
          <DesktopCoverflow active={active} setActive={setActive} />
        </div>

        {/* Mobile slider */}
        <div className="tc-mobile">
          <MobileSlider active={active} setActive={setActive} />
        </div>

        {/* Dots */}
        <div className="tc-dots">
          {toppers.map((_, i) => (
            <button
              key={i}
              className={`tc-dot${i === active ? " active" : ""}`}
              style={{ width: i === active ? 28 : 10 }}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
