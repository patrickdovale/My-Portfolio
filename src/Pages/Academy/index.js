import React from "react";
import { Carousel } from "react-responsive-carousel";
import { i18n } from "../../translate/i18n";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import certificadoWeb from "../../Assets/certificado.jpeg";
import certificadoCharp from "../../Assets/CShap.jpg";
import certificadoHTML from "../../Assets/html.jpg";
import certificadoLogica from "../../Assets/logica.jpg";

export default function Academy() {
  const certificados = [
    {
      name: "web",
      img: certificadoWeb,
    },
    {
      name: "Certificaçao C#",
      img: certificadoCharp,
    },
    {
      name: "Certificaçao HTML",
      img: certificadoHTML,
    },
    {
      name: "Certificaçao Logica de Programação",
      img: certificadoLogica,
    },
  ];

  return (
    <div id="academy">
      <div className="container">
        <div className="academy-container">
          <div className="col-academy-education">
            <div className="academy-head">
              <h3>{i18n.t("academy.titleEducation")}</h3>
            </div>

            <div className="academy-body">
              <div className="academy-logo">
                <img src={i18n.t("academy.highSchool.logo")} alt="logo" />
              </div>
              <div>
                <h4>{i18n.t("academy.highSchool.college")}</h4>
                <p>{i18n.t("academy.highSchool.duration")}</p>
                <p>{i18n.t("academy.highSchool.location")}</p>
                <p>{i18n.t("academy.highSchool.course")}</p>
              </div>
            </div>
            <div className="academy-body">
              <div className="academy-logo">
                <img src={i18n.t("academy.college.logo")} alt="logo"></img>
              </div>
              <div>
                <h4>{i18n.t("academy.college.college")}</h4>
                <p>{i18n.t("academy.college.duration")}</p>
                <p>{i18n.t("academy.college.location")}</p>
                <p>{i18n.t("academy.college.course")}</p>
                <p>
                  {i18n.t("academy.college.pr.namePR") +
                    " " +
                    i18n.t("academy.college.pr.numberPR")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-academy-certification">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <h3 style={{ textAlign: "center" }}>
                  Alguns de meus certificados
                </h3>
              </div>

              {certificados.map((certificado, i) => (
                <div className="item-carrosel" key={i}>
                  <img
                    src={certificado.img}
                    title={certificado.name}
                    alt={certificado.name}
                  />
                  <p className="legend">{certificado.name}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
