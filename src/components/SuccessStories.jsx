// import { useEffect, useRef, useState } from "react";

// const successStories = [
//   { id: 1,  name: "Davinder Singh",    achievement: "S.I Punjab Police",      category: "Police",  batch: "2021", initials: "DS" },
//   { id: 2,  name: "Geeta Bishabnhu",   achievement: "P.C.S Officer",           category: "PCS",     batch: "2020", initials: "GB" },
//   { id: 3,  name: "Gurmukh Singh",     achievement: "S.I Punjab Police",      category: "Police",  batch: "2022", initials: "GS" },
//   { id: 4,  name: "Pushpa Kashyap",    achievement: "Constable Punjab Police", category: "Police",  batch: "2021", initials: "PK" },
//   { id: 5,  name: "Shiv Kumar",        achievement: "S.I Punjab Police",      category: "Police",  batch: "2022", initials: "SK" },
//   { id: 6,  name: "Satish Kumar",      achievement: "P.C.S Officer",           category: "PCS",     batch: "2021", initials: "SK" },
//   { id: 7,  name: "Shubham",           achievement: "I.P.S Officer",           category: "IPS",     batch: "2020", initials: "SH" },
//   { id: 8,  name: "Virender Singh",    achievement: "I.P.S Officer",           category: "IPS",     batch: "2021", initials: "VS" },
//   { id: 9,  name: "Navraj Batish",     achievement: "P.C.S Officer",           category: "PCS",     batch: "2022", initials: "NB" },
//   { id: 10, name: "Pritish Kumar",     achievement: "P.C.S Officer",           category: "PCS",     batch: "2023", initials: "PK" },
//   { id: 11, name: "Jobanpreet Singh",  achievement: "Punjab Patwari",          category: "Other",   batch: "2022", initials: "JS" },
//   { id: 12, name: "Shivani Parashar",  achievement: "BFS Officer",             category: "Defence", batch: "2022", initials: "SP" },
//   { id: 13, name: "Hina Khan",         achievement: "SSC (GD)",                category: "SSC",     batch: "2021", initials: "HK" },
//   { id: 14, name: "Kritika",           achievement: "Govt. Teacher",           category: "Other",   batch: "2021", initials: "KR" },
//   { id: 15, name: "Harbans Singh",     achievement: "S.I Punjab Police",      category: "Police",  batch: "2023", initials: "HS" },
// ];

// const categoryMeta = {
//   IPS:     { bg: "#0f5c34", grad: "linear-gradient(135deg,#0f5c34,#1a8a50)", light: "#e6f4ed", text: "#0f5c34", dot: "#22c55e" },
//   PCS:     { bg: "#c4531d", grad: "linear-gradient(135deg,#c4531d,#e8682a)", light: "#fdeee7", text: "#c4531d", dot: "#f97316" },
//   Police:  { bg: "#1a3a6e", grad: "linear-gradient(135deg,#1a3a6e,#2a5aa0)", light: "#e8edf7", text: "#1a3a6e", dot: "#3b82f6" },
//   SSC:     { bg: "#5a2d82", grad: "linear-gradient(135deg,#5a2d82,#7c3aed)", light: "#f0eaf7", text: "#5a2d82", dot: "#8b5cf6" },
//   Defence: { bg: "#7a1a2e", grad: "linear-gradient(135deg,#7a1a2e,#b91c1c)", light: "#f7e8eb", text: "#7a1a2e", dot: "#ef4444" },
//   Other:   { bg: "#374151", grad: "linear-gradient(135deg,#374151,#4b5563)", light: "#f3f4f6", text: "#374151", dot: "#6b7280" },
// };

// const filters = ["All", "IPS", "PCS", "Police", "SSC", "Defence", "Other"];

// const stats = [
//   { number: "500+", label: "Total Selections" },
//   { number: "15+",  label: "IPS Officers" },
//   { number: "80+",  label: "PCS Officers" },
//   { number: "10+",  label: "Years Excellence" },
// ];

// /* ── SVG Icons (realistic, no emoji) ── */
// function MedalIcon() {
//   return (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="20" r="10" fill="#f5a623" stroke="#e8682a" strokeWidth="1.5"/>
//       <circle cx="16" cy="20" r="7"  fill="#fdd87e" />
//       <text x="16" y="24" textAnchor="middle" fontSize="9" fontWeight="800" fill="#b45309" fontFamily="sans-serif">1st</text>
//       <path d="M10 12 L8 4 L13 7 L16 2 L19 7 L24 4 L22 12" fill="#e8682a" stroke="#c0531a" strokeWidth="1" strokeLinejoin="round"/>
//     </svg>
//   );
// }
// function StarIcon() {
//   return (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <path d="M16 3 L19.5 12.5 H29.5 L21.5 18.5 L24.5 28.5 L16 22.5 L7.5 28.5 L10.5 18.5 L2.5 12.5 H12.5 Z"
//         fill="#f5a623" stroke="#c77c0a" strokeWidth="1.2" strokeLinejoin="round"/>
//       <path d="M16 6 L18.8 13.8 H27 L20.5 18.6 L22.8 26.2 L16 21.5 L9.2 26.2 L11.5 18.6 L5 13.8 H13.2 Z"
//         fill="#fdd87e" opacity="0.6"/>
//     </svg>
//   );
// }
// function PillarIcon() {
//   return (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <rect x="3"  y="28" width="26" height="2.5" rx="1" fill="#93b4d4"/>
//       <rect x="4"  y="4"  width="24" height="3"   rx="1" fill="#93b4d4"/>
//       <rect x="7"  y="7"  width="3"  height="21"  rx="1" fill="#c8d9f0"/>
//       <rect x="14" y="7"  width="4"  height="21"  rx="1" fill="#c8d9f0"/>
//       <rect x="22" y="7"  width="3"  height="21"  rx="1" fill="#c8d9f0"/>
//     </svg>
//   );
// }
// function TrophyIcon() {
//   return (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <path d="M8 4 H24 V17 C24 23 8 23 8 17 Z" fill="#f5a623" stroke="#c77c0a" strokeWidth="1.2"/>
//       <path d="M3 5 H8 V13 C3 13 1 10 3 7 Z"    fill="#fdd87e" stroke="#c77c0a" strokeWidth="1"/>
//       <path d="M29 5 H24 V13 C29 13 31 10 29 7 Z" fill="#fdd87e" stroke="#c77c0a" strokeWidth="1"/>
//       <rect x="13" y="23" width="6" height="4" rx="0.5" fill="#e8682a"/>
//       <rect x="10" y="27" width="12" height="2" rx="1"  fill="#c77c0a"/>
//       <circle cx="16" cy="13" r="3" fill="#fff" opacity="0.3"/>
//     </svg>
//   );
// }

// /* ── Verified check SVG ── */
// function CheckIcon() {
//   return (
//     <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
//       <path d="M1.5 4L3 5.5L6.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// /* ══════════════════════════════════════════
//    MAIN COMPONENT
// ══════════════════════════════════════════ */
// export default function SuccessStories({ onBack }) {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [gsapReady,    setGsapReady]    = useState(false);
//   const [cardsKey,     setCardsKey]     = useState(0);

//   const filtered = activeFilter === "All"
//     ? successStories
//     : successStories.filter(s => s.category === activeFilter);

//   /* ── Load GSAP ── */
//   useEffect(() => {
//     if (window.gsap) { setGsapReady(true); return; }
//     const s1 = document.createElement("script");
//     s1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
//     s1.onload = () => {
//       const s2 = document.createElement("script");
//       s2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
//       s2.onload = () => { window.gsap.registerPlugin(window.ScrollTrigger); setGsapReady(true); };
//       document.head.appendChild(s2);
//     };
//     document.head.appendChild(s1);
//   }, []);

//   /* ── Hero entrance ── */
//   useEffect(() => {
//     if (!gsapReady) return;
//     const { gsap } = window;
//     gsap.timeline({ defaults: { ease: "power3.out" } })
//       .fromTo(".ss-hero-badge",  { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
//       .fromTo(".ss-hero-title",  { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
//       .fromTo(".ss-hero-line",   { scaleX: 0 },          { scaleX: 1, duration: 0.7, transformOrigin: "left" }, "-=0.4")
//       .fromTo(".ss-hero-sub",    { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
//       .fromTo(".ss-stat-item",   { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.2")
//       .fromTo(".ss-filter-btn",  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.07 }, "-=0.1");

//     /* Particle drift */
//     gsap.utils.toArray(".ss-particle").forEach((el, i) => {
//       gsap.to(el, { x: `random(-30,30)`, y: `random(-40,20)`, rotation: `random(-180,180)`, duration: 6 + i * 0.8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: i * 0.3 });
//     });
//   }, [gsapReady]);

