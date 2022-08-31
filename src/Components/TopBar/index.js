import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { NavHashLink } from "react-router-hash-link";
import { i18n } from "../../translate/i18n";

export default function TopBar({ Scroll, text }) {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -73;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <div className={`${Scroll >= 100 ? "container-header" : ""}`}>
      <div className="container">
        <header className="desktop">
          <div id="logo">
            <h1>
              Patrick <span>Vasconcellos</span>
            </h1>
          </div>

          <nav>
            <ul>
              <NavHashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                activeClassName="menu-selected"
                to="#about"
                className={"item-nav"}
              >
                {i18n.t("nav.option.about")}
              </NavHashLink>
              <NavHashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                activeClassName="menu-selected"
                to="#skill"
                className={"item-nav"}
              >
                {i18n.t("nav.option.skill")}
              </NavHashLink>
              <NavHashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                activeClassName="menu-selected"
                to="#project"
                className={"item-nav"}
              >
                {i18n.t("nav.option.project")}
              </NavHashLink>
              <NavHashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                activeClassName="menu-selected"
                to="#academy"
                className={"item-nav"}
              >
                {i18n.t("nav.option.academy")}
              </NavHashLink>
              <NavHashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                activeClassName="menu-selected"
                to="#contact"
                className={"item-nav"}
              >
                {i18n.t("nav.option.contact")}
              </NavHashLink>
            </ul>
          </nav>

          <div className="sociales">
            <a
              className="social-item"
              href="https://github.com/patrickdovale"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="social-icon" />
              <span>Github</span>
            </a>
            <a
              className="social-item"
              href="https://www.linkedin.com/in/patrick-vasconcellos-2b534b157/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="social-icon" />
              <span>Linkedin</span>
            </a>

            <a
              className="circle-contact"
              href="mailto:patrickdovale1@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail />
            </a>

            <a
              className="circle-contact"
              href="https://wa.me/55021996869646"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
        </header>

        <header className="mobile">
          <div id="logo">
            <h1>
              Patrick <span>Vasconcellos</span>
            </h1>
          </div>

          <BiMenu
            onClick={() =>
              menuMobile === false ? setMenuMobile(true) : setMenuMobile(false)
            }
            className="menu-mobile"
          />

          <div
            className={`info-menu ${
              menuMobile === false ? "invisible" : "visible"
            }`}
          >
            <nav>
              <ul>
                <NavHashLink
                  scroll={(el) => scrollWithOffset(el)}
                  smooth
                  activeClassName="menu-selected"
                  to="#about"
                  className={"item-nav"}
                >
                  {i18n.t("nav.option.about")}
                </NavHashLink>
                <NavHashLink
                  scroll={(el) => scrollWithOffset(el)}
                  smooth
                  activeClassName="menu-selected"
                  to="#skill"
                  className={"item-nav"}
                >
                  {i18n.t("nav.option.skill")}
                </NavHashLink>
                <NavHashLink
                  scroll={(el) => scrollWithOffset(el)}
                  smooth
                  activeClassName="menu-selected"
                  to="#project"
                  className={"item-nav"}
                >
                  {i18n.t("nav.option.project")}
                </NavHashLink>
                <NavHashLink
                  scroll={(el) => scrollWithOffset(el)}
                  smooth
                  activeClassName="menu-selected"
                  to="#academy"
                  className={"item-nav"}
                >
                  {i18n.t("nav.option.academy")}
                </NavHashLink>
                <NavHashLink
                  scroll={(el) => scrollWithOffset(el)}
                  smooth
                  activeClassName="menu-selected"
                  to="#contact"
                  className={"item-nav"}
                >
                  {i18n.t("nav.option.contact")}
                </NavHashLink>
              </ul>
            </nav>

            <div className="sociales">
              <a
                className="social-item"
                href="https://github.com/patrickdovale"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="social-icon" />
                <span>Github</span>
              </a>
              <a
                className="social-item"
                href="https://www.linkedin.com/in/patrick-vasconcellos-2b534b157/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="social-icon" />
                <span>Linkedin</span>
              </a>

              <a
                className="circle-contact"
                href="mailto:patrickdovale1@hotmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
              </a>

              <a
                className="circle-contact"
                href="https://wa.me/55021996869646"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
