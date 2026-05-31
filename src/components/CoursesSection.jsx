

// import { useState } from "react";

// /* ─── Color tokens ─── */
// const C = {
//   navy: "#1a3a6b",
//   red: "#e84118",
//   gold: "#f9a825",
//   bg: "#f0f4fa",
// };

// /* ══════════════════════════════════════════
//    DATA
// ══════════════════════════════════════════ */
// const courses = [
//   {
//     tag: "UPSC",
//     title: "General Studies (UPSC CSE)",
//     desc: "Covers all four GS papers — History, Polity, Geography, Economy, Science & Technology, Environment, Ethics. Includes test series, answer writing practice, and interview preparation.",
//     id: "upsc",
//   },
//   {
//     tag: "PPSC",
//     title: "PPSC / Punjab PCS Coaching",
//     desc: "Comprehensive coaching for Punjab Public Service Commission examination. Subject-wise coverage, current affairs, and state-specific modules.",
//     id: "ppsc",
//   },
//   {
//     tag: "IAS",
//     title: "IAS Foundation Batch",
//     desc: "A complete foundation programme for UPSC Civil Services aspirants starting from scratch. Includes mentorship, daily practice questions, and mock interviews.",
//     id: "ias",
//   },
//   {
//     tag: "NDA",
//     title: "NDA Coaching",
//     desc: "Specialized coaching for National Defence Academy entrance exam. Mathematics, General Ability, and SSB interview preparation included.",
//     id: "nda",
//   },
//   {
//     tag: "CDS",
//     title: "CDS Coaching",
//     desc: "Combined Defence Services coaching for IMA, INA, AFA, and OTA entries. English, GK, and Mathematics covered comprehensively.",
//     id: "cds",
//   },
//   {
//     tag: "SSC",
//     title: "SSC CGL / CHSL Coaching",
//     desc: "Dedicated SSC coaching covering CGL, CHSL, MTS, CPO, and JE examinations with skilled faculty, tests, and doubt sessions.",
//     id: "ssc",
//   },
// ];