//   /* ── Cards entrance on filter change ── */
//   useEffect(() => {
//     if (!gsapReady) return;
//     window.gsap.fromTo(".ss-card", { y: 50, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.055, ease: "back.out(1.4)" });
//   }, [gsapReady, cardsKey]);

//   const handleFilter = (f) => { setActiveFilter(f); setCardsKey(k => k + 1); };

//   const onCardEnter = (e) => {
//     if (!window.gsap) return;
//     const card = e.currentTarget;
//     window.gsap.to(card, { y: -10, scale: 1.04, duration: 0.32, ease: "power2.out" });
//     window.gsap.to(card.querySelector(".ss-card-glow"),  { opacity: 1, duration: 0.3 });
//     window.gsap.to(card.querySelector(".ss-card-shine"), { x: "100%", duration: 0.6, ease: "power1.out" });
//   };
//   const onCardLeave = (e) => {
//     if (!window.gsap) return;
//     const card = e.currentTarget;
//     window.gsap.to(card, { y: 0, scale: 1, duration: 0.35, ease: "power2.out" });
//     window.gsap.to(card.querySelector(".ss-card-glow"),  { opacity: 0, duration: 0.3 });
//     window.gsap.to(card.querySelector(".ss-card-shine"), { x: "-100%", duration: 0 });
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
//         @keyframes ssHeroFadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         .ss-root {
//           min-height: 100vh;
//           background: #f0f4f8;
//           font-family: 'DM Sans', sans-serif;
//           overflow-x: hidden;
//         }

//         /* ── HERO ── */
//         .ss-hero {
//           position: relative;
//           background: linear-gradient(135deg, #060e21 0%, #0d1b3e 45%, #102050 100%);
//           overflow: hidden;
//           padding-bottom: 60px;
//         }
//         .ss-hero-topbar {
//           height: 4px;
//           background: linear-gradient(90deg, #e8682a 0%, #f5a623 50%, #e8682a 100%);
//         }
//         .ss-hero-grid {
//           position: absolute; inset: 0; opacity: 0.04; pointer-events: none;
//           background-image: linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px);
//           background-size: 44px 44px;
//         }
//         .ss-hero-radial {
//           position: absolute; inset: 0; pointer-events: none;
//           background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,104,42,0.12) 0%, transparent 70%);
//         }
//         .ss-particle {
//           position: absolute; border-radius: 50%; pointer-events: none;
//         }
//         .ss-hero-inner {
//           position: relative; z-index: 2;
//           max-width: 1200px; margin: 0 auto; padding: 40px 20px 0;
//           text-align: center;
//         }

//         /* Back button */
//         .ss-back-btn {
//           position: absolute;
//           bottom: 20px;
//           left: 24px;
//           z-index: 10;
//           display: inline-flex; align-items: center; gap: 7px;
//           padding: 8px 18px; border-radius: 8px;
//           background: rgba(255,255,255,0.08);
//           border: 1px solid rgba(255,255,255,0.2);
//           color: #c8d9f0; font-size: 13px; font-weight: 500; cursor: pointer;
//           transition: background .2s;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .ss-back-btn:hover { background: rgba(255,255,255,0.14); }
//         .ss-back-btn svg   { flex-shrink: 0; }

//         /* Hall of fame badge */
//         .ss-hero-badge {
//           display: inline-flex; align-items: center; gap: 8px;
//           padding: 7px 20px; border-radius: 100px; margin-bottom: 24px;
//           background: rgba(232,104,42,0.15);
//           border: 1px solid rgba(232,104,42,0.45);
//           color: #f5a623; font-size: 12px; font-weight: 600;
//           letter-spacing: 0.12em; text-transform: uppercase;
//           opacity: 0; margin-bottom: 16px;
//         }

//         .ss-hero-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(36px, 6vw, 68px); font-weight: 800;
//           color: #fff; line-height: 1.1; margin-bottom: 16px; opacity: 0;
//           animation: ssHeroFadeIn 0.8s ease 0.5s forwards;
//         }
//         .ss-hero-title span { color: #f5a623; }
//         .ss-hero-line {
//           width: 90px; height: 3px; border-radius: 2px; margin: 0 auto 20px;
//           background: linear-gradient(90deg, #e8682a, #f5a623);
//         }
//         .ss-hero-sub {
//           color: #93b4d4; font-size: 16px; max-width: 580px; margin: 0 auto 40px;
//           line-height: 1.7; opacity: 0;
//           animation: ssHeroFadeIn 0.8s ease 0.7s forwards;
//         }

//         /* Stats */
//         .ss-stats-row {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//           gap: 14px; max-width: 900px; margin: 0 auto; padding: 0 20px;
//         }
//         .ss-stat-item {
//           text-align: center; padding: 20px 12px; border-radius: 16px;
//           background: rgba(255,255,255,0.06);
//           border: 1px solid rgba(255,255,255,0.1);
//           backdrop-filter: blur(10px); opacity: 0;
//           animation: ssHeroFadeIn 0.6s ease 0.9s forwards;
//         }
//         .ss-stat-icon { display: flex; justify-content: center; margin-bottom: 8px; }
//         .ss-stat-number {
//           font-family: 'Playfair Display', serif;
//           font-size: 30px; font-weight: 800; color: #f5a623; line-height: 1;
//         }
//         .ss-stat-label { font-size: 12px; color: #7ba8cc; margin-top: 4px; font-weight: 500; }

//         /* Wave */
//         .ss-wave { display: block; margin-top: -2px; color: #f0f4f8; width: 100%; height: 50px; }

//         /* Content */
//         .ss-content { max-width: 1200px; margin: 0 auto; padding: 40px 20px 80px; }

//         /* Filters */
//         .ss-filters {
//           display: flex; flex-wrap: wrap; justify-content: center;
//           gap: 10px; margin-bottom: 48px;
//         }
//         .ss-filter-btn {
//           padding: 8px 18px; border-radius: 100px;
//           font-size: 13px; font-weight: 600; cursor: pointer;
//           border: 1.5px solid #d1dae8; background: #fff; color: #1a3a6e;
//           transition: all 0.2s ease; opacity: 0;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .ss-filter-btn:hover {
//           border-color: #e8682a; color: #e8682a;
//           box-shadow: 0 2px 10px rgba(232,104,42,0.15);
//         }
//         .ss-filter-btn.active {
//           background: linear-gradient(135deg, #e8682a, #f5a623);
//           border-color: transparent; color: #fff;
//           box-shadow: 0 3px 14px rgba(232,104,42,0.35);
//         }
//         .ss-filter-count {
//           display: inline-block; margin-left: 5px;
//           padding: 1px 7px; border-radius: 100px; font-size: 11px;
//           background: rgba(0,0,0,0.1);
//         }
//         .ss-filter-btn.active .ss-filter-count { background: rgba(255,255,255,0.25); }

//         /* Grid */
//         .ss-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
//           gap: 20px;
//         }

//         /* Card */
//         .ss-card { position: relative; cursor: pointer; opacity: 0; will-change: transform; }
//         .ss-card-glow {
//           position: absolute; inset: -4px; border-radius: 22px;
//           opacity: 0; pointer-events: none; filter: blur(12px);
//         }
//         .ss-card-inner {
//           position: relative; border-radius: 20px; overflow: hidden;
//           background: #fff; border: 1px solid rgba(26,58,110,0.1);
//           box-shadow: 0 2px 16px rgba(26,58,110,0.07);
//         }
//         .ss-card-top {
//           height: 90px; display: flex; align-items: center; justify-content: center;
//           position: relative; overflow: hidden;
//         }
//         .ss-card-dot-pattern {
//           position: absolute; inset: 0; opacity: 0.12;
//           background-image: radial-gradient(circle, #fff 1px, transparent 1px);
//           background-size: 10px 10px;
//         }
//         .ss-card-shine {
//           position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
//           transform: skewX(-15deg); pointer-events: none;
//         }
//         .ss-avatar {
//           position: relative; width: 62px; height: 62px; border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           font-family: 'Playfair Display', serif;
//           font-size: 20px; font-weight: 800; color: #fff;
//           border: 3px solid rgba(255,255,255,0.35);
//           box-shadow: 0 6px 20px rgba(0,0,0,0.25); z-index: 1;
//           background: rgba(255,255,255,0.15); backdrop-filter: blur(6px);
//         }
//         .ss-cat-badge {
//           position: absolute; top: 8px; right: 10px;
//           padding: 3px 9px; border-radius: 100px; font-size: 10px; font-weight: 700;
//           background: rgba(255,255,255,0.22); color: #fff;
//           border: 1px solid rgba(255,255,255,0.3);
//           backdrop-filter: blur(4px); z-index: 1; letter-spacing: 0.05em;
//         }
//         .ss-card-body { padding: 14px 14px 16px; text-align: center; }
//         .ss-card-name { font-weight: 700; font-size: 14px; color: #0d1b3e; margin-bottom: 4px; line-height: 1.3; }
//         .ss-card-role { font-size: 12px; font-weight: 600; margin-bottom: 12px; }
//         .ss-card-divider {
//           height: 1px; margin-bottom: 12px;
//           background: linear-gradient(90deg, transparent, #e2eaf4, transparent);
//         }
//         .ss-card-footer { display: flex; align-items: center; justify-content: center; gap: 8px; }
//         .ss-batch-tag {
//           padding: 4px 12px; border-radius: 100px;
//           font-size: 11px; font-weight: 600; border: 1px solid;
//         }
//         .ss-verified {
//           display: flex; align-items: center; gap: 4px;
//           font-size: 10px; color: #9ca3af; margin-top: 10px; justify-content: center;
//         }
//         .ss-verified-dot {
//           width: 14px; height: 14px; border-radius: 50%; background: #22c55e;
//           display: flex; align-items: center; justify-content: center; flex-shrink: 0;
//         }

