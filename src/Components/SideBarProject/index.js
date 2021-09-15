import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { i18n } from '../../translate/i18n';



export default function SideBarProject({ Projects, setSelectProject ,selectProject }) {

    let ScrollContainer = document.getElementById("container-scroll-items");


    function move_up() {
        if (ScrollContainer.scrollTop > 0) {

            if (ScrollContainer.scrollTop <= 0) {
                ScrollContainer.scrollTop -= 0;
            } else {
                ScrollContainer.scrollTop -= 115;
            }

        }
    }

    function move_down() {
        if (ScrollContainer.scrollTop <= ScrollContainer.offsetHeight) {
            ScrollContainer.scrollTop += 115;
        }
    }

    return (
        <div className="project-col-1">
            <div className="header-projects">
                <h1>{i18n.t('project.titleProject')}</h1>
                <span>({selectProject}/{Projects.length})</span>
            </div>
            <div className="container-projects">
                <IoIosArrowUp className="icons-control-projects" onClick={move_up} />
                <div id="container-scroll-items" className="container-projects-items">
                    
                    
                    {Projects.map(project => (
                        <div key={project.Id} onClick={()=> setSelectProject(project.Id)} className={`container-projects-item ${selectProject === project.Id ? "container-projects-item-selected" : ""}`}>
                        <div className="body-item-project">
                            <div className="title-project">
                                <h1>{project.Title}</h1>
                            </div>
                            <div className="description-project">
                                <p>{project.Description}</p>
                            </div>
                            <div className="footer-project">
                                <div className="tecnologias-project">
                                    {project.Tecnologias.map(tecnologia => (tecnologia))}
                                </div>

                                <div className="interacao-project">
                                    <div className="item-interacao">
                                        <AiFillEye className="icon-interacao" />
                                        <a target="_blank" rel="noreferrer" href={project.Link}>{i18n.t('project.textVisit')}</a>
                                    </div>

                                    <div className="item-interacao">
                                        <AiFillGithub className="icon-interacao" />
                                        <a target="_blank" rel="noreferrer" href={project.Link}>Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video-project">
                            <img src={project.Image} alt="Projeto Carrosel imagem" />
                        </div>
                    </div>
                    ))}

                </div>
                <IoIosArrowDown className="icons-control-projects" onClick={move_down} />
            </div>
        </div>
    );
}