// const modalContent = {
//   upsc: {
//     tag: "UPSC",
//     title: "UPSC Civil Services (IAS / IPS)",
//     body: `<p>UPSC Civil Services Examination is the most prestigious examination in India, conducted for IAS, IPS, IFS, and other Group A & B services. The exam has three stages: Preliminary, Mains, and Interview/Personality Test.</p>
//     <h3>1. Eligibility</h3><ul><li>Citizen of India (for IAS/IPS)</li><li>Age: 21–32 years (relaxation for reserved categories)</li><li>Educational Qualification: Graduate from any recognized university</li><li>Number of Attempts: 6 for General; 9 for OBC; unlimited for SC/ST till age limit</li></ul>
//     <h3>2. Exam Pattern</h3><table class="modal-table"><thead><tr><th>Stage</th><th>Papers</th><th>Marks</th></tr></thead><tbody><tr><td>Prelims</td><td>GS Paper I + CSAT</td><td>200+200</td></tr><tr><td>Mains</td><td>9 Papers</td><td>1750 (Merit)</td></tr><tr><td>Interview</td><td>Personality Test</td><td>275</td></tr></tbody></table>
//     <div class="note-box"><b>Note:</b> CSAT is qualifying in nature (minimum 33%). Only GS Paper I marks are counted for Prelims merit list.</div>
//     <h3>3. Our Course Features</h3><ul><li><b>Comprehensive GS Coverage</b> across all four papers</li><li><b>Daily current affairs</b> classes and notes</li><li><b>Answer writing practice</b> with personalized feedback</li><li><b>Full mock interview</b> preparation panel</li></ul>`,
//   },
//   ppsc: {
//     tag: "PPSC",
//     title: "PPSC / Punjab PCS Coaching",
//     body: `<p>Punjab Public Service Commission (PPSC) conducts the Punjab Civil Services (PCS) examination for recruitment to Group A and Group B state civil services posts in Punjab.</p>
//     <h3>1. Eligibility</h3><ul><li>Citizen of India; domicile of Punjab preferred</li><li>Age: 21–37 years (relaxation as per Punjab Govt. norms)</li><li>Graduate from a recognized university</li></ul>
//     <h3>2. Exam Pattern</h3><table class="modal-table"><thead><tr><th>Stage</th><th>Subject</th><th>Marks</th></tr></thead><tbody><tr><td>Prelims</td><td>GS + CSAT</td><td>100+100</td></tr><tr><td>Mains</td><td>6 Papers</td><td>1200</td></tr><tr><td>Interview</td><td>Personality Test</td><td>150</td></tr></tbody></table>
//     <h3>3. Our Coaching Highlights</h3><ul><li>State-specific current affairs &amp; Punjab History coverage</li><li>Bilingual instruction (English + Hindi/Punjabi)</li><li>Experienced PPSC-qualified faculty</li></ul>`,
//   },
//   ias: {
//     tag: "IAS",
//     title: "IAS Foundation Batch",
//     body: `<p>Our IAS Foundation Batch is a comprehensive, structured programme for aspirants who want to start their UPSC journey with a strong base. Ideal for final-year students and fresh graduates.</p>
//     <div class="info-chips"><div class="chip"><span>Duration</span>12 Months</div><div class="chip"><span>Mode</span>Offline + Online</div><div class="chip"><span>Medium</span>English & Hindi</div><div class="chip"><span>Batch Size</span>Limited</div></div>
//     <h3>Programme Highlights</h3><ul><li>Complete GS 1–4 coverage with experienced faculty</li><li>Daily news analysis and current affairs sessions</li><li>Monthly full-length prelims mock tests</li><li>Mains answer writing workshops</li><li>One-on-one mentor sessions</li><li>Comprehensive printed study material</li></ul>
//     <div class="note-box"><b>Admission Note:</b> Limited seats per batch to ensure personalized attention. Register early to confirm your spot.</div>`,
//   },
//   nda: {
//     tag: "NDA",
//     title: "NDA Eligibility & Coaching",
//     body: `<p>National Defence Academy (NDA) examination is conducted by UPSC twice a year for entry into the Army, Navy, and Air Force wings. It is one of the most competitive defence examinations in India.</p>
//     <h3>1. Eligibility</h3><ul><li>Males who have passed or are appearing in Class 12</li><li>Age: 16.5–19.5 years at time of commencement of course</li><li>Unmarried male candidates only</li></ul>
//     <h3>2. Exam Pattern</h3><table class="modal-table"><thead><tr><th>Subject</th><th>Questions</th><th>Marks</th></tr></thead><tbody><tr><td>Mathematics</td><td>120</td><td>300</td></tr><tr><td>General Ability Test</td><td>150</td><td>600</td></tr></tbody></table>
//     <h3>3. Physical Standards</h3><ul><li>Height: Minimum 157 cm (Army/Navy); 162.5 cm (Air Force)</li><li>Good eyesight and overall physical fitness</li><li>SSB Interview after written test</li></ul>`,
//   },
//   cds: {
//     tag: "Defence",
//     title: "CDS Eligibility & Exam Guide",
//     body: `<p>CDS (Combined Defence Services) is conducted by UPSC twice a year for entry into IMA, INA, AFA and OTA.</p>
//     <h3>1. Age & Gender</h3><table class="modal-table"><thead><tr><th>Academy</th><th>Age Limit</th><th>Gender</th></tr></thead><tbody><tr><td>IMA</td><td>19–24 years</td><td>Male</td></tr><tr><td>INA</td><td>19–24 years</td><td>Male</td></tr><tr><td>AFA</td><td>20–24 yrs</td><td>Male</td></tr><tr><td>OTA – Men</td><td>19–25 years</td><td>Male</td></tr><tr><td>OTA – Women</td><td>19–25 years</td><td>Female</td></tr></tbody></table>
//     <h3>2. Educational Qualification</h3><table class="modal-table"><thead><tr><th>Academy</th><th>Qualification</th></tr></thead><tbody><tr><td>IMA / OTA</td><td>Graduation from recognized university</td></tr><tr><td>INA</td><td>Degree in Engineering</td></tr><tr><td>AFA</td><td>Degree with Physics & Maths at 10+2</td></tr></tbody></table>
//     <div class="note-box"><b>Note:</b> Final year candidates can apply but must submit proof of passing at SSB.</div>`,
//   },
//   ssc: {
//     tag: "SSC",
//     title: "Coaching For SSC Exam",
//     body: `<p>SSC is a reputed organization under the Government of India that recruits eligible candidates for various Government departments/ministries through SSC CGL, SSC JE, SSC CHSL, SSC MTS, and SSC CPO exams.</p>
//     <div class="info-chips"><div class="chip"><span>Exams Covered</span>CGL, JE, CHSL, MTS, CPO</div><div class="chip"><span>Mode</span>Online & Offline</div><div class="chip"><span>Demo Classes</span>Free</div></div>
//     <h3>Our Features</h3>
//     <div class="feature-item"><b>Skilled Faculty:</b> A dedicated group of faculty providing necessary guidance to scale SSC Exams with ease.</div>
//     <div class="feature-item"><b>Quality Course Content:</b> Comprehensive and exhaustive course content covering all topics of all sections.</div>
//     <div class="feature-item"><b>Best Online Tests:</b> Real-time feel of examinations through our well-designed Test Series.</div>
//     <div class="feature-item"><b>Free Demo Classes:</b> Free demo classes to help students choose the right batch.</div>
//     <div class="feature-item"><b>Extra Doubt Clearing Sessions:</b> Extra sessions apart from regular classes to clear doubts and queries.</div>`,
//   },
// };

// /* ══════════════════════════════════════════
//    SECTION TITLE
// ══════════════════════════════════════════ */
// function SectionTitle({ children, sub }) {
//   return (
//     <div style={{ textAlign: "center", marginBottom: 42 }}>
//       <h2 style={{
//         fontFamily: "'Rajdhani',sans-serif",
//         fontSize: "clamp(24px, 4vw, 36px)",
//         fontWeight: 700,
//         color: C.navy,
//         letterSpacing: ".02em",
//         display: "inline-block",
//         position: "relative",
//         marginBottom: 10,
//       }}>
//         {children}
//         <span style={{
//           display: "block",
//           margin: "8px auto 0",
//           width: 60,
//           height: 3,
//           background: `linear-gradient(90deg,${C.red},${C.gold})`,
//           borderRadius: 2,
//         }} />
//       </h2>
//       {sub && (
//         <p style={{
//           fontSize: "clamp(12px, 1.5vw, 14px)",
//           color: "#4a5e7a",
//           maxWidth: 680,
//           margin: "12px auto 0",
//           lineHeight: 1.6,
//           padding: "0 16px",
//         }}>
//           {sub}
//         </p>
//       )}
//     </div>
//   );
// }

