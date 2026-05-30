import { useState } from "react";

const images = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/i-${i + 1}.jpg`,
  alt: `Gallery Image ${i + 1}`,
}));

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ChevronLeft = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M17 6l-8 8 8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M11 6l8 8-8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="7.5" cy="7.5" r="5" stroke="#fff" strokeWidth="1.8"/>
    <path d="M11.5 11.5l4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
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

const MasonryIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="6" height="9" rx="1.5" fill={active ? "#1a3a6b" : "none"} stroke={active ? "#1a3a6b" : "#9ca3af"} strokeWidth="1.4"/>
    <rect x="11" y="1" width="6" height="5" rx="1.5" fill={active ? "#1a3a6b" : "none"} stroke={active ? "#1a3a6b" : "#9ca3af"} strokeWidth="1.4"/>
    <rect x="1" y="13" width="6" height="4" rx="1.5" fill={active ? "#1a3a6b" : "none"} stroke={active ? "#1a3a6b" : "#9ca3af"} strokeWidth="1.4"/>
    <rect x="11" y="9" width="6" height="8" rx="1.5" fill={active ? "#1a3a6b" : "none"} stroke={active ? "#1a3a6b" : "#9ca3af"} strokeWidth="1.4"/>
  </svg>
);

function ImageCard({ image, index, onOpen, cols }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(index)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        cursor: "pointer",
        background: "#e2e8f0",
        aspectRatio: cols === 2 ? "4/3" : "1/1",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.18)" : "0 2px 8px rgba(0,0,0,0.08)",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        transition: "transform .25s, box-shadow .25s",
      }}
    >
      {/* skeleton */}
      {!loaded && !error && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg,#e2e8f0 25%,#f0f4f8 50%,#e2e8f0 75%)",
          backgroundSize: "200% 100%",
          animation: "galSkeleton 1.4s infinite",
        }}/>
      )}

      {/* error fallback */}
      {error && (
        <div style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#f0f4f8",gap:8 }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="3" y="5" width="26" height="22" rx="3" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
            <circle cx="11" cy="13" r="3" stroke="#9ca3af" strokeWidth="1.2" fill="none"/>
            <path d="M3 22l7-6 5 4 4-3 10 7" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize:11,color:"#9ca3af" }}>i-{image.id}.jpg</span>
        </div>
      )}

      <img
        src={image.src}
        alt={image.alt}
        onLoad={() => setLoaded(true)}
        onError={() => { setError(true); setLoaded(true); }}
        style={{
          width:"100%", height:"100%", objectFit:"cover", display:"block",
          opacity: loaded && !error ? 1 : 0,
          transition:"opacity .3s",
        }}
      />

      {/* hover overlay */}
      <div style={{
        position:"absolute", inset:0,
        background: hovered ? "rgba(10,22,40,0.45)" : "rgba(0,0,0,0)",
        transition:"background .25s",
        display:"flex", alignItems:"center", justifyContent:"center",
      }}>
        {hovered && (
          <div style={{ opacity: hovered ? 1 : 0, transition:"opacity .2s", display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
            <SearchIcon/>
            <span style={{ color:"#fff", fontSize:11, fontWeight:600 }}>View</span>
          </div>
        )}
      </div>

      {/* image number badge */}
      <div style={{
        position:"absolute", bottom:6, right:8,
        background:"rgba(0,0,0,0.55)", borderRadius:4,
        padding:"2px 7px", fontSize:10, color:"#fff", fontWeight:600,
      }}>
        {image.id} / 26
      </div>
    </div>
  );
}

export default function OurGallery() {
  const [lightbox, setLightbox] = useState(null); // index
  const [layout, setLayout] = useState("grid"); // "grid" | "masonry"
  const [cols, setCols] = useState(4); // 3 or 4

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox(i => (i - 1 + images.length) % images.length);
  const next = () => setLightbox(i => (i + 1) % images.length);

  const handleKeyDown = (e) => {
    if (lightbox === null) return;
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") closeLightbox();
  };

  // masonry split into columns
  const masonryCols = 3;
  const masonryColumns = Array.from({ length: masonryCols }, (_, ci) =>
    images.filter((_, i) => i % masonryCols === ci)
  );

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0} style={{ fontFamily:"'Hind',sans-serif", background:"#f0f4f8", minHeight:"100vh", outline:"none" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes galSkeleton {
          0%{background-position:200% 0}
          100%{background-position:-200% 0}
        }
        @keyframes galFadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .gal-img-card{animation:galFadeIn .4s ease forwards;}
        .gal-layout-btn{transition:all .15s;cursor:pointer;}
        .gal-layout-btn:hover{background:#eef3fc !important;}
        .gal-nav-btn{transition:all .15s;}
        .gal-nav-btn:hover{background:rgba(255,255,255,0.2) !important;}
        @media(max-width:900px){
          .gal-grid-4{grid-template-columns:repeat(3,1fr) !important;}
          .gal-grid-3{grid-template-columns:repeat(2,1fr) !important;}
          .gal-masonry{grid-template-columns:repeat(2,1fr) !important;}
          .gal-controls{flex-direction:column !important;align-items:stretch !important;}
        }
        @media(max-width:560px){
          .gal-grid-4{grid-template-columns:repeat(2,1fr) !important;}
          .gal-grid-3{grid-template-columns:repeat(2,1fr) !important;}
          .gal-masonry{grid-template-columns:1fr 1fr !important;}
          .gal-hero-h1{font-size:1.6rem !important;}
          .gal-cols-toggle{display:none !important;}
        }
      `}</style>

      {/* ── Header ── */}
      <div style={{ background:"linear-gradient(135deg,#0a1628,#1a3a6b)", padding:"28px 20px 36px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          {/* breadcrumb */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:6, fontSize:12, color:"#93c5fd", marginBottom:12 }}>
            <a href="/" style={{ color:"#93c5fd", textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>Media</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>Our Gallery</span>
          </div>

          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
            <div>
              <h1 className="gal-hero-h1" style={{ fontFamily:"'Playfair Display',serif", fontSize:"2rem", fontWeight:900, color:"#fff", margin:"0 0 6px" }}>
                Our Gallery
              </h1>
              <p style={{ color:"#bfdbfe", fontSize:14, margin:0 }}>
                Moments captured at Vashishth IAS Academy — events, achievers & campus life.
              </p>
            </div>
            {/* stats */}
            <div style={{ display:"flex", gap:24 }}>
              {[["26","Photos"],["1","Album"],["Memories","Forever"]].map(([n,l])=>(
                <div key={l} style={{ textAlign:"center" }}>
                  <p style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.4rem", fontWeight:900, color:"#f4a726", margin:0 }}>{n}</p>
                  <p style={{ fontSize:10, color:"#93c5fd", textTransform:"uppercase", letterSpacing:"0.06em", marginTop:2 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Controls ── */}
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"20px 16px 0" }}>
        <div className="gal-controls" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, marginBottom:20 }}>
          <p style={{ fontSize:14, color:"#6b7280", margin:0 }}>
            Showing <strong style={{ color:"#0a1628" }}>26</strong> photos
          </p>

          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            {/* Layout toggle */}
            <div style={{ display:"flex", gap:3, background:"#fff", border:"1px solid #d1d5db", borderRadius:8, padding:3 }}>
              <button className="gal-layout-btn"
                onClick={() => setLayout("grid")}
                title="Grid view"
                style={{ padding:"5px 8px", borderRadius:6, border:"none", background: layout==="grid" ? "#eef3fc" : "transparent", display:"flex", alignItems:"center" }}>
                <GridIcon active={layout==="grid"}/>
              </button>
              <button className="gal-layout-btn"
                onClick={() => setLayout("masonry")}
                title="Masonry view"
                style={{ padding:"5px 8px", borderRadius:6, border:"none", background: layout==="masonry" ? "#eef3fc" : "transparent", display:"flex", alignItems:"center" }}>
                <MasonryIcon active={layout==="masonry"}/>
              </button>
            </div>

            {/* Cols toggle (grid only) */}
            {layout === "grid" && (
              <div className="gal-cols-toggle" style={{ display:"flex", gap:4 }}>
                {[3, 4].map(c => (
                  <button key={c}
                    onClick={() => setCols(c)}
                    style={{
                      padding:"6px 12px", borderRadius:6, border:"1px solid", fontSize:12, fontWeight:600, cursor:"pointer", transition:"all .15s",
                      background: cols===c ? "#1a3a6b" : "#fff",
                      color: cols===c ? "#fff" : "#374151",
                      borderColor: cols===c ? "#1a3a6b" : "#d1d5db",
                    }}>
                    {c} cols
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── GRID LAYOUT ── */}
        {layout === "grid" && (
          <div
            className={cols === 4 ? "gal-grid-4" : "gal-grid-3"}
            style={{ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap:12, paddingBottom:40 }}>
            {images.map((img, idx) => (
              <div key={img.id} className="gal-img-card" style={{ animationDelay:`${idx * 0.03}s`, opacity:0 }}>
                <ImageCard image={img} index={idx} onOpen={openLightbox} cols={cols}/>
              </div>
            ))}
          </div>
        )}

        {/* ── MASONRY LAYOUT ── */}
        {layout === "masonry" && (
          <div className="gal-masonry" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, alignItems:"start", paddingBottom:40 }}>
            {masonryColumns.map((col, ci) => (
              <div key={ci} style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {col.map((img, localIdx) => {
                  const globalIdx = ci + localIdx * masonryCols;
                  const tall = (ci + localIdx) % 3 === 0;
                  return (
                    <div key={img.id} className="gal-img-card" style={{ animationDelay:`${globalIdx * 0.04}s`, opacity:0 }}>
                      <MasonryCard image={img} index={globalIdx} onOpen={openLightbox} tall={tall}/>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position:"fixed", inset:0, zIndex:1000,
            background:"rgba(5,10,20,0.92)",
            display:"flex", alignItems:"center", justifyContent:"center",
            padding:16,
            animation:"galFadeIn .2s ease",
          }}>
          {/* close */}
          <button
            onClick={closeLightbox}
            style={{ position:"absolute", top:16, right:16, background:"rgba(255,255,255,0.15)", border:"none", borderRadius:"50%", width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", zIndex:10 }}>
            <CloseIcon/>
          </button>

          {/* prev */}
          <button className="gal-nav-btn"
            onClick={e => { e.stopPropagation(); prev(); }}
            style={{ position:"absolute", left:12, background:"rgba(255,255,255,0.12)", border:"none", borderRadius:"50%", width:48, height:48, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
            <ChevronLeft/>
          </button>

          {/* image */}
          <div onClick={e => e.stopPropagation()} style={{ maxWidth:"90vw", maxHeight:"88vh", display:"flex", flexDirection:"column", alignItems:"center", gap:12 }}>
            <img
              key={lightbox}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              style={{ maxWidth:"100%", maxHeight:"80vh", borderRadius:10, objectFit:"contain", boxShadow:"0 24px 60px rgba(0,0,0,0.5)", animation:"galFadeIn .25s ease" }}
              onError={e => { e.target.style.display="none"; }}
            />
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ color:"#fff", fontSize:13, fontWeight:600 }}>Photo {lightbox + 1}</span>
              <span style={{ color:"#93c5fd", fontSize:12 }}>of 26</span>
            </div>
            {/* dot indicators */}
            <div style={{ display:"flex", gap:4, flexWrap:"wrap", justifyContent:"center", maxWidth:300 }}>
              {images.map((_, i) => (
                <div key={i}
                  onClick={e => { e.stopPropagation(); setLightbox(i); }}
                  style={{
                    width: i === lightbox ? 18 : 6,
                    height:6, borderRadius:3,
                    background: i === lightbox ? "#f4a726" : "rgba(255,255,255,0.3)",
                    transition:"all .2s", cursor:"pointer",
                  }}
                />
              ))}
            </div>
          </div>

          {/* next */}
          <button className="gal-nav-btn"
            onClick={e => { e.stopPropagation(); next(); }}
            style={{ position:"absolute", right:12, background:"rgba(255,255,255,0.12)", border:"none", borderRadius:"50%", width:48, height:48, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
            <ChevronRight/>
          </button>
        </div>
      )}
    </div>
  );
}

// Masonry card with variable height
function MasonryCard({ image, index, onOpen, tall }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(index)}
      style={{
        position:"relative", overflow:"hidden", borderRadius:10, cursor:"pointer",
        background:"#e2e8f0",
        height: tall ? 280 : 190,
        boxShadow: hovered ? "0 12px 28px rgba(0,0,0,0.16)" : "0 2px 8px rgba(0,0,0,0.07)",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        transition:"transform .25s, box-shadow .25s",
      }}>
      {!loaded && !error && (
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(90deg,#e2e8f0 25%,#f0f4f8 50%,#e2e8f0 75%)",backgroundSize:"200% 100%",animation:"galSkeleton 1.4s infinite" }}/>
      )}
      {error && (
        <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:6,background:"#f0f4f8" }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect x="3" y="5" width="26" height="22" rx="3" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
            <circle cx="11" cy="13" r="3" stroke="#9ca3af" strokeWidth="1.2" fill="none"/>
            <path d="M3 22l7-6 5 4 4-3 10 7" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize:10,color:"#9ca3af" }}>i-{image.id}.jpg</span>
        </div>
      )}
      <img src={image.src} alt={image.alt}
        onLoad={() => setLoaded(true)}
        onError={() => { setError(true); setLoaded(true); }}
        style={{ width:"100%",height:"100%",objectFit:"cover",display:"block",opacity:loaded&&!error?1:0,transition:"opacity .3s" }}/>
      <div style={{ position:"absolute",inset:0,background:hovered?"rgba(10,22,40,0.45)":"rgba(0,0,0,0)",transition:"background .25s",display:"flex",alignItems:"center",justifyContent:"center" }}>
        {hovered && <SearchIcon/>}
      </div>
      <div style={{ position:"absolute",bottom:6,right:8,background:"rgba(0,0,0,0.55)",borderRadius:4,padding:"2px 7px",fontSize:10,color:"#fff",fontWeight:600 }}>
        {image.id} / 26
      </div>
    </div>
  );
}
