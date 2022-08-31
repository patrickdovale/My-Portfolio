import React, { useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import curriculo from '../../Assets/curriculo-patrick-vasconcellos.pdf';

export default function Control() {


    const [controlSelect, setControlSelect] = useState(false)


    let isChecked = false;
    let isType = "language";

    const I18N_STORAGE_KEY = 'i18nextLng';
    const [Language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

   async function handleChange(e) {
        isChecked = e.target.checked;
        isType = e.target.value;

        if (isType === "language" && Language === 'pt-BR') {
            await localStorage.setItem(I18N_STORAGE_KEY, 'en-US')
            document.location.reload(true)
        }
        else {
            await localStorage.setItem(I18N_STORAGE_KEY, 'pt-BR')
            document.location.reload(true)
        }

        if (isType === "darkMode" && isChecked === false) {
            
        }
        else {
           
        }
    }

    return (
        <div className="box-control">
            <BsFillGearFill className="icon-controll" value={Language} onClick={() => !controlSelect ? setControlSelect(true) : setControlSelect(false)} />
            <div className="box-options" style={controlSelect === true ? { display: 'flex' } : { display: 'none' }}>

                <div className="toggle">
                    <input id="language" type="checkbox" className="checkbox" onChange={e => handleChange(e)} value="language" />
                    <label className="box-toggle" type="label" htmlFor="language">
                        <img src="https://image.flaticon.com/icons/png/512/206/206597.png" alt="Bandeira Brasil" className="icone-mode" />
                        <img src="https://image.flaticon.com/icons/png/512/1887/1887107.png" alt="Bandeira EUA" className="icone-mode" />
                        <div className={`${Language === 'pt-BR' ? "toggle-active" : ""} indicator`}></div>
                    </label>
                </div>
                <a className="curriculo" href={curriculo} target="_blank" rel="noreferrer">curriculo</a>
            </div>
        </div>
    );
}