//         /* CTA */
//         .ss-cta {
//           position: relative; margin-top: 60px; border-radius: 20px;
//           overflow: hidden; text-align: center; padding: 52px 32px;
//           background: linear-gradient(135deg, #060e21 0%, #0d1b3e 60%, #0a1a3e 100%);
//         }
//         .ss-cta-grid {
//           position: absolute; inset: 0; opacity: 0.04; pointer-events: none;
//           background-image: linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px);
//           background-size: 32px 32px;
//         }
//         .ss-cta-glow {
//           position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
//           width: 400px; height: 200px; border-radius: 50%; pointer-events: none;
//           background: radial-gradient(ellipse, rgba(232,104,42,0.2) 0%, transparent 70%);
//         }
//         .ss-cta-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(22px, 4vw, 34px); font-weight: 800;
//           color: #fff; margin-bottom: 12px;
//         }
//         .ss-cta-sub {
//           color: #7ba8cc; font-size: 15px;
//           max-width: 500px; margin: 0 auto 28px; line-height: 1.7;
//         }
//         .ss-cta-btns { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }

//         /* CTA buttons — simple, clean */
//         .ss-btn-primary {
//           padding: 12px 28px; border-radius: 8px;
//           font-size: 14px; font-weight: 600; cursor: pointer; border: none;
//           color: #fff; background: linear-gradient(135deg, #e8682a, #f5a623);
//           box-shadow: 0 3px 16px rgba(232,104,42,0.38);
//           transition: opacity .2s, transform .15s;
//           font-family: 'DM Sans', sans-serif; text-decoration: none;
//           display: inline-block;
//         }
//         .ss-btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }

//         .ss-btn-secondary {
//           padding: 12px 28px; border-radius: 8px;
//           font-size: 14px; font-weight: 600; cursor: pointer;
//           color: #fff; background: transparent;
//           border: 1.5px solid rgba(255,255,255,0.3);
//           transition: background .2s, transform .15s;
//           font-family: 'DM Sans', sans-serif; text-decoration: none;
//           display: inline-block;
//         }
//         .ss-btn-secondary:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 640px) {
//           .ss-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
//           .ss-hero-inner { padding: 32px 16px 0; }
//           .ss-content { padding: 28px 16px 56px; }
//           .ss-cta { padding: 36px 20px; }
//         }
//       `}</style>

//       <div className="ss-root">

//         {/* ── HERO ── */}
//         <section className="ss-hero">
//           <div className="ss-hero-topbar" />
//           <div className="ss-hero-grid" />
//           <div className="ss-hero-radial" />

//           {/* Particles */}
//           {[
//             { w:60, h:60, l:"5%",  t:"15%", c:"#1a3a6e", o:0.15 },
//             { w:40, h:40, l:"12%", t:"55%", c:"#e8682a", o:0.18 },
//             { w:80, h:80, l:"88%", t:"10%", c:"#0f5c34", o:0.12 },
//             { w:30, h:30, l:"80%", t:"60%", c:"#e8682a", o:0.2  },
//             { w:50, h:50, l:"55%", t:"75%", c:"#1a3a6e", o:0.1  },
//             { w:25, h:25, l:"30%", t:"20%", c:"#f5a623", o:0.2  },
//             { w:70, h:70, l:"70%", t:"40%", c:"#0f5c34", o:0.08 },
//             { w:35, h:35, l:"45%", t:"85%", c:"#e8682a", o:0.15 },
//           ].map((p, i) => (
//             <div key={i} className="ss-particle" style={{ width: p.w, height: p.h, left: p.l, top: p.t, background: p.c, opacity: p.o }} />
//           ))}

//           <div className="ss-hero-inner">
//             {/* Badge */}
//             <div className="ss-hero-badge">Hall of Fame</div>

//             <h1 className="ss-hero-title">
//               Our <span>Success</span> Stories
//             </h1>
//             <div className="ss-hero-line" />
//             <p className="ss-hero-sub">
//               Proud of our students who cracked India's toughest exams — their
//               success is our mission and your inspiration.
//             </p>
//           </div>

//           {/* Stats */}
//           <div className="ss-stats-row">
//             {stats.map((s, i) => (
//               <div key={i} className="ss-stat-item">
//                 <div className="ss-stat-number">{s.number}</div>
//                 <div className="ss-stat-label">{s.label}</div>
//               </div>
//             ))}
//           </div>

//           <svg className="ss-wave" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="currentColor">
//             <path d="M0,20 C360,60 1080,0 1440,30 L1440,50 L0,50 Z" />
//           </svg>

//           {/* Back button — absolute bottom-left of hero */}
//           {onBack && (
//             <button className="ss-back-btn" onClick={onBack}>
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="15 18 9 12 15 6"/>
//               </svg>
//               Back to Home
//             </button>
//           )}
//         </section>

//         {/* ── CONTENT ── */}
//         <div className="ss-content">

//           {/* Filters */}
//           <div className="ss-filters">
//             {filters.map(f => (
//               <button
//                 key={f}
//                 onClick={() => handleFilter(f)}
//                 className={`ss-filter-btn${activeFilter === f ? " active" : ""}`}
//               >
//                 {f}
//                 {f !== "All" && (
//                   <span className="ss-filter-count">
//                     {successStories.filter(s => s.category === f).length}
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Cards */}
//           <div className="ss-grid" key={cardsKey}>
//             {filtered.map(story => {
//               const cat = categoryMeta[story.category];
//               return (
//                 <div key={story.id} className="ss-card" onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}>
//                   <div className="ss-card-glow" style={{ background: cat.grad }} />
//                   <div className="ss-card-inner">
//                     <div className="ss-card-top" style={{ background: cat.grad }}>
//                       <div className="ss-card-dot-pattern" />
//                       <div className="ss-card-shine" />
//                       <div className="ss-avatar">{story.initials}</div>
//                       <div className="ss-cat-badge">{story.category}</div>
//                     </div>
//                     <div className="ss-card-body">
//                       <div className="ss-card-name">{story.name}</div>
//                       <div className="ss-card-role" style={{ color: cat.text }}>{story.achievement}</div>
//                       <div className="ss-card-divider" />
//                       <div className="ss-card-footer">
//                         <span className="ss-batch-tag" style={{ background: cat.light, color: cat.text, borderColor: `${cat.bg}25` }}>
//                           Batch {story.batch}
//                         </span>
//                       </div>
//                       <div className="ss-verified">
//                         <div className="ss-verified-dot"><CheckIcon /></div>
//                         Vashishth Alumni
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* CTA */}
//           <div className="ss-cta">
//             <div className="ss-cta-grid" />
//             <div className="ss-cta-glow" />
//             <div style={{ position: "relative", zIndex: 1 }}>
//               <h2 className="ss-cta-title">Your Success Story Begins Here</h2>
//               <p className="ss-cta-sub">
//                 Join Vashishth IAS Academy and become the next name on this wall
//                 of fame. Expert guidance, proven results, and a legacy of toppers.
//               </p>
//               <div className="ss-cta-btns">
//                 <a href="#" className="ss-btn-primary">Enroll Now</a>
//                 <a href="#" className="ss-btn-secondary">View Courses</a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }


// import { useEffect, useRef, useState } from "react";

// // ── Import all student images ──
// import img2  from "../assets/2.png";
// import img3  from "../assets/3.png";
// import img4  from "../assets/4.png";
// import img5  from "../assets/5.png";
// import img6  from "../assets/6.png";
// import img7  from "../assets/7.png";
// import img8  from "../assets/8.png";
// import img9  from "../assets/9.png";
// import img10 from "../assets/10.png";
// import img11 from "../assets/11.png";
// import img12 from "../assets/12.png";
// import img13 from "../assets/13.png";
// import img14 from "../assets/14.png";
// import img15 from "../assets/15.png";
// import img16 from "../assets/16.png";

