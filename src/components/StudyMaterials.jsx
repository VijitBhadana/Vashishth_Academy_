// import { useState } from "react";
// import { C, books, bookThemes } from "../data/data";

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

// function Book({ b }) {
//   const [hovered, setHovered] = useState(false);
//   const t = bookThemes[b.theme];
//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}
//          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
//       <div style={{ width: 160, height: 210, position: "relative", transformStyle: "preserve-3d", transform: hovered ? "perspective(900px) rotateY(-10deg) rotateX(2deg) translateY(-12px)" : "perspective(900px) rotateY(-25deg) rotateX(4deg)", transition: "transform .4s ease,filter .4s ease", filter: hovered ? "drop-shadow(18px 28px 36px rgba(26,58,107,.35))" : "drop-shadow(12px 20px 28px rgba(26,58,107,.25))", cursor: "pointer" }}>
//         <div style={{ position: "absolute", left: -22, top: 3, width: 22, height: 205, borderRadius: "2px 0 0 2px", transform: "rotateY(-90deg) translateX(-11px)", transformOrigin: "right center", display: "flex", alignItems: "center", justifyContent: "center", writingMode: "vertical-rl", fontFamily: "'Rajdhani',sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: ".08em", textTransform: "uppercase", opacity: .9, background: t.spine }}>{b.spine}</div>
//         <div style={{ position: "absolute", top: -8, left: 2, width: 158, height: 8, transform: "rotateX(90deg) translateY(-4px)", transformOrigin: "bottom center", background: "linear-gradient(90deg,#e8e0d0 0%,#fff 50%,#d4ccc0 100%)" }} />
//         <div style={{ position: "absolute", width: 160, height: 210, borderRadius: "2px 8px 8px 2px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "14px 12px 12px", color: "#fff", background: t.front }}>
//           <div style={{ position: "absolute", right: 8, top: 50, width: 54, height: 62, opacity: .18, background: "rgba(255,255,255,.3)", clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }} />
//           <div style={{ position: "absolute", right: 24, top: 80, width: 38, height: 44, opacity: .12, background: "rgba(255,255,255,.5)", clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }} />
//           <div style={{ position: "absolute", bottom: 30, left: 8, width: 0, height: 0, borderLeft: "30px solid transparent", borderRight: "30px solid transparent", borderBottom: "52px solid rgba(255,255,255,.08)" }} />
//           <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.22)", border: "2px solid rgba(255,255,255,.5)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Rajdhani',sans-serif", fontSize: 7, fontWeight: 700, color: "#fff", letterSpacing: ".05em", textAlign: "center", lineHeight: 1.1, flexShrink: 0 }}>VASHISHTH<br/>ACADEMY</div>
//           <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
//             {b.tag && <span style={{ display: "inline-block", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.4)", fontSize: 9, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", padding: "2px 7px", borderRadius: 2, marginBottom: 8, width: "fit-content" }}>{b.tag}</span>}
//             <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 22, fontWeight: 700, lineHeight: 1.1, letterSpacing: ".02em", textShadow: "0 1px 4px rgba(0,0,0,.2)", whiteSpace: "pre-line" }}>{b.title}</div>
//             <div style={{ marginTop: 6 }}>
//               {b.bullets.map((bl, bi) => <div key={bi} style={{ fontSize: 9.5, color: "rgba(255,255,255,.88)", display: "flex", alignItems: "center", gap: 4, marginBottom: 3 }}><span style={{ fontSize: 9 }}>→</span>{bl}</div>)}
//             </div>
//           </div>
//           <div style={{ fontSize: 8, color: "rgba(255,255,255,.65)", letterSpacing: ".04em", textAlign: "center", marginTop: 6, position: "relative", zIndex: 1 }}>www.vashishthacademy.com</div>
//         </div>
//       </div>
//       <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 17, fontWeight: 700, color: C.navy, textAlign: "center", letterSpacing: ".02em" }}>{b.label}</div>
//     </div>
//   );
// }

// export default function StudyMaterials() {
//   const [current, setCurrent] = useState(0);
//   const total = books.length;
//   const goTo = (idx) => setCurrent(((idx % total) + total) % total);

