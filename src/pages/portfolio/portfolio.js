import React from 'react'
import './portfolio.css'
import Menu from '../../components/menu/menu'
import ReactImg from "../../assets/imgs/skills/react.png"
import Php from "../../assets/imgs/skills/php.png"
import Vue from "../../assets/imgs/skills/vue.jpg"
import { Link } from "react-router-dom"

const Portfolio = () => {


    let url = 'portfolio'
    const urlP = "../projects/"

    const cat = [
        {
            "id": 1,
            "nome": "React.js",
            "img": ReactImg,
        },
        {
            "id": 2,
            "nome": "PHP",
            "img": Php,
        },
        {

            "id": 3,
            "nome": "Vue.js",
            "img": Vue,
        }
    ]

    return (
        <>
            <div>
                <Menu url={url} />
            </div>
            <div className='container'>
                <div className='div-project row'>
                    <h1 className='contact-title'>Projetos</h1>


                    {cat.map((tecnologies) => (
                        <>
                            <div className='col-md-6 margin-bottom ' >
                                <div className='div-project-border'>
                                    <Link to={urlP + tecnologies.nome} >

                                        <div className='img-div-project'>

                                            <div className='img-div-background' style={{ backgroundImage: "url(" + tecnologies.img + ")" }}>
                                                <button className='title-tec-spam'  >
                                                    {tecnologies.nome}
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </>

                    ))}




                </div>
            </div>
        </>
    )
}

export default Portfolio

