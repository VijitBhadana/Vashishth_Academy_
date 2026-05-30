const timelineData = [
  { year: "2007–08", title: "Syllabus Revamp", desc: "Major change in GS syllabus — made more comprehensive and complicated.", color: "#1a3a6b" },
  { year: "2009+", title: "Question Pattern Shift", desc: "Drastic change in the nature of questions. Conventional type questions ceased to occur.", color: "#e85d04" },
  { year: "2012–13", title: "Restructured Syllabus", desc: "Two papers of 600 marks replaced by four papers consisting of 1000 marks.", color: "#0d7490" },
  { year: "Present", title: "New Pattern", desc: "Only one optional subject of 500 marks and GS of 1000 marks. Reliance on optional subjects has lost meaning.", color: "#7c3aed" },
];

const keyInsights = [
  { icon: "📊", title: "1000 Marks", sub: "GS in new pattern", desc: "Four GS papers carrying 1000 marks — the most significant component of UPSC Mains." },
  { icon: "📖", title: "500 Marks", sub: "One optional subject", desc: "Reduced from 1200 marks (two optionals) to 500 marks. GS is now the deciding factor." },
  { icon: "⚠️", title: "100–250 Marks", sub: "Old GS scores", desc: "Students were scoring only 100–250 out of 600 in GS under old pattern — even top rankers." },
];

const importantTips = [
  {
    num: "01",
    title: "Prepare GS on a Long-Term Basis",
    desc: "Pay attention to General Studies on a long term basis because of the nature of the syllabus, trends of the questions and the significance of the subject.",
  },
  {
    num: "02",
    title: "Do NOT Separate GS (Mains) & GS (Prelims)",
    desc: "Please do not prepare GS (Main) and GS (Preliminary) separately or GS (Preliminary) first and then GS (Main). The syllabus has a vast overlap — many topics are same, linkages are very dominant.",
  },
  {
    num: "03",
    title: "Improve GS to Improve Rank",
    desc: "With GS carrying 1000 marks, the only choice is to improve GS and try to obtain higher level of marks. Greater reliance on GS in the new pattern is urgently needed.",
  },
  {
    num: "04",
    title: "Abandon Traditional Preparation Methods",
    desc: "Traditional teaching by most GS institutes has lost relevance since 2008–09 due to changes in syllabus and nature of questions. Adopt a modern, analytical approach.",
  },
];