//   return (
//     <section style={{ padding: "60px 0 70px", background: C.bg, overflow: "hidden", fontFamily: "'Hind',sans-serif" }}>
//       <SectionTitle sub="Expert-crafted books and resources to power your civil services and defence exam preparation">
//         Our Study Materials
//       </SectionTitle>
//       <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
//         <div onClick={() => goTo(current - 1)} style={{ position: "absolute", top: 0, left: 0, width: "28%", height: "100%", zIndex: 20, cursor: "pointer" }} />
//         <div onClick={() => goTo(current + 1)} style={{ position: "absolute", top: 0, right: 0, width: "28%", height: "100%", zIndex: 20, cursor: "pointer" }} />
//         <div style={{ display: "flex", transition: "transform .7s cubic-bezier(.77,0,.18,1)", transform: `translateX(-${current * 100}%)`, willChange: "transform" }}>
//           {books.map((set, si) => (
//             <div key={si} style={{ minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 48, padding: "40px 60px 20px" }}>
//               {set.map((b, bi) => <Book key={bi} b={b} />)}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 36 }}>
//         {books.map((_, i) => (
//           <button key={i} onClick={() => goTo(i)}
//             style={{ width: i === current ? 28 : 10, height: 10, borderRadius: i === current ? 5 : "50%", background: i === current ? C.navy : "#ccd8ea", border: "none", cursor: "pointer", outline: "none", transition: "all .3s", padding: 0 }} />
//         ))}
//       </div>
//     </section>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { C, books, bookThemes } from "../data/data";

