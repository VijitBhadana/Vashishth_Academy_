// import { useState, useEffect } from "react";
// import { C } from "../data/data";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   const [newsletterEmail, setNewsletterEmail] = useState("");
//   const [newsletterDone, setNewsletterDone] = useState(false);
//   const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

//   useEffect(() => {
//     const handler = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handler);
//     return () => window.removeEventListener("resize", handler);
//   }, []);

//   const isMobile = width < 640;
//   const isTablet = width >= 640 && width < 1024;

//   const contactItems = [
//     { icon: <FaMapMarkerAlt size={15} color={C.red} />, label: "Address", val: "268 A, 1st Floor, Krishna Mandir Road, Ludhiana." },
//     { icon: <FaPhone size={14} color={C.red} />, label: "Phone", val: "+91-94640-31200", href: "tel:+919464031200" },
//     { icon: <FaEnvelope size={14} color={C.red} />, label: "Email", val: "info@vashishthacademy.com", href: "mailto:info@vashishthacademy.com" },
//     { icon: <FaClock size={14} color={C.red} />, label: "Opening Hours", val: "Mon–Sat: 8:00 AM – 6:00 PM" },
//   ];

//   const socialLinks = [
//     { bg: "#1877f2", icon: <FaFacebookF size={15} color="#fff" />, href: "#" },
//     { bg: "#ff0000", icon: <FaYoutube size={15} color="#fff" />, href: "#" },
//     { bg: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)", icon: <FaInstagram size={15} color="#fff" />, href: "#" },
//     { bg: "#1da1f2", icon: <FaTwitter size={15} color="#fff" />, href: "#" },
//   ];

//   const colHeadingStyle = {
//     fontFamily: "'Rajdhani',sans-serif",
//     fontSize: 16,
//     fontWeight: 700,
//     color: "#fff",
//     letterSpacing: ".06em",
//     textTransform: "uppercase",
//     marginBottom: 18,
//     paddingBottom: 12,
//     position: "relative",
//   };

//   const linkStyle = {
//     fontSize: 13,
//     color: "rgba(255,255,255,.55)",
//     textDecoration: "none",
//     display: "flex",
//     alignItems: "center",
//     gap: 8,
//     transition: "all .2s",
//   };

//   return (
//     <footer style={{ background: "linear-gradient(160deg,#0d1b2e 0%,#12243a 60%,#0d1b2e 100%)", position: "relative", overflow: "hidden", fontFamily: "'Hind',sans-serif" }}>

//       {/* Top color bar */}
//       <div style={{ height: 4, background: `linear-gradient(90deg,${C.red} 0%,${C.gold} 40%,${C.red} 70%,${C.navy} 100%)` }} />

//       {/* ── Newsletter ── */}
//       <div style={{
//         background: "linear-gradient(135deg,#e84118 0%,#c23412 100%)",
//         padding: isMobile ? "18px 16px" : isTablet ? "18px 32px" : "16px 60px",
//         display: "flex",
//         flexDirection: isMobile ? "column" : "row",
//         alignItems: isMobile ? "flex-start" : "center",
//         justifyContent: "space-between",
//         gap: isMobile ? 14 : 24,
//         position: "relative",
//         overflow: "hidden",
//       }}>
//         <div style={{ position: "absolute", right: -40, top: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,.06)" }} />
//         <div style={{ position: "relative" }}>
//           <h3 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: isMobile ? 16 : 20, fontWeight: 700, color: "#fff", letterSpacing: ".03em", marginBottom: 3 }}>
//             📬 Stay Updated with Latest UPSC News & Batches
//           </h3>
//           <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.8)" }}>
//             Subscribe to get current affairs, batch alerts, and exam tips directly in your inbox.
//           </p>
//         </div>
//         <div style={{ display: "flex", gap: 10, flexShrink: 0, position: "relative", width: isMobile ? "100%" : "auto", flexWrap: "wrap" }}>
//           {!newsletterDone ? (
//             <>
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 value={newsletterEmail}
//                 onChange={e => setNewsletterEmail(e.target.value)}
//                 style={{
//                   padding: "10px 18px",
//                   borderRadius: 6,
//                   border: "none",
//                   outline: "none",
//                   fontFamily: "'Hind',sans-serif",
//                   fontSize: 13,
//                   color: "#1a2a40",
//                   background: "#fff",
//                   width: isMobile ? "100%" : 240,
//                   boxSizing: "border-box",
//                 }}
//               />
//               <button
//                 onClick={() => { if (!newsletterEmail.includes("@")) { alert("Please enter a valid email address."); return; } setNewsletterDone(true); }}
//                 style={{
//                   padding: "10px 22px",
//                   borderRadius: 6,
//                   border: "2px solid #fff",
//                   background: "transparent",
//                   color: "#fff",
//                   fontFamily: "'Rajdhani',sans-serif",
//                   fontSize: 14,
//                   fontWeight: 700,
//                   letterSpacing: ".08em",
//                   textTransform: "uppercase",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   whiteSpace: "nowrap",
//                   width: isMobile ? "100%" : "auto",
//                 }}
//                 onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = C.red; }}
//                 onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}>
//                 Subscribe
//               </button>
//             </>
//           ) : (
//             <div style={{ color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontSize: 16, fontWeight: 700 }}>✓ Subscribed!</div>
//           )}
//         </div>
//       </div>

