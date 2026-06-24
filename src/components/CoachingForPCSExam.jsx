import { useState } from "react";
import { useParallax, useReveal } from "../utils/animations";

const keyHighlights = [
  { feature: "Organization", details: "Punjab Public Service Commission" },
  { feature: "Post Name", details: "• Punjab Civil Service (Executive Branch)\n• Deputy Superintendent of Police\n• PPSC Naib Tehsildar\n• Excise & Taxation Officer (ETO)\n• Food and Civil Supply Officer\n• Block Development and Panchayat Officer\n• Assistant Registrar Co-Operative Societies\n• Labour-cum-Conciliation Officer\n• Employment Generation, Skill Development & Training Officer\n• Deputy Superintendent Jails Grade -2 / District Probation Officer" },
  { feature: "Vacancy", details: "322" },
  { feature: "Exam Date", details: "• Preliminary Exam Date: April 2026 (Tentative)\n• Main Exam Date: To be Announced" },
  { feature: "Application Mode", details: "Online" },
  { feature: "Exam Mode", details: "Offline" },
  { feature: "Recruitment Process", details: "• Preliminary Exam\n• Main Exam\n• Interview" },
  { feature: "Education Qualification", details: "• Bachelor's degree from a recognized university.\n• Additional qualifications may be required for specific posts." },
  { feature: "Age Limit", details: "21 to 37 years (General Category).\nAge relaxations as per government norms." },
  { feature: "Salary", details: "₹15,000 – ₹39,000" },
  { feature: "Official Website", details: "ppsc.gov.in", isLink: true },
];

const examDates = [
  { event: "PPSC Application Start Date", date: "January 3, 2026" },
  { event: "PPSC Application End Date", date: "January 31, 2026" },
  { event: "Application Fee Last Date", date: "January 31, 2026" },
  { event: "Admit Card Release", date: "To be announced" },
  { event: "Preliminary Exam Date", date: "April 2026 (Tentative)" },
  { event: "Preliminary Exam Results", date: "To be announced" },
  { event: "Main Exam Date", date: "September-October 2026" },
  { event: "Main Exam Results", date: "To be announced" },
  { event: "Interview Date", date: "To be announced" },
  { event: "Final Merit List", date: "After the interview process" },
];

const vacancies = [
  { sr: "1", post: "Punjab Civil Service (Executive Branch)", posts: "46" },
  { sr: "2", post: "Deputy Superintendent of Police", posts: "17" },
  { sr: "3", post: "Tehsildar", posts: "27" },
  { sr: "4", post: "Excise & Taxation Officer (ETO)", posts: "121" },
  { sr: "5", post: "Food and Civil Supply Officer", posts: "13" },
  { sr: "6", post: "Block Development and Panchayat Officer", posts: "49" },
  { sr: "7", post: "Assistant Registrar Co-Operative Societies", posts: "21" },
  { sr: "8", post: "Labour-cum-Conciliation Officer", posts: "03" },
  { sr: "9", post: "Employment Generation, Skill Development & Training Officer", posts: "12" },
  { sr: "10", post: "Deputy Superintendent Jails Grade -2 / District Probation Officer", posts: "13" },
  { sr: "–", post: "Total", posts: "322", isBold: true },
];

const ageRelaxation = [
  { category: "Scheduled Castes and Backward Classes (except Punjab Police Service and Punjab Prisons Service)", age: "Up to 42 years" },
  { category: "Government employees (except Punjab Police Service)", age: "Up to 45 years" },
  { category: "Widows, Divorced women, and certain other categories (except Punjab Police Service)", age: "Up to 42 years" },
  { category: "Physically handicapped candidates (except Punjab Police Service)", age: "Up to 47 years" },
  { category: "Deputy Superintendent Police and Deputy Superintendent Jails. With some relaxation for Scheduled Castes and Backward Classes", age: "21-28 years" },
];