function SectionTitle({ children, sub }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ textAlign: "center", marginBottom: 42, paddingTop: "clamp(24px, 4vw, 50px)" }}>
      <h2
        style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: "clamp(24px, 5vw, 36px)",
          fontWeight: 700,
          color: C.navy,
          letterSpacing: ".02em",
          display: "inline-block",
          position: "relative",
          marginBottom: 10,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          filter: visible ? "blur(0)" : "blur(5px)",
          transition: "opacity 0.8s cubic-bezier(.22,.61,.36,1) 80ms, transform 0.8s cubic-bezier(.22,.61,.36,1) 80ms, filter 0.8s ease 80ms",
        }}
      >
        {children}
        <span
          style={{
            display: "block",
            margin: "8px auto 0",
            width: visible ? 60 : 0,
            height: 3,
            background: `linear-gradient(90deg,${C.red},${C.gold})`,
            borderRadius: 2,
            transition: "width 0.7s cubic-bezier(.22,.61,.36,1) 420ms",
          }}
        />
      </h2>
      {sub && (
        <p
          style={{
            fontSize: "clamp(15px, 2.2vw, 18px)",
            fontWeight: 700,
            color: C.navy,
            maxWidth: 680,
            margin: "12px auto 0",
            lineHeight: 1.6,
            padding: "0 16px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.7s ease 300ms, transform 0.7s ease 300ms",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function Book({ b, scale = 1 }) {
  const [hovered, setHovered] = useState(false);
  const t = bookThemes[b.theme];

  const W = Math.round(160 * scale);
  const H = Math.round(210 * scale);
  const spineW = Math.round(22 * scale);
  const topH = Math.round(8 * scale);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: Math.round(18 * scale),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: W,
          height: H,
          position: "relative",
          transformStyle: "preserve-3d",
          transform: hovered
            ? "perspective(900px) rotateY(-10deg) rotateX(2deg) translateY(-12px)"
            : "perspective(900px) rotateY(-25deg) rotateX(4deg)",
          transition: "transform .4s ease,filter .4s ease",
          filter: hovered
            ? "drop-shadow(18px 28px 36px rgba(26,58,107,.35))"
            : "drop-shadow(12px 20px 28px rgba(26,58,107,.25))",
          cursor: "pointer",
        }}
      >
        {/* Spine */}
        <div
          style={{
            position: "absolute",
            left: -spineW,
            top: 3,
            width: spineW,
            height: H - 5,
            borderRadius: "2px 0 0 2px",
            transform: `rotateY(-90deg) translateX(${-spineW / 2}px)`,
            transformOrigin: "right center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            writingMode: "vertical-rl",
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: Math.round(11 * scale),
            fontWeight: 700,
            color: "#fff",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            opacity: 0.9,
            background: t.spine,
          }}
        >
          {b.spine}
        </div>

        {/* Top edge */}
        <div
          style={{
            position: "absolute",
            top: -topH,
            left: 2,
            width: W - 2,
            height: topH,
            transform: "rotateX(90deg) translateY(-4px)",
            transformOrigin: "bottom center",
            background:
              "linear-gradient(90deg,#e8e0d0 0%,#fff 50%,#d4ccc0 100%)",
          }}
        />

        {/* Front cover */}
        <div
          style={{
            position: "absolute",
            width: W,
            height: H,
            borderRadius: "2px 8px 8px 2px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: `${Math.round(14 * scale)}px ${Math.round(12 * scale)}px ${Math.round(12 * scale)}px`,
            color: "#fff",
            background: t.front,
          }}
        >
          {/* Decorative shapes */}
          <div
            style={{
              position: "absolute",
              right: 8,
              top: 50,
              width: Math.round(54 * scale),
              height: Math.round(62 * scale),
              opacity: 0.18,
              background: "rgba(255,255,255,.3)",
              clipPath:
                "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 24,
              top: 80,
              width: Math.round(38 * scale),
              height: Math.round(44 * scale),
              opacity: 0.12,
              background: "rgba(255,255,255,.5)",
              clipPath:
                "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 30,
              left: 8,
              width: 0,
              height: 0,
              borderLeft: `${Math.round(30 * scale)}px solid transparent`,
              borderRight: `${Math.round(30 * scale)}px solid transparent`,
              borderBottom: `${Math.round(52 * scale)}px solid rgba(255,255,255,.08)`,
            }}
          />

          {/* Logo badge */}
          <div
            style={{
              width: Math.round(36 * scale),
              height: Math.round(36 * scale),
              borderRadius: "50%",
              background: "rgba(255,255,255,.22)",
              border: "2px solid rgba(255,255,255,.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Rajdhani',sans-serif",
              fontSize: Math.round(7 * scale),
              fontWeight: 700,
              color: "#fff",
              letterSpacing: ".05em",
              textAlign: "center",
              lineHeight: 1.1,
              flexShrink: 0,
            }}
          >
            VASHISHTH
            <br />
            ACADEMY
          </div>

          {/* Title area */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {b.tag && (
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,.22)",
                  border: "1px solid rgba(255,255,255,.4)",
                  fontSize: Math.round(9 * scale),
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  padding: `2px ${Math.round(7 * scale)}px`,
                  borderRadius: 2,
                  marginBottom: 8,
                  width: "fit-content",
                }}
              >
                {b.tag}
              </span>
            )}
            <div
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: Math.round(22 * scale),
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: ".02em",
                textShadow: "0 1px 4px rgba(0,0,0,.2)",
                whiteSpace: "pre-line",
              }}
            >
              {b.title}
            </div>
            <div style={{ marginTop: 6 }}>
              {b.bullets.map((bl, bi) => (
                <div
                  key={bi}
                  style={{
                    fontSize: Math.round(9.5 * scale),
                    color: "rgba(255,255,255,.88)",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginBottom: 3,
                  }}
                >
                  <span style={{ fontSize: Math.round(9 * scale) }}>→</span>
                  {bl}
                </div>
              ))}
            </div>
          </div>

          {/* Footer URL */}
          <div
            style={{
              fontSize: Math.round(8 * scale),
              color: "rgba(255,255,255,.65)",
              letterSpacing: ".04em",
              textAlign: "center",
              marginTop: 6,
              position: "relative",
              zIndex: 1,
            }}
          >
            www.vashishthacademy.com
          </div>
        </div>
      </div>

      {/* Book label */}
      <div
        style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: Math.round(17 * scale),
          fontWeight: 700,
          color: C.navy,
          textAlign: "center",
          letterSpacing: ".02em",
        }}
      >
        {b.label}
      </div>
    </div>
  );
}

