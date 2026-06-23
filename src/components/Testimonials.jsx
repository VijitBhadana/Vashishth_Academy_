// import { useState, useEffect, useRef } from "react";
// import { C, testimonials } from "../data/data";

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

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0);
//   const timerRef = useRef(null);
//   const n = testimonials.length;

//   useEffect(() => {
//     timerRef.current = setInterval(() => setCurrent(c => (c + 1) % n), 4000);
//     return () => clearInterval(timerRef.current);
//   }, [n]);

//   return (
//     <section style={{ padding: "60px 40px 70px", background: "#fff", fontFamily: "'Hind',sans-serif" }}>
//       <SectionTitle sub="Hear directly from our students who have achieved their dreams through our guidance.">
//         Student Testimonials
//       </SectionTitle>
//       <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", overflow: "hidden" }}>
//         <div style={{ display: "flex", transition: "transform .6s cubic-bezier(.77,0,.18,1)", transform: `translateX(-${current * 100}%)` }}>
//           {testimonials.map((t, i) => (
//             <div key={i} style={{ minWidth: "100%", padding: "0 10px" }}>
//               <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(26,58,107,.1)" }}>
//                 <div style={{ background: t.bg, padding: "28px 32px 22px", position: "relative", overflow: "hidden" }}>
//                   <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,.08)" }} />
//                   <div style={{ fontSize: 48, color: "rgba(255,255,255,.3)", fontFamily: "Georgia,serif", lineHeight: 1, marginBottom: 8 }}>"</div>
//                   <p style={{ fontSize: 15, color: "#fff", lineHeight: 1.8, position: "relative", zIndex: 1 }}>{t.quote}</p>
//                 </div>
//                 <div style={{ background: "#fff", padding: "18px 32px", display: "flex", alignItems: "center", gap: 16 }}>
//                   <div style={{ width: 48, height: 48, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Rajdhani',sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{t.init}</div>
//                   <div>
//                     <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 17, fontWeight: 700, color: C.navy }}>{t.name}</div>
//                     <div style={{ fontSize: 12, color: "#6a7f9a" }}>{t.role}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 24 }}>
//         {testimonials.map((_, i) => (
//           <button key={i} onClick={() => setCurrent(i)}
//             style={{ width: i === current ? 28 : 10, height: 10, borderRadius: i === current ? 5 : "50%", background: i === current ? C.navy : "#ccd8ea", border: "none", cursor: "pointer", outline: "none", transition: "all .3s", padding: 0 }} />
//         ))}
//       </div>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { C } from "../data/data";
import { useReveal } from "../utils/animations";