// /* ══════════════════════════════════════════
//    MODAL
// ══════════════════════════════════════════ */
// function Modal({ id, onClose }) {
//   if (!id) return null;
//   const m = modalContent[id];
//   return (
//     <div
//       onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
//       style={{
//         position: "fixed", inset: 0,
//         background: "rgba(10,24,52,.65)",
//         zIndex: 1000,
//         display: "flex", alignItems: "center", justifyContent: "center",
//         backdropFilter: "blur(3px)",
//         padding: "16px",
//       }}
//     >
//       <style>{`
//         @keyframes modalIn{from{transform:scale(.92);opacity:0}to{transform:scale(1);opacity:1}}
//         .modal-table{width:100%;border-collapse:collapse;margin:10px 0 20px;font-size:13px}
//         .modal-table th{background:#1a3a6b;color:#fff;padding:9px 12px;text-align:left;font-weight:600}
//         .modal-table td{padding:8px 12px;border-bottom:1px solid #e8eef5;color:#3a4a60}
//         .modal-table tr:nth-child(even) td{background:#f7f9fc}
//         .note-box{background:#fff8e1;border-left:3px solid #f9a825;border-radius:4px;padding:12px 16px;margin:14px 0;font-size:13px;color:#5a4a20;font-style:italic}
//         .info-chips{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px}
//         .chip{background:#f0f4fa;border:1px solid #d0dcee;border-radius:6px;padding:7px 13px;font-size:12px;color:#1a3a6b;font-weight:600;display:flex;flex-direction:column;gap:2px}
//         .chip span:first-child{font-size:10px;color:#8a9ab5;font-weight:500;text-transform:uppercase;letter-spacing:.06em}
//         .feature-item{margin-bottom:10px;font-size:14px;color:#3a4a60;line-height:1.7}
//         .feature-item b{color:#1a3a6b}
//         .modal-inner p{font-size:14px;color:#3a4a60;line-height:1.75;margin-bottom:14px}
//         .modal-inner h3{font-family:'Rajdhani',sans-serif;font-size:19px;font-weight:700;color:#1a3a6b;margin:22px 0 8px;border-left:3px solid #e84118;padding-left:10px}
//         .modal-inner ul,.modal-inner ol{padding-left:20px;margin-bottom:14px}
//         .modal-inner li{font-size:14px;color:#3a4a60;line-height:1.7;margin-bottom:6px}
//         @media(max-width:600px){
//           .modal-table th,.modal-table td{padding:6px 8px;font-size:11px}
//           .modal-inner h3{font-size:16px}
//           .modal-inner li,.modal-inner p,.feature-item{font-size:12px}
//         }
//       `}</style>
//       <div style={{
//         background: "#fff", borderRadius: 16,
//         width: "100%", maxWidth: 820, maxHeight: "90vh",
//         overflow: "hidden", display: "flex", flexDirection: "column",
//         boxShadow: "0 24px 64px rgba(10,24,52,.3)",
//         animation: "modalIn .3s cubic-bezier(.34,1.4,.64,1)",
//       }}>
//         <div style={{
//           background: "linear-gradient(135deg,#1a3a6b,#0d5e8a)",
//           padding: "20px 24px 16px", flexShrink: 0,
//           display: "flex", alignItems: "flex-start",
//           justifyContent: "space-between", gap: 16,
//         }}>
//           <div>
//             <div style={{
//               display: "inline-block", background: C.red, color: "#fff",
//               fontSize: 10, fontWeight: 700, letterSpacing: ".12em",
//               textTransform: "uppercase", padding: "3px 10px",
//               borderRadius: 3, marginBottom: 8,
//             }}>{m.tag}</div>
//             <div style={{
//               fontFamily: "'Rajdhani',sans-serif",
//               fontSize: "clamp(18px, 3vw, 26px)",
//               fontWeight: 700, color: "#fff",
//               lineHeight: 1.15, letterSpacing: ".02em",
//             }}>{m.title}</div>
//           </div>
//           <button onClick={onClose} style={{
//             background: "rgba(255,255,255,.15)", border: "none",
//             color: "#fff", width: 34, height: 34, borderRadius: "50%",
//             fontSize: 18, cursor: "pointer",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             flexShrink: 0,
//           }}>✕</button>
//         </div>
//         <div
//           className="modal-inner"
//           style={{ overflowY: "auto", padding: "24px 28px 28px", flex: 1, fontFamily: "'Hind',sans-serif" }}
//           dangerouslySetInnerHTML={{ __html: m.body }}
//         />
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════
//    SINGLE COURSE CARD
//    ✅ KEY FIX: har card ka apna useState
//    ✅ KEY FIX: card height auto — grid stretch nahi karegi
// ══════════════════════════════════════════ */
// function CourseCard({ c, onKnowMore }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: "#fff",
//         borderRadius: 14,
//         overflow: "hidden",
//         boxShadow: hovered
//           ? "0 12px 36px rgba(26,58,107,.18)"
//           : "0 2px 16px rgba(26,58,107,.08)",
//         transform: hovered ? "translateY(-6px)" : "translateY(0)",
//         transition: "transform .35s ease, box-shadow .35s ease",
//         cursor: "pointer",
//         position: "relative",
//         /* ✅ CRITICAL FIX: height:auto so only THIS card grows */
//         height: "auto",
//         alignSelf: "start",
//       }}
//     >
//       {/* Image area — fixed height, never changes */}
//       <div style={{
//         width: "100%",
//         height: 180,
//         position: "relative",
//         background: `linear-gradient(135deg,${C.navy},#0d5e8a)`,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//         flexShrink: 0,
//       }}>
//         <span style={{
//           fontFamily: "'Rajdhani',sans-serif",
//           fontSize: "clamp(40px, 6vw, 64px)",
//           fontWeight: 700,
//           color: "rgba(255,255,255,.15)",
//           userSelect: "none",
//         }}>{c.tag}</span>