// const successStories = [
//   { id: 1,  name: "Davinder Singh",    achievement: "S.I Punjab Police",       category: "Police",  batch: "2021", initials: "DS", img: img2  },
//   { id: 2,  name: "Geeta Bishabnhu",   achievement: "P.C.S Officer",            category: "PCS",     batch: "2020", initials: "GB", img: img3  },
//   { id: 3,  name: "Gurmukh Singh",     achievement: "S.I Punjab Police",       category: "Police",  batch: "2022", initials: "GS", img: img4  },
//   { id: 4,  name: "Pushpa Kashyap",    achievement: "Constable Punjab Police",  category: "Police",  batch: "2021", initials: "PK", img: img5  },
//   { id: 5,  name: "Shiv Kumar",        achievement: "S.I Punjab Police",       category: "Police",  batch: "2022", initials: "SK", img: img6  },
//   { id: 6,  name: "Satish Kumar",      achievement: "P.C.S Officer",            category: "PCS",     batch: "2021", initials: "SK", img: img7  },
//   { id: 7,  name: "Shubham",           achievement: "I.P.S Officer",            category: "IPS",     batch: "2020", initials: "SH", img: img8  },
//   { id: 8,  name: "Virender Singh",    achievement: "I.P.S Officer",            category: "IPS",     batch: "2021", initials: "VS", img: img9  },
//   { id: 9,  name: "Navraj Batish",     achievement: "P.C.S Officer",            category: "PCS",     batch: "2022", initials: "NB", img: img10 },
//   { id: 10, name: "Pritish Kumar",     achievement: "P.C.S Officer",            category: "PCS",     batch: "2023", initials: "PK", img: img11 },
//   { id: 11, name: "Jobanpreet Singh",  achievement: "Punjab Patwari",           category: "Other",   batch: "2022", initials: "JS", img: img12 },
//   { id: 12, name: "Shivani Parashar",  achievement: "BFS Officer",              category: "Defence", batch: "2022", initials: "SP", img: img13 },
//   { id: 13, name: "Hina Khan",         achievement: "SSC (GD)",                 category: "SSC",     batch: "2021", initials: "HK", img: img14 },
//   { id: 14, name: "Kritika",           achievement: "Govt. Teacher",            category: "Other",   batch: "2021", initials: "KR", img: img15 },
//   { id: 15, name: "Harbans Singh",     achievement: "S.I Punjab Police",       category: "Police",  batch: "2023", initials: "HS", img: img16 },
// ];

// const categoryMeta = {
//   IPS:     { bg: "#0f5c34", grad: "linear-gradient(135deg,#0f5c34,#1a8a50)", light: "#e6f4ed", text: "#0f5c34", dot: "#22c55e" },
//   PCS:     { bg: "#c4531d", grad: "linear-gradient(135deg,#c4531d,#e8682a)", light: "#fdeee7", text: "#c4531d", dot: "#f97316" },
//   Police:  { bg: "#1a3a6e", grad: "linear-gradient(135deg,#1a3a6e,#2a5aa0)", light: "#e8edf7", text: "#1a3a6e", dot: "#3b82f6" },
//   SSC:     { bg: "#5a2d82", grad: "linear-gradient(135deg,#5a2d82,#7c3aed)", light: "#f0eaf7", text: "#5a2d82", dot: "#8b5cf6" },
//   Defence: { bg: "#7a1a2e", grad: "linear-gradient(135deg,#7a1a2e,#b91c1c)", light: "#f7e8eb", text: "#7a1a2e", dot: "#ef4444" },
//   Other:   { bg: "#374151", grad: "linear-gradient(135deg,#374151,#4b5563)", light: "#f3f4f6", text: "#374151", dot: "#6b7280" },
// };

// const filters = ["All", "IPS", "PCS", "Police", "SSC", "Defence", "Other"];

// const stats = [
//   { number: "500+", label: "Total Selections" },
//   { number: "15+",  label: "IPS Officers" },
//   { number: "80+",  label: "PCS Officers" },
//   { number: "10+",  label: "Years Excellence" },
// ];

// function CheckIcon() {
//   return (
//     <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
//       <path d="M1.5 4L3 5.5L6.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// export default function SuccessStories({ onBack }) {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [gsapReady,    setGsapReady]    = useState(false);
//   const [cardsKey,     setCardsKey]     = useState(0);

//   const filtered = activeFilter === "All"
//     ? successStories
//     : successStories.filter(s => s.category === activeFilter);

//   /* ── Load GSAP ── */
//   useEffect(() => {
//     if (window.gsap) { setGsapReady(true); return; }
//     const s1 = document.createElement("script");
//     s1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
//     s1.onload = () => {
//       const s2 = document.createElement("script");
//       s2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
//       s2.onload = () => { window.gsap.registerPlugin(window.ScrollTrigger); setGsapReady(true); };
//       document.head.appendChild(s2);
//     };
//     document.head.appendChild(s1);
//   }, []);

//   /* ── Hero entrance ── */
//   useEffect(() => {
//     if (!gsapReady) return;
//     const { gsap } = window;
//     gsap.timeline({ defaults: { ease: "power3.out" } })
//       .fromTo(".ss-hero-badge",  { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
//       .fromTo(".ss-hero-title",  { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
//       .fromTo(".ss-hero-line",   { scaleX: 0 },          { scaleX: 1, duration: 0.7, transformOrigin: "left" }, "-=0.4")
//       .fromTo(".ss-hero-sub",    { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
//       .fromTo(".ss-stat-item",   { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.2")
//       .fromTo(".ss-filter-btn",  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.07 }, "-=0.1");

//     gsap.utils.toArray(".ss-particle").forEach((el, i) => {
//       gsap.to(el, { x: `random(-30,30)`, y: `random(-40,20)`, rotation: `random(-180,180)`, duration: 6 + i * 0.8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: i * 0.3 });
//     });
//   }, [gsapReady]);

//   /* ── Cards entrance on filter change ── */
//   useEffect(() => {
//     if (!gsapReady) return;
//     window.gsap.fromTo(".ss-card", { y: 50, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.055, ease: "back.out(1.4)" });
//   }, [gsapReady, cardsKey]);

//   const handleFilter = (f) => { setActiveFilter(f); setCardsKey(k => k + 1); };

//   const onCardEnter = (e) => {
//     if (!window.gsap) return;
//     const card = e.currentTarget;
//     window.gsap.to(card, { y: -10, scale: 1.04, duration: 0.32, ease: "power2.out" });
//     window.gsap.to(card.querySelector(".ss-card-glow"),  { opacity: 1, duration: 0.3 });
//     window.gsap.to(card.querySelector(".ss-card-shine"), { x: "100%", duration: 0.6, ease: "power1.out" });
//   };
//   const onCardLeave = (e) => {
//     if (!window.gsap) return;
//     const card = e.currentTarget;
//     window.gsap.to(card, { y: 0, scale: 1, duration: 0.35, ease: "power2.out" });
//     window.gsap.to(card.querySelector(".ss-card-glow"),  { opacity: 0, duration: 0.3 });
//     window.gsap.to(card.querySelector(".ss-card-shine"), { x: "-100%", duration: 0 });
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
//         @keyframes ssHeroFadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         .ss-root {
//           min-height: 100vh;
//           background: #f0f4f8;
//           font-family: 'DM Sans', sans-serif;
//           overflow-x: hidden;
//         }

