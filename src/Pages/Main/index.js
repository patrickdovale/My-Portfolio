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
import netflixGif from '../../Assets/netflix.gif';
import portifolioGif from '../../Assets/portifolio.gif';



function Main() {

  const I18N_STORAGE_KEY = 'i18nextLng';
  const [Language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

  //Projetos br
  const ProjectsBR = [
    {
      Id: 1,
      Title: "Carrosel",
      Description: "Projeto realizado com o intuito de treinar as habilidades no desenvolvimento. Para treinar foi realizado um site onde possui um carrossel onde fica alterando as imagens após determinado tempo, realizado um tipo de filtro de categorias, ordenação pelo mais atual ou antigo, além disso foi realizado de forma responsiva para melhorar a usabilidade.",
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
      Title: "Clone NetFlix",
      Description: "Neste projeto o intuito foi trabalhar bastante no visual para ficar bem parecido, também foi utilizado a API “TMDB” para consultar as informações disponíveis na página. Ao carregar a página tem uma função para escolher aleatoriamente uma série e mostrar suas informações, ao selecionar outras séries ele mudar as informações para a série selecionada.",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: netflixGif,
      Link: "https://netflix-clone-react-5a3av7xl0-netflix-clone-patrick-vale.vercel.app/",
      GitHub: "https://github.com/patrickdovale/Netflix_Clone_React",
    },
    {
      Id: 3,
      Title: "Portfólio",
      Description: "Com a criação desse projeto tive como objetivo fazer um site simples e de forma funcional, onde eu pudesse estar falando um pouco sobre mim e está reunindo alguns de meus projetos para exibição.  est lobortis ullamcorper. Duis hendrerit in lorem tincidunt ultricies. Sed fermentum facilisis consectetur. Quisque vestibulum vulputate orci. In rutrum magna et vestibulum varius. In hac habitasse platea dictumst. Proin non venenatis velit, sit amet malesuada nisl. Nunc lobortis tempor tincidunt. Phasellus sit amet laoreet odio. Ut interdum feugiat enim id elementum.",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: portifolioGif,
      Link: "",
      GitHub: "https://github.com/patrickdovale/Portifolio",
    },
    {
      Id: 4,
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
  ]


  //Projetos en
  const ProjectsEN = [
    {
      Id: 1,
      Title: "Carousel",
      Description: "Project carried out in order to train development skills. To train, a website was created where it has a carousel where the images are changed after a certain time, a type of category filter was carried out, sorting by the most current or oldest, and it was also carried out in a responsive way to improve usability.",
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
      Title: "NetFlix Clone",
      Description: "In this project the intention was to work a lot on the visual to be very similar, the API “TMDB” was also used to consult the information available on the page. When loading the page it has a function to randomly choose a series and show its information, when selecting other series it changes the information for the selected series.",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: netflixGif,
      Link: "https://netflix-clone-react-5a3av7xl0-netflix-clone-patrick-vale.vercel.app/",
      GitHub: "https://github.com/patrickdovale/Netflix_Clone_React",
    },
    {
      Id: 3,
      Title: "portfolio",
      Description: "With the creation of this project I aimed to make a website simple and functional, where I could be talking a little about myself and is putting together some of my projects for display.",
      Tecnologias: [
        <FaReact title="React" className="tecnologia-project" />,
        <FaHtml5 title="HTML5" className="tecnologia-project" />,
        <FaCss3 title="CSS3" className="tecnologia-project" />
      ],
      Image: portifolioGif,
      Link: "",
      GitHub: "https://github.com/patrickdovale/Portifolio",
    },
    {
      Id: 4,
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