const testimonials = [
  {
    quote: "Vashishth IAS Academy gave me the right direction and guidance. The faculty is incredibly knowledgeable and always available for doubt-clearing sessions. I cleared my UPSC Prelims in the very first attempt!",
    name: "Arjun Sharma",
    role: "UPSC CSE Aspirant · AIR 142",
    init: "AS",
    bg: "linear-gradient(135deg,#1a3a6b,#0d5e8a)",
  },
  {
    quote: "The structured approach and comprehensive study material at Vashishth IAS Academy made all the difference. Their test series is extremely close to the actual exam pattern. Highly recommended!",
    name: "Priya Mehta",
    role: "IAS Officer · Batch 2023",
    init: "PM",
    bg: "linear-gradient(135deg,#e84118,#f9a825)",
  },
  {
    quote: "I tried other institutes before but nothing matched the quality here. The UPSC-interviewed faculty really understands what it takes to crack the exam. Best decision of my life joining Vashishth IAS.",
    name: "Rohit Verma",
    role: "PPSC Selected · Punjab PCS",
    init: "RV",
    bg: "linear-gradient(135deg,#0d6e3f,#1a9e5a)",
  },
  {
    quote: "The online live classes are just as good as classroom sessions. I studied from home and still managed to crack UPSC Prelims. The faculty support and mock tests were outstanding throughout my preparation.",
    name: "Sneha Kapoor",
    role: "UPSC Prelims Cleared · 2024",
    init: "SK",
    bg: "linear-gradient(135deg,#6a1a6b,#a044a0)",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const total = testimonials.length;
  const timerRef = useRef(null);
  const { ref: leftRef, visible: leftVisible } = useReveal(0.2);
  const { ref: rightRef, visible: rightVisible } = useReveal(0.2);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 4000);
    return () => clearInterval(timerRef.current);
  }, [total]);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  function restartTimer(index) {
    setCurrent(index);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 4000);
  }

  return (
    <section style={{
      padding: isMobile ? "30px 16px" : isTablet ? "36px 24px" : "40px 40px",
      background: "#fff",
      fontFamily: "'Hind',sans-serif",
    }}>
      <div style={{
        maxWidth: 1180,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr",
        gap: isMobile ? 40 : isTablet ? 48 : 60,
        alignItems: "start",
      }}>

        {/* ── Left: Testimonials ── */}
        <div ref={leftRef}>
          <h2 style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: isMobile ? 24 : 28,
            fontWeight: 700, color: C.navy,
            letterSpacing: ".02em", marginBottom: 4,
            display: "inline-block", position: "relative",
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? "translateY(0)" : "translateY(30px)",
            filter: leftVisible ? "blur(0)" : "blur(5px)",
            transition: "opacity 0.8s cubic-bezier(.22,.61,.36,1) 80ms, transform 0.8s cubic-bezier(.22,.61,.36,1) 80ms, filter 0.8s ease 80ms",
          }}>
            Our Testimonials
            <span style={{
              display: "block", marginTop: 8,
              width: leftVisible ? 50 : 0,
              height: 3,
              background: `linear-gradient(90deg,${C.red},${C.gold})`, borderRadius: 2,
              transition: "width 0.7s cubic-bezier(.22,.61,.36,1) 420ms",
            }} />
          </h2>

          <p style={{
            fontSize: 13, fontWeight: 600, color: "#4a5e7a",
            marginTop: 8, marginBottom: 22, letterSpacing: ".02em",
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.7s ease 300ms, transform 0.7s ease 300ms",
          }}>
            Review by Our Success &amp; Top Students
          </p>

          {/* Slider */}
          <div style={{ overflow: "hidden" }}>
            <div style={{
              display: "flex",
              transition: "transform .6s cubic-bezier(.77,0,.18,1)",
              transform: `translateX(-${current * 100}%)`,
            }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ minWidth: "100%", padding: 2 }}>
                  <div style={{
                    background: "#f8fafd",
                    border: "1px solid #e0e8f4",
                    borderLeft: `4px solid ${C.red}`,
                    borderRadius: 12,
                    padding: isMobile ? "16px 18px 14px" : "20px 26px 18px",
                    position: "relative",
                  }}>
                    <span style={{
                      fontSize: 80, lineHeight: 1, color: C.red, opacity: .12,
                      fontFamily: "Georgia,serif", position: "absolute",
                      top: 10, left: 18, userSelect: "none",
                    }}>"</span>

                    <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                      {[1,2,3,4,5].map(s => (
                        <span key={s} style={{ color: C.gold, fontSize: 15 }}>★</span>
                      ))}
                    </div>

                    <p style={{
                      fontSize: isMobile ? 13 : 14,
                      color: "#3a4a60", lineHeight: 1.8,
                      fontStyle: "italic", position: "relative",
                      zIndex: 1, marginBottom: 22,
                    }}>
                      {t.quote}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{
                        width: 46, height: 46, borderRadius: "50%", flexShrink: 0,
                        background: t.bg, display: "flex", alignItems: "center",
                        justifyContent: "center", fontFamily: "'Rajdhani',sans-serif",
                        fontSize: 18, fontWeight: 700, color: "#fff",
                      }}>
                        {t.init}
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "'Rajdhani',sans-serif", fontSize: 16,
                          fontWeight: 700, color: C.navy, letterSpacing: ".02em",
                        }}>
                          {t.name}
                        </div>
                        <div style={{
                          fontSize: 11.5, fontWeight: 600, color: C.red,
                          letterSpacing: ".04em", textTransform: "uppercase", marginTop: 2,
                        }}>
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => restartTimer(i)}
                style={{
                  width: i === current ? 26 : 9, height: 9,
                  borderRadius: i === current ? 5 : "50%",
                  background: i === current ? C.navy : "#ccd8ea",
                  border: "none", cursor: "pointer", outline: "none",
                  transition: "all .3s", padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Right: Dream Bigger ── */}
        <div ref={rightRef}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg,#1a3a6b,#0d2b52)",
            color: "#fff", fontSize: 12, fontWeight: 600,
            letterSpacing: ".05em", padding: "8px 18px",
            borderRadius: 50, marginBottom: 28, flexWrap: "wrap",
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 100ms, transform 0.7s ease 100ms",
          }}>
            🏛️ &nbsp;Vashishth IAS Academy &nbsp;·&nbsp;
            <span style={{
              color: C.gold, fontFamily: "'Rajdhani',sans-serif",
              fontSize: 14, fontWeight: 700,
            }}>
              Ludhiana
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: isMobile ? 24 : 28,
            fontWeight: 700, color: C.navy,
            letterSpacing: ".02em", lineHeight: 1.25,
            marginBottom: 18, position: "relative", paddingBottom: 14,
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? "translateX(0)" : "translateX(40px)",
            filter: rightVisible ? "blur(0)" : "blur(4px)",
            transition: "opacity 0.8s cubic-bezier(.22,.61,.36,1) 200ms, transform 0.8s cubic-bezier(.22,.61,.36,1) 200ms, filter 0.8s ease 200ms",
          }}>
            Dream Bigger — We Will<br />
            Make It Happen<br />
            <span style={{ color: C.red }}>@ Vashishth IAS Academy</span>
            <span style={{
              position: "absolute", bottom: 0, left: 0,
              display: "block",
              width: rightVisible ? 50 : 0,
              height: 3,
              background: `linear-gradient(90deg,${C.red},${C.gold})`, borderRadius: 2,
              transition: "width 0.7s cubic-bezier(.22,.61,.36,1) 500ms",
            }} />
          </h2>

          {[
            <>We <b>VASHISHTH IAS ACADEMY</b> give attention on participatory and interactive learning. Our latest technology and up-to-date pedagogic methods give students a competitive edge.</>,
            <>We provide <b>interactive class lectures in English and Hindi Medium</b> to help students internalize concepts effectively.</>,
            <>We have <b>UPSC appeared interviewed faculty</b> to build a positive approach among students for cracking the UPSC, IAS exams.</>,
            <>We provide <b>test material with the latest pattern</b> to the students which helps them crack any civil services examination.</>,
          ].map((p, i) => (
            <p key={i} style={{
              fontSize: isMobile ? 13 : 14,
              color: "#3a4a60", lineHeight: 1.75,
              marginBottom: 12, paddingLeft: 16,
              borderLeft: "2px solid #e8eef7",
            }}>
              {p}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}