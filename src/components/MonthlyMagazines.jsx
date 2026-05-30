import { useState } from "react";

const magazines = [
  {
    id: 1,
    title: "Pratiyogita Darpan",
    month: "May 2026",
    category: "General Studies",
    description: "India's most trusted monthly magazine for civil services aspirants. Covers current affairs, GK, and exam-oriented content.",
    pages: 320,
    language: "Hindi / English",
    color: "#1a3a6b",
    badge: "Most Popular",
  },
  {
    id: 2,
    title: "Civil Services Chronicle",
    month: "May 2026",
    category: "UPSC Focused",
    description: "Comprehensive monthly magazine exclusively for UPSC aspirants covering prelims, mains, and interview preparation.",
    pages: 280,
    language: "English",
    color: "#e85d04",
    badge: "UPSC Focused",
  },
  {
    id: 3,
    title: "Competition WIZARD",
    month: "May 2026",
    category: "Competitive Exams",
    description: "Covers all major competitive exams — UPSC, SSC, Banking and State PSC exams with practice questions.",
    pages: 256,
    language: "English",
    color: "#0d7490",
    badge: "All Exams",
  },
  {
    id: 4,
    title: "Yojana",
    month: "May 2026",
    category: "Government Policy",
    description: "Published by Ministry of Information & Broadcasting. Essential reading for understanding government schemes and policies.",
    pages: 96,
    language: "Hindi / English",
    color: "#059669",
    badge: "Govt. Publication",
  },
  {
    id: 5,
    title: "Kurukshetra",
    month: "May 2026",
    category: "Rural Development",
    description: "Published by Ministry of Rural Development. Covers rural economy, agriculture, panchayati raj and social welfare.",
    pages: 80,
    language: "Hindi / English",
    color: "#7c3aed",
    badge: "Govt. Publication",
  },
  {
    id: 6,
    title: "Frontline",
    month: "May 2026",
    category: "National Affairs",
    description: "Fortnightly magazine from The Hindu group covering politics, economy, science, international affairs in depth.",
    pages: 112,
    language: "English",
    color: "#b45309",
    badge: "In-Depth Analysis",
  },
  {
    id: 7,
    title: "Civil Services Today",
    month: "May 2026",
    category: "UPSC Focused",
    description: "Dedicated to civil services preparation with subject-wise updates, model answers, and topper strategies.",
    pages: 200,
    language: "English",
    color: "#1d4ed8",
    badge: "Strategy Guide",
  },
  {
    id: 8,
    title: "Science Reporter",
    month: "May 2026",
    category: "Science & Tech",
    description: "Published by CSIR, covers latest developments in science and technology relevant to UPSC Science & Technology section.",
    pages: 72,
    language: "English",
    color: "#0f766e",
    badge: "CSIR Publication",
  },
];

const categories = ["All", "General Studies", "UPSC Focused", "Competitive Exams", "Government Policy", "Rural Development", "National Affairs", "Science & Tech"];

// SVG Icons
const BookIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="4" width="20" height="28" rx="2" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5"/>
    <rect x="8" y="4" width="4" height="28" rx="0" fill={color} fillOpacity="0.25"/>
    <path d="M10 11h10M10 16h10M10 21h6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 6l4 2v22l-4-2V6z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.2"/>
  </svg>
);

const PagesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="2" y="1" width="8" height="11" rx="1" stroke="#6b7280" strokeWidth="1.2" fill="none"/>
    <path d="M4 4h4M4 6.5h4M4 9h2.5" stroke="#6b7280" strokeWidth="1" strokeLinecap="round"/>
    <rect x="4" y="3" width="8" height="11" rx="1" stroke="#9ca3af" strokeWidth="1" fill="white" fillOpacity="0.8"/>
    <path d="M6 6h4M6 8.5h4M6 11h2.5" stroke="#9ca3af" strokeWidth="0.9" strokeLinecap="round"/>
  </svg>
);

const LanguageIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="#6b7280" strokeWidth="1.2" fill="none"/>
    <ellipse cx="7" cy="7" rx="2.5" ry="5.5" stroke="#6b7280" strokeWidth="1"/>
    <path d="M1.5 7h11M2 4.5h10M2 9.5h10" stroke="#6b7280" strokeWidth="0.9" strokeLinecap="round"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M7.5 2v8M4.5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 11.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="6.5" cy="6.5" r="4.5" stroke="#9ca3af" strokeWidth="1.5"/>
    <path d="M10 10l3.5 3.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="#6b7280" strokeWidth="1.2" fill="none"/>
    <path d="M1.5 6h11" stroke="#6b7280" strokeWidth="1"/>
    <path d="M4.5 1v3M9.5 1v3" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="4.5" cy="9" r="0.7" fill="#6b7280"/>
    <circle cx="7" cy="9" r="0.7" fill="#6b7280"/>
    <circle cx="9.5" cy="9" r="0.7" fill="#6b7280"/>
  </svg>
);

