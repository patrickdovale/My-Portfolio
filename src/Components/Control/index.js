import React, {  useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import {BsMoon,BsSun} from 'react-icons/bs';

export default function Control({setLanguage, setMode, setText, L}) {

    const [controlSelect, setControlSelect] = useState(false);

    let isChecked = false;
    let isType = "language";

    
    function handleChange(e) {
         isChecked = e.target.checked;
         isType = e.target.value;

         if (isType === "language" && isChecked === false){
            setLanguage("en");
            setText({
                LinkAbout: "About me",
                LinkSkills: "Skills",
                LinkProjects: "Projects",
                LinkAcademy: "Academy",
                LinkContact: "Contact"

            })
        }
        else{
            setLanguage("pt")
            setText({
                LinkAbout: "Sobre Mim",
                LinkSkills: "Habilidades",
                LinkProjects: "Projetos",
                LinkAcademy: "Formação",
                LinkContact: "Contato"
            })
            console.log(setText)
        }

        if (isType === "darkMode" && isChecked === false){
            setMode("en");
        }
        else{
            setMode("pt");
        }
         
      }

    return (
        <div className="box-control">
            <BsFillGearFill className="icon-controll" onClick={() => !controlSelect ? setControlSelect(true) : setControlSelect(false)} />
            <div className="box-options" style={controlSelect === true ? { display: 'block' } : { display: 'none' }}>
                <div className="toggle">
                    <input id="darkmode" type="checkbox" className="checkbox" onChange={e => handleChange(e)} value="darkMode"/>
                    <label className="box-toggle" type="label" for="darkmode">
                        <BsSun className="icone-mode"/>
                        <BsMoon className="icone-mode"/>
                        <div className="indicator"></div>
                    </label>
                </div>

                <div className="toggle">
                    <input id="language" type="checkbox" className="checkbox" onChange={e => handleChange(e)} value="language"/>
                    <label className="box-toggle" type="label" for="language">
                        <img src="https://image.flaticon.com/icons/png/512/206/206597.png" alt="Bandeira Brasil" className="icone-mode"/>
                        <img src="https://image.flaticon.com/icons/png/512/1887/1887107.png" alt="Bandeira EUA" className="icone-mode"/>
                        <div className="indicator"></div>
                    </label>
                </div>
                <a href="/">Baixar CV</a>
            </div>
        </div>
    );
}