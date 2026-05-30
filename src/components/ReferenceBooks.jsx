const prelimsBooks = [
  { num:"1", subject:"Indian History", books:"India's Struggle for Independence by Bipin Chandra; NCERT Books (XI & XII)" },
  { num:"2", subject:"Geography", books:"Spectrum" },
  { num:"3", subject:"Indian Polity", books:"Constitution of India by Bakshi" },
  { num:"4", subject:"Indian Economy", books:"Plus One, Plus Two Books, Pratiyogita Darpan" },
  { num:"5", subject:"General Science", books:"Tata McGraw Hill Guide" },
  { num:"6", subject:"Mental Ability", books:"Quantitative Aptitude by R.S. Aggarwal" },
  { num:"7", subject:"Current Affairs", books:"Some magazines and Newspapers" },
];

const currentAffairsSources = [
  "The Hindu / The Times of India",
  "Frontline",
  "Civil Service Chronicle",
  "Pratiyogita Darpan",
  "Competition WIZARD",
  "Civil Services Today",
  "Guides: Tata McGraw Hill, Spectrum, Unique",
];

const subjectBooks = [
  {
    subject: "Indian History & Culture",
    color: "#1a3a6b",
    icon: "🏛️",
    books: [
      "NCERT (+2 level) — Ancient India, Medieval India, Modern India",
      "Publication Division: Gazetteer of India (Vol 2 History & Culture)",
      "Gandhi Nehru Tagore & Ambedkar — Gopal Krishna",
      "Bipin Chandra – Modern India",
      "A.C. Banerjee – History of Modern India",
      "Raghavan Aiyer — Mahatma Gandhi",
    ],
  },
  {
    subject: "Social and National Issues",
    color: "#e85d04",
    icon: "🤝",
    books: [
      "Social Problems – Ram Ahuja",
      "Social Welfare Magazine – Published by Ministry of Social Welfare",
      "Yojana / Kurukshetra",
      "IIPa Journal",
    ],
  },
  {
    subject: "Indian Economy",
    color: "#0d7490",
    icon: "📈",
    books: [
      "NCERT (+1 level) — Evolution of Indian Economy (I.C. Dhingra)",
      "Mishra & Puri or Dutt & Sundaram – Indian Economy",
      "Economic Survey",
      "Economic Times, Business Standard",
      "Yojana",
    ],
  },
  {
    subject: "Geography",
    color: "#059669",
    icon: "🌏",
    books: [
      "NCERT: Physical Geography of India for X–XII Std",
      "A Good School Atlas",
      "Sharma & Cotinho: Economic and Commercial Geography of India",
      "Khullar: India – A Comprehensive Geography",
      "Charles Farro: General Principles of World Geography",
      "Charles Farro: Monsoon Asia",
      "Reports by Centre for Science and Environment & Tata Energy Research Institute",
      "National Journals: Kurukshetra, Yojana, Down to Earth",
    ],
  },
  {
    subject: "Indian Polity",
    color: "#7c3aed",
    icon: "⚖️",
    books: [
      "NCERT (+1 level) — Indian Political System",
      "N.L. Madan: Bhartiya Rajya Vyavastha",
      "D.D. Basu — Indian Constitution",
      "Kashyap — Constitution of India",
      "Subhash C. Kashyap: Our Parliament (Publication Division)",
      "P.M. Bakshi — Indian Constitution",
      "Our Constitution: Subhash C. Kashyap",
      "Perspective on Constitution: S.C. Kashyap",
      "Frontline Magazine, IIPa Journal",
    ],
  },
  {
    subject: "Statistics",
    color: "#b45309",
    icon: "📊",
    books: [
      "NCERT (+1 level) Elementary Statistics",
      "S.C. Gupta: Statistical Methods",
    ],
  },
  {
    subject: "India and the World",
    color: "#1d4ed8",
    icon: "🌐",
    books: [
      "Journal of Peace Studies",
      "World Focus",
      "Strategic Analysis",
      "South Asian Journal",
    ],
  },
  {
    subject: "Science & Technology",
    color: "#0f766e",
    icon: "🔬",
    books: [
      "NCERT (10th level): Science; (+2 level): Biology",
      "Popular Science Series (CSIR)",
      "Reports from the Ministry of Science and Technology",
      "Yojana",
      "Science Reporter",
      "Science and Technology in India – Spectrum",
    ],
  },
];

const otherBooks = [
  "India's Latest (Annual Reference)",
  "One Competitive Magazine of your choice",
  "Guides like Tata McGraw Hill, Spectrum, and Unique — for General Reference",
  "The Pearson General Studies Manual",
];