//       {/* ── Body ── */}
//       <div style={{
//         padding: isMobile ? "30px 16px 20px" : isTablet ? "32px 32px 20px" : "36px 60px 24px",
//         display: "grid",
//         gridTemplateColumns: isMobile
//           ? "1fr"
//           : isTablet
//           ? "1fr 1fr"
//           : "1.4fr 1fr 1fr 1.1fr",
//         gap: isMobile ? 28 : isTablet ? 28 : 48,
//         position: "relative",
//         zIndex: 1,
//       }}>

//         {/* ── Brand ── */}
//         <div>
//           <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//             <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#1a3a6b,#0d2b52)", border: `2px solid ${C.red}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//               <svg viewBox="0 0 28 28" fill="none" width="28" height="28">
//                 <circle cx="14" cy="14" r="13" stroke="#f9a825" strokeWidth="1.5"/>
//                 <path d="M14 4 L18 10 L14 8 L10 10 Z" fill="#f9a825"/>
//                 <path d="M8 12 L14 8 L20 12 L20 22 L8 22 Z" fill="none" stroke="#fff" strokeWidth="1.2"/>
//                 <path d="M11 22 L11 16 L14 14 L17 16 L17 22" fill="none" stroke="#fff" strokeWidth="1.2"/>
//               </svg>
//             </div>
//             <div>
//               <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 17, fontWeight: 700, color: "#fff", letterSpacing: ".04em", lineHeight: 1.1 }}>Vashishth IAS Academy</div>
//               <div style={{ fontSize: 10, color: C.red, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase" }}>Ludhiana · Making Future</div>
//             </div>
//           </div>
//           <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)", lineHeight: 1.8, marginBottom: 22 }}>
//             Vashishth IAS Academy Ludhiana was established in 2008 to offer coaching for Civil Service Examinations. Academy functions at Ludhiana only and has no branch anywhere.{" "}
//             <a href="#" style={{ color: C.gold, textDecoration: "none", fontWeight: 600 }}>Read More...</a>
//           </p>
//           <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
//             {socialLinks.map((s, i) => (
//               <a key={i} href={s.href}
//                 style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: s.bg, textDecoration: "none", transition: "transform .2s,opacity .2s", flexShrink: 0 }}
//                 onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.opacity = ".85"; }}
//                 onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.opacity = "1"; }}>
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* ── Quick Links ── */}
//         <div>
//           <div style={colHeadingStyle}>
//             Quick Links
//             <span style={{ position: "absolute", bottom: 0, left: 0, display: "block", width: 36, height: 2.5, borderRadius: 2, background: `linear-gradient(90deg,${C.red},${C.gold})` }} />
//           </div>
//           <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7, margin: 0, padding: 0 }}>
//             {["Home","About","Daily Current Affairs","Brochures","Contact Us","Privacy Policy"].map(link => (
//               <li key={link}>
//                 <a href="#" style={linkStyle}
//                   onMouseEnter={e => { e.currentTarget.style.color = C.gold; e.currentTarget.style.paddingLeft = "4px"; }}
//                   onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,.55)"; e.currentTarget.style.paddingLeft = ""; }}>
//                   <span style={{ color: C.red, fontSize: 16 }}>›</span>{link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ── Exams ── */}
//         <div>
//           <div style={colHeadingStyle}>
//             Exams We Cover
//             <span style={{ position: "absolute", bottom: 0, left: 0, display: "block", width: 36, height: 2.5, borderRadius: 2, background: `linear-gradient(90deg,${C.red},${C.gold})` }} />
//           </div>
//           <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7, margin: 0, padding: 0 }}>
//             {["UPSC Civil Services (IAS/IPS)","PPSC / Punjab PCS","SSC CGL / CHSL","NDA / CDS","State PSC Exams","Online Batch"].map(link => (
//               <li key={link}>
//                 <a href="#" style={linkStyle}
//                   onMouseEnter={e => { e.currentTarget.style.color = C.gold; e.currentTarget.style.paddingLeft = "4px"; }}
//                   onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,.55)"; e.currentTarget.style.paddingLeft = ""; }}>
//                   <span style={{ color: C.red, fontSize: 16 }}>›</span>{link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ── Contact ── */}
//         <div>
//           <div style={colHeadingStyle}>
//             Contact Us
//             <span style={{ position: "absolute", bottom: 0, left: 0, display: "block", width: 36, height: 2.5, borderRadius: 2, background: `linear-gradient(90deg,${C.red},${C.gold})` }} />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//             {contactItems.map(c => (
//               <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
//                 <div style={{ width: 34, height: 34, borderRadius: 8, flexShrink: 0, background: "rgba(232,65,24,.15)", border: "1px solid rgba(232,65,24,.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   {c.icon}
//                 </div>
//                 <div>
//                   <div style={{ fontSize: 10, color: C.red, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 2 }}>{c.label}</div>
//                   {c.href
//                     ? <a href={c.href} style={{ fontSize: 12.5, color: "rgba(255,255,255,.65)", textDecoration: "none" }}>{c.val}</a>
//                     : <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.65)", lineHeight: 1.6 }}>{c.val}</div>}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Divider ── */}
//       <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.1) 20%,rgba(232,65,24,.4) 50%,rgba(255,255,255,.1) 80%,transparent)", margin: isMobile ? "0 16px" : "0 60px" }} />

