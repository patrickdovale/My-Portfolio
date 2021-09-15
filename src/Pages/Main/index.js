import React, { useEffect, useState } from 'react';

import '../../Styles/styles.css';
import TopBar from '../../Components/TopBar';
import About from '../../Pages/About';
import Skill from '../../Pages/Skill';
import Project from '../../Pages/Project';
import Academy from '../../Pages/Academy';
import Contact from '../../Pages/Contact';
import Control from '../../Components/Control';
// import Languagee from '../../Components/Language';

import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';

import video from '../../Assets/video.gif';
import carroselGif from '../../Assets/carrosel.gif';



function Main() {

  const I18N_STORAGE_KEY = 'i18nextLng';
  const [Language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

  //Projetos br
  const ProjectsBR = [
    {
      Id: 1,
      Title: "Carrosel",
      Description: "Projeto Desenvolvido com o intuito de patricar as habilidades em react",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: carroselGif,
      Link: "https://carrosel.vercel.app/",
      GitHub: "https://github.com/patrickdovale/Carrosel",
    },
    {
      Id: 2,
      Title: "Portifolio",
      Description: "Projeto Desenvolvido com o intuito de patricar as habilidades em react",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: video,
      Link: "",
      GitHub: "",
    },
    {
      Id: 3,
      Title: "Futuro 1",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet eros varius, pharetra purus dictum, iaculis metus. Sed commodo, ex eu aliquet finibus, diam augue convallis massa, eget bibendum augue ligula ac ante. In convallis vestibulum est quis tristique. Cras a tortor a est lobortis ullamcorper. Duis hendrerit in lorem tincidunt ultricies. Sed fermentum facilisis consectetur. Quisque vestibulum vulputate orci. In rutrum magna et vestibulum varius. In hac habitasse platea dictumst. Proin non venenatis velit, sit amet malesuada nisl. Nunc lobortis tempor tincidunt. Phasellus sit amet laoreet odio. Ut interdum feugiat enim id elementum.",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: video,
      Link: "",
      GitHub: "",
    },
    {
      Id: 4,
      Title: "Futuro 2",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet eros varius, pharetra purus dictum, iaculis metus. Sed commodo, ex eu aliquet finibus, diam augue convallis massa, eget bibendum augue ligula ac ante. In convallis vestibulum est quis tristique. Cras a tortor a est lobortis ullamcorper. Duis hendrerit in lorem tincidunt ultricies. Sed fermentum facilisis consectetur. Quisque vestibulum vulputate orci. In rutrum magna et vestibulum varius. In hac habitasse platea dictumst. Proin non venenatis velit, sit amet malesuada nisl. Nunc lobortis tempor tincidunt. Phasellus sit amet laoreet odio. Ut interdum feugiat enim id elementum.",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: video,
      Link: "",
      GitHub: "",
    },
  ]


  //Projetos en
  const ProjectsEN = [
    {
      Id: 1,
      Title: "Carrosel EN",
      Description: "Project developmed com o intuito de patricar as habilidades em react",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: carroselGif,
      Link: "https://carrosel.vercel.app/",
      GitHub: "https://github.com/patrickdovale/Carrosel",
    },
    {
      Id: 2,
      Title: "Portifolio",
      Description: "Projeto Desenvolvido com o intuito de patricar as habilidades em react",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: video,
      Link: "",
      GitHub: "",
    },
    {
      Id: 3,
      Title: "Futuro 1",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet eros varius, pharetra purus dictum, iaculis metus. Sed commodo, ex eu aliquet finibus, diam augue convallis massa, eget bibendum augue ligula ac ante. In convallis vestibulum est quis tristique. Cras a tortor a est lobortis ullamcorper. Duis hendrerit in lorem tincidunt ultricies. Sed fermentum facilisis consectetur. Quisque vestibulum vulputate orci. In rutrum magna et vestibulum varius. In hac habitasse platea dictumst. Proin non venenatis velit, sit amet malesuada nisl. Nunc lobortis tempor tincidunt. Phasellus sit amet laoreet odio. Ut interdum feugiat enim id elementum.",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: video,
      Link: "",
      GitHub: "",
    },
    {
      Id: 4,
      Title: "Futuro 2",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet eros varius, pharetra purus dictum, iaculis metus. Sed commodo, ex eu aliquet finibus, diam augue convallis massa, eget bibendum augue ligula ac ante. In convallis vestibulum est quis tristique. Cras a tortor a est lobortis ullamcorper. Duis hendrerit in lorem tincidunt ultricies. Sed fermentum facilisis consectetur. Quisque vestibulum vulputate orci. In rutrum magna et vestibulum varius. In hac habitasse platea dictumst. Proin non venenatis velit, sit amet malesuada nisl. Nunc lobortis tempor tincidunt. Phasellus sit amet laoreet odio. Ut interdum feugiat enim id elementum.",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: video,
      Link: "",
      GitHub: "",
    },
  ]

  const Projects = Language=== 'en-US'? ProjectsEN : ProjectsBR;
  const [Scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScroll(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
  }, [Scroll]);


  return (
    <div id="app">
      <TopBar Scroll={Scroll} />
      <About Projects={Projects} />
      <Skill />
      <Project Projects={Projects} />
      <Academy />
      <Contact />
      <Control />
      {/* <Languagee Language={Language} setText={setText}/> */}
    </div>
  );
}

export default Main;
