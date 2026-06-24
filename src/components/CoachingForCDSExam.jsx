import { useParallax, useReveal } from "../utils/animations";

const academyEligibility = [
  { academy:"IMA (Indian Military Academy)", age:"19–24 years", gender:"Male", marital:"Unmarried" },
  { academy:"INA (Indian Naval Academy)", age:"19–24 years", gender:"Male", marital:"Unmarried" },
  { academy:"AFA (Air Force Academy)", age:"20–24 years (up to 26 years for candidates with valid CPL license)", gender:"Male", marital:"Unmarried" },
  { academy:"OTA (Officers' Training Academy – Men)", age:"19–25 years", gender:"Male", marital:"Unmarried" },
  { academy:"OTA (Officers' Training Academy – Women)", age:"19–25 years", gender:"Female", marital:"Unmarried / Widow / Divorcee (without remarriage)" },
];

const academyQualification = [
  { academy:"IMA", qualification:"Graduation from a recognized university" },
  { academy:"INA", qualification:"Degree in Engineering" },
  { academy:"AFA", qualification:"Degree with Physics and Mathematics at 10+2 level OR a Bachelor of Engineering" },
  { academy:"OTA", qualification:"Graduation from a recognized university" },
];

const nationalityPoints = [
  "A citizen of India, or",
  "A subject of Nepal or Bhutan, or",
  "A Tibetan refugee who came to India before 1st January 1962 with the intention to permanently settle in India, or",
  "A person of Indian origin who has migrated from Pakistan, Burma, Sri Lanka, and East African countries (like Kenya, Uganda, Tanzania, Zambia, etc.) intending to settle permanently in India.",
];

const physicalPoints = [
  "Candidate must be physically fit according to the physical standards of the respective academy.",
  "Height: Minimum 157.5 cm for men (AFA: 162.5 cm); Minimum 152 cm for women (OTA).",
  "Vision, hearing, and overall fitness are thoroughly tested.",
  "Permanent tattoos are allowed only on the inner forearm (specific rules apply).",
];

const TH = { background:"#1a3a6b",color:"#fff",padding:"10px 14px",textAlign:"left",fontSize:13,fontWeight:700,fontFamily:"'Hind',sans-serif" };
const TD = { padding:"10px 14px",fontSize:13,color:"#2c3e50",borderBottom:"1px solid #e8eef7",verticalAlign:"top",lineHeight:1.7,fontFamily:"'Hind',sans-serif" };
const TDeven = { ...TD, background:"#f5f8fd" };

