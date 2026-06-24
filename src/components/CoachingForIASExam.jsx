import { useState } from "react";
import { useParallax, useReveal } from "../utils/animations";

const civilServices = [
  "All India Services",
  "Indian Administrative Service",
  "India Foreign Service",
  "Indian Police Service",
  "Group A Services",
  "Indian P & T Accounts & Finance Service",
  "Indian Administrative Service",
];

const strategyPoints = [
  {
    num: "01",
    title: "Lighthouse Approach",
    desc: "CSE mains revolves around answer writing. Our material will act as a lighthouse for each topic we cover — maximising marks out of every subject.",
  },
  {
    num: "02",
    title: "Rapid Revision",
    desc: "Repeated revision of topics consolidated under a single roof will help you increase your information processing speed and efficiency.",
  },
  {
    num: "03",
    title: "Keyword Mastery",
    desc: "Answer writing is about focusing on KEYWORDS like institutional pluralism, cognitive consonance/dissonance — we shed light on all critical terms.",
  },
];

const PillarIcons = {
  syllabus: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="5" y="3" width="18" height="24" rx="2" fill="#1a3a6b" opacity="0.12"/>
      <rect x="5" y="3" width="18" height="24" rx="2" stroke="#1a3a6b" strokeWidth="1.5" fill="none"/>
      <path d="M9 9h10M9 13h10M9 17h6" stroke="#e85d04" strokeWidth="1.8" strokeLinecap="round"/>
      <rect x="18" y="19" width="9" height="9" rx="2" fill="#e85d04"/>
      <path d="M20.5 23.5l1.5 1.5 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  speed: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="17" r="11" stroke="#1a3a6b" strokeWidth="1.5" fill="#1a3a6b" fillOpacity="0.08"/>
      <path d="M16 17 L16 10" stroke="#e85d04" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 17 L21 14" stroke="#1a3a6b" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="16" cy="17" r="2" fill="#e85d04"/>
      <path d="M8 10l1.5 1.5M24 10l-1.5 1.5M6 17h2M24 17h2" stroke="#1a3a6b" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M11 7l1 1" stroke="#e85d04" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  difficulty: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L28 26H4L16 4Z" fill="#1a3a6b" fillOpacity="0.1" stroke="#1a3a6b" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M16 12v6" stroke="#e85d04" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="16" cy="21" r="1.2" fill="#e85d04"/>
    </svg>
  ),
  writing: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="6" width="16" height="20" rx="2" fill="#1a3a6b" fillOpacity="0.1" stroke="#1a3a6b" strokeWidth="1.5"/>
      <path d="M8 11h8M8 15h8M8 19h5" stroke="#1a3a6b" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 18l-5 5H13v-3l5-5 3 3z" fill="#e85d04" stroke="#e85d04" strokeWidth="0.5" strokeLinejoin="round"/>
      <path d="M19.5 19.5l2-2 1.5 1.5-2 2" fill="#c94b00" stroke="none"/>
      <path d="M22 16.5l1.5-1.5a1 1 0 011.4 1.4L23.5 18" stroke="#c94b00" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
};

const pillars = [
  { iconKey: "syllabus", title: "Explicitly Defined Syllabus", desc: "A well-defined objective always goes a long way. The clear lineation of topics lets us aim for the gold — no wild goose chases." },
  { iconKey: "speed",    title: "Speed & Clarity",             desc: "Mere ability to write fast won't suffice. Clarity of thought process with fast processing of raw knowledge is essential to score high." },
  { iconKey: "difficulty", title: "Difficulty Level",          desc: "Since all questions are compulsory, the difficulty level of CSE has increased manifold. No topic can be left untouched." },
  { iconKey: "writing",  title: "Answer Writing",              desc: "Everything boils down to answer writing. Why are we studying these topics? What does the examination demand? Clarity of thought is key." },
];

const features = ["Expert Faculty", "Comprehensive Study Material", "Regular Mock Tests", "Personal Mentorship"];
const stats = [["5000+", "Students"], ["500+", "Selections"], ["15+", "Years"]];