const physicalStandards = [
  { position: "Deputy Superintendent of Police", heightMale: "Minimum: 5'7\" (170.18 cm)", heightFemale: "Minimum: 5'3\" (160.02 cm)", chest: "Unexpanded: 33\" (83.82 cm)\nExpanded: 34.5\" (87.63 cm)", vision: "Distant: 6/6 in one eye, 6/9 in the other\nNear: J1 in one eye, J2 in the other" },
  { position: "Deputy Superintendent Jails/District Probation Officer", heightMale: "Minimum: 5'6\" (167.64 cm)", heightFemale: "Minimum: 5'2\" (157.48 cm)", chest: "Unexpanded: 32\" (81.28 cm)\nExpanded: 33.5\" (85.09 cm)", vision: "Distant: 6/6 in one eye, 6/9 in the other\nNear: J1 in one eye, J2 in the other" },
  { position: "Sub-divisional Engineer", heightMale: "Minimum: 5'4\" (162.56 cm)", heightFemale: "Minimum: 5' (152.4 cm)", chest: "Unexpanded: 31\" (78.74 cm)\nExpanded: 32.5\" (82.55 cm)", vision: "Distant: 6/6 in one eye, 6/9 in the other\nNear: J1 in one eye, J2 in the other" },
];

const attempts = [
  { sr: "1", category: "General Category", max: "6" },
  { sr: "2", category: "Backward Classes Nine", max: "9" },
  { sr: "3", category: "Scheduled Castes", max: "Unlimited" },
];

const exServicemenAttempts = [
  { sr: "1", category: "General Ex-servicemen", max: "6" },
  { sr: "2", category: "Backward classes Ex-servicemen", max: "9" },
  { sr: "3", category: "Scheduled Castes Ex-servicemen", max: "Unlimited" },
];

// ── reusable table styles ──
const TH = { background: "#1a3a6b", color: "#fff", padding: "10px 14px", textAlign: "left", fontSize: 13, fontWeight: 700, fontFamily: "'Hind',sans-serif" };
const TD = { padding: "9px 14px", fontSize: 13, color: "#2c3e50", borderBottom: "1px solid #e8eef7", verticalAlign: "top", lineHeight: 1.6, fontFamily: "'Hind',sans-serif" };
const TDeven = { ...TD, background: "#f5f8fd" };

