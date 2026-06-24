const dafTips = [
  {
    num: "01",
    title: "Deep Knowledge of Every Word in DAF",
    desc: "A candidate must have detailed knowledge of each and every word mentioned in DAF. For example, in case of a candidate's Name — any famous personality with the same name, the meaning of name/surname should be known.",
  },
  {
    num: "02",
    title: "Know Personalities for Sports & Hobbies",
    desc: "Be aware of the personalities for the sports or hobbies that the candidate wants to pursue. There is no need to do a Ph.D. in sports or hobbies but your interest must reflect your curiosity on the subject.",
  },
  {
    num: "03",
    title: "Choose a Hobby that Reflects Your Personality",
    desc: "It is always advisable to have a hobby that reflects the trait of your personality. For instance, doing yoga or meditation reflects your spirituality.",
  },
];

const uneasinessReasons = [
  "No defined syllabus, unlike prelims and mains exams.",
  "The members of the interview panel are drawn from diverse academic disciplines — they probe questions from their domain and that becomes challenging.",
];

const preparationTopics = [
  { icon:"📘", label:"Optional Subject (Mains)" },
  { icon:"🎓", label:"Educational Background" },
  { icon:"📍", label:"Place of Residence" },
  { icon:"🎯", label:"Reason to Become IAS/IPS" },
  { icon:"📋", label:"Detailed Application Form (DAF)" },
  { icon:"📰", label:"Current Affairs" },
];

const statsData = [
  ["275", "Marks"],
  ["30 min", "Duration"],
  ["2025", "Total Marks"],
];

