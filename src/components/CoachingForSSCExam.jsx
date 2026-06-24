import { useParallax, useReveal } from "../utils/animations";

const sscExams = [
  { short:"SSC CGL", full:"Combined Graduate Level", desc:"For graduate-level posts in various ministries and departments", color:"#1a3a6b" },
  { short:"SSC JE", full:"Junior Engineer", desc:"For engineering posts in government departments", color:"#0d7490" },
  { short:"SSC CHSL", full:"Combined Higher Secondary Level", desc:"For 10+2 level posts like LDC, DEO, PA/SA", color:"#e85d04" },
  { short:"SSC MTS", full:"Multi Tasking Staff", desc:"For non-technical Group-C posts across departments", color:"#1d4ed8" },
  { short:"SSC CPO", full:"Central Police Organisation", desc:"For Sub-Inspector posts in Delhi Police, CAPF, etc.", color:"#7c3aed" },
];

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="#1a3a6b" strokeWidth="1.5" fill="#1a3a6b" fillOpacity="0.1"/>
        <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#1a3a6b" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M20 8l1.5 1.5 3-3" stroke="#e85d04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title:"Skilled Faculty",
    desc:"We have a dedicated group of faculty inclined towards the all-round professional growth of students. They provide aspirants with necessary guidance and knowledge to scale SSC Exams with ease.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="#1a3a6b" strokeWidth="1.5" fill="#1a3a6b" fillOpacity="0.08"/>
        <path d="M8 10h12M8 14h12M8 18h7" stroke="#e85d04" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title:"Quality Course Content",
    desc:"Vashishth IAS Academy has the most comprehensive and exhaustive course content for SSC Exams. The material covers all topics of all sections asked in SSC Exams enabling extensive preparation.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="#1a3a6b" strokeWidth="1.5" fill="#1a3a6b" fillOpacity="0.08"/>
        <circle cx="14" cy="14" r="4" stroke="#e85d04" strokeWidth="1.5" fill="none"/>
        <path d="M14 11v3l2 2" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title:"Best Online Tests",
    desc:"We provide students with a real-time feel of the examinations through our well-designed Test Series. Practice with actual exam patterns and improve your speed and accuracy.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L4 9l10 5 10-5-10-5Z" stroke="#1a3a6b" strokeWidth="1.5" strokeLinejoin="round" fill="#1a3a6b" fillOpacity="0.08"/>
        <path d="M4 14l10 5 10-5M4 19l10 5 10-5" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title:"Free Demo Classes",
    desc:"We provide free demo classes to students to help them choose from the classes they want to attend. Experience our teaching methodology before enrolling.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#1a3a6b" strokeWidth="1.5" fill="#1a3a6b" fillOpacity="0.08"/>
        <path d="M14 9v5l3 3" stroke="#e85d04" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M9 5.5L6 3M19 5.5L22 3" stroke="#1a3a6b" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title:"Extra Doubt Clearing Sessions",
    desc:"We provide aspirants with extra sessions apart from regular classes to clear doubts and queries so that they can prepare efficiently for their upcoming SSC exams.",
  },
];

const whyPoints = [
  { num:"01", title:"Proven Track Record", desc:"Years of experience producing SSC toppers from Ludhiana and across Punjab." },
  { num:"02", title:"Batch Timings", desc:"Flexible batch timings to suit every aspirant's schedule — morning, evening, and weekend batches." },
  { num:"03", title:"Expert Guidance", desc:"Subject-wise expert faculty for Quantitative Aptitude, English, Reasoning, and General Awareness." },
  { num:"04", title:"Updated Material", desc:"Regularly updated study material aligned with the latest SSC exam patterns and syllabi." },
];

const TH = { background:"#1a3a6b",color:"#fff",padding:"10px 14px",textAlign:"left",fontSize:13,fontWeight:700,fontFamily:"'Hind',sans-serif" };
const TD = { padding:"10px 14px",fontSize:13,color:"#2c3e50",borderBottom:"1px solid #e8eef7",verticalAlign:"top",lineHeight:1.7,fontFamily:"'Hind',sans-serif" };
const TDeven = { ...TD, background:"#f5f8fd" };

