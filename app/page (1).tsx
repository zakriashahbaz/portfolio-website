"use client";

import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────
   EDIT YOUR DETAILS HERE — everything else auto-updates
───────────────────────────────────────────────────── */
const data = {
  name: "Muhammad Zakria",
  role: "Data Analyst",
  email: "zakriarajpoot73@gmail.com",
  linkedin: "https://linkedin.com/in/zakriashahbaz",
  github: "https://github.com/zakriashahbaz",
  about:
    "I'm an undergraduate Data Science student with 1+ year of hands-on experience turning messy datasets into clear, actionable insights. I enjoy working across the full analytics pipeline — from writing SQL queries and cleaning data in Python, to building dashboards that stakeholders actually use.", 

  education: {
    degree: "B.Sc. Data Science",
    school: "Virtual University of Pakistan",
    period: "2025 – Present (Expected 2028)",
    courses: [
      "Statistics & Probability",
      "Machine Learning",
      "Database Systems",
      "Data Visualization",
      "Python for Analytics",
      "Linear Algebra",
    ],
  },

  skills: {
    Languages: ["Python", "SQL"],
    Libraries: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    "BI & Tools": ["Tableau", "Power BI", "Excel", "Jupyter", "Git"],
    Databases: ["PostgreSQL", "MySQL", "SQLite"],
  },
 
  projects: [
    {
      title: "Sales Performance Dashboard",
      description:
        "Analyzed 50 000+ sales records to surface seasonal trends and KPIs. Built an interactive Tableau dashboard now used by the sales team for weekly reviews.",
      tags: ["Tableau", "SQL", "Excel"],
      liveUrl: "https://public.tableau.com/yourlink",   // set "" to hide
      githubUrl: "https://github.com/zakriashahbaz/sales-dashboard",
      metric: "12% forecast accuracy gain",
    },
    {
      title: "Customer Churn Predictor",
      description:
        "Trained a logistic-regression classifier on telecom subscriber data. Applied SMOTE to balance classes and achieved 84% accuracy on the held-out test set.",
      tags: ["Python", "Scikit-learn", "Pandas"],
      liveUrl: "",
      githubUrl: "https://github.com/yourhandle/churn-predictor",
      metric: "84% model accuracy",
    },
    {
      title: "COVID-19 Global Tracker",
      description:
        "Scraped and cleaned WHO datasets covering 150+ countries. Produced multi-panel Seaborn visualisations showing case growth and vaccination coverage.",
      tags: ["Python", "Seaborn", "NumPy"],
      liveUrl: "https://yourdeployedapp.com",
      githubUrl: "https://github.com/yourhandle/covid-tracker",
      metric: "150+ countries covered",
    },
    {
      title: "E-Commerce Funnel Analysis",
      description:
        "Queried a PostgreSQL database to measure drop-off across a 5-stage checkout funnel and delivered a written report that reduced cart abandonment.",
      tags: ["SQL", "PostgreSQL", "Excel"],
      liveUrl: "",
      githubUrl: "https://github.com/yourhandle/funnel-analysis",
      metric: "Reduced cart abandonment",
    },
    {
      title: "Movie Recommendation Engine",
      description:
        "Built a collaborative-filtering system on the MovieLens dataset using cosine-similarity. Returns personalised top-10 suggestions per user.",
      tags: ["Python", "Pandas", "Scikit-learn"],
      liveUrl: "",
      githubUrl: "https://github.com/yourhandle/movie-recommender",
      metric: "Collaborative filtering",
    },
  ], 
};
/* ─────────────────────────────────────────────────────── */

const NAV = ["About", "Projects", "Skills", "Education", "Contact"];