export default function CoachingForCDSExam() {
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);
  const { ref: heroTextRef, visible: heroTextVisible } = useReveal(0.3);
  return (
    <div style={{ fontFamily:"'Hind',sans-serif",background:"#f0f4f8",minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes cdsFadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        .cds-fadeup{animation:cdsFadeUp 0.65s ease forwards;}
        .cds-d1{animation-delay:.1s;opacity:0}.cds-d2{animation-delay:.25s;opacity:0}.cds-d3{animation-delay:.4s;opacity:0}.cds-d4{animation-delay:.55s;opacity:0}
        .cds-btn{transition:opacity .2s,transform .2s;}.cds-btn:hover{opacity:.88;transform:scale(1.03);}
        .cds-input:focus{outline:none;border-color:#e85d04 !important;}
        .cds-tr:hover td{background:#eef3fc !important;}
        .cds-card{transition:transform .25s,box-shadow .25s;}.cds-card:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(0,0,0,0.1) !important;}
        @media(max-width:900px){
          .cds-hero-grid{grid-template-columns:1fr !important;}
          .cds-content-grid{grid-template-columns:1fr !important;}
          .cds-academies-grid{grid-template-columns:1fr 1fr !important;}
        }
        @media(max-width:600px){
          .cds-hero-h1{font-size:2rem !important;}
          .cds-hero-btns{flex-direction:column !important;}
          .cds-hero-btns a{width:100% !important;text-align:center;}
          .cds-academies-grid{grid-template-columns:1fr !important;}
          .cds-cta-btns{flex-direction:column !important;align-items:center;}
          .cds-table-wrap{overflow-x:auto;}
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section ref={heroRef} style={{ background:"linear-gradient(135deg,#0a1628 0%,#1a3a6b 55%,#0d2444 100%)",position:"relative",overflow:"hidden" }}>
        <div className="va-blob" style={{ position:"absolute",top:0,right:0,width:380,height:380,borderRadius:"50%",background:"radial-gradient(circle,rgba(232,93,4,0.13),transparent)",transform:`translate(30%,-30%) translateY(${heroOffset}px)`,pointerEvents:"none" }}/>
        <div className="va-blob" style={{ position:"absolute",bottom:0,left:0,width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,167,38,0.1),transparent)",transform:`translate(-40%,40%) translateY(${heroOffset*0.5}px)`,pointerEvents:"none" }}/>

        <div style={{ position:"relative",zIndex:1,maxWidth:1152,margin:"0 auto",padding:"48px 20px 0" }}>
          {/* breadcrumb */}
          <div className="cds-fadeup" style={{ display:"flex",flexWrap:"wrap",gap:6,fontSize:13,color:"#93c5fd",marginBottom:28 }}>
            <a href="/" style={{ color:"#93c5fd",textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>Our Courses</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>Coaching for CDS Exam</span>
          </div>

          <div className="cds-hero-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center",paddingBottom:48 }}>
            {/* left */}
            <div ref={heroTextRef}>
              <span style={{ display:"inline-block",padding:"4px 14px",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",borderRadius:999,background:"rgba(232,93,4,0.2)",color:"#f4a726",border:"1px solid rgba(232,93,4,0.4)",marginBottom:16,
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(16px)",transition:"opacity 0.6s ease 60ms,transform 0.6s ease 60ms" }}>
                Defence Coaching — CDS
              </span>
              <h1 className="cds-hero-h1" style={{ fontFamily:"'Playfair Display',Georgia,serif",fontSize:"3rem",fontWeight:900,color:"#fff",lineHeight:1.15,margin:"0 0 20px",
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(32px)",filter:heroTextVisible?"blur(0)":"blur(6px)",
                transition:"opacity 0.9s cubic-bezier(.22,.61,.36,1) 150ms,transform 0.9s cubic-bezier(.22,.61,.36,1) 150ms,filter 0.9s ease 150ms" }}>
                Coaching for<br/><span style={{ color:"#f4a726" }}>CDS Exam</span>
              </h1>
              <p style={{ color:"#bfdbfe",fontSize:16,lineHeight:1.75,margin:"0 0 28px",
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(16px)",transition:"opacity 0.7s ease 320ms,transform 0.7s ease 320ms" }}>
                Combined Defence Services (CDS) — the gateway to IMA, INA, AFA and OTA. Begin your journey to a prestigious career with the Indian Armed Forces with expert coaching at Vashishth IAS Academy, Ludhiana.
              </p>
              <div className="cds-hero-btns" style={{ display:"flex",flexWrap:"wrap",gap:12,
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(14px)",transition:"opacity 0.7s ease 450ms,transform 0.7s ease 450ms" }}>
                <a href="#cds-enquire" className="cds-btn" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",boxShadow:"0 4px 18px rgba(232,93,4,0.45)" }}>Enquire Now</a>
                <a href="#cds-content" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,border:"1px solid #60a5fa",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none" }}>Know More</a>
              </div>
            </div>

            {/* hero image + stats card */}
            <div className="cds-fadeup cds-d3" style={{ display:"flex",flexDirection:"column",gap:20 }}>
              <div style={{ borderRadius:16,overflow:"hidden",boxShadow:"0 8px 32px rgba(0,0,0,0.35)",border:"1px solid rgba(255,255,255,0.12)" }}>
                <img
                  src="/assets/cds-image 2.png"
                  alt="CDS Coaching at Vashishth Academy"
                  style={{ width:"100%",display:"block",objectFit:"cover" }}
                />
              </div>
              <div style={{ borderRadius:16,padding:"28px 24px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)" }}>
                <p style={{ color:"#93c5fd",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:20 }}>CDS At a Glance</p>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20 }}>
                  {[["2x/Year","Exam"],["4","Academies"],["UPSC","Conducted By"]].map(([n,l])=>(
                    <div key={l} style={{ textAlign:"center" }}>
                      <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",fontWeight:900,color:"#f4a726",margin:0 }}>{n}</p>
                      <p style={{ fontSize:10,color:"#93c5fd",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4 }}>{l}</p>
                    </div>
                  ))}
                </div>
                <hr style={{ border:"none",borderTop:"1px solid rgba(255,255,255,0.1)",marginBottom:20 }}/>
                <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                  {["IMA, INA, AFA & OTA Coaching","Expert Defence Faculty","SSB Interview Training","Written Exam Preparation"].map(f=>(
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
      <section id="cds-content" style={{ maxWidth:1152,margin:"0 auto",padding:"48px 20px" }}>

        {/* Intro + Form */}
        <div className="cds-content-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr",gap:32,marginBottom:56 }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
              <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
              <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.7rem",fontWeight:700,color:"#0a1628",margin:0 }}>CDS Eligibility Criteria (As per UPSC)</h2>
            </div>
            <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 20px" }}>
              The Combined Defence Services (CDS) examination is conducted by the <strong style={{ color:"#0a1628" }}>Union Public Service Commission (UPSC)</strong> twice a year. It is the gateway to join the Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA), and Officers' Training Academy (OTA).
            </p>
            {/* Academy cards */}
            <div className="cds-academies-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10 }}>
              {[
                { short:"IMA", full:"Indian Military Academy", loc:"Dehradun", color:"#1a3a6b" },
                { short:"INA", full:"Indian Naval Academy", loc:"Ezhimala, Kerala", color:"#0d7490" },
                { short:"AFA", full:"Air Force Academy", loc:"Dundigal, Hyderabad", color:"#1d4ed8" },
                { short:"OTA", full:"Officers' Training Academy", loc:"Chennai", color:"#e85d04" },
              ].map(c=>(
                <div key={c.short} className="cds-card" style={{ borderRadius:10,overflow:"hidden",boxShadow:"0 2px 10px rgba(0,0,0,0.08)" }}>
                  <div style={{ background:c.color,padding:"10px 12px",textAlign:"center" }}>
                    <p style={{ color:"#fff",fontFamily:"'Playfair Display',serif",fontWeight:900,fontSize:"1.2rem",margin:0 }}>{c.short}</p>
                  </div>
                  <div style={{ background:"#fff",padding:"10px 12px",textAlign:"center" }}>
                    <p style={{ fontSize:11,fontWeight:600,color:"#0a1628",margin:"0 0 3px",lineHeight:1.4 }}>{c.full}</p>
                    <p style={{ fontSize:10,color:"#6b7280",margin:0 }}>{c.loc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry form */}
          <div id="cds-enquire">
            <div style={{ borderRadius:16,overflow:"hidden",boxShadow:"0 8px 28px rgba(0,0,0,0.10)" }}>
              <div style={{ padding:"18px 20px",background:"linear-gradient(135deg,#0a1628,#1a3a6b)" }}>
                <div style={{ color:"#fbbf24",fontSize:16,marginBottom:6 }}>★★★★★</div>
                <p style={{ fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:"#fff",margin:0 }}>India's Most Trusted CDS Coaching</p>
              </div>
              <div style={{ padding:20,background:"#fff",display:"flex",flexDirection:"column",gap:10 }}>
                <p style={{ fontSize:13,fontWeight:700,color:"#0a1628",margin:0 }}>Get Free Counselling</p>
                {["Your Full Name *","Phone Number *","Email Address *"].map(ph=>(
                  <input key={ph} className="cds-input" placeholder={ph} style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#111",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}/>
                ))}
                <select className="cds-input" style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#6b7280",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}>
                  <option value="">Select Course *</option>
                  <option>CDS</option><option>NDA</option><option>IAS / UPSC CSE</option><option>PPSC / PCS</option><option>SSC</option>
                </select>
                <button className="cds-btn" style={{ width:"100%",padding:"10px 0",borderRadius:8,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,border:"none",cursor:"pointer",fontFamily:"'Hind',sans-serif" }}>
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CDS Showcase Image */}
        <div style={{ marginBottom:56,borderRadius:20,overflow:"hidden",boxShadow:"0 12px 40px rgba(10,22,40,0.18)",position:"relative" }}>
          <img
            src="/assets/cds-image 1.png"
            alt="Combined Defence Services Coaching"
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
                Crack CDS &amp; Serve<br/>the Nation with Pride
              </h2>
              <a href="#cds-enquire" style={{
                display:"inline-block",padding:"10px 24px",borderRadius:8,
                background:"#e85d04",color:"#fff",fontWeight:700,
                fontSize:13,textDecoration:"none",
                boxShadow:"0 4px 14px rgba(232,93,4,0.45)",
              }}>Enquire Now</a>
            </div>
          </div>
        </div>

        {/* 1. Nationality */}
        <Block title="1. Nationality">
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 16px" }}>A candidate must be one of the following:</p>
          <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
            {nationalityPoints.map((pt,i)=>(
              <div key={i} style={{ display:"flex",gap:12,alignItems:"flex-start",background:"#f5f8fd",borderRadius:8,padding:"12px 16px",border:"1px solid #dde8f8" }}>
                <div style={{ width:24,height:24,borderRadius:"50%",background:"#1a3a6b",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1 }}>
                  <span style={{ color:"#f4a726",fontSize:10,fontWeight:700 }}>{i+1}</span>
                </div>
                <p style={{ fontSize:14,color:"#374151",lineHeight:1.7,margin:0 }}>{pt}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* 2. Age Limit */}
        <Block title="2. Age Limit, Sex & Marital Status">
          <div className="cds-table-wrap">
            <table style={{ width:"100%",borderCollapse:"collapse" }}>
              <thead>
                <tr>
                  <th style={TH}>Academy</th>
                  <th style={{ ...TH,textAlign:"center" }}>Age Limit</th>
                  <th style={{ ...TH,textAlign:"center" }}>Gender</th>
                  <th style={TH}>Marital Status</th>
                </tr>
              </thead>
              <tbody>
                {academyEligibility.map((r,i)=>(
                  <tr key={i} className="cds-tr">
                    <td style={{ ...(i%2===0?TD:TDeven) }}><strong style={{ color:"#1a3a6b" }}>{r.academy}</strong></td>
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center" }}>{r.age}</td>
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center" }}>
                      <span style={{ display:"inline-block",padding:"2px 10px",borderRadius:999,fontSize:11,fontWeight:700,background:r.gender==="Male"?"rgba(26,58,107,0.1)":"rgba(232,93,4,0.1)",color:r.gender==="Male"?"#1a3a6b":"#e85d04" }}>
                        {r.gender}
                      </span>
                    </td>
                    <td style={i%2===0?TD:TDeven}>{r.marital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        {/* 3. Educational Qualification */}
        <Block title="3. Educational Qualification">
          <div className="cds-table-wrap" style={{ marginBottom:16 }}>
            <table style={{ width:"100%",borderCollapse:"collapse" }}>
              <thead>
                <tr>
                  <th style={{ ...TH,width:120 }}>Academy</th>
                  <th style={TH}>Required Qualification</th>
                </tr>
              </thead>
              <tbody>
                {academyQualification.map((r,i)=>(
                  <tr key={i} className="cds-tr">
                    <td style={{ ...(i%2===0?TD:TDeven) }}>
                      <span style={{ display:"inline-block",padding:"3px 12px",borderRadius:6,background:"#1a3a6b",color:"#fff",fontWeight:700,fontSize:12 }}>{r.academy}</span>
                    </td>
                    <td style={i%2===0?TD:TDeven}>{r.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Note box */}
          <div style={{ background:"#fff8e1",borderLeft:"4px solid #f4a726",borderRadius:"0 8px 8px 0",padding:"12px 16px" }}>
            <p style={{ fontSize:13,color:"#555",margin:0,lineHeight:1.7 }}>
              <strong>Note:</strong> Final year candidates can apply, but they must submit proof of passing the exam at the time of SSB.
            </p>
          </div>
        </Block>

        {/* 4. Physical Standards */}
        <Block title="4. Physical Standards">
          <div style={{ display:"flex",flexDirection:"column",gap:12,marginBottom:20 }}>
            {physicalPoints.map((pt,i)=>(
              <div key={i} style={{ display:"flex",gap:12,alignItems:"flex-start" }}>
                <div style={{ width:28,height:28,borderRadius:8,background:"linear-gradient(135deg,#e85d04,#c94b00)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p style={{ fontSize:14,color:"#374151",lineHeight:1.75,margin:0 }}>{pt}</p>
              </div>
            ))}
          </div>

          {/* Height reference table */}
          <div className="cds-table-wrap">
            <table style={{ width:"60%",minWidth:300,borderCollapse:"collapse" }}>
              <thead>
                <tr>
                  <th style={TH}>Category</th>
                  <th style={{ ...TH,textAlign:"center" }}>Minimum Height</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Men (General — IMA, INA, OTA)","157.5 cm"],
                  ["Men (AFA — Air Force Academy)","162.5 cm"],
                  ["Women (OTA)","152 cm"],
                ].map(([cat,ht],i)=>(
                  <tr key={i} className="cds-tr">
                    <td style={i%2===0?TD:TDeven}>{cat}</td>
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center",fontWeight:700,color:"#1a3a6b" }}>{ht}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        {/* Quick Summary */}
        <div style={{ marginBottom:48 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
            <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>Why Choose Vashishth for CDS Coaching?</h2>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
            {[
              { icon:"🎯", title:"Targeted Preparation", desc:"Subject-wise comprehensive coverage for CDS written exam — Maths, English, and General Knowledge." },
              { icon:"🪖", title:"SSB Interview Training", desc:"Dedicated SSB preparation including GTO tasks, psychological tests, and personality development." },
              { icon:"📚", title:"Study Material", desc:"Updated study materials, previous year papers, and regular mock tests aligned with UPSC pattern." },
              { icon:"👨‍🏫", title:"Expert Faculty", desc:"Experienced defence coaching faculty with proven track record of selections in IMA, INA, AFA & OTA." },
              { icon:"📊", title:"Performance Tracking", desc:"Regular assessments and personalized feedback to track your progress and improve weak areas." },
              { icon:"🏅", title:"Proven Results", desc:"Hundreds of successful CDS selections from Vashishth IAS Academy, Ludhiana over the years." },
            ].map((c,i)=>(
              <div key={i} className="cds-card" style={{ background:"#fff",borderRadius:12,padding:"20px 18px",boxShadow:"0 2px 10px rgba(0,0,0,0.07)",border:"1px solid #e8eef7" }}>
                <span style={{ fontSize:"1.8rem",display:"block",marginBottom:10 }}>{c.icon}</span>
                <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,color:"#0a1628",margin:"0 0 6px" }}>{c.title}</h3>
                <p style={{ fontSize:13,color:"#6b7280",lineHeight:1.7,margin:0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ borderRadius:16,padding:"40px 24px",textAlign:"center",background:"linear-gradient(135deg,#e85d04,#c94b00)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:700,color:"#fff",margin:"0 0 10px" }}>
            Ready to Begin Your CDS Journey?
          </h3>
          <p style={{ color:"rgba(255,237,213,0.9)",fontSize:14,margin:"0 0 24px" }}>
            Join thousands of successful defence candidates at Vashishth IAS Academy, Ludhiana
          </p>
          <div className="cds-cta-btns" style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12 }}>
            <a href="#cds-enquire" style={{ padding:"11px 32px",borderRadius:8,background:"#fff",color:"#e85d04",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>Enroll Now</a>
            <a href="tel:+919464031200" style={{ padding:"11px 32px",borderRadius:8,border:"1px solid rgba(255,255,255,0.5)",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>+91-94640-31200</a>
          </div>
        </div>

      </section>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <div style={{ marginBottom:48 }}>
      <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
        <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
        <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>{title}</h2>
      </div>
      <div style={{ background:"#fff",borderRadius:14,padding:"24px 22px",boxShadow:"0 2px 12px rgba(0,0,0,0.07)" }}>
        {children}
      </div>
    </div>
  );
}
