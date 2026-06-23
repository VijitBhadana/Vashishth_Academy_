


import { useState, useEffect, useRef } from "react";
import { C } from "../data/data";
import { useReveal } from "../utils/animations";
import { FaTrophy, FaChalkboardTeacher, FaBullseye, FaBook, FaMapMarkerAlt, FaLaptop } from "react-icons/fa";


export default function QueryFormSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", course: "", timing: "" });
  const [submitted, setSubmitted] = useState(false);
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
const featuresRef = useRef(null);
const [showFeatures, setShowFeatures] = useState(false);
  const { ref: headingRef, visible: headingVisible } = useReveal(0.2);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowFeatures(true);
      }
    },
    {
      threshold: 0.25,
    }
  );

  if (featuresRef.current) {
    observer.observe(featuresRef.current);
  }

  return () => observer.disconnect();
}, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const features = [
    { icon: <FaTrophy size={17} color="#fff" />,           title: "Proven Track Record",    desc: "With decades of experience, our institution has consistently produced UPSC toppers." },
    { icon: <FaChalkboardTeacher size={17} color="#fff" />, title: "Distinguished Faculty",   desc: "Learn from subject-matter experts who bring extensive experience and deep knowledge." },
    { icon: <FaBullseye size={17} color="#fff" />,          title: "Personalized Learning",   desc: "Tailored courses addressing your specific strengths and weaknesses." },
    { icon: <FaBook size={17} color="#fff" />,              title: "Comprehensive Resources", desc: "Detailed study materials, rigorous test series, and interview preparation." },
    { icon: <FaMapMarkerAlt size={17} color="#fff" />,      title: "Strategic Locations",     desc: "Study at our prime locations in Ludhiana in a focused environment." },
    { icon: <FaLaptop size={17} color="#fff" />,            title: "Flexible Learning Modes", desc: "All courses available in both classroom and LIVE-online formats." },
  ];

  function submit() {
    if (!formData.name || !formData.phone || !formData.email || !formData.course || !formData.timing) {
      alert("Please fill in all required fields."); return;
    }
    setSubmitted(true);
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid #dde6f0",
    borderRadius: 7,
    fontSize: 13.5,
    color: "#1a2a3a",
    marginBottom: 12,
    outline: "none",
    fontFamily: "'Hind',sans-serif",
    background: "#f8fafd",
    boxSizing: "border-box",
  };

  return (
    <>
      {/* ── Banner ── */}
      <div style={{
        background: "linear-gradient(135deg,#1a3a6b 0%,#0d2b52 60%,#0a1f3a 100%)",
        padding: isMobile ? "14px 16px" : "18px 40px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between",
        gap: isMobile ? 12 : 0,
        fontFamily: "'Hind',sans-serif",
      }}>
        <div style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: isMobile ? 16 : 20,
          fontWeight: 700,
          color: "#fff",
          letterSpacing: ".03em",
          lineHeight: 1.3,
        }}>
          Check the <span style={{ color: C.gold }}>UPSC CSE Batches</span> in the coming months
        </div>
        <button
          style={{
            background: C.red, color: "#fff", fontFamily: "'Rajdhani',sans-serif",
            fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase",
            padding: "9px 22px", borderRadius: 5, border: "none", cursor: "pointer",
            whiteSpace: "nowrap", flexShrink: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#c23412"}
          onMouseLeave={e => e.currentTarget.style.background = C.red}>
          Upcoming Batches
        </button>
      </div>

      {/* ── Main ── */}
      <div style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: isMobile ? "32px 16px 50px" : isTablet ? "40px 24px 60px" : "50px 30px 70px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 420px",
        gap: isMobile ? 36 : isTablet ? 40 : 50,
        alignItems: "start",
        fontFamily: "'Hind',sans-serif",
      }}>

        {/* ── Left: Features ── */}
        <div ref={headingRef}>
          <h1 style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: isMobile ? 26 : isTablet ? 30 : 34,
            fontWeight: 700, color: C.red, lineHeight: 1.2,
            letterSpacing: ".02em", marginBottom: 10,
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(32px)",
            filter: headingVisible ? "blur(0)" : "blur(5px)",
            transition: "opacity 0.85s cubic-bezier(.22,.61,.36,1) 60ms, transform 0.85s cubic-bezier(.22,.61,.36,1) 60ms, filter 0.85s ease 60ms",
          }}>
            Achieve IAS Ambitions with India's Leading UPSC Coaching Institute
          </h1>
          <p style={{
            fontSize: isMobile ? 13 : 14, fontWeight: 600,
            color: C.navy, marginBottom: 36, letterSpacing: ".02em",
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 280ms, transform 0.7s ease 280ms",
          }}>
            Join the League of Leaders – Enroll at Vashishth IAS Academy Today!
          </p>

          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: isMobile ? 18 : 22, fontWeight: 700,
            color: C.navy, letterSpacing: ".02em", marginBottom: 20,
          }}>
            <span style={{
              display: "block", width: 4, height: 24,
              background: `linear-gradient(180deg,${C.red},${C.gold})`,
              borderRadius: 2, flexShrink: 0,
            }} />
            Why Vashishth IAS Academy Stands Out
          </div>
<div
  ref={featuresRef}
  style={{
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr",
    gap: 14,
  }}