//         {/* Badge */}
//         <div style={{
//           position: "absolute", top: 12, left: 12,
//           background: C.red, color: "#fff",
//           fontSize: 10, fontWeight: 700,
//           letterSpacing: ".1em", textTransform: "uppercase",
//           padding: "3px 10px", borderRadius: 3,
//         }}>{c.tag}</div>

//         {/* Hover overlay */}
//         <div style={{
//           position: "absolute", inset: 0,
//           background: hovered
//             ? "linear-gradient(180deg,transparent 40%,rgba(26,58,107,.55) 100%)"
//             : "transparent",
//           transition: "background .35s",
//         }} />
//       </div>

//       {/* Text content — grows only when hovered */}
//       <div style={{ padding: "18px 20px 20px" }}>

//         {/* Title */}
//         <div style={{ position: "relative", display: "inline-block" }}>
//           <h3 style={{
//             fontFamily: "'Rajdhani',sans-serif",
//             fontSize: "clamp(15px, 2vw, 19px)",
//             fontWeight: 700, color: C.navy,
//             lineHeight: 1.2, margin: 0,
//           }}>{c.title}</h3>
//           {/* Animated underline */}
//           <span style={{
//             display: "block",
//             width: hovered ? "100%" : 0,
//             height: 2,
//             background: `linear-gradient(90deg,${C.red},${C.gold})`,
//             borderRadius: 2,
//             marginTop: 5,
//             transition: "width .35s ease",
//           }} />
//         </div>

//         {/* Description — collapses to 0 when not hovered */}
//         <div style={{
//           overflow: "hidden",
//           maxHeight: hovered ? "200px" : "0px",
//           opacity: hovered ? 1 : 0,
//           transition: "max-height .4s ease, opacity .35s ease",
//         }}>
//           <p style={{
//             fontSize: "clamp(11px, 1.3vw, 13px)",
//             color: "#4a5e7a",
//             lineHeight: 1.65,
//             margin: "10px 0 0",
//           }}>{c.desc}</p>

//           {/* Know More button */}
//           <button
//             onClick={(e) => { e.stopPropagation(); onKnowMore(c.id); }}
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 6,
//               fontSize: "clamp(10px, 1.2vw, 13px)",
//               fontWeight: 700,
//               color: C.red,
//               letterSpacing: ".08em",
//               textTransform: "uppercase",
//               marginTop: 14,
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//               fontFamily: "'Hind',sans-serif",
//               padding: 0,
//             }}
//           >
//             Know More <span style={{ fontSize: 16 }}>→</span>
//           </button>
//         </div>
//       </div>

//       {/* Bottom sweep line */}
//       <span style={{
//         position: "absolute", bottom: 0, left: 0,
//         width: hovered ? "100%" : 0,
//         height: 3,
//         background: `linear-gradient(90deg,${C.navy},${C.red})`,
//         transition: "width .4s ease",
//         zIndex: 3,
//       }} />
//     </div>
//   );
// }

// /* ══════════════════════════════════════════
//    COURSES SECTION  (main export)
// ══════════════════════════════════════════ */
// export default function CoursesSection() {
//   const [modalId, setModalId] = useState(null);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Hind:wght@400;500;600&display=swap');

//         /* ✅ align-items:start = cards don't stretch to match tallest sibling */
//         .courses-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 24px;
//           max-width: 1100px;
//           margin: 0 auto;
//           align-items: start;
//         }
//         @media (max-width: 900px) {
//           .courses-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
//         }
//         @media (max-width: 560px) {
//           .courses-grid { grid-template-columns: 1fr; gap: 16px; }
//         }

//         .courses-section { padding: 60px 40px 70px; }
//         @media (max-width: 768px) { .courses-section { padding: 40px 20px 50px; } }
//         @media (max-width: 480px) { .courses-section { padding: 32px 14px 40px; } }
//       `}</style>