export default function StudyMaterials() {
  const [current, setCurrent] = useState(0);
  const total = books.length;
  const goTo = (idx) => setCurrent(((idx % total) + total) % total);

  return (
    <section
      className="study-materials-section"
      style={{
        padding: "clamp(32px,6vw,60px) 0 clamp(40px,7vw,70px)",
        overflow: "hidden",
        fontFamily: "'Hind',sans-serif",
      }}
    >
      {/* Promo strip */}
      <div
        style={{
          background: "linear-gradient(90deg, #1a3a6b 0%, #e84118 50%, #1a3a6b 100%)",
          backgroundSize: "200% auto",
          animation: "stripScroll 4s linear infinite alternate",
          padding: "10px 20px",
          textAlign: "center",
          letterSpacing: ".06em",
          fontSize: "clamp(12px, 1.8vw, 15px)",
          fontWeight: 700,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#f9a825" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="9" y1="7" x2="15" y2="7" stroke="#f9a825" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="9" y1="11" x2="15" y2="11" stroke="#f9a825" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span>Trusted by 10,000+ Aspirants &mdash; Take Your Preparation to the Next Level with Expert Study Material!</span>
        <span
          style={{
            background: "#f9a825",
            color: "#1a3a6b",
            fontSize: "clamp(10px, 1.4vw, 12px)",
            fontWeight: 800,
            padding: "3px 12px",
            borderRadius: 20,
            letterSpacing: ".08em",
            whiteSpace: "nowrap",
          }}
        >
          ORDER NOW
        </span>
      </div>

      <SectionTitle sub="Expert-crafted books and resources to power your civil services and defence exam preparation">
        Our Study Materials
      </SectionTitle>

      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {/* Left / Right click zones */}
        <div
          onClick={() => goTo(current - 1)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "28%",
            height: "100%",
            zIndex: 20,
            cursor: "pointer",
          }}
        />
        <div
          onClick={() => goTo(current + 1)}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "28%",
            height: "100%",
            zIndex: 20,
            cursor: "pointer",
          }}
        />

        {/* Slides */}
        <div
          style={{
            display: "flex",
            transition: "transform .7s cubic-bezier(.77,0,.18,1)",
            transform: `translateX(-${current * 100}%)`,
            willChange: "transform",
          }}
        >
          {books.map((set, si) => (
            <ResponsiveSlide key={si} set={set} />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 36,
        }}
      >
        {books.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 28 : 10,
              height: 10,
              borderRadius: i === current ? 5 : "50%",
              background: i === current ? C.navy : "#ccd8ea",
              border: "none",
              cursor: "pointer",
              outline: "none",
              transition: "all .3s",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Responsive slide wrapper ── */
function ResponsiveSlide({ set }) {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Listen to resize
  useState(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  // Decide layout based on viewport
  const isMobile = width < 480;
  const isTablet = width >= 480 && width < 900;

  // Scale book size for smaller screens
  const scale = isMobile ? 0.72 : isTablet ? 0.82 : 1;

  // On mobile show 1 book per slide (scroll through set), on tablet 2, desktop all
  const booksToShow = isMobile ? 1 : isTablet ? 2 : set.length;
  const [mobileIdx, setMobileIdx] = useState(0);

  const visibleBooks = isMobile
    ? [set[mobileIdx % set.length]]
    : isTablet
    ? set.slice(0, 2)
    : set;

  return (
    <div
      style={{
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexWrap: "nowrap",
          gap: isMobile ? 20 : isTablet ? 32 : 48,
          padding: isMobile
            ? "30px 24px 16px"
            : isTablet
            ? "36px 40px 18px"
            : "40px 60px 20px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {visibleBooks.map((b, bi) => (
          <Book key={bi} b={b} scale={scale} />
        ))}
      </div>

      {/* Sub-navigation dots for mobile (within a set) */}
      {isMobile && set.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 7,
            marginTop: 10,
            marginBottom: 4,
          }}
        >
          {set.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIdx(i)}
              style={{
                width: i === mobileIdx % set.length ? 20 : 7,
                height: 7,
                borderRadius: i === mobileIdx % set.length ? 4 : "50%",
                background:
                  i === mobileIdx % set.length ? C.navy : "#b0c4d8",
                border: "none",
                cursor: "pointer",
                outline: "none",
                transition: "all .3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}