export default function InterviewDiscussions() {
  return (
    <div style={{ fontFamily:"'Hind',sans-serif",background:"#f0f4f8",minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes intFadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        .int-fadeup{animation:intFadeUp 0.65s ease forwards;}
        .int-d1{animation-delay:.1s;opacity:0}.int-d2{animation-delay:.25s;opacity:0}.int-d3{animation-delay:.4s;opacity:0}.int-d4{animation-delay:.55s;opacity:0}
        .int-btn{transition:opacity .2s,transform .2s;}.int-btn:hover{opacity:.88;transform:scale(1.03);}
        .int-input:focus{outline:none;border-color:#e85d04 !important;}
        .int-card{transition:transform .25s,box-shadow .25s;}
        .int-card:hover{transform:translateY(-4px);box-shadow:0 14px 32px rgba(0,0,0,0.11) !important;}
        .int-tip-card{transition:border-left .25s,transform .25s;border-left:3px solid transparent;}
        .int-tip-card:hover{border-left:3px solid #e85d04 !important;transform:translateX(4px);}
        .int-topic-pill{transition:all .2s;}
        .int-topic-pill:hover{background:#1a3a6b !important;color:#fff !important;transform:translateY(-2px);}
        .int-topic-pill:hover span{color:#fff !important;}
        @media(max-width:900px){
          .int-hero-grid{grid-template-columns:1fr !important;}
          .int-content-grid{grid-template-columns:1fr !important;}
          .int-topics-grid{grid-template-columns:repeat(3,1fr) !important;}
          .int-daf-grid{grid-template-columns:1fr !important;}
        }
        @media(max-width:600px){
          .int-hero-h1{font-size:2rem !important;}
          .int-hero-btns{flex-direction:column !important;}
          .int-hero-btns a{width:100% !important;text-align:center;}
          .int-topics-grid{grid-template-columns:1fr 1fr !important;}
          .int-cta-btns{flex-direction:column !important;align-items:center;}
          .int-stats-grid{grid-template-columns:repeat(3,1fr) !important;}
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section style={{ background:"linear-gradient(135deg,#0a1628 0%,#1a3a6b 55%,#0d2444 100%)",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:0,right:0,width:380,height:380,borderRadius:"50%",background:"radial-gradient(circle,rgba(232,93,4,0.13),transparent)",transform:"translate(30%,-30%)",pointerEvents:"none" }}/>
        <div style={{ position:"absolute",bottom:0,left:0,width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,167,38,0.1),transparent)",transform:"translate(-40%,40%)",pointerEvents:"none" }}/>

        <div style={{ position:"relative",zIndex:1,maxWidth:1152,margin:"0 auto",padding:"48px 20px 0" }}>
          {/* breadcrumb */}
          <div className="int-fadeup" style={{ display:"flex",flexWrap:"wrap",gap:6,fontSize:13,color:"#93c5fd",marginBottom:28 }}>
            <a href="/" style={{ color:"#93c5fd",textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>Our Courses</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>Interview Discussions</span>
          </div>

          <div className="int-hero-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center",paddingBottom:48 }}>
            {/* left */}
            <div>
              <span className="int-fadeup int-d1" style={{ display:"inline-block",padding:"4px 14px",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",borderRadius:999,background:"rgba(232,93,4,0.2)",color:"#f4a726",border:"1px solid rgba(232,93,4,0.4)",marginBottom:16 }}>
                UPSC Personality Test
              </span>
              <h1 className="int-fadeup int-d2 int-hero-h1" style={{ fontFamily:"'Playfair Display',Georgia,serif",fontSize:"3rem",fontWeight:900,color:"#fff",lineHeight:1.15,margin:"0 0 20px" }}>
                Interview<br/><span style={{ color:"#f4a726" }}>Discussions</span>
              </h1>
              <p className="int-fadeup int-d3" style={{ color:"#bfdbfe",fontSize:16,lineHeight:1.75,margin:"0 0 28px" }}>
                The UPSC Personality Test is the final and most crucial stage of the Civil Services Examination. This 30-minute process can change your life and fulfil your dream of becoming a civil servant.
              </p>
              <div className="int-fadeup int-d4 int-hero-btns" style={{ display:"flex",flexWrap:"wrap",gap:12 }}>
                <a href="#int-enquire" className="int-btn" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",boxShadow:"0 4px 18px rgba(232,93,4,0.45)" }}>Enquire Now</a>
                <a href="#int-content" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,border:"1px solid #60a5fa",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none" }}>Know More</a>
              </div>
            </div>

            {/* hero image + stats card */}
            <div className="int-fadeup int-d3" style={{ display:"flex",flexDirection:"column",gap:20 }}>
              <div style={{ borderRadius:16,overflow:"hidden",boxShadow:"0 8px 32px rgba(0,0,0,0.35)",border:"1px solid rgba(255,255,255,0.12)" }}>
                <img
                  src="/assets/inter-image 1.png"
                  alt="UPSC Interview Coaching"
                  style={{ width:"100%",display:"block",objectFit:"cover" }}
                />
              </div>
              <div style={{ borderRadius:16,padding:"28px 24px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)" }}>
                <p style={{ color:"#93c5fd",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:20 }}>UPSC Interview At a Glance</p>
                <div className="int-stats-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20 }}>
                  {statsData.map(([n,l])=>(
                    <div key={l} style={{ textAlign:"center" }}>
                      <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:900,color:"#f4a726",margin:0 }}>{n}</p>
                      <p style={{ fontSize:10,color:"#93c5fd",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4 }}>{l}</p>
                    </div>
                  ))}
                </div>
                <hr style={{ border:"none",borderTop:"1px solid rgba(255,255,255,0.1)",marginBottom:20 }}/>
                <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                  {["Personality Assessment Training","DAF Analysis & Preparation","Mock Interview Sessions","Current Affairs Coverage","Body Language & Communication"].map(f=>(
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
      <section id="int-content" style={{ maxWidth:1152,margin:"0 auto",padding:"48px 20px" }}>

        {/* General Overview + Form */}
        <div className="int-content-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr",gap:32,marginBottom:56 }}>
          <div>
            <SectionTitle title="General Overview"/>
            <div style={{ display:"flex",flexDirection:"column",gap:14,color:"#374151",fontSize:15,lineHeight:1.8 }}>
              <p style={{ margin:0 }}>
                UPSC Personality Test/Interview is the <strong style={{ color:"#0a1628" }}>last and final stage</strong> of the civil services examination. The Personality Test is not a test of knowledge (they have already tested it in Mains and Prelims) but your <strong style={{ color:"#0a1628" }}>innate personality</strong>.
              </p>
              <p style={{ margin:0 }}>
                The process of the UPSC Interview lasts for about <strong style={{ color:"#0a1628" }}>30 minutes</strong> and carries <strong style={{ color:"#0a1628" }}>275 marks</strong> out of the total 2025 marks. This half an hour process can change your life and fulfill your dream of becoming a civil servant.
              </p>
              <p style={{ margin:0 }}>
                The final merit list is prepared based on marks scored in the mains examination and the Personality Test. A high score in the interview round can be a <strong style={{ color:"#0a1628" }}>huge benefit</strong> to the candidates and increase their rank and chances of getting better service.
              </p>
            </div>

            {/* marks highlight banner */}
            <div style={{ marginTop:24,borderRadius:12,padding:"18px 22px",background:"linear-gradient(135deg,#0a1628,#1a3a6b)",display:"flex",flexWrap:"wrap",gap:20,alignItems:"center",justifyContent:"space-around" }}>
              {[["275 Marks","Out of 2025 total"],["30 Minutes","Interview duration"],["Final Stage","After Mains exam"]].map(([h,s])=>(
                <div key={h} style={{ textAlign:"center" }}>
                  <p style={{ fontFamily:"'Playfair Display',serif",fontWeight:900,fontSize:"1.3rem",color:"#f4a726",margin:0 }}>{h}</p>
                  <p style={{ fontSize:11,color:"#93c5fd",margin:"4px 0 0" }}>{s}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry form */}
          <div id="int-enquire">
            <div style={{ borderRadius:16,overflow:"hidden",boxShadow:"0 8px 28px rgba(0,0,0,0.10)" }}>
              <div style={{ padding:"18px 20px",background:"linear-gradient(135deg,#0a1628,#1a3a6b)" }}>
                <div style={{ color:"#fbbf24",fontSize:16,marginBottom:6 }}>★★★★★</div>
                <p style={{ fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:"#fff",margin:0 }}>Expert Interview Coaching</p>
              </div>
              <div style={{ padding:20,background:"#fff",display:"flex",flexDirection:"column",gap:10 }}>
                <p style={{ fontSize:13,fontWeight:700,color:"#0a1628",margin:0 }}>Get Free Counselling</p>
                {["Your Full Name *","Phone Number *","Email Address *"].map(ph=>(
                  <input key={ph} className="int-input" placeholder={ph} style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#111",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}/>
                ))}
                <select className="int-input" style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#6b7280",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}>
                  <option value="">Select Course *</option>
                  <option>IAS / UPSC Interview</option><option>IPS Interview</option><option>IFS Interview</option><option>Other Civil Services</option>
                </select>
                <button className="int-btn" style={{ width:"100%",padding:"10px 0",borderRadius:8,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,border:"none",cursor:"pointer",fontFamily:"'Hind',sans-serif" }}>
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interview Showcase Image */}
        <div style={{ marginBottom:56,borderRadius:20,overflow:"hidden",boxShadow:"0 12px 40px rgba(10,22,40,0.18)",position:"relative" }}>
          <img
            src="/assets/inter-image 2.png"
            alt="UPSC Personality Test Coaching"
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
                Master the UPSC<br/>Personality Test
              </h2>
              <a href="#int-enquire" style={{
                display:"inline-block",padding:"10px 24px",borderRadius:8,
                background:"#e85d04",color:"#fff",fontWeight:700,
                fontSize:13,textDecoration:"none",
                boxShadow:"0 4px 14px rgba(232,93,4,0.45)",
              }}>Enquire Now</a>
            </div>
          </div>
        </div>

        {/* True Nature of Interview */}
        <Block title="Understanding the True Nature of the Interview">
          <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 16px" }}>
            The ultimate objective of conducting an interview is to determine the <strong style={{ color:"#0a1628" }}>suitability of the candidate's potential in administrative skills</strong>. The panel members are not there to test a candidate's knowledge but to assess a candidate's personality for Civil Service.
          </p>
          <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 20px" }}>
            They evoke different characteristics/traits of your personality through questions, counter-questions, hypothetical case studies, etc., and assess you based on your approaches during your response, presence of mind, body language, etc.
          </p>

          {/* assessment traits */}
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20 }}>
            {[
              { icon:"💬", label:"Response Approach" },
              { icon:"🧠", label:"Presence of Mind" },
              { icon:"🧍", label:"Body Language" },
              { icon:"🤝", label:"Social Adaptability" },
              { icon:"📌", label:"Hypothetical Case Studies" },
              { icon:"🎯", label:"Counter-Questions" },
            ].map((t,i)=>(
              <div key={i} style={{ display:"flex",alignItems:"center",gap:10,background:"#f5f8fd",borderRadius:8,padding:"10px 14px",border:"1px solid #dde8f8" }}>
                <span style={{ fontSize:"1.3rem" }}>{t.icon}</span>
                <span style={{ fontSize:13,color:"#0a1628",fontWeight:500 }}>{t.label}</span>
              </div>
            ))}
          </div>

          {/* positive mindset box */}
          <div style={{ background:"rgba(232,93,4,0.06)",border:"1px solid rgba(232,93,4,0.2)",borderRadius:10,padding:"14px 18px" }}>
            <p style={{ fontSize:14,color:"#374151",lineHeight:1.75,margin:0 }}>
              <strong style={{ color:"#e85d04" }}>Remember:</strong> Never think that board members are meant for eliminating you or to demean you. You should have a <strong style={{ color:"#0a1628" }}>positive mindset</strong> throughout the process.
            </p>
          </div>
        </Block>

        {/* Why Candidates Feel Uneasiness */}
        <Block title="Why Do Candidates Generally Feel Uneasy About UPSC Interview?">
          <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
            {uneasinessReasons.map((r,i)=>(
              <div key={i} style={{ display:"flex",gap:14,alignItems:"flex-start",background:"#f5f8fd",borderRadius:10,padding:"14px 18px",border:"1px solid #dde8f8" }}>
                <div style={{ width:28,height:28,borderRadius:"50%",background:"linear-gradient(135deg,#e85d04,#c94b00)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2 }}>
                  <span style={{ color:"#fff",fontSize:11,fontWeight:700 }}>{i+1}</span>
                </div>
                <p style={{ fontSize:14,color:"#374151",lineHeight:1.75,margin:0 }}>{r}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* Interview Preparation Strategy */}
        <Block title="Interview Preparation Strategy">
          <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 16px" }}>
            Aspirants should <strong style={{ color:"#0a1628" }}>not wait for the results</strong> of the mains examination to start their preparation for the Interview. They should start working on their personality as soon as possible.
          </p>
          <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 20px" }}>
            <strong style={{ color:"#0a1628" }}>Self-assessment is very important</strong> to prepare for the interview. Candidates should assess their strengths and weaknesses and should work upon them accordingly. Preparation for UPSC Interview should be comprehensive — most likely the questions are asked from the following topics only:
          </p>

          {/* topics pills */}
          <div className="int-topics-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:20 }}>
            {preparationTopics.map((t,i)=>(
              <div key={i} className="int-topic-pill" style={{ display:"flex",alignItems:"center",gap:10,background:"#fff",borderRadius:10,padding:"12px 16px",border:"1px solid #dde8f8",boxShadow:"0 2px 6px rgba(0,0,0,0.05)",cursor:"default" }}>
                <span style={{ fontSize:"1.4rem" }}>{t.icon}</span>
                <span style={{ fontSize:13,fontWeight:600,color:"#0a1628" }}>{t.label}</span>
              </div>
            ))}
          </div>

          <div style={{ background:"#fff8e1",borderLeft:"4px solid #f4a726",borderRadius:"0 8px 8px 0",padding:"12px 16px" }}>
            <p style={{ fontSize:13,color:"#555",lineHeight:1.75,margin:0 }}>
              <strong>Strategy Tip:</strong> Preparation for UPSC Interview should cover your Optional Subject, educational background, place of residence, reason to become an IAS/IPS officer, content written in the DAF, and current affairs thoroughly.
            </p>
          </div>
        </Block>

        {/* DAF Section */}
        <Block title="Importance of Mastering DAF in UPSC Interview Preparation">
          <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 16px" }}>
            Candidates who clear the prelims exam are required to fill up the <strong style={{ color:"#0a1628" }}>Detailed Application Form (DAF)</strong>. It is like your biodata which is shared with the interview board members and contains all your personal and professional information.
          </p>
          <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 16px" }}>
            Contents such as your place of birth, subjects in graduation, optional subject, details of the college, professional experience, interests, and hobbies are all mentioned in the DAF.
          </p>

          {/* DAF contents chips */}
          <div style={{ display:"flex",flexWrap:"wrap",gap:8,marginBottom:24 }}>
            {["Place of Birth","Graduation Subjects","Optional Subject","College Details","Professional Experience","Interests & Hobbies"].map(chip=>(
              <span key={chip} style={{ padding:"5px 14px",borderRadius:999,fontSize:12,fontWeight:600,background:"#eef3fc",border:"1px solid #c8d9f0",color:"#1a3a6b" }}>{chip}</span>
            ))}
          </div>

          <p style={{ color:"#374151",fontSize:15,lineHeight:1.8,margin:"0 0 20px" }}>
            Candidates are advised to take extra care while filling their DAF. It is very important to know each and every element of your DAF thoroughly as it gives panel members scope to ask questions about you. Here are a few tips:
          </p>

          {/* DAF Tips */}
          <div className="int-daf-grid" style={{ display:"grid",gridTemplateColumns:"1fr",gap:14 }}>
            {dafTips.map(tip=>(
              <div key={tip.num} className="int-tip-card" style={{ display:"flex",gap:18,padding:"20px 22px",background:"#f5f8fd",borderRadius:12,border:"1px solid #dde8f8",borderLeft:"3px solid transparent",alignItems:"flex-start" }}>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"2rem",fontWeight:900,color:"rgba(232,93,4,0.25)",flexShrink:0,lineHeight:1,minWidth:44 }}>{tip.num}</div>
                <div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1rem",fontWeight:700,color:"#0a1628",margin:"0 0 6px" }}>{tip.title}</h3>
                  <p style={{ fontSize:14,color:"#374151",lineHeight:1.75,margin:0 }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* Bottom CTA */}
        <div style={{ borderRadius:16,padding:"40px 24px",textAlign:"center",background:"linear-gradient(135deg,#e85d04,#c94b00)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:700,color:"#fff",margin:"0 0 10px" }}>
            Ace Your UPSC Interview with Expert Guidance
          </h3>
          <p style={{ color:"rgba(255,237,213,0.9)",fontSize:14,margin:"0 0 24px" }}>
            Join Vashishth IAS Academy, Ludhiana — for comprehensive Interview preparation and personality development
          </p>
          <div className="int-cta-btns" style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12 }}>
            <a href="#int-enquire" style={{ padding:"11px 32px",borderRadius:8,background:"#fff",color:"#e85d04",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>Enroll Now</a>
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
      <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.7rem",fontWeight:700,color:"#0a1628",margin:0 }}>{title}</h2>
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