//       {/* ── Bottom bar ── */}
//       <div style={{
//         padding: isMobile ? "14px 16px" : isTablet ? "14px 32px" : "14px 60px",
//         display: "flex",
//         flexDirection: isMobile ? "column" : "row",
//         alignItems: isMobile ? "flex-start" : "center",
//         justifyContent: "space-between",
//         gap: isMobile ? 10 : 12,
//         flexWrap: "wrap",
//       }}>
//         <div style={{ fontSize: 12, color: "rgba(255,255,255,.35)" }}>
//           Copyright © 2026. <b style={{ color: "rgba(255,255,255,.55)" }}>All Rights Reserved.</b> · Vashishth IAS Academy, Ludhiana
//         </div>
//         <div style={{ display: "flex", gap: isMobile ? 14 : 20, flexWrap: "wrap" }}>
//           {["Privacy Policy","Terms of Use","Sitemap"].map(l => (
//             <a key={l} href="#"
//               style={{ fontSize: 12, color: "rgba(255,255,255,.35)", textDecoration: "none", transition: "color .2s" }}
//               onMouseEnter={e => e.currentTarget.style.color = C.gold}
//               onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.35)"}>
//               {l}
//             </a>
//           ))}
//         </div>
//       </div>

//     </footer>
//   );
// }