//         /* ── HERO ── */
//         .ss-hero {
//           position: relative;
//           background: linear-gradient(135deg, #060e21 0%, #0d1b3e 45%, #102050 100%);
//           overflow: hidden;
//           padding-bottom: 60px;
//         }
//         .ss-hero-topbar {
//           height: 4px;
//           background: linear-gradient(90deg, #e8682a 0%, #f5a623 50%, #e8682a 100%);
//         }
//         .ss-hero-grid {
//           position: absolute; inset: 0; opacity: 0.04; pointer-events: none;
//           background-image: linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px);
//           background-size: 44px 44px;
//         }
//         .ss-hero-radial {
//           position: absolute; inset: 0; pointer-events: none;
//           background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,104,42,0.12) 0%, transparent 70%);
//         }
//         .ss-particle {
//           position: absolute; border-radius: 50%; pointer-events: none;
//         }
//         .ss-hero-inner {
//           position: relative; z-index: 2;
//           max-width: 1200px; margin: 0 auto; padding: 40px 20px 0;
//           text-align: center;
//         }
//         .ss-back-btn {
//           position: absolute; bottom: 20px; left: 24px; z-index: 10;
//           display: inline-flex; align-items: center; gap: 7px;
//           padding: 8px 18px; border-radius: 8px;
//           background: rgba(255,255,255,0.08);
//           border: 1px solid rgba(255,255,255,0.2);
//           color: #c8d9f0; font-size: 13px; font-weight: 500; cursor: pointer;
//           transition: background .2s; font-family: 'DM Sans', sans-serif;
//         }
//         .ss-back-btn:hover { background: rgba(255,255,255,0.14); }
//         .ss-hero-badge {
//           display: inline-flex; align-items: center; gap: 8px;
//           padding: 7px 20px; border-radius: 100px; margin-bottom: 16px;
//           background: rgba(232,104,42,0.15);
//           border: 1px solid rgba(232,104,42,0.45);
//           color: #f5a623; font-size: 12px; font-weight: 600;
//           letter-spacing: 0.12em; text-transform: uppercase; opacity: 0;
//         }
//         .ss-hero-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(36px, 6vw, 68px); font-weight: 800;
//           color: #fff; line-height: 1.1; margin-bottom: 16px; opacity: 0;
//           animation: ssHeroFadeIn 0.8s ease 0.5s forwards;
//         }
//         .ss-hero-title span { color: #f5a623; }
//         .ss-hero-line {
//           width: 90px; height: 3px; border-radius: 2px; margin: 0 auto 20px;
//           background: linear-gradient(90deg, #e8682a, #f5a623);
//         }
//         .ss-hero-sub {
//           color: #93b4d4; font-size: 16px; max-width: 580px; margin: 0 auto 40px;
//           line-height: 1.7; opacity: 0;
//           animation: ssHeroFadeIn 0.8s ease 0.7s forwards;
//         }
//         .ss-stats-row {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//           gap: 14px; max-width: 900px; margin: 0 auto; padding: 0 20px;
//         }
//         .ss-stat-item {
//           text-align: center; padding: 20px 12px; border-radius: 16px;
//           background: rgba(255,255,255,0.06);
//           border: 1px solid rgba(255,255,255,0.1);
//           backdrop-filter: blur(10px); opacity: 0;
//           animation: ssHeroFadeIn 0.6s ease 0.9s forwards;
//         }
//         .ss-stat-number {
//           font-family: 'Playfair Display', serif;
//           font-size: 30px; font-weight: 800; color: #f5a623; line-height: 1;
//         }
//         .ss-stat-label { font-size: 12px; color: #7ba8cc; margin-top: 4px; font-weight: 500; }
//         .ss-wave { display: block; margin-top: -2px; color: #f0f4f8; width: 100%; height: 50px; }

//         /* Content */
//         .ss-content { max-width: 1200px; margin: 0 auto; padding: 40px 20px 80px; }

//         /* Filters */
//         .ss-filters {
//           display: flex; flex-wrap: wrap; justify-content: center;
//           gap: 10px; margin-bottom: 48px;
//         }
//         .ss-filter-btn {
//           padding: 8px 18px; border-radius: 100px;
//           font-size: 13px; font-weight: 600; cursor: pointer;
//           border: 1.5px solid #d1dae8; background: #fff; color: #1a3a6e;
//           transition: all 0.2s ease; opacity: 0;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .ss-filter-btn:hover { border-color: #e8682a; color: #e8682a; box-shadow: 0 2px 10px rgba(232,104,42,0.15); }
//         .ss-filter-btn.active {
//           background: linear-gradient(135deg, #e8682a, #f5a623);
//           border-color: transparent; color: #fff;
//           box-shadow: 0 3px 14px rgba(232,104,42,0.35);
//         }
//         .ss-filter-count {
//           display: inline-block; margin-left: 5px;
//           padding: 1px 7px; border-radius: 100px; font-size: 11px;
//           background: rgba(0,0,0,0.1);
//         }
//         .ss-filter-btn.active .ss-filter-count { background: rgba(255,255,255,0.25); }

//         /* Grid */
//         .ss-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
//           gap: 20px;
//         }

//         /* Card */
//         .ss-card { position: relative; cursor: pointer; opacity: 0; will-change: transform; }
//         .ss-card-glow {
//           position: absolute; inset: -4px; border-radius: 22px;
//           opacity: 0; pointer-events: none; filter: blur(12px);
//         }
//         .ss-card-inner {
//           position: relative; border-radius: 20px; overflow: hidden;
//           background: #fff; border: 1px solid rgba(26,58,110,0.1);
//           box-shadow: 0 2px 16px rgba(26,58,110,0.07);
//         }

//         /* Card top — photo area */
//         .ss-card-top {
//           height: 110px;
//           position: relative; overflow: hidden;
//           display: flex; align-items: center; justify-content: center;
//         }
//         .ss-card-dot-pattern {
//           position: absolute; inset: 0; opacity: 0.12;
//           background-image: radial-gradient(circle, #fff 1px, transparent 1px);
//           background-size: 10px 10px;
//         }
//         .ss-card-shine {
//           position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
//           transform: skewX(-15deg); pointer-events: none; z-index: 3;
//         }

//         /* Photo styles */
//         .ss-photo {
//           position: absolute; inset: 0;
//           width: 100%; height: 100%;
//           object-fit: cover; object-position: top center;
//           z-index: 1;
//         }
//         .ss-photo-overlay {
//           position: absolute; inset: 0; z-index: 2;
//           background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%);
//         }

//         /* Fallback avatar (shown only if image fails) */
//         .ss-avatar {
//           position: relative; z-index: 2;
//           width: 62px; height: 62px; border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           font-family: 'Playfair Display', serif;
//           font-size: 20px; font-weight: 800; color: #fff;
//           border: 3px solid rgba(255,255,255,0.35);
//           box-shadow: 0 6px 20px rgba(0,0,0,0.25);
//           background: rgba(255,255,255,0.15); backdrop-filter: blur(6px);
//         }
//         .ss-cat-badge {
//           position: absolute; top: 8px; right: 10px; z-index: 4;
//           padding: 3px 9px; border-radius: 100px; font-size: 10px; font-weight: 700;
//           background: rgba(255,255,255,0.22); color: #fff;
//           border: 1px solid rgba(255,255,255,0.3);
//           backdrop-filter: blur(4px); letter-spacing: 0.05em;
//         }

//         .ss-card-body { padding: 14px 14px 16px; text-align: center; }
//         .ss-card-name { font-weight: 700; font-size: 14px; color: #0d1b3e; margin-bottom: 4px; line-height: 1.3; }
//         .ss-card-role { font-size: 12px; font-weight: 600; margin-bottom: 12px; }
//         .ss-card-divider {
//           height: 1px; margin-bottom: 12px;
//           background: linear-gradient(90deg, transparent, #e2eaf4, transparent);
//         }
//         .ss-card-footer { display: flex; align-items: center; justify-content: center; gap: 8px; }
//         .ss-batch-tag {
//           padding: 4px 12px; border-radius: 100px;
//           font-size: 11px; font-weight: 600; border: 1px solid;
//         }
//         .ss-verified {
//           display: flex; align-items: center; gap: 4px;
//           font-size: 10px; color: #9ca3af; margin-top: 10px; justify-content: center;
//         }
//         .ss-verified-dot {
//           width: 14px; height: 14px; border-radius: 50%; background: #22c55e;
//           display: flex; align-items: center; justify-content: center; flex-shrink: 0;
//         }

//         /* CTA */
//         .ss-cta {
//           position: relative; margin-top: 60px; border-radius: 20px;
//           overflow: hidden; text-align: center; padding: 52px 32px;
//           background: linear-gradient(135deg, #060e21 0%, #0d1b3e 60%, #0a1a3e 100%);
//         }
//         .ss-cta-grid {
//           position: absolute; inset: 0; opacity: 0.04; pointer-events: none;
//           background-image: linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px);
//           background-size: 32px 32px;
//         }
//         .ss-cta-glow {
//           position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
//           width: 400px; height: 200px; border-radius: 50%; pointer-events: none;
//           background: radial-gradient(ellipse, rgba(232,104,42,0.2) 0%, transparent 70%);
//         }
//         .ss-cta-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(22px, 4vw, 34px); font-weight: 800;
//           color: #fff; margin-bottom: 12px;
//         }
//         .ss-cta-sub {
//           color: #7ba8cc; font-size: 15px;
//           max-width: 500px; margin: 0 auto 28px; line-height: 1.7;
//         }
//         .ss-cta-btns { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
//         .ss-btn-primary {
//           padding: 12px 28px; border-radius: 8px;
//           font-size: 14px; font-weight: 600; cursor: pointer; border: none;
//           color: #fff; background: linear-gradient(135deg, #e8682a, #f5a623);
//           box-shadow: 0 3px 16px rgba(232,104,42,0.38);
//           transition: opacity .2s, transform .15s;
//           font-family: 'DM Sans', sans-serif; text-decoration: none; display: inline-block;
//         }
//         .ss-btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }
//         .ss-btn-secondary {
//           padding: 12px 28px; border-radius: 8px;
//           font-size: 14px; font-weight: 600; cursor: pointer;
//           color: #fff; background: transparent;
//           border: 1.5px solid rgba(255,255,255,0.3);
//           transition: background .2s, transform .15s;
//           font-family: 'DM Sans', sans-serif; text-decoration: none; display: inline-block;
//         }
//         .ss-btn-secondary:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 640px) {
//           .ss-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
//           .ss-hero-inner { padding: 32px 16px 0; }
//           .ss-content { padding: 28px 16px 56px; }
//           .ss-cta { padding: 36px 20px; }
//         }
//       `}</style>