export default function CoachingForSSCExam() {
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);
  const { ref: heroTextRef, visible: heroTextVisible } = useReveal(0.3);
  return (
    <div style={{ fontFamily:"'Hind',sans-serif",background:"#f0f4f8",minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes sscFadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        .ssc-fadeup{animation:sscFadeUp 0.65s ease forwards;}
        .ssc-d1{animation-delay:.1s;opacity:0}.ssc-d2{animation-delay:.25s;opacity:0}.ssc-d3{animation-delay:.4s;opacity:0}.ssc-d4{animation-delay:.55s;opacity:0}
        .ssc-btn{transition:opacity .2s,transform .2s;}.ssc-btn:hover{opacity:.88;transform:scale(1.03);}
        .ssc-input:focus{outline:none;border-color:#e85d04 !important;}
        .ssc-card{transition:transform .25s,box-shadow .25s,border-color .25s;}
        .ssc-card:hover{transform:translateY(-4px);box-shadow:0 14px 32px rgba(0,0,0,0.11) !important;}
        .ssc-exam-card{transition:transform .25s,box-shadow .25s;}
        .ssc-exam-card:hover{transform:translateY(-3px);box-shadow:0 10px 24px rgba(0,0,0,0.12) !important;}
        .ssc-feature-card{transition:border-left .25s,transform .25s;border-left:3px solid transparent;}
        .ssc-feature-card:hover{border-left:3px solid #e85d04 !important;transform:translateX(4px);}
        @media(max-width:900px){
          .ssc-hero-grid{grid-template-columns:1fr !important;}
          .ssc-content-grid{grid-template-columns:1fr !important;}
          .ssc-exams-grid{grid-template-columns:1fr 1fr !important;}
          .ssc-why-grid{grid-template-columns:1fr 1fr !important;}
        }
        @media(max-width:600px){
          .ssc-hero-h1{font-size:2rem !important;}
          .ssc-hero-btns{flex-direction:column !important;}
          .ssc-hero-btns a{width:100% !important;text-align:center;}
          .ssc-exams-grid{grid-template-columns:1fr !important;}
          .ssc-why-grid{grid-template-columns:1fr !important;}
          .ssc-cta-btns{flex-direction:column !important;align-items:center;}
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section ref={heroRef} style={{ background:"linear-gradient(135deg,#0a1628 0%,#1a3a6b 55%,#0d2444 100%)",position:"relative",overflow:"hidden" }}>
        <div className="va-blob" style={{ position:"absolute",top:0,right:0,width:380,height:380,borderRadius:"50%",background:"radial-gradient(circle,rgba(232,93,4,0.13),transparent)",transform:`translate(30%,-30%) translateY(${heroOffset}px)`,pointerEvents:"none" }}/>
        <div className="va-blob" style={{ position:"absolute",bottom:0,left:0,width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,167,38,0.1),transparent)",transform:`translate(-40%,40%) translateY(${heroOffset*0.5}px)`,pointerEvents:"none" }}/>

        <div style={{ position:"relative",zIndex:1,maxWidth:1152,margin:"0 auto",padding:"48px 20px 0" }}>
          {/* breadcrumb */}
          <div className="ssc-fadeup" style={{ display:"flex",flexWrap:"wrap",gap:6,fontSize:13,color:"#93c5fd",marginBottom:28 }}>
            <a href="/" style={{ color:"#93c5fd",textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>Our Courses</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>Coaching for SSC Exam</span>
          </div>

          <div className="ssc-hero-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center",paddingBottom:48 }}>
            {/* left */}
            <div ref={heroTextRef}>
              <span style={{ display:"inline-block",padding:"4px 14px",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",borderRadius:999,background:"rgba(232,93,4,0.2)",color:"#f4a726",border:"1px solid rgba(232,93,4,0.4)",marginBottom:16,
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(16px)",transition:"opacity 0.6s ease 60ms,transform 0.6s ease 60ms" }}>
                SSC Coaching — Ludhiana
              </span>
              <h1 className="ssc-hero-h1" style={{ fontFamily:"'Playfair Display',Georgia,serif",fontSize:"3rem",fontWeight:900,color:"#fff",lineHeight:1.15,margin:"0 0 20px",
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(32px)",filter:heroTextVisible?"blur(0)":"blur(6px)",
                transition:"opacity 0.9s cubic-bezier(.22,.61,.36,1) 150ms,transform 0.9s cubic-bezier(.22,.61,.36,1) 150ms,filter 0.9s ease 150ms" }}>
                Best Coaching<br/><span style={{ color:"#f4a726" }}>for SSC Exam</span>
              </h1>
              <p style={{ color:"#bfdbfe",fontSize:16,lineHeight:1.75,margin:"0 0 28px",
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(16px)",transition:"opacity 0.7s ease 320ms,transform 0.7s ease 320ms" }}>
                SSC is a reputed organization under the Government of India that recruits eligible candidates for various Government departments and ministries. Prepare with the best SSC coaching in Ludhiana at Vashishth IAS Academy.
              </p>
              <div className="ssc-hero-btns" style={{ display:"flex",flexWrap:"wrap",gap:12,
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(14px)",transition:"opacity 0.7s ease 450ms,transform 0.7s ease 450ms" }}>
                <a href="#ssc-enquire" className="ssc-btn" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",boxShadow:"0 4px 18px rgba(232,93,4,0.45)" }}>Enquire Now</a>
                <a href="#ssc-content" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,border:"1px solid #60a5fa",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none" }}>Know More</a>
              </div>
            </div>

            {/* hero image + stats card */}
            <div className="ssc-fadeup ssc-d3" style={{ display:"flex",flexDirection:"column",gap:20 }}>
              <div style={{ borderRadius:16,overflow:"hidden",boxShadow:"0 8px 32px rgba(0,0,0,0.35)",border:"1px solid rgba(255,255,255,0.12)" }}>
                <img
                  src="/assets/ssc-image 1.png"
                  alt="SSC Coaching at Vashishth Academy"
                  style={{ width:"100%",display:"block",objectFit:"cover" }}
                />
              </div>
              <div style={{ borderRadius:16,padding:"28px 24px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)" }}>
                <p style={{ color:"#93c5fd",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:20 }}>SSC Coaching At a Glance</p>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20 }}>
                  {[["5+","SSC Exams"],["Expert","Faculty"],["Ludhiana","Location"]].map(([n,l])=>(
                    <div key={l} style={{ textAlign:"center" }}>
                      <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",fontWeight:900,color:"#f4a726",margin:0 }}>{n}</p>
                      <p style={{ fontSize:10,color:"#93c5fd",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4 }}>{l}</p>
                    </div>
                  ))}
                </div>
                <hr style={{ border:"none",borderTop:"1px solid rgba(255,255,255,0.1)",marginBottom:20 }}/>
                <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                  {["SSC CGL, JE, CHSL, MTS, CPO Coaching","Dedicated Skilled Faculty","Best Online Test Series","Free Demo Classes","Extra Doubt Clearing Sessions"].map(f=>(
                    <div key={f} style={{ display:"flex",alignItems:"center",gap:10 }}>
                      <div style={{ width:20,height:20,borderRadius:"50%",background:"rgba(232,93,4,0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                        <span style={{ color:"#f4a726",fontSize:10 }}>✓</span>
                      </div>
                      <span style={{ color:"#bfdbfe",fontSize:14 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 56" style={{ width:"100%",display:"block",marginBottom:-2 }}>
          <path fill="#f0f4f8" d="M0,36 C360,72 1080,0 1440,36 L1440,56 L0,56 Z"/>
        </svg>
      </section>

      {/* ══════ MAIN CONTENT ══════ */}
      <section id="ssc-content" style={{ maxWidth:1152,margin:"0 auto",padding:"48px 20px" }}>

        {/* About + Form */}
        <div className="ssc-content-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr",gap:32,marginBottom:56 }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
              <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
              <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.7rem",fontWeight:700,color:"#0a1628",margin:0 }}>About SSC Coaching</h2>
            </div>
            <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 16px" }}>
              SSC is a reputed organization under the <strong style={{ color:"#0a1628" }}>Government of India</strong> that recruits eligible candidates for various Government departments and ministries through SSC CGL, SSC JE, SSC CHSL, SSC MTS, and SSC CPO exams.
            </p>
            <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 20px" }}>
              Considering the significance of these exams, <strong style={{ color:"#0a1628" }}>Vashishth IAS Academy</strong> provides candidates with the best course content, dedicated faculty and an effective study guide through SSC Coaching in Ludhiana with batch timings that suit every aspirant's need.
            </p>

            {/* SSC Exams Grid */}
            <div className="ssc-exams-grid" style={{ display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10 }}>
              {sscExams.map(e=>(
                <div key={e.short} className="ssc-exam-card" style={{ borderRadius:10,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}>
                  <div style={{ background:e.color,padding:"10px 12px",textAlign:"center" }}>
                    <p style={{ color:"#fff",fontFamily:"'Playfair Display',serif",fontWeight:900,fontSize:"1rem",margin:0 }}>{e.short}</p>
                  </div>
                  <div style={{ background:"#fff",padding:"10px 12px",textAlign:"center" }}>
                    <p style={{ fontSize:10,fontWeight:600,color:"#0a1628",margin:"0 0 4px",lineHeight:1.4 }}>{e.full}</p>
                    <p style={{ fontSize:9,color:"#6b7280",margin:0,lineHeight:1.4 }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry form */}
          <div id="ssc-enquire">
            <div style={{ borderRadius:16,overflow:"hidden",boxShadow:"0 8px 28px rgba(0,0,0,0.10)" }}>
              <div style={{ padding:"18px 20px",background:"linear-gradient(135deg,#0a1628,#1a3a6b)" }}>
                <div style={{ color:"#fbbf24",fontSize:16,marginBottom:6 }}>★★★★★</div>
                <p style={{ fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:"#fff",margin:0 }}>Best SSC Coaching in Ludhiana</p>
              </div>
              <div style={{ padding:20,background:"#fff",display:"flex",flexDirection:"column",gap:10 }}>
                <p style={{ fontSize:13,fontWeight:700,color:"#0a1628",margin:0 }}>Get Free Counselling</p>
                {["Your Full Name *","Phone Number *","Email Address *"].map(ph=>(
                  <input key={ph} className="ssc-input" placeholder={ph} style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#111",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}/>
                ))}
                <select className="ssc-input" style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#6b7280",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}>
                  <option value="">Select SSC Exam *</option>
                  <option>SSC CGL</option><option>SSC JE</option><option>SSC CHSL</option><option>SSC MTS</option><option>SSC CPO</option>
                </select>
                <button className="ssc-btn" style={{ width:"100%",padding:"10px 0",borderRadius:8,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,border:"none",cursor:"pointer",fontFamily:"'Hind',sans-serif" }}>
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SSC Showcase Image */}
        <div style={{ marginBottom:56,borderRadius:20,overflow:"hidden",boxShadow:"0 12px 40px rgba(10,22,40,0.18)",position:"relative" }}>
          <img
            src="/assets/ssc-image 2.png"
            alt="SSC Exam Preparation"
            style={{ width:"100%",display:"block",objectFit:"cover",maxHeight:420 }}
          />
          <div style={{
            position:"absolute",inset:0,
            background:"linear-gradient(90deg,rgba(10,22,40,0.65) 0%,transparent 60%)",
            display:"flex",alignItems:"center",padding:"0 40px",
          }}>
            <div>
              <p style={{ color:"#f4a726",fontSize:12,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",margin:"0 0 8px" }}>Vashishth IAS Academy — Ludhiana</p>
              <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif",fontSize:"2rem",fontWeight:900,color:"#fff",margin:"0 0 16px",lineHeight:1.25 }}>
                Crack SSC Exams<br/>with Expert Coaching
              </h2>
              <a href="#ssc-enquire" style={{
                display:"inline-block",padding:"10px 24px",borderRadius:8,
                background:"#e85d04",color:"#fff",fontWeight:700,
                fontSize:13,textDecoration:"none",
                boxShadow:"0 4px 14px rgba(232,93,4,0.45)",
              }}>Enquire Now</a>
            </div>
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom:56 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24 }}>
            <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>Features of Our SSC Coaching</h2>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:14 }}>
            {features.map((f,i)=>(
              <div key={i} className="ssc-feature-card" style={{ display:"flex",gap:18,padding:"20px 22px",background:"#fff",borderRadius:12,boxShadow:"0 2px 10px rgba(0,0,0,0.07)",borderLeft:"3px solid transparent",alignItems:"flex-start" }}>
                <div style={{ width:52,height:52,borderRadius:12,background:"linear-gradient(135deg,#eef3fc,#f5f8ff)",border:"1px solid #dde8f8",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  {f.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.05rem",fontWeight:700,color:"#0a1628",margin:"0 0 6px" }}>{f.title}</h3>
                  <p style={{ fontSize:14,color:"#374151",lineHeight:1.75,margin:0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SSC Exams Table */}
        <div style={{ marginBottom:56 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
            <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>SSC Exams We Cover</h2>
          </div>
          <div style={{ background:"#fff",borderRadius:14,padding:"24px 22px",boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflowX:"auto" }}>
            <table style={{ width:"100%",borderCollapse:"collapse",minWidth:500 }}>
              <thead>
                <tr>
                  <th style={TH}>Exam</th>
                  <th style={TH}>Full Name</th>
                  <th style={TH}>Description</th>
                </tr>
              </thead>
              <tbody>
                {sscExams.map((e,i)=>(
                  <tr key={i}>
                    <td style={{ ...(i%2===0?TD:TDeven) }}>
                      <span style={{ display:"inline-block",padding:"3px 12px",borderRadius:6,background:e.color,color:"#fff",fontWeight:700,fontSize:12 }}>{e.short}</span>
                    </td>
                    <td style={{ ...(i%2===0?TD:TDeven),fontWeight:600,color:"#0a1628" }}>{e.full}</td>
                    <td style={i%2===0?TD:TDeven}>{e.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Vashishth */}
        <div style={{ marginBottom:56 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24 }}>
            <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>Why Choose Vashishth for SSC Coaching?</h2>
          </div>

          {/* dark strategy card */}
          <div style={{ borderRadius:16,background:"linear-gradient(135deg,#0a1628 0%,#1a3a6b 100%)",padding:"36px 32px",marginBottom:16 }}>
            <div className="ssc-why-grid" style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16 }}>
              {whyPoints.map(w=>(
                <div key={w.num} className="ssc-card" style={{ padding:"20px 20px",borderRadius:12,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"2rem",fontWeight:900,color:"rgba(244,167,38,0.25)",marginBottom:10 }}>{w.num}</div>
                  <h3 style={{ fontSize:15,fontWeight:700,color:"#fff",margin:"0 0 8px" }}>{w.title}</h3>
                  <p style={{ fontSize:13,color:"#bfdbfe",lineHeight:1.7,margin:0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ borderRadius:16,padding:"40px 24px",textAlign:"center",background:"linear-gradient(135deg,#e85d04,#c94b00)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:700,color:"#fff",margin:"0 0 10px" }}>
            Ready to Crack Your SSC Exam?
          </h3>
          <p style={{ color:"rgba(255,237,213,0.9)",fontSize:14,margin:"0 0 24px" }}>
            Join the Best SSC Coaching in Ludhiana — Vashishth IAS Academy
          </p>
          <div className="ssc-cta-btns" style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12 }}>
            <a href="#ssc-enquire" style={{ padding:"11px 32px",borderRadius:8,background:"#fff",color:"#e85d04",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>Enroll Now</a>
            <a href="tel:+919464031200" style={{ padding:"11px 32px",borderRadius:8,border:"1px solid rgba(255,255,255,0.5)",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>+91-94640-31200</a>
          </div>
        </div>

      </section>
    </div>
  );
}