>
            {features.map((f, i) => (
             <div
  key={i}
  style={{
    background: "#fff",
    border: "1px solid #dde6f0",
    borderRadius: 10,
    padding: "16px 20px",
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    boxShadow: "0 2px 10px rgba(26,58,107,.06)",
    cursor: "default",

    opacity: showFeatures ? 1 : 0,
    transform: showFeatures
      ? "translateY(0px)"
      : "translateY(-80px)",

    transition: `
      opacity 0.8s ease,
      transform 0.8s cubic-bezier(.22,.61,.36,1)
    `,

    transitionDelay: `${i * 150}ms`,
  }}
>

                <div style={{
                  width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                  background: `linear-gradient(135deg,${C.red},${C.gold})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 3px 10px rgba(232,65,24,.3)",
                }}>
                  {f.icon}
                </div>

                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "#4a5e7a", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div style={{ position: isMobile || isTablet ? "static" : "sticky", top: 90 }}>
          <div style={{
            width: "100%", borderRadius: "14px 14px 0 0", overflow: "hidden",
            background: "linear-gradient(135deg,#1a3a6b,#0d5e8a)",
            height: isMobile ? 160 : 200,
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 20%,rgba(249,168,37,.18) 0%,transparent 60%),radial-gradient(circle at 20% 80%,rgba(232,65,24,.14) 0%,transparent 50%)" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, position: "relative" }}>
              <div style={{ display: "flex" }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: C.gold, fontSize: isMobile ? 16 : 20 }}>★</span>)}
              </div>
              <div style={{
                fontFamily: "'Rajdhani',sans-serif", fontSize: isMobile ? 18 : 22,
                fontWeight: 700, color: "#fff", letterSpacing: ".04em", textAlign: "center",
              }}>
                India's Most Trusted<br />IAS Coaching
              </div>
              <div style={{ display: "flex", gap: isMobile ? 16 : 20 }}>
                {[["5000+", "Students"], ["500+", "Selections"], ["15+", "Years"]].map(([num, lbl]) => (
                  <div key={lbl} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: isMobile ? 18 : 22, fontWeight: 700, color: C.gold }}>{num}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,.7)", letterSpacing: ".08em", textTransform: "uppercase" }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            background: "#fff", borderRadius: "0 0 14px 14px",
            boxShadow: "0 8px 32px rgba(26,58,107,.12)",
            padding: isMobile ? "22px 18px 26px" : "28px 28px 32px",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Thank You!</div>
                <p style={{ fontSize: 13.5, color: "#4a5e7a", lineHeight: 1.6 }}>Our counsellor will contact you within 24 hours. Check your email for confirmation.</p>
                <button onClick={() => setSubmitted(false)} style={{ marginTop: 18, background: C.navy, color: "#fff", border: "none", borderRadius: 6, padding: "9px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Hind',sans-serif" }}>
                  Submit Another Query
                </button>
              </div>
            ) : (
              <>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 20, letterSpacing: ".02em" }}>
                  Get Free Counselling
                </div>
                {[
                  { key: "name",  placeholder: "Your Full Name *", type: "text"  },
                  { key: "phone", placeholder: "Phone Number *",   type: "tel"   },
                  { key: "email", placeholder: "Email Address *",  type: "email" },
                ].map(f => (
                  <input key={f.key} type={f.type} placeholder={f.placeholder} value={formData[f.key]}
                    onChange={e => setFormData(p => ({ ...p, [f.key]: e.target.value }))}
                    style={inputStyle} />
                ))}
                <select value={formData.course} onChange={e => setFormData(p => ({ ...p, course: e.target.value }))}
                  style={{ ...inputStyle, color: formData.course ? "#1a2a3a" : "#999" }}>
                  <option value="">Select Course *</option>
                  {["UPSC CSE", "PPSC / Punjab PCS", "IAS Foundation", "NDA Coaching", "CDS Coaching", "SSC CGL / CHSL"].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <select value={formData.timing} onChange={e => setFormData(p => ({ ...p, timing: e.target.value }))}
                  style={{ ...inputStyle, color: formData.timing ? "#1a2a3a" : "#999", marginBottom: 20 }}>
                  <option value="">Preferred Timing *</option>
                  {["Morning (8–11 AM)", "Afternoon (12–3 PM)", "Evening (4–7 PM)", "Weekend Batch"].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <button onClick={submit}
                  style={{
                    width: "100%", background: `linear-gradient(135deg,${C.red},#c23412)`,
                    color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontSize: 15, fontWeight: 700,
                    letterSpacing: ".08em", textTransform: "uppercase", padding: "13px", borderRadius: 7,
                    border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(232,65,24,.35)",
                    transition: "transform .2s,box-shadow .2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(232,65,24,.45)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 16px rgba(232,65,24,.35)"; }}>
                  Submit Query →
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Trust Strip ── */}
      <div style={{
        background: C.navy,
        padding: isMobile ? "24px 16px" : "22px 40px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
        gap: isMobile ? "20px 10px" : 0,
        justifyItems: "center",
      }}>
        {[
          ["500+",  "Selections Across India"],
          ["20+",   "Years of Excellence"],
          ["50+",   "Expert Faculty"],
          ["10K+",  "Students Trained"],
        ].map(([num, label], i) => (
          <div key={i} style={{
            textAlign: "center",
            // divider lines between items on desktop
            borderRight: !isMobile && i < 3 ? "1px solid rgba(255,255,255,.12)" : "none",
            padding: isMobile ? "0" : "0 30px",
          }}>
            <div style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontSize: isMobile ? 26 : 30,
              fontWeight: 700,
              color: C.gold,
              lineHeight: 1,
            }}>{num}</div>
            <div style={{
              fontSize: isMobile ? 10 : 11,
              color: "rgba(255,255,255,.7)",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              marginTop: 4,
              lineHeight: 1.4,
            }}>{label}</div>
          </div>
        ))}
      </div>
    </>
  );
}