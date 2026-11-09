import React, { useEffect, useState } from "react";
import {
  FiArrowDown, FiArrowRight, FiArrowUpRight, FiCheckCircle, FiCode,
  FiExternalLink, FiGithub, FiGlobe, FiLayers, FiLinkedin, FiLock,
  FiMail, FiMenu, FiShield, FiX
} from "react-icons/fi";
import { portfolioContent } from "../../data/portfolioContent";
import "../../Styles/portfolio-2026.css";
import portrait from "../../Assets/eu.png";
import carouselGif from "../../Assets/carrosel.gif";
import netflixGif from "../../Assets/netflix.gif";
import portfolioGif from "../../Assets/portifolio.gif";

const EMAIL = "patrickdovale1@hotmail.com";
const GITHUB_URL = "https://github.com/patrickdovale";
const LINKEDIN_URL = "https://www.linkedin.com/in/patrickdovale/";

function TagList({ tags }) {
  return (
    <ul className="tag-list" aria-label="Tecnologias e temas">
      {tags.map((tag) => <li key={tag}>{tag}</li>)}
    </ul>
  );
}

function ExternalAnchor({ href, children, className = "" }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function ProjectCard({ project, labels }) {
  return (
    <article className={"project-card project-" + project.palette}>
      <div className="project-topline">
        <span className="project-number">{project.number} / CASE STUDY</span>
        <span className="project-status"><span className="status-dot" />{project.status}</span>
      </div>
      <div className="project-content">
        <div className="project-icon" aria-hidden="true">
          {project.link ? <FiLayers /> : <FiShield />}
        </div>
        <p className="project-kind">{project.kind}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-challenge">
          <strong>{labels.caseLabel}</strong>
          <p>{project.challenge}</p>
        </div>
        <TagList tags={project.tags} />
      </div>
      <div className="project-bottom">
        {project.link ? (
          <ExternalAnchor href={project.link} className="text-link">
            {project.cta} <FiArrowUpRight aria-hidden="true" />
          </ExternalAnchor>
        ) : (
          <span className="private-project"><FiLock aria-hidden="true" /> {labels.privateLabel}</span>
        )}
      </div>
    </article>
  );
}

export default function Portfolio2026() {
  const [language, setLanguage] = useState(() => {
    try {
      return window.localStorage.getItem("portfolio-language") === "en" ? "en" : "pt";
    } catch (_) {
      return "pt";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = portfolioContent[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    try { window.localStorage.setItem("portfolio-language", language); } catch (_) { /* private mode */ }
  }, [language]);

  const changeLanguage = () => {
    setLanguage((current) => current === "pt" ? "en" : "pt");
    setMenuOpen(false);
  };

  const navItems = [
    { href: "#about", label: copy.nav.about },
    { href: "#work", label: copy.nav.work },
    { href: "#journey", label: language === "pt" ? "Evolução" : "Journey" },
    { href: "#projects", label: copy.nav.projects },
    { href: "#expertise", label: copy.nav.expertise },
    { href: "#contact", label: copy.nav.contact }
  ];

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">{language === "pt" ? "Pular para o conteúdo" : "Skip to content"}</a>
      <header className="site-header">
        <div className="layout-container header-inner">
          <a href="#top" className="brand" aria-label="Patrick do Vale — início">
            <span className="brand-icon">p<span>.</span></span>
            <span className="brand-label">patrick<span>do vale</span></span>
          </a>
          <nav className={"nav-links" + (menuOpen ? " nav-open" : "")} aria-label={language === "pt" ? "Navegação principal" : "Main navigation"}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <button className="language-switch" type="button" onClick={changeLanguage} aria-label={language === "pt" ? "Mudar idioma para inglês" : "Switch language to Portuguese"}>
              <FiGlobe aria-hidden="true" /> {language.toUpperCase()} <span className="language-arrow">/ {language === "pt" ? "EN" : "PT"}</span>
            </button>
          </nav>
          <div className="header-actions">
            <ExternalAnchor href={LINKEDIN_URL} className="header-social" ><FiLinkedin aria-label="LinkedIn" /></ExternalAnchor>
            <ExternalAnchor href={GITHUB_URL} className="header-social" ><FiGithub aria-label="GitHub" /></ExternalAnchor>
            <button className="mobile-menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="layout-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> {copy.eyebrow}</p>
              <h1 id="hero-title">{copy.heroStart} <em>{copy.heroAccent}</em><br />{copy.heroEnd}</h1>
              <p className="hero-description">{copy.intro}</p>
              <div className="hero-ctas">
                <a href="#projects" className="button-primary">{copy.heroPrimary} <FiArrowUpRight aria-hidden="true" /></a>
                <a href="#contact" className="button-secondary">{copy.heroSecondary} <FiArrowRight aria-hidden="true" /></a>
              </div>
              <div className="hero-footnote"><span className="signal-dot" /> React · Next.js · TypeScript · Product Engineering</div>
            </div>
            <div className="hero-visual" aria-label={copy.snapshotTitle}><div className="portrait-frame"><img src={portrait} alt="Patrick do Vale — foto do portfólio original" /><span>{language === "pt" ? "A mesma pessoa. Novos desafios." : "Same person. New challenges."}</span></div>
              <div className="architecture-window">
                <div className="window-heading">
                  <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
                  <span>engineering / perspective</span>
                  <FiCode aria-hidden="true" />
                </div>
                <div className="architecture-body">
                  <div className="arch-intro"><span className="arch-eyebrow">DESIGN → BUILD → OPERATE</span><h2>{copy.snapshotTitle}</h2><p>{copy.snapshotCaption}</p></div>
                  <div className="arch-list">
                    {copy.snapshot.map((item) => (
                      <div className="arch-item" key={item.number}>
                        <span className="arch-number">{item.number}</span>
                        <div><strong>{item.title}</strong><p>{item.detail}</p></div>
                        <FiCheckCircle aria-hidden="true" />
                      </div>
                    ))}
                  </div>
                  <div className="arch-footer"><span><span className="tiny-led" /> built with intention</span><span>v.2026</span></div>
                </div>
              </div>
              <div className="decorative-square one" aria-hidden="true" /><div className="decorative-square two" aria-hidden="true" />
            </div>
          </div>
          <div className="layout-container hero-bottom"><a href="#about"><FiArrowDown aria-hidden="true" /> SCROLL TO EXPLORE</a><span>RIO DE JANEIRO · BR</span></div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-heading">
          <div className="layout-container about-grid">
            <div><span className="section-index">01 / ABOUT</span><p className="section-kicker">{copy.overline}</p></div>
            <div><h2 id="about-heading" className="statement-heading">{copy.principle}</h2><div className="signature-line"><span className="signature-dot" /> PATRICK VASCONCELLOS DO VALE <span className="signature-divider" /> SOFTWARE ENGINEER</div></div>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects" aria-labelledby="projects-heading">
          <div className="layout-container">
            <div className="section-heading">
              <div><span className="section-index">02 / SELECTED WORK</span><p className="section-kicker">{copy.projectsEyebrow}</p><h2 id="projects-heading">{copy.projectsTitle}</h2></div>
              <p>{copy.projectsDescription}</p>
            </div>
            <div className="projects-grid">{copy.projects.map((project) => <ProjectCard key={project.name} project={project} labels={copy} />)}</div>
            <p className="projects-note">{copy.projectFootnote}</p>
          </div>
        </section>

        <section className="experience-section section-pad" id="work" aria-labelledby="work-heading">
          <div className="layout-container">
            <div className="section-heading"><div><span className="section-index">03 / CAREER</span><p className="section-kicker">{copy.workEyebrow}</p><h2 id="work-heading">{copy.workTitle}</h2></div><p>{copy.workDescription}</p></div>
            <div className="timeline">
              {copy.experiences.map((experience) => (
                <article className="timeline-row" key={experience.company}>
                  <span className="timeline-period">{experience.period}</span>
                  <div className="timeline-main"><h3>{experience.role}</h3><p className="timeline-company">{experience.company}</p><p className="timeline-description">{experience.description}</p><TagList tags={experience.tags} /></div>
                  <FiArrowUpRight className="timeline-arrow" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="expertise-section section-pad" id="expertise" aria-labelledby="expertise-heading">
          <div className="layout-container">
            <div className="section-heading"><div><span className="section-index">04 / TOOLKIT</span><p className="section-kicker">{copy.expertiseEyebrow}</p><h2 id="expertise-heading">{copy.expertiseTitle}</h2></div></div>
            <div className="expertise-grid">
              {copy.expertise.map((item, index) => (
                <article className="expertise-card" key={item.title}>
                  <span className="expertise-index">0{index + 1}</span><FiCode className="expertise-icon" aria-hidden="true" /><h3>{item.title}</h3><p>{item.description}</p><TagList tags={item.items} />
                </article>
              ))}
            </div>
            <div className="education-line"><strong>{copy.educationTitle}</strong><span>{copy.education}</span></div>
          </div>
        </section>


<section className="journey-section section-pad" id="journey" aria-labelledby="journey-heading">
<div className="layout-container">
<div className="section-heading"><div><span className="section-index">04 / THEN & NOW</span><p className="section-kicker">{language === "pt" ? "MINHA EVOLUÇÃO" : "MY JOURNEY"}</p><h2 id="journey-heading">{language === "pt" ? "Não comecei construindo SaaS." : "I didn't start by building SaaS."}</h2></div><p>{language === "pt" ? "Comecei aprendendo, errando, criando clones e experimentando interfaces. Esses projetos fazem parte da minha história." : "I started by learning, making mistakes, building clones and experimenting with interfaces. These projects are part of my story."}</p></div>
<div className="journey-steps"><div><span>2022</span><strong>{language === "pt" ? "Meu primeiro portfólio" : "My first portfolio"}</strong><p>React, CSS, animações, curiosidade.</p></div><div><span>2026</span><strong>{language === "pt" ? "Produtos reais" : "Real products"}</strong><p>Lina Open Finance, Beleziq, Open Sell.</p></div></div>
<div className="legacy-grid">
{[
{ title: "Carrossel", image: carouselGif, url: "https://github.com/patrickdovale/Carrosel", detail: "React · HTML · CSS" },
{ title: "Netflix Clone", image: netflixGif, url: "https://github.com/patrickdovale/Netflix_Clone_React", detail: "React · TMDB API" },
{ title: language === "pt" ? "Meu portfólio de 2022" : "My 2022 portfolio", image: portfolioGif, url: "https://github.com/patrickdovale/My-Portfolio/tree/f0710b012d58ed22500a6344e5b2b052b9702cf3", detail: "React · CSS · Design pessoal" }
].map(project => <article className="legacy-card" key={project.url}><img src={project.image} alt={project.title} loading="lazy" /><div><h3>{project.title}</h3><p>{project.detail}</p><ExternalAnchor href={project.url} className="text-link">{language === "pt" ? "Ver código original" : "View original code"} <FiArrowUpRight aria-hidden="true" /></ExternalAnchor></div></article>)}
</div><p className="journey-note">{language === "pt" ? "Preferi preservar os projetos que me ensinaram a programar a fingir que comecei pronto." : "I'd rather keep the projects that taught me to code than pretend I started with everything figured out."}</p>
</div></section>
        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-heading">
          <div className="layout-container contact-grid">
            <div><span className="section-index">05 / SAY HELLO</span><p className="section-kicker">{copy.contactEyebrow}</p><h2 id="contact-heading">{copy.contactTitle}</h2><p>{copy.contactText}</p></div>
            <div className="contact-actions">
              <a className="contact-mail" href={"mailto:" + EMAIL}><FiMail aria-hidden="true" /><span>{copy.contactEmail}<small>{EMAIL}</small></span><FiArrowUpRight aria-hidden="true" /></a>
              <ExternalAnchor className="contact-link" href={LINKEDIN_URL}><FiLinkedin aria-hidden="true" />{copy.contactLinkedIn}<FiExternalLink aria-hidden="true" /></ExternalAnchor>
              <ExternalAnchor className="contact-link" href={GITHUB_URL}><FiGithub aria-hidden="true" />GitHub<FiExternalLink aria-hidden="true" /></ExternalAnchor>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="layout-container footer-inner"><a href="#top" className="footer-logo">p<span>.</span></a><p>© {new Date().getFullYear()} Patrick Vasconcellos do Vale. {copy.footer}</p><a href="#top" className="back-to-top">↑ TOP</a></div></footer>
    </div>
  );
}
