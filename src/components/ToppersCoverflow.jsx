

import { useState, useEffect, useRef } from "react";
import img1 from "../assets/9.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";

const C = { navy: "#1a3a6b", red: "#e84118", gold: "#f9a825" };


const toppers = [
  {
    name: "Arjun Sharma",
    exam: "IAS – UPSC CSE",
    score: "AIR 24",
    pct: "98.4%",
    img: img1,
    year: "2023",
    attempts: 2,
    coaching: "18 months",
    quote: "Consistency beats talent every single day.",
  },

  {
    name: "Priya Verma",
    exam: "IPS – UPSC CSE",
    score: "AIR 51",
    pct: "97.1%",
    img: img2,
    year: "2023",
    attempts: 1,
    coaching: "24 months",
    quote: "Dream big, study smart, never give up.",
  },

  {
    name: "Rahul Mehta",
    exam: "PPSC PCS",
    score: "Rank 3",
    pct: "94.6%",
    img: img3,
    year: "2022",
    attempts: 2,
    coaching: "12 months",
    quote: "Hard work always finds its reward.",
  },

  {
    name: "Sneha Kapoor",
    exam: "NDA – Defence",
    score: "AIR 18",
    pct: "96.2%",
    img: img4,
    year: "2023",
    attempts: 1,
    coaching: "15 months",
    quote: "Discipline is the bridge between goals and achievement.",
  },

  {
    name: "Vikram Singh",
    exam: "CDS – IMA",
    score: "AIR 42",
    pct: "93.8%",
    img: img5,
    year: "2022",
    attempts: 3,
    coaching: "20 months",
    quote: "Failure is just the beginning of success.",
  },

  {
    name: "Anjali Gupta",
    exam: "SSC CGL",
    score: "Rank 7",
    pct: "99.1%",
    img: img6,
    year: "2023",
    attempts: 1,
    coaching: "10 months",
    quote: "Focus on progress, not perfection.",
  },

  {
    name: "Karan Bhatia",
    exam: "IAS – UPSC CSE",
    score: "AIR 88",
    pct: "95.3%",
    img: img7,
    year: "2022",
    attempts: 2,
    coaching: "22 months",
    quote: "Every expert was once a beginner.",
  },

  {
    name: "Ritu Yadav",
    exam: "PPSC PCS",
    score: "Rank 9",
    pct: "92.7%",
    img: img8,
    year: "2023",
    attempts: 2,
    coaching: "16 months",
    quote: "Success is a journey, not a destination.",
  },
];
const n = toppers.length;

