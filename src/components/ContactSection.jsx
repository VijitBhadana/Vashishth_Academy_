

import { useState, useEffect, useRef } from "react";
import { C } from "../data/data";
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from "react-icons/fa";
import { useReveal, useParallax } from "../utils/animations";

export default function ContactSection() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", mobile: "", course: "", message: "" });
  const [captcha, setCaptcha] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
const sectionRef = useRef(null);
const [animateSection, setAnimateSection] = useState(false);
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);
  const { ref: heroTextRef, visible: heroTextVisible } = useReveal(0.3);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimateSection(true);
      }
    },
    {
      threshold: 0.2,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  function submitContact() {
    const { firstName, lastName, email, mobile, message } = formData;
    if (!firstName || !lastName || !email || !mobile || !message) { alert("Please fill in all required fields."); return; }
    if (!captcha) { alert("Please verify that you are not a robot."); return; }
    setSubmitted(true);
  }

  const infoCards = [
    {
      label: "Office 1 — Model Town",
      text: "268A, 1st Floor, Krishna Mandir Rd, above Basant Ice Cream, near Krishna Mandir, Nehru Nagar, Model Town Extension, Ludhiana, Punjab 141002",
      grad: "linear-gradient(135deg,#ff6b47,#e84118)",
      icon: <FaMapMarkerAlt size={20} color="#fff" />,
    },
    {
      label: "Office 2 — Field Ganj",
      text: "SCO 56, 2nd Floor, Field Ganj Market, near Field Ganj Police Station, Ludhiana, Punjab 141008",
      grad: "linear-gradient(135deg,#3d72d7,#1a3a6b)",
      icon: <FaMapMarkerAlt size={20} color="#fff" />,
    },
    {
      label: "Phone",
      text: "+91-94640-31200 · +91-98760-00000",
      grad: "linear-gradient(135deg,#f9a825,#e67e22)",
      icon: <FaPhone size={18} color="#fff" />,
    },
    {
      label: "Opening Hours",
      text: "Mon–Sat: 8:00 AM – 6:00 PM · Sunday: Closed",
      grad: "linear-gradient(135deg,#43d98c,#27ae60)",
      icon: <FaClock size={18} color="#fff" />,
    },
    {
      label: "Email Us",
      text: "info@vashishthacademy.com · admissions@vashishthacademy.com",
      grad: "linear-gradient(135deg,#b87cdf,#8e44ad)",
      icon: <FaEnvelope size={18} color="#fff" />,
    },
  ];

  const inputStyle = {
    padding: "9px 12px",
    border: "1.5px solid #dde6f0",
    borderRadius: 6,
    fontFamily: "'Hind',sans-serif",
    fontSize: 13,
    color: C.navy,
    background: "#fafbfd",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontSize: 11,
    fontWeight: 600,
    color: C.navy,
    letterSpacing: ".04em",
    textTransform: "uppercase",
  };

  return (
    <div id="contact-us" style={{ fontFamily: "'Hind',sans-serif" }}>

      {/* ── Hero ── */}
      <div ref={heroRef} style={{
        background: "linear-gradient(135deg,#0d2451 0%,#1a3a6b 50%,#0d5e8a 100%)",
        padding: isMobile ? "28px 16px 22px" : "36px 40px 30px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="va-parallax-layer" style={{
          position: "absolute", inset: "-15% 0",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
          transform: `translateY(${heroOffset}px)`,
        }} />
        <div ref={heroTextRef} style={{ position: "relative" }}>
          <div style={{
            display: "inline-block", background: "rgba(232,65,24,.9)", color: "#fff", fontSize: 10.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", padding: "3px 14px", borderRadius: 3, marginBottom: 10,
            opacity: heroTextVisible ? 1 : 0,
            transform: heroTextVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 60ms, transform 0.6s ease 60ms",
          }}>Get In Touch</div>
          <h1 style={{
            fontFamily: "'Rajdhani',sans-serif", fontSize: isMobile ? 26 : 38, fontWeight: 700, color: "#fff", letterSpacing: ".02em", lineHeight: 1.1, marginBottom: 8,
            opacity: heroTextVisible ? 1 : 0,
            transform: heroTextVisible ? "translateY(0)" : "translateY(28px)",
            filter: heroTextVisible ? "blur(0)" : "blur(5px)",
            transition: "opacity 0.85s cubic-bezier(.22,.61,.36,1) 150ms, transform 0.85s cubic-bezier(.22,.61,.36,1) 150ms, filter 0.85s ease 150ms",
          }}>
            Contact <span style={{ color: C.gold }}>Vashishth</span> IAS Academy
          </h1>
          <p style={{
            fontSize: 13.5, color: "rgba(255,255,255,.8)", maxWidth: 480, margin: "0 auto", padding: "0 8px",
            opacity: heroTextVisible ? 1 : 0,
            transform: heroTextVisible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.7s ease 320ms, transform 0.7s ease 320ms",
          }}>
            Let's Connect! Drop us a Message and Start Your Journey Today.
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div style={{ background: "linear-gradient(135deg,#1a3a6b,#0d4a7a)", padding: isMobile ? "16px 12px" : "18px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 12 : 16 }}>
          {[["500+","Selections"],["15+","Years Experience"],["2","Office Locations"],["4.7★","Google Rating"]].map(([n, l], i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: isMobile ? 24 : 30, fontWeight: 700, color: C.gold, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.75)", letterSpacing: ".06em", textTransform: "uppercase", marginTop: 3 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div 
       ref={sectionRef}
      style={{
        maxWidth: 1100,
        margin: "36px auto",
        padding: isMobile ? "0 16px" : "0 28px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1.2fr",
        gap: isMobile ? 28 : 28,
        alignItems: "start",
      }}>

        {/* ── Info Cards ── */}
        <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: 10,

    opacity: animateSection ? 1 : 0,

    transform: animateSection
      ? "translateX(0)"
      : "translateX(-180px)",

    transition:
      "all 1s cubic-bezier(.22,.61,.36,1)",
  }}
>
          <div>
            <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: isMobile ? 22 : 26, fontWeight: 700, color: C.navy, marginBottom: 2 }}>
              Reach <span style={{ color: C.red }}>Us</span>
            </h2>
            <p style={{ fontSize: 13, color: "#4a5e7a", lineHeight: 1.55, marginBottom: 4 }}>
              Visit us at our offices or reach out through the details below. We're here Mon–Sat to guide your journey.
            </p>
          </div>

          {infoCards.map((c, i) => (
            <div key={i}
              style={{
                background: "#fff",
                borderRadius: 10,
                padding: "14px 16px",
                boxShadow: "0 2px 12px rgba(26,58,107,.07)",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                borderLeft: "4px solid transparent",
                transition: "all .2s",
                cursor: "default",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderLeftColor = C.red; e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderLeftColor = "transparent"; e.currentTarget.style.transform = ""; }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: c.grad,
                boxShadow: "0 4px 14px rgba(0,0,0,.18)",
              }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 13, fontWeight: 700, color: C.navy, letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 3 }}>{c.label}</div>
                <div style={{ fontSize: 12.5, color: "#4a5e7a", lineHeight: 1.6 }}>{c.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Form ── */}
        <div
  style={{
    background: "#fff",

    opacity: animateSection ? 1 : 0,

    transform: animateSection
      ? "translateX(0)"
      : "translateX(180px)",

    transition:
      "all 1s cubic-bezier(.22,.61,.36,1)",

    transitionDelay: "250ms",
          borderRadius: 14,
          padding: isMobile ? "22px 16px 24px" : "28px 26px",
          boxShadow: "0 4px 24px rgba(26,58,107,.10)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,${C.navy},${C.red},${C.gold})` }} />
          <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: isMobile ? 20 : 24, fontWeight: 700, color: C.navy, marginBottom: 2 }}>Get In Touch</div>
          <div style={{ fontSize: 12.5, color: "#4a5e7a", marginBottom: 20, lineHeight: 1.5 }}>
            Let's Connect! Drop us a Message and Start Your Journey Today.
          </div>

          {!submitted ? (
            <>
              {/* First + Last Name */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12, marginBottom: 12 }}>
                {[["First Name","firstName","text","First Name"],["Last Name","lastName","text","Last Name"]].map(([l,k,t,ph]) => (
                  <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <label style={labelStyle}>{l}</label>
                    <input type={t} placeholder={ph} value={formData[k]}
                      onChange={e => setFormData(p => ({ ...p, [k]: e.target.value }))}
                      style={inputStyle} />
                  </div>
                ))}
              </div>

              {/* Email + Mobile */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12, marginBottom: 12 }}>
                {[["Email Address","email","email","E-mail"],["Mobile Number","mobile","tel","Mobile No."]].map(([l,k,t,ph]) => (
                  <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <label style={labelStyle}>{l}</label>
                    <input type={t} placeholder={ph} value={formData[k]}
                      onChange={e => setFormData(p => ({ ...p, [k]: e.target.value }))}
                      style={inputStyle} />
                  </div>
                ))}
              </div>

              {/* Course */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
                <label style={labelStyle}>Course Interested In</label>
                <select value={formData.course} onChange={e => setFormData(p => ({ ...p, course: e.target.value }))}
                  style={{ ...inputStyle, cursor: "pointer" }}>
                  <option value="">-- Select Course --</option>
                  {["IAS / UPSC Coaching","PPSC / PCS Coaching","NDA Coaching","CDS Coaching","SSC Coaching","Online Batch","Test Series"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
                <label style={labelStyle}>Comment or Message</label>
                <textarea placeholder="Comment or Message..." value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 90 }} />
              </div>

              {/* Captcha */}
              <div style={{ border: "1.5px solid #dde6f0", borderRadius: 6, padding: "10px 14px", background: "#fafbfd", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div onClick={() => setCaptcha(c => !c)}
                    style={{ width: 20, height: 20, border: `2px solid ${captcha ? C.navy : "#aab8cc"}`, borderRadius: 3, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", background: captcha ? C.navy : "transparent", flexShrink: 0, transition: "all .2s" }}>
                    {captcha && <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>✓</span>}
                  </div>
                  <span style={{ fontSize: 12.5, color: "#4a5e7a" }}>I'm not a robot</span>
                </div>
                <div style={{ fontSize: 10, color: "#9aaabf", textAlign: "right", lineHeight: 1.3 }}>🛡️ reCAPTCHA<br />Privacy · Terms</div>
              </div>

              {/* Submit */}
              <button onClick={submitContact}
                style={{ width: "100%", padding: 11, background: `linear-gradient(135deg,${C.navy},#0d5e8a)`, color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", border: "none", borderRadius: 7, cursor: "pointer", transition: "all .25s" }}
                onMouseEnter={e => e.currentTarget.style.background = `linear-gradient(135deg,${C.red},${C.gold})`}
                onMouseLeave={e => e.currentTarget.style.background = `linear-gradient(135deg,${C.navy},#0d5e8a)`}>
                ✉ Submit Message
              </button>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div style={{ fontSize: 44, marginBottom: 10 }}>✅</div>
              <p style={{ fontSize: 14, color: C.navy, fontWeight: 600 }}>
                Thank you! Your message has been sent.<br />We will get back to you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Single Map ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto 36px", padding: isMobile ? "0 16px" : "0 28px" }}>
        <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: isMobile ? 20 : 26, fontWeight: 700, color: C.navy, display: "inline-block", position: "relative", marginBottom: 16 }}>
          Find Us on Map
          <span style={{ display: "block", width: 46, height: 3, background: `linear-gradient(90deg,${C.red},${C.gold})`, borderRadius: 2, marginTop: 5 }} />
        </h2>
        <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 18px rgba(26,58,107,.12)", position: "relative" }}>
          <div style={{ position: "absolute", top: 10, left: 10, zIndex: 10, background: C.navy, color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 4 }}>
            📍 Office 1 — Model Town
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.9!2d75.8407!3d30.9010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837616db8b8b%3A0x8b2b2b2b2b2b2b2b!2sVashishth%20IAS%20Academy!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height={isMobile ? "220" : "300"}
            style={{ border: "none", display: "block" }}
            allowFullScreen
            loading="lazy"
            title="Office 1 — Model Town"
          />
        </div>
      </div>

    </div>
  );
}