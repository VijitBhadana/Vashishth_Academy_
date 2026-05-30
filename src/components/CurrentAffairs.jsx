import { useState, useMemo } from "react";

// ── Sample current affairs data (May 2026) ──
const articlesData = {
  "2026-04-27": ["LNG Supply Shock & India's Energy Security"],
  "2026-04-29": ["Expansion of Supreme Court Jurisdiction"],
  "2026-04-30": ["Forest Rights Act (FRA), 2006 – Key Provisions"],
  "2026-05-01": ["JANANI Platform: Digital Transformation in Health"],
  "2026-05-03": ["Election Commission Appointments & Controversy"],
  "2026-05-04": ["Rashtriya Bal Swasthya Karyakram (RBSK)"],
  "2026-05-06": ["Asian Energy Security Alliance: India's Role"],
  "2026-05-08": ["Erosion of Old Age Pension under New Norms"],
  "2026-05-09": ["International Fund for Agricultural Development"],
  "2026-05-10": ["Indian Ocean Rim Association (IORA) Summit"],
  "2026-05-12": ["IMD's Block-Level Monsoon Forecast Initiative"],
  "2026-05-14": ["SEHAT Mission: Integrating Agri & Health Data"],
  "2026-05-15": ["National Mission for Sustainable Agriculture"],
  "2026-05-17": ["'One Case One Data' Initiative – Digital Justice"],
  "2026-05-18": ["Medical Negligence & Survivor Rights"],
  "2026-05-19": ["India-UAE Gold Trade & Rising Import Concerns"],
  "2026-05-20": ["Rising Crude Oil Prices & Their Impact on India"],
  "2026-05-21": ["India Rejects Arbitration Award in Energy Case"],
  "2026-05-22": ["Agarwood – 'Liquid Gold of the Forest'"],
  "2026-05-24": ["India–UAE Relations: Strategic Partnerships"],
  "2026-05-25": ["Maritime Chokepoints in the Indian Ocean Region"],
  "2026-05-26": ["Unmanned Aerial Vehicle Launch – DRDO"],
  "2026-05-27": ["Suryastra Rocket System – New Defence Capability"],
};

