import React from 'react';
import MinhaFoto from '../../Assets/eu.png';
import { ReactTypical } from '@deadcoder0904/react-typical';
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { i18n } from '../../translate/i18n';

export default function About({ Projects }) {

    //Funçao para Idade
    let currentDay = new Date().getDay();
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    let currentAge = () => {
        if (currentDay + 1 >= 29 && currentMonth + 1 >= 12) {
            return (currentYear - 2000)
        }
        else {
            return (currentYear - 2000 - 1)
        }
    }


    return (
        <div className="container">
            <div id="about">
                <div className="about-col-1">
                    <div className="div-about-col-1">
                        <p className="front-end-text">{i18n.t('about.texts.textDeveloper')}</p>
                        <h1 className="title-about">
                            <ReactTypical
                                steps={[i18n.t('about.texts.textSalute')]}
                                wrapper="p"
                            /></h1>
                        <span className="description-about">
                            {i18n.t('about.texts.textAboutMe')}
                        </span>
                    </div>

                    <div className="about-col-1-infos">
                        <div className="info-item-about">
                            <h1>{currentAge()}</h1>
                            <span>{i18n.t('about.texts.textAge')}</span>
                        </div>

                        <div className="info-item-about">
                            <h1>{Projects.length}</h1>
                            <span>{i18n.t('about.texts.textProjects')}</span>
                        </div>
                    </div>

                </div>

                <div className="about-col-2">
                    <div className="position-img">
                        <div className="circle-img">
                            <img className="eu" src={MinhaFoto} alt="Minha foto" />
                        </div>
                        <FaReact style={{ color: "#00d8ff", borderColor: "#00d8ff" }} className="icon-framework-rotate framework-position-1" />
                        <FaHtml5 style={{ color: "#f16524", borderColor: "#f16524" }} className="icon-framework-rotate framework-position-2" />
                        <FaCss3 style={{ color: "#0070ba", borderColor: "#0070ba" }} className="icon-framework-rotate framework-position-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}