//       <div className="ss-root">

//         {/* ── HERO ── */}
//         <section className="ss-hero">
//           <div className="ss-hero-topbar" />
//           <div className="ss-hero-grid" />
//           <div className="ss-hero-radial" />

//           {[
//             { w:60, h:60, l:"5%",  t:"15%", c:"#1a3a6e", o:0.15 },
//             { w:40, h:40, l:"12%", t:"55%", c:"#e8682a", o:0.18 },
//             { w:80, h:80, l:"88%", t:"10%", c:"#0f5c34", o:0.12 },
//             { w:30, h:30, l:"80%", t:"60%", c:"#e8682a", o:0.2  },
//             { w:50, h:50, l:"55%", t:"75%", c:"#1a3a6e", o:0.1  },
//             { w:25, h:25, l:"30%", t:"20%", c:"#f5a623", o:0.2  },
//             { w:70, h:70, l:"70%", t:"40%", c:"#0f5c34", o:0.08 },
//             { w:35, h:35, l:"45%", t:"85%", c:"#e8682a", o:0.15 },
//           ].map((p, i) => (
//             <div key={i} className="ss-particle" style={{ width: p.w, height: p.h, left: p.l, top: p.t, background: p.c, opacity: p.o }} />
//           ))}

//           <div className="ss-hero-inner">
//             <div className="ss-hero-badge">Hall of Fame</div>
//             <h1 className="ss-hero-title">Our <span>Success</span> Stories</h1>
//             <div className="ss-hero-line" />
//             <p className="ss-hero-sub">
//               Proud of our students who cracked India's toughest exams — their
//               success is our mission and your inspiration.
//             </p>
//           </div>

//           <div className="ss-stats-row">
//             {stats.map((s, i) => (
//               <div key={i} className="ss-stat-item">
//                 <div className="ss-stat-number">{s.number}</div>
//                 <div className="ss-stat-label">{s.label}</div>
//               </div>
//             ))}
//           </div>

//           <svg className="ss-wave" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="currentColor">
//             <path d="M0,20 C360,60 1080,0 1440,30 L1440,50 L0,50 Z" />
//           </svg>

//           {onBack && (
//             <button className="ss-back-btn" onClick={onBack}>
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="15 18 9 12 15 6"/>
//               </svg>
//               Back to Home
//             </button>
//           )}
//         </section>

//         {/* ── CONTENT ── */}
//         <div className="ss-content">

//           {/* Filters */}
//           <div className="ss-filters">
//             {filters.map(f => (
//               <button
//                 key={f}
//                 onClick={() => handleFilter(f)}
//                 className={`ss-filter-btn${activeFilter === f ? " active" : ""}`}
//               >
//                 {f}
//                 {f !== "All" && (
//                   <span className="ss-filter-count">
//                     {successStories.filter(s => s.category === f).length}
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Cards */}
//           <div className="ss-grid" key={cardsKey}>
//             {filtered.map(story => {
//               const cat = categoryMeta[story.category];
//               return (
//                 <div key={story.id} className="ss-card" onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}>
//                   <div className="ss-card-glow" style={{ background: cat.grad }} />
//                   <div className="ss-card-inner">

//                     {/* Card top with real photo */}
//                     <div className="ss-card-top" style={{ background: cat.grad }}>
//                       <div className="ss-card-dot-pattern" />
//                       <img
//                         src={story.img}
//                         alt={story.name}
//                         className="ss-photo"
//                         onError={e => {
//                           // fallback: hide img, show avatar
//                           e.currentTarget.style.display = "none";
//                           e.currentTarget.nextSibling.style.display = "none";
//                           e.currentTarget.parentElement.querySelector(".ss-avatar").style.display = "flex";
//                         }}
//                       />
//                       <div className="ss-photo-overlay" />
//                       {/* Fallback avatar — hidden by default */}
//                       <div className="ss-avatar" style={{ display: "none" }}>{story.initials}</div>
//                       <div className="ss-cat-badge">{story.category}</div>
//                       <div className="ss-card-shine" />
//                     </div>

//                     <div className="ss-card-body">
//                       <div className="ss-card-name">{story.name}</div>
//                       <div className="ss-card-role" style={{ color: cat.text }}>{story.achievement}</div>
//                       <div className="ss-card-divider" />
//                       <div className="ss-card-footer">
//                         <span className="ss-batch-tag" style={{ background: cat.light, color: cat.text, borderColor: `${cat.bg}25` }}>
//                           Batch {story.batch}
//                         </span>
//                       </div>
//                       <div className="ss-verified">
//                         <div className="ss-verified-dot"><CheckIcon /></div>
//                         Vashishth Alumni
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* CTA */}
//           <div className="ss-cta">
//             <div className="ss-cta-grid" />
//             <div className="ss-cta-glow" />
//             <div style={{ position: "relative", zIndex: 1 }}>
//               <h2 className="ss-cta-title">Your Success Story Begins Here</h2>
//               <p className="ss-cta-sub">
//                 Join Vashishth IAS Academy and become the next name on this wall
//                 of fame. Expert guidance, proven results, and a legacy of toppers.
//               </p>
//               <div className="ss-cta-btns">
//                 <a href="#" className="ss-btn-primary">Enroll Now</a>
//                 <a href="#" className="ss-btn-secondary">View Courses</a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";

// ── Import all student images ──
import img2  from "../assets/2.png";
import img3  from "../assets/3.png";
import img4  from "../assets/4.png";
import img5  from "../assets/5.png";
import img6  from "../assets/6.png";
import img7  from "../assets/7.png";
import img8  from "../assets/8.png";
import img9  from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img15 from "../assets/15.png";
import img16 from "../assets/16.png";

const successStories = [
  { id: 1,  name: "Davinder Singh",    achievement: "S.I Punjab Police",       category: "Police",  batch: "2021", initials: "DS", img: img2  },
  { id: 2,  name: "Geeta Bishabnhu",   achievement: "P.C.S Officer",           category: "PCS",     batch: "2020", initials: "GB", img: img3  },
  { id: 3,  name: "Gurmukh Singh",     achievement: "S.I Punjab Police",       category: "Police",  batch: "2022", initials: "GS", img: img4  },
  { id: 4,  name: "Pushpa Kashyap",    achievement: "Constable Punjab Police", category: "Police",  batch: "2021", initials: "PK", img: img5  },
  { id: 5,  name: "Shiv Kumar",        achievement: "S.I Punjab Police",       category: "Police",  batch: "2022", initials: "SK", img: img6  },
  { id: 6,  name: "Satish Kumar",      achievement: "P.C.S Officer",           category: "PCS",     batch: "2021", initials: "SK", img: img7  },
  { id: 7,  name: "Shubham",           achievement: "I.P.S Officer",           category: "IPS",     batch: "2020", initials: "SH", img: img8  },
  { id: 8,  name: "Virender Singh",    achievement: "I.P.S Officer",           category: "IPS",     batch: "2021", initials: "VS", img: img9  },
  { id: 9,  name: "Navraj Batish",     achievement: "P.C.S Officer",           category: "PCS",     batch: "2022", initials: "NB", img: img10 },
  { id: 10, name: "Pritish Kumar",     achievement: "P.C.S Officer",           category: "PCS",     batch: "2023", initials: "PK", img: img11 },
  { id: 11, name: "Jobanpreet Singh",  achievement: "Punjab Patwari",          category: "Other",   batch: "2022", initials: "JS", img: img12 },
  { id: 12, name: "Shivani Parashar",  achievement: "BFS Officer",             category: "Defence", batch: "2022", initials: "SP", img: img13 },
  { id: 13, name: "Hina Khan",         achievement: "SSC (GD)",                category: "SSC",     batch: "2021", initials: "HK", img: img14 },
  { id: 14, name: "Kritika",           achievement: "Govt. Teacher",           category: "Other",   batch: "2021", initials: "KR", img: img15 },
  { id: 15, name: "Harbans Singh",     achievement: "S.I Punjab Police",       category: "Police",  batch: "2023", initials: "HS", img: img16 },
];