const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const DAYS_SHORT = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function toKey(y, m, d) {
  return `${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function CurrentAffairs() {
  const today = new Date();
  const [view, setView] = useState("month");
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);

  // ── Month navigation ──
  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
    setSelectedDay(null);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
    setSelectedDay(null);
  };
  const goToday = () => {
    setYear(today.getFullYear());
    setMonth(today.getMonth());
    setWeekOffset(0);
    setSelectedDay(null);
  };

  // ── Week navigation ──
  const prevWeek = () => setWeekOffset(w => w - 1);
  const nextWeek = () => setWeekOffset(w => w + 1);

  // ── Week dates ──
  const weekDates = useMemo(() => {
    const base = new Date(today);
    base.setDate(base.getDate() - base.getDay() + weekOffset * 7);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      return d;
    });
  }, [weekOffset]);

  const weekLabel = weekDates.length
    ? `${MONTHS[weekDates[0].getMonth()].slice(0,3)} ${weekDates[0].getDate()} – ${MONTHS[weekDates[6].getMonth()].slice(0,3)} ${weekDates[6].getDate()}, ${weekDates[6].getFullYear()}`
    : "";

  // ── Month grid ──
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  // prev month fill
  const prevDays = getDaysInMonth(year, month === 0 ? 11 : month - 1);

  const cells = [];
  for (let i = 0; i < firstDay; i++) {
    cells.push({ day: prevDays - firstDay + 1 + i, currentMonth: false, date: null });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, currentMonth: true, date: toKey(year, month, d) });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ day: cells.length - daysInMonth - firstDay + 1, currentMonth: false, date: null });
  }

  const isToday = (d) =>
    d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  return (
    <div style={{ fontFamily:"'Hind',sans-serif",background:"#f0f4f8",minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        .ca-btn-nav { transition: background .15s; }
        .ca-btn-nav:hover { background: #e2e8f0 !important; }
        .ca-day-cell { transition: background .15s; }
        .ca-day-cell:hover { background: #f0f4f8 !important; cursor: pointer; }
        .ca-article-tag { transition: opacity .15s; }
        .ca-article-tag:hover { opacity: .85; cursor: pointer; }
        .ca-view-btn { transition: all .15s; }
        .ca-view-btn:hover { background: #e2e8f0 !important; }
        @media(max-width:700px){
          .ca-grid-header span { font-size: 10px !important; }
          .ca-cell-day { font-size: 11px !important; }
          .ca-article-tag { font-size: 9px !important; padding: 2px 4px !important; }
          .ca-week-header span { font-size: 10px !important; }
        }
        @media(max-width:480px){
          .ca-controls { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .ca-nav-btns { width: 100%; justify-content: flex-end; }
        }
      `}</style>

      {/* ── Header bar ── */}
      <div style={{ background:"linear-gradient(135deg,#0a1628,#1a3a6b)",padding:"24px 28px" }}>
        <div style={{ maxWidth:1152,margin:"0 auto" }}>
          <div style={{ display:"flex",flexWrap:"wrap",gap:6,fontSize:12,color:"#93c5fd",marginBottom:10 }}>
            <a href="/" style={{ color:"#93c5fd",textDecoration:"none" }}>Home</a>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#93c5fd" }}>Daily Updates</span>
            <span style={{ color:"#60a5fa" }}>›</span>
            <span style={{ color:"#fff" }}>Current Affairs</span>
          </div>
          <h1 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.8rem",fontWeight:900,color:"#fff",margin:0 }}>
            Daily Current Affairs
          </h1>
        </div>
      </div>

      {/* ── Calendar Body ── */}
      <div style={{ maxWidth:1152,margin:"0 auto",padding:"28px 16px" }}>

        {/* Month/Week label + controls */}
        <div className="ca-controls" style={{ display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,marginBottom:20 }}>
          {/* Left: label + view select */}
          <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.3rem",fontWeight:700,color:"#0a1628",margin:0 }}>
              {view === "month" ? `${MONTHS[month]} ${year}` : weekLabel}
            </h2>
            <div>
              <label style={{ fontSize:12,color:"#6b7280",marginBottom:4,display:"block" }}>Choose View</label>
              <select
                value={view}
                onChange={e => setView(e.target.value)}
                style={{ border:"1px solid #d1d5db",borderRadius:6,padding:"6px 12px",fontSize:13,color:"#374151",background:"#fff",cursor:"pointer",minWidth:160 }}
              >
                <option value="month">Month - Classic</option>
                <option value="week">Week - Time Grid</option>
              </select>
            </div>
          </div>

          {/* Right: Today + nav */}
          <div className="ca-nav-btns" style={{ display:"flex",gap:8,alignItems:"center" }}>
            <button
              onClick={goToday}
              style={{ padding:"7px 18px",borderRadius:6,background:"#1a3a6b",color:"#fff",fontWeight:700,fontSize:13,border:"none",cursor:"pointer" }}>
              Today
            </button>
            <button
              className="ca-btn-nav"
              onClick={view === "month" ? prevMonth : prevWeek}
              style={{ width:34,height:34,borderRadius:6,background:"#374151",color:"#fff",border:"none",cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center" }}>
              ‹
            </button>
            <button
              className="ca-btn-nav"
              onClick={view === "month" ? nextMonth : nextWeek}
              style={{ width:34,height:34,borderRadius:6,background:"#374151",color:"#fff",border:"none",cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center" }}>
              ›
            </button>
          </div>
        </div>

        {/* ── MONTH VIEW ── */}
        {view === "month" && (
          <div style={{ background:"#fff",borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.08)",overflow:"hidden" }}>
            {/* Day headers */}
            <div style={{ display:"grid",gridTemplateColumns:"repeat(7,1fr)",background:"#f8fafc",borderBottom:"1px solid #e2e8f0" }}>
              {DAYS.map(d => (
                <div key={d} className="ca-grid-header" style={{ padding:"10px 6px",textAlign:"center" }}>
                  <span style={{ fontSize:12,fontWeight:700,color:"#1a3a6b",letterSpacing:"0.04em" }}>{d}</span>
                </div>
              ))}
            </div>

            {/* Cells */}
            <div style={{ display:"grid",gridTemplateColumns:"repeat(7,1fr)" }}>
              {cells.map((cell, idx) => {
                const articles = cell.date ? (articlesData[cell.date] || []) : [];
                const todayCell = cell.currentMonth && isToday(cell.day);
                const selected = selectedDay === cell.date;
                return (
                  <div
                    key={idx}
                    className="ca-day-cell"
                    onClick={() => cell.currentMonth && cell.date && setSelectedDay(selected ? null : cell.date)}
                    style={{
                      minHeight:90,
                      borderRight:"1px solid #e2e8f0",
                      borderBottom:"1px solid #e2e8f0",
                      padding:"6px 5px",
                      background: selected ? "#eef3fc" : "#fff",
                      position:"relative",
                    }}>
                    {/* date number */}
                    <div className="ca-cell-day" style={{
                      fontSize:13,
                      fontWeight: todayCell ? 700 : 400,
                      color: !cell.currentMonth ? "#cbd5e1" : todayCell ? "#fff" : "#374151",
                      textAlign:"right",
                      marginBottom:4,
                    }}>
                      {todayCell ? (
                        <span style={{ display:"inline-flex",alignItems:"center",justifyContent:"center",width:22,height:22,borderRadius:"50%",background:"#e85d04",color:"#fff",fontSize:12,fontWeight:700 }}>
                          {cell.day}
                        </span>
                      ) : cell.day}
                    </div>
                    {/* articles */}
                    {articles.map((a, ai) => (
                      <div key={ai} className="ca-article-tag" style={{
                        background:"#1a3a6b",
                        color:"#fff",
                        fontSize:10,
                        padding:"3px 6px",
                        borderRadius:4,
                        marginBottom:3,
                        lineHeight:1.4,
                        overflow:"hidden",
                        textOverflow:"ellipsis",
                        whiteSpace:"nowrap",
                      }}>
                        {a}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── WEEK VIEW ── */}
        {view === "week" && (
          <div style={{ background:"#fff",borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.08)",overflow:"hidden" }}>
            {/* Week day headers */}
            <div style={{ display:"grid",gridTemplateColumns:"repeat(7,1fr)",background:"#f8fafc",borderBottom:"1px solid #e2e8f0" }}>
              {weekDates.map((d, i) => {
                const isT = d.toDateString() === today.toDateString();
                return (
                  <div key={i} className="ca-week-header" style={{ padding:"10px 8px",textAlign:"center",borderRight:i<6?"1px solid #e2e8f0":"none" }}>
                    <span style={{ fontSize:11,fontWeight:700,color:"#1a3a6b",display:"block",marginBottom:4 }}>{DAYS[d.getDay()]}</span>
                    <span style={{
                      display:"inline-flex",alignItems:"center",justifyContent:"center",
                      width:26,height:26,borderRadius:"50%",
                      background: isT ? "#e85d04" : "transparent",
                      color: isT ? "#fff" : "#374151",
                      fontSize:13,fontWeight:700,
                    }}>{d.getDate()}</span>
                  </div>
                );
              })}
            </div>

            {/* Week articles */}
            <div style={{ display:"grid",gridTemplateColumns:"repeat(7,1fr)",minHeight:320 }}>
              {weekDates.map((d, i) => {
                const key = toKey(d.getFullYear(), d.getMonth(), d.getDate());
                const arts = articlesData[key] || [];
                return (
                  <div key={i} style={{ borderRight:i<6?"1px solid #e2e8f0":"none",padding:"10px 6px",minHeight:200 }}>
                    {arts.map((a, ai) => (
                      <div key={ai} className="ca-article-tag" style={{
                        background:"#1a3a6b",color:"#fff",fontSize:11,
                        padding:"5px 8px",borderRadius:5,marginBottom:6,
                        lineHeight:1.5,cursor:"pointer",
                      }}>{a}</div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Selected day articles popup ── */}
        {selectedDay && articlesData[selectedDay] && (
          <div style={{ marginTop:20,background:"#fff",borderRadius:12,padding:"20px 22px",boxShadow:"0 4px 20px rgba(0,0,0,0.10)",border:"1px solid #e2e8f0" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14 }}>
              <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.1rem",fontWeight:700,color:"#0a1628",margin:0 }}>
                Articles — {new Date(selectedDay).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}
              </h3>
              <button
                onClick={() => setSelectedDay(null)}
                style={{ background:"none",border:"none",fontSize:18,color:"#6b7280",cursor:"pointer",lineHeight:1 }}>
                ×
              </button>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
              {articlesData[selectedDay].map((a, i) => (
                <div key={i} style={{ display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"#f5f8fd",borderRadius:8,border:"1px solid #dde8f8" }}>
                  <div style={{ width:6,height:6,borderRadius:"50%",background:"#e85d04",flexShrink:0 }}/>
                  <span style={{ fontSize:14,color:"#0a1628",fontWeight:500,lineHeight:1.6 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Info note ── */}
        <div style={{ marginTop:20,background:"#fff8e1",borderLeft:"4px solid #f4a726",borderRadius:"0 8px 8px 0",padding:"12px 16px" }}>
          <p style={{ fontSize:13,color:"#555",margin:0,lineHeight:1.7 }}>
            <strong>Note:</strong> Click on any date to view the articles for that day. Use the view selector to switch between Month and Week views.
          </p>
        </div>

      </div>
    </div>
  );
}
