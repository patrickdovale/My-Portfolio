import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { NavHashLink } from 'react-router-hash-link';



export default function TopBar({ Scroll, text }) {


    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -73;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    console.log(text.LinkAbout)

    return (
        <div className={`${Scroll >= 100 ? "container-header" : ""}`}>
            <div className="container">
                <header>
                    <div id="logo">
                        <h1>Patrick <span>Vasconcellos</span></h1>
                    </div>

                    <nav>
                        <ul>
                            {/* LinkSkills: "Skills",
                            LinkProjects: "Projects",
                            LinkAcademy: "Academy",
                            LinkContact: "Contact" */}
                            <NavHashLink scroll={el => scrollWithOffset(el)} smooth activeClassName="menu-selected" to="#about" className={"item-nav"}>{text.LinkAbout}</NavHashLink>
                            <NavHashLink scroll={el => scrollWithOffset(el)} smooth activeClassName="menu-selected" to="#skill" className={"item-nav"}>{text.LinkSkills}</NavHashLink  >
                            <NavHashLink scroll={el => scrollWithOffset(el)} smooth activeClassName="menu-selected" to="#project" className={"item-nav"}>{text.LinkProjects}</NavHashLink>
                            <NavHashLink scroll={el => scrollWithOffset(el)} smooth activeClassName="menu-selected" to="#academy" className={"item-nav"}>{text.LinkAcademy}</NavHashLink>
                            <NavHashLink scroll={el => scrollWithOffset(el)} smooth activeClassName="menu-selected" to="#contact" className={"item-nav"}>{text.LinkContact}</NavHashLink>
                        </ul>
                    </nav>

                    <div className="sociales">
                        <a className="social-item" href="https://github.com/patrickdovale" target="_blank" rel="noreferrer">
                            <AiFillGithub className="social-icon" />
                            <span>Github</span>
                        </a>
                        <a className="social-item" href="https://www.linkedin.com/in/patrick-vasconcellos-2b534b157/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin className="social-icon" />
                            <span>Linkedin</span>
                        </a>

                        <a className="circle-contact" href="mailto:patrickdovale1@hotmail.com" target="_blank" rel="noreferrer">
                            <AiOutlineMail />
                        </a>

                        <a className="circle-contact" href="https://wa.me/55021996869646" rel="noreferrer">
                            <AiOutlineWhatsApp />
                        </a>
                    </div>
                </header>
            </div>
        </div>

    );
}