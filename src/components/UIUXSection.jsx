import { useEffect, useRef } from "react";
 
// Paste this import in your main CSS or index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
 
const styles = `
  .uiux-root {
    font-family: 'DM Sans', sans-serif;
    background: #0a0a0a;
    color: #f0ece4;
    padding: 72px 40px;
    position: relative;
    overflow: hidden;
  }
 
  .uiux-root *, .uiux-root *::before, .uiux-root *::after {
    box-sizing: border-box;
  }
 
  .uiux-grain {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
  }
 
  .uiux-root > *:not(.uiux-grain) {
    position: relative;
    z-index: 1;
  }
 
  .uiux-eyebrow {
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #c8f27a;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .uiux-eyebrow::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 1px;
    background: #c8f27a;
    flex-shrink: 0;
  }
 
  .uiux-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(36px, 5vw, 58px);
    font-weight: 800;
    line-height: 1.05;
    margin: 0 0 16px;
    letter-spacing: -0.02em;
    color: #f0ece4;
  }
  .uiux-title span { color: #c8f27a; }
 
  .uiux-sub {
    font-size: 16px;
    color: #888880;
    max-width: 480px;
    line-height: 1.7;
    margin: 0 0 64px;
    font-weight: 300;
  }
 
  .uiux-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    margin-bottom: 2px;
  }
 
  .uiux-card {
    background: #111110;
    border: 1px solid #1e1e1c;
    padding: 36px 32px;
    transition: border-color 0.3s, background 0.3s;
    cursor: default;
  }
  .uiux-card:hover { border-color: #c8f27a33; background: #141413; }
  .uiux-card.wide { grid-column: 1 / -1; }
 
  .uiux-tag {
    display: inline-block;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 2px;
    margin-bottom: 20px;
  }
  .tag-green { background: #c8f27a18; color: #c8f27a; border: 1px solid #c8f27a33; }
  .tag-blue  { background: #7ab8f218; color: #7ab8f2; border: 1px solid #7ab8f233; }
  .tag-amber { background: #f2c47a18; color: #f2c47a; border: 1px solid #f2c47a33; }
 
  .uiux-card-title {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #f0ece4;
    margin: 0 0 10px;
    letter-spacing: -0.01em;
  }
  .uiux-card-desc {
    font-size: 14px;
    color: #666662;
    line-height: 1.6;
    margin: 0 0 24px;
    font-weight: 300;
  }
 
  .uiux-preview {
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 20px;
    border: 1px solid #1e1e1c;
    background: #0d0d0c;
    padding: 16px;
  }
 
  /* ── Dashboard Preview ── */
  .dp-topbar {
    display: flex; gap: 8px; align-items: center;
    padding-bottom: 10px; border-bottom: 1px solid #1e1e1c; margin-bottom: 10px;
  }
  .dp-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
  .dp-title-bar { flex: 1; height: 7px; background: #1e1e1c; border-radius: 3px; margin-left: 6px; }
  .dp-metrics { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 10px; }
  .dp-metric { background: #161615; border: 1px solid #1e1e1c; border-radius: 4px; padding: 10px; }
  .dp-metric-val { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; color: #f0ece4; margin-bottom: 3px; }
  .dp-metric-label { font-size: 9px; color: #444440; text-transform: uppercase; letter-spacing: 0.1em; }
  .dp-chart-row { display: flex; align-items: flex-end; gap: 5px; height: 52px; padding-top: 8px; margin-bottom: 10px; }
  .dp-bar { flex: 1; border-radius: 2px 2px 0 0; }
  .dp-list { display: flex; flex-direction: column; gap: 6px; }
  .dp-list-item { display: flex; align-items: center; gap: 8px; padding: 8px; background: #161615; border-radius: 4px; border: 1px solid #1e1e1c; }
  .dp-avatar { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; font-family: 'Syne', sans-serif; flex-shrink: 0; }
  .dp-li-name { font-size: 10px; color: #888880; font-weight: 500; }
  .dp-li-sub  { font-size: 9px; color: #444440; }
  .dp-li-val  { font-size: 11px; font-weight: 600; color: #c8f27a; font-family: 'Syne', sans-serif; margin-left: auto; }
 
  /* ── Mobile Preview ── */
  .mobile-preview { display: flex; gap: 10px; align-items: flex-start; }
  .phone-frame { width: 110px; border: 1px solid #2a2a28; border-radius: 16px; background: #0d0d0c; padding: 10px 8px; flex-shrink: 0; }
  .ph-notch { width: 36px; height: 5px; background: #1e1e1c; border-radius: 3px; margin: 0 auto 12px; }
  .ph-header { display: flex; align-items: center; gap: 6px; margin-bottom: 10px; }
  .ph-avatar-sm { width: 20px; height: 20px; border-radius: 50%; background: #c8f27a22; border: 1px solid #c8f27a44; display: flex; align-items: center; justify-content: center; font-size: 8px; color: #c8f27a; font-weight: 700; }
  .ph-greeting { font-size: 8px; color: #888880; }
  .ph-name { font-size: 9px; color: #f0ece4; font-weight: 600; }
  .ph-card { background: #c8f27a; border-radius: 8px; padding: 10px; margin-bottom: 8px; }
  .ph-card-label { font-size: 7px; color: #3a4a1a; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 3px; }
  .ph-card-val { font-size: 16px; font-weight: 800; color: #1a2a0a; font-family: 'Syne', sans-serif; }
  .ph-card-sub { font-size: 7px; color: #5a7a2a; margin-top: 3px; }
  .ph-row { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; margin-bottom: 6px; }
  .ph-mini { background: #161615; border: 1px solid #1e1e1c; border-radius: 5px; padding: 7px; }
  .ph-mini-v { font-size: 11px; font-weight: 700; color: #7ab8f2; font-family: 'Syne', sans-serif; }
  .ph-mini-l { font-size: 7px; color: #444440; margin-top: 1px; }
  .ph-nav { display: flex; justify-content: space-around; align-items: center; padding-top: 8px; border-top: 1px solid #1e1e1c; margin-top: 6px; }
  .ph-nav-item { display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .ph-nav-icon { width: 14px; height: 14px; background: #2a2a28; border-radius: 3px; }
  .ph-nav-icon.active { background: #c8f27a33; border: 1px solid #c8f27a66; }
  .ph-nav-dot { width: 3px; height: 3px; border-radius: 50%; }
  .ph-nav-dot.active { background: #c8f27a; }
  .phone-side { flex: 1; display: flex; flex-direction: column; gap: 8px; }
  .psc-card { background: #161615; border: 1px solid #1e1e1c; border-radius: 6px; padding: 12px; }
  .psc-title { font-size: 11px; font-weight: 600; color: #f0ece4; margin-bottom: 6px; font-family: 'Syne', sans-serif; }
  .psc-bar-wrap { background: #0d0d0c; border-radius: 3px; height: 5px; overflow: hidden; margin-bottom: 4px; }
  .psc-bar { height: 100%; border-radius: 3px; }
  .psc-label { font-size: 9px; color: #444440; display: flex; justify-content: space-between; }
 
  /* ── Design System Preview ── */
  .ds-preview { display: flex; flex-direction: column; gap: 12px; }
  .ds-row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
  .ds-swatch { width: 24px; height: 24px; border-radius: 4px; flex-shrink: 0; }
  .ds-swatch-label { font-size: 10px; color: #444440; font-weight: 300; margin-left: 8px; }
  .ds-t1 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: #f0ece4; line-height: 1.1; }
  .ds-t2 { font-size: 13px; font-weight: 500; color: #888880; }
  .ds-t3 { font-size: 11px; font-weight: 300; color: #444440; }
  .ds-components { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
  .ds-btn-p { padding: 7px 14px; font-size: 11px; font-weight: 600; background: #c8f27a; color: #1a2a0a; border-radius: 3px; border: none; font-family: 'DM Sans', sans-serif; letter-spacing: 0.04em; text-transform: uppercase; cursor: pointer; }
  .ds-btn-s { padding: 7px 14px; font-size: 11px; font-weight: 500; background: transparent; color: #888880; border-radius: 3px; border: 1px solid #2a2a28; font-family: 'DM Sans', sans-serif; letter-spacing: 0.04em; cursor: pointer; }
  .ds-badge { padding: 3px 8px; font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 2px; }
  .ds-grid-demo { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; }
  .ds-grid-cell { height: 28px; border-radius: 3px; border: 1px solid #1e1e1c; }
 
  /* ── Card Footer ── */
  .uiux-card-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
  .skills-row { display: flex; flex-wrap: wrap; gap: 8px; }
  .skill-chip { font-size: 11px; padding: 4px 12px; border-radius: 2px; border: 1px solid #1e1e1c; color: #666662; background: #111110; letter-spacing: 0.05em; }
  .card-arrow { width: 30px; height: 30px; border: 1px solid #1e1e1c; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #444440; font-size: 13px; transition: border-color 0.2s, color 0.2s; flex-shrink: 0; }
  .uiux-card:hover .card-arrow { border-color: #c8f27a66; color: #c8f27a; }
 
  /* ── Bottom Row ── */
  .uiux-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-top: 2px; }
 
  .cta-card { background: #c8f27a; padding: 36px 32px; display: flex; flex-direction: column; justify-content: space-between; }
  .cta-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; color: #1a2a0a; letter-spacing: -0.01em; line-height: 1.2; margin-bottom: 12px; }
  .cta-sub { font-size: 13px; color: #3a5a1a; font-weight: 300; line-height: 1.6; margin-bottom: 28px; }
  .cta-btn { display: inline-flex; align-items: center; gap: 8px; background: #1a2a0a; color: #c8f27a; padding: 10px 20px; border-radius: 3px; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; width: fit-content; font-family: 'DM Sans', sans-serif; cursor: pointer; border: none; text-decoration: none; }
 
  .stat-card { background: #111110; border: 1px solid #1e1e1c; padding: 36px 32px; display: flex; flex-direction: column; justify-content: space-between; }
  .stat-numbers { display: flex; flex-direction: column; gap: 16px; }
  .stat-val { font-family: 'Syne', sans-serif; font-size: 36px; font-weight: 800; color: #f0ece4; letter-spacing: -0.03em; line-height: 1; }
  .stat-val span { color: #c8f27a; }
  .stat-val.blue { color: #7ab8f2; }
  .stat-val.blue span { color: #7ab8f2; }
  .stat-label { font-size: 12px; color: #444440; margin-top: 3px; font-weight: 300; }
 
  @media (max-width: 640px) {
    .uiux-root { padding: 48px 20px; }
    .uiux-grid { grid-template-columns: 1fr; }
    .uiux-card.wide { grid-column: auto; }
    .uiux-bottom { grid-template-columns: 1fr; }
    .mobile-preview { flex-direction: column; }
  }
`;
 
