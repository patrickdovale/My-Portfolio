import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';


export default function ViewProject({ Projects, selectProject }) {
    return (
        <div className="project-col-2">
            <div className="view-project">
                <div className="title-view-project">
                    <h1>{Projects[selectProject-1].Title}</h1>
                </div>

                <div className="img-view-project">
                    <img src={Projects[selectProject-1].Image} alt="Imagem Projeto" />
                </div>

                <div className="description-view-project">
                    <p>{Projects[selectProject-1].Description} </p>
                </div>

                <div className="footer-project">
                    <div className="tecnologias-project">
                    {Projects[selectProject-1].Tecnologias.map(tecnologia =>(tecnologia))}
                    </div>

                    <div className="interacao-project">
                        <div className="item-interacao">
                            <AiFillEye className="icon-interacao" />
                            <a target="_blank" rel="noreferrer" href={Projects[selectProject-1].Link}>Visitar</a>
                        </div>

                        <div className="item-interacao">
                            <AiFillGithub className="icon-interacao" />
                            <a target="_blank" rel="noreferrer" href={Projects[selectProject-1].GitHub}>Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}