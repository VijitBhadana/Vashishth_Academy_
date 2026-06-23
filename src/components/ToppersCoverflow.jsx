
import { useState, useEffect, useRef } from "react";
import { useReveal } from "../utils/animations";
import img1 from "../assets/9.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";

const toppers = [
  { name:"Virender Singh",  exam:"IAS – UPSC CSE", score:"AIR 24", pct:"98.4%", img:img1, year:"2023", attempts:2, coaching:"18 months", quote:"Consistency beats talent every single day." },
  { name:"Davinder Singh",   exam:"IPS – UPSC CSE", score:"AIR 51", pct:"97.1%", img:img2, year:"2023", attempts:1, coaching:"24 months", quote:"Dream big, study smart, never give up." },
  { name:"Geeta Bishabnhu",   exam:"PPSC PCS",        score:"Rank 3", pct:"94.6%", img:img3, year:"2022", attempts:2, coaching:"12 months", quote:"Hard work always finds its reward." },
  { name:"Gurmukh Singh ",  exam:"NDA – Defence",   score:"AIR 18", pct:"96.2%", img:img4, year:"2023", attempts:1, coaching:"15 months", quote:"Discipline is the bridge between goals and achievement." },
  { name:"Pushpa Kashyap",  exam:"CDS – IMA",       score:"AIR 42", pct:"93.8%", img:img5, year:"2022", attempts:3, coaching:"20 months", quote:"Failure is just the beginning of success." },
  { name:"Shiv Kumar ",  exam:"SSC CGL",         score:"Rank 7", pct:"99.1%", img:img6, year:"2023", attempts:1, coaching:"10 months", quote:"Focus on progress, not perfection." },
  { name:"Satish Kumar",  exam:"IAS – UPSC CSE",  score:"AIR 88", pct:"95.3%", img:img7, year:"2022", attempts:2, coaching:"22 months", quote:"Every expert was once a beginner." },
  { name:"Shubham",    exam:"PPSC PCS",        score:"Rank 9", pct:"92.7%", img:img8, year:"2023", attempts:2, coaching:"16 months", quote:"Success is a journey, not a destination." },
];

const N = toppers.length;

function getOffset(i, active) {
  let off = i - active;
  if (off >  N / 2) off -= N;
  if (off < -N / 2) off += N;
  return off;
}

const DESKTOP_SLOTS = [
  { off: -2, tx: -222, scale: 0.68, opacity: 0.48, z: 1 },
  { off: -1, tx: -132, scale: 0.83, opacity: 0.76, z: 2 },
  { off:  0, tx:    0, scale: 1.00, opacity: 1.00, z: 5 },
  { off:  1, tx:  132, scale: 0.83, opacity: 0.76, z: 2 },
  { off:  2, tx:  222, scale: 0.68, opacity: 0.48, z: 1 },
];

const MOBILE_SLOTS = [
  { off: -1, tx: -118, scale: 0.80, opacity: 0.62, z: 1 },
  { off:  0, tx:    0, scale: 1.00, opacity: 1.00, z: 5 },
  { off:  1, tx:  118, scale: 0.80, opacity: 0.62, z: 1 },
];