export default function GeneralStudies() {
  return (
    <div style={{ fontFamily:"'Hind',sans-serif",background:"#f0f4f8",minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes gsFadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        .gs-fadeup{animation:gsFadeUp 0.65s ease forwards;}
        .gs-d1{animation-delay:.1s;opacity:0}.gs-d2{animation-delay:.25s;opacity:0}.gs-d3{animation-delay:.4s;opacity:0}.gs-d4{animation-delay:.55s;opacity:0}
        .gs-btn{transition:opacity .2s,transform .2s;}.gs-btn:hover{opacity:.88;transform:scale(1.03);}
        .gs-input:focus{outline:none;border-color:#e85d04 !important;}
        .gs-card{transition:transform .25s,box-shadow .25s;}
        .gs-card:hover{transform:translateY(-4px);box-shadow:0 14px 32px rgba(0,0,0,0.11) !important;}
        .gs-tip-card{transition:border-left .25s,transform .25s;border-left:3px solid transparent;}
        .gs-tip-card:hover{border-left:3px solid #e85d04 !important;transform:translateX(4px);}
        @media(max-width:900px){
          .gs-hero-grid{grid-template-columns:1fr !important;}
          .gs-content-grid{grid-template-columns:1fr !important;}
          .gs-insights-grid{grid-template-columns:1fr 1fr !important;}
          .gs-timeline{padding-left:16px !important;}
        }
        @media(max-width:600px){
          .gs-hero-h1{font-size:2rem !important;}
          .gs-hero-btns{flex-direction:column !important;}
          .gs-hero-btns a{width:100% !important;text-align:center;}
          .gs-insights-grid{grid-template-columns:1fr !important;}
          .gs-cta-btns{flex-direction:column !important;align-items:center;}
          .gs-unified-grid{grid-template-columns:1fr !important;}
          .gs-tips-grid{grid-template-columns:1fr !important;}
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section style={{ background:"linear-gradient(135deg,#0a1628 0%,#1a3a6b 55%,#0d2444 100%)",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:0,right:0,width:380,height:380,borderRadius:"50%",background:"radial-gradient(circle,rgba(232,93,4,0.13),transparent)",transform:"translate(30%,-30%)",pointerEvents:"none" }}/>
        <div style={{ position:"absolute",bottom:0,left:0,width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,167,38,0.1),transparent)",transform:"translate(-40%,40%)",pointerEvents:"none" }}/>

        <div style={{ position:"relative",zIndex:1,maxWidth:1152,margin:"0 auto",padding:"48px 20px 0" }}>
          {/* breadcrumb */}
          <div className="gs-fadeup" style={{ display:"flex",flexWrap:"wrap",gap:6,fontSize:13,color:"#93c5fd",marginBottom:28 }}>
            <a href="/" style={{ color:"#93c5fd",textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>How to Prepare</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>General Studies</span>
          </div>

          <div className="gs-hero-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center",paddingBottom:48 }}>
            {/* left */}
            <div>
              <span className="gs-fadeup gs-d1" style={{ display:"inline-block",padding:"4px 14px",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",borderRadius:999,background:"rgba(232,93,4,0.2)",color:"#f4a726",border:"1px solid rgba(232,93,4,0.4)",marginBottom:16 }}>
                How to Prepare
              </span>
              <h1 className="gs-fadeup gs-d2 gs-hero-h1" style={{ fontFamily:"'Playfair Display',Georgia,serif",fontSize:"3rem",fontWeight:900,color:"#fff",lineHeight:1.15,margin:"0 0 20px" }}>
                General<br/><span style={{ color:"#f4a726" }}>Studies</span>
              </h1>
              <p className="gs-fadeup gs-d3" style={{ color:"#bfdbfe",fontSize:16,lineHeight:1.75,margin:"0 0 28px" }}>
                Best Civil Services Coaching in Ludhiana. With GS now carrying 1000 marks in UPSC Mains, it has become the most critical component of your civil services preparation.
              </p>
              <div className="gs-fadeup gs-d4 gs-hero-btns" style={{ display:"flex",flexWrap:"wrap",gap:12 }}>
                <a href="#gs-enquire" className="gs-btn" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",boxShadow:"0 4px 18px rgba(232,93,4,0.45)" }}>Enquire Now</a>
                <a href="#gs-content" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,border:"1px solid #60a5fa",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none" }}>Know More</a>
              </div>
            </div>

            {/* stats card */}
            <div className="gs-fadeup gs-d3">
              <div style={{ borderRadius:16,padding:"28px 24px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)" }}>
                <p style={{ color:"#93c5fd",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:20 }}>GS At a Glance</p>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20 }}>
                  {[["1000","GS Marks"],["4","GS Papers"],["500","Optional Marks"]].map(([n,l])=>(
                    <div key={l} style={{ textAlign:"center" }}>
                      <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:900,color:"#f4a726",margin:0 }}>{n}</p>
                      <p style={{ fontSize:10,color:"#93c5fd",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4 }}>{l}</p>
                    </div>
                  ))}
                </div>
                <hr style={{ border:"none",borderTop:"1px solid rgba(255,255,255,0.1)",marginBottom:20 }}/>
                <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                  {["Long-term GS Preparation Strategy","Prelims + Mains Combined Approach","Analytical Thinking Development","Current Affairs Integration","Answer Writing Practice"].map(f=>(
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
      <section id="gs-content" style={{ maxWidth:1152,margin:"0 auto",padding:"48px 20px" }}>

        {/* About + Form */}
        <div className="gs-content-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr",gap:32,marginBottom:56 }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
              <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
              <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.7rem",fontWeight:700,color:"#0a1628",margin:0 }}>Relevance of General Studies</h2>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:14,color:"#374151",fontSize:15,lineHeight:1.8 }}>
              <p style={{ margin:0 }}>
                In the overall preparation, pay attention to General Studies on a <strong style={{ color:"#0a1628" }}>long term basis</strong> because of the nature of syllabus, trends of the questions and the significance of the subject.
              </p>
              <p style={{ margin:0 }}>
                General Studies have emerged as a challenge in recent years. There was a change in GS syllabus in <strong style={{ color:"#0a1628" }}>2007–08</strong> which made it more comprehensive and complicated. Then from <strong style={{ color:"#0a1628" }}>2009 onwards</strong>, there has been a drastic change in the nature of the questions. The conventional types of questions have ceased to occur in the examination.
              </p>
              <p style={{ margin:0 }}>
                Finally in <strong style={{ color:"#0a1628" }}>2012–13</strong>, the syllabus was restructured. Two papers consisting of 600 marks were substituted by <strong style={{ color:"#0a1628" }}>four papers consisting of 1000 marks</strong>.
              </p>
              <p style={{ margin:0 }}>
                Because of changes in the syllabus and nature of questions, traditional teaching by most GS institutes has <strong style={{ color:"#0a1628" }}>lost relevance since 2008–09</strong>. Students began to get only 100–250 marks out of 600 (including top rankers). Most began to qualify on the basis of higher marks in two optional subjects of 1200 marks.
              </p>
              <p style={{ margin:0 }}>
                But now, there is only <strong style={{ color:"#0a1628" }}>one optional subject of 500 marks and GS of 1000 marks</strong>. Reliance on optional subjects as in the previous pattern has lost meaning. The only choice is to improve GS and try to obtain higher level of marks out of 1000 marks.
              </p>
            </div>

            {/* alert box */}
            <div style={{ marginTop:20,background:"rgba(232,93,4,0.06)",border:"1px solid rgba(232,93,4,0.25)",borderRadius:10,padding:"14px 18px" }}>
              <p style={{ fontSize:14,color:"#374151",lineHeight:1.75,margin:0 }}>
                <strong style={{ color:"#e85d04" }}>⚠️ Important:</strong> So, now there is an <strong style={{ color:"#0a1628" }}>urgent need</strong> to consider greater reliance on GS in the new pattern.
              </p>
            </div>
          </div>

          {/* Enquiry form */}
          <div id="gs-enquire">
            <div style={{ borderRadius:16,overflow:"hidden",boxShadow:"0 8px 28px rgba(0,0,0,0.10)" }}>
              <div style={{ padding:"18px 20px",background:"linear-gradient(135deg,#0a1628,#1a3a6b)" }}>
                <div style={{ color:"#fbbf24",fontSize:16,marginBottom:6 }}>★★★★★</div>
                <p style={{ fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:"#fff",margin:0 }}>Best Civil Services Coaching in Ludhiana</p>
              </div>
              <div style={{ padding:20,background:"#fff",display:"flex",flexDirection:"column",gap:10 }}>
                <p style={{ fontSize:13,fontWeight:700,color:"#0a1628",margin:0 }}>Get Free Counselling</p>
                {["Your Full Name *","Phone Number *","Email Address *"].map(ph=>(
                  <input key={ph} className="gs-input" placeholder={ph} style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#111",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}/>
                ))}
                <select className="gs-input" style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#6b7280",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}>
                  <option value="">Select Course *</option>
                  <option>IAS / UPSC CSE</option><option>PPSC / PCS</option><option>NDA</option><option>CDS</option><option>SSC</option>
                </select>
                <button className="gs-btn" style={{ width:"100%",padding:"10px 0",borderRadius:8,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,border:"none",cursor:"pointer",fontFamily:"'Hind',sans-serif" }}>
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div style={{ marginBottom:56 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24 }}>
            <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>Key Insights — Then vs Now</h2>
          </div>
          <div className="gs-insights-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
            {keyInsights.map((k,i)=>(
              <div key={i} className="gs-card" style={{ background:"#fff",borderRadius:12,padding:"22px 20px",boxShadow:"0 2px 10px rgba(0,0,0,0.07)",border:"1px solid #e8eef7" }}>
                <span style={{ fontSize:"2rem",display:"block",marginBottom:10 }}>{k.icon}</span>
                <p style={{ fontFamily:"'Playfair Display',serif",fontWeight:900,fontSize:"1.8rem",color:"#1a3a6b",margin:"0 0 2px" }}>{k.title}</p>
                <p style={{ fontSize:11,fontWeight:700,color:"#e85d04",textTransform:"uppercase",letterSpacing:"0.06em",margin:"0 0 10px" }}>{k.sub}</p>
                <p style={{ fontSize:13,color:"#6b7280",lineHeight:1.7,margin:0 }}>{k.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution Timeline */}
        <div style={{ marginBottom:56 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24 }}>
            <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>Evolution of GS in UPSC</h2>
          </div>
          <div style={{ background:"#fff",borderRadius:14,padding:"28px 28px",boxShadow:"0 2px 12px rgba(0,0,0,0.07)" }}>
            <div className="gs-timeline" style={{ position:"relative",paddingLeft:32 }}>
              {/* vertical line */}
              <div style={{ position:"absolute",left:10,top:0,bottom:0,width:2,background:"linear-gradient(to bottom,#1a3a6b,#e85d04)",borderRadius:2 }}/>
              <div style={{ display:"flex",flexDirection:"column",gap:32 }}>
                {timelineData.map((t,i)=>(
                  <div key={i} style={{ position:"relative" }}>
                    {/* dot */}
                    <div style={{ position:"absolute",left:-28,top:4,width:14,height:14,borderRadius:"50%",background:t.color,border:"2px solid #fff",boxShadow:`0 0 0 2px ${t.color}` }}/>
                    <div style={{ display:"flex",flexWrap:"wrap",alignItems:"baseline",gap:10,marginBottom:6 }}>
                      <span style={{ display:"inline-block",padding:"2px 10px",borderRadius:999,background:t.color,color:"#fff",fontSize:11,fontWeight:700 }}>{t.year}</span>
                      <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1rem",fontWeight:700,color:"#0a1628",margin:0 }}>{t.title}</h3>
                    </div>
                    <p style={{ fontSize:14,color:"#6b7280",lineHeight:1.7,margin:0 }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Important Tips */}
        <div style={{ marginBottom:56 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24 }}>
            <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>Important Tips for GS Preparation</h2>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:14 }}>
            {importantTips.map(tip=>(
              <div key={tip.num} className="gs-tip-card" style={{ display:"flex",gap:18,padding:"20px 22px",background:"#fff",borderRadius:12,boxShadow:"0 2px 10px rgba(0,0,0,0.07)",borderLeft:"3px solid transparent",alignItems:"flex-start" }}>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"2rem",fontWeight:900,color:"rgba(232,93,4,0.22)",flexShrink:0,lineHeight:1,minWidth:44 }}>{tip.num}</div>
                <div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.05rem",fontWeight:700,color:"#0a1628",margin:"0 0 6px" }}>{tip.title}</h3>
                  <p style={{ fontSize:14,color:"#374151",lineHeight:1.75,margin:0 }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prelims + Mains unified note */}
        <div style={{ marginBottom:56 }}>
          <div style={{ borderRadius:16,background:"linear-gradient(135deg,#0a1628 0%,#1a3a6b 100%)",padding:"36px 32px" }}>
            <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:16 }}>
              <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
              <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",fontWeight:700,color:"#fff",margin:0 }}>Unified Preparation: Prelims + Mains</h2>
            </div>
            <p style={{ color:"#bfdbfe",fontSize:15,lineHeight:1.8,margin:"0 0 20px" }}>
              Please do <strong style={{ color:"#f4a726" }}>NOT</strong> prepare GS (Main) and GS (Preliminary) separately, or GS (Preliminary) first and then GS (Main).
            </p>
            <div className="gs-unified-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
              {[
                { title:"Vast Overlap in Syllabus", desc:"The syllabus of GS (Main) and GS (Preliminary) has a vast overlap — many topics are same across both." },
                { title:"Dominant Linkages", desc:"Linkages between Prelims and Mains GS are very dominant. Integrated preparation maximises efficiency." },
              ].map((c,i)=>(
                <div key={i} style={{ background:"rgba(255,255,255,0.07)",borderRadius:12,padding:"18px 20px",border:"1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontSize:14,fontWeight:700,color:"#f4a726",margin:"0 0 8px" }}>{c.title}</h3>
                  <p style={{ fontSize:13,color:"#bfdbfe",lineHeight:1.7,margin:0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ borderRadius:16,padding:"40px 24px",textAlign:"center",background:"linear-gradient(135deg,#e85d04,#c94b00)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:700,color:"#fff",margin:"0 0 10px" }}>
            Master General Studies with Expert Guidance
          </h3>
          <p style={{ color:"rgba(255,237,213,0.9)",fontSize:14,margin:"0 0 24px" }}>
            Join the Best Civil Services Coaching in Ludhiana — Vashishth IAS Academy
          </p>
          <div className="gs-cta-btns" style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12 }}>
            <a href="#gs-enquire" style={{ padding:"11px 32px",borderRadius:8,background:"#fff",color:"#e85d04",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>Enroll Now</a>
            <a href="tel:+919464031200" style={{ padding:"11px 32px",borderRadius:8,border:"1px solid rgba(255,255,255,0.5)",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>+91-94640-31200</a>
          </div>
        </div>

      </section>
    </div>
  );
}
