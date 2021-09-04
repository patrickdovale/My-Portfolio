import React from 'react';

import { FaReact, FaHtml5, FaCss3, FaJs, FaJava, FaInfinity, FaPencilRuler, FaNodeJs } from 'react-icons/fa';
import { SiCsharp, SiAdobephotoshop, SiMysql, SiPostgresql } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { DiSqllite } from 'react-icons/di';


export default function Skill() {

  //skill
  const skills = [
    {
      name: "html",
      category: "Web",
      conhecimento: 85,
      icon: <FaHtml5 />
    },

    {
      name: "css",
      category: "Web",
      conhecimento: 80,
      icon: <FaCss3 />
    },
    {
      name: "react",
      category: "Web",
      conhecimento: 43,
      icon: <FaReact />
    },
    {
      name: "javaScript",
      category: "Web",
      conhecimento: 60,
      icon: <FaJs />
    },
    {
      name: "Node",
      category: "Web",
      conhecimento: 20,
      icon: <FaNodeJs />
    },
    {
      name: "VB.net",
      category: "Software",
      conhecimento: 50,
      icon: <FaInfinity />
    },
    {
      name: "C#",
      category: "Software",
      conhecimento: 35,
      icon: <SiCsharp />
    },
    {
      name: "Java",
      category: "Software",
      conhecimento: 45,
      icon: <FaJava />
    },
    {
      name: "Photoshop",
      category: "Design",
      conhecimento: 65,
      icon: <SiAdobephotoshop />
    },
    {
      name: "Corel Draw",
      category: "Design",
      conhecimento: 55,
      icon: <FaPencilRuler />
    },
    {
      name: "Figma",
      category: "Design",
      conhecimento: 35,
      icon: <FiFigma />
    },
    {
      name: "MySql",
      category: "Banco de Dados",
      conhecimento: 35,
      icon: <SiMysql />
    },
    {
      name: "PostgreSQL",
      category: "Banco de Dados",
      conhecimento: 30,
      icon: <SiPostgresql />
    },
    {
      name: "SQLITE",
      category: "Banco de Dados",
      conhecimento: 30,
      icon: <DiSqllite />
    },
  ]

  const uniqueCategory = [...new Set(skills.map(item => item.category))];

  function showHability() {
    return (
      uniqueCategory.map(category => (

        <div className="skill-section">

          <div className="skill-title">
            <h2>{category}</h2>
          </div>

          <div className="skill-body">
            {
              skills.filter(skillItem => skillItem.category === category)
                .sort((a, b) => b.conhecimento - a.conhecimento)
                .map(skillItem => (
                  <div className="skill-item">
                    <p className="skill-icon">{skillItem.icon}</p>
                    <p className="skill-name">{skillItem.name}</p>
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div className="progress-indicator" style={{ width: skillItem.conhecimento / 2 }} />
                      </div>
                      <p>{`${skillItem.conhecimento}%`}</p></div>
                  </div>

                ))}
          </div>

        </div>
      ))
    )
  }

  return (
    <div id="skill">
      <div className="container">
        <div className="header-skill">
          <h1>My Skills</h1>
        </div>


        <div className="container-skill">
          {showHability()}
        </div>
      </div>
    </div>
  );
}