/* ─── SVG icons ─── */
const StarSVG = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="#f9a825">
    <path d="M5.5 1l1.1 2.8 3 .3-2.2 2 .6 2.9L5.5 7.6 3 9l.6-2.9L1.4 4.1l3-.3L5.5 1z"/>
  </svg>
);
const ClockSVG = ({ color = "#f9a825" }) => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <circle cx="5.5" cy="5.5" r="4.3" stroke={color} strokeWidth="1.1"/>
    <path d="M5.5 3v2.5l1.5 1.5" stroke={color} strokeWidth="1" strokeLinecap="round"/>
  </svg>
);
const PersonSVG = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <circle cx="5.5" cy="3.8" r="2.1" stroke="#fff" strokeWidth="1.1"/>
    <path d="M1 10c0-2.5 2-3.8 4.5-3.8S10 7.5 10 10" stroke="#fff" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
);
const CalSVG = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <rect x="1" y="2" width="10" height="8.5" rx="1.5" stroke="#f9a825" strokeWidth="1.1"/>
    <path d="M3.5 5.5h5M3.5 7.5h3" stroke="#f9a825" strokeWidth="1" strokeLinecap="round"/>
    <path d="M3.5 3.5V1.5M8.5 3.5V1.5" stroke="#f9a825" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
);
const AttemptSVG = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 1.5L7.2 4.5l3.1.3-2.3 2.1.7 3L6 8.4l-2.7 1.5.7-3L1.7 4.8l3.1-.3L6 1.5z" stroke="#7ab3f0" strokeWidth="1" fill="none"/>
  </svg>
);
const CoachSVG = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 9.5L5 7l2.5 2L10 4" stroke="#f9a825" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Flip card component ─── */
function TopperCard({ t }) {
  const [flipped, setFlipped] = useState(false);

  const faceBase = {
    position: "absolute", inset: 0,
    backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
    borderRadius: 16, overflow: "hidden",
  };

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ width: "100%", height: "100%", perspective: 1100, cursor: "pointer" }}
    >
      <div style={{
        width: "100%", height: "100%", position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 0.68s cubic-bezier(0.4,0,0.2,1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>

        {/* ══ FRONT ══ */}
        <div style={{
          ...faceBase,
          background: "#111e2e",
          display: "flex", flexDirection: "column",
        }}>

          {/* ── Full-width photo area ── */}
          <div style={{ position: "relative", flexShrink: 0, overflow: "hidden", height: 195 }}>

            {/* Photo */}
            <img src={t.img} alt={t.name}
              style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block" }}
              onError={e => { e.currentTarget.style.background = "#1a2a3a"; e.currentTarget.removeAttribute("src"); }}
            />

            {/* Bottom gradient – fades photo into card body */}
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, transparent 40%, #111e2e 100%)" }}/>

            {/* Rank badge – top left */}
            <div style={{
              position:"absolute", top:10, left:10,
              background:"linear-gradient(135deg,#e84118,#f9a825)",
              borderRadius:8, padding:"4px 10px",
              display:"flex", alignItems:"center", gap:4,
              boxShadow:"0 2px 10px rgba(232,65,24,0.45)",
            }}>
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                <path d="M5 1l1.1 2.7 2.9.3-2.1 2 .6 2.8L5 7.4 2.5 8.8l.6-2.8L1 4l2.9-.3L5 1z" fill="#fff"/>
                <rect x="3.2" y="9" width="3.6" height="2.5" rx=".8" fill="#fff" fillOpacity=".4"/>
              </svg>
              <span style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:13, fontWeight:700, color:"#fff", letterSpacing:".03em" }}>
                {t.score}
              </span>
            </div>

            {/* % badge – top right */}
            <div style={{
              position:"absolute", top:10, right:10,
              background:"rgba(8,16,32,0.82)",
              border:"1px solid rgba(249,168,37,0.5)",
              borderRadius:6, padding:"3px 8px",
              backdropFilter:"blur(6px)", WebkitBackdropFilter:"blur(6px)",
            }}>
              <span style={{ fontSize:12, fontWeight:700, color:"#f9a825", fontFamily:"'Rajdhani',sans-serif" }}>{t.pct}</span>
            </div>

            {/* Name pinned to bottom of photo */}
            <div style={{
              position:"absolute", bottom:8, left:12, right:12,
              fontFamily:"'Rajdhani',sans-serif", fontSize:18, fontWeight:700,
              color:"#fff", letterSpacing:".02em", lineHeight:1.2,
              textShadow:"0 1px 10px rgba(0,0,0,0.7)",
            }}>
              {t.name}
            </div>
          </div>

          {/* ── Info area ── */}
          <div style={{ padding:"12px 14px 0", flex:1, display:"flex", flexDirection:"column", gap:6 }}>
            <div style={{ display:"flex", gap:2 }}>
              {[0,1,2,3,4].map(i => <StarSVG key={i}/>)}
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:5 }}>
              <ClockSVG/>
              <span style={{ fontSize:10, color:"#f9a825", fontWeight:600, letterSpacing:".07em", textTransform:"uppercase" }}>
                {t.exam}
              </span>
            </div>
          </div>

          {/* Separator */}
          <div style={{ height:1, background:"linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent)", margin:"10px 14px" }}/>

          {/* View Profile button */}
          <div style={{ padding:"0 14px 14px" }}>
            <button style={{
              width:"100%", padding:"9px 0",
              background:"rgba(255,255,255,.07)",
              border:"1px solid rgba(255,255,255,.13)",
              borderRadius:8, color:"#fff",
              fontSize:11, fontWeight:700, letterSpacing:".08em",
              textTransform:"uppercase", cursor:"pointer",
              fontFamily:"'Hind',sans-serif",
              display:"flex", alignItems:"center", justifyContent:"center", gap:5,
              transition:"background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background="rgba(249,168,37,0.15)"; e.currentTarget.style.borderColor="rgba(249,168,37,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,.07)"; e.currentTarget.style.borderColor="rgba(255,255,255,.13)"; }}
            >
              <PersonSVG/> View Profile
            </button>
          </div>
        </div>

        {/* ══ BACK — glassmorphism ══ */}
        <div style={{
          ...faceBase,
          transform: "rotateY(180deg)",
          background: "rgba(8,14,28,0.88)",
          backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.45)",
          display: "flex", flexDirection: "column", padding: "16px 14px 14px",
        }}>
          {/* Top accent bar */}
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,#e84118,#f9a825,#e84118)" }}/>

          {/* Gold corners */}
          <div style={{ position:"absolute", top:8, right:8, width:24, height:24, borderTop:"2px solid rgba(249,168,37,.4)", borderRight:"2px solid rgba(249,168,37,.4)", borderRadius:"0 4px 0 0" }}/>
          <div style={{ position:"absolute", bottom:8, left:8, width:24, height:24, borderBottom:"2px solid rgba(249,168,37,.4)", borderLeft:"2px solid rgba(249,168,37,.4)", borderRadius:"0 0 0 4px" }}/>

          {/* Header */}
          <div style={{ marginBottom:10, paddingBottom:9, borderBottom:"1px solid rgba(255,255,255,.07)" }}>
            <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:17, fontWeight:700, color:"#fff", letterSpacing:".03em", marginBottom:4 }}>
              {t.name}
            </div>
            <div style={{ display:"flex", gap:6, alignItems:"center" }}>
              <span style={{ background:"linear-gradient(135deg,#e84118,#f9a825)", borderRadius:5, padding:"2px 8px", fontSize:11, fontWeight:700, color:"#fff", fontFamily:"'Rajdhani',sans-serif" }}>
                {t.score}
              </span>
              <span style={{ fontSize:11, color:"#f9a825", fontWeight:700 }}>{t.pct}</span>
            </div>
          </div>

          {/* Detail rows */}
          <div style={{ display:"flex", flexDirection:"column", gap:7, flex:1 }}>
            {[
              { icon:<CalSVG/>,     bg:"rgba(249,168,37,.12)", bd:"rgba(249,168,37,.3)",  label:"EXAM",       value:t.exam },
              { icon:<ClockSVG color="#e84118"/>, bg:"rgba(232,65,24,.12)", bd:"rgba(232,65,24,.3)", label:"BATCH YEAR", value:t.year },
              { icon:<AttemptSVG/>, bg:"rgba(26,58,107,.45)", bd:"rgba(26,58,107,.7)",  label:"ATTEMPTS",   value:`${t.attempts} ${t.attempts===1?"Attempt":"Attempts"}` },
              { icon:<CoachSVG/>,   bg:"rgba(249,168,37,.12)", bd:"rgba(249,168,37,.25)", label:"COACHING",   value:t.coaching },
            ].map((row, ri) => (
              <div key={ri} style={{ display:"flex", alignItems:"flex-start", gap:7 }}>
                <div style={{
                  width:24, height:24, borderRadius:6, flexShrink:0,
                  background:row.bg, border:`1px solid ${row.bd}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  {row.icon}
                </div>
                <div>
                  <div style={{ fontSize:9, color:"rgba(255,255,255,.4)", fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", marginBottom:1 }}>
                    {row.label}
                  </div>
                  <div style={{ fontSize:12, color:"#fff", fontWeight:600, fontFamily:"'Rajdhani',sans-serif", lineHeight:1.2 }}>
                    {row.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div style={{ marginTop:9, padding:"7px 9px", background:"rgba(255,255,255,.04)", borderRadius:7, borderLeft:"2px solid #f9a825" }}>
            <div style={{ fontSize:9.5, color:"rgba(249,168,37,.85)", fontStyle:"italic", lineHeight:1.5, fontFamily:"'Hind',sans-serif" }}>
              "{t.quote}"
            </div>
          </div>

          {/* Bottom glow line */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,#f9a825,transparent)" }}/>
        </div>

      </div>
    </div>
  );
}

/* ─── CSS ─── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Hind:wght@400;500;600&display=swap');

  .tp-section {
    padding: 56px 20px 64px;
    background: linear-gradient(140deg, #dce7f5 0%, #e6eff9 55%, #d8e5f3 100%);
    font-family: 'Hind', sans-serif;
    overflow: hidden;
  }

  /* ── HEADER ── */
  .tp-header { text-align: center; margin-bottom: 44px; }
  .tp-title {
    font-family: 'Rajdhani', sans-serif;
    font-size: clamp(30px, 4.5vw, 46px);
    font-weight: 700;
    color: #1a3a6b;
    margin: 0;
    display: inline-block;
    letter-spacing: 0.01em;
  }
  .tp-title-bar {
    display: block; width: 56px; height: 3px;
    background: linear-gradient(90deg, #e84118, #f9a825);
    border-radius: 3px; margin: 10px auto 0;
  }
  .tp-sub {
    font-size: clamp(13px, 1.6vw, 16px); color: #4a5e7a;
    max-width: 520px; margin: 16px auto 0; line-height: 1.65;
  }

  /* ── BODY ── */
  .tp-body {
    display: flex; gap: 24px; max-width: 1200px;
    margin: 0 auto; align-items: flex-start;
  }
  .tp-white-card {
    background: #fff; border-radius: 14px; padding: 18px 16px;
    box-shadow: 0 2px 18px rgba(26,45,90,0.09);
  }

  /* ── LEFT ── */
  .tp-left { flex: 0 0 262px; display: flex; flex-direction: column; gap: 16px; }
  .tp-panel-heading {
    font-family: 'Rajdhani', sans-serif; font-size: 19px; font-weight: 700;
    color: #1a3a6b; margin: 0 0 14px 0; letter-spacing: 0.01em;
  }
  .tp-card-heading {
    font-family: 'Rajdhani', sans-serif; font-size: 15px; font-weight: 700;
    color: #1a3a6b; margin: 0 0 12px 0; letter-spacing: 0.01em;
  }
  .tp-stat-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 9px 0; border-bottom: 1px solid #eef2f8;
    opacity: 0; transform: translateX(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .tp-stat-row.tp-in  { opacity: 1; transform: translateX(0); }
  .tp-stat-row:last-child { border-bottom: none; }
  .tp-stat-label { font-size: 13px; color: #5a6e8a; }
  .tp-stat-val   { font-size: 15px; font-weight: 700; color: #1a3a6b; font-family: 'Rajdhani', sans-serif; }

  .tp-mentor-row { display: flex; align-items: center; gap: 12px; margin-top: 4px; }
  .tp-avatar-stack { display: flex; }
  .tp-avatar {
    width: 38px; height: 38px; border-radius: 50%; object-fit: cover;
    object-position: center top; border: 2.5px solid #fff;
    margin-right: -9px; box-shadow: 0 1px 6px rgba(26,45,90,0.15);
  }
  .tp-avatar:last-child { margin-right: 0; }
  .tp-dot-green  { border-color: #4caf50 !important; }
  .tp-dot-orange { border-color: #ff9800 !important; }
  .tp-mentor-text { font-size: 13px; color: #5a6e8a; margin-left: 10px; }

  /* ── CENTER CAROUSEL ── */
  .tp-center { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; }
  .tp-carousel-outer {
    position: relative; width: 100%; height: 366px;
    display: flex; align-items: center; justify-content: center;
  }
  .tp-carousel-stage {
    position: relative; width: 100%; height: 342px;
    display: flex; align-items: center; justify-content: center;
    overflow: visible;
  }
  .tp-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 40px; height: 40px; border-radius: 50%; background: #fff;
    border: none; font-size: 24px; color: #1a3a6b; cursor: pointer;
    z-index: 30; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 2px 14px rgba(26,45,90,0.14);
    transition: background 0.2s, color 0.2s, transform 0.18s; line-height: 1;
  }
  .tp-nav:hover { background: #1a3a6b; color: #fff; transform: translateY(-50%) scale(1.1); }
  .tp-nav-l { left: 0; }
  .tp-nav-r { right: 0; }

  /* the outer card wrapper in the fan */
  .tp-tcard {
    position: absolute;
    width: 186px;
    height: 338px;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.4,0,0.2,1),
                opacity  0.5s cubic-bezier(0.4,0,0.2,1);
    /* no overflow:hidden here — 3D flip needs to be visible */
    filter: drop-shadow(0 6px 20px rgba(8,15,35,0.22));
  }
  .tp-tcard:hover { filter: drop-shadow(0 10px 28px rgba(8,15,35,0.35)); }

  .tp-up-btn {
    margin-top: 22px; width: 40px; height: 40px; border-radius: 50%;
    background: #fff; border: none; font-size: 16px; color: #1a3a6b;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 2px 12px rgba(26,45,90,0.12); transition: background 0.2s, color 0.2s;
  }
  .tp-up-btn:hover { background: #1a3a6b; color: #fff; }

  /* ── RIGHT ── */
  .tp-right { flex: 0 0 242px; display: flex; flex-direction: column; gap: 16px; }
  .tp-sessions-orange {
    font-family: 'Rajdhani', sans-serif; font-size: 15px; font-weight: 700;
    color: #e84118; margin: 0 0 12px 0; letter-spacing: 0.01em;
  }
  .tp-sessions-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }
  .tp-session-item {
    font-size: 13px; color: #2a3a5a; line-height: 1.45;
    padding: 9px 0; border-bottom: 1px solid #eef2f8;
    opacity: 0; transform: translateX(22px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .tp-session-item:last-child { border-bottom: none; }
  .tp-session-item.tp-in { opacity: 1; transform: translateX(0); }
  .tp-testimonial-quote { font-size: 13px; color: #4a5e7a; font-style: italic; line-height: 1.55; margin: 0 0 8px; }
  .tp-testimonial-author { font-size: 12px; font-weight: 600; color: #1a3a6b; font-family: 'Rajdhani', sans-serif; }

  /* ── KEYFRAMES ── */
  @keyframes tpSlideLeft  { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
  @keyframes tpSlideRight { from{opacity:0;transform:translateX(40px)}  to{opacity:1;transform:translateX(0)} }
  @keyframes tpFadeUp     { from{opacity:0;transform:translateY(24px)}  to{opacity:1;transform:translateY(0)} }
  @keyframes tpScaleIn    { from{opacity:0;transform:scale(0.88)}       to{opacity:1;transform:scale(1)} }
  @keyframes tpCountUp    { from{opacity:0;transform:translateY(10px) scale(0.9)} to{opacity:1;transform:translateY(0) scale(1)} }

  .tp-left-panel  { opacity:0; }
  .tp-left-panel.tp-panel-in  { animation:tpSlideLeft  0.65s cubic-bezier(0.22,0.61,0.36,1) 0.1s  both; }
  .tp-right-panel { opacity:0; }
  .tp-right-panel.tp-panel-in { animation:tpSlideRight 0.65s cubic-bezier(0.22,0.61,0.36,1) 0.15s both; }
  .tp-card-anim   { opacity:0; }
  .tp-card-anim.tp-in    { animation:tpFadeUp  0.55s cubic-bezier(0.22,0.61,0.36,1) both; }
  .tp-mentor-anim { opacity:0; }
  .tp-mentor-anim.tp-in  { animation:tpScaleIn 0.5s  cubic-bezier(0.22,0.61,0.36,1) both; }
  .tp-stat-val-anim       { opacity:0; }
  .tp-stat-val-anim.tp-in { animation:tpCountUp 0.45s ease both; }
  .tp-sessions-card-anim  { opacity:0; }
  .tp-sessions-card-anim.tp-in { animation:tpFadeUp 0.55s cubic-bezier(0.22,0.61,0.36,1) both; }
  .tp-testimonial-anim    { opacity:0; }
  .tp-testimonial-anim.tp-in   { animation:tpFadeUp 0.55s cubic-bezier(0.22,0.61,0.36,1) both; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1060px) {
    .tp-left  { flex: 0 0 228px; }
    .tp-right { flex: 0 0 215px; }
  }
  @media (max-width: 860px) {
    .tp-body { flex-direction: column; align-items: stretch; gap: 20px; }
    .tp-left, .tp-right { flex: none; width: 100%; }
    .tp-side-row { display: flex; gap: 16px; }
    .tp-side-row .tp-left, .tp-side-row .tp-right { flex: 1; }
    .tp-carousel-outer { height: 344px; }
    .tp-carousel-stage { height: 320px; }
  }
  @media (max-width: 540px) {
    .tp-section { padding: 36px 14px 48px; }
    .tp-side-row { flex-direction: column; }
    .tp-carousel-outer { height: 320px; }
    .tp-carousel-stage { height: 296px; }
    .tp-tcard { width: 166px; height: 322px; }
    .tp-nav { width: 34px; height: 34px; font-size: 20px; }
    .tp-title { font-size: 28px; }
  }
`;

/* ─── Stagger reveal hook ─── */
function useStagger() {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, triggered };
}

const STATS    = [["Total IAS Selections:","150+"],["IMA Selections:","90+"],["CDS Toppers:","45%"],["Pan-India Rankers:","300+"]];
const SESSIONS = ["Strategy Session by Ranker 1 - Aug 15","CDS Exam Tips by Col. Sharma - Aug 18","Personalized Mentorship Form"];

export default function ToppersCoverflow() {
  const [active, setActive]     = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 860 : false);

  const { ref: titleRef, visible: titleVis } = useReveal(0.2);
  const { ref: leftRef,  visible: leftVis  } = useReveal(0.15);
  const { ref: rightRef, visible: rightVis } = useReveal(0.15);
  const { ref: statsRef, triggered: statsIn } = useStagger();
  const { ref: sessRef,  triggered: sessIn  } = useStagger();

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth <= 860);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % N), 3500);
    return () => clearInterval(id);
  }, []);

  const prev = () => setActive(a => (a - 1 + N) % N);
  const next = () => setActive(a => (a + 1) % N);
  const SLOTS = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;

  const carousel = (
    <div className="tp-center">
      <div className="tp-carousel-outer">
        <button className="tp-nav tp-nav-l" onClick={prev} aria-label="Previous">‹</button>
        <div className="tp-carousel-stage">
          {toppers.map((t, i) => {
            const off  = getOffset(i, active);
            const slot = SLOTS.find(s => s.off === off);
            if (!slot) return null;
            return (
              <div
                key={i}
                className="tp-tcard"
                onClick={() => setActive(i)}
                style={{
                  transform: `translateX(${slot.tx}px) scale(${slot.scale})`,
                  opacity: slot.opacity,
                  zIndex:  slot.z,
                }}
              >
                <TopperCard t={t} />
              </div>
            );
          })}
        </div>
        <button className="tp-nav tp-nav-r" onClick={next} aria-label="Next">›</button>
      </div>
    </div>
  );

  const leftPanel = (
    <div ref={leftRef} className={`tp-left tp-left-panel${leftVis ? " tp-panel-in" : ""}`}>
      <h3 className="tp-panel-heading">Success Highlights</h3>
      <div ref={statsRef} className={`tp-white-card tp-card-anim${statsIn ? " tp-in" : ""}`}>
        <h4 className="tp-card-heading">Key Achievements</h4>
        {STATS.map(([label, val], idx) => (
          <div key={label} className={`tp-stat-row${statsIn ? " tp-in" : ""}`}
            style={{ transitionDelay: statsIn ? `${idx * 110}ms` : "0ms" }}>
            <span className="tp-stat-label">{label}</span>
            <span className={`tp-stat-val tp-stat-val-anim${statsIn ? " tp-in" : ""}`}
              style={{ animationDelay:`${idx * 120 + 60}ms` }}>{val}</span>
          </div>
        ))}
      </div>
      <div className={`tp-white-card tp-mentor-anim${statsIn ? " tp-in" : ""}`} style={{ animationDelay:"480ms" }}>
        <h4 className="tp-card-heading">Expert Mentors</h4>
        <div className="tp-mentor-row">
          <div className="tp-avatar-stack">
            <img src={img1} className="tp-avatar tp-dot-green"  alt="mentor 1"/>
            <img src={img2} className="tp-avatar tp-dot-orange" alt="mentor 2"/>
          </div>
          <span className="tp-mentor-text">Mock mentors</span>
        </div>
      </div>
    </div>
  );

  const rightPanel = (
    <div ref={rightRef} className={`tp-right tp-right-panel${rightVis ? " tp-panel-in" : ""}`}>
      <h3 className="tp-panel-heading">Live Sessions</h3>
      <div ref={sessRef} className={`tp-white-card tp-sessions-card-anim${sessIn ? " tp-in" : ""}`}>
        <h4 className="tp-sessions-orange">Upcoming Live Sessions</h4>
        <ul className="tp-sessions-list">
          {SESSIONS.map((s, idx) => (
            <li key={s} className={`tp-session-item${sessIn ? " tp-in" : ""}`}
              style={{ transitionDelay: sessIn ? `${idx * 130}ms` : "0ms" }}>{s}</li>
          ))}
        </ul>
      </div>
      <div className={`tp-white-card tp-testimonial-anim${rightVis ? " tp-in" : ""}`} style={{ animationDelay:"350ms" }}>
        <h4 className="tp-card-heading">Testimonials</h4>
        <p className="tp-testimonial-quote">
          "We are proud students — another batch hearing some great success stories across India."
        </p>
        <span className="tp-testimonial-author">Simidh</span>
      </div>
    </div>
  );

  return (
    <>
      <style>{CSS}</style>
      <section className="tp-section">

        <div className="tp-header" ref={titleRef}>
          <h2 className="tp-title" style={{
            opacity:   titleVis ? 1 : 0,
            transform: titleVis ? "translateY(0)" : "translateY(28px)",
            filter:    titleVis ? "blur(0)" : "blur(4px)",
            transition: "opacity 0.75s cubic-bezier(.22,.61,.36,1), transform 0.75s cubic-bezier(.22,.61,.36,1), filter 0.75s ease",
          }}>
            Our Toppers
            <span className="tp-title-bar" style={{ width: titleVis ? 56 : 0, transition:"width 0.65s cubic-bezier(.22,.61,.36,1) 380ms" }}/>
          </h2>
          <p className="tp-sub" style={{
            opacity:   titleVis ? 1 : 0,
            transform: titleVis ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.65s ease 280ms, transform 0.65s ease 280ms",
          }}>
            Proud of our students who cracked the toughest exams in India — their success is our mission
          </p>
        </div>

        {!isMobile ? (
          <div className="tp-body">
            {leftPanel}{carousel}{rightPanel}
          </div>
        ) : (
          <div style={{ maxWidth:900, margin:"0 auto" }}>
            {carousel}
            <div className="tp-side-row" style={{ marginTop:24 }}>
              {leftPanel}{rightPanel}
            </div>
          </div>
        )}

      </section>
    </>
  );
}
