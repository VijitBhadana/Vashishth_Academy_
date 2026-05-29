import { useState } from "react";

const NAV  = "#1a2a4a";
const RED  = "#c0392b";
const GOLD = "#f9a825";
const BG   = "#f0f4fa";

/* ─── responsive helper ─── */
const mq = {
  mobile: "@media(max-width:600px)",
  tablet: "@media(max-width:900px)",
};

const announcements = [
  {
    id: 1,
    tag: "Recruitment",
    date: "10 March 2026",
    title: "Punjab Police Constable Apply Online 2026",
    excerpt:
      "Candidates can submit their application form online through the official website @punjabpolice.gov.in from 10th March 2026.",
    readTime: "5 min read",
    content: {
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Candidates applying for the post of Punjab Police Constable 2026 Recruitment must submit their application form online through the official website @punjabpolice.gov.in from 10th March 2026. The application process involves registration, filling out the application form, uploading the requisite documents, and payment of the application fees.",
      sections: [
        {
          id: "fees",
          heading: "Punjab Police Constable Application Fees 2026",
          type: "table",
          intro: "The category-wise details of the application fee required to pay for Punjab Police Constable 2026 are as follows:",
          table: {
            headers: ["Category", "Application Fee", "Examination Fee", "Total Fee"],
            rows: [
              ["General", "Rs. 550", "Rs. 650", "Rs. 1200"],
              ["Ex-Servicemen (ESM) of Punjab, Linear Descends of ESM", "Rs. 500", "Nil", "Rs. 500"],
              ["SC/ST/BC of All States & OBC of Punjab Sate Only", "Rs. 500", "Rs. 150", "Rs. 700"],
              ["Economically Weaker Sections (EWS)", "Rs. 500", "Nil", "Rs. 500"],
            ],
          },
        },
        {
          id: "eligibility",
          heading: "Punjab Police Constable Eligibility Criteria 2026",
          type: "mixed",
          intro: "To be eligible for Punjab Police Constable Recruitment 2026, candidates must meet the eligibility requirements outlined below:",
          subsections: [
            {
              subheading: "Punjab Police Constable Educational Qualification 2026",
              type: "bullets",
              points: [
                "Candidates must have completed 10+2 or equivalent from a recognized Board or Institute.",
                "For Ex-servicemen, the minimum educational qualification is Matriculation.",
              ],
            },
            {
              subheading: "Punjab Police Constable Age Limit 2026",
              type: "table",
              intro: "The minimum age limit of candidates applying for Punjab Police Constable is 18 years and the upper age should not be above 28 years. The age recognition date for Punjab Police Constable role is 1st January 2026.",
              table: {
                headers: ["Particulars", "Age Limit"],
                rows: [
                  ["Minimum Age Limit", "18 years"],
                  ["Maximum Age Limit", "28 years"],
                ],
              },
            },
            {
              subheading: "Punjab Police Constable Nationality 2026",
              type: "text",
              content: "To apply for the post of Constable in Punjab Police, candidates must be a citizen of India and they should not obtain permanent residency/citizenship or green card from any other country.",
            },
          ],
        },
        {
          id: "physical",
          heading: "Punjab Police Constable Physical Standards",
          type: "table",
          intro: "Candidates must meet the specific physical standards comprising height requirements as under:",
          table: {
            headers: ["Gender", "Minimum Height Required"],
            rows: [
              ["Male", "5 feet 7 inches (170.2 cm)"],
              ["Female", "5 feet 2 inches (157.5 cm)"],
            ],
          },
        },
        {
          id: "selection",
          heading: "Punjab Police Constable Selection Process 2026",
          type: "steps",
          intro: "The selection process for Punjab Police Constable Recruitment 2026 involves the following stages:",
          steps: [
            { label: "Computer Based Test (CBT)", icon: "💻" },
            { label: "Physical Screening Test (PST) & Physical Measurement Test (PMT)", icon: "🏃" },
            { label: "Document Verification", icon: "📄" },
            { label: "Medical Examination", icon: "🏥" },
          ],
        },
        {
          id: "salary",
          heading: "Punjab Police Constable Salary 2026",
          type: "table",
          intro: "Candidates selected for the position of Constable in the Punjab Police will earn a respectable pay scale as under:",
          tableTitle: "Punjab Police Constable Salary 2026",
          table: {
            headers: ["Post Name", "Salary"],
            rows: [["Constable (District & Armed Police Cadre)", "Rs. 19,900/-"]],
          },
        },
      ],
    },
  },
];

