import { useParallax, useReveal } from "../utils/animations";

const examOverview = [
  { label: "Name of Exam", value: "National Defence Academy (NDA)" },
  { label: "Age Requirement", value: "Minimum 16.5 years, Maximum 19 years (as on first day of the month the course begins)" },
  { label: "Educational Qualification", value: "12th pass for Army; 12th pass with Physics & Mathematics for Navy and Air Force. Can apply while appearing for 12th exam." },
  { label: "Marital Status", value: "Unmarried" },
  { label: "Exam Held In", value: "Twice a year – April and August" },
  { label: "Preparation Time", value: "Start after Class X (preferred)" },
  { label: "Mode of Examination", value: "Written test followed by extensive Intelligence and Personality test" },
  { label: "Negative Marking", value: "Yes" },
  { label: "Classes Begin In", value: "July and January" },
];

const paper1Topics = ["Algebra","Matrices & Determinants","2D, 3D Geometry","Differential Calculus","Integral Calculus & Differential Equations","Vector Algebra","Statistics & Probability"];
const paper2BTopics = ["Physics","Chemistry","Biology","History & Freedom Movements","Geography","Current Events"];

const genericTips = [
  "Fix your goal and start preparing early — as early as after your Class X exam. This will give you an edge over other students.",
  "Understand the syllabus thoroughly and make a firm routine so that you cover all the subjects.",
  "Go back to your basics, even if that means referring to your Class VI, VII, VIII books for certain subjects.",
  "Improve your English. Start reading a newspaper daily and watch news on TV. Also brush up your Grammar skills.",
  "Refer to the past years' question papers so that you have a fair idea of what to expect.",
  "Solve as many mock question papers and past question papers as possible.",
  "Identify your weak subjects and start working on them so that you gain a stronghold.",
  "Prepare yourself to be calm in the examination hall and answer the questions within the stipulated time.",
  "As there is negative marking, answer only if you are very sure. Guesses are not going to pay here.",
  "Spend time on understanding yourself, your weak areas and try to strengthen them.",
  "Last but not the least — start thinking and behaving like an officer.",
];

const TH = { background:"#1a3a6b",color:"#fff",padding:"10px 14px",textAlign:"left",fontSize:13,fontWeight:700,fontFamily:"'Hind',sans-serif" };
const TD = { padding:"10px 14px",fontSize:13,color:"#2c3e50",borderBottom:"1px solid #e8eef7",verticalAlign:"top",lineHeight:1.7,fontFamily:"'Hind',sans-serif" };
const TDeven = { ...TD, background:"#f5f8fd" };