export default function CoachingForIASExam() {
  const [hovered, setHovered] = useState(null);
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);
  const { ref: heroTextRef, visible: heroTextVisible } = useReveal(0.3);

  return (
    <div style={{ fontFamily: "'Hind', sans-serif", background: "#f0f4f8", minHeight: "100vh" }}>

      {/* ── INJECT FONTS + KEYFRAMES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes iasFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ias-fadeup { animation: iasFadeUp 0.7s ease forwards; }
        .ias-d1 { animation-delay: 0.1s; opacity: 0; }
        .ias-d2 { animation-delay: 0.25s; opacity: 0; }
        .ias-d3 { animation-delay: 0.4s; opacity: 0; }
        .ias-d4 { animation-delay: 0.55s; opacity: 0; }

        .ias-svc-item { transition: background 0.2s, padding-left 0.2s; }
        .ias-svc-item:hover { background: #e85d04 !important; }
        .ias-svc-item:hover .ias-svc-num { color: #fff !important; }
        .ias-svc-item:hover .ias-svc-label { color: #fff !important; }

        .ias-pillar { transition: border-left 0.25s, transform 0.25s; border-left: 3px solid transparent; }
        .ias-pillar:hover { border-left: 3px solid #e85d04 !important; transform: translateX(4px); }

        .ias-card-hover { transition: transform 0.3s, box-shadow 0.3s; }
        .ias-card-hover:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(0,0,0,0.13) !important; }

        .ias-btn-orange { transition: opacity 0.2s, transform 0.2s; }
        .ias-btn-orange:hover { opacity: 0.88; transform: scale(1.03); }

        .ias-input:focus { outline: none; border-color: #e85d04 !important; }

        /* Responsive */
        @media (max-width: 900px) {
          .ias-hero-grid { grid-template-columns: 1fr !important; }
          .ias-content-grid { grid-template-columns: 1fr !important; }
          .ias-strategy-grid { grid-template-columns: 1fr !important; }
          .ias-pillars-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .ias-services-grid { grid-template-columns: 1fr !important; }
          .ias-hero-h1 { font-size: 2rem !important; }
          .ias-hero-btns { flex-direction: column !important; }
          .ias-hero-btns a { width: 100% !important; text-align: center; }
          .ias-cta-btns { flex-direction: column !important; align-items: center; }
        }
      `}</style>

      {/* ════════════════ HERO ════════════════ */}
      <section ref={heroRef} style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a3a6b 55%, #0d2444 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* decorative blobs — parallax layers */}
        <div className="va-blob" style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,93,4,0.12), transparent)", transform: `translate(30%,-30%) translateY(${heroOffset}px)`, pointerEvents: "none" }} />
        <div className="va-blob" style={{ position: "absolute", bottom: 0, left: 0, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(244,167,38,0.1), transparent)", transform: `translate(-40%,40%) translateY(${heroOffset * 0.5}px)`, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1152, margin: "0 auto", padding: "48px 20px 0" }}>

          {/* breadcrumb */}
          <div className="ias-fadeup" style={{ display: "flex", flexWrap: "wrap", gap: 6, fontSize: 13, color: "#93c5fd", marginBottom: 28 }}>
            <a href="/" style={{ color: "#93c5fd", textDecoration: "none" }}>Home</a>
            <span style={{ color: "#60a5fa" }}>›</span>
            <span style={{ color: "#93c5fd" }}>Our Courses</span>
            <span style={{ color: "#60a5fa" }}>›</span>
            <span style={{ color: "#fff" }}>Coaching for IAS Exam</span>
          </div>

          {/* hero grid */}
          <div className="ias-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", paddingBottom: 48 }}>

            {/* left */}
            <div ref={heroTextRef}>
              <span style={{
                display: "inline-block", padding: "4px 14px", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 999,
                background: "rgba(232,93,4,0.2)", color: "#f4a726",
                border: "1px solid rgba(232,93,4,0.4)", marginBottom: 16,
                opacity: heroTextVisible ? 1 : 0,
                transform: heroTextVisible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 60ms, transform 0.6s ease 60ms",
              }}>IAS / UPSC Coaching</span>

              <h1 className="ias-hero-h1" style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "3.25rem", fontWeight: 900, color: "#fff",
                lineHeight: 1.15, margin: "0 0 20px",
                opacity: heroTextVisible ? 1 : 0,
                transform: heroTextVisible ? "translateY(0)" : "translateY(32px)",
                filter: heroTextVisible ? "blur(0)" : "blur(6px)",
                transition: "opacity 0.9s cubic-bezier(.22,.61,.36,1) 150ms, transform 0.9s cubic-bezier(.22,.61,.36,1) 150ms, filter 0.9s ease 150ms",
              }}>
                Best Coaching<br />
                <span style={{ color: "#f4a726" }}>for IAS Exam</span>
              </h1>

              <p style={{
                color: "#bfdbfe", fontSize: 17, lineHeight: 1.7, margin: "0 0 28px",
                opacity: heroTextVisible ? 1 : 0,
                transform: heroTextVisible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.7s ease 320ms, transform 0.7s ease 320ms",
              }}>
                Welcome to the World of IAS/PCS — where India's most prestigious career journey begins.
              </p>

              <div className="ias-hero-btns" style={{
                display: "flex", flexWrap: "wrap", gap: 12,
                opacity: heroTextVisible ? 1 : 0,
                transform: heroTextVisible ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.7s ease 450ms, transform 0.7s ease 450ms",
              }}>
                <a href="#ias-enquire" className="ias-btn-orange" style={{
                  display: "inline-block", padding: "12px 28px", borderRadius: 6,
                  background: "#e85d04", color: "#fff", fontWeight: 700, fontSize: 14,
                  textDecoration: "none", boxShadow: "0 4px 18px rgba(232,93,4,0.45)",
                }}>Enquire Now</a>
                <a href="#ias-content" style={{
                  display: "inline-block", padding: "12px 28px", borderRadius: 6,
                  border: "1px solid #60a5fa", color: "#fff", fontWeight: 700, fontSize: 14,
                  textDecoration: "none",
                }}>Know More</a>
              </div>
            </div>

            {/* hero image + stats card */}
            <div className="ias-fadeup ias-d3" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <img
                  src="/assets/ias-image 1.png"
                  alt="IAS Coaching at Vashishth Academy"
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
                />
              </div>
              <div style={{
                borderRadius: 16, padding: "28px 24px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.13)",
              }}>
                <p style={{ color: "#93c5fd", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
                  Why Choose Vashishth IAS?
                </p>
                {/* stats row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
                  {stats.map(([num, label]) => (
                    <div key={label} style={{ textAlign: "center" }}>
                      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 900, color: "#f4a726", margin: 0 }}>{num}</p>
                      <p style={{ fontSize: 10, color: "#93c5fd", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}>{label}</p>
                    </div>
                  ))}
                </div>
                <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: 20 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(232,93,4,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ color: "#f4a726", fontSize: 10 }}>✓</span>
                      </div>
                      <span style={{ color: "#bfdbfe", fontSize: 14 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* wave */}
        <svg viewBox="0 0 1440 56" style={{ width: "100%", display: "block", marginBottom: -2 }}>
          <path fill="#f0f4f8" d="M0,36 C360,72 1080,0 1440,36 L1440,56 L0,56 Z" />
        </svg>
      </section>

      {/* ════════════════ MAIN CONTENT ════════════════ */}
      <section id="ias-content" style={{ maxWidth: 1152, margin: "0 auto", padding: "48px 20px" }}>

        {/* About + Form grid */}
        <div className="ias-content-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32, marginBottom: 56 }}>

          {/* About text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 36, height: 4, borderRadius: 4, background: "#e85d04", flexShrink: 0 }} />
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.75rem", fontWeight: 700, color: "#0a1628", margin: 0 }}>
                About IAS Examination
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, color: "#374151", lineHeight: 1.8, fontSize: 15 }}>
              <p style={{ margin: 0 }}>IAS Examination is considered to be the <strong style={{ color: "#0a1628" }}>Father of all exams</strong> & also the toughest examination in the country with three distinct levels and phases of entrance and/or qualification before the final selection.</p>
              <p style={{ margin: 0 }}>Indian Administrative Services, abbreviated as IAS, are actually the civil-based administrative services of the Government of India. <strong style={{ color: "#0a1628" }}>Best IAS Institute in Ludhiana.</strong></p>
              <p style={{ margin: 0 }}>The Indian Civil Service serves as the backbone of India and carries great respect and responsibilities. India's best brains vie for entry into the Indian Civil Services as officers.</p>
              <p style={{ margin: 0 }}>Even though corporate jobs may offer the best of salaries and perks, a majority of youngsters and their parents still crave entry to the prestigious Indian Civil Services held by the UPSC. The very fact that a big share of every year's top posts in the civil services exams are bagged by professionals from various streams, shows that the IAS is still the dream job for many.</p>
              <p style={{ margin: 0 }}>The competition being very tough for the IAS examination, one has to be prepared to put in <strong style={{ color: "#0a1628" }}>10 to 12 hours</strong> of work daily and take repeated attempts at the UPSC civil services exam.</p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div id="ias-enquire">
            <div className="ias-card-hover" style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 28px rgba(0,0,0,0.10)" }}>
              {/* header */}
              <div style={{ padding: "18px 20px", background: "linear-gradient(135deg,#0a1628,#1a3a6b)" }}>
                <div style={{ color: "#fbbf24", fontSize: 16, marginBottom: 6 }}>★★★★★</div>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "#fff", margin: 0 }}>India's Most Trusted IAS Coaching</p>
              </div>
              {/* body */}
              <div style={{ padding: 20, background: "#fff", display: "flex", flexDirection: "column", gap: 10 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0a1628", margin: 0 }}>Get Free Counselling</p>
                {["Your Full Name *", "Phone Number *", "Email Address *"].map(ph => (
                  <input key={ph} className="ias-input" placeholder={ph} style={{
                    width: "100%", border: "1px solid #e5e7eb", borderRadius: 8,
                    padding: "9px 14px", fontSize: 13, color: "#111",
                    fontFamily: "'Hind',sans-serif", background: "#fff",
                    boxSizing: "border-box",
                  }} />
                ))}
                <select className="ias-input" style={{
                  width: "100%", border: "1px solid #e5e7eb", borderRadius: 8,
                  padding: "9px 14px", fontSize: 13, color: "#6b7280",
                  fontFamily: "'Hind',sans-serif", background: "#fff",
                  boxSizing: "border-box",
                }}>
                  <option value="">Select Course *</option>
                  <option>IAS / UPSC CSE</option>
                  <option>PPSC / PCS</option>
                  <option>NDA</option>
                  <option>CDS</option>
                  <option>SSC</option>
                </select>
                <button className="ias-btn-orange" style={{
                  width: "100%", padding: "10px 0", borderRadius: 8,
                  background: "#e85d04", color: "#fff", fontWeight: 700,
                  fontSize: 14, border: "none", cursor: "pointer",
                  fontFamily: "'Hind',sans-serif",
                }}>Submit Enquiry</button>
              </div>
            </div>
          </div>
        </div>

        {/* IAS Showcase Image */}
        <div style={{ marginBottom: 56, borderRadius: 20, overflow: "hidden", boxShadow: "0 12px 40px rgba(10,22,40,0.18)", position: "relative" }}>
          <img
            src="/assets/ias-image 2.png"
            alt="IAS Coaching Institute in India"
            style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: 420 }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, rgba(10,22,40,0.55) 0%, transparent 60%)",
            display: "flex", alignItems: "center", padding: "0 40px",
          }}>
            <div>
              <p style={{ color: "#f4a726", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 8px" }}>Vashishth IAS Academy — Ludhiana</p>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2rem", fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.25 }}>
                Start Your IAS Journey<br />with the Best
              </h2>
              <a href="#ias-enquire" style={{
                display: "inline-block", padding: "10px 24px", borderRadius: 8,
                background: "#e85d04", color: "#fff", fontWeight: 700,
                fontSize: 13, textDecoration: "none",
                boxShadow: "0 4px 14px rgba(232,93,4,0.45)",
              }}>Enquire Now</a>
            </div>
          </div>
        </div>

        {/* Civil Services List */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 36, height: 4, borderRadius: 4, background: "#e85d04", flexShrink: 0 }} />
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.75rem", fontWeight: 700, color: "#0a1628", margin: 0 }}>List of Civil Services</h2>
          </div>
          <div className="ias-services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {civilServices.map((svc, i) => (
              <div key={i} className="ias-svc-item" style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "14px 18px", background: "#fff", borderRadius: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)", cursor: "default",
              }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="ias-svc-num" style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 900, color: "#e85d04", minWidth: 32, flexShrink: 0 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ias-svc-label" style={{ fontSize: 14, fontWeight: 600, color: "#0a1628" }}>{svc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ borderRadius: 16, overflow: "hidden", background: "linear-gradient(135deg,#0a1628 0%,#1a3a6b 100%)" }}>
            <div style={{ padding: "40px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{ width: 36, height: 4, borderRadius: 4, background: "#e85d04", flexShrink: 0 }} />
                <span style={{ color: "#fb923c", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Strategy</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.75rem", fontWeight: 700, color: "#fff", margin: "0 0 32px" }}>
                How Will This Strategy Benefit You?
              </h2>
              <div className="ias-strategy-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                {strategyPoints.map(s => (
                  <div key={s.num} className="ias-card-hover" style={{
                    padding: "20px 18px", borderRadius: 12,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.25rem", fontWeight: 900, color: "rgba(244,167,38,0.28)", marginBottom: 12 }}>{s.num}</div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: "#bfdbfe", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 36, height: 4, borderRadius: 4, background: "#e85d04", flexShrink: 0 }} />
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.75rem", fontWeight: 700, color: "#0a1628", margin: 0 }}>Four Pillars of IAS Preparation</h2>
          </div>
          <div className="ias-pillars-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {pillars.map(p => (
              <div key={p.title} className="ias-pillar" style={{
                display: "flex", gap: 16, padding: "20px 18px",
                background: "#fff", borderRadius: 12,
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                borderLeft: "3px solid transparent",
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                  background: "linear-gradient(135deg, #eef3fc, #f5f8ff)",
                  border: "1px solid #dde8f8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {PillarIcons[p.iconKey]}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "#0a1628", margin: "0 0 6px" }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          borderRadius: 16, padding: "40px 24px", textAlign: "center",
          background: "linear-gradient(135deg,#e85d04,#c94b00)",
        }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>
            Ready to Start Your IAS Journey?
          </h3>
          <p style={{ color: "rgba(255,237,213,0.9)", fontSize: 14, margin: "0 0 24px" }}>
            Join thousands of successful candidates who chose Vashishth IAS Academy, Ludhiana
          </p>
          <div className="ias-cta-btns" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <a href="#ias-enquire" style={{
              padding: "11px 32px", borderRadius: 8, background: "#fff",
              color: "#e85d04", fontWeight: 700, fontSize: 14, textDecoration: "none",
              fontFamily: "'Hind',sans-serif",
            }}>Enroll Now</a>
            <a href="tel:+919464031200" style={{
              padding: "11px 32px", borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.5)",
              color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none",
              fontFamily: "'Hind',sans-serif",
            }}>+91-94640-31200</a>
          </div>
        </div>

      </section>
    </div>
  );
}