export default function CoachingForPCSExam() {
  const [openSection, setOpenSection] = useState(null);
  const toggle = (id) => setOpenSection(openSection === id ? null : id);
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);
  const { ref: heroTextRef, visible: heroTextVisible } = useReveal(0.3);

  return (
    <div style={{ fontFamily: "'Hind',sans-serif", background: "#f0f4f8", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes pcsFadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .pcs-fadeup { animation: pcsFadeUp 0.65s ease forwards; }
        .pcs-d1{animation-delay:.1s;opacity:0} .pcs-d2{animation-delay:.25s;opacity:0} .pcs-d3{animation-delay:.4s;opacity:0} .pcs-d4{animation-delay:.55s;opacity:0}
        .pcs-btn-orange { transition: opacity .2s, transform .2s; }
        .pcs-btn-orange:hover { opacity:.88; transform:scale(1.03); }
        .pcs-input:focus { outline:none; border-color:#e85d04 !important; }
        .pcs-acc-btn:hover { background: #f0f4f9 !important; }
        .pcs-table-row-hover:hover td { background:#eef3fc !important; }
        @media(max-width:900px){
          .pcs-hero-grid{grid-template-columns:1fr !important;}
          .pcs-content-grid{grid-template-columns:1fr !important;}
        }
        @media(max-width:600px){
          .pcs-hero-h1{font-size:2rem !important;}
          .pcs-hero-btns{flex-direction:column !important;}
          .pcs-hero-btns a{width:100% !important;text-align:center;}
          .pcs-stats-grid{grid-template-columns:repeat(3,1fr) !important;}
          .pcs-cta-btns{flex-direction:column !important;align-items:center;}
          .pcs-table-wrap{overflow-x:auto;}
        }
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <section ref={heroRef} style={{ background: "linear-gradient(135deg,#0a1628 0%,#1a3a6b 55%,#0d2444 100%)", position: "relative", overflow: "hidden" }}>
        <div className="va-blob" style={{ position:"absolute",top:0,right:0,width:380,height:380,borderRadius:"50%",background:"radial-gradient(circle,rgba(232,93,4,0.13),transparent)",transform:`translate(30%,-30%) translateY(${heroOffset}px)`,pointerEvents:"none" }}/>
        <div className="va-blob" style={{ position:"absolute",bottom:0,left:0,width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,167,38,0.1),transparent)",transform:`translate(-40%,40%) translateY(${heroOffset * 0.5}px)`,pointerEvents:"none" }}/>

        <div style={{ position:"relative",zIndex:1,maxWidth:1152,margin:"0 auto",padding:"48px 20px 0" }}>
          {/* breadcrumb */}
          <div className="pcs-fadeup" style={{ display:"flex",flexWrap:"wrap",gap:6,fontSize:13,color:"#93c5fd",marginBottom:28 }}>
            <a href="/" style={{ color:"#93c5fd",textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>Our Courses</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>Coaching for PCS Exam</span>
          </div>

          <div className="pcs-hero-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center",paddingBottom:48 }}>
            {/* left */}
            <div ref={heroTextRef}>
              <span style={{ display:"inline-block",padding:"4px 14px",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",borderRadius:999,background:"rgba(232,93,4,0.2)",color:"#f4a726",border:"1px solid rgba(232,93,4,0.4)",marginBottom:16,
                opacity: heroTextVisible ? 1 : 0, transform: heroTextVisible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease 60ms, transform 0.6s ease 60ms" }}>
                PPSC / PCS Coaching
              </span>
              <h1 className="pcs-hero-h1" style={{ fontFamily:"'Playfair Display',Georgia,serif",fontSize:"3rem",fontWeight:900,color:"#fff",lineHeight:1.15,margin:"0 0 20px",
                opacity: heroTextVisible ? 1 : 0, transform: heroTextVisible ? "translateY(0)" : "translateY(32px)", filter: heroTextVisible ? "blur(0)" : "blur(6px)",
                transition: "opacity 0.9s cubic-bezier(.22,.61,.36,1) 150ms, transform 0.9s cubic-bezier(.22,.61,.36,1) 150ms, filter 0.9s ease 150ms" }}>
                Coaching for<br/><span style={{ color:"#f4a726" }}>PCS Exam</span>
              </h1>
              <p style={{ color:"#bfdbfe",fontSize:16,lineHeight:1.75,margin:"0 0 28px",
                opacity: heroTextVisible ? 1 : 0, transform: heroTextVisible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.7s ease 320ms, transform 0.7s ease 320ms" }}>
                PPSC 2026: Your Complete Exam Guide for Success — Punjab Public Service Commission coaching by Vashishth IAS Academy, Ludhiana.
              </p>
              <div className="pcs-hero-btns" style={{ display:"flex",flexWrap:"wrap",gap:12,
                opacity: heroTextVisible ? 1 : 0, transform: heroTextVisible ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.7s ease 450ms, transform 0.7s ease 450ms" }}>
                <a href="#pcs-enquire" className="pcs-btn-orange" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",boxShadow:"0 4px 18px rgba(232,93,4,0.45)" }}>Enquire Now</a>
                <a href="#pcs-content" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,border:"1px solid #60a5fa",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none" }}>Know More</a>
              </div>
            </div>

            {/* stats card */}
            <div className="pcs-fadeup pcs-d3">
              <div style={{ borderRadius:16,padding:"28px 24px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)" }}>
                <p style={{ color:"#93c5fd",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:20 }}>PPSC 2026 At a Glance</p>
                <div className="pcs-stats-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20 }}>
                  {[["322","Vacancies"],["3 Stages","Selection"],["₹39K","Max Salary"]].map(([n,l])=>(
                    <div key={l} style={{ textAlign:"center" }}>
                      <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:900,color:"#f4a726",margin:0 }}>{n}</p>
                      <p style={{ fontSize:10,color:"#93c5fd",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4 }}>{l}</p>
                    </div>
                  ))}
                </div>
                <hr style={{ border:"none",borderTop:"1px solid rgba(255,255,255,0.1)",marginBottom:20 }}/>
                <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                  {["Expert PPSC Faculty","Complete Study Material","Regular Mock Tests","Personal Mentorship"].map(f=>(
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

      {/* ══════════ MAIN CONTENT ══════════ */}
      <section id="pcs-content" style={{ maxWidth:1152,margin:"0 auto",padding:"48px 20px" }}>

        {/* Intro + Form */}
        <div className="pcs-content-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr",gap:32,marginBottom:56 }}>

          {/* intro */}
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
              <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
              <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.7rem",fontWeight:700,color:"#0a1628",margin:0 }}>PPSC 2026: Your Complete Exam Guide</h2>
            </div>
            <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 20px" }}>
              Are you aspiring for a government job in Punjab? The Punjab Public Service Commission (PPSC) conducts a range of exams to hire skilled candidates for various government roles. If you're preparing for the PPSC exams in 2026, this detailed guide is for you. We will cover all essential information, including eligibility criteria, exam pattern, and effective preparation tips, presented in a simple and easy-to-understand format.
            </p>

            {/* Notification box */}
            <div style={{ background:"#fff",borderRadius:12,padding:"20px 22px",boxShadow:"0 2px 10px rgba(0,0,0,0.07)",marginBottom:20 }}>
              <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.2rem",fontWeight:700,color:"#0a1628",margin:"0 0 12px" }}>PPSC 2026 Notification</h3>
              <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:0 }}>
                The application schedule for the Punjab PCS 2026 Exam is now available. You can register from <strong>January 3rd to January 31st, 2026</strong>, until 11:59 PM. The last day to pay the application fee is also January 31st, 2026. The prelims exam is expected to take place in <strong>April 2026</strong>. Read the instructions carefully before applying.
              </p>
            </div>
          </div>

          {/* enquiry form */}
          <div id="pcs-enquire">
            <div style={{ borderRadius:16,overflow:"hidden",boxShadow:"0 8px 28px rgba(0,0,0,0.10)" }}>
              <div style={{ padding:"18px 20px",background:"linear-gradient(135deg,#0a1628,#1a3a6b)" }}>
                <div style={{ color:"#fbbf24",fontSize:16,marginBottom:6 }}>★★★★★</div>
                <p style={{ fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:"#fff",margin:0 }}>India's Most Trusted PCS Coaching</p>
              </div>
              <div style={{ padding:20,background:"#fff",display:"flex",flexDirection:"column",gap:10 }}>
                <p style={{ fontSize:13,fontWeight:700,color:"#0a1628",margin:0 }}>Get Free Counselling</p>
                {["Your Full Name *","Phone Number *","Email Address *"].map(ph=>(
                  <input key={ph} className="pcs-input" placeholder={ph} style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#111",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}/>
                ))}
                <select className="pcs-input" style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#6b7280",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}>
                  <option value="">Select Course *</option>
                  <option>IAS / UPSC CSE</option><option>PPSC / PCS</option><option>NDA</option><option>CDS</option><option>SSC</option>
                </select>
                <button className="pcs-btn-orange" style={{ width:"100%",padding:"10px 0",borderRadius:8,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,border:"none",cursor:"pointer",fontFamily:"'Hind',sans-serif" }}>
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Key Highlights ── */}
        <SectionBlock title="PPSC 2026: Key Highlights">
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 16px" }}>
            Aspirants willing to appear for the PPSC 2026 exam must go through the article to get details about the important dates, exam pattern, syllabus, preparation tips, and many more.
          </p>
          <div className="pcs-table-wrap">
            <table style={{ width:"100%",borderCollapse:"collapse",fontSize:13 }}>
              <thead><tr><th style={TH}>Feature</th><th style={TH}>Details</th></tr></thead>
              <tbody>
                {keyHighlights.map((r,i)=>(
                  <tr key={i} className="pcs-table-row-hover">
                    <td style={i%2===0?TD:TDeven}><strong>{r.feature}</strong></td>
                    <td style={i%2===0?TD:TDeven}>
                      {r.isLink
                        ? <a href={`https://${r.details}`} target="_blank" rel="noreferrer" style={{ color:"#1a3a6b" }}>{r.details}</a>
                        : r.details.split("\n").map((l,j)=><div key={j}>{l}</div>)
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionBlock>

        {/* ── Exam Dates ── */}
        <SectionBlock title="PPSC 2026 Exam Date">
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 16px" }}>
            PPSC released the official notification announcing the dates of exams. After the announcement, the commission will start accepting applications for the Punjab PCS examinations for 2026.
          </p>
          <div className="pcs-table-wrap">
            <table style={{ width:"100%",borderCollapse:"collapse",fontSize:13 }}>
              <thead><tr><th style={TH}>Event</th><th style={{ ...TH,textAlign:"center" }}>Date</th></tr></thead>
              <tbody>
                {examDates.map((r,i)=>(
                  <tr key={i} className="pcs-table-row-hover">
                    <td style={i%2===0?TD:TDeven}>{r.event}</td>
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center" }}>{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionBlock>

        {/* ── Vacancy ── */}
        <SectionBlock title="PPSC 2026 Vacancy">
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 8px" }}>
            The Punjab Public Service Commission (PPSC) has announced a total of <strong>322 vacancies</strong> for various administrative and departmental positions for the year 2026.
          </p>
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 16px" }}>
            The number of vacancies to be filled on the basis of PSCSCCE-2026 is given in the table below:
          </p>
          <div className="pcs-table-wrap">
            <table style={{ width:"100%",borderCollapse:"collapse",fontSize:13 }}>
              <thead><tr><th style={{ ...TH,width:60 }}>Sr No.</th><th style={TH}>Name of Post</th><th style={{ ...TH,textAlign:"center",width:100 }}>No. of Posts</th></tr></thead>
              <tbody>
                {vacancies.map((r,i)=>(
                  <tr key={i} className="pcs-table-row-hover">
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center" }}>{r.sr}</td>
                    <td style={i%2===0?TD:TDeven}>{r.isBold ? <strong>{r.post}</strong> : r.post}</td>
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center" }}>{r.isBold ? <strong>{r.posts}</strong> : r.posts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionBlock>

        {/* ── Eligibility ── */}
        <SectionBlock title="PPSC 2026 Eligibility Criteria">
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 20px" }}>
            The PPSC has outlined specific eligibility criteria including educational qualifications, age limits, nationality requirements, and other essential guidelines.
          </p>

          {/* Educational Qualifications */}
          <SubHead title="Educational Qualifications"/>
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 10px" }}>Candidates must meet the following educational requirements:</p>
          <ul style={{ paddingLeft:22,margin:"0 0 20px",display:"flex",flexDirection:"column",gap:8 }}>
            {["You need to have a bachelor's degree from a recognized university.","You can take the preliminary exam while studying for your degree, but you must have the degree to take the main exam.","You must have passed Matriculation (10th grade) with Punjabi as a subject or an equivalent exam."].map((t,i)=>(
              <li key={i} style={{ color:"#374151",fontSize:14,lineHeight:1.7 }}>{t}</li>
            ))}
          </ul>

          {/* Age Limit */}
          <SubHead title="Age Limit"/>
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 12px" }}>The age criteria for applicants are as follows:</p>
          <div className="pcs-table-wrap" style={{ marginBottom:20 }}>
            <table style={{ width:"60%",minWidth:260,borderCollapse:"collapse",fontSize:13 }}>
              <thead><tr><th style={{ ...TH,textAlign:"center" }}>Criteria</th><th style={{ ...TH,textAlign:"center" }}>Age Limit</th></tr></thead>
              <tbody>
                {[["Minimum Age","21 years"],["Maximum Age","37 years"]].map(([c,a],i)=>(
                  <tr key={i}><td style={{ ...TD,textAlign:"center" }}>{c}</td><td style={{ ...TD,textAlign:"center" }}>{a}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Age Relaxation */}
          <SubHead title="Age Relaxation"/>
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 12px" }}>Age relaxation is available for specific categories:</p>
          <div className="pcs-table-wrap" style={{ marginBottom:8 }}>
            <table style={{ width:"100%",borderCollapse:"collapse",fontSize:13 }}>
              <thead><tr><th style={TH}>Category</th><th style={{ ...TH,textAlign:"center" }}>Age Relaxations</th></tr></thead>
              <tbody>
                {ageRelaxation.map((r,i)=>(
                  <tr key={i} className="pcs-table-row-hover">
                    <td style={i%2===0?TD:TDeven}>{r.category}</td>
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center" }}>{r.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color:"#6b7280",fontSize:12,fontStyle:"italic",margin:"6px 0 20px" }}>Age relaxation specifics may vary by position, so candidates should refer to the official notification for detailed information.</p>

          {/* Nationality */}
          <SubHead title="Nationality"/>
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 10px" }}>To be eligible, candidates must be:</p>
          <ul style={{ paddingLeft:22,margin:"0 0 20px",display:"flex",flexDirection:"column",gap:8 }}>
            {["You must be a citizen of India, Nepal, Bhutan, or a Tibetan refugee who came to India before January 1, 1962.","People of Indian origin who migrated from certain countries are also eligible."].map((t,i)=>(
              <li key={i} style={{ color:"#374151",fontSize:14,lineHeight:1.7 }}>{t}</li>
            ))}
          </ul>

          {/* Physical Standards */}
          <SubHead title="Physical Standards (for certain posts)"/>
          <ul style={{ paddingLeft:22,margin:"0 0 12px",display:"flex",flexDirection:"column",gap:6 }}>
            {["Deputy Superintendent Police and Deputy Superintendent Jails need to meet height and chest measurements.","Candidates must pass physical tests like running, long jump, high jump, and other specific events."].map((t,i)=>(
              <li key={i} style={{ color:"#374151",fontSize:14,lineHeight:1.7 }}>{t}</li>
            ))}
          </ul>
          <p style={{ color:"#374151",fontSize:14,margin:"0 0 12px" }}>Depending on the positions, there may be specific physical standards required, especially for roles in law enforcement or public safety:</p>
          <div className="pcs-table-wrap" style={{ marginBottom:8 }}>
            <table style={{ width:"100%",borderCollapse:"collapse",fontSize:12 }}>
              <thead><tr>
                <th style={TH}>Position</th>
                <th style={TH}>Height (Male)</th>
                <th style={TH}>Height (Female)</th>
                <th style={TH}>Chest (Male Only)</th>
                <th style={TH}>Vision</th>
              </tr></thead>
              <tbody>
                {physicalStandards.map((r,i)=>(
                  <tr key={i} className="pcs-table-row-hover">
                    <td style={i%2===0?TD:TDeven}><strong>{r.position}</strong></td>
                    <td style={i%2===0?TD:TDeven}>{r.heightMale}</td>
                    <td style={i%2===0?TD:TDeven}>{r.heightFemale}</td>
                    <td style={i%2===0?TD:TDeven}>{r.chest.split("\n").map((l,j)=><div key={j}>{l}</div>)}</td>
                    <td style={i%2===0?TD:TDeven}>{r.vision.split("\n").map((l,j)=><div key={j}>{l}</div>)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color:"#6b7280",fontSize:12,fontStyle:"italic",margin:"6px 0 20px" }}>Physical Standards</p>

          {/* General Physical Fitness */}
          <SubHead title="General Physical Fitness Requirements"/>
          <div className="pcs-table-wrap" style={{ marginBottom:8 }}>
            <table style={{ width:"100%",borderCollapse:"collapse",fontSize:13 }}>
              <thead><tr>
                <th style={{ ...TH,width:"50%" }}>Events for Male Candidates</th>
                <th style={TH}>Events for Female Candidates</th>
              </tr></thead>
              <tbody>
                {[
                  ["1600 meters race: To be completed within 07 minutes 30 seconds (only one attempt)","800 meters race: To be completed within 04 minutes 45 seconds (only one attempt)"],
                  ["Long Jump: Minimum 3.60 meters (Three attempts only)","Long Jump: Minimum 3.00 meters (Three attempts only)"],
                  ["High Jump: Minimum 1.15 meters (Three attempts only)","High Jump: Minimum 1.00 meter (Three attempts only)"],
                  ["Vertical Rope: 2.0 Meters climb from the ground (Three attempts only)","Shuttle: Running between two parallel lines 10 meter apart, five times in 20 seconds (one attempt only)"],
                ].map(([m,f],i)=>(
                  <tr key={i} className="pcs-table-row-hover">
                    <td style={i%2===0?TD:TDeven}><strong>{m.split(":")[0]}:</strong>{m.slice(m.indexOf(":")+1)}</td>
                    <td style={i%2===0?TD:TDeven}><strong>{f.split(":")[0]}:</strong>{f.slice(f.indexOf(":")+1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color:"#6b7280",fontSize:12,fontStyle:"italic",margin:"6px 0 24px" }}>General Physical Fitness Requirements</p>

          {/* Number of Attempts */}
          <SubHead title="Number of Attempts"/>
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 12px" }}>
            Unless covered by any of the exceptions, notified by Government in this behalf from time to time, the candidates belonging to the categories specified below may avail the following number of attempts:
          </p>
          <div className="pcs-table-wrap" style={{ marginBottom:8 }}>
            <table style={{ width:"70%",minWidth:280,borderCollapse:"collapse",fontSize:13 }}>
              <thead><tr>
                <th style={{ ...TH,textAlign:"center",width:70 }}>Sr. No.</th>
                <th style={TH}>Name of Category</th>
                <th style={{ ...TH,textAlign:"center" }}>Maximum Number of Attempts</th>
              </tr></thead>
              <tbody>
                {attempts.map((r,i)=>(
                  <tr key={i} className="pcs-table-row-hover">
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center" }}>{r.sr}</td>
                    <td style={i%2===0?TD:TDeven}>{r.category}</td>
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center" }}>{r.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color:"#6b7280",fontSize:12,fontStyle:"italic",margin:"6px 0 8px" }}>Total Number of Attempts</p>
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 16px" }}>
            For the purpose of this rule, an attempt in an examination includes an attempt made by the candidate in the preliminary examination conducted under these rules.
          </p>
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 12px" }}>Ex-servicemen category candidates are permitted following attempts at the Examination:</p>
          <div className="pcs-table-wrap" style={{ marginBottom:8 }}>
            <table style={{ width:"70%",minWidth:280,borderCollapse:"collapse",fontSize:13 }}>
              <thead><tr>
                <th style={{ ...TH,textAlign:"center",width:70 }}>Sr. No.</th>
                <th style={TH}>Category</th>
                <th style={{ ...TH,textAlign:"center" }}>Number of Attempts</th>
              </tr></thead>
              <tbody>
                {exServicemenAttempts.map((r,i)=>(
                  <tr key={i} className="pcs-table-row-hover">
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center" }}>{r.sr}</td>
                    <td style={i%2===0?TD:TDeven}>{r.category}</td>
                    <td style={{ ...(i%2===0?TD:TDeven),textAlign:"center" }}>{r.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"20px 0 0" }}>
            Meeting the eligibility criteria is the first step for candidates aspiring to embark on a career with the Punjab Government through the PPSC Exam 2026.
          </p>
        </SectionBlock>

        {/* ── Bottom CTA ── */}
        <div style={{ borderRadius:16,padding:"40px 24px",textAlign:"center",background:"linear-gradient(135deg,#e85d04,#c94b00)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:700,color:"#fff",margin:"0 0 10px" }}>
            Ready to Start Your PPSC Journey?
          </h3>
          <p style={{ color:"rgba(255,237,213,0.9)",fontSize:14,margin:"0 0 24px" }}>
            Join thousands of successful candidates who chose Vashishth IAS Academy, Ludhiana
          </p>
          <div className="pcs-cta-btns" style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12 }}>
            <a href="#pcs-enquire" style={{ padding:"11px 32px",borderRadius:8,background:"#fff",color:"#e85d04",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>Enroll Now</a>
            <a href="tel:+919464031200" style={{ padding:"11px 32px",borderRadius:8,border:"1px solid rgba(255,255,255,0.5)",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>+91-94640-31200</a>
          </div>
        </div>

      </section>
    </div>
  );
}

/* ── helper components ── */
function SectionBlock({ title, children }) {
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

function SubHead({ title }) {
  return (
    <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.1rem",fontWeight:700,color:"#0a1628",margin:"0 0 10px",paddingBottom:6,borderBottom:"2px solid #e85d04",display:"inline-block" }}>
      {title}
    </h3>
  );
}