const categoryMeta = {
  IPS:     { bg: "#0f5c34", grad: "linear-gradient(135deg,#0f5c34,#1a8a50)", light: "#e6f4ed", text: "#0f5c34", dot: "#22c55e" },
  PCS:     { bg: "#c4531d", grad: "linear-gradient(135deg,#c4531d,#e8682a)", light: "#fdeee7", text: "#c4531d", dot: "#f97316" },
  Police:  { bg: "#1a3a6e", grad: "linear-gradient(135deg,#1a3a6e,#2a5aa0)", light: "#e8edf7", text: "#1a3a6e", dot: "#3b82f6" },
  SSC:     { bg: "#5a2d82", grad: "linear-gradient(135deg,#5a2d82,#7c3aed)", light: "#f0eaf7", text: "#5a2d82", dot: "#8b5cf6" },
  Defence: { bg: "#7a1a2e", grad: "linear-gradient(135deg,#7a1a2e,#b91c1c)", light: "#f7e8eb", text: "#7a1a2e", dot: "#ef4444" },
  Other:   { bg: "#374151", grad: "linear-gradient(135deg,#374151,#4b5563)", light: "#f3f4f6", text: "#374151", dot: "#6b7280" },
};

const filters = ["All", "IPS", "PCS", "Police", "SSC", "Defence", "Other"];

const stats = [
  { number: "500+", label: "Total Selections" },
  { number: "15+",  label: "IPS Officers" },
  { number: "80+",  label: "PCS Officers" },
  { number: "10+",  label: "Years Excellence" },
];

function CheckIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path d="M1.5 4L3 5.5L6.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function SuccessStories({ onBack }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [gsapReady,    setGsapReady]    = useState(false);
  const [cardsKey,     setCardsKey]     = useState(0);

  const filtered = activeFilter === "All"
    ? successStories
    : successStories.filter(s => s.category === activeFilter);

  /* ── Load GSAP ── */
  useEffect(() => {
    if (window.gsap) { setGsapReady(true); return; }
    const s1 = document.createElement("script");
    s1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    s1.onload = () => {
      const s2 = document.createElement("script");
      s2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
      s2.onload = () => { window.gsap.registerPlugin(window.ScrollTrigger); setGsapReady(true); };
      document.head.appendChild(s2);
    };
    document.head.appendChild(s1);
  }, []);

  /* ── Hero entrance ── */
  useEffect(() => {
    if (!gsapReady) return;
    const { gsap } = window;
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .fromTo(".ss-hero-badge",  { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(".ss-hero-title",  { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
      .fromTo(".ss-hero-line",   { scaleX: 0 },          { scaleX: 1, duration: 0.7, transformOrigin: "left" }, "-=0.4")
      .fromTo(".ss-hero-sub",    { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(".ss-stat-item",   { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.2")
      .fromTo(".ss-filter-btn",  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.07 }, "-=0.1");

    gsap.utils.toArray(".ss-particle").forEach((el, i) => {
      gsap.to(el, { x: `random(-30,30)`, y: `random(-40,20)`, rotation: `random(-180,180)`, duration: 6 + i * 0.8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: i * 0.3 });
    });
  }, [gsapReady]);

  /* ── Cards entrance on filter change ── */
  useEffect(() => {
    if (!gsapReady) return;
    window.gsap.fromTo(".ss-card", { y: 50, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.055, ease: "back.out(1.4)" });
  }, [gsapReady, cardsKey]);

  const handleFilter = (f) => { setActiveFilter(f); setCardsKey(k => k + 1); };

  const onCardEnter = (e) => {
    if (!window.gsap) return;
    const card = e.currentTarget;
    window.gsap.to(card, { y: -10, scale: 1.04, duration: 0.32, ease: "power2.out" });
    window.gsap.to(card.querySelector(".ss-card-glow"),  { opacity: 1, duration: 0.3 });
    window.gsap.to(card.querySelector(".ss-card-shine"), { x: "100%", duration: 0.6, ease: "power1.out" });
  };
  const onCardLeave = (e) => {
    if (!window.gsap) return;
    const card = e.currentTarget;
    window.gsap.to(card, { y: 0, scale: 1, duration: 0.35, ease: "power2.out" });
    window.gsap.to(card.querySelector(".ss-card-glow"),  { opacity: 0, duration: 0.3 });
    window.gsap.to(card.querySelector(".ss-card-shine"), { x: "-100%", duration: 0 });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes ssHeroFadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ss-root {
          min-height: 100vh;
          background: #f0f4f8;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .ss-hero {
          position: relative;
          background: linear-gradient(135deg, #060e21 0%, #0d1b3e 45%, #102050 100%);
          overflow: hidden;
          padding-bottom: 60px;
        }
        .ss-hero-topbar {
          height: 4px;
          background: linear-gradient(90deg, #e8682a 0%, #f5a623 50%, #e8682a 100%);
        }
        .ss-hero-grid {
          position: absolute; inset: 0; opacity: 0.04; pointer-events: none;
          background-image: linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .ss-hero-radial {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,104,42,0.12) 0%, transparent 70%);
        }
        .ss-particle {
          position: absolute; border-radius: 50%; pointer-events: none;
        }
        .ss-hero-inner {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto; padding: 40px 20px 0;
          text-align: center;
        }
        .ss-back-btn {
          position: absolute; bottom: 20px; left: 24px; z-index: 10;
          display: inline-flex; align-items: center; gap: 7px;
          padding: 8px 18px; border-radius: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.2);
          color: #c8d9f0; font-size: 13px; font-weight: 500; cursor: pointer;
          transition: background .2s; font-family: 'DM Sans', sans-serif;
        }
        .ss-back-btn:hover { background: rgba(255,255,255,0.14); }
        .ss-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 20px; border-radius: 100px; margin-bottom: 16px;
          background: rgba(232,104,42,0.15);
          border: 1px solid rgba(232,104,42,0.45);
          color: #f5a623; font-size: 12px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase; opacity: 0;
        }
        .ss-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 6vw, 68px); font-weight: 800;
          color: #fff; line-height: 1.1; margin-bottom: 16px; opacity: 0;
          animation: ssHeroFadeIn 0.8s ease 0.5s forwards;
        }
        .ss-hero-title span { color: #f5a623; }
        .ss-hero-line {
          width: 90px; height: 3px; border-radius: 2px; margin: 0 auto 20px;
          background: linear-gradient(90deg, #e8682a, #f5a623);
        }
        .ss-hero-sub {
          color: #93b4d4; font-size: 16px; max-width: 580px; margin: 0 auto 40px;
          line-height: 1.7; opacity: 0;
          animation: ssHeroFadeIn 0.8s ease 0.7s forwards;
        }
        .ss-stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 14px; max-width: 900px; margin: 0 auto; padding: 0 20px;
        }
        .ss-stat-item {
          text-align: center; padding: 20px 12px; border-radius: 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px); opacity: 0;
          animation: ssHeroFadeIn 0.6s ease 0.9s forwards;
        }
        .ss-stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 30px; font-weight: 800; color: #f5a623; line-height: 1;
        }
        .ss-stat-label { font-size: 12px; color: #7ba8cc; margin-top: 4px; font-weight: 500; }
        .ss-wave { display: block; margin-top: -2px; color: #f0f4f8; width: 100%; height: 50px; }

        /* Content */
        .ss-content { max-width: 1200px; margin: 0 auto; padding: 40px 20px 80px; }

        /* Filters */
        .ss-filters {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 10px; margin-bottom: 48px;
        }
        .ss-filter-btn {
          padding: 8px 18px; border-radius: 100px;
          font-size: 13px; font-weight: 600; cursor: pointer;
          border: 1.5px solid #d1dae8; background: #fff; color: #1a3a6e;
          transition: all 0.2s ease; opacity: 0;
          font-family: 'DM Sans', sans-serif;
        }
        .ss-filter-btn:hover { border-color: #e8682a; color: #e8682a; box-shadow: 0 2px 10px rgba(232,104,42,0.15); }
        .ss-filter-btn.active {
          background: linear-gradient(135deg, #e8682a, #f5a623);
          border-color: transparent; color: #fff;
          box-shadow: 0 3px 14px rgba(232,104,42,0.35);
        }
        .ss-filter-count {
          display: inline-block; margin-left: 5px;
          padding: 1px 7px; border-radius: 100px; font-size: 11px;
          background: rgba(0,0,0,0.1);
        }
        .ss-filter-btn.active .ss-filter-count { background: rgba(255,255,255,0.25); }

        /* Grid */
        .ss-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 20px;
        }

        /* Card */
        .ss-card { position: relative; cursor: pointer; opacity: 0; will-change: transform; }
        .ss-card-glow {
          position: absolute; inset: -4px; border-radius: 22px;
          opacity: 0; pointer-events: none; filter: blur(12px);
        }
        .ss-card-inner {
          position: relative; border-radius: 20px; overflow: hidden;
          background: #fff; border: 1px solid rgba(26,58,110,0.1);
          box-shadow: 0 2px 16px rgba(26,58,110,0.07);
        }

        /* ── Card top — FIXED photo area ── */
        .ss-card-top {
          height: 180px;               /* ↑ taller so full face shows */
          position: relative;
          overflow: hidden;
        }
        .ss-card-dot-pattern {
          position: absolute; inset: 0; opacity: 0.12;
          background-image: radial-gradient(circle, #fff 1px, transparent 1px);
          background-size: 10px 10px;
          z-index: 0;
        }
        .ss-card-shine {
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transform: skewX(-15deg); pointer-events: none; z-index: 4;
        }

        /* Photo — fills the box, anchored to top so face is always visible */
        .ss-photo {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;   /* face always at top */
          z-index: 1;
          display: block;
        }
        .ss-photo-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(to top, rgba(0,0,0,0.40) 0%, transparent 50%);
        }

        /* Fallback avatar */
        .ss-avatar {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          width: 72px; height: 72px; border-radius: 50%;
          display: none;              /* shown only on img error */
          align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 22px; font-weight: 800; color: #fff;
          border: 3px solid rgba(255,255,255,0.35);
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
          background: rgba(255,255,255,0.15); backdrop-filter: blur(6px);
        }
        .ss-cat-badge {
          position: absolute; top: 10px; right: 10px; z-index: 5;
          padding: 3px 10px; border-radius: 100px; font-size: 10px; font-weight: 700;
          background: rgba(0,0,0,0.38); color: #fff;
          border: 1px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(4px); letter-spacing: 0.05em;
        }

        .ss-card-body { padding: 14px 14px 16px; text-align: center; }
        .ss-card-name { font-weight: 700; font-size: 14px; color: #0d1b3e; margin-bottom: 4px; line-height: 1.3; }
        .ss-card-role { font-size: 12px; font-weight: 600; margin-bottom: 12px; }
        .ss-card-divider {
          height: 1px; margin-bottom: 12px;
          background: linear-gradient(90deg, transparent, #e2eaf4, transparent);
        }
        .ss-card-footer { display: flex; align-items: center; justify-content: center; gap: 8px; }
        .ss-batch-tag {
          padding: 4px 12px; border-radius: 100px;
          font-size: 11px; font-weight: 600; border: 1px solid;
        }
        .ss-verified {
          display: flex; align-items: center; gap: 4px;
          font-size: 10px; color: #9ca3af; margin-top: 10px; justify-content: center;
        }
        .ss-verified-dot {
          width: 14px; height: 14px; border-radius: 50%; background: #22c55e;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }

        /* CTA */
        .ss-cta {
          position: relative; margin-top: 60px; border-radius: 20px;
          overflow: hidden; text-align: center; padding: 52px 32px;
          background: linear-gradient(135deg, #060e21 0%, #0d1b3e 60%, #0a1a3e 100%);
        }
        .ss-cta-grid {
          position: absolute; inset: 0; opacity: 0.04; pointer-events: none;
          background-image: linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .ss-cta-glow {
          position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 400px; height: 200px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(ellipse, rgba(232,104,42,0.2) 0%, transparent 70%);
        }
        .ss-cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 4vw, 34px); font-weight: 800;
          color: #fff; margin-bottom: 12px;
        }
        .ss-cta-sub {
          color: #7ba8cc; font-size: 15px;
          max-width: 500px; margin: 0 auto 28px; line-height: 1.7;
        }
        .ss-cta-btns { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
        .ss-btn-primary {
          padding: 12px 28px; border-radius: 8px;
          font-size: 14px; font-weight: 600; cursor: pointer; border: none;
          color: #fff; background: linear-gradient(135deg, #e8682a, #f5a623);
          box-shadow: 0 3px 16px rgba(232,104,42,0.38);
          transition: opacity .2s, transform .15s;
          font-family: 'DM Sans', sans-serif; text-decoration: none; display: inline-block;
        }
        .ss-btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }
        .ss-btn-secondary {
          padding: 12px 28px; border-radius: 8px;
          font-size: 14px; font-weight: 600; cursor: pointer;
          color: #fff; background: transparent;
          border: 1.5px solid rgba(255,255,255,0.3);
          transition: background .2s, transform .15s;
          font-family: 'DM Sans', sans-serif; text-decoration: none; display: inline-block;
        }
        .ss-btn-secondary:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .ss-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .ss-hero-inner { padding: 32px 16px 0; }
          .ss-content { padding: 28px 16px 56px; }
          .ss-cta { padding: 36px 20px; }
          .ss-card-top { height: 160px; }
        }
      `}</style>

      <div className="ss-root">

        {/* ── HERO ── */}
        <section className="ss-hero">
          <div className="ss-hero-topbar" />
          <div className="ss-hero-grid" />
          <div className="ss-hero-radial" />

          {[
            { w:60, h:60, l:"5%",  t:"15%", c:"#1a3a6e", o:0.15 },
            { w:40, h:40, l:"12%", t:"55%", c:"#e8682a", o:0.18 },
            { w:80, h:80, l:"88%", t:"10%", c:"#0f5c34", o:0.12 },
            { w:30, h:30, l:"80%", t:"60%", c:"#e8682a", o:0.2  },
            { w:50, h:50, l:"55%", t:"75%", c:"#1a3a6e", o:0.1  },
            { w:25, h:25, l:"30%", t:"20%", c:"#f5a623", o:0.2  },
            { w:70, h:70, l:"70%", t:"40%", c:"#0f5c34", o:0.08 },
            { w:35, h:35, l:"45%", t:"85%", c:"#e8682a", o:0.15 },
          ].map((p, i) => (
            <div key={i} className="ss-particle" style={{ width: p.w, height: p.h, left: p.l, top: p.t, background: p.c, opacity: p.o }} />
          ))}

          <div className="ss-hero-inner">
            <div className="ss-hero-badge">✦ Hall of Fame</div>
            <h1 className="ss-hero-title">Our <span>Success</span> Stories</h1>
            <div className="ss-hero-line" />
            <p className="ss-hero-sub">
              Proud of our students who cracked India's toughest exams — their
              success is our mission and your inspiration.
            </p>
          </div>

          <div className="ss-stats-row">
            {stats.map((s, i) => (
              <div key={i} className="ss-stat-item">
                <div className="ss-stat-number">{s.number}</div>
                <div className="ss-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <svg className="ss-wave" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,20 C360,60 1080,0 1440,30 L1440,50 L0,50 Z" />
          </svg>

          {onBack && (
            <button className="ss-back-btn" onClick={onBack}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              Back to Home
            </button>
          )}
        </section>

        {/* ── CONTENT ── */}
        <div className="ss-content">

          {/* Filters */}
          <div className="ss-filters">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => handleFilter(f)}
                className={`ss-filter-btn${activeFilter === f ? " active" : ""}`}
              >
                {f}
                {f !== "All" && (
                  <span className="ss-filter-count">
                    {successStories.filter(s => s.category === f).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="ss-grid" key={cardsKey}>
            {filtered.map(story => {
              const cat = categoryMeta[story.category];
              return (
                <div key={story.id} className="ss-card" onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}>
                  <div className="ss-card-glow" style={{ background: cat.grad }} />
                  <div className="ss-card-inner">

                    {/* Card top with real photo */}
                    <div className="ss-card-top" style={{ background: cat.grad }}>
                      <div className="ss-card-dot-pattern" />

                      <img
                        src={story.img}
                        alt={story.name}
                        className="ss-photo"
                        onError={e => {
                          e.currentTarget.style.display = "none";
                          const overlay = e.currentTarget.nextElementSibling;
                          if (overlay) overlay.style.display = "none";
                          const avatar = e.currentTarget.closest(".ss-card-top").querySelector(".ss-avatar");
                          if (avatar) avatar.style.display = "flex";
                        }}
                      />
                      <div className="ss-photo-overlay" />

                      {/* Fallback avatar — hidden by default */}
                      <div className="ss-avatar">{story.initials}</div>

                      <div className="ss-cat-badge">{story.category}</div>
                      <div className="ss-card-shine" />
                    </div>

                    <div className="ss-card-body">
                      <div className="ss-card-name">{story.name}</div>
                      <div className="ss-card-role" style={{ color: cat.text }}>{story.achievement}</div>
                      <div className="ss-card-divider" />
                      <div className="ss-card-footer">
                        <span className="ss-batch-tag" style={{ background: cat.light, color: cat.text, borderColor: `${cat.bg}25` }}>
                          Batch {story.batch}
                        </span>
                      </div>
                      <div className="ss-verified">
                        <div className="ss-verified-dot"><CheckIcon /></div>
                        Vashishth Alumni
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="ss-cta">
            <div className="ss-cta-grid" />
            <div className="ss-cta-glow" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 className="ss-cta-title">Your Success Story Begins Here</h2>
              <p className="ss-cta-sub">
                Join Vashishth IAS Academy and become the next name on this wall
                of fame. Expert guidance, proven results, and a legacy of toppers.
              </p>
              <div className="ss-cta-btns">
                <a href="#" className="ss-btn-primary">Enroll Now</a>
                <a href="#" className="ss-btn-secondary">View Courses</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}