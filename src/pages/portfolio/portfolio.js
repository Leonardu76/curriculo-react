import React from 'react';
import './portfolio.css'
import Pokedex from "../../assets/imgs/projects/img-project-pokedex.png"
import Contrucao from "../../assets/imgs/projects/img_em_construcao.png"
import styleBarber from "../../assets/imgs/projects/styleBarber.png"
import leoSoft from "../../assets/imgs/projects/leosoft.png"
import Menu from '../../components/menu/menu'

import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
    let url = 'portfolio'

function Projetos() {

  const projetos = {
    "Vue.js": [
      {
        "id": 1,
        "nome": "Barber style",
        "img": styleBarber,
        "tecnologies": "Vue.js, Nuxt.js",
        "url_git": 'https://github.com/Leonardu76/stylusBarber',
        "url_site": 'https://kaleidoscopic-brigadeiros-300feb.netlify.app/'
      },
      {
        "id": 2,
        "nome": "Leo soft",
        "img": leoSoft,
        "tecnologies": "Vue.js, Nuxt.js, Ant Design Vue",
        "url_git": null,
        "url_site": 'https://leosoft.netlify.app/'
      }
    ],
    "PHP": [
      {
        "id": 1,
        "nome": "Em andamento",
        "img": Contrucao,
        "tecnologies": "Lorem ipsum, Lorem ipsum, Lorem ipsum",
        "url_git": null,
        "url_site": null
      },
      {
        "id": 2,
        "nome": "Em andamento",
        "img": Contrucao,
        "tecnologies": "Lorem ipsum, Lorem ipsum, Lorem ipsum",
        "url_git": null,
        "url_site": null
      }
    ],
    "React.js": [
      {
        "id": 1,
        "nome": "Pokedex",
        "img": Pokedex,
        "tecnologies": "React.js, Fetch API, Styled Components",
        "url_git": "https://www.github.com/Leonardu76/Pokedex-React",
        "url_site": "https://dapper-pie-836bf4.netlify.app/"
      }
    ]
  };

  const allProjects = Object.values(projetos).flat();

  const renderProjects = (list) => (
    <div className='portfolio-div'>
      {list.map((tecnologies) => (
        <div key={tecnologies.id} className='portfolio-div-body row'>
          <div className='portfolio-background' style={{ backgroundImage: `url(${tecnologies.img})` }}>
            <div className='overlay'>
              <div className='col-md-4 porfolio-even'>
                <h3 className='portfolio-background-title'>{tecnologies.nome}</h3>

                <div className='portfolio-content'>
                  <div className='portfolio-description card'>
                    <p>{tecnologies.tecnologies}</p>
                  </div>
                  <div className='portfolio-content-tecnologies'>
                    <a
                      rel="noreferrer"
                      className='div-tecnologies'
                      target={"_blank"}
                      href={tecnologies.url_site || "#"}
                      style={{ textDecoration: "none" }}
                    >
                      <div className='div-tecnologies'>
                        <VscLinkExternal className='icon-tecnologies' />
                        <span className='resume-tec-spam'>
                          {tecnologies.url_site ? 'Ir ao site' : 'Em breve'}
                        </span>
                      </div>
                    </a>

                    <a
                      rel="noreferrer"
                      target={"_blank"}
                      className='div-tecnologies'
                      href={tecnologies.url_git || "#"}
                      style={{ textDecoration: "none" }}
                    >
                      <div className='div-tecnologies'>
                        <VscGithubAlt className='icon-tecnologies' />
                        <span className='resume-tec-spam'>
                          {tecnologies.url_git ? 'Ir ao Github' : 'Em breve'}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (    
           <div>
        <Menu url={url} />
              




    <div className='container col-12 col-md-9 col-lg-12'>
    

      <h1 className='projects-title'>Meus Projetos</h1>

      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Todos</Tab>
          <Tab>Vue.js</Tab>
          <Tab>React.js</Tab>
          <Tab>PHP</Tab>
        </TabList>

        <TabPanel>{renderProjects(allProjects)}</TabPanel>
        <TabPanel>{renderProjects(projetos["Vue.js"])}</TabPanel>
        <TabPanel>{renderProjects(projetos["React.js"])}</TabPanel>
        <TabPanel>{renderProjects(projetos["PHP"])}</TabPanel>
      </Tabs>
    </div>
        </div>

  );
}

export default Projetos;
