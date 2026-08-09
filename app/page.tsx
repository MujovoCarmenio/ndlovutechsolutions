"use client";

import React, { useState, useEffect, useRef } from "react";

export default function NdlovuHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawn, setDrawn] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="ndlovu">
      <style>{css}</style>

      {/* NAV */}
      <header className="nav">
        <div className="nav__inner">
          <a href="#top" className="nav__brand">
            <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
              <circle cx="8" cy="30" r="3" fill="var(--gold)" />
              <circle cx="20" cy="10" r="3" fill="var(--accent)" />
              <circle cx="32" cy="26" r="3" fill="var(--accent)" />
              <path d="M8 30 L20 10 L32 26 L8 30" stroke="var(--border-strong)" strokeWidth="1.2" fill="none" />
            </svg>
            <span>NDLOVU</span>
          </a>

          <nav className={`nav__links ${menuOpen ? "is-open" : ""}`}>
            <a href="#capacidades" onClick={() => setMenuOpen(false)}>Capacidades</a>
            <a href="#stack" onClick={() => setMenuOpen(false)}>Stack</a>
            <a href="#trabalho" onClick={() => setMenuOpen(false)}>Trabalho</a>
            <a href="#contacto" className="nav__cta" onClick={() => setMenuOpen(false)}>Fale connosco</a>
          </nav>

          <button
            className="nav__toggle"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top" ref={heroRef}>
        <div className="hero__text">
          <p className="eyebrow">Ndlovu Digital · Maputo, Moçambique</p>
          <h1>
            Infra-estrutura digital
            <br />
            que não <em>esquece</em>.
          </h1>
          <p className="hero__sub">
            Desenhamos e construímos aplicações móveis, APIs e integrações de
            pagamento pensadas para as condições reais do mercado moçambicano —
            da cobertura instável da EDM à rede M-Pesa.
          </p>
          <div className="hero__actions">
            <a href="#trabalho" className="btn btn--primary">Ver o nosso trabalho</a>
            <a href="#contacto" className="btn btn--ghost">Fale connosco →</a>
          </div>
        </div>

        <div className={`hero__graphic ${drawn ? "is-drawn" : ""}`} aria-hidden="true">
          <svg viewBox="0 0 600 560" width="100%" height="100%">
            {/* mesh lines */}
            <g className="mesh">
              <line x1="460" y1="220" x2="525" y2="180" />
              <line x1="460" y1="220" x2="420" y2="310" />
              <line x1="340" y1="250" x2="288" y2="168" />
              <line x1="340" y1="250" x2="238" y2="244" />
              <line x1="200" y1="350" x2="262" y2="296" />
              <line x1="200" y1="350" x2="175" y2="458" />
              <line x1="150" y1="400" x2="180" y2="490" />
              <line x1="150" y1="400" x2="235" y2="485" />
              <line x1="460" y1="220" x2="340" y2="250" />
              <line x1="200" y1="350" x2="150" y2="400" />
            </g>

            {/* silhouette: head/ear */}
            <path
              className="line line--head"
              d="M 380,60 C 460,55 520,110 525,180 C 530,250 480,300 420,310
                 C 440,340 430,375 405,395 C 415,420 400,445 375,450
                 C 350,455 330,440 328,418 C 305,428 280,420 272,398
                 C 290,385 300,365 295,345 C 270,340 255,318 262,296
                 C 240,288 228,266 238,244 C 218,236 208,214 220,192
                 C 235,168 265,158 288,168 C 300,130 335,100 380,60 Z"
            />
            {/* trunk */}
            <path
              className="line line--trunk"
              d="M 300,420 C 280,450 260,470 235,485 C 215,497 195,500 180,490
                 C 168,482 165,468 175,458"
            />

            {/* nodes */}
            {[
              [525, 180, "a"], [420, 310, "g"], [405, 395, "a"], [375, 450, "g"],
              [328, 418, "a"], [272, 398, "g"], [295, 345, "a"], [262, 296, "g"],
              [238, 244, "a"], [220, 192, "g"], [288, 168, "a"], [380, 60, "g"],
              [235, 485, "a"], [180, 490, "g"], [175, 458, "a"],
              [460, 220, "g"], [340, 250, "a"], [200, 350, "g"], [150, 400, "a"],
            ].map(([x, y, c], i) => (
              <circle
                key={i}
                className={`node node--${c}`}
                cx={x}
                cy={y}
                r={c === "a" ? 4.5 : 3.5}
                style={{ animationDelay: `${i * 90}ms` }}
              />
            ))}
          </svg>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="capabilities" id="capacidades">
        <p className="section__eyebrow">O que construímos</p>
        <div className="capabilities__grid">
          <article className="card">
            <span className="card__mark" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <line x1="10" y1="19" x2="14" y2="19" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <h3>Aplicações móveis</h3>
            <p>
              Apps nativos em React Native e Expo, construídos offline-first
              para redes móveis instáveis e dispositivos de gama média — o
              contexto real de quem usa internet em Moçambique.
            </p>
          </article>

          <article className="card">
            <span className="card__mark" style={{ background: "var(--gold-soft)", color: "var(--gold)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <h3>Infra-estrutura &amp; APIs</h3>
            <p>
              Gateways de API em Next.js na Vercel, autenticação e bases de
              dados em tempo real com Supabase. Sistemas pensados para
              aguentar picos e falhar com elegância.
            </p>
          </article>

          <article className="card">
            <span className="card__mark" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="6" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <h3>Pagamentos</h3>
            <p>
              Integração directa com M-Pesa e gateways locais, confirmação
              automática por email e conciliação de subscrições sem
              intervenção manual.
            </p>
          </article>
        </div>
      </section>

      {/* STACK — status-panel style */}
      <section className="stack" id="stack">
        <p className="section__eyebrow">Stack em produção</p>
        <div className="stack__panel">
          {[
            ["React Native / Expo", "Camada de aplicação"],
            ["Supabase — Postgres + Realtime", "Dados e autenticação"],
            ["Next.js on Vercel", "Gateway de API"],
            ["M-Pesa Gateway", "Processamento de pagamentos"],
          ].map(([name, note], i) => (
            <div className="stack__row" key={i}>
              <span className="stack__dot" style={{ animationDelay: `${i * 220}ms` }} />
              <span className="stack__name">{name}</span>
              <span className="stack__note">{note}</span>
              <span className="stack__status">operacional</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="work" id="trabalho">
        <p className="section__eyebrow">Trabalho em destaque</p>
        <div className="work__row">
          <div className="work__copy">
            <h2>CarroNaMão</h2>
            <p>
              Mercado de automóveis para Moçambique, com pesquisa por
              província, subscrições para vendedores e upload de fotos
              optimizado para ligações lentas. Pagamentos processados via
              M-Pesa, do anúncio à confirmação.
            </p>
            <ul className="work__tags">
              <li>React Native</li>
              <li>Expo</li>
              <li>Supabase</li>
              <li>M-Pesa</li>
            </ul>
          </div>

          <div className="work__mock" aria-hidden="true">
            <div className="phone">
              <div className="phone__bar" />
              <div className="phone__search" />
              <div className="phone__card">
                <div className="phone__thumb" />
                <div className="phone__lines">
                  <span /><span />
                </div>
              </div>
              <div className="phone__card">
                <div className="phone__thumb" />
                <div className="phone__lines">
                  <span /><span />
                </div>
              </div>
              <div className="phone__pill" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contacto">
        <div className="footer__inner">
          <div>
            <span className="nav__brand">
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                <circle cx="8" cy="30" r="3" fill="var(--gold)" />
                <circle cx="20" cy="10" r="3" fill="var(--accent)" />
                <circle cx="32" cy="26" r="3" fill="var(--accent)" />
                <path d="M8 30 L20 10 L32 26 L8 30" stroke="var(--border-strong)" strokeWidth="1.2" fill="none" />
              </svg>
              <span>NDLOVU DIGITAL</span>
            </span>
            <p className="footer__note">Maputo, Moçambique · ndlovutechsolutions.com</p>
          </div>
          <a className="btn btn--primary" href="mailto:contacto@ndlovutechsolutions.com">
            contacto@ndlovutechsolutions.com
          </a>
        </div>
      </footer>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

.ndlovu {
  --bg: #0A0F1C;
  --bg-alt: #0D1424;
  --surface: #121A2B;
  --surface-2: #161F33;
  --border: #212B44;
  --border-strong: #34405E;
  --text: #EDF0F5;
  --text-dim: #97A1B8;
  --text-faint: #5C6785;
  --accent: #4C8DFF;
  --accent-soft: rgba(76,141,255,0.12);
  --gold: #E7A94C;
  --gold-soft: rgba(231,169,76,0.14);
  --ok: #45C08A;

  background: var(--bg);
  color: var(--text);
  font-family: 'IBM Plex Sans', sans-serif;
  line-height: 1.5;
}

.ndlovu * { box-sizing: border-box; }
.ndlovu h1, .ndlovu h2, .ndlovu h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0;
}
.ndlovu a { color: inherit; text-decoration: none; }
.ndlovu p { color: var(--text-dim); margin: 0; }
.ndlovu :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

/* NAV */
.nav {
  position: sticky; top: 0; z-index: 20;
  background: rgba(10,15,28,0.82);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.nav__inner {
  max-width: 1120px; margin: 0 auto; padding: 16px 24px;
  display: flex; align-items: center; justify-content: space-between;
}
.nav__brand { display: flex; align-items: center; gap: 8px; font-family: 'Space Grotesk', sans-serif; font-weight: 700; letter-spacing: 0.06em; font-size: 14px; }
.nav__links { display: flex; align-items: center; gap: 28px; font-size: 14px; color: var(--text-dim); }
.nav__links a:hover { color: var(--text); }
.nav__cta {
  background: var(--surface-2); color: var(--text) !important;
  padding: 8px 16px; border-radius: 8px; border: 1px solid var(--border-strong);
}
.nav__cta:hover { border-color: var(--gold); color: var(--gold) !important; }
.nav__toggle { display: none; flex-direction: column; gap: 4px; background: none; border: none; cursor: pointer; padding: 6px; }
.nav__toggle span { width: 20px; height: 2px; background: var(--text); display: block; }

/* HERO */
.hero {
  max-width: 1120px; margin: 0 auto; padding: 72px 24px 40px;
  display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 24px; align-items: center;
}
.eyebrow {
  font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.08em;
  color: var(--gold); text-transform: uppercase; margin-bottom: 18px;
}
.hero h1 { font-size: clamp(34px, 5vw, 54px); line-height: 1.06; }
.hero h1 em { font-style: normal; color: var(--accent); }
.hero__sub { margin-top: 20px; max-width: 46ch; font-size: 16px; }
.hero__actions { display: flex; gap: 14px; margin-top: 32px; flex-wrap: wrap; }

.btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 12px 20px; border-radius: 9px; font-size: 14px; font-weight: 500;
  transition: all .18s ease; white-space: nowrap;
}
.btn--primary { background: var(--accent); color: #06101F; }
.btn--primary:hover { background: #6da2ff; }
.btn--ghost { color: var(--text); border: 1px solid var(--border-strong); }
.btn--ghost:hover { border-color: var(--gold); color: var(--gold); }

.hero__graphic { width: 100%; aspect-ratio: 600 / 560; }
.hero__graphic .mesh line { stroke: var(--border-strong); stroke-width: 1; opacity: 0.5; }
.hero__graphic .line {
  fill: none; stroke: var(--text-faint); stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round;
}
.hero__graphic .line--head { fill: rgba(76,141,255,0.03); }
.hero__graphic .node { opacity: 0.85; }
.hero__graphic .node--a { fill: var(--gold); }
.hero__graphic .node--g { fill: var(--accent); }

@media (prefers-reduced-motion: no-preference) {
  .hero__graphic .line { stroke-dasharray: 1400; stroke-dashoffset: 1400; transition: stroke-dashoffset 1.6s ease; }
  .hero__graphic.is-drawn .line { stroke-dashoffset: 0; }
  .hero__graphic .node { animation: pulse 3.6s ease-in-out infinite; }
  @keyframes pulse {
    0%, 100% { opacity: 0.55; r: var(--r, 3.5); }
    50% { opacity: 1; }
  }
}

/* SECTIONS shared */
.section__eyebrow {
  font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.08em;
  color: var(--text-faint); text-transform: uppercase; text-align: center;
  max-width: 1120px; margin: 0 auto; padding: 0 24px;
}

/* CAPABILITIES */
.capabilities { max-width: 1120px; margin: 90px auto 0; padding: 0 24px; }
.capabilities__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 28px; }
.card {
  background: var(--surface); border: 1px solid var(--border); border-radius: 14px;
  padding: 26px; transition: border-color .2s ease, transform .2s ease;
}
.card:hover { border-color: var(--border-strong); transform: translateY(-3px); }
.card__mark {
  width: 40px; height: 40px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
}
.card h3 { font-size: 18px; margin-bottom: 10px; }
.card p { font-size: 14.5px; }

/* STACK */
.stack { max-width: 1120px; margin: 90px auto 0; padding: 0 24px; }
.stack__panel {
  margin-top: 28px; background: var(--bg-alt); border: 1px solid var(--border);
  border-radius: 14px; overflow: hidden; font-family: 'IBM Plex Mono', monospace;
}
.stack__row {
  display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 14px;
  padding: 16px 22px; border-bottom: 1px solid var(--border); font-size: 13.5px;
}
.stack__row:last-child { border-bottom: none; }
.stack__dot { width: 8px; height: 8px; border-radius: 50%; background: var(--ok); flex: none; }
@media (prefers-reduced-motion: no-preference) {
  .stack__dot { animation: blip 2.4s ease-in-out infinite; }
  @keyframes blip { 0%, 100% { box-shadow: 0 0 0 0 rgba(69,192,138,0.5); } 50% { box-shadow: 0 0 0 5px rgba(69,192,138,0); } }
}
.stack__name { color: var(--text); }
.stack__note { color: var(--text-faint); display: none; }
.stack__status { color: var(--ok); text-transform: uppercase; font-size: 11px; letter-spacing: 0.06em; }

/* WORK */
.work { max-width: 1120px; margin: 90px auto 0; padding: 0 24px; }
.work__row { display: grid; grid-template-columns: 1fr 0.85fr; gap: 48px; align-items: center; margin-top: 28px; }
.work h2 { font-size: 30px; margin-bottom: 14px; }
.work p { font-size: 15px; max-width: 46ch; }
.work__tags { list-style: none; display: flex; gap: 8px; flex-wrap: wrap; padding: 0; margin: 22px 0 0; }
.work__tags li {
  font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--text-dim);
  border: 1px solid var(--border-strong); border-radius: 6px; padding: 5px 10px;
}

.work__mock { display: flex; justify-content: center; }
.phone {
  width: 220px; background: #101622; border: 1px solid #1E2A44; border-radius: 22px;
  padding: 14px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
}
.phone__bar { height: 8px; width: 60px; background: #17202F; border-radius: 4px; margin: 0 auto; }
.phone__search { height: 30px; background: #17202F; border-radius: 8px; border: 1px solid #223252; }
.phone__card { background: #172540; border-radius: 10px; padding: 10px; display: flex; gap: 10px; align-items: center; }
.phone__thumb { width: 40px; height: 40px; border-radius: 8px; background: #1152D4; flex: none; }
.phone__lines { display: flex; flex-direction: column; gap: 6px; flex: 1; }
.phone__lines span { display: block; height: 6px; border-radius: 3px; background: #223252; }
.phone__lines span:first-child { width: 80%; }
.phone__lines span:last-child { width: 50%; }
.phone__pill { height: 34px; border-radius: 8px; background: #1152D4; margin-top: 4px; }

/* FOOTER */
.footer { max-width: 1120px; margin: 100px auto 0; padding: 32px 24px 60px; border-top: 1px solid var(--border); }
.footer__inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; padding-top: 28px; }
.footer__note { font-size: 13px; color: var(--text-faint); margin-top: 6px; }

@media (max-width: 860px) {
  .hero { grid-template-columns: 1fr; padding-top: 48px; }
  .hero__graphic { order: -1; max-width: 320px; margin: 0 auto 8px; }
  .capabilities__grid { grid-template-columns: 1fr; }
  .work__row { grid-template-columns: 1fr; }
  .work__mock { order: -1; }
  .nav__links {
    position: absolute; top: 100%; left: 0; right: 0; background: var(--bg-alt);
    flex-direction: column; align-items: flex-start; gap: 0; border-bottom: 1px solid var(--border);
    max-height: 0; overflow: hidden; transition: max-height .25s ease;
  }
  .nav__links.is-open { max-height: 260px; }
  .nav__links a { width: 100%; padding: 14px 24px; border-top: 1px solid var(--border); }
  .nav__toggle { display: flex; }
  .stack__note { display: none; }
}
`;