import { useRef } from "react";
import { LINKEDIN_URL, SUMMARY, PROJECTS, JOBS, SKILLS } from "./data.js";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function Project({ p }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", e.clientX - r.left + "px");
    e.currentTarget.style.setProperty("--y", e.clientY - r.top + "px");
  };
  return (
    <article className="proj" onPointerMove={move}>
      <h3>{p.t}</h3>
      <p className="sub">{p.s}</p>
      <p>{p.d}</p>
      <ul className="tags">{p.g.map((x) => <li key={x}>{x}</li>)}</ul>
    </article>
  );
}

export default function App() {
  const hero = useRef(null);
  const move = (e) => {
    const r = hero.current.getBoundingClientRect();
    hero.current.style.setProperty("--mx", e.clientX - r.left + r.width * 0.3 + "px");
    hero.current.style.setProperty("--my", e.clientY - r.top + r.height * 0.2 + "px");
  };

  return (
    <div className="wrap">
      <nav>
        <span>Amal Tharwat</span>
        <div>
          <a href="#work">Work</a>
          <a href="#path">Experience</a>
          <a href="#contact">Contact</a>
          <a className="in" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedInIcon /></a>
        </div>
      </nav>

      <header className="hero" ref={hero} onPointerMove={move}>
        <div className="glow" aria-hidden="true" />
        <h1>Amal Tharwat</h1>
        <p>{SUMMARY}</p>
        <div className="cta">
          <a className="btn main" href="#work">See my work</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
      </header>

      <section id="work">
        <h2>Selected work</h2>
        <div className="grid">{PROJECTS.map((p) => <Project key={p.t} p={p} />)}</div>
      </section>

      <section id="path">
        <h2>Experience</h2>
        <ol className="tl">
          {JOBS.map((j) => (
            <li key={j.r}><h3>{j.r}</h3><time>{j.w}</time><p>{j.p}</p></li>
          ))}
        </ol>
        <p style={{ color: "var(--soft)" }}>Management Information Systems at Alexandria University (2018–2022), then full stack .NET at ITI.</p>
      </section>

      <section>
        <h2>Tools</h2>
        <ul className="skills">{SKILLS.map((s) => <li key={s}>{s}</li>)}</ul>
      </section>

      <section id="contact" className="contact">
        <h2>Let’s build something</h2>
        <a className="big" href="mailto:amal.tharwat.191@gmail.com">amal.tharwat.191@gmail.com</a>
        <p>+20 120 576 4314 · Alexandria, Egypt</p>
        <a className="in" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><LinkedInIcon />Connect on LinkedIn</a>
      </section>

      <footer>Built with React.</footer>
    </div>
  );
}
