import React, { useEffect, useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  FiArrowDown, FiArrowRight, FiArrowUp, FiArrowUpRight,
  FiCode, FiExternalLink, FiGitBranch, FiGithub, FiLinkedin,
  FiMail, FiMenu, FiX
} from "react-icons/fi";
import { heritageContent } from "../../data/heritageContent";
import myPhoto from "../../Assets/eu.png";
import carousel2022 from "../../Assets/carrosel.gif";
import "../../Styles/heritage-portfolio.css";

const profileLink = "https://github.com/patrickdovale";
const linkedinLink = "https://www.linkedin.com/in/patrickdovale/";
const email = "patrickdovale1@hotmail.com";
const originalCode = "https://github.com/patrickdovale/My-Portfolio/tree/f0710b012d58ed22500a6344e5b2b052b9702cf3";

function Outbound({ href, className = "", children, ariaLabel }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      {children}
    </a>
  );
}

function TechTags({ items }) {
  return (
    <ul className="hp-tech-tags">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function SectionIntro({ id, marker, title, accent, suffix, text }) {
  return (
    <div className="hp-section-intro">
      <p className="hp-section-marker">{marker}</p>
      <h2 id={id}>{title} <span>{accent}</span>{suffix ? <> {suffix}</> : null}</h2>
      {text ? <p className="hp-section-text">{text}</p> : null}
    </div>
  );
}

function OriginProject({ project, image, linkLabel }) {
  return (
    <article className={"hp-origin-card hp-origin-" + project.color}>
      <div className="hp-origin-preview" aria-hidden="true">
        {image ? <img src={image} alt="" loading="lazy" /> : project.color === "red" ? (
          <div className="hp-netflix-preview"><span>N</span><small>NETFLIX CLONE</small></div>
        ) : (
          <div className="hp-portfolio-preview"><span>PORTFÓLIO 2022</span><strong>Olá! Eu sou<br />Patrick Vasconcellos!</strong><em>React · HTML · CSS</em></div>
        )}
      </div>
      <div className="hp-origin-info">
        <span className="hp-origin-topline"><span>{project.count} / 03</span><span>{project.year}</span></span>
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <TechTags items={project.tags} />
        <Outbound href={project.url} className="hp-underlined-link">{linkLabel} <FiArrowUpRight aria-hidden="true" /></Outbound>
      </div>
    </article>
  );
}

export default function HeritagePortfolio() {
  const [language, setLanguage] = useState(() => {
    try { return window.localStorage.getItem("portfolio-language") === "en" ? "en" : "pt"; }
    catch (_) { return "pt"; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeEra, setActiveEra] = useState("2022");
  const copy = heritageContent[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    try { window.localStorage.setItem("portfolio-language", language); }
    catch (_) { /* Storage may be unavailable in private browsing */ }
  }, [language]);

  const links = [
    ["#top", copy.nav.home],
    ["#about", copy.nav.about],
    ["#experience", copy.nav.work],
    ["#projects", copy.nav.projects],
    ["#evolution", copy.nav.timeline],
    ["#contact", copy.nav.contact]
  ];
  const era = copy.evolutionPeriods.find((period) => period.year === activeEra) || copy.evolutionPeriods[0];

  return (
    <div className="hp-page">
      <a href="#main" className="hp-skip">{copy.skip}</a>
      <header className="hp-header">
        <div className="hp-container hp-header-inner">
          <a className="hp-brand" href="#top" aria-label="Patrick Vasconcellos — início">
            <span>Patrick <em>Vasconcellos</em></span>
            <small>SINCE 2022 <b>_</b></small>
          </a>
          <nav className={"hp-nav" + (menuOpen ? " is-open" : "")} aria-label={language === "pt" ? "Menu principal" : "Main menu"}>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <button type="button" className="hp-language" onClick={() => { setLanguage(language === "pt" ? "en" : "pt"); setMenuOpen(false); }} aria-label={language === "pt" ? "Switch to English" : "Mudar para português"}>
              {language.toUpperCase()} <span>↔ {copy.languageAction}</span>
            </button>
          </nav>
          <div className="hp-header-social">
            <Outbound href={profileLink} ariaLabel="GitHub"><FiGithub /></Outbound>
            <Outbound href={linkedinLink} ariaLabel="LinkedIn"><FiLinkedin /></Outbound>
          </div>
          <button type="button" aria-label={copy.ariaMenu} aria-expanded={menuOpen} className="hp-mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hp-hero" aria-labelledby="hp-title">
          <div className="hp-container hp-hero-grid">
            <div className="hp-hero-text">
              <p className="hp-developer-tag"><span className="hp-tag-led" />{copy.heroBadge}</p>
              <h1 id="hp-title"><span>{copy.heroHi}</span><br /><strong>{copy.heroName}</strong></h1>
              <p className="hp-hero-lead"><span className="hp-chevron">❯</span> {copy.heroLead}<span className="hp-cursor" aria-hidden="true">_</span></p>
              <p className="hp-hero-description">{copy.heroText}</p>
              <div className="hp-hero-actions">
                <a className="hp-button-green" href="#projects">{copy.heroPrimary} <FiArrowRight aria-hidden="true" /></a>
                <a className="hp-button-outline" href="#evolution">{copy.heroSecondary} <FiArrowDown aria-hidden="true" /></a>
              </div>
              <div className="hp-hero-bottomline">
                <span><FiGitBranch aria-hidden="true" /> 2022 <span className="hp-bottom-arrow">→</span> 2026</span>
                <span>{copy.cornerNote}</span>
              </div>
            </div>
            <div className="hp-hero-photo-column">
              <div className="hp-photo-frame">
                <div className="hp-photo-outline" aria-hidden="true" />
                <div className="hp-photo-circle" aria-hidden="true" />
                <img src={myPhoto} alt={language === "pt" ? "Foto de Patrick Vasconcellos usada no portfólio original de 2022" : "Photo of Patrick Vasconcellos from the original 2022 portfolio"} className="hp-personal-photo" />
                <span className="hp-float-icon hp-float-react" title="React"><FaReact aria-hidden="true" /></span>
                <span className="hp-float-icon hp-float-html" title="HTML"><FaHtml5 aria-hidden="true" /></span>
                <span className="hp-float-icon hp-float-css" title="CSS"><FaCss3Alt aria-hidden="true" /></span>
                <span className="hp-photo-year hp-photo-year-old">2022</span>
                <span className="hp-photo-year hp-photo-year-now">2026</span>
              </div>
              <p className="hp-photo-caption">{copy.heroSideCaption}</p>
            </div>
          </div>
          <div className="hp-hero-scroll"><div className="hp-container"><span>SCROLL DOWN <FiArrowDown aria-hidden="true" /></span><span>{copy.location}</span></div></div>
        </section>

        <section id="about" className="hp-section hp-about" aria-labelledby="hp-about-heading">
          <div className="hp-container hp-about-grid">
            <div className="hp-about-copy">
              <SectionIntro id="hp-about-heading" marker={copy.aboutMarker} title={copy.aboutTitle} accent={copy.aboutAccent} />
              <p>{copy.aboutP1}</p>
              <p>{copy.aboutP2}</p>
              <p className="hp-about-highlight">{copy.aboutDetail}</p>
            </div>
            <div className="hp-code-window" aria-label={language === "pt" ? "Trecho ilustrativo do estilo do portfólio de 2022" : "Illustration inspired by the original 2022 portfolio"}>
              <div className="hp-code-title"><div aria-hidden="true"><i /><i /><i /></div><span>patrick-2022.jsx</span><span>×</span></div>
              <div className="hp-code-lines">
                <p><span>01</span> <b className="hp-code-purple">const</b> portfolio = {"{"}</p>
                <p><span>02</span> &nbsp; name: <b className="hp-code-green">'Patrick'</b>,</p>
                <p><span>03</span> &nbsp; tools: [<b className="hp-code-green">'React'</b>, <b className="hp-code-green">'CSS'</b>],</p>
                <p><span>04</span> &nbsp; curiosity: <b className="hp-code-yellow">true</b>,</p>
                <p><span>05</span> &nbsp; stillLearning: <b className="hp-code-yellow">true</b></p>
                <p><span>06</span> {"}"}</p>
                <p><span>07</span> <em>// 2026: continua sendo verdade :)</em></p>
              </div>
              <div className="hp-code-footer"><span><i /> all systems learning</span><span>UTF-8 · JSX</span></div>
            </div>
          </div>
        </section>

        <section id="experience" className="hp-section hp-experience" aria-labelledby="hp-experience-heading">
          <div className="hp-container">
            <SectionIntro id="hp-experience-heading" marker={copy.experienceMarker} title={copy.experienceTitle} accent={copy.experienceAccent} />
            <div className="hp-experience-list">
              {copy.experiences.map((item) => (
                <article className="hp-experience-item" key={item.org}>
                  <div className="hp-experience-date"><span className="hp-green-dot" />{item.date}</div>
                  <div className="hp-experience-details"><h3>{item.role}</h3><strong>{item.org}</strong><p>{item.body}</p><TechTags items={item.tags} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="hp-section hp-projects" aria-labelledby="hp-projects-heading">
          <div className="hp-container">
            <SectionIntro id="hp-projects-heading" marker={copy.projectMarker} title={copy.projectTitle} accent={copy.projectAccent} text={copy.projectIntro} />
            <div className="hp-featured-grid">
              {copy.projects.map((project) => (
                <article key={project.name} className={"hp-featured-card hp-featured-" + project.theme}>
                  <div className="hp-featured-top"><span>{project.type}</span><span className="hp-stage"><i />{project.stage}</span></div>
                  <div className="hp-featured-logo" aria-hidden="true">{project.initials}</div>
                  <h3>{project.name}</h3>
                  <p>{project.body}</p>
                  <div className="hp-featured-challenge"><strong><FiCode aria-hidden="true" /> {project.detailLabel}</strong><p>{project.detail}</p></div>
                  <TechTags items={project.tags} />
                  <div className="hp-featured-foot">
                    {project.url ? <Outbound href={project.url} className="hp-featured-link">{copy.projectVisit} <FiArrowUpRight aria-hidden="true" /></Outbound> : <span className="hp-private">{copy.projectPrivate}</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="first-projects" className="hp-section hp-origin-projects" aria-labelledby="hp-origin-heading">
          <div className="hp-container">
            <SectionIntro id="hp-origin-heading" marker={copy.studyMarker} title={copy.studyTitle} accent={copy.studyAccent} text={copy.studyIntro} />
            <div className="hp-origin-grid">
              {copy.studyProjects.map((project, index) => (
                <OriginProject key={project.name} project={project} image={index === 0 ? carousel2022 : null} linkLabel={copy.studyRepository} />
              ))}
            </div>
          </div>
        </section>

        <section id="evolution" className="hp-section hp-evolution" aria-labelledby="hp-evolution-heading">
          <div className="hp-container hp-evolution-grid">
            <div>
              <SectionIntro id="hp-evolution-heading" marker={copy.evolutionMarker} title={copy.evolutionTitle} accent={copy.evolutionAccent} suffix={copy.evolutionEnd} text={copy.evolutionIntro} />
              <p className="hp-evolution-side-note">{copy.evolutionNote}</p>
              <Outbound className="hp-underlined-link" href={originalCode}>{copy.evolutionReadCode} <FiExternalLink aria-hidden="true" /></Outbound>
            </div>
            <div className="hp-evolution-panel">
              <div className="hp-year-switch" role="group" aria-label={language === "pt" ? "Selecionar ano da trajetória" : "Select year"}>
                {copy.evolutionPeriods.map((period) => (
                  <button key={period.year} type="button" className={activeEra === period.year ? "active" : ""} aria-pressed={activeEra === period.year} onClick={() => setActiveEra(period.year)}>{period.year}</button>
                ))}
              </div>
              <div className="hp-era-content" key={activeEra}>
                <span className="hp-big-year">{era.year}<span>.</span></span>
                <h3>{era.title}</h3>
                <p>{era.text}</p>
                <TechTags items={era.tags} />
              </div>
              <div className="hp-era-bottom"><span>2022</span><div className="hp-era-line"><i style={{ left: activeEra === "2022" ? "0%" : "100%" }} /></div><span>2026</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="hp-section hp-skills" aria-labelledby="hp-skills-heading">
          <div className="hp-container">
            <SectionIntro id="hp-skills-heading" marker={copy.skillMarker} title={copy.skillTitle} accent={copy.skillAccent} />
            <div className="hp-skills-grid">
              {copy.skillGroups.map((group, i) => (
                <article key={group.title} className="hp-skill-group">
                  <span className="hp-skill-group-number">0{i + 1} / 03</span>
                  <h3>{group.title}</h3>
                  <TechTags items={group.items} />
                </article>
              ))}
            </div>
            <div className="hp-education"><strong>{copy.educationLabel}</strong><p>{copy.education}</p></div>
          </div>
        </section>

        <section id="contact" className="hp-section hp-contact" aria-labelledby="hp-contact-heading">
          <div className="hp-container hp-contact-grid">
            <div>
              <SectionIntro id="hp-contact-heading" marker={copy.contactMarker} title={copy.contactTitle} accent={copy.contactAccent} text={copy.contactText} />
            </div>
            <div className="hp-contact-links">
              <a href={"mailto:" + email} className="hp-contact-primary"><FiMail aria-hidden="true" /><span><strong>{copy.contactEmail}</strong><small>{email}</small></span><FiArrowUpRight aria-hidden="true" /></a>
              <Outbound href={linkedinLink} className="hp-contact-secondary"><FiLinkedin aria-hidden="true" /> {copy.contactLinkedin}<FiArrowUpRight aria-hidden="true" /></Outbound>
              <Outbound href={profileLink} className="hp-contact-secondary"><FiGithub aria-hidden="true" /> GitHub<FiArrowUpRight aria-hidden="true" /></Outbound>
            </div>
          </div>
        </section>
      </main>
      <footer className="hp-footer"><div className="hp-container hp-footer-grid">
        <div><strong>Patrick Vasconcellos<span>_</span></strong><p>{copy.footerLeft}</p></div>
        <p>{copy.footerRight}</p>
        <a href="#top" aria-label={copy.top}><FiArrowUp aria-hidden="true" /> {copy.top}</a>
      </div></footer>
    </div>
  );
}