export default function ReferenceBooks() {
  return (
    <div style={{ fontFamily:"'Hind',sans-serif",background:"#f0f4f8",minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes rbFadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        .rb-fadeup{animation:rbFadeUp 0.65s ease forwards;}
        .rb-d1{animation-delay:.1s;opacity:0}.rb-d2{animation-delay:.25s;opacity:0}.rb-d3{animation-delay:.4s;opacity:0}.rb-d4{animation-delay:.55s;opacity:0}
        .rb-btn{transition:opacity .2s,transform .2s;}.rb-btn:hover{opacity:.88;transform:scale(1.03);}
        .rb-input:focus{outline:none;border-color:#e85d04 !important;}
        .rb-book-card{transition:transform .25s,box-shadow .25s,border-top .25s;}
        .rb-book-card:hover{transform:translateY(-4px);box-shadow:0 14px 32px rgba(0,0,0,0.11) !important;}
        .rb-tr:hover td{background:#eef3fc !important;}
        .rb-ca-pill{transition:all .2s;}
        .rb-ca-pill:hover{background:#1a3a6b !important;color:#fff !important;}
        @media(max-width:900px){
          .rb-hero-grid{grid-template-columns:1fr !important;}
          .rb-content-grid{grid-template-columns:1fr !important;}
          .rb-books-grid{grid-template-columns:1fr 1fr !important;}
          .rb-other-grid{grid-template-columns:1fr 1fr !important;}
        }
        @media(max-width:600px){
          .rb-hero-h1{font-size:2rem !important;}
          .rb-hero-btns{flex-direction:column !important;}
          .rb-hero-btns a{width:100% !important;text-align:center;}
          .rb-books-grid{grid-template-columns:1fr !important;}
          .rb-other-grid{grid-template-columns:1fr !important;}
          .rb-ca-grid{grid-template-columns:1fr 1fr !important;}
          .rb-cta-btns{flex-direction:column !important;align-items:center;}
          .rb-table-wrap{overflow-x:auto;}
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section style={{ background:"linear-gradient(135deg,#0a1628 0%,#1a3a6b 55%,#0d2444 100%)",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:0,right:0,width:380,height:380,borderRadius:"50%",background:"radial-gradient(circle,rgba(232,93,4,0.13),transparent)",transform:"translate(30%,-30%)",pointerEvents:"none" }}/>
        <div style={{ position:"absolute",bottom:0,left:0,width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,167,38,0.1),transparent)",transform:"translate(-40%,40%)",pointerEvents:"none" }}/>

        <div style={{ position:"relative",zIndex:1,maxWidth:1152,margin:"0 auto",padding:"48px 20px 0" }}>
          {/* breadcrumb */}
          <div className="rb-fadeup" style={{ display:"flex",flexWrap:"wrap",gap:6,fontSize:13,color:"#93c5fd",marginBottom:28 }}>
            <a href="/" style={{ color:"#93c5fd",textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>How to Prepare</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>Reference Books</span>
          </div>

          <div className="rb-hero-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center",paddingBottom:48 }}>
            <div>
              <span className="rb-fadeup rb-d1" style={{ display:"inline-block",padding:"4px 14px",fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",borderRadius:999,background:"rgba(232,93,4,0.2)",color:"#f4a726",border:"1px solid rgba(232,93,4,0.4)",marginBottom:16 }}>
                How to Prepare
              </span>
              <h1 className="rb-fadeup rb-d2 rb-hero-h1" style={{ fontFamily:"'Playfair Display',Georgia,serif",fontSize:"3rem",fontWeight:900,color:"#fff",lineHeight:1.15,margin:"0 0 20px" }}>
                Reference<br/><span style={{ color:"#f4a726" }}>Books</span>
              </h1>
              <p className="rb-fadeup rb-d3" style={{ color:"#bfdbfe",fontSize:16,lineHeight:1.75,margin:"0 0 28px" }}>
                A curated list of the best reference books for IAS General Studies — Preliminary and Mains Examination. IAS Academy in Ludhiana — Vashishth IAS Academy.
              </p>
              <div className="rb-fadeup rb-d4 rb-hero-btns" style={{ display:"flex",flexWrap:"wrap",gap:12 }}>
                <a href="#rb-enquire" className="rb-btn" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",boxShadow:"0 4px 18px rgba(232,93,4,0.45)" }}>Enquire Now</a>
                <a href="#rb-content" style={{ display:"inline-block",padding:"11px 26px",borderRadius:6,border:"1px solid #60a5fa",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none" }}>View Books</a>
              </div>
            </div>

            {/* stats card */}
            <div className="rb-fadeup rb-d3">
              <div style={{ borderRadius:16,padding:"28px 24px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)" }}>
                <p style={{ color:"#93c5fd",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:20 }}>Books At a Glance</p>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20 }}>
                  {[["8+","Subjects"],["40+","Books"],["100%","UPSC Aligned"]].map(([n,l])=>(
                    <div key={l} style={{ textAlign:"center" }}>
                      <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:900,color:"#f4a726",margin:0 }}>{n}</p>
                      <p style={{ fontSize:10,color:"#93c5fd",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4 }}>{l}</p>
                    </div>
                  ))}
                </div>
                <hr style={{ border:"none",borderTop:"1px solid rgba(255,255,255,0.1)",marginBottom:20 }}/>
                <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                  {["Prelims & Mains Coverage","NCERT Foundation Books","Standard Reference Books","Current Affairs Sources","Subject-wise Organisation"].map(f=>(
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
      <section id="rb-content" style={{ maxWidth:1152,margin:"0 auto",padding:"48px 20px" }}>

        {/* Prelims Table + Form */}
        <div className="rb-content-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr",gap:32,marginBottom:56 }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
              <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
              <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.7rem",fontWeight:700,color:"#0a1628",margin:0 }}>Reference Books for IAS GS Preliminary Examination</h2>
            </div>
            <div className="rb-table-wrap">
              <table style={{ width:"100%",borderCollapse:"collapse",minWidth:400 }}>
                <thead>
                  <tr>
                    <th style={{ background:"#1a3a6b",color:"#fff",padding:"10px 14px",textAlign:"center",fontSize:13,fontWeight:700,fontFamily:"'Hind',sans-serif",width:50 }}>#</th>
                    <th style={{ background:"#1a3a6b",color:"#fff",padding:"10px 14px",textAlign:"left",fontSize:13,fontWeight:700,fontFamily:"'Hind',sans-serif",width:160 }}>Subject</th>
                    <th style={{ background:"#1a3a6b",color:"#fff",padding:"10px 14px",textAlign:"left",fontSize:13,fontWeight:700,fontFamily:"'Hind',sans-serif" }}>Recommended Books</th>
                  </tr>
                </thead>
                <tbody>
                  {prelimsBooks.map((r,i)=>(
                    <tr key={i} className="rb-tr">
                      <td style={{ padding:"10px 14px",textAlign:"center",fontSize:13,fontWeight:700,color:"#e85d04",borderBottom:"1px solid #e8eef7",background:i%2===0?"#fff":"#f5f8fd",fontFamily:"'Hind',sans-serif" }}>{r.num}</td>
                      <td style={{ padding:"10px 14px",fontSize:13,fontWeight:600,color:"#0a1628",borderBottom:"1px solid #e8eef7",background:i%2===0?"#fff":"#f5f8fd",fontFamily:"'Hind',sans-serif",verticalAlign:"top" }}>{r.subject}</td>
                      <td style={{ padding:"10px 14px",fontSize:13,color:"#374151",borderBottom:"1px solid #e8eef7",background:i%2===0?"#fff":"#f5f8fd",fontFamily:"'Hind',sans-serif",lineHeight:1.6,verticalAlign:"top" }}>{r.books}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Current Affairs Sources */}
            <div style={{ marginTop:20,background:"#fff",borderRadius:12,padding:"18px 20px",boxShadow:"0 2px 10px rgba(0,0,0,0.07)" }}>
              <p style={{ fontSize:13,fontWeight:700,color:"#0a1628",margin:"0 0 12px" }}>Current Affairs Sources:</p>
              <div className="rb-ca-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8 }}>
                {currentAffairsSources.map((s,i)=>(
                  <div key={i} className="rb-ca-pill" style={{ padding:"7px 12px",borderRadius:8,background:"#f0f4f8",border:"1px solid #dde8f8",fontSize:12,color:"#1a3a6b",fontWeight:500,cursor:"default",transition:"all .2s" }}>{s}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div id="rb-enquire">
            <div style={{ borderRadius:16,overflow:"hidden",boxShadow:"0 8px 28px rgba(0,0,0,0.10)" }}>
              <div style={{ padding:"18px 20px",background:"linear-gradient(135deg,#0a1628,#1a3a6b)" }}>
                <div style={{ color:"#fbbf24",fontSize:16,marginBottom:6 }}>★★★★★</div>
                <p style={{ fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:"#fff",margin:0 }}>Best IAS Coaching in Ludhiana</p>
              </div>
              <div style={{ padding:20,background:"#fff",display:"flex",flexDirection:"column",gap:10 }}>
                <p style={{ fontSize:13,fontWeight:700,color:"#0a1628",margin:0 }}>Get Free Counselling</p>
                {["Your Full Name *","Phone Number *","Email Address *"].map(ph=>(
                  <input key={ph} className="rb-input" placeholder={ph} style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#111",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}/>
                ))}
                <select className="rb-input" style={{ width:"100%",border:"1px solid #e5e7eb",borderRadius:8,padding:"9px 14px",fontSize:13,color:"#6b7280",fontFamily:"'Hind',sans-serif",background:"#fff",boxSizing:"border-box" }}>
                  <option value="">Select Course *</option>
                  <option>IAS / UPSC CSE</option><option>PPSC / PCS</option><option>NDA</option><option>CDS</option><option>SSC</option>
                </select>
                <button className="rb-btn" style={{ width:"100%",padding:"10px 0",borderRadius:8,background:"#e85d04",color:"#fff",fontWeight:700,fontSize:14,border:"none",cursor:"pointer",fontFamily:"'Hind',sans-serif" }}>
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subject-wise Books */}
        <div style={{ marginBottom:56 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24 }}>
            <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>Subject-wise Reference Books</h2>
          </div>
          <div className="rb-books-grid" style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16 }}>
            {subjectBooks.map((s,i)=>(
              <div key={i} className="rb-book-card" style={{ background:"#fff",borderRadius:12,overflow:"hidden",boxShadow:"0 2px 10px rgba(0,0,0,0.07)",borderTop:`3px solid ${s.color}` }}>
                {/* header */}
                <div style={{ padding:"14px 18px",background:`${s.color}12`,borderBottom:`1px solid ${s.color}22`,display:"flex",alignItems:"center",gap:10 }}>
                  <span style={{ fontSize:"1.3rem" }}>{s.icon}</span>
                  <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1rem",fontWeight:700,color:s.color,margin:0 }}>{s.subject}</h3>
                </div>
                {/* books list */}
                <div style={{ padding:"14px 18px" }}>
                  <ul style={{ listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8 }}>
                    {s.books.map((b,j)=>(
                      <li key={j} style={{ display:"flex",gap:8,alignItems:"flex-start",fontSize:13,color:"#374151",lineHeight:1.6 }}>
                        <span style={{ width:6,height:6,borderRadius:"50%",background:s.color,flexShrink:0,marginTop:6,display:"inline-block" }}/>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Books */}
        <div style={{ marginBottom:56 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
            <div style={{ width:36,height:4,borderRadius:4,background:"#e85d04",flexShrink:0 }}/>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,color:"#0a1628",margin:0 }}>Other Books for General Studies</h2>
          </div>
          <div style={{ background:"#fff",borderRadius:14,padding:"24px 22px",boxShadow:"0 2px 12px rgba(0,0,0,0.07)" }}>
            <p style={{ fontSize:14,color:"#6b7280",margin:"0 0 16px" }}>IAS Academy in Ludhiana — additional recommended references:</p>
            <div className="rb-other-grid" style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12 }}>
              {otherBooks.map((b,i)=>(
                <div key={i} style={{ display:"flex",gap:12,alignItems:"flex-start",background:"#f5f8fd",borderRadius:10,padding:"14px 16px",border:"1px solid #dde8f8" }}>
                  <div style={{ width:26,height:26,borderRadius:"50%",background:"#1a3a6b",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1 }}>
                    <span style={{ color:"#f4a726",fontSize:11,fontWeight:700 }}>{i+1}</span>
                  </div>
                  <p style={{ fontSize:14,color:"#374151",lineHeight:1.7,margin:0 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ borderRadius:16,padding:"40px 24px",textAlign:"center",background:"linear-gradient(135deg,#e85d04,#c94b00)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",fontWeight:700,color:"#fff",margin:"0 0 10px" }}>
            Start Your IAS Preparation with the Right Books
          </h3>
          <p style={{ color:"rgba(255,237,213,0.9)",fontSize:14,margin:"0 0 24px" }}>
            Join the Best IAS Coaching in Ludhiana — Vashishth IAS Academy
          </p>
          <div className="rb-cta-btns" style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12 }}>
            <a href="#rb-enquire" style={{ padding:"11px 32px",borderRadius:8,background:"#fff",color:"#e85d04",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>Enroll Now</a>
            <a href="tel:+919464031200" style={{ padding:"11px 32px",borderRadius:8,border:"1px solid rgba(255,255,255,0.5)",color:"#fff",fontWeight:700,fontSize:14,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>+91-94640-31200</a>
          </div>
        </div>

      </section>
    </div>
  );
}