export default function Page() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const totalTools = Object.values(data.skills).flat().length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #f8f6f3;
          color: #1c1c1c;
          font-family: 'IBM Plex Sans', sans-serif;
          line-height: 1.65;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #f8f6f3; }
        ::-webkit-scrollbar-thumb { background: #c8c2ba; border-radius: 4px; }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          background: rgba(248,246,243,0.93);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #ebe6df;
        }
        .nav-inner {
          max-width: 1080px; margin: 0 auto; padding: 0 2rem;
          height: 60px; display: flex; align-items: center; justify-content: space-between;
        }
        .brand {
          font-family: 'Lora', serif; font-weight: 700; font-size: 1.05rem;
          letter-spacing: -0.01em; color: #1c1c1c; cursor: pointer;
        }
        .brand span { color: #2563eb; }
        .nav-list { display: flex; gap: 4px; list-style: none; }
        .nav-list button {
          background: none; border: none; cursor: pointer;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.82rem; font-weight: 500; color: #6b6460;
          padding: 6px 13px; border-radius: 6px; transition: all 0.15s;
        }
        .nav-list button:hover { background: #ede8e1; color: #1c1c1c; }
        .nav-list button.on { background: #1c1c1c; color: #f8f6f3; }
        .hamburger {
          display: none; flex-direction: column; gap: 4px;
          background: none; border: none; cursor: pointer; padding: 6px;
        }
        .hamburger span { display: block; width: 22px; height: 2px; background: #1c1c1c; border-radius: 2px; }
        .mob-menu {
          display: none; flex-direction: column;
          background: #f8f6f3; border-top: 1px solid #ebe6df; padding: 0.75rem 2rem;
        }
        .mob-menu.open { display: flex; }
        .mob-menu button {
          background: none; border: none; cursor: pointer;
          font-size: 0.92rem; font-weight: 500; color: #1c1c1c;
          text-align: left; padding: 10px 0; border-bottom: 1px solid #ebe6df;
          font-family: 'IBM Plex Sans', sans-serif;
        }
        .mob-menu button:last-child { border-bottom: none; }

        /* PAGE WRAPPER */
        .wrap { max-width: 1080px; margin: 0 auto; padding: 0 2rem; }

        /* HERO */
        .hero {
          padding: 116px 0 72px;
          display: grid; grid-template-columns: 1fr 160px;
          gap: 2.5rem; align-items: end;
          border-bottom: 1px solid #ebe6df;
        }
        .badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: #dbeafe; color: #1d4ed8;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.68rem; font-weight: 500; letter-spacing: 0.05em;
          padding: 4px 13px; border-radius: 20px; margin-bottom: 1.25rem;
        }
        .badge-dot {
          width: 6px; height: 6px; background: #2563eb;
          border-radius: 50%; animation: blink 2s ease infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .hero-name {
          font-family: 'Lora', serif;
          font-size: clamp(2.4rem, 5.5vw, 3.8rem);
          font-weight: 700; line-height: 1.05; letter-spacing: -0.025em;
          color: #0e0e0e; margin-bottom: 1rem;
        }
        .hero-sub { font-size: 1rem; color: #5c5550; max-width: 540px; line-height: 1.8; }
        .hero-actions { display: flex; gap: 0.7rem; flex-wrap: wrap; margin-top: 1.75rem; }
        .btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.8rem; font-weight: 600;
          padding: 9px 20px; border-radius: 7px;
          cursor: pointer; text-decoration: none; transition: all 0.16s;
        }
        .btn-solid { background: #1c1c1c; color: #f8f6f3; border: 1.5px solid #1c1c1c; }
        .btn-solid:hover { background: #3a3a3a; border-color: #3a3a3a; }
        .btn-outline { background: transparent; color: #1c1c1c; border: 1.5px solid #ccc7c0; }
        .btn-outline:hover { border-color: #1c1c1c; }
        .stat-box {
          display: flex; flex-direction: column; gap: 1.25rem;
          background: #fff; border: 1px solid #ebe6df;
          border-radius: 12px; padding: 1.4rem; text-align: center;
        }
        .sn { font-family: 'Lora', serif; font-size: 1.9rem; font-weight: 700; color: #2563eb; line-height: 1; }
        .sl { font-size: 0.7rem; color: #9a9590; font-weight: 500; margin-top: 3px; }
        .sdiv { height: 1px; background: #ebe6df; }

        /* SECTIONS */
        section { padding: 68px 0 40px; border-bottom: 1px solid #ebe6df; }
        section:last-of-type { border-bottom: none; }
        .slabel {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.67rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 0.45rem;
        }
        .stitle {
          font-family: 'Lora', serif;
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          font-weight: 700; letter-spacing: -0.02em;
          color: #0e0e0e; margin-bottom: 2.25rem;
        }

        /* ABOUT */
        .about-p { font-size: 1rem; color: #4a4540; line-height: 1.9; max-width: 700px; }

        /* PROJECTS */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.15rem;
        }
        .pcard {
          background: #fff; border: 1px solid #ebe6df;
          border-radius: 12px; padding: 1.5rem;
          display: flex; flex-direction: column;
          transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
        }
        .pcard:hover {
          box-shadow: 0 6px 24px rgba(0,0,0,0.07);
          border-color: #d1ccc5; transform: translateY(-2px);
        }
        .pcard-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 0.55rem; }
        .ptitle { font-family: 'Lora', serif; font-size: 0.98rem; font-weight: 700; color: #0e0e0e; line-height: 1.3; }
        .pmetric {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.62rem; font-weight: 500;
          background: #dbeafe; color: #1d4ed8;
          padding: 3px 9px; border-radius: 20px; white-space: nowrap; margin-top: 2px;
        }
        .pdesc { font-size: 0.83rem; color: #6b6460; line-height: 1.72; margin-bottom: 1rem; flex: 1; }
        .ptags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1rem; }
        .ptag {
          font-family: 'IBM Plex Mono', monospace; font-size: 0.63rem; font-weight: 500;
          background: #f2ede7; color: #5a5450; padding: 3px 9px; border-radius: 4px; border: 1px solid #e4ddd5;
        }
        .plinks { display: flex; gap: 0.55rem; }
        .lbtn {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.74rem; font-weight: 600;
          padding: 6px 14px; border-radius: 6px;
          text-decoration: none; cursor: pointer;
          border: none; transition: all 0.15s;
        }
        .lbtn-live { background: #2563eb; color: #fff; }
        .lbtn-live:hover { background: #1d4ed8; }
        .lbtn-gh { background: #f2ede7; color: #1c1c1c; border: 1px solid #e4ddd5; }
        .lbtn-gh:hover { background: #e8e2d9; }
        .lbtn-off { opacity: 0.32; cursor: not-allowed; pointer-events: none; }

        /* SKILLS */
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }
        .sk-card { background: #fff; border: 1px solid #ebe6df; border-radius: 10px; padding: 1.2rem; }
        .sk-name {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.65rem; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 0.85rem;
        }
        .chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .chip {
          font-size: 0.77rem; font-weight: 500;
          background: #f2ede7; color: #3a3530;
          padding: 4px 11px; border-radius: 6px; border: 1px solid #e4ddd5;
        }

        /* EDUCATION */
        .edu-card {
          background: #fff; border: 1px solid #ebe6df; border-radius: 12px;
          padding: 2rem; display: grid; grid-template-columns: 1fr auto;
          gap: 2.5rem; align-items: start;
        }
        .edu-deg { font-family: 'Lora', serif; font-size: 1.2rem; font-weight: 700; color: #0e0e0e; margin-bottom: 0.3rem; }
        .edu-sch { font-size: 0.9rem; color: #2563eb; font-weight: 500; margin-bottom: 0.25rem; }
        .edu-per {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.73rem; color: #9a9590; margin-bottom: 1.4rem;
        }
        .courses-lbl {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.63rem; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: #9a9590; margin-bottom: 0.55rem;
        }
        .edu-status {
          text-align: center; padding: 1rem 1.4rem;
          background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px;
        }
        .es-num { font-family: 'Lora', serif; font-size: 1rem; font-weight: 700; color: #16a34a; }
        .es-lbl { font-size: 0.7rem; color: #4ade80; font-weight: 500; margin-top: 2px; }

        /* CONTACT */
        .con-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        .con-text { font-size: 0.95rem; color: #5c5550; line-height: 1.85; }
        .con-links { display: flex; flex-direction: column; gap: 0.7rem; }
        .con-item {
          display: flex; align-items: center; gap: 1rem;
          background: #fff; border: 1px solid #ebe6df; border-radius: 10px;
          padding: 0.85rem 1.1rem; text-decoration: none; color: #1c1c1c;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .con-item:hover { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.08); }
        .con-type {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.62rem; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: #2563eb; min-width: 64px;
        }
        .con-val { font-size: 0.81rem; color: #6b6460; }

        /* FOOTER */
        footer {
          text-align: center; padding: 2rem;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.68rem; color: #b5b0a8;
          border-top: 1px solid #ebe6df;
        }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .f { opacity: 0; animation: fadeUp 0.55s ease forwards; }
        .f1 { animation-delay: 0.05s; } .f2 { animation-delay: 0.15s; }
        .f3 { animation-delay: 0.26s; } .f4 { animation-delay: 0.37s; }
        .f5 { animation-delay: 0.48s; }

        /* RESPONSIVE */
        @media (max-width: 700px) {
          .nav-list { display: none; }
          .hamburger { display: flex; }
          .hero { grid-template-columns: 1fr; padding: 96px 0 56px; }
          .stat-box { flex-direction: row; justify-content: space-around; }
          .sdiv { width: 1px; height: auto; }
          .edu-card { grid-template-columns: 1fr; }
          .con-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      {/* ── NAV ── */}
      <header>
        <nav className="nav">
          <div className="nav-inner">
            <span className="brand" onClick={() => scrollTo("About")}>
              {data.name.split(" ")[0]}<span>.</span>
            </span>
            <ul className="nav-list">
              {NAV.map((id) => (
                <li key={id}>
                  <button className={active === id ? "on" : ""} onClick={() => scrollTo(id)}>
                    {id}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              <span /><span /><span />
            </button>
          </div>
          <div className={`mob-menu${menuOpen ? " open" : ""}`}>
            {NAV.map((id) => (
              <button key={id} onClick={() => scrollTo(id)}>{id}</button>
            ))}
          </div>
        </nav>
      </header>

      <main className="wrap">

        {/* ── HERO ── */}
        <div className="hero">
          <div>
            <div className="badge f f1">
              <span className="badge-dot" />
              Open to opportunities
            </div>
            <h1 className="hero-name f f2">{data.name}</h1>
            <p className="hero-sub f f3">
              {data.role} &middot; Undergraduate Data Science student passionate
              about analytics, visualisation &amp; data-driven storytelling.
            </p>
            <div className="hero-actions f f4">
              <a className="btn btn-solid" href={`mailto:${data.email}`}>✉ Get in touch</a>
              <a className="btn btn-outline" href={data.github} target="_blank" rel="noreferrer">↗ GitHub</a>
              <a className="btn btn-outline" href={data.linkedin} target="_blank" rel="noreferrer">↗ LinkedIn</a>
            </div>
          </div>
          <div className="stat-box f f5">
            <div><div className="sn">1+</div><div className="sl">Yrs exp.</div></div>
            <div className="sdiv" />
            <div><div className="sn">{data.projects.length}</div><div className="sl">Projects</div></div>
            <div className="sdiv" />
            <div><div className="sn">{totalTools}+</div><div className="sl">Tools</div></div>
          </div>
        </div>

        {/* ── ABOUT ── */}
        <section id="About">
          <p className="slabel">01 — About me</p>
          <h2 className="stitle">Who I am</h2>
          <p className="about-p">{data.about}</p>
        </section>

        {/* ── PROJECTS ── */}
        <section id="Projects">
          <p className="slabel">02 — Work</p>
          <h2 className="stitle">Selected projects</h2>
          <div className="proj-grid">
            {data.projects.map((p, i) => (
              <div className="pcard" key={i}>
                <div className="pcard-top">
                  <div className="ptitle">{p.title}</div>
                  <div className="pmetric">{p.metric}</div>
                </div>
                <p className="pdesc">{p.description}</p>
                <div className="ptags">
                  {p.tags.map((t) => <span className="ptag" key={t}>{t}</span>)}
                </div>
                <div className="plinks">
                  {p.liveUrl ? (
                    <a className="lbtn lbtn-live" href={p.liveUrl} target="_blank" rel="noreferrer">
                      ↗ Live demo
                    </a>
                  ) : (
                    <span className="lbtn lbtn-live lbtn-off">↗ Live demo</span>
                  )}
                  <a className="lbtn lbtn-gh" href={p.githubUrl} target="_blank" rel="noreferrer">
                    ⌥ GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="Skills">
          <p className="slabel">03 — Toolkit</p>
          <h2 className="stitle">Skills &amp; tools</h2>
          <div className="sk-grid">
            {Object.entries(data.skills).map(([group, items]) => (
              <div className="sk-card" key={group}>
                <div className="sk-name">{group}</div>
                <div className="chips">
                  {items.map((s) => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="Education">
          <p className="slabel">04 — Education</p>
          <h2 className="stitle">Academic background</h2>
          <div className="edu-card">
            <div>
              <div className="edu-deg">{data.education.degree}</div>
              <div className="edu-sch">{data.education.school}</div>
              <div className="edu-per">{data.education.period}</div>
              <div className="courses-lbl">Relevant coursework</div>
              <div className="chips">
                {data.education.courses.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
            <div className="edu-status">
              <div className="es-num">In progress</div>
              <div className="es-lbl">Currently enrolled</div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="Contact">
          <p className="slabel">05 — Contact</p>
          <h2 className="stitle">Let&apos;s connect</h2>
          <div className="con-grid">
            <p className="con-text">
              I&apos;m actively looking for internship and entry-level data analyst roles.
              Whether you have an opportunity, a project idea, or just want to talk
              about data — my inbox is always open.
            </p>
            <div className="con-links">
              <a className="con-item" href={`mailto:${data.email}`}>
                <span className="con-type">Email</span>
                <span className="con-val">{data.email}</span>
              </a>
              <a className="con-item" href={data.linkedin} target="_blank" rel="noreferrer">
                <span className="con-type">LinkedIn</span>
                <span className="con-val">{data.linkedin.replace("https://", "")}</span>
              </a>
              <a className="con-item" href={data.github} target="_blank" rel="noreferrer">
                <span className="con-type">GitHub</span>
                <span className="con-val">{data.github.replace("https://", "")}</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer>© 2025 {data.name} · Built with Next.js</footer>
    </>
  );
}