export default function CoachingForNDAExam() {
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);
  const { ref: heroTextRef, visible: heroTextVisible } = useReveal(0.3);
  return (
    <div style={{ fontFamily:"'Hind',sans-serif",background:"#f0f4f8",minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes ndaFadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .nda-fadeup{animation:ndaFadeUp 0.65s ease forwards;}
        .nda-d1{animation-delay:.1s;opacity:0} .nda-d2{animation-delay:.25s;opacity:0} .nda-d3{animation-delay:.4s;opacity:0} .nda-d4{animation-delay:.55s;opacity:0}
        .nda-btn:hover{opacity:.88;transform:scale(1.03);}
        .nda-input:focus{outline:none;border-color:#e85d04 !important;}
        .nda-tip-card{transition:transform .25s,box-shadow .25s;}
        .nda-tip-card:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(0,0,0,0.1) !important;}
        .nda-paper-card{transition:transform .25s,border-color .25s;}
        .nda-paper-card:hover{transform:translateY(-3px);}
        .nda-tr:hover td{background:#eef3fc !important;}
        @media(max-width:900px){
          .nda-hero-grid{grid-template-columns:1fr !important;}
          .nda-content-grid{grid-template-columns:1fr !important;}
          .nda-papers-grid{grid-template-columns:1fr !important;}
          .nda-tips-grid{grid-template-columns:1fr 1fr !important;}
          .nda-career-grid{grid-template-columns:1fr 1fr !important;}
        }
        @media(max-width:600px){
          .nda-hero-h1{font-size:2rem !important;}
          .nda-hero-btns{flex-direction:column !important;}
          .nda-hero-btns a{width:100% !important;text-align:center;}
          .nda-tips-grid{grid-template-columns:1fr !important;}
          .nda-career-grid{grid-template-columns:1fr !important;}
          .nda-cta-btns{flex-direction:column !important;align-items:center;}
          .nda-table-wrap{overflow-x:auto;}
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section ref={heroRef} style={{ background:"linear-gradient(135deg,#0a1628 0%,#1a3a6b 55%,#0d2444 100%)",position:"relative",overflow:"hidden" }}>
        <div className="va-blob" style={{ position:"absolute",top:0,right:0,width:380,height:380,borderRadius:"50%",background:"radial-gradient(circle,rgba(232,93,4,0.13),transparent)",transform:`translate(30%,-30%) translateY(${heroOffset}px)`,pointerEvents:"none" }}/>
        <div className="va-blob" style={{ position:"absolute",bottom:0,left:0,width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,167,38,0.1),transparent)",transform:`translate(-40%,40%) translateY(${heroOffset*0.5}px)`,pointerEvents:"none" }}/>

        <div style={{ position:"relative",zIndex:1,maxWidth:1152,margin:"0 auto",padding:"48px 20px 0" }}>
          {/* breadcrumb */}
          <div className="nda-fadeup" style={{ display:"flex",flexWrap:"wrap",gap:6,fontSize:13,color:"#93c5fd",marginBottom:28 }}>
            <a href="/" style={{ color:"#93c5fd",textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>Our Courses</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>Coaching for NDA Exam</span>
          </div>

          <div className="nda-hero-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center",paddingBottom:48 }}>
            {/* left */}
            <div ref={heroTextRef}>
              <span style={{ display:"inline-block",padding:"4px 14px",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",borderRadius:999,background:"rgba(232,93,4,0.2)",color:"#f4a726",border:"1px solid rgba(232,93,4,0.4)",marginBottom:16,
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(16px)",transition:"opacity 0.6s ease 60ms,transform 0.6s ease 60ms" }}>
                Defence Coaching
              </span>
              <h1 className="nda-hero-h1" style={{ fontFamily:"'Playfair Display',Georgia,serif",fontSize:"3rem",fontWeight:900,color:"#fff",lineHeight:1.15,margin:"0 0 20px",
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(32px)",filter:heroTextVisible?"blur(0)":"blur(6px)",
                transition:"opacity 0.9s cubic-bezier(.22,.61,.36,1) 150ms,transform 0.9s cubic-bezier(.22,.61,.36,1) 150ms,filter 0.9s ease 150ms" }}>
                Coaching for<br/><span style={{ color:"#f4a726" }}>NDA Exam</span>
              </h1>
              <p style={{ color:"#bfdbfe",fontSize:16,lineHeight:1.75,margin:"0 0 28px",
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(16px)",transition:"opacity 0.7s ease 320ms,transform 0.7s ease 320ms" }}>
                National Defence Academy — the first tri-service academy of the world. Begin your journey to serve the Indian Armed Forces with expert coaching at Vashishth IAS Academy, Ludhiana.
              </p>
              <div className="nda-hero-btns" style={{ display:"flex",flexWrap:"wrap",gap:12,
                opacity:heroTextVisible?1:0,transform:heroTextVisible?"translateY(0)":"translateY(14px)",transition:"opacity 0.7s ease 450ms,transform 0.7s ease 450ms" }}>
                <a href="#nda-enquire" className="nda-btn" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",boxShadow:"0 4px 18px rgba(232,93,4,0.45)",transition:"opacity .2s,transform .2s" }}>Enquire Now</a>
                <a href="#nda-content" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,border:"1px solid #60a5fa",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none" }}>Know More</a>
              </div>
            </div>

            {/* stats card */}
            <div className="nda-fadeup nda-d3">
              <div style={{ borderRadius:16,padding:"28px 24px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)" }}>
                <p style={{ color:"#93c5fd",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:20 }}>NDA At a Glance</p>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20 }}>
                  {[["2x/Year","Exam"],["900","Total Marks"],["Pune","Location"]].map(([n,l])=>(
                    <div key={l} style={{ textAlign:"center" }}>
                      <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",fontWeight:900,color:"#f4a726",margin:0 }}>{n}</p>
                      <p style={{ fontSize:10,color:"#93c5fd",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4 }}>{l}</p>
                    </div>
                  ))}
                </div>
                <hr style={{ border:"none",borderTop:"1px solid rgba(255,255,255,0.1)",marginBottom:20 }}/>
                <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                  {["Army / Navy / Air Force Coaching","Expert Defence Faculty","SSB Interview Preparation","Personality Development Training"].map(f=>(
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
      <section id="nda-content" style={{ maxWidth:1152,margin:"0 auto",padding:"48px 20px" }}>

        {/* Intro + Form */}
        <div className="nda-content-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr",gap:32,marginBottom:56 }}>
          <div>
            <SectionTitle title="About NDA"/>
            <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 16px" }}>
              The NDA is the <strong style={{ color:"#0a1628" }}>joint services academy of the Indian Armed Forces</strong>. Here, the cadets of the Army, the Navy and the Air Force get trained together before they embark on a pre-commissioning training in respective academies. The first tri-service academy of the world, the NDA is located in <strong style={{ color:"#0a1628" }}>Pune, Maharashtra</strong> and is ranked among the best academies in the world.
            </p>

            {/* Career path cards */}
            <div className="nda-career-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20 }}>
              {[
                { branch:"Army", academy:"Indian Military Academy (IMA)", location:"Dehradun", color:"#1a3a6b" },
                { branch:"Air Force", academy:"Air Force Academy (AFA)", location:"Dundigal, Hyderabad", color:"#e85d04" },
                { branch:"Navy", academy:"Indian Naval Academy (INA)", location:"Ezhimala, Kerala", color:"#0d7490" },
              ].map(c=>(
                <div key={c.branch} style={{ borderRadius:10,overflow:"hidden",boxShadow:"0 2px 10px rgba(0,0,0,0.08)" }}>
                  <div style={{ background:c.color,padding:"10px 14px" }}>
                    <p style={{ color:"#fff",fontWeight:700,fontSize:13,margin:0 }}>{c.branch}</p>
                  </div>
                  <div style={{ background:"#fff",padding:"10px 14px" }}>
                    <p style={{ fontSize:12,fontWeight:600,color:"#0a1628",margin:"0 0 4px" }}>{c.academy}</p>
                    <p style={{ fontSize:11,color:"#6b7280",margin:0 }}>{c.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:0 }}>
              The NDA applicants are chosen through a <strong style={{ color:"#0a1628" }}>Written exam conducted by UPSC</strong>, followed by an Intelligence and Personality test conducted by Services Selection Board (SSB). The UPSC conducts this exam twice a year in about 41 centres across the country.
            </p>
          </div>

          {/* Enquiry Form */}
          <div id="nda-enquire">
            <div style={{ borderRadius:16,overflow:"hidden",boxShadow:"0 8px 28px rgba(0,0,0,0.10)" }}>
              <div style={{ padding:"18px 20px",background:"linear-gradient(135deg,#0a1628,#1a3a6b)" }}>
                <div style={{ color:"#fbbf24",fontSize:16,marginBottom:6 }}>★★★★★</div>
                <p style={{ fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:"#fff",margin:0 }}>India's Most Trusted NDA Coaching</p>
              </div>
              <div style={{ padding:20,background:"#fff",display:"flex",flexDirection:"column",gap:10 }}>
                <p style={{ fontSize:13,fontWeight:700,color:"#0a1628",margin:0 }}>Get Free Counselling</p>
                {["Your Full Name *","Phone Number *","Email Address *"].map(ph=>(
                  <input key={ph} className="nda-input" placeholder={ph} style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#111",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}/>
                ))}
                <select className="nda-input" style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#6b7280",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}>
                  <option value="">Select Course *</option>
                  <option>NDA</option><option>IAS / UPSC CSE</option><option>PPSC / PCS</option><option>CDS</option><option>SSC</option>
                </select>
                <button className="nda-btn" style={{ width:"100%",padding:"10px 0",borderRadius:8,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,border:"none",cursor:"pointer",fontFamily:"'Hind',sans-serif",transition:"opacity .2s,transform .2s" }}>
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Overview Table */}
        <Block title="NDA Exam Overview">
          <div className="nda-table-wrap">
            <table style={{ width:"100%",borderCollapse:"collapse" }}>
              <thead><tr><th style={TH}>Feature</th><th style={TH}>Details</th></tr></thead>
              <tbody>
                {examOverview.map((r,i)=>(
                  <tr key={i} className="nda-tr">
                    <td style={{ ...(i%2===0?TD:TDeven),fontWeight:600,width:"30%" }}>{r.label}</td>
                    <td style={i%2===0?TD:TDeven}>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        {/* Written Exam Pattern */}
        <Block title="NDA Written Exam By UPSC">
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 20px" }}>
            The Written exam consists of two sections: <strong style={{ color:"#0a1628" }}>Mathematics for 300 marks</strong> and <strong style={{ color:"#0a1628" }}>General Ability for 600 marks</strong>. Each paper is for 2 to 2.5 hours. All questions are objective in nature and available in Hindi and English.
          </p>
          <div className="nda-papers-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
            {/* Paper 1 */}
            <div className="nda-paper-card" style={{ borderRadius:12,overflow:"hidden",boxShadow:"0 2px 10px rgba(0,0,0,0.07)",border:"2px solid #1a3a6b" }}>
              <div style={{ background:"#1a3a6b",padding:"14px 18px" }}>
                <p style={{ color:"#f4a726",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",margin:"0 0 4px" }}>Paper I</p>
                <p style={{ color:"#fff",fontSize:16,fontWeight:700,margin:"0 0 2px",fontFamily:"'Playfair Display',serif" }}>Mathematics</p>
                <p style={{ color:"#93c5fd",fontSize:12,margin:0 }}>2.5 hours &nbsp;|&nbsp; 300 Marks</p>
              </div>
              <div style={{ background:"#fff",padding:"16px 18px" }}>
                <ul style={{ listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8 }}>
                  {paper1Topics.map((t,i)=>(
                    <li key={i} style={{ display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#374151" }}>
                      <span style={{ width:6,height:6,borderRadius:"50%",background:"#e85d04",flexShrink:0,display:"inline-block" }}/>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Paper 2 */}
            <div className="nda-paper-card" style={{ borderRadius:12,overflow:"hidden",boxShadow:"0 2px 10px rgba(0,0,0,0.07)",border:"2px solid #e85d04" }}>
              <div style={{ background:"#e85d04",padding:"14px 18px" }}>
                <p style={{ color:"#fff",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",margin:"0 0 4px" }}>Paper II</p>
                <p style={{ color:"#fff",fontSize:16,fontWeight:700,margin:"0 0 2px",fontFamily:"'Playfair Display',serif" }}>General Ability</p>
                <p style={{ color:"rgba(255,255,255,0.8)",fontSize:12,margin:0 }}>2.5 hours &nbsp;|&nbsp; 600 Marks</p>
              </div>
              <div style={{ background:"#fff",padding:"16px 18px" }}>
                <p style={{ fontSize:12,fontWeight:700,color:"#0a1628",margin:"0 0 8px",textTransform:"uppercase",letterSpacing:"0.06em" }}>Part A — English (200 Marks)</p>
                <p style={{ fontSize:13,color:"#374151",margin:"0 0 14px",lineHeight:1.6 }}>Vocabulary, Grammar & Usage, Comprehension</p>
                <p style={{ fontSize:12,fontWeight:700,color:"#0a1628",margin:"0 0 8px",textTransform:"uppercase",letterSpacing:"0.06em" }}>Part B — General Knowledge (400 Marks)</p>
                <ul style={{ listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8 }}>
                  {paper2BTopics.map((t,i)=>(
                    <li key={i} style={{ display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#374151" }}>
                      <span style={{ width:6,height:6,borderRadius:"50%",background:"#1a3a6b",flexShrink:0,display:"inline-block" }}/>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Block>

        {/* Intelligence & Personality Test */}
        <Block title="Intelligence And Personality Test (SSB)">
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 16px" }}>
            This test evaluates the personality, intelligence and mental aptitude of the candidate. The test includes:
          </p>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10 }}>
            {["Group Discussions","Team Work Assessment","Psychological Testing","Physical Skills Test","General Aptitude Test","Medical Test"].map((item,i)=>(
              <div key={i} style={{ display:"flex",alignItems:"center",gap:10,background:"#f5f8fd",borderRadius:8,padding:"10px 14px",border:"1px solid #dde8f8" }}>
                <div style={{ width:28,height:28,borderRadius:"50%",background:"#1a3a6b",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  <span style={{ color:"#f4a726",fontSize:11,fontWeight:700 }}>{i+1}</span>
                </div>
                <span style={{ fontSize:13,color:"#0a1628",fontWeight:500 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop:16,background:"#fff8e1",borderLeft:"4px solid #f4a726",borderRadius:"0 8px 8px 0",padding:"12px 16px" }}>
            <p style={{ fontSize:13,color:"#555",margin:0,lineHeight:1.7 }}>
              <strong>Tip:</strong> Concentrate on developing your personality. The test assesses officer-like qualities — sense of responsibility, reacting to situations, social adaptability, team work, etc. Practice psychological tests that enable you to know yourself better.
            </p>
          </div>
        </Block>

        {/* How to Prepare */}
        <Block title="Preparing For The NDA Exam">
          <SubHead title="Paper 1: Mathematics Preparation"/>
          <p style={{ color:"#374151",fontSize:14,lineHeight:1.8,margin:"0 0 12px" }}>
            This test covers: Integral Calculus, Differential Equations, Trigonometry, Algebra, Vector Algebra, Matrices and Determinants, Analytical Geometry, Statistics & Probability.
          </p>
          <div style={{ display:"flex",flexDirection:"column",gap:10,marginBottom:24 }}>
            {[
              "Have clarity in concepts — go back to basics if concepts are not clear.",
              "Try to solve as many sums and mock questions as possible.",
              "Practice effective time management — 200 questions in 120 minutes means less than a minute per question.",
              "Emphasize on mental mathematics to solve questions faster.",
            ].map((t,i)=>(
              <div key={i} style={{ display:"flex",gap:10,alignItems:"flex-start" }}>
                <div style={{ width:20,height:20,borderRadius:"50%",background:"rgba(232,93,4,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2 }}>
                  <span style={{ color:"#e85d04",fontSize:10,fontWeight:700 }}>✓</span>
                </div>
                <p style={{ fontSize:14,color:"#374151",lineHeight:1.7,margin:0 }}>{t}</p>
              </div>
            ))}
          </div>

          <SubHead title="Paper 2: General Ability Preparation"/>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:0 }}>
            <div style={{ background:"#f5f8fd",borderRadius:10,padding:"16px 18px",border:"1px solid #dde8f8" }}>
              <p style={{ fontSize:13,fontWeight:700,color:"#1a3a6b",margin:"0 0 8px",textTransform:"uppercase",letterSpacing:"0.06em" }}>Part A — English</p>
              <p style={{ fontSize:13,color:"#374151",lineHeight:1.7,margin:0 }}>Read English newspaper daily, learn new words, go back to basic grammar and learn the rules thoroughly. Try to solve as many English tests as possible — many are available online.</p>
            </div>
            <div style={{ background:"#f5f8fd",borderRadius:10,padding:"16px 18px",border:"1px solid #dde8f8" }}>
              <p style={{ fontSize:13,fontWeight:700,color:"#1a3a6b",margin:"0 0 8px",textTransform:"uppercase",letterSpacing:"0.06em" }}>Part B — General Knowledge</p>
              <p style={{ fontSize:13,color:"#374151",lineHeight:1.7,margin:0 }}>Follow news updates regularly, be aware of latest happenings in sports, arts, literature. Read about the current economic scenario, recent and past policy changes related to India and neighbouring countries.</p>
            </div>
          </div>
        </Block>

        {/* Generic Tips */}
        <Block title="Generic Tips On How To Prepare For NDA Exam">
          <div className="nda-tips-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12 }}>
            {genericTips.map((tip,i)=>(
              <div key={i} className="nda-tip-card" style={{ background:"#fff",borderRadius:10,padding:"16px 16px",boxShadow:"0 2px 8px rgba(0,0,0,0.07)",border:"1px solid #e8eef7",display:"flex",gap:12 }}>
                <div style={{ width:28,height:28,borderRadius:8,background:"linear-gradient(135deg,#1a3a6b,#0d2444)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  <span style={{ color:"#f4a726",fontSize:11,fontWeight:900 }}>{i+1}</span>
                </div>
                <p style={{ fontSize:13,color:"#374151",lineHeight:1.7,margin:0 }}>{tip}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop:20,background:"linear-gradient(135deg,#1a3a6b,#0d2444)",borderRadius:10,padding:"16px 20px",textAlign:"center" }}>
            <p style={{ color:"#f4a726",fontFamily:"'Playfair Display',serif",fontSize:"1.2rem",fontWeight:700,margin:"0 0 4px" }}>Best Of Luck! 🎖️</p>
            <p style={{ color:"#bfdbfe",fontSize:13,margin:0 }}>Start thinking and behaving like an officer from day one.</p>
          </div>
        </Block>

        {/* Quick Reference */}
        <Block title="Quick Reference: Exam Pattern">
          <div className="nda-table-wrap">
            <table style={{ width:"100%",borderCollapse:"collapse" }}>
              <thead>
                <tr>
                  <th style={TH}>Paper</th>
                  <th style={TH}>Subject</th>
                  <th style={{ ...TH,textAlign:"center" }}>Duration</th>
                  <th style={{ ...TH,textAlign:"center" }}>Marks</th>
                  <th style={TH}>Topics</th>
                </tr>
              </thead>
              <tbody>
                <tr className="nda-tr">
                  <td style={TD}><strong>Paper I</strong></td>
                  <td style={TD}>Mathematics</td>
                  <td style={{ ...TD,textAlign:"center" }}>2.5 hrs</td>
                  <td style={{ ...TD,textAlign:"center" }}><strong style={{ color:"#1a3a6b" }}>300</strong></td>
                  <td style={TD}>Algebra, Matrices, Calculus, Vector Algebra, Statistics & Probability, 2D/3D</td>
                </tr>
                <tr className="nda-tr">
                  <td style={TDeven}><strong>Paper II — A</strong></td>
                  <td style={TDeven}>English</td>
                  <td style={{ ...TDeven,textAlign:"center" }}>2.5 hrs</td>
                  <td style={{ ...TDeven,textAlign:"center" }}><strong style={{ color:"#e85d04" }}>200</strong></td>
                  <td style={TDeven}>Vocabulary, Grammar, Comprehension</td>
                </tr>
                <tr className="nda-tr">
                  <td style={TD}><strong>Paper II — B</strong></td>
                  <td style={TD}>General Knowledge</td>
                  <td style={{ ...TD,textAlign:"center" }}>–</td>
                  <td style={{ ...TD,textAlign:"center" }}><strong style={{ color:"#1a3a6b" }}>400</strong></td>
                  <td style={TD}>Physics, Chemistry, Bio, History, Geography, Current Events</td>
                </tr>
                <tr className="nda-tr">
                  <td style={TDeven}><strong>SSB</strong></td>
                  <td style={TDeven}>Intelligence & Personality Test</td>
                  <td style={{ ...TDeven,textAlign:"center" }}>5 days</td>
                  <td style={{ ...TDeven,textAlign:"center" }}><strong style={{ color:"#e85d04" }}>900</strong></td>
                  <td style={TDeven}>GTO, Psychology, Interview, Conference</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Block>

        {/* Bottom CTA */}
        <div style={{ borderRadius:16,padding:"40px 24px",textAlign:"center",background:"linear-gradient(135deg,#e85d04,#c94b00)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:700,color:"#fff",margin:"0 0 10px" }}>
            Ready to Begin Your NDA Journey?
          </h3>
          <p style={{ color:"rgba(255,237,213,0.9)",fontSize:14,margin:"0 0 24px" }}>
            Join thousands of successful defence candidates at Vashishth IAS Academy, Ludhiana
          </p>
          <div className="nda-cta-btns" style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12 }}>
            <a href="#nda-enquire" style={{ padding:"11px 32px",borderRadius:8,background:"#fff",color:"#e85d04",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>Enroll Now</a>
            <a href="tel:+919464031200" style={{ padding:"11px 32px",borderRadius:8,border:"1px solid rgba(255,255,255,0.5)",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>+91-94640-31200</a>
          </div>
        </div>

      </section>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
      <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
      <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>{title}</h2>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <div style={{ marginBottom:48 }}>
      <SectionTitle title={title}/>
      <div style={{ background:"#fff",borderRadius:14,padding:"24px 22px",boxShadow:"0 2px 12px rgba(0,0,0,0.07)" }}>
        {children}
      </div>
    </div>
  );
}

function SubHead({ title }) {
  return (
    <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.05rem",fontWeight:700,color:"#0a1628",margin:"0 0 10px",paddingBottom:6,borderBottom:"2px solid #e85d04",display:"inline-block" }}>
      {title}
    </h3>
  );
}