//       <section
//         className="courses-section"
//         style={{ background: C.bg, fontFamily: "'Hind',sans-serif" }}
//       >
//         <SectionTitle sub="From UPSC to NDA, our expert-designed programmes give you the edge to clear India's most competitive examinations">
//           Popular Courses
//         </SectionTitle>

//         <div className="courses-grid">
//           {courses.map((c) => (
//             <CourseCard key={c.id} c={c} onKnowMore={setModalId} />
//           ))}
//         </div>
//       </section>

//       <Modal id={modalId} onClose={() => setModalId(null)} />
//     </>
//   );
// }




import { useState, useEffect, useRef } from "react";


/* ─── Color tokens ─── */
const C = {
  navy: "#1a3a6b",
  red: "#e84118",
  gold: "#f9a825",
  bg: "#f0f4fa",
};

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const courses = [
  {
    tag: "UPSC",
    title: "General Studies (UPSC CSE)",
    desc: "Covers all four GS papers — History, Polity, Geography, Economy, Science & Technology, Environment, Ethics. Includes test series, answer writing practice, and interview preparation.",
    id: "upsc",
  },
  {
    tag: "PPSC",
    title: "PPSC / Punjab PCS Coaching",
    desc: "Comprehensive coaching for Punjab Public Service Commission examination. Subject-wise coverage, current affairs, and state-specific modules.",
    id: "ppsc",
  },
  {
    tag: "IAS",
    title: "IAS Foundation Batch",
    desc: "A complete foundation programme for UPSC Civil Services aspirants starting from scratch. Includes mentorship, daily practice questions, and mock interviews.",
    id: "ias",
  },
  {
    tag: "NDA",
    title: "NDA Coaching",
    desc: "Specialized coaching for National Defence Academy entrance exam. Mathematics, General Ability, and SSB interview preparation included.",
    id: "nda",
  },
  {
    tag: "CDS",
    title: "CDS Coaching",
    desc: "Combined Defence Services coaching for IMA, INA, AFA, and OTA entries. English, GK, and Mathematics covered comprehensively.",
    id: "cds",
  },
  {
    tag: "SSC",
    title: "SSC CGL / CHSL Coaching",
    desc: "Dedicated SSC coaching covering CGL, CHSL, MTS, CPO, and JE examinations with skilled faculty, tests, and doubt sessions.",
    id: "ssc",
  },
];

