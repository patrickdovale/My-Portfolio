import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import certificadoWeb from '../../Assets/certificado.jpeg';
import certificadoCharp from '../../Assets/CShap.jpg';
import certificadoHTML from '../../Assets/html.jpg';
import certificadoLogica from '../../Assets/logica.jpg';

export default function Academy() {

    const certificados = [{
        name: 'web',
        img: certificadoWeb
    },
    {
        name: 'Certificaçao C#',
        img: certificadoCharp
    },
    {
        name: 'Certificaçao HTML',
        img: certificadoHTML
    },
    {
        name: 'Certificaçao Logica de Programação',
        img: certificadoLogica
    },
    ]

    return (
        <div id="academy">
            <div className="container">

                <div className="academy-container">
                    <div className="col-academy-education">
                        <div className="academy-head">
                            <h3>Education</h3>
                        </div>

                        <div className="academy-body">
                            <div className="academy-logo">
                                <img src={"http://www.eterj.com.br/web/wp-content/uploads/2018/07/logo-eterj120.png"} alt="logo"></img>
                            </div>
                            <div>
                                <h4>Escola técnica do Rio de Janeiro</h4>
                                <p>Janeiro de 2015 - Dezembro de 2018</p>
                                <p>Rio de Janeiro - RJ</p>
                                <p>Técnico em Informática</p>
                            </div>
                        </div>
                        <div className="academy-body">
                            <div className="academy-logo">
                                <img src={"https://estacio.br/assets/imgs/header/logo-black.svg"} alt="logo"></img>
                            </div>
                            <div>
                                <h4>Estácio de Sá</h4>
                                <p>Janeiro de 2019 - Dezembro de 2022</p>
                                <p>Rio de Janeiro - RJ</p>
                                <p>Sistema de Informação</p>
                                <p>CR: 8.44</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-academy-certification">
                        <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false}>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100%" }}>
                                <h3 style={{ textAlign: 'center' }}>Alguns de meus certificados</h3>
                            </div>

                            {certificados.map((certificado) => (
                                <div className="item-carrosel">
                                    <img src={certificado.img} title={certificado.name} alt={certificado.name} />
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