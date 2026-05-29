import { useState } from "react";

const videos = [
  {
    id: 1,
    youtubeId: "JhcVQtAXR4Q",
    title: "Success Mantra – How to Start IAS Preparation",
    description: "Learn the right strategy to begin your UPSC journey with expert guidance from Vashishth IAS Academy faculty.",
    category: "Strategy",
  },
  {
    id: 2,
    youtubeId: "vkJAP25e4Pw",
    title: "Join Vashishth IAS Academy – Vast Experience of 15 Years",
    description: "Discover why thousands of aspirants trust Vashishth IAS Academy for their IAS/UPSC preparation.",
    category: "About Us",
  },
  {
    id: 3,
    youtubeId: "jqZ7uU0WPGk",
    title: "How to Start Civil Services Preparation",
    description: "A complete roadmap for beginners to civil services – what to study, how to study, and when to start.",
    category: "Guidance",
  },
  {
    id: 4,
    youtubeId: "hz1K8m1AvbY",
    title: "Vashishth Academy Ludhiana – Live Session",
    description: "Watch our live classroom session and experience the quality of teaching at Vashishth IAS Academy.",
    category: "Live Class",
  },
  {
    id: 5,
    youtubeId: "T9tyV-FmyXg",
    title: "UPSC Preparation Tips & Tricks",
    description: "Expert faculty shares insider tips and tricks to crack the UPSC CSE examination with top ranks.",
    category: "Tips",
  },
  {
    id: 6,
    youtubeId: "M0mZWcx_Oaw",
    title: "Current Affairs & Daily Updates",
    description: "Stay updated with daily current affairs and news analysis essential for UPSC and PPSC examinations.",
    category: "Current Affairs",
  },
];

const categoryColors = {
  Strategy:        { bg: "#f97316", light: "#fff7f0" },
  "About Us":      { bg: "#2563eb", light: "#eff6ff" },
  Guidance:        { bg: "#0d9488", light: "#f0fdfa" },
  "Live Class":    { bg: "#dc2626", light: "#fff5f5" },
  Tips:            { bg: "#7c3aed", light: "#faf5ff" },
  "Current Affairs":{ bg: "#16a34a", light: "#f0fdf4" },
};

function VideoCard({ video, onClick }) {
  const [hovered, setHovered] = useState(false);
  const color = categoryColors[video.category]?.bg || "#f97316";

  return (
    <div
      onClick={() => onClick(video)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 20px 48px rgba(26,42,74,0.18)"
          : "0 4px 18px rgba(26,42,74,0.09)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", flexShrink: 0 }}>
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={video.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s ease",
            display: "block",
          }}
        />
        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: hovered ? "rgba(0,0,0,0.52)" : "rgba(0,0,0,0.22)",
          transition: "background 0.3s ease",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* Play button */}
          <div style={{
            width: 60, height: 60, borderRadius: "50%",
            background: color,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
            transform: hovered ? "scale(1.12)" : "scale(0.92)",
            opacity: hovered ? 1 : 0.85,
            transition: "all 0.3s ease",
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 3 }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Category badge */}
        <span style={{
          position: "absolute", top: 12, left: 12,
          background: color, color: "#fff",
          fontSize: 10, fontWeight: 700,
          padding: "4px 10px", borderRadius: 20,
          textTransform: "uppercase", letterSpacing: "0.06em",
        }}>
          {video.category}
        </span>

        {/* YouTube badge */}
        <div style={{
          position: "absolute", bottom: 10, right: 10,
          background: "#FF0000", borderRadius: 4,
          padding: "2px 7px", display: "flex", alignItems: "center", gap: 4,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span style={{ color: "#fff", fontSize: 9, fontWeight: 700, letterSpacing: "0.05em" }}>YouTube</span>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "18px 18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{
          fontWeight: 700, fontSize: 15, color: hovered ? color : "#1a2a4a",
          lineHeight: 1.4, marginBottom: 8,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
          transition: "color 0.2s ease",
        }}>
          {video.title}
        </h3>
        <p style={{
          color: "#6b7280", fontSize: 13, lineHeight: 1.6,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
          marginBottom: 14, flex: 1,
        }}>
          {video.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: color, fontWeight: 600, fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
            <path d="M8 5v14l11-7z"/>
          </svg>
          Watch Now
        </div>
      </div>
    </div>
  );
}