const modalContent = {
  upsc: {
    tag: "UPSC",
    title: "UPSC Civil Services (IAS / IPS)",
    body: `<p>UPSC Civil Services Examination is the most prestigious examination in India, conducted for IAS, IPS, IFS, and other Group A & B services. The exam has three stages: Preliminary, Mains, and Interview/Personality Test.</p>
    <h3>1. Eligibility</h3><ul><li>Citizen of India (for IAS/IPS)</li><li>Age: 21–32 years (relaxation for reserved categories)</li><li>Educational Qualification: Graduate from any recognized university</li><li>Number of Attempts: 6 for General; 9 for OBC; unlimited for SC/ST till age limit</li></ul>
    <h3>2. Exam Pattern</h3><table class="modal-table"><thead><tr><th>Stage</th><th>Papers</th><th>Marks</th></tr></thead><tbody><tr><td>Prelims</td><td>GS Paper I + CSAT</td><td>200+200</td></tr><tr><td>Mains</td><td>9 Papers</td><td>1750 (Merit)</td></tr><tr><td>Interview</td><td>Personality Test</td><td>275</td></tr></tbody></table>
    <div class="note-box"><b>Note:</b> CSAT is qualifying in nature (minimum 33%). Only GS Paper I marks are counted for Prelims merit list.</div>
    <h3>3. Our Course Features</h3><ul><li><b>Comprehensive GS Coverage</b> across all four papers</li><li><b>Daily current affairs</b> classes and notes</li><li><b>Answer writing practice</b> with personalized feedback</li><li><b>Full mock interview</b> preparation panel</li></ul>`,
  },
  ppsc: {
    tag: "PPSC",
    title: "PPSC / Punjab PCS Coaching",
    body: `<p>Punjab Public Service Commission (PPSC) conducts the Punjab Civil Services (PCS) examination for recruitment to Group A and Group B state civil services posts in Punjab.</p>
    <h3>1. Eligibility</h3><ul><li>Citizen of India; domicile of Punjab preferred</li><li>Age: 21–37 years (relaxation as per Punjab Govt. norms)</li><li>Graduate from a recognized university</li></ul>
    <h3>2. Exam Pattern</h3><table class="modal-table"><thead><tr><th>Stage</th><th>Subject</th><th>Marks</th></tr></thead><tbody><tr><td>Prelims</td><td>GS + CSAT</td><td>100+100</td></tr><tr><td>Mains</td><td>6 Papers</td><td>1200</td></tr><tr><td>Interview</td><td>Personality Test</td><td>150</td></tr></tbody></table>
    <h3>3. Our Coaching Highlights</h3><ul><li>State-specific current affairs &amp; Punjab History coverage</li><li>Bilingual instruction (English + Hindi/Punjabi)</li><li>Experienced PPSC-qualified faculty</li></ul>`,
  },
  ias: {
    tag: "IAS",
    title: "IAS Foundation Batch",
    body: `<p>Our IAS Foundation Batch is a comprehensive, structured programme for aspirants who want to start their UPSC journey with a strong base. Ideal for final-year students and fresh graduates.</p>
    <div class="info-chips"><div class="chip"><span>Duration</span>12 Months</div><div class="chip"><span>Mode</span>Offline + Online</div><div class="chip"><span>Medium</span>English & Hindi</div><div class="chip"><span>Batch Size</span>Limited</div></div>
    <h3>Programme Highlights</h3><ul><li>Complete GS 1–4 coverage with experienced faculty</li><li>Daily news analysis and current affairs sessions</li><li>Monthly full-length prelims mock tests</li><li>Mains answer writing workshops</li><li>One-on-one mentor sessions</li><li>Comprehensive printed study material</li></ul>
    <div class="note-box"><b>Admission Note:</b> Limited seats per batch to ensure personalized attention. Register early to confirm your spot.</div>`,
  },
  nda: {
    tag: "NDA",
    title: "NDA Eligibility & Coaching",
    body: `<p>National Defence Academy (NDA) examination is conducted by UPSC twice a year for entry into the Army, Navy, and Air Force wings. It is one of the most competitive defence examinations in India.</p>
    <h3>1. Eligibility</h3><ul><li>Males who have passed or are appearing in Class 12</li><li>Age: 16.5–19.5 years at time of commencement of course</li><li>Unmarried male candidates only</li></ul>
    <h3>2. Exam Pattern</h3><table class="modal-table"><thead><tr><th>Subject</th><th>Questions</th><th>Marks</th></tr></thead><tbody><tr><td>Mathematics</td><td>120</td><td>300</td></tr><tr><td>General Ability Test</td><td>150</td><td>600</td></tr></tbody></table>
    <h3>3. Physical Standards</h3><ul><li>Height: Minimum 157 cm (Army/Navy); 162.5 cm (Air Force)</li><li>Good eyesight and overall physical fitness</li><li>SSB Interview after written test</li></ul>`,
  },
  cds: {
    tag: "Defence",
    title: "CDS Eligibility & Exam Guide",
    body: `<p>CDS (Combined Defence Services) is conducted by UPSC twice a year for entry into IMA, INA, AFA and OTA.</p>
    <h3>1. Age & Gender</h3><table class="modal-table"><thead><tr><th>Academy</th><th>Age Limit</th><th>Gender</th></tr></thead><tbody><tr><td>IMA</td><td>19–24 years</td><td>Male</td></tr><tr><td>INA</td><td>19–24 years</td><td>Male</td></tr><tr><td>AFA</td><td>20–24 yrs</td><td>Male</td></tr><tr><td>OTA – Men</td><td>19–25 years</td><td>Male</td></tr><tr><td>OTA – Women</td><td>19–25 years</td><td>Female</td></tr></tbody></table>
    <h3>2. Educational Qualification</h3><table class="modal-table"><thead><tr><th>Academy</th><th>Qualification</th></tr></thead><tbody><tr><td>IMA / OTA</td><td>Graduation from recognized university</td></tr><tr><td>INA</td><td>Degree in Engineering</td></tr><tr><td>AFA</td><td>Degree with Physics & Maths at 10+2</td></tr></tbody></table>
    <div class="note-box"><b>Note:</b> Final year candidates can apply but must submit proof of passing at SSB.</div>`,
  },
  ssc: {
    tag: "SSC",
    title: "Coaching For SSC Exam",
    body: `<p>SSC is a reputed organization under the Government of India that recruits eligible candidates for various Government departments/ministries through SSC CGL, SSC JE, SSC CHSL, SSC MTS, and SSC CPO exams.</p>
    <div class="info-chips"><div class="chip"><span>Exams Covered</span>CGL, JE, CHSL, MTS, CPO</div><div class="chip"><span>Mode</span>Online & Offline</div><div class="chip"><span>Demo Classes</span>Free</div></div>
    <h3>Our Features</h3>
    <div class="feature-item"><b>Skilled Faculty:</b> A dedicated group of faculty providing necessary guidance to scale SSC Exams with ease.</div>
    <div class="feature-item"><b>Quality Course Content:</b> Comprehensive and exhaustive course content covering all topics of all sections.</div>
    <div class="feature-item"><b>Best Online Tests:</b> Real-time feel of examinations through our well-designed Test Series.</div>
    <div class="feature-item"><b>Free Demo Classes:</b> Free demo classes to help students choose the right batch.</div>
    <div class="feature-item"><b>Extra Doubt Clearing Sessions:</b> Extra sessions apart from regular classes to clear doubts and queries.</div>`,
  },
};