export default function MonthlyMagazines() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = magazines.filter(m => {
    const matchCat = activeCategory === "All" || m.category === activeCategory;
    const matchSearch = m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ fontFamily:"'Hind',sans-serif",background:"#f0f4f8",minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes mmFadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        .mm-fadeup{animation:mmFadeUp 0.55s ease forwards;}
        .mm-card{transition:transform .25s,box-shadow .25s;}
        .mm-card:hover{transform:translateY(-5px);box-shadow:0 16px 36px rgba(0,0,0,0.13) !important;}
        .mm-cat-btn{transition:all .18s;}
        .mm-cat-btn:hover{background:#1a3a6b !important;color:#fff !important;}
        .mm-dl-btn{transition:all .18s;}
        .mm-dl-btn:hover{opacity:.88;transform:scale(1.03);}
        .mm-search-input:focus{outline:none;border-color:#1a3a6b !important;box-shadow:0 0 0 3px rgba(26,58,107,0.1);}
        @media(max-width:900px){
          .mm-grid{grid-template-columns:repeat(2,1fr) !important;}
          .mm-cats{flex-wrap:wrap !important;}
        }
        @media(max-width:560px){
          .mm-grid{grid-template-columns:1fr !important;}
          .mm-hero-h1{font-size:1.6rem !important;}
          .mm-cats{gap:6px !important;}
          .mm-cat-btn{font-size:11px !important;padding:5px 10px !important;}
          .mm-controls{flex-direction:column !important;align-items:stretch !important;}
        }
      `}</style>

      {/* ── Header ── */}
      <div style={{ background:"linear-gradient(135deg,#0a1628,#1a3a6b)",padding:"28px 20px 32px" }}>
        <div style={{ maxWidth:1152,margin:"0 auto" }}>
          {/* breadcrumb */}
          <div style={{ display:"flex",flexWrap:"wrap",gap:6,fontSize:12,color:"#93c5fd",marginBottom:12 }}>
            <a href="/" style={{ color:"#93c5fd",textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>Daily Updates</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>Monthly Magazines</span>
          </div>
          <h1 className="mm-hero-h1" style={{ fontFamily:"'Playfair Display',serif",fontSize:"2rem",fontWeight:900,color:"#fff",margin:"0 0 8px" }}>
            Monthly Magazines
          </h1>
          <p style={{ color:"#bfdbfe",fontSize:14,margin:0,lineHeight:1.6 }}>
            Curated monthly magazines for UPSC, SSC, and State PSC preparation — updated every month.
          </p>
        </div>
      </div>

      <div style={{ maxWidth:1152,margin:"0 auto",padding:"28px 16px" }}>

        {/* ── Search + stats ── */}
        <div className="mm-controls" style={{ display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,marginBottom:24,flexWrap:"wrap" }}>
          {/* search */}
          <div style={{ position:"relative",flex:1,minWidth:200,maxWidth:360 }}>
            <div style={{ position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",pointerEvents:"none" }}>
              <SearchIcon/>
            </div>
            <input
              className="mm-search-input"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search magazines..."
              style={{ width:"100%",padding:"9px 12px 9px 34px",border:"1px solid #d1d5db",borderRadius:8,fontSize:13,color:"#374151",background:"#fff",boxSizing:"border-box",transition:"border-color .2s,box-shadow .2s" }}
            />
          </div>
          {/* count */}
          <p style={{ fontSize:13,color:"#6b7280",margin:0,flexShrink:0 }}>
            Showing <strong style={{ color:"#0a1628" }}>{filtered.length}</strong> of {magazines.length} magazines
          </p>
        </div>

        {/* ── Category filters ── */}
        <div className="mm-cats" style={{ display:"flex",gap:8,marginBottom:28,overflowX:"auto",paddingBottom:4 }}>
          {categories.map(cat => (
            <button
              key={cat}
              className="mm-cat-btn"
              onClick={() => setActiveCategory(cat)}
              style={{
                padding:"6px 14px",
                borderRadius:999,
                fontSize:12,
                fontWeight:600,
                border:"1px solid",
                cursor:"pointer",
                whiteSpace:"nowrap",
                flexShrink:0,
                background: activeCategory === cat ? "#1a3a6b" : "#fff",
                color: activeCategory === cat ? "#fff" : "#374151",
                borderColor: activeCategory === cat ? "#1a3a6b" : "#d1d5db",
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* ── Magazine Grid ── */}
        {filtered.length === 0 ? (
          <div style={{ textAlign:"center",padding:"60px 20px",color:"#6b7280",background:"#fff",borderRadius:12 }}>
            <p style={{ fontSize:15,margin:0 }}>No magazines found for "<strong>{search}</strong>"</p>
          </div>
        ) : (
          <div className="mm-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:18 }}>
            {filtered.map((mag, i) => (
              <div
                key={mag.id}
                className={`mm-card mm-fadeup`}
                style={{ background:"#fff",borderRadius:14,overflow:"hidden",boxShadow:"0 2px 10px rgba(0,0,0,0.07)",animationDelay:`${i*0.06}s`,opacity:0 }}
                onMouseEnter={() => setHoveredId(mag.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Cover area */}
                <div style={{
                  background:`linear-gradient(145deg, ${mag.color}22, ${mag.color}44)`,
                  borderBottom:`3px solid ${mag.color}`,
                  padding:"24px 20px",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  gap:10,
                  position:"relative",
                  minHeight:130,
                }}>
                  {/* Badge */}
                  <span style={{
                    position:"absolute",top:10,right:10,
                    padding:"2px 8px",borderRadius:999,
                    fontSize:9,fontWeight:700,
                    background:mag.color,color:"#fff",
                    letterSpacing:"0.04em",textTransform:"uppercase",
                  }}>{mag.badge}</span>

                  <BookIcon color={mag.color}/>

                  <div style={{ textAlign:"center" }}>
                    <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"1rem",fontWeight:700,color:mag.color,margin:"0 0 3px",lineHeight:1.3 }}>{mag.title}</p>
                    {/* month tag */}
                    <div style={{ display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:999,background:"rgba(255,255,255,0.7)",border:`1px solid ${mag.color}33` }}>
                      <CalendarIcon/>
                      <span style={{ fontSize:10,color:"#6b7280",fontWeight:600 }}>{mag.month}</span>
                    </div>
                  </div>
                </div>

                {/* Info area */}
                <div style={{ padding:"14px 16px" }}>
                  {/* category */}
                  <span style={{ display:"inline-block",padding:"2px 10px",borderRadius:999,fontSize:10,fontWeight:700,background:`${mag.color}15`,color:mag.color,marginBottom:8 }}>
                    {mag.category}
                  </span>

                  <p style={{ fontSize:12,color:"#6b7280",lineHeight:1.6,margin:"0 0 12px" }}>{mag.description}</p>

                  {/* meta */}
                  <div style={{ display:"flex",flexDirection:"column",gap:5,marginBottom:14 }}>
                    <div style={{ display:"flex",alignItems:"center",gap:6 }}>
                      <PagesIcon/>
                      <span style={{ fontSize:11,color:"#6b7280" }}>{mag.pages} pages</span>
                    </div>
                    <div style={{ display:"flex",alignItems:"center",gap:6 }}>
                      <LanguageIcon/>
                      <span style={{ fontSize:11,color:"#6b7280" }}>{mag.language}</span>
                    </div>
                  </div>

                  {/* download btn */}
                  <button
                    className="mm-dl-btn"
                    style={{
                      width:"100%",padding:"8px 0",borderRadius:8,
                      background:mag.color,color:"#fff",
                      fontWeight:700,fontSize:12,border:"none",cursor:"pointer",
                      display:"flex",alignItems:"center",justifyContent:"center",gap:6,
                      fontFamily:"'Hind',sans-serif",
                      transition:"opacity .18s,transform .18s",
                    }}>
                    <DownloadIcon/> Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Note ── */}
        <div style={{ marginTop:28,background:"#fff8e1",borderLeft:"4px solid #f4a726",borderRadius:"0 8px 8px 0",padding:"12px 16px" }}>
          <p style={{ fontSize:13,color:"#555",margin:0,lineHeight:1.7 }}>
            <strong>Note:</strong> These magazines are recommended for UPSC Civil Services preparation. New editions are added every month. Click <strong>Download PDF</strong> to access the latest issue.
          </p>
        </div>

        {/* ── CTA ── */}
        <div style={{ marginTop:28,borderRadius:16,padding:"32px 24px",textAlign:"center",background:"linear-gradient(135deg,#e85d04,#c94b00)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",fontWeight:700,color:"#fff",margin:"0 0 8px" }}>
            Need Guidance on Which Magazines to Read?
          </h3>
          <p style={{ color:"rgba(255,237,213,0.9)",fontSize:13,margin:"0 0 18px" }}>
            Our faculty at Vashishth IAS Academy, Ludhiana will guide you on subject-wise reading strategy.
          </p>
          <a href="tel:+919464031200" style={{ display:"inline-block",padding:"10px 28px",borderRadius:8,background:"#fff",color:"#e85d04",fontWeight:700,fontSize:13,textDecoration:"none",fontFamily:"'Hind',sans-serif" }}>
            +91-94640-31200
          </a>
        </div>

      </div>
    </div>
  );
}
