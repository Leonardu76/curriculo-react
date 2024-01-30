import React from 'react'
import './about.css'
import Menu from '../../components/menu/menu'
import Habilidades from '../../components/modal-about/modal-about'
import Certificados from '../../components/modal-certifieds/modal-certifieds'


const About = () => {

    let url = 'about'



    return (
        <>
            <div>
                <Menu url={url} />
            </div>
            <div className='container'>
                <div className='about-container'>



                    <div className='about col-md-10'>

                        <h1 className='about-title'>Sobre mim</h1>
                        <div className='about-content'>
                            Sou Leonardo Oliveira Souza, tenho 26 anos,
                                e sou Desenvolvedor Web .
                             Formado em Análise e Desenvolvimento de Sistemas pela Cruzeiro do Sul. 
                            Possuo habilidades práticas e teóricas na área de desenvolvimento web, capacitando-me para criar soluções eficientes e inovadoras.
                            </div>

                        <div className='nav about-btns'>
                            <div className=''>
                            <Habilidades />
                            </div>

                            <div className=''>
                            <Certificados/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About