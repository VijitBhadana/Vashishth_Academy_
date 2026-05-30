import { useState } from "react";

const videoSets = [
  {
    setTitle: "Set 1 — Algebra & Number Theory",
    setColor: "#1a3a6b",
    videos: [
      { id: "raqsrmkhQOU", title: "Algebra Fundamentals for UPSC", desc: "Core algebraic concepts and shortcuts essential for NDA & CDS mathematics paper." },
      { id: "qSResGaqTKY", title: "Number System & Properties", desc: "Complete number theory — types, divisibility rules, HCF, LCM with practice problems." },
      { id: "bVE70gfwjiA", title: "Quadratic Equations Mastery", desc: "Solving quadratic equations using factorisation, formula and graphical methods." },
    ],
  },
  {
    setTitle: "Set 2 — Geometry & Mensuration",
    setColor: "#e85d04",
    videos: [
      { id: "Wc6FjpWcbbA", title: "2D Geometry & Coordinate System", desc: "Lines, circles, parabolas, ellipse — analytical geometry for competitive exams." },
      { id: "4tQ87PooQpM", title: "3D Geometry & Vectors", desc: "Three-dimensional coordinate geometry, direction cosines, planes and lines in space." },
      { id: "6JusHDl_H64", title: "Mensuration — Area & Volume", desc: "Area and volume of 2D & 3D figures with shortcut formulas for quick calculations." },
    ],
  },
  {
    setTitle: "Set 3 — Calculus & Statistics",
    setColor: "#0d7490",
    videos: [
      { id: "AMW2BdHCqks", title: "Differential Calculus Explained", desc: "Limits, continuity, differentiation rules and applications for UPSC Math." },
      { id: "4rDVaGwoNZI", title: "Integral Calculus & Applications", desc: "Integration techniques — substitution, parts, definite integrals and area under curves." },
      { id: "LESaKUNY2Kc", title: "Statistics & Probability", desc: "Mean, median, mode, probability theorems and distributions — complete revision." },
    ],
  },
];

const allVideos = videoSets.flatMap(s => s.videos.map(v => ({ ...v, setColor: s.setColor, setTitle: s.setTitle })));

// ── SVG Icons ──
const PlayIcon = ({ size = 20, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5"/>
    <path d="M10 8.5l6 3.5-6 3.5V8.5z" fill={color}/>
  </svg>
);

const VideoIcon = ({ color = "#1a3a6b" }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="6" width="18" height="16" rx="3" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5"/>
    <path d="M20 10.5l5-3v13l-5-3v-7z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="11" cy="14" r="3.5" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.2"/>
    <path d="M9.5 13l3 1.5-3 1.5V13z" fill={color}/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="6.5" cy="6.5" r="4.5" stroke="#9ca3af" strokeWidth="1.5"/>
    <path d="M10 10l3.5 3.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 5l10 10M15 5L5 15" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const GridIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1.5" fill={active ? "#1a3a6b" : "none"} stroke={active ? "#1a3a6b" : "#9ca3af"} strokeWidth="1.4"/>
    <rect x="11" y="1" width="6" height="6" rx="1.5" fill={active ? "#1a3a6b" : "none"} stroke={active ? "#1a3a6b" : "#9ca3af"} strokeWidth="1.4"/>
    <rect x="1" y="11" width="6" height="6" rx="1.5" fill={active ? "#1a3a6b" : "none"} stroke={active ? "#1a3a6b" : "#9ca3af"} strokeWidth="1.4"/>
    <rect x="11" y="11" width="6" height="6" rx="1.5" fill={active ? "#1a3a6b" : "none"} stroke={active ? "#1a3a6b" : "#9ca3af"} strokeWidth="1.4"/>
  </svg>
);

const ListIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="6" y="3" width="11" height="2.5" rx="1.25" fill={active ? "#1a3a6b" : "#9ca3af"}/>
    <rect x="6" y="8" width="11" height="2.5" rx="1.25" fill={active ? "#1a3a6b" : "#9ca3af"}/>
    <rect x="6" y="13" width="11" height="2.5" rx="1.25" fill={active ? "#1a3a6b" : "#9ca3af"}/>
    <circle cx="2.5" cy="4.25" r="1.5" fill={active ? "#1a3a6b" : "#9ca3af"}/>
    <circle cx="2.5" cy="9.25" r="1.5" fill={active ? "#1a3a6b" : "#9ca3af"}/>
    <circle cx="2.5" cy="14.25" r="1.5" fill={active ? "#1a3a6b" : "#9ca3af"}/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="4" fill="#FF0000"/>
    <path d="M13.5 6.8a1.5 1.5 0 00-1.06-1.06C11.5 5.5 9 5.5 9 5.5s-2.5 0-3.44.24A1.5 1.5 0 004.5 6.8 15.7 15.7 0 004.25 9a15.7 15.7 0 00.25 2.2 1.5 1.5 0 001.06 1.06C6.5 12.5 9 12.5 9 12.5s2.5 0 3.44-.24a1.5 1.5 0 001.06-1.06A15.7 15.7 0 0013.75 9a15.7 15.7 0 00-.25-2.2z" fill="white"/>
    <path d="M7.75 10.75V7.25L10.75 9l-3 1.75z" fill="#FF0000"/>
  </svg>
);