import { useState, useEffect } from "react";
import { C } from "../data/data";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const contactItems = [
    { icon: <FaMapMarkerAlt size={15} color={C.red} />, label: "Address 1", val: "268A, 1st Floor, Krishna Mandir Rd, above Basant Ice Cream, near Krishna Mandir, Nehru Nagar, Model Town Extension, Ludhiana, Punjab 141002" },
    { icon: <FaMapMarkerAlt size={15} color={C.red} />, label: "Address 2", val: "268A, 2nd Floor, Krishna Mandir Rd, above Basant Ice Cream, near Krishna Mandir, Nehru Nagar, Model Town Extension, Ludhiana, Punjab 141002" },
    { icon: <FaPhone size={14} color={C.red} />, label: "Phone", val: "+91-94640-31200", href: "tel:+919464031200" },
    { icon: <FaEnvelope size={14} color={C.red} />, label: "Email", val: "info@vashishthacademy.com", href: "mailto:info@vashishthacademy.com" },
    { icon: <FaClock size={14} color={C.red} />, label: "Opening Hours", val: "Mon–Sat: 8:00 AM – 6:00 PM" },
  ];

  const socialLinks = [
    { bg: "#1877f2", icon: <FaFacebookF size={15} color="#fff" />, href: "#" },
    { bg: "#ff0000", icon: <FaYoutube size={15} color="#fff" />, href: "#" },
    { bg: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)", icon: <FaInstagram size={15} color="#fff" />, href: "#" },
    { bg: "#1da1f2", icon: <FaTwitter size={15} color="#fff" />, href: "#" },
  ];

  const colHeadingStyle = {
    fontFamily: "'Rajdhani',sans-serif",
    fontSize: 16,
    fontWeight: 700,
    color: "#fff",
    letterSpacing: ".06em",
    textTransform: "uppercase",
    marginBottom: 18,
    paddingBottom: 12,
    position: "relative",
  };

  const linkStyle = {
    fontSize: 13,
    color: "rgba(255,255,255,.55)",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 8,
    transition: "all .2s",
  };

  return (
    <footer style={{ background: "linear-gradient(160deg,#0d1b2e 0%,#12243a 60%,#0d1b2e 100%)", position: "relative", overflow: "hidden", fontFamily: "'Hind',sans-serif" }}>

      {/* Top color bar */}
      <div style={{ height: 4, background: `linear-gradient(90deg,${C.red} 0%,${C.gold} 40%,${C.red} 70%,${C.navy} 100%)` }} />

      {/* ── Newsletter ── */}
      <div style={{
        background: "linear-gradient(135deg,#e84118 0%,#c23412 100%)",
        padding: isMobile ? "18px 16px" : isTablet ? "18px 32px" : "16px 60px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between",
        gap: isMobile ? 14 : 24,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", right: -40, top: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,.06)" }} />
        <div style={{ position: "relative" }}>
          <h3 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: isMobile ? 16 : 20, fontWeight: 700, color: "#fff", letterSpacing: ".03em", marginBottom: 3 }}>
            📬 Stay Updated with Latest UPSC News & Batches
          </h3>
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.8)" }}>
            Subscribe to get current affairs, batch alerts, and exam tips directly in your inbox.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, flexShrink: 0, position: "relative", width: isMobile ? "100%" : "auto", flexWrap: "wrap" }}>
          {!newsletterDone ? (
            <>
              <input
                type="email"
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                style={{
                  padding: "10px 18px",
                  borderRadius: 6,
                  border: "none",
                  outline: "none",
                  fontFamily: "'Hind',sans-serif",
                  fontSize: 13,
                  color: "#1a2a40",
                  background: "#fff",
                  width: isMobile ? "100%" : 240,
                  boxSizing: "border-box",
                }}
              />
              <button
                onClick={() => { if (!newsletterEmail.includes("@")) { alert("Please enter a valid email address."); return; } setNewsletterDone(true); }}
                style={{
                  padding: "10px 22px",
                  borderRadius: 6,
                  border: "2px solid #fff",
                  background: "transparent",
                  color: "#fff",
                  fontFamily: "'Rajdhani',sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all .2s",
                  whiteSpace: "nowrap",
                  width: isMobile ? "100%" : "auto",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = C.red; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}>
                Subscribe
              </button>
            </>
          ) : (
            <div style={{ color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontSize: 16, fontWeight: 700 }}>✓ Subscribed!</div>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{
        padding: isMobile ? "30px 16px 20px" : isTablet ? "32px 32px 20px" : "36px 60px 24px",
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : isTablet
          ? "1fr 1fr"
          : "1.4fr 1fr 1fr 1.1fr",
        gap: isMobile ? 28 : isTablet ? 28 : 48,
        position: "relative",
        zIndex: 1,
      }}>

        {/* ── Brand — logo image ── */}
        <div>
          <div style={{ marginBottom: 18 }}>
            <img
              src="/New-logo-768x210.png"
              alt="Vashishth IAS Academy"
              style={{ height: 56, width: "auto", objectFit: "contain", display: "block" }}
            />
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)", lineHeight: 1.8, marginBottom: 22 }}>
            Vashishth IAS Academy Ludhiana was established in 2008 to offer coaching for Civil Service Examinations. Academy functions at Ludhiana only and has no branch anywhere.{" "}
            <a href="#" style={{ color: C.gold, textDecoration: "none", fontWeight: 600 }}>Read More...</a>
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href}
                style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: s.bg, textDecoration: "none", transition: "transform .2s,opacity .2s", flexShrink: 0 }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.opacity = ".85"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.opacity = "1"; }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Quick Links ── */}
        <div>
          <div style={colHeadingStyle}>
            Quick Links
            <span style={{ position: "absolute", bottom: 0, left: 0, display: "block", width: 36, height: 2.5, borderRadius: 2, background: `linear-gradient(90deg,${C.red},${C.gold})` }} />
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7, margin: 0, padding: 0 }}>
            {["Home","About","Daily Current Affairs","Brochures","Contact Us","Privacy Policy"].map(link => (
              <li key={link}>
                <a href="#" style={linkStyle}
                  onMouseEnter={e => { e.currentTarget.style.color = C.gold; e.currentTarget.style.paddingLeft = "4px"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,.55)"; e.currentTarget.style.paddingLeft = ""; }}>
                  <span style={{ color: C.red, fontSize: 16 }}>›</span>{link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Exams ── */}
        <div>
          <div style={colHeadingStyle}>
            Exams We Cover
            <span style={{ position: "absolute", bottom: 0, left: 0, display: "block", width: 36, height: 2.5, borderRadius: 2, background: `linear-gradient(90deg,${C.red},${C.gold})` }} />
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7, margin: 0, padding: 0 }}>
            {["UPSC Civil Services (IAS/IPS)","PPSC / Punjab PCS","SSC CGL / CHSL","NDA / CDS","State PSC Exams","Online Batch"].map(link => (
              <li key={link}>
                <a href="#" style={linkStyle}
                  onMouseEnter={e => { e.currentTarget.style.color = C.gold; e.currentTarget.style.paddingLeft = "4px"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,.55)"; e.currentTarget.style.paddingLeft = ""; }}>
                  <span style={{ color: C.red, fontSize: 16 }}>›</span>{link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ── */}
        <div>
          <div style={colHeadingStyle}>
            Contact Us
            <span style={{ position: "absolute", bottom: 0, left: 0, display: "block", width: 36, height: 2.5, borderRadius: 2, background: `linear-gradient(90deg,${C.red},${C.gold})` }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {contactItems.map(c => (
              <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, flexShrink: 0, background: "rgba(232,65,24,.15)", border: "1px solid rgba(232,65,24,.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: 10, color: C.red, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 2 }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} style={{ fontSize: 12.5, color: "rgba(255,255,255,.65)", textDecoration: "none" }}>{c.val}</a>
                    : <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.65)", lineHeight: 1.6 }}>{c.val}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.1) 20%,rgba(232,65,24,.4) 50%,rgba(255,255,255,.1) 80%,transparent)", margin: isMobile ? "0 16px" : "0 60px" }} />

      {/* ── Bottom bar ── */}
      <div style={{
        padding: isMobile ? "14px 16px" : isTablet ? "14px 32px" : "14px 60px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between",
        gap: isMobile ? 10 : 12,
        flexWrap: "wrap",
      }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.35)" }}>
          Copyright © 2026. <b style={{ color: "rgba(255,255,255,.55)" }}>All Rights Reserved.</b> · Vashishth IAS Academy, Ludhiana
        </div>
        <div style={{ display: "flex", gap: isMobile ? 14 : 20, flexWrap: "wrap" }}>
          {["Privacy Policy","Terms of Use","Sitemap"].map(l => (
            <a key={l} href="#"
              style={{ fontSize: 12, color: "rgba(255,255,255,.35)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={e => e.currentTarget.style.color = C.gold}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.35)"}>
              {l}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}