/* ══════════════════════════════════════════
   SECTION TITLE
══════════════════════════════════════════ */
function SectionTitle({ children, sub }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 42 }}>
      <h2 style={{
        fontFamily: "'Rajdhani',sans-serif",
        fontSize: "clamp(24px, 4vw, 36px)",
        fontWeight: 700,
        color: C.navy,
        letterSpacing: ".02em",
        display: "inline-block",
        position: "relative",
        marginBottom: 10,
      }}>
        {children}
        <span style={{
          display: "block",
          margin: "8px auto 0",
          width: 60,
          height: 3,
          background: `linear-gradient(90deg,${C.red},${C.gold})`,
          borderRadius: 2,
        }} />
      </h2>
      {sub && (
        <p style={{
          fontSize: "clamp(12px, 1.5vw, 14px)",
          color: "#4a5e7a",
          maxWidth: 680,
          margin: "12px auto 0",
          lineHeight: 1.6,
          padding: "0 16px",
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════
   MODAL
══════════════════════════════════════════ */
function Modal({ id, onClose }) {
  if (!id) return null;
  const m = modalContent[id];
  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(10,24,52,.65)",
        zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        backdropFilter: "blur(3px)",
        padding: "16px",
      }}
    >
      <style>{`
        @keyframes modalIn{from{transform:scale(.92);opacity:0}to{transform:scale(1);opacity:1}}
        .modal-table{width:100%;border-collapse:collapse;margin:10px 0 20px;font-size:13px}
        .modal-table th{background:#1a3a6b;color:#fff;padding:9px 12px;text-align:left;font-weight:600}
        .modal-table td{padding:8px 12px;border-bottom:1px solid #e8eef5;color:#3a4a60}
        .modal-table tr:nth-child(even) td{background:#f7f9fc}
        .note-box{background:#fff8e1;border-left:3px solid #f9a825;border-radius:4px;padding:12px 16px;margin:14px 0;font-size:13px;color:#5a4a20;font-style:italic}
        .info-chips{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px}
        .chip{background:#f0f4fa;border:1px solid #d0dcee;border-radius:6px;padding:7px 13px;font-size:12px;color:#1a3a6b;font-weight:600;display:flex;flex-direction:column;gap:2px}
        .chip span:first-child{font-size:10px;color:#8a9ab5;font-weight:500;text-transform:uppercase;letter-spacing:.06em}
        .feature-item{margin-bottom:10px;font-size:14px;color:#3a4a60;line-height:1.7}
        .feature-item b{color:#1a3a6b}
        .modal-inner p{font-size:14px;color:#3a4a60;line-height:1.75;margin-bottom:14px}
        .modal-inner h3{font-family:'Rajdhani',sans-serif;font-size:19px;font-weight:700;color:#1a3a6b;margin:22px 0 8px;border-left:3px solid #e84118;padding-left:10px}
        .modal-inner ul,.modal-inner ol{padding-left:20px;margin-bottom:14px}
        .modal-inner li{font-size:14px;color:#3a4a60;line-height:1.7;margin-bottom:6px}
        @media(max-width:600px){
          .modal-table th,.modal-table td{padding:6px 8px;font-size:11px}
          .modal-inner h3{font-size:16px}
          .modal-inner li,.modal-inner p,.feature-item{font-size:12px}
        }
      `}</style>
      <div style={{
        background: "#fff", borderRadius: 16,
        width: "100%", maxWidth: 820, maxHeight: "90vh",
        overflow: "hidden", display: "flex", flexDirection: "column",
        boxShadow: "0 24px 64px rgba(10,24,52,.3)",
        animation: "modalIn .3s cubic-bezier(.34,1.4,.64,1)",
      }}>
        <div style={{
          background: "linear-gradient(135deg,#1a3a6b,#0d5e8a)",
          padding: "20px 24px 16px", flexShrink: 0,
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between", gap: 16,
        }}>
          <div>
            <div style={{
              display: "inline-block", background: C.red, color: "#fff",
              fontSize: 10, fontWeight: 700, letterSpacing: ".12em",
              textTransform: "uppercase", padding: "3px 10px",
              borderRadius: 3, marginBottom: 8,
            }}>{m.tag}</div>
            <div style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontSize: "clamp(18px, 3vw, 26px)",
              fontWeight: 700, color: "#fff",
              lineHeight: 1.15, letterSpacing: ".02em",
            }}>{m.title}</div>
          </div>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,.15)", border: "none",
            color: "#fff", width: 34, height: 34, borderRadius: "50%",
            fontSize: 18, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>✕</button>
        </div>
        <div
          className="modal-inner"
          style={{ overflowY: "auto", padding: "24px 28px 28px", flex: 1, fontFamily: "'Hind',sans-serif" }}
          dangerouslySetInnerHTML={{ __html: m.body }}
        />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   SINGLE COURSE CARD
   ✅ KEY FIX: har card ka apna useState
   ✅ KEY FIX: card height auto — grid stretch nahi karegi
══════════════════════════════════════════ */
function CourseCard({ c, onKnowMore }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 12px 36px rgba(26,58,107,.18)"
          : "0 2px 16px rgba(26,58,107,.08)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform .35s ease, box-shadow .35s ease",
        cursor: "pointer",
        position: "relative",
        /* ✅ CRITICAL FIX: height:auto so only THIS card grows */
        height: "auto",
        alignSelf: "start",
      }}
    >
      {/* Image area — fixed height, never changes */}
      {/* <div style={{
        width: "100%",
        height: 180,
        position: "relative",
        background: `linear-gradient(135deg,${C.navy},#0d5e8a)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <span style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: "clamp(40px, 6vw, 64px)",
          fontWeight: 700,
          color: "rgba(255,255,255,.15)",
          userSelect: "none",
        }}>{c.tag}</span> */}