function VideoCard({ video, layout, onPlay, color }) {
  const [hovered, setHovered] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  if (layout === "list") {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display:"flex",gap:16,background:"#fff",borderRadius:12,
          overflow:"hidden",boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.07)",
          transition:"box-shadow .25s,transform .25s",
          transform: hovered ? "translateX(4px)" : "none",
          cursor:"pointer",borderLeft:`3px solid ${color}`,
        }}
        onClick={() => onPlay(video)}
      >
        {/* thumb */}
        <div style={{ position:"relative",width:160,minWidth:160,flexShrink:0,background:"#000" }}>
          <img src={thumb} alt={video.title} style={{ width:"100%",height:"100%",objectFit:"cover",display:"block",opacity: hovered ? 0.75 : 1,transition:"opacity .2s" }}
            onError={e => { e.target.style.display="none"; }}/>
          <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center" }}>
            <PlayIcon size={36} color="#fff"/>
          </div>
        </div>
        <div style={{ padding:"14px 16px 14px 0",display:"flex",flexDirection:"column",justifyContent:"center",flex:1,minWidth:0 }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"0.95rem",fontWeight:700,color:"#0a1628",margin:"0 0 6px",lineHeight:1.4 }}>{video.title}</h3>
          <p style={{ fontSize:12,color:"#6b7280",lineHeight:1.6,margin:"0 0 10px" }}>{video.desc}</p>
          <div style={{ display:"flex",alignItems:"center",gap:6 }}>
            <YoutubeIcon/>
            <span style={{ fontSize:11,color:"#FF0000",fontWeight:600 }}>Watch on YouTube</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:"#fff",borderRadius:12,overflow:"hidden",cursor:"pointer",
        boxShadow: hovered ? "0 14px 32px rgba(0,0,0,0.13)" : "0 2px 8px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-5px)" : "none",
        transition:"box-shadow .25s,transform .25s",
      }}
      onClick={() => onPlay(video)}
    >
      {/* thumbnail */}
      <div style={{ position:"relative",paddingTop:"56.25%",background:"#000",overflow:"hidden" }}>
        <img src={thumb} alt={video.title}
          style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity: hovered ? 0.75 : 1,transition:"opacity .2s,transform .3s",transform: hovered ? "scale(1.04)" : "none" }}
          onError={e => { e.target.style.background="#1a3a6b"; }}/>
        {/* overlay */}
        <div style={{ position:"absolute",inset:0,background: hovered ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)",transition:"background .2s",display:"flex",alignItems:"center",justifyContent:"center" }}>
          <div style={{ width:52,height:52,borderRadius:"50%",background:"rgba(255,255,255,0.9)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.3)",transform: hovered ? "scale(1.1)" : "scale(1)",transition:"transform .2s" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5l9 5-9 5V5z" fill="#1a3a6b"/>
            </svg>
          </div>
        </div>
        {/* top badge */}
        <div style={{ position:"absolute",top:8,left:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.7)",borderRadius:999,padding:"3px 8px" }}>
          <YoutubeIcon/>
          <span style={{ fontSize:9,color:"#fff",fontWeight:700,letterSpacing:"0.04em" }}>YOUTUBE</span>
        </div>
      </div>
      {/* info */}
      <div style={{ padding:"14px 16px" }}>
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:8 }}>
          <VideoIcon color={color}/>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"0.9rem",fontWeight:700,color:"#0a1628",margin:0,lineHeight:1.35,flex:1 }}>{video.title}</h3>
        </div>
        <p style={{ fontSize:12,color:"#6b7280",lineHeight:1.6,margin:"0 0 10px" }}>{video.desc}</p>
        <div style={{ display:"inline-flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:999,background:`${color}15`,border:`1px solid ${color}30` }}>
          <PlayIcon size={12} color={color}/>
          <span style={{ fontSize:10,color:color,fontWeight:700 }}>Watch Now</span>
        </div>
      </div>
    </div>
  );
}

