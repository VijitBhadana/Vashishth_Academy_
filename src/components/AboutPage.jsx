

import { useEffect, useRef, useState } from "react";
import { C } from "../data/data";
import { useParallax, useReveal } from "../utils/animations";

function Reveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); obs.disconnect(); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      transition: "opacity 0.8s cubic-bezier(.22,.61,.36,1), transform 0.8s cubic-bezier(.22,.61,.36,1), filter 0.8s ease",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      filter: visible ? "blur(0)" : "blur(3px)",
    }}>
      {children}
    </div>
  );
}


export default function AboutPage() {
  const S = styles;
  const { ref: heroRef, offset: heroOffset } = useParallax(0.35);
  const { ref: titleRef, visible: titleVisible } = useReveal(0.3);

  return (
    <div style={S.page}>

      {/* ── Hero Banner ── */}
      <div ref={heroRef} style={S.hero}>
        <div className="va-parallax-layer" style={{
          ...S.heroPattern,
          transform: `translateY(${heroOffset}px)`,
        }} />
        <div ref={titleRef} style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 16px" }}>
          <span style={{
            ...S.heroBadge,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 60ms, transform 0.6s ease 60ms",
          }}>Est. 2008 · Ludhiana</span>
          <h1 style={{
            ...S.heroTitle,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(32px)",
            filter: titleVisible ? "blur(0)" : "blur(6px)",
            transition: "opacity 0.9s cubic-bezier(.22,.61,.36,1) 150ms, transform 0.9s cubic-bezier(.22,.61,.36,1) 150ms, filter 0.9s ease 150ms",
          }}>About Vashishth IAS Academy</h1>
          <p style={{
            ...S.heroSub,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 350ms, transform 0.7s ease 350ms",
          }}>Best IAS Coaching in Ludhiana — Shaping Leaders Since 2008</p>
          <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 13, color: "#93c5fd" }}>
            <a href="/" style={{ color: "#93c5fd", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = C.gold}
              onMouseLeave={e => e.currentTarget.style.color = "#93c5fd"}>
              Home
            </a>
            <span>/</span>
            <span style={{ color: C.gold }}>About Us</span>
          </div>
        </div>
      </div>

      {/* ── Page Body ── */}
      <div style={S.body}>

        {/* ── 1. Who We Are ── */}
        <Reveal>
          <div className="about-two-col" style={S.twoCol}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={S.eyebrow}>
                <div style={S.eyebrowBar} />
                <span style={{ color: C.red, fontWeight: 700, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase" }}>
                  Who We Are
                </span>
              </div>
             <h2
  className="about-mobile-title"
  style={S.sectionTitle}
>
  Best IAS Coaching In Ludhiana
</h2>
              <p style={S.para}>
                Vashishth IAS Academy was established in the year <strong>2008</strong> to offer coaching for
                preparation for writing this prestigious Civil Service Examination. Academy functions at Ludhiana
                only and has <strong>no branch anywhere</strong>.
              </p>
              <p style={S.para}>
                The main objective of <strong style={{ color: C.navy }}>"VASHISHTH IAS ACADEMY"</strong> is to
                prepare a personality, a personality that will help an aspirant to bring about the necessary changes
                one requires to bring honesty and integrity towards the society and country in term of value,
                information, attitude &amp; vision.
              </p>
              <p style={{ ...S.para, marginBottom: 0 }}>
                Preliminary Exam, Main Exam and Personal Interview are the process of clearing the Civil Services
                Examination. Academy give deep overview and training on all the subjects for the purpose of clearing
                the Civil Service Examinations. Once the candidate get through the Main Exams, specialists of
                different areas to conduct Trial Interviews, Personality development classes, Leadership quality
                sessions and social responsibility speeches for improving the self-confidence and thereby mentally
                preparing them for the face-to-face interview.
              </p>
            </div>

            {/* Right: stats card */}
            <div style={S.statsCard}>
              <div style={S.statsGlow} />
              <p style={{ color: C.gold, fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 18 }}>
                Academy At A Glance
              </p>
              <div style={S.statsGrid}>
                {[
                  { num: "2008", label: "Established" },
                  { num: "500+", label: "Successful Aspirants" },
                  { num: "15+",  label: "Years Experience" },
                  { num: "1",    label: "Centre, No Branches" },
                ].map(s => (
                  <div key={s.label} style={S.statBox}>
                    <div style={S.statNum}>{s.num}</div>
                    <div style={S.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── 2. Director's Message ── */}
        <Reveal>
          <div style={S.quoteCard}>
            <div style={S.quoteHeader}>
              <div style={S.quoteIcon}>✦</div>
              <h2 style={{ color: "#fff", fontWeight: 800, fontSize: 16, textTransform: "uppercase", letterSpacing: ".1em", margin: 0 }}>
                Director's Message
              </h2>
            </div>
            <div style={{ padding: "28px 32px 32px" }}>
              <svg style={{ color: C.red, opacity: .35, marginBottom: 14 }} width="40" height="27" viewBox="0 0 48 32" fill={C.red}>
                <path d="M0 32V19.2C0 12.267 2.4 6.933 7.2 3.2L12 0l2.4 3.2C11.2 5.333 9.6 8.267 9.6 12H16V32H0zm28.8 0V19.2C28.8 12.267 31.2 6.933 36 3.2L40.8 0l2.4 3.2C40 5.333 38.4 8.267 38.4 12H44.8V32H28.8z"/>
              </svg>
              <p style={{ ...S.para, fontSize: 16, fontStyle: "italic", color: "#374151", marginBottom: 16 }}>
                Congratulations for your decision to pursue civil services as a career. You deserve kudos because
                civil services does not merely offer you yet another lucrative job for earning livelihood; it provides
                a great opportunity to realise your potentials, enjoy your assignments, have the satisfaction of
                serving the country, and eventually lead India.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 3, background: C.red, borderRadius: 2 }} />
                <span style={{ color: C.navy, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em" }}>
                  — Director, Vashishth IAS Academy
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── 3. Teaching Methodology ── */}
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <div style={{ width: 28, height: 1, background: C.red }} />
              <span style={{ color: C.red, fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>Our Approach</span>
              <div style={{ width: 28, height: 1, background: C.red }} />
            </div>
            <h2 style={S.sectionTitle}>Teaching Methodology</h2>
          </div>
          <div className="about-card-grid" style={S.cardGrid}>
            {[
              {
                icon: "📚", bg: "#fff7ed", title: "Interactive Learning",
                desc: "We VASHISHTH IAS ACADEMY give attention on participatory and interactive learning. Our latest technology and up-to-date pedagogic methods are used to give our students a competitive edge over others.",
              },
              {
                icon: "📝", bg: "#eff6ff", title: "Fortnightly Tests",
                desc: "We believe without Test and discussion, teaching is useless. So at VASHISHTH IAS ACADEMY fortnightly Test is compulsory, set of study material also be provided by the academy to supplement the teaching.",
              },
              {
                icon: "🎯", bg: "#f0fdf4", title: "Topic-wise Strategy",
                desc: "We will divide the new syllabus into individual topics. A separate material will be generated on each topic with room for note making within that material.",
              },
              {
                icon: "⚡", bg: "#faf5ff", title: "Small Booklets for Revision",
                desc: "Our small booklets will work wonders in the last days of preparation, as they can be used for last minute revision of various important topics.",
              },
            ].map(c => (
              <div key={c.title} style={S.methodCard}
                onMouseEnter={e => e.currentTarget.style.borderColor = C.red}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#e5e7eb"}>
                <div style={{ ...S.iconCircle, background: c.bg }}>
                  <span style={{ fontSize: 18 }}>{c.icon}</span>
                </div>
                <h3 style={{ color: C.navy, fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>{c.title}</h3>
                <p style={{ ...S.para, marginBottom: 0, fontSize: 13 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── 4. Strategy + Benefits ── */}
        <Reveal>
          <div style={S.twoCol}>
            {/* Strategy */}
            <div style={{ ...S.stratCard, background: C.navy }}>
              <h3 style={{ color: C.gold, fontWeight: 800, fontSize: 15, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 24 }}>
                Our Strategy
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "We will divide the new syllabus into individual topics.",
                  "A separate material will be generated on each topic with room for note making within that material.",
                  "Our focus is not an exhaustive coverage of a topic. Instead, we will make this material an index and a cursor towards each sub-topic.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: C.red, color: "#fff", fontSize: 11, fontWeight: 700, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                      {i + 1}
                    </span>
                    <span style={{ color: "#bfdbfe", fontSize: 14, lineHeight: 1.65 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div style={{ ...S.stratCard, background: "#fff", border: "1px solid #e5e7eb" }}>
              <h3 style={{ color: C.navy, fontWeight: 800, fontSize: 15, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 24 }}>
                How Will This Strategy Benefit You?
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "Our material will act as a lighthouse for each topic that we cover. Our approach will work on fetching maximum marks out of a topic.",
                  "Repeated revision of a topic consolidated under a single roof will help you increase your information processing speed. Our material will increase your efficiency in reproducing what you have read.",
                  "Answer writing in any examination is about focusing on KEYWORDS. E.g. institutional pluralism, cognitive consonance/dissonance, etc. We will shed light on such important keywords relevant to each topic that we cover.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff7ed", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.red }} />
                    </div>
                    <span style={{ color: "#4b5563", fontSize: 14, lineHeight: 1.65 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* ── 5. CSE Key Focus Areas ── */}
        <Reveal>
          <div style={S.cseBg}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 28, height: 1, background: C.red }} />
                <span style={{ color: C.red, fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>Civil Services</span>
                <div style={{ width: 28, height: 1, background: C.red }} />
              </div>
              <h2 style={S.sectionTitle}>Key Focus Areas of CSE</h2>
            </div>
          <div className="about-cse-grid" style={S.cseGrid}>
              {[
                {
                  icon: "🏎️", title: "Speed",
                  desc: "Speed has now become an important ingredient to obtain high scores. Mere ability to write fast will not suffice. Clarity of thought process along with fast processing of raw knowledge is essential. Writing a meaningful answer in such paucity of time requires a completely advanced approach.",
                },
                {
                  icon: "📊", title: "Difficulty Level",
                  desc: "Since all the questions are compulsory, the difficulty level of CSE has increased many fold. It is impossible to leave any topic untouched.",
                },
                {
                  icon: "✍️", title: "Answer Writing",
                  desc: "Everything boils down to one single key ingredient — answer writing. Why are we studying all these topics? Where will this topic help us? What is the demand of the examination? These questions provide clarity of thought.",
                },
                {
                  icon: "📋", title: "Explicitly Defined Syllabus",
                  desc: "Another good thing about the new syllabus is the clear lineation of topics. A well-defined objective always goes a long way in achieving one's goal. We can aim for the gold without a wild goose chase.",
                },
              ].map(c => (
                <div key={c.title} style={S.cseCard}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 20px rgba(26,58,107,.12)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.06)"}>
                  <div style={{ fontSize: 30, marginBottom: 10 }}>{c.icon}</div>
                  <h4 style={{ color: C.navy, fontWeight: 700, fontSize: 14, margin: "0 0 6px" }}>{c.title}</h4>
                  <p style={{ color: "#6b7280", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── 6. CTA Banner ── */}
        <Reveal>
          <div style={S.ctaBanner}>
            <div style={S.heroPattern} />
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <h2 style={{ color: "#fff", fontWeight: 900, fontSize: 26, margin: "0 0 10px", lineHeight: 1.3 }}>
                Ready to Achieve Your IAS Dream?
              </h2>
              <p style={{ color: "#bfdbfe", fontSize: 15, margin: "0 0 24px" }}>
                Join the League of Leaders — Enroll at Vashishth IAS Academy Today!
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <button style={S.ctaBtnPrimary}
                  onMouseEnter={e => e.currentTarget.style.background = "#ea580c"}
                  onMouseLeave={e => e.currentTarget.style.background = C.red}>
                  Apply Now
                </button>
                <button style={S.ctaBtnOutline}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.1)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  Call: +91-94640-31200
                </button>
              </div>
            </div>
          </div>
        </Reveal>

      </div>

      {/* ── Footer strip ── */}
      <div style={{ background: C.navy, textAlign: "center", color: "#93c5fd", fontSize: 12, padding: "18px 16px" }}>
        © {new Date().getFullYear()} Vashishth IAS Academy, Ludhiana. All Rights Reserved.
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Hind:wght@400;500;600;700&display=swap');
        @media (max-width: 768px) {
          .about-two-col  { flex-direction: column !important; }
          .about-cse-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-card-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .about-card-grid { grid-template-columns: 1fr !important; }
          .about-cse-grid  { grid-template-columns: 1fr 1fr !important; }
        }

        @media (max-width: 768px){

  .about-two-col{
    flex-direction: column !important;
  }

  .about-two-col > div{
    width:100% !important;
  }

  .about-card-grid{
    grid-template-columns:1fr !important;
  }

  .about-cse-grid{
    grid-template-columns:1fr !important;
  }

  .about-mobile-title{
    font-size:32px !important;
    line-height:1.3 !important;
  }
}

@media (max-width:768px){

  .about-card-grid > div,
  .about-cse-grid > div{
      padding:16px !important;
  }

}
      `}</style>
    </div>
  );
}

const styles = {
  page: { background: "#f0f4f8", minHeight: "100vh", fontFamily: "'Hind', sans-serif" },
  hero: {
    position: "relative",
    background: "linear-gradient(135deg,#0f1e3d 0%,#1a3a6b 50%,#7c1c0e 100%)",
    padding: "52px 16px", overflow: "hidden",
  },
  heroPattern: {
    position: "absolute", inset: 0, opacity: .08, pointerEvents: "none",
    backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
    backgroundSize: "20px 20px",
  },
  heroBadge: {
    display: "inline-block", background: "#ea580c", color: "#fff",
    fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase",
    padding: "5px 14px", borderRadius: 4, marginBottom: 16,
  },
  heroTitle: {
    color: "#fff", fontFamily: "'Merriweather',serif", fontWeight: 900,
    fontSize: "clamp(22px,5vw,44px)", margin: "0 0 12px", lineHeight: 1.2,
  },
  heroSub: { color: "#93c5fd", fontSize: 15, margin: 0 },
  body: { maxWidth: 1120, margin: "0 auto", padding: "48px 20px", display: "flex", flexDirection: "column", gap: 64 },
  twoCol: { display: "flex", gap: 32, alignItems: "stretch", flexWrap: "wrap" },
  eyebrow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 14 },
  eyebrowBar: { width: 4, height: 30, background: "#ea580c", borderRadius: 2, flexShrink: 0 },
  sectionTitle: {
    color: "#0f1e3d", fontFamily: "'Merriweather',serif", fontWeight: 900,
    fontSize: "clamp(20px,3.5vw,28px)", margin: "0 0 16px", lineHeight: 1.25,
  },
  para: { color: "#4b5563", fontSize: 14, lineHeight: 1.75, margin: "0 0 14px" },
  statsCard: {
     flexShrink: 0,
  width: "100%",
  maxWidth: "360px",
    background: "#0f1e3d", borderRadius: 16, padding: "28px 24px",
    color: "#fff", position: "relative", overflow: "hidden",
  },
  statsGlow: {
    position: "absolute", top: -30, right: -30, width: 110, height: 110,
    borderRadius: "50%", background: "#ea580c", opacity: .1, pointerEvents: "none",
  },
  statsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },
  statBox: { border: "1px solid rgba(255,255,255,.15)", borderRadius: 12, padding: "14px 10px", textAlign: "center" },
  statNum: { color: "#fb923c", fontFamily: "'Merriweather',serif", fontWeight: 900, fontSize: 26, lineHeight: 1 },
  statLabel: { color: "#bfdbfe", fontSize: 10, marginTop: 6, textTransform: "uppercase", letterSpacing: ".08em" },
  quoteCard: { background: "#fff", borderRadius: 16, overflow: "hidden", borderLeft: "4px solid #ea580c", boxShadow: "0 2px 12px rgba(0,0,0,.06)" },
  quoteHeader: { background: "#0f1e3d", padding: "16px 28px", display: "flex", alignItems: "center", gap: 12 },
  quoteIcon: { width: 34, height: 34, borderRadius: "50%", background: "#ea580c", color: "#fff", fontWeight: 900, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 },
  methodCard: {
    background: "#fff", borderRadius: 14, padding: "22px 20px",
    border: "1px solid #e5e7eb", transition: "border-color .2s", boxShadow: "0 1px 4px rgba(0,0,0,.04)",
  },
  iconCircle: { width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 },
  stratCard: { flex: 1, minWidth: 260, borderRadius: 16, padding: "28px 26px" },
  cseBg: { background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 16, padding: "36px 28px" },
  cseGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 },
  cseCard: {
    background: "#fff", borderRadius: 14, padding: "20px 16px", textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,.06)", transition: "box-shadow .2s",
  },
  ctaBanner: {
    borderRadius: 16, padding: "44px 24px", position: "relative", overflow: "hidden",
    background: "linear-gradient(135deg,#0f1e3d 0%,#1a3a6b 60%,#7c1c0e 100%)",
  },
  ctaBtnPrimary: {
    background: "#ea580c", color: "#fff", fontWeight: 700, fontSize: 12,
    letterSpacing: ".08em", textTransform: "uppercase", padding: "12px 28px",
    borderRadius: 6, border: "none", cursor: "pointer", transition: "background .2s",
  },
  ctaBtnOutline: {
    background: "transparent", color: "#fff", fontWeight: 700, fontSize: 12,
    letterSpacing: ".08em", textTransform: "uppercase", padding: "12px 28px",
    borderRadius: 6, border: "1px solid #fff", cursor: "pointer", transition: "background .2s",
  },
};