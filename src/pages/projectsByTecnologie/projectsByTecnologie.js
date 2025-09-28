import React from 'react';
import './projectsByTecnologie.css'
import Pokedex from "../../assets/imgs/projects/img-project-pokedex.png"
import Contrucao from "../../assets/imgs/projects/img_em_construcao.png"
import styleBarber from "../../assets/imgs/projects/styleBarber.png"
import leoSoft from "../../assets/imgs/projects/leosoft.png"



import { VscGithubAlt } from "react-icons/vsc";
import { useState, useEffect } from 'react';
import { VscLinkExternal } from "react-icons/vsc";
import { useParams, Link } from "react-router-dom";

function Projetos() {

   
    const { name } = useParams()
    const [project] = useState([name])
    const [projeto, setProjeto] = useState([])



    const see = () => {
        if (project[0] === 'Vue.js') {
            setProjeto([
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

            ])
        } else if (project[0] === 'PHP') {
            setProjeto([
                {
                    "id": 1,
                    "nome": "Em andamento",
                    "img": Contrucao,
                    "tecnologies": "Lorem ipsum,Lorem ipsum, Lorem ipsum, Lorem ipsum ",
                    "url_git": null,
                    "url_site": null
                },
                {
                    "id": 2,
                    "nome": "Em andamento",
                    "img": Contrucao,
                    "tecnologies": "Lorem ipsum,Lorem ipsum, Lorem ipsum, Lorem ipsum ",
                    "url_git": null,
                    "url_site": null

                }
            ])
        } else if (project[0] === 'React.js') {
            setProjeto([
                {
                    "id": 1,
                    "nome": "Pokedex",
                    "img": Pokedex,
                    "tecnologies": "React.js, Fetch API, Styled Components",
                    "url_git": "https://www.github.com/Leonardu76/Pokedex-React",
                    "url_site": "https://dapper-pie-836bf4.netlify.app/"
                }
            ])
        }
    }

    useEffect(() => {
        see();
    })

    return (
        <div className='container' >
            <Link to={'../portfolio'} >
                <button type="button" class="btn-close btn-projects"></button>
            </Link>



            <h1 className='projects-title'>{project}</h1>
            <div className='portfolio-div'>


                {projeto.map((tecnologies) => (
                    <>
                        <div className='portfolio-div-body row'>
                            <div className='portfolio-background' style={{ backgroundImage: `url(${tecnologies.img})` }}>
                            <div className='overlay'> <div className='col-md-4 porfolio-even' >
                            <h3 className='portfolio-background-title'>{tecnologies.nome}</h3>

                            <div className='portfolio-content ' >
                                <div className='portfolio-content-title' >
                                    
                                    
                                </div>
                                <div className='portfolio-description card' >
                                    <p>{tecnologies.tecnologies}</p>
                                </div>
                                <div className='portfolio-content-tecnologies'>

                                    <a rel="noreferrer" className='div-tecnologies' target={"_blank"} href={tecnologies.url_site} style={{ textDecoration: "none" }} >
                                        <div className='div-tecnologies'>
                                            <VscLinkExternal className='icon-tecnologies' />
                                            <span className='resume-tec-spam'>
                                            {tecnologies.url_site ? ('Ir ao site') :
                                                    ('Em breve')}
                                            </span>
                                        </div>
                                    </a>

                                    <a rel="noreferrer" target={"_blank"} className='div-tecnologies' href={tecnologies.url_git} style={{ textDecoration: "none" }}>
                                        <div className='div-tecnologies'>
                                            <VscGithubAlt className='icon-tecnologies' />
                                            <span className='resume-tec-spam'>
                                                {tecnologies.url_git ? ('Ir ao Github') :
                                                    ('Em breve')}
                                            </span>
                                        </div>
                                    </a>

                                </div>
                            </div>
                            </div></div>
                             
                            </div>

                      

                        </div>

                    </>
                ))}


            </div>
        </div>


    );
}

export default Projetos