/* ════════════════════════════════
   STYLED TABLE
════════════════════════════════ */
function StyledTable({ headers, rows, title }) {
  return (
    <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #dde6f0", boxShadow: "0 2px 8px rgba(26,42,74,.07)", marginTop: 10 }}>
      {title && (
        <div style={{ background: "#f5f8fc", borderBottom: "1px solid #dde6f0", padding: "10px 16px" }}>
          <span style={{ fontWeight: 700, color: NAV, fontSize: 13 }}>{title}</span>
        </div>
      )}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 320 }}>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} style={{ background: NAV, color: "#fff", padding: "11px 14px", textAlign: "left", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: ".04em", whiteSpace: "nowrap" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ background: ri % 2 === 0 ? "#fff" : "#f7f9fc" }}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{ padding: "10px 14px", color: "#374151", borderBottom: "1px solid #edf2f8", fontSize: 13, lineHeight: 1.5 }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ════════════════════════════════
   SECTION BLOCK
════════════════════════════════ */
function SectionBlock({ sec }) {
  return (
    <div id={sec.id} style={{ scrollMarginTop: 80 }}>
      {/* Heading */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <div style={{ width: 4, height: 26, background: GOLD, borderRadius: 3, flexShrink: 0 }} />
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: NAV, lineHeight: 1.3 }}>{sec.heading}</h2>
      </div>

      {/* Intro text */}
      {sec.intro && (
        <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.75, marginBottom: 12, paddingLeft: 14 }}>
          {sec.intro}
        </p>
      )}

      {/* Plain Table */}
      {sec.type === "table" && sec.table && (
        <div style={{ paddingLeft: 14 }}>
          <StyledTable headers={sec.table.headers} rows={sec.table.rows} title={sec.tableTitle} />
        </div>
      )}

      {/* Steps */}
      {sec.type === "steps" && sec.steps && (
        <div style={{ paddingLeft: 14, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12, marginTop: 8 }}>
          {sec.steps.map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "#fff", border: "1px solid #dde6f0", borderRadius: 10, padding: "14px 16px", boxShadow: "0 1px 4px rgba(26,42,74,.06)" }}>
              <div style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", background: NAV, color: "#fff", fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {i + 1}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 18 }}>{step.icon}</span>
                <span style={{ fontSize: 13, color: "#374151", fontWeight: 600, lineHeight: 1.4 }}>{step.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mixed (Eligibility subsections) */}
      {sec.type === "mixed" && sec.subsections && (
        <div style={{ paddingLeft: 14, display: "flex", flexDirection: "column", gap: 14 }}>
          {sec.subsections.map((sub, si) => (
            <div key={si} style={{ background: "#f7f9fc", borderRadius: 10, padding: "14px 16px", border: "1px solid #e5eaf3" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />
                <h3 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: NAV }}>{sub.subheading}</h3>
              </div>

              {sub.type === "bullets" && sub.points && (
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {sub.points.map((pt, pi) => (
                    <li key={pi} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#4b5563", lineHeight: 1.65 }}>
                      <span style={{ marginTop: 6, flexShrink: 0, width: 6, height: 6, borderRadius: "50%", background: GOLD, display: "inline-block" }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}

              {sub.type === "text" && (
                <p style={{ margin: 0, fontSize: 13, color: "#4b5563", lineHeight: 1.75 }}>{sub.content}</p>
              )}

              {sub.type === "table" && (
                <>
                  {sub.intro && <p style={{ margin: "0 0 10px", fontSize: 13, color: "#4b5563", lineHeight: 1.65 }}>{sub.intro}</p>}
                  {sub.table && <StyledTable headers={sub.table.headers} rows={sub.table.rows} />}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════
   LIST CARD
════════════════════════════════ */
function ListCard({ ann, onOpen }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={() => onOpen(ann)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff",
        borderRadius: 14,
        border: `1px solid ${hov ? "#f4a44a" : "#dde6f0"}`,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        cursor: "pointer",
        boxShadow: hov ? "0 6px 24px rgba(26,42,74,.13)" : "0 2px 8px rgba(26,42,74,.06)",
        transition: "all .22s",
      }}>

      {/* Top row: badge + body */}
      <div className="ann-list-card-inner">
        {/* Date badge */}
        <div className="ann-date-badge" style={{ flexShrink: 0, width: 52, height: 60, borderRadius: 10, background: NAV, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff" }}>
          <span style={{ fontSize: 9, fontWeight: 800, color: GOLD, textTransform: "uppercase", letterSpacing: ".1em" }}>Mar</span>
          <span style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.1 }}>10</span>
          <span style={{ fontSize: 9, color: "#94a3b8" }}>2026</span>
        </div>

        {/* Body */}
        <div className="ann-card-body" style={{ flex: 1 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{ background: "#dbeafe", color: "#1d4ed8", fontSize: 11, padding: "2px 9px", borderRadius: 20, fontWeight: 700 }}>{ann.tag}</span>
            <span style={{ color: "#94a3b8", fontSize: 11 }}>⏱ {ann.readTime}</span>
          </div>
          <h3 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 800, color: hov ? RED : NAV, transition: "color .2s", lineHeight: 1.35 }}>{ann.title}</h3>
          <p style={{ margin: "0 0 10px", fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{ann.excerpt}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Apply Online", "Eligibility", "Selection Process", "Salary"].map((chip) => (
              <span key={chip} style={{ background: "#f0f4fa", color: NAV, fontSize: 10, fontWeight: 600, padding: "4px 10px", borderRadius: 20, border: "1px solid #dde6f0" }}>{chip}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="ann-card-cta" style={{ marginTop: 12 }}>
        <button style={{ background: hov ? RED : NAV, color: "#fff", fontSize: 12, padding: "9px 20px", borderRadius: 9, fontWeight: 700, border: "none", cursor: "pointer", transition: "background .2s", whiteSpace: "nowrap" }}>
          Read More →
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════
   MAIN PAGE
════════════════════════════════ */
export default function AnnouncementPage({ onBack }) {
  const [view, setView]     = useState("list");
  const [active, setActive] = useState(null);
  const [tocOpen, setTocOpen] = useState(false);

  const openDetail = (ann) => {
    setActive(ann);
    setView("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBackToList = () => {
    setView("list");
    setActive(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toc = active?.content?.sections?.map((s) => ({ id: s.id, label: s.heading })) || [];

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Hind',sans-serif" }}>

      {/* ── Responsive CSS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Hind:wght@400;500;600&display=swap');

        /* ── Layout ── */
        .ann-layout   { display: flex; gap: 24px; align-items: flex-start; }
        .ann-sidebar  { width: 230px; flex-shrink: 0; position: sticky; top: 80px; }
        .ann-article  { flex: 1; min-width: 0; }
        .ann-cta-row  { flex-direction: row; }

        /* ── List card: on mobile stack date badge above body ── */
        .ann-list-card-inner { display: flex; gap: 16px; align-items: flex-start; flex-wrap: wrap; }
        .ann-date-badge      { flex-shrink: 0; }
        .ann-card-body       { flex: 1; min-width: 180px; }
        .ann-card-cta        { display: flex; align-items: center; width: 100%; margin-top: 4px; }

        /* ── Tablet ── */
        @media (max-width: 860px) {
          .ann-sidebar  { display: none !important; }
          .ann-layout   { display: block; }
          .ann-article  { width: 100%; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .ann-cta-row          { flex-direction: column !important; }
          .ann-cta-row a,
          .ann-cta-row button   { width: 100% !important; text-align: center; box-sizing: border-box; }
          .ann-back-mob         { display: flex !important; }

          /* list card: full width CTA button */
          .ann-card-cta button  { width: 100%; justify-content: center; }

          /* TOC drawer for mobile */
          .ann-toc-mobile       { display: block !important; }
        }
        @media (min-width: 561px) {
          .ann-back-mob         { display: none !important; }
          .ann-toc-mobile       { display: none !important; }
        }

        /* ── Very small screens ── */
        @media (max-width: 400px) {
          .ann-date-badge { display: none; }
          .ann-card-body  { min-width: 100%; }
        }

        /* ── Scrollable tables on any small container ── */
        .ann-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
      `}</style>

      {/* ── Page Banner ── */}
      <div style={{ background: `linear-gradient(100deg, ${NAV} 60%, #243d6b)`, padding: "28px 16px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#94a3b8", marginBottom: 8, flexWrap: "wrap" }}>
            <button onClick={onBack}
              style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: 12, padding: 0 }}
              onMouseEnter={e => e.currentTarget.style.color = GOLD}
              onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>
              Home
            </button>
            <span>/</span>
            {view === "detail" ? (
              <>
                <button onClick={goBackToList}
                  style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: 12, padding: 0 }}
                  onMouseEnter={e => e.currentTarget.style.color = GOLD}
                  onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>
                  Announcement
                </button>
                <span>/</span>
                <span style={{ color: "#fff", maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "inline-block", verticalAlign: "bottom" }}>{active?.title}</span>
              </>
            ) : (
              <span style={{ color: "#fff" }}>Announcement</span>
            )}
          </div>

          <h1 style={{ margin: 0, fontSize: "clamp(18px,4vw,26px)", fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>
            {view === "list" ? "Announcements" : active?.title}
          </h1>

          {view === "list" && (
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "#94a3b8" }}>
              Stay updated with the latest exam notifications and recruitment news
            </p>
          )}
          {view === "detail" && (
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginTop: 8 }}>
              <span style={{ background: RED, color: "#fff", fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 700 }}>{active?.tag}</span>
              <span style={{ color: "#94a3b8", fontSize: 12 }}>📅 {active?.date}</span>
              <span style={{ color: "#94a3b8", fontSize: 12 }}>⏱ {active?.readTime}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 12px 40px" }}>

        {/* ══ LIST VIEW ══ */}
        {view === "list" && (
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
              <h2 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: NAV }}>
                Latest Announcements
                <span style={{ marginLeft: 8, background: RED, color: "#fff", fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 700, verticalAlign: "middle" }}>
                  {announcements.length} New
                </span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {announcements.map((ann) => (
                <ListCard key={ann.id} ann={ann} onOpen={openDetail} />
              ))}
            </div>
          </div>
        )}

        {/* ══ DETAIL VIEW ══ */}
        {view === "detail" && active && (
          <>
            {/* Mobile back button (shown only on small screens) */}
            <button
              className="ann-back-mob"
              onClick={goBackToList}
              style={{ display: "none", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: NAV, background: "none", border: "none", cursor: "pointer", marginBottom: 14, padding: 0 }}>
              ← Back to Announcements
            </button>

            {/* Mobile TOC accordion */}
            <div className="ann-toc-mobile" style={{ display: "none", marginBottom: 16, background: "#fff", borderRadius: 12, border: "1px solid #dde6f0", overflow: "hidden" }}>
              <button
                onClick={() => setTocOpen(o => !o)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "none", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, color: NAV }}>
                <span>📋 Table of Contents</span>
                <span style={{ fontSize: 16, transform: tocOpen ? "rotate(180deg)" : "none", transition: "transform .25s" }}>▾</span>
              </button>
              {tocOpen && (
                <div style={{ borderTop: "1px solid #edf2f8", padding: "8px 12px 12px" }}>
                  {toc.map((item) => (
                    <a key={item.id} href={"#" + item.id}
                      onClick={() => setTocOpen(false)}
                      style={{ display: "block", fontSize: 13, color: "#374151", padding: "7px 8px", borderRadius: 6, textDecoration: "none", lineHeight: 1.4 }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#fff5f0"; e.currentTarget.style.color = RED; }}
                      onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "#374151"; }}>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="ann-layout">

              {/* ── Sidebar ── */}
              <div className="ann-sidebar">
                <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #dde6f0", padding: 18, boxShadow: "0 2px 10px rgba(26,42,74,.07)" }}>
                  <button onClick={goBackToList}
                    style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: NAV, background: "none", border: "none", cursor: "pointer", marginBottom: 14, padding: 0, width: "100%" }}
                    onMouseEnter={e => e.currentTarget.style.color = RED}
                    onMouseLeave={e => e.currentTarget.style.color = NAV}>
                    ← Back to Announcements
                  </button>

                  <div style={{ borderTop: "1px solid #edf2f8", paddingTop: 14 }}>
                    <p style={{ margin: "0 0 8px", fontSize: 10, fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: ".12em" }}>
                      Contents
                    </p>
                    <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      {toc.map((item) => (
                        <a key={item.id} href={`#${item.id}`}
                          style={{ display: "block", fontSize: 12, color: "#374151", fontWeight: 500, padding: "7px 10px", borderRadius: 6, textDecoration: "none", lineHeight: 1.4 }}
                          onMouseEnter={e => { e.currentTarget.style.background = "#fff5f0"; e.currentTarget.style.color = RED; }}
                          onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "#374151"; }}>
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Mini CTA card */}
                  <div style={{ marginTop: 16, background: `linear-gradient(135deg, ${NAV}, #243d6b)`, borderRadius: 10, padding: "14px 12px", textAlign: "center" }}>
                    <p style={{ margin: "0 0 2px", fontSize: 12, fontWeight: 800, color: "#fff" }}>Free Counselling</p>
                    <p style={{ margin: "0 0 10px", fontSize: 11, color: "#94a3b8" }}>Talk to our expert advisors</p>
                    <a href="tel:+919464031200"
                      style={{ display: "block", background: RED, color: "#fff", fontSize: 11, fontWeight: 700, padding: "8px", borderRadius: 6, textDecoration: "none" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#a93226"}
                      onMouseLeave={e => e.currentTarget.style.background = RED}>
                      📞 Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* ── Article ── */}
              <div className="ann-article">
                <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #dde6f0", padding: "clamp(16px,4vw,32px)", boxShadow: "0 2px 10px rgba(26,42,74,.07)" }}>

                  {/* Article intro */}
                  <div style={{ paddingBottom: 20, marginBottom: 24, borderBottom: "1px solid #edf2f8" }}>
                    <h1 style={{ margin: "0 0 14px", fontSize: "clamp(16px,3vw,20px)", fontWeight: 800, color: NAV, lineHeight: 1.35 }}>
                      {active.title}
                    </h1>
                    <p style={{ margin: 0, fontSize: 14, color: "#4b5563", lineHeight: 1.8 }}>
                      {active.content.intro}
                    </p>
                  </div>

                  {/* Sections */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    {active.content.sections.map((sec, i) => (
                      <div key={i} style={{
                        paddingBottom: 24,
                        borderBottom: i < active.content.sections.length - 1 ? "1px solid #edf2f8" : "none"
                      }}>
                        <SectionBlock sec={sec} />
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <div style={{ marginTop: 28, background: `linear-gradient(100deg, ${NAV}, #243d6b)`, borderRadius: 12, padding: "20px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}
                    className="ann-cta-row">
                    <div>
                      <p style={{ margin: "0 0 4px", fontWeight: 800, color: "#fff", fontSize: 15 }}>Need guidance on how to apply?</p>
                      <p style={{ margin: 0, color: "#94a3b8", fontSize: 13 }}>Our experts are available to help — free of charge.</p>
                    </div>
                    <div style={{ display: "flex", gap: 10, flexShrink: 0, flexWrap: "wrap" }}>
                      <a href="tel:+919464031200"
                        style={{ background: "#fff", color: NAV, fontSize: 12, padding: "9px 18px", borderRadius: 8, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", display: "inline-block" }}
                        onMouseEnter={e => e.currentTarget.style.background = "#f0f4f8"}
                        onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                        📞 Call Now
                      </a>
                      <button
                        style={{ background: RED, color: "#fff", fontSize: 12, padding: "9px 18px", borderRadius: 8, fontWeight: 700, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}
                        onMouseEnter={e => e.currentTarget.style.background = "#a93226"}
                        onMouseLeave={e => e.currentTarget.style.background = RED}>
                        Get Free Counselling
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
}