function VideoModal({ video, onClose }) {
  if (!video) return null;
  const color = categoryColors[video.category]?.bg || "#f97316";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.88)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 860,
          borderRadius: 16, overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 12, right: 12, zIndex: 10,
            width: 36, height: 36, borderRadius: "50%",
            background: "rgba(0,0,0,0.7)", border: "none",
            color: "#fff", cursor: "pointer", fontSize: 18,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,1)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.7)"}
        >
          ✕
        </button>

        {/* Video */}
        <div style={{ aspectRatio: "16/9" }}>
          <iframe
            style={{ width: "100%", height: "100%", display: "block", border: "none" }}
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Title bar */}
        <div style={{ background: "#111827", padding: "12px 18px", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span style={{
            background: color, color: "#fff",
            fontSize: 10, fontWeight: 700,
            padding: "3px 10px", borderRadius: 20,
            textTransform: "uppercase", letterSpacing: "0.06em", flexShrink: 0,
          }}>
            {video.category}
          </span>
          <span style={{ color: "#fff", fontWeight: 600, fontSize: 13, lineHeight: 1.4 }}>
            {video.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function VideosPage({ onBack }) {
  const [activeModal, setActiveModal] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(videos.map((v) => v.category)))];
  const filtered = filter === "All" ? videos : videos.filter((v) => v.category === filter);

  return (
    <div style={{ minHeight: "100vh", background: "#eef2f7" }}>

      {/* ── PAGE HERO ── */}
      <div style={{
        position: "relative",
        background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a6e 60%, #1a2a4a 100%)",
        padding: "56px 20px",
        textAlign: "center",
        overflow: "hidden",
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: 260, height: 260, borderRadius: "50%",
          background: "#f97316", opacity: 0.08,
          transform: "translate(-40%,-40%)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: 380, height: 380, borderRadius: "50%",
          background: "#f97316", opacity: 0.05,
          transform: "translate(30%,40%)",
        }} />

        {/* Back button */}
        {onBack && (
          <button
            onClick={onBack}
            style={{
              position: "absolute", top: 20, left: 20,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff", borderRadius: 8,
              padding: "7px 16px", fontSize: 12,
              fontWeight: 600, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 6,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          >
            ← Home
          </button>
        )}

        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{
            display: "inline-block",
            background: "#f97316", color: "#fff",
            fontSize: 11, fontWeight: 700,
            padding: "5px 18px", borderRadius: 20,
            textTransform: "uppercase", letterSpacing: "0.1em",
            marginBottom: 16,
          }}>
            Media
          </span>
          <h1 style={{
            color: "#fff", fontWeight: 800,
            fontSize: "clamp(28px, 5vw, 48px)",
            margin: "0 0 12px", lineHeight: 1.2,
          }}>
            Videos &amp; Lectures
          </h1>
          <div style={{
            width: 60, height: 4, background: "#f97316",
            borderRadius: 4, margin: "0 auto 16px",
          }} />
          <p style={{
            color: "#bfcfe8", fontSize: "clamp(13px, 2vw, 15px)",
            maxWidth: 520, margin: "0 auto", lineHeight: 1.7,
          }}>
            Watch free lectures, success stories, and expert guidance sessions
            from Vashishth IAS Academy's experienced faculty.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 60px" }}>

        {/* Filter tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 8,
          justifyContent: "center", padding: "32px 0 28px",
        }}>
          {categories.map((cat) => {
            const active = filter === cat;
            const color = cat === "All" ? "#f97316" : (categoryColors[cat]?.bg || "#f97316");
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 24,
                  fontSize: 13, fontWeight: 700,
                  border: active ? "none" : "1.5px solid #dde4ef",
                  background: active ? color : "#fff",
                  color: active ? "#fff" : "#4b5563",
                  cursor: "pointer",
                  boxShadow: active ? `0 4px 14px ${color}55` : "none",
                  transform: active ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Video grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: 24,
        }}>
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} onClick={setActiveModal} />
          ))}
        </div>

        {/* CTA Strip */}
        <div style={{
          marginTop: 56,
          borderRadius: 20,
          padding: "36px 32px",
          background: "linear-gradient(135deg, #0f1f3d 0%, #1a3a6e 100%)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}>
          <div>
            <h3 style={{
              color: "#fff", fontWeight: 800,
              fontSize: "clamp(17px, 3vw, 22px)",
              margin: "0 0 6px",
            }}>
              Want to Join Our Live Classes?
            </h3>
            <p style={{ color: "#93b4d8", fontSize: 13, margin: 0 }}>
              Access thousands of free lectures and daily current affairs — live!
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button style={{
              padding: "12px 28px", borderRadius: 10,
              background: "#f97316", color: "#fff",
              fontWeight: 700, fontSize: 13,
              border: "none", cursor: "pointer",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              JOIN FREE
            </button>
            <button style={{
              padding: "12px 28px", borderRadius: 10,
              background: "transparent", color: "#fff",
              fontWeight: 700, fontSize: 13,
              border: "1.5px solid rgba(255,255,255,0.35)",
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#1a2a4a"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
            >
              VIEW ALL COURSES
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <VideoModal video={activeModal} onClose={() => setActiveModal(null)} />

      {/* Responsive tweaks */}
      <style>{`
        @media (max-width: 480px) {
          /* ensure iframe height is correct on small screens */
          iframe { min-height: 200px; }
        }
      `}</style>
    </div>
  );
}