<div
  style={{
    width: "100%",
    height: 180,
    position: "relative",
    overflow: "hidden",
    flexShrink: 0,
  }}
>
  <img
    src={`/assets/${c.id}.png`}
    alt={c.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform .5s ease",
      transform: hovered ? "scale(1.08)" : "scale(1)",
    }}
  />

  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        hovered
          ? "linear-gradient(180deg,transparent 40%,rgba(26,58,107,.45) 100%)"
          : "rgba(0,0,0,.15)",
      transition: "all .35s ease",
    }}
  />
</div>
        {/* Badge */}
        {/* <div style={{
          position: "absolute", top: 12, left: 12,
          background: C.red, color: "#fff",
          fontSize: 10, fontWeight: 700,
          letterSpacing: ".1em", textTransform: "uppercase",
          padding: "3px 10px", borderRadius: 3,
        }}>{c.tag}</div> */}

        {/* Hover overlay */}
        {/* <div style={{
          position: "absolute", inset: 0,
          background: hovered
            ? "linear-gradient(180deg,transparent 40%,rgba(26,58,107,.55) 100%)"
            : "transparent",
          transition: "background .35s",
        }} />
      </div> */}

      {/* Text content — grows only when hovered */}
      <div style={{ padding: "18px 20px 20px" }}>

        {/* Title */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <h3 style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: "clamp(15px, 2vw, 19px)",
            fontWeight: 700, color: C.navy,
            lineHeight: 1.2, margin: 0,
          }}>{c.title}</h3>
          {/* Animated underline */}
          <span style={{
            display: "block",
            width: hovered ? "100%" : 0,
            height: 2,
            background: `linear-gradient(90deg,${C.red},${C.gold})`,
            borderRadius: 2,
            marginTop: 5,
            transition: "width .35s ease",
          }} />
        </div>

        {/* Description — collapses to 0 when not hovered */}
        <div style={{
          overflow: "hidden",
          maxHeight: hovered ? "200px" : "0px",
          opacity: hovered ? 1 : 0,
          transition: "max-height .4s ease, opacity .35s ease",
        }}>
          <p style={{
            fontSize: "clamp(11px, 1.3vw, 13px)",
            color: "#4a5e7a",
            lineHeight: 1.65,
            margin: "10px 0 0",
          }}>{c.desc}</p>

          {/* Know More button */}
          <button
            onClick={(e) => { e.stopPropagation(); onKnowMore(c.id); }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "clamp(10px, 1.2vw, 13px)",
              fontWeight: 700,
              color: C.red,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              marginTop: 14,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Hind',sans-serif",
              padding: 0,
            }}
          >
            Know More <span style={{ fontSize: 16 }}>→</span>
          </button>
        </div>
      </div>

      {/* Bottom sweep line */}
      <span style={{
        position: "absolute", bottom: 0, left: 0,
        width: hovered ? "100%" : 0,
        height: 3,
        background: `linear-gradient(90deg,${C.navy},${C.red})`,
        transition: "width .4s ease",
        zIndex: 3,
      }} />
    </div>
  );
}

/* ══════════════════════════════════════════
   COURSES SECTION  (main export)
══════════════════════════════════════════ */

export default function CoursesSection() {
  const [modalId, setModalId] = useState(null);
 const sectionRef = useRef(null);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Hind:wght@400;500;600&display=swap');

        /* ✅ align-items:start = cards don't stretch to match tallest sibling */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }
        @media (max-width: 900px) {
          .courses-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
        }
        @media (max-width: 560px) {
          .courses-grid { grid-template-columns: 1fr; gap: 16px; }
        }

        .courses-section { padding: 60px 40px 70px; }
        @media (max-width: 768px) { .courses-section { padding: 40px 20px 50px; } }
        @media (max-width: 480px) { .courses-section { padding: 32px 14px 40px; } }
      `}</style>

      <section
        ref={sectionRef}
        className="courses-section"
        style={{ background: C.bg, fontFamily: "'Hind',sans-serif" }}
      >
        <SectionTitle sub="From UPSC to NDA, our expert-designed programmes give you the edge to clear India's most competitive examinations">
          Popular Courses
        </SectionTitle>

        <div className="courses-grid">
          {courses.map((c, index) => (
  <div
    key={c.id}
    style={{
      opacity: animateCards ? 1 : 0,

      transform: animateCards
        ? "translateX(0)"
        : index < 3
        ? "translateX(-250px)"
        : "translateX(250px)",

      transition: `
        opacity 0.8s ease,
        transform 0.9s cubic-bezier(.22,.61,.36,1)
      `,

      transitionDelay: `${index * 150}ms`,
    }}
  >
    <CourseCard c={c} onKnowMore={setModalId} />
  </div>
))}
        </div>
      </section>

      <Modal id={modalId} onClose={() => setModalId(null)} />
    </>
  );
}