export default function UIUXSection() {
  const styleRef = useRef(null);
 
  useEffect(() => {
    if (!document.getElementById("uiux-styles")) {
      const tag = document.createElement("style");
      tag.id = "uiux-styles";
      tag.textContent = styles;
      document.head.appendChild(tag);
    }
    return () => {
      // optional cleanup — remove if you want styles to persist
    };
  }, []);
 
  return (
    <section className="uiux-root">
      <div className="uiux-grain" />
 
      <div className="uiux-eyebrow">UI / UX Design</div>
      <h2 className="uiux-title">
        Interfaces that feel<br />
        <span>intentional</span>
      </h2>
      <p className="uiux-sub">
        From design systems to deployed dashboards — I design with precision
        and build with the same care.
      </p>
 
      {/* ── Main Grid ── */}
      <div className="uiux-grid">
 
        {/* Card 1 — Analytics Dashboard */}
        <div className="uiux-card">
          <span className="uiux-tag tag-green">Dashboard Design</span>
          <h3 className="uiux-card-title">Analytics Dashboard</h3>
          <p className="uiux-card-desc">
            Clean data-dense UI with clear hierarchy, real-time metrics, and
            frictionless navigation.
          </p>
          <div className="uiux-preview">
            <div className="dp-topbar">
              <div className="dp-dot" style={{ background: "#c8f27a" }} />
              <div className="dp-dot" style={{ background: "#f2c47a" }} />
              <div className="dp-dot" style={{ background: "#f27ab8" }} />
              <div className="dp-title-bar" />
            </div>
            <div className="dp-metrics">
              <div className="dp-metric">
                <div className="dp-metric-val">₹84K</div>
                <div className="dp-metric-label">Revenue</div>
              </div>
              <div className="dp-metric">
                <div className="dp-metric-val" style={{ color: "#7ab8f2" }}>1,204</div>
                <div className="dp-metric-label">Users</div>
              </div>
              <div className="dp-metric">
                <div className="dp-metric-val" style={{ color: "#c8f27a" }}>94%</div>
                <div className="dp-metric-label">Uptime</div>
              </div>
            </div>
            <div className="dp-chart-row">
              {[35, 55, 45, 70, 60, 85, 50].map((h, i) => (
                <div
                  key={i}
                  className="dp-bar"
                  style={{
                    height: `${h}%`,
                    background: i === 5 ? "#c8f27a" : `rgba(200,242,122,${0.1 + i * 0.08})`,
                    border: `1px solid rgba(200,242,122,${0.2 + i * 0.08})`,
                  }}
                />
              ))}
            </div>
            <div className="dp-list">
              {[
                { init: "AA", name: "Arjit Anand", sub: "Frontend Dev", val: "+₹12K", ac: "#c8f27a" },
                { init: "RK", name: "Rahul Kumar", sub: "UI Designer", val: "+₹8.4K", ac: "#7ab8f2" },
              ].map((u) => (
                <div className="dp-list-item" key={u.init}>
                  <div
                    className="dp-avatar"
                    style={{
                      background: u.ac + "22",
                      color: u.ac,
                      border: `1px solid ${u.ac}33`,
                    }}
                  >
                    {u.init}
                  </div>
                  <div>
                    <div className="dp-li-name">{u.name}</div>
                    <div className="dp-li-sub">{u.sub}</div>
                  </div>
                  <div className="dp-li-val" style={{ color: u.ac }}>{u.val}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="uiux-card-footer">
            <div className="skills-row">
              {["React", "Data Viz", "CSS Grid"].map((s) => (
                <span className="skill-chip" key={s}>{s}</span>
              ))}
            </div>
            <div className="card-arrow">↗</div>
          </div>
        </div>
 
        {/* Card 2 — Mobile UI */}
        <div className="uiux-card">
          <span className="uiux-tag tag-blue">Mobile UI</span>
          <h3 className="uiux-card-title">Wellness App Interface</h3>
          <p className="uiux-card-desc">
            Premium mobile experience with clear progress indicators, bold
            typography, and calm aesthetics.
          </p>
          <div className="uiux-preview">
            <div className="mobile-preview">
              <div className="phone-frame">
                <div className="ph-notch" />
                <div className="ph-header">
                  <div className="ph-avatar-sm">A</div>
                  <div>
                    <div className="ph-greeting">Good morning</div>
                    <div className="ph-name">Arjit</div>
                  </div>
                </div>
                <div className="ph-card">
                  <div className="ph-card-label">Today's Goal</div>
                  <div className="ph-card-val">1,840</div>
                  <div className="ph-card-sub">kcal remaining</div>
                </div>
                <div className="ph-row">
                  <div className="ph-mini">
                    <div className="ph-mini-v">68%</div>
                    <div className="ph-mini-l">Progress</div>
                  </div>
                  <div className="ph-mini">
                    <div className="ph-mini-v" style={{ color: "#f2c47a" }}>Day 14</div>
                    <div className="ph-mini-l">Streak</div>
                  </div>
                </div>
                <div className="ph-nav">
                  {[true, false, false, false].map((active, i) => (
                    <div className="ph-nav-item" key={i}>
                      <div className={`ph-nav-icon${active ? " active" : ""}`} />
                      <div className={`ph-nav-dot${active ? " active" : ""}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="phone-side">
                {[
                  { label: "Protein", pct: 72, color: "#c8f27a", target: "120g target" },
                  { label: "Carbs",   pct: 45, color: "#7ab8f2", target: "180g target" },
                  { label: "Fats",    pct: 58, color: "#f2c47a", target: "60g target" },
                ].map((n) => (
                  <div className="psc-card" key={n.label}>
                    <div className="psc-title">{n.label}</div>
                    <div className="psc-bar-wrap">
                      <div className="psc-bar" style={{ width: `${n.pct}%`, background: n.color }} />
                    </div>
                    <div className="psc-label">
                      <span>{n.pct}%</span>
                      <span>{n.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="uiux-card-footer">
            <div className="skills-row">
              {["Mobile UX", "Figma → Code"].map((s) => (
                <span className="skill-chip" key={s}>{s}</span>
              ))}
            </div>
            <div className="card-arrow">↗</div>
          </div>
        </div>
 
        {/* Card 3 — Design System (full width) */}
        <div className="uiux-card wide">
          <span className="uiux-tag tag-amber">Design System</span>
          <h3 className="uiux-card-title">Component Library & Design Tokens</h3>
          <p className="uiux-card-desc">
            Systematic approach to UI — typography scales, color tokens, reusable
            components, and consistent spacing rhythm built for production React apps.
          </p>
          <div className="uiux-preview">
            <div className="ds-preview">
              <div className="ds-row">
                {["#c8f27a","#7ab8f2","#f2c47a","#f27ab8","#2a2a28","#161615","#f0ece4"].map((c) => (
                  <div className="ds-swatch" key={c} style={{ background: c }} />
                ))}
                <span className="ds-swatch-label">Design tokens — 7 base colors, 4 accent ramps</span>
              </div>
              <div>
                <div className="ds-t1">Display Heading / Syne 800</div>
                <div className="ds-t2">Body Semibold — DM Sans 500 — clear hierarchy</div>
                <div className="ds-t3">Caption / Muted — DM Sans 300 — supporting info only</div>
              </div>
              <div className="ds-components">
                <button className="ds-btn-p">Primary action</button>
                <button className="ds-btn-s">Secondary</button>
                {[
                  { label: "Active",  bg: "#c8f27a18", color: "#c8f27a", border: "#c8f27a33" },
                  { label: "Pending", bg: "#f2c47a18", color: "#f2c47a", border: "#f2c47a33" },
                  { label: "New",     bg: "#f27ab818", color: "#f27ab8", border: "#f27ab833" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="ds-badge"
                    style={{ background: b.bg, color: b.color, border: `1px solid ${b.border}` }}
                  >
                    {b.label}
                  </span>
                ))}
              </div>
              <div className="ds-grid-demo">
                {["#c8f27a0a","#7ab8f20a","#f2c47a0a","#1e1e1c"].map((bg) => (
                  <div className="ds-grid-cell" key={bg} style={{ background: bg }} />
                ))}
              </div>
            </div>
          </div>
          <div className="uiux-card-footer">
            <div className="skills-row">
              {["Tokens","Figma Variables","React Components","Vite","Storybook"].map((s) => (
                <span className="skill-chip" key={s}>{s}</span>
              ))}
            </div>
            <div className="card-arrow">↗</div>
          </div>
        </div>
      </div>
 
      {/* ── Bottom Row ── */}
      <div className="uiux-bottom">
        <div className="cta-card">
          <div>
            <div className="cta-title">Design it.<br />Then build it.</div>
            <div className="cta-sub">
              I don't hand off mockups. I take interfaces from concept to
              deployed, pixel-perfect code.
            </div>
          </div>
          <a
            href="https://portfolio-arjitanand-19.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            View portfolio ↗
          </a>
        </div>
 
        <div className="stat-card">
          <div className="uiux-eyebrow" style={{ marginBottom: "24px" }}>By the numbers</div>
          <div className="stat-numbers">
            {[
              { val: "12", sup: "+", label: "UI/UX projects shipped", blue: false },
              { val: "3",  sup: "x", label: "Avg. engagement uplift post-redesign", blue: true },
              { val: "100",sup: "%", label: "Design + code — no handoff needed", blue: false },
            ].map((s) => (
              <div key={s.label}>
                <div className={`stat-val${s.blue ? " blue" : ""}`}>
                  {s.val}<span>{s.sup}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}