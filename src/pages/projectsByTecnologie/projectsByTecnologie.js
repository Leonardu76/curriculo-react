import React from 'react';
import './projectsByTecnologie.css'
import Pokedex from "../../assets/imgs/projects/img-project-pokedex.png"
import Contrucao from "../../assets/imgs/projects/img_em_construcao.png"
import { VscGithubAlt } from "react-icons/vsc";
import { useState, useEffect } from 'react';
import { VscLinkExternal } from "react-icons/vsc";
import { useParams, Link } from "react-router-dom";

function Projetos() {

   
    const { name } = useParams()
    const [project] = useState([name])
    const [projeto, setProjeto] = useState([])



    const see = () => {
        if (project[0] === 'python') {
            setProjeto([
                {
                    "id": 1,
                    "nome": "Em andamento",
                    "img": Contrucao,
                    "tecnologies": "Lorem ipsum,Lorem ipsum, Lorem ipsum, Lorem ipsum ",
                    "descricao": "Lorem ipsum dolor sit amet consec tetur adipisicing elit. Dolores, volupt dent eveniet exercitationem, nemo corrupti cupiditate?.",
                    "url_git": null,
                    "url_site": null

                },
                {
                    "id": 1,
                    "nome": "Em andamento",
                    "img": Contrucao,
                    "tecnologies": "Lorem ipsum,Lorem ipsum, Lorem ipsum, Lorem ipsum ",
                    "descricao": "Lorem ipsum dolor sit amet consec tetur adipisicing elit. Dolores, volupt dent eveniet exercitationem, nemo corrupti cupiditate?.",
                    "url_git": null,
                    "url_site": null

                }

            ])
        } else if (project[0] === 'php') {
            setProjeto([
                {
                    "id": 1,
                    "nome": "Em andamento",
                    "img": Contrucao,
                    "tecnologies": "Lorem ipsum,Lorem ipsum, Lorem ipsum, Lorem ipsum ",
                    "descricao": "Lorem ipsum dolor sit amet consec tetur adipisicing elit. Dolores, volupt dent eveniet exercitationem, nemo corrupti cupiditate?.",
                    "url_git": null,
                    "url_site": null
                }
            ])
        } else if (project[0] === 'react') {
            setProjeto([
                {
                    "id": 1,
                    "nome": "Pokedex",
                    "img": Pokedex,
                    "tecnologies": "React.js, Fetch API, Styled Components",
                    "descricao": "Quem nunca quis saber o nome daquele pokemon? Ou saber da próxima evolução dele? Pensando nisso criei a Pokedex!",
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
            <div className='portfolio-div col-md-8'>


                {projeto.map((tecnologies) => (
                    <>
                        <div className='portfolio-div-body row'>
                            <div className='portfolio-background col-md-8'>

                                <h3 className='portfolio-background-title'>{tecnologies.nome}</h3>
                                <div className='portfolio-img' >
                                    <img src={tecnologies.img} alt="" className='project-img' />
                                </div>
                            </div>


                            <div className='portfolio-content col-md-4' >
                                <div className='portfolio-content-title' >
                                    <p>{tecnologies.tecnologies}</p>
                                </div>
                                <div className='portfolio-description card' >
                                    {tecnologies.descricao}
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

                        </div>

                    </>
                ))}


            </div>
        </div>


    );
}

export default Projetos