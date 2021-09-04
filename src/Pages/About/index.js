import React from 'react';
import MinhaFoto from '../../Assets/eu.png';
import { ReactTypical } from '@deadcoder0904/react-typical';
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';

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
                        <p className="front-end-text">front end developer</p>

                        <h1 className="title-about">
                            <ReactTypical
                                steps={["Hello! I'm Patrick Vasconcellos!"]}
                                wrapper="p"
                            /></h1>
                        <span className="description-about">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Duis hendrerit massa enim, in lobortis dui scelerisque id.
                            Sed semper, magna quis blandit tempus, lacus purus iaculis quam,
                            et fringilla est libero a sem. Phasellus tristique metus elementum
                            nisi lacinia elementum vitae sed ligula. Donec mi lorem,
                            condimentum a neque eget, interdum fermentum ipsum. In auctor
                            sem vel risus dictum accumsan. Pellentesque vulputate varius
                            odio sit amet fermentum.
                        </span>
                    </div>

                    <div className="about-col-1-infos">
                        <div className="info-item-about">
                            <h1>{currentAge()}</h1>
                            <span>My Age</span>
                        </div>

                        <div className="info-item-about">
                            <h1>{Projects.length}</h1>
                            <span>projects on git</span>
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