import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';


export default function Contact() {
    return (
        <div id="contact">
            <div className="container">
                <div className="text-contact">
                    <h1>Conecte-se comigo e conheça-me</h1>
                    <h3>#OpenToWork</h3>
                </div>
                <div className="sociais-contact">
                    <div className="box-sociales">
                        <a href="https://github.com/patrickdovale" target="_blank" rel="noreferrer"><FaGithub className="sociales-item" style={{ backgroundColor: "#0d1117" }} /></a>
                        <a href="https://www.linkedin.com/in/patrick-vasconcellos-2b534b157/" target="_blank" rel="noreferrer"><FaLinkedin className="sociales-item" style={{ backgroundColor: "#2363dd" }} /></a>
                        <a href="mailto:patrickdovale1@hotmail.com" target="_blank" rel="noreferrer"><FaMailBulk className="sociales-item" style={{ backgroundColor: "#e59c16" }} /></a>
                        <a href="https://wa.me/55021996869646" target="_blank" rel="noreferrer"><FaWhatsapp className="sociales-item" style={{ backgroundColor: "#008000" }} /></a>
                        <a href="https://www.instagram.com/patrick_vasconcellos" target="_blank" rel="noreferrer"><FaInstagram className="sociales-item" style={{ backgroundColor: "#800080" }} /></a>
                    </div>

                    <div className="sociales-text">
                        <h3>Entre em contato para um bate-papo</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}