/* ── Card Inner with Flip ── */
function TopperCardInner({ t, isCenter }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{
        height: "100%",
        perspective: 1000,
        cursor: "pointer",
      }}
    >
      {/* Flip container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT FACE ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* photo */}
          <div style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
            <img
              src={t.img} alt={t.name}
              style={{
                width: "100%", height: 180, objectFit: "cover", objectPosition: "top", display: "block",
                transition: "transform .5s cubic-bezier(.4,0,.2,1)",
                transform: flipped && isCenter ? "scale(1.08)" : "scale(1)",
              }}
              onError={e => {
                e.currentTarget.style.cssText = `background:linear-gradient(135deg,${C.navy},#0d5e8a);width:100%;height:180px;display:block`;
                e.currentTarget.removeAttribute("src");
              }}
            />
            {/* gradient overlay */}
            <div style={{ position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 50%,#111e2e)" }}/>

            {/* score badge */}
            <div className={`tc-badge-score${isCenter?" tc-badge-in":""}`}
              style={{ position:"absolute",top:10,left:10,background:`linear-gradient(135deg,${C.red},${C.gold})`,borderRadius:8,padding:"4px 11px",display:"flex",alignItems:"center",gap:5 }}>
              <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
                <path d="M5.5 1l1.2 2.9 3.1.3-2.3 2.1.6 3L5.5 7.8l-2.6 1.5.6-3L1.2 4.2l3.1-.3L5.5 1z" fill="#fff"/>
                <rect x="3.5" y="9.5" width="4" height="3" rx="1" fill="#fff" fillOpacity=".4"/>
              </svg>
              <span style={{ fontFamily:"'Rajdhani',sans-serif",fontSize:14,fontWeight:700,color:"#fff" }}>{t.score}</span>
            </div>

            {/* pct badge */}
            <div className={`tc-badge-pct${isCenter?" tc-badge-in2":""}`}
              style={{ position:"absolute",top:10,right:10,background:"rgba(10,18,30,.8)",border:"1px solid rgba(249,168,37,.4)",borderRadius:6,padding:"3px 8px",backdropFilter:"blur(6px)" }}>
              <span style={{ fontSize:11,fontWeight:700,color:C.gold }}>{t.pct}</span>
            </div>

            {/* name overlay at bottom of photo */}
            {isCenter && (
              <div className="tc-name-overlay" style={{ position:"absolute",bottom:6,left:12,right:12 }}>
                <div style={{ fontFamily:"'Rajdhani',sans-serif",fontSize:18,fontWeight:700,color:"#fff",textShadow:"0 1px 8px rgba(0,0,0,.6)",letterSpacing:".02em" }}>{t.name}</div>
              </div>
            )}
          </div>

          {/* info */}
          <div style={{ padding:"12px 14px 14px",background:"#111e2e",flex:1,display:"flex",flexDirection:"column" }}>
            {!isCenter && (
              <div style={{ fontFamily:"'Rajdhani',sans-serif",fontSize:15,fontWeight:700,color:"#fff",marginBottom:3,letterSpacing:".02em",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{t.name}</div>
            )}

            {/* stars */}
            <div style={{ display:"flex",gap:2,marginBottom:6 }}>
              {[...Array(5)].map((_,i) => (
                <svg key={i} width="11" height="11" viewBox="0 0 11 11" fill={C.gold}>
                  <path d="M5.5 1l1.1 2.8 3 .3-2.2 2 .6 2.9L5.5 7.6 3 9l.6-2.9L1.4 4.1l3-.3L5.5 1z"/>
                </svg>
              ))}
            </div>

            <div style={{ fontSize:10,color:C.gold,fontWeight:600,letterSpacing:".07em",textTransform:"uppercase",marginBottom:10,display:"flex",alignItems:"center",gap:4 }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="3" stroke={C.gold} strokeWidth="1.2"/><path d="M4 2.5v1.5l1 1" stroke={C.gold} strokeWidth=".9" strokeLinecap="round"/></svg>
              {t.exam}
            </div>

            <div style={{ height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)",marginBottom:10 }}/>

            <button
              style={{
                width:"100%", padding:"8px 0", marginTop:"auto",
                background:"rgba(255,255,255,.07)",
                border:`1px solid rgba(255,255,255,.12)`,
                borderRadius:8, color:"#fff", fontSize:11, fontWeight:700,
                letterSpacing:".08em", textTransform:"uppercase",
                cursor:"pointer", fontFamily:"'Hind',sans-serif",
                transition:"all .3s cubic-bezier(.4,0,.2,1)",
                display:"flex", alignItems:"center", justifyContent:"center", gap:5,
              }}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="4" r="2.2" stroke="currentColor" strokeWidth="1.1"/><path d="M1 10c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
              View Profile
            </button>
          </div>
        </div>

        {/* ── BACK FACE ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(160deg, #0d1a30 0%, #1a2a3a 50%, #0d1a30 100%)",
            display: "flex",
            flexDirection: "column",
            padding: "18px 16px 16px",
            overflow: "hidden",
          }}
        >
          {/* decorative top accent */}
          <div style={{ position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${C.red},${C.gold},${C.red})` }}/>

          {/* corner ornaments */}
          <div style={{ position:"absolute",top:8,right:8,width:30,height:30,borderTop:`2px solid rgba(249,168,37,.3)`,borderRight:`2px solid rgba(249,168,37,.3)`,borderRadius:"0 4px 0 0" }}/>
          <div style={{ position:"absolute",bottom:8,left:8,width:30,height:30,borderBottom:`2px solid rgba(249,168,37,.3)`,borderLeft:`2px solid rgba(249,168,37,.3)`,borderRadius:"0 0 0 4px" }}/>

          {/* Name + score header */}
          <div style={{ marginBottom:12,paddingBottom:10,borderBottom:"1px solid rgba(255,255,255,.08)" }}>
            <div style={{ fontFamily:"'Rajdhani',sans-serif",fontSize:17,fontWeight:700,color:"#fff",letterSpacing:".03em",marginBottom:2 }}>{t.name}</div>
            <div style={{ display:"flex",gap:6,alignItems:"center" }}>
              <span style={{ background:`linear-gradient(135deg,${C.red},${C.gold})`,borderRadius:5,padding:"2px 8px",fontSize:11,fontWeight:700,color:"#fff",fontFamily:"'Rajdhani',sans-serif" }}>{t.score}</span>
              <span style={{ fontSize:11,color:C.gold,fontWeight:700 }}>{t.pct}</span>
            </div>
          </div>

          {/* Detail rows */}
          <div style={{ display:"flex",flexDirection:"column",gap:8,flex:1 }}>

            {/* Exam */}
            <div style={{ display:"flex",alignItems:"flex-start",gap:8 }}>
              <div style={{ width:24,height:24,borderRadius:6,background:"rgba(249,168,37,.12)",border:"1px solid rgba(249,168,37,.25)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="8" rx="1.5" stroke={C.gold} strokeWidth="1.1"/><path d="M3.5 5.5h5M3.5 7.5h3" stroke={C.gold} strokeWidth="1" strokeLinecap="round"/><path d="M3.5 3.5V2" stroke={C.gold} strokeWidth="1.1" strokeLinecap="round"/><path d="M8.5 3.5V2" stroke={C.gold} strokeWidth="1.1" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div style={{ fontSize:9,color:"rgba(255,255,255,.4)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:1 }}>Exam</div>
                <div style={{ fontSize:12,color:"#fff",fontWeight:600,fontFamily:"'Rajdhani',sans-serif",lineHeight:1.2 }}>{t.exam}</div>
              </div>
            </div>

            {/* Batch year */}
            <div style={{ display:"flex",alignItems:"flex-start",gap:8 }}>
              <div style={{ width:24,height:24,borderRadius:6,background:"rgba(232,65,24,.12)",border:"1px solid rgba(232,65,24,.25)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke={C.red} strokeWidth="1.1"/><path d="M6 3.5v2.5l1.5 1.5" stroke={C.red} strokeWidth="1" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div style={{ fontSize:9,color:"rgba(255,255,255,.4)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:1 }}>Batch Year</div>
                <div style={{ fontSize:12,color:"#fff",fontWeight:600,fontFamily:"'Rajdhani',sans-serif" }}>{t.year}</div>
              </div>
            </div>

            {/* Attempts */}
            <div style={{ display:"flex",alignItems:"flex-start",gap:8 }}>
              <div style={{ width:24,height:24,borderRadius:6,background:"rgba(26,58,107,.4)",border:`1px solid rgba(26,58,107,.6)`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1.5L7.2 4.5l3.1.3-2.3 2.1.7 3L6 8.4l-2.7 1.5.7-3L1.7 4.8l3.1-.3L6 1.5z" stroke="#7ab3f0" strokeWidth="1" fill="none"/></svg>
              </div>
              <div>
                <div style={{ fontSize:9,color:"rgba(255,255,255,.4)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:1 }}>Attempts</div>
                <div style={{ fontSize:12,color:"#fff",fontWeight:600,fontFamily:"'Rajdhani',sans-serif" }}>{t.attempts} {t.attempts === 1 ? "Attempt" : "Attempts"}</div>
              </div>
            </div>

            {/* Coaching duration */}
            <div style={{ display:"flex",alignItems:"flex-start",gap:8 }}>
              <div style={{ width:24,height:24,borderRadius:6,background:"rgba(249,168,37,.12)",border:"1px solid rgba(249,168,37,.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 9.5L5 7l2.5 2L10 4" stroke={C.gold} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div style={{ fontSize:9,color:"rgba(255,255,255,.4)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:1 }}>Coaching</div>
                <div style={{ fontSize:12,color:"#fff",fontWeight:600,fontFamily:"'Rajdhani',sans-serif" }}>{t.coaching}</div>
              </div>
            </div>

          </div>

          {/* Quote */}
          <div style={{
            marginTop:10,
            padding:"8px 10px",
            background:"rgba(255,255,255,.04)",
            borderRadius:8,
            borderLeft:`2px solid ${C.gold}`,
          }}>
            <div style={{ fontSize:10,color:"rgba(249,168,37,.8)",fontStyle:"italic",lineHeight:1.5,fontFamily:"'Hind',sans-serif" }}>"{t.quote}"</div>
          </div>

          {/* bottom accent */}
          <div style={{ position:"absolute",bottom:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${C.gold},transparent)` }}/>
        </div>
      </div>
    </div>
  );
}
function DesktopCoverflow({ active, setActive }) {
  const radius = 420;

  const goPrev = () => {
    setActive((prev) => (prev - 1 + n) % n);
  };

  const goNext = () => {
    setActive((prev) => (prev + 1) % n);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        perspective: "2000px",
        overflow: "hidden",
      }}
    >
      <button
        className="tc-arrow"
        onClick={goPrev}
        style={{ left: 20 }}
      >
        ‹
      </button>

      <button
        className="tc-arrow"
        onClick={goNext}
        style={{ right: 20 }}
      >
        ›
      </button>

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {toppers.map((t, i) => {
          const angle = ((360 / n) * (i - active));

          const scale =
            i === active
              ? 1
              : 0.75;

          const opacity =
            i === active
              ? 1
              : 0.65;

          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                position: "absolute",
                width: 240,
                height: 360,
                transformStyle: "preserve-3d",
                cursor: "pointer",
                transition:
                  "transform 1s ease, opacity .8s ease",
                transform: `
                  rotateY(${angle}deg)
                  translateZ(${radius}px)
                  scale(${scale})
                `,
                opacity,
              }}
            >
              <TopperCardInner
                t={t}
                isCenter={i === active}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}



/* ── Mobile Slider ── */
function MobileSlider({ active, setActive }) {
  const touchStart = useRef(null);
  const onTS = e => { touchStart.current = e.touches[0].clientX; };
  const onTE = e => {
    if (!touchStart.current) return;
    const d = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 40) setActive(d > 0 ? (active+1)%n : ((active-1)%n+n)%n);
    touchStart.current = null;
  };

  return (
    <div onTouchStart={onTS} onTouchEnd={onTE} style={{ width:"100%",overflow:"hidden",padding:"8px 0" }}>
      <div style={{ display:"flex",transition:"transform .5s cubic-bezier(.4,0,.2,1)",transform:`translateX(calc(-${active*100}%))` }}>
        {toppers.map((t,i) => (
          <div key={i} style={{ minWidth:"100%",display:"flex",justifyContent:"center",padding:"0 20px" }}>
            <div style={{
              width:"100%",maxWidth:280,borderRadius:16,overflow:"hidden",
              boxShadow:"0 8px 32px rgba(26,58,107,.22)",background:"#1a2a3a",
              transform:i===active?"scale(1)":"scale(0.92)",
              opacity:i===active?1:0.5,transition:"transform .4s,opacity .4s",
            }}>
              <TopperCardInner t={t} isCenter={i===active}/>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display:"flex",justifyContent:"center",gap:12,marginTop:20 }}>
        {[["‹",((active-1)%n+n)%n],["›",(active+1)%n]].map(([ch,to],idx)=>(
          <button key={idx} onClick={()=>setActive(to)}
            style={{ width:42,height:42,borderRadius:"50%",background:C.navy,border:"none",color:"#fff",fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(26,58,107,.3)" }}>
            {ch}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Main ── */
export default function ToppersCoverflow() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

 useEffect(() => {
  const timer = setInterval(() => {
    setActive((prev) => (prev + 1) % n);
  }, 2500);

  return () => clearInterval(timer);
}, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Hind:wght@400;500;600&display=swap');

        /* ── keyframes ── */
        @keyframes tcSlideUp   { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes tcFadeIn    { from{opacity:0} to{opacity:1} }
        @keyframes tcScaleIn   { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }
        @keyframes tcBadgeLeft { from{opacity:0;transform:translateX(-14px)} to{opacity:1;transform:translateX(0)} }
        @keyframes tcBadgeRight{ from{opacity:0;transform:translateX(14px)} to{opacity:1;transform:translateX(0)} }
        @keyframes tcNameUp    { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes tcPulseRing {
          0%   { box-shadow:0 0 0 0   rgba(249,168,37,.45),0 24px 60px rgba(26,58,107,.45); }
          70%  { box-shadow:0 0 0 12px rgba(249,168,37,0),  0 24px 60px rgba(26,58,107,.45); }
          100% { box-shadow:0 0 0 0   rgba(249,168,37,0),  0 24px 60px rgba(26,58,107,.45); }
        }
        @keyframes tcShimmer {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes tcDotPop {
          0%,100%{ transform:scale(1); }
          50%    { transform:scale(1.35); }
        }

        /* ── card active pulse ring ── */
        .tc-card-active {
          animation: tcPulseRing 2.4s ease-out infinite !important;
        }

        /* ── badge animations ── */
        .tc-badge-score.tc-badge-in  { animation:tcBadgeLeft  .5s .15s both; }
        .tc-badge-pct.tc-badge-in2   { animation:tcBadgeRight .5s .25s both; }
        .tc-name-overlay              { animation:tcNameUp     .45s .3s both; }

        /* ── arrow button ── */
        .tc-arrow {
          position:absolute; top:50%; transform:translateY(-50%);
          width:46px; height:46px; border-radius:50%; border:none;
          background:#1a3a6b; color:#fff;
          cursor:pointer; z-index:100;
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 4px 16px rgba(26,58,107,.32);
          transition:background .2s, transform .2s, box-shadow .2s;
        }
        .tc-arrow:hover {
          background:#e84118 !important;
          transform:translateY(-50%) scale(1.12) !important;
          box-shadow:0 6px 22px rgba(232,65,24,.45) !important;
        }

        /* ── section ── */
        .tc-section {
          padding:48px 0 56px;
          background:linear-gradient(180deg,#f0f4fa 0%,#e8eef8 100%);
          overflow:hidden; font-family:'Hind',sans-serif;
        }

        /* ── title ── */
        .tc-title-wrap { text-align:center; margin-bottom:36px; animation:tcSlideUp .7s .1s both; }
        // .tc-title {
        //   font-family:'Rajdhani',sans-serif; font-size:38px; font-weight:700;
        //   color:#1a3a6b; letter-spacing:.02em;
        //   display:inline-block; position:relative; margin-bottom:10px;
        //   background:linear-gradient(90deg,#1a3a6b 30%,#f9a825 50%,#1a3a6b 70%);
        //   background-size:200% auto;
        //   -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        //   background-clip:text;
        //   animation:tcShimmer 4s linear infinite;
        // }

        .tc-title {
  color: #1a3a6b;
  font-family:'Rajdhani',sans-serif;
  font-size:38px;
  font-weight:700;
  letter-spacing:.02em;
  display:inline-block;
  position:relative;
  margin-bottom:10px;
}
        .tc-title-bar {
          display:block; margin:8px auto 0; width:60px; height:3px;
          background:linear-gradient(90deg,#e84118,#f9a825); border-radius:2px;
          animation:tcScaleIn .6s .4s both;
        }
        .tc-sub {
          font-size:14px; color:#4a5e7a; max-width:600px;
          margin:12px auto 0; line-height:1.65; padding:0 16px;
          animation:tcFadeIn .7s .5s both;
        }

        /* ── dots ── */
        .tc-dots {
          display:flex; justify-content:center; gap:8px;
          margin-top:28px; flex-wrap:wrap; padding:0 16px;
          animation:tcFadeIn .5s .6s both;
        }
        .tc-dot {
          height:8px; border-radius:4px; background:#ccd8ea;
          border:none; cursor:pointer; outline:none;
          transition:all .35s cubic-bezier(.4,0,.2,1); padding:0;
        }
        .tc-dot.active {
          background:#1a3a6b; width:26px !important;
          animation:tcDotPop .35s ease;
        }
          .tc-card-3d {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

        @media(max-width:767px){
          .tc-desktop{display:none!important;} .tc-mobile{display:block!important;}
          .tc-title{font-size:26px;}
          .tc-sub{font-size:13px;}
        }
        @media(min-width:768px){
          .tc-desktop{display:block;} .tc-mobile{display:none!important;}
        }
        @media(min-width:768px) and (max-width:1023px){ .tc-title{font-size:30px;} }
      `}</style>

      <section className="tc-section">
        <div className="tc-title-wrap">
          <h2 className="tc-title">Our Toppers<span className="tc-title-bar"/></h2>
          <p className="tc-sub">Proud of our students who cracked the toughest exams in India — their success is our mission</p>
        </div>

        <div className="tc-desktop"><DesktopCoverflow active={active} setActive={setActive}/></div>
        <div className="tc-mobile"><MobileSlider active={active} setActive={setActive}/></div>

        <div className="tc-dots">
          {toppers.map((_,i) => (
            <button key={i} className={`tc-dot${i===active?" active":""}`}
              style={{ width:i===active?26:8 }} onClick={()=>setActive(i)}/>
          ))}
        </div>
      </section>
    </>
  );
}