export default function MathTopicVideos() {
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState("grid");
  const [activeSet, setActiveSet] = useState("All");
  const [playing, setPlaying] = useState(null);

  const setFilters = ["All", ...videoSets.map(s => s.setTitle)];

  const filtered = allVideos.filter(v => {
    const matchSet = activeSet === "All" || v.setTitle === activeSet;
    const matchSearch = v.title.toLowerCase().includes(search.toLowerCase()) || v.desc.toLowerCase().includes(search.toLowerCase());
    return matchSet && matchSearch;
  });

  const handlePlay = (video) => setPlaying(video);
  const closeModal = () => setPlaying(null);

  return (
    <div style={{ fontFamily:"'Hind',sans-serif",background:"#f0f4f8",minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        .mtv-input:focus{outline:none;border-color:#1a3a6b !important;box-shadow:0 0 0 3px rgba(26,58,107,0.1);}
        .mtv-filter-btn{transition:all .15s;cursor:pointer;}
        .mtv-filter-btn:hover{background:#1a3a6b !important;color:#fff !important;border-color:#1a3a6b !important;}
        .mtv-layout-btn{transition:all .15s;cursor:pointer;}
        .mtv-layout-btn:hover{background:#f0f4f8 !important;}
        .mtv-modal-overlay{animation:mtvFadeIn .2s ease;}
        @keyframes mtvFadeIn{from{opacity:0}to{opacity:1}}
        @media(max-width:900px){
          .mtv-grid{grid-template-columns:repeat(2,1fr) !important;}
        }
        @media(max-width:560px){
          .mtv-grid{grid-template-columns:1fr !important;}
          .mtv-hero-h1{font-size:1.6rem !important;}
          .mtv-controls{flex-direction:column !important;align-items:stretch !important;}
          .mtv-filters{flex-wrap:wrap !important;}
          .mtv-filter-btn{font-size:10px !important;padding:4px 10px !important;}
          .mtv-list-card{flex-direction:column !important;}
          .mtv-list-thumb{width:100% !important;min-width:unset !important;height:180px !important;}
        }
      `}</style>

      {/* ── Header ── */}
      <div style={{ background:"linear-gradient(135deg,#0a1628,#1a3a6b)",padding:"28px 20px 36px" }}>
        <div style={{ maxWidth:1152,margin:"0 auto" }}>
          <div style={{ display:"flex",flexWrap:"wrap",gap:6,fontSize:12,color:"#93c5fd",marginBottom:12 }}>
            <a href="/" style={{ color:"#93c5fd",textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>Media</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>Math Topic Videos</span>
          </div>
          <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:12 }}>
            <div>
              <h1 className="mtv-hero-h1" style={{ fontFamily:"'Playfair Display',serif",fontSize:"2rem",fontWeight:900,color:"#fff",margin:"0 0 6px" }}>
                Math Topic Videos
              </h1>
              <p style={{ color:"#bfdbfe",fontSize:14,margin:0 }}>
                9 expert-curated math lectures across 3 topic sets — for NDA, CDS & UPSC preparation.
              </p>
            </div>
            {/* stats */}
            <div style={{ display:"flex",gap:20 }}>
              {[["9","Videos"],["3","Sets"],["Free","Access"]].map(([n,l])=>(
                <div key={l} style={{ textAlign:"center" }}>
                  <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",fontWeight:900,color:"#f4a726",margin:0 }}>{n}</p>
                  <p style={{ fontSize:10,color:"#93c5fd",textTransform:"uppercase",letterSpacing:"0.06em",marginTop:2 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:1152,margin:"0 auto",padding:"28px 16px" }}>

        {/* ── Controls ── */}
        <div className="mtv-controls" style={{ display:"flex",alignItems:"center",justifyContent:"space-between",gap:14,marginBottom:20,flexWrap:"wrap" }}>
          {/* Search */}
          <div style={{ position:"relative",flex:1,minWidth:180,maxWidth:340 }}>
            <div style={{ position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",pointerEvents:"none" }}>
              <SearchIcon/>
            </div>
            <input
              className="mtv-input"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search videos..."
              style={{ width:"100%",padding:"9px 12px 9px 34px",border:"1px solid #d1d5db",borderRadius:8,fontSize:13,color:"#374151",background:"#fff",boxSizing:"border-box",transition:"border-color .2s" }}
            />
          </div>
          {/* count + layout toggle */}
          <div style={{ display:"flex",alignItems:"center",gap:10,flexShrink:0 }}>
            <span style={{ fontSize:13,color:"#6b7280" }}>
              <strong style={{ color:"#0a1628" }}>{filtered.length}</strong> videos
            </span>
            {/* grid/list toggle */}
            <div style={{ display:"flex",gap:4,background:"#fff",border:"1px solid #d1d5db",borderRadius:8,padding:3 }}>
              <button className="mtv-layout-btn" onClick={() => setLayout("grid")}
                style={{ padding:"5px 8px",borderRadius:6,border:"none",background: layout==="grid" ? "#eef3fc" : "transparent",display:"flex",alignItems:"center" }}>
                <GridIcon active={layout==="grid"}/>
              </button>
              <button className="mtv-layout-btn" onClick={() => setLayout("list")}
                style={{ padding:"5px 8px",borderRadius:6,border:"none",background: layout==="list" ? "#eef3fc" : "transparent",display:"flex",alignItems:"center" }}>
                <ListIcon active={layout==="list"}/>
              </button>
            </div>
          </div>
        </div>

        {/* ── Set filters ── */}
        <div className="mtv-filters" style={{ display:"flex",gap:8,marginBottom:28,overflowX:"auto",paddingBottom:4 }}>
          {setFilters.map(f => (
            <button key={f} className="mtv-filter-btn"
              onClick={() => setActiveSet(f)}
              style={{
                padding:"6px 14px",borderRadius:999,fontSize:11,fontWeight:600,
                border:"1px solid",cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,
                background: activeSet===f ? "#1a3a6b" : "#fff",
                color: activeSet===f ? "#fff" : "#374151",
                borderColor: activeSet===f ? "#1a3a6b" : "#d1d5db",
              }}>
              {f === "All" ? "All Videos" : f.split("—")[0].trim()}
            </button>
          ))}
        </div>

        {/* ── Video content ── */}
        {activeSet === "All" && search === "" ? (
          // Show grouped by set
          <div style={{ display:"flex",flexDirection:"column",gap:40 }}>
            {videoSets.map(set => (
              <div key={set.setTitle}>
                {/* set header */}
                <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:16 }}>
                  <div style={{ width:36,height:4,borderRadius:4,background:set.setColor,flexShrink:0 }}/>
                  <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.2rem",fontWeight:700,color:"#0a1628",margin:0 }}>{set.setTitle}</h2>
                  <span style={{ padding:"2px 10px",borderRadius:999,fontSize:10,fontWeight:700,background:`${set.setColor}15`,color:set.setColor }}>
                    {set.videos.length} videos
                  </span>
                </div>
                <div className="mtv-grid" style={{ display: layout==="list" ? "flex" : "grid", flexDirection: layout==="list" ? "column" : undefined, gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
                  {set.videos.map(v => (
                    <VideoCard key={v.id} video={v} layout={layout} onPlay={handlePlay} color={set.setColor}/>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Filtered flat list
          filtered.length === 0 ? (
            <div style={{ textAlign:"center",padding:"60px 20px",background:"#fff",borderRadius:12,color:"#6b7280" }}>
              <p style={{ fontSize:15,margin:0 }}>No videos found for "<strong>{search}</strong>"</p>
            </div>
          ) : (
            <div className="mtv-grid" style={{ display: layout==="list" ? "flex" : "grid", flexDirection: layout==="list" ? "column" : undefined, gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
              {filtered.map(v => (
                <VideoCard key={v.id} video={v} layout={layout} onPlay={handlePlay} color={v.setColor}/>
              ))}
            </div>
          )
        )}

        {/* ── CTA ── */}
        <div style={{ marginTop:40,borderRadius:16,padding:"32px 24px",textAlign:"center",background:"linear-gradient(135deg,#e85d04,#c94b00)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",fontWeight:700,color:"#fff",margin:"0 0 8px" }}>
            Want More Math Practice?
          </h3>
          <p style={{ color:"rgba(255,237,213,0.9)",fontSize:13,margin:"0 0 18px" }}>
            Join Vashishth IAS Academy for live math sessions, mock tests, and personal mentorship.
          </p>
          <a href="tel:+919464031200" style={{ display:"inline-block",padding:"10px 28px",borderRadius:8,background:"#fff",color:"#e85d04",fontWeight:700,fontSize:13,textDecoration:"none" }}>
            +91-94640-31200
          </a>
        </div>
      </div>

      {/* ── Video Modal ── */}
      {playing && (
        <div className="mtv-modal-overlay"
          onClick={closeModal}
          style={{ position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:16 }}>
          <div onClick={e => e.stopPropagation()}
            style={{ width:"100%",maxWidth:800,background:"#0a1628",borderRadius:16,overflow:"hidden",boxShadow:"0 24px 60px rgba(0,0,0,0.6)" }}>
            {/* modal header */}
            <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",borderBottom:"1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                <YoutubeIcon/>
                <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1rem",fontWeight:700,color:"#fff",margin:0 }}>{playing.title}</h3>
              </div>
              <button onClick={closeModal} style={{ background:"none",border:"none",cursor:"pointer",padding:4,display:"flex",alignItems:"center" }}>
                <CloseIcon/>
              </button>
            </div>
            {/* iframe */}
            <div style={{ position:"relative",paddingTop:"56.25%",background:"#000" }}>
              <iframe
                src={`https://www.youtube.com/embed/${playing.id}?autoplay=1`}
                title={playing.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position:"absolute",inset:0,width:"100%",height:"100%",border:"none" }}
              />
            </div>
            {/* modal footer */}
            <div style={{ padding:"12px 18px" }}>
              <p style={{ fontSize:12,color:"#93c5fd",margin:0,lineHeight:1.6 }}>{playing.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
