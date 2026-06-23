

import { useState, useEffect, useRef, useCallback } from "react";
import { C, slides } from "../data/data";
import { useParallax } from "../utils/animations";

function Dot({ active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: active ? 28 : 10,
        height: 10,
        borderRadius: active ? 5 : "50%",
        background: active ? C.navy : "#ccd8ea",
        border: "none",
        cursor: "pointer",
        outline: "none",
        transition: "all .3s",
        padding: 0,
      }}
    />
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const total = slides.length;
  const { ref: carouselRef, offset: parallaxOffset } = useParallax(0.25);

  const goTo = useCallback(
    (idx) => setCurrent(((idx % total) + total) % total),
    [total]
  );
  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % total),
      3500
    );
  }, [total]);
  const stopAuto = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto, stopAuto]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
    stopAuto();
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goTo(current + 1) : goTo(current - 1);
    }
    startAuto();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div style={{ background: "#fff" }}>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: .02em;
          text-shadow: 0 2px 12px rgba(0,0,0,.6);
          margin-bottom: 10px;
          white-space: pre-line;
        }
        .hero-sub {
          font-size: 15px;
          color: rgba(255,255,255,.9);
          max-width: 560px;
          margin: 0 auto 22px;
          text-shadow: 0 1px 6px rgba(0,0,0,.5);
        }
        .hero-content {
          padding: 0 60px;
        }
        .hero-btn {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          padding: 10px 28px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: all .2s;
        }

        /* ✅ FIX: vh-based height — zoom pe image cut nahi hogi */
        .hero-wrap {
          height: 75vh;
          min-height: 380px;
          max-height: 520px;
        }

        .hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,.18);
          border: 1.5px solid rgba(255,255,255,.5);
          color: #fff;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background .2s;
          user-select: none;
        }
        .hero-arrow:hover { background: rgba(255,255,255,.35); }
        .hero-arrow.left  { left: 16px; }
        .hero-arrow.right { right: 16px; }

        @media (max-width: 768px) {
          .hero-wrap    { height: 55vh !important; min-height: 280px !important; }
          .hero-title   { font-size: 28px !important; }
          .hero-sub     { font-size: 13px !important; max-width: 90% !important; }
          .hero-content { padding: 0 52px !important; }
          .hero-btn     { font-size: 11px !important; padding: 9px 20px !important; }
        }
        @media (max-width: 480px) {
          .hero-wrap    { height: 45vh !important; min-height: 220px !important; }
          .hero-title   { font-size: 21px !important; }
          .hero-sub     { font-size: 12px !important; margin-bottom: 16px !important; }
          .hero-content { padding: 0 40px !important; }
          .hero-btn     { font-size: 10px !important; padding: 8px 16px !important; }
          .hero-arrow   { width: 30px !important; height: 30px !important; font-size: 14px !important; }
          .hero-arrow.left  { left: 8px !important; }
          .hero-arrow.right { right: 8px !important; }
        }
      `}</style>

      <div
        ref={carouselRef}
        className="hero-wrap"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          cursor: "pointer",
          userSelect: "none",
        }}
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Left click zone */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "50%",
            height: "100%",
            zIndex: 10,
            cursor: "pointer",
          }}
          onClick={() => { goTo(current - 1); startAuto(); }}
        />

        {/* Right click zone */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "50%",
            height: "100%",
            zIndex: 10,
            cursor: "pointer",
          }}
          onClick={() => { goTo(current + 1); startAuto(); }}
        />

        {/* Slides strip */}
        <div
          style={{
            display: "flex",
            height: "100%",
            transition: "transform .65s cubic-bezier(.77,0,.18,1)",
            transform: `translateX(-${current * 100}%)`,
            willChange: "transform",
          }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              style={{
                minWidth: "100%",
                height: "100%",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "110%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  background: s.grad,
                  backgroundImage: s.image ? `url(${s.image})` : undefined,
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                  backgroundPositionY: `calc(50% + ${parallaxOffset * 0.4}px)`,
                  willChange: "background-position",
                  transform: `translateY(${-parallaxOffset * 0.15}px)`,
                }}
              >
                {/* Dark overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.45)",
                  }}
                />

                {/* Content */}
                <div
                  className="hero-content"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    color: "#fff",
                    animation: i === current ? "slideIn .6s ease" : "none",
                  }}
                >
                  {/* Tag badge */}
                  <span
                    style={{
                      display: "inline-block",
                      background: C.red,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      padding: "4px 14px",
                      borderRadius: 3,
                      marginBottom: 14,
                    }}
                  >
                    {s.tag}
                  </span>

                  <div className="hero-title">{s.title}</div>

                  <div className="hero-sub">{s.sub}</div>

                  <button
                    className="hero-btn"
                    style={{ background: C.gold, color: C.navy }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
                  >
                    {s.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 9,
          padding: "14px 0 16px",
          background: "#fff",
        }}
      >
        {slides.map((_, i) => (
          <Dot
            key={i}
            active={i === current}
            onClick={() => { goTo(i); startAuto(); }}
          />
        ))}
      </div>
    </div>
  );
}
