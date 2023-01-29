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
                <div className='col-md-12 about-container'>



                    <div className='about col-md-5'>

                        <h1 className='about-title'>Sobre mim</h1>
                        <div className='about-content'>
                            <p>Sou Leonardo Oliveira Souza, tenho 25 anos.
                                <br />
                                Sou Desenvolvedor Web Jr.</p>
                            <p>  Faço Análise e Desenvolvimento de Sistemas pela Cruzeiro do Sul.
                            </p>
                            </div>

                        <div className='nav about-btns'>
                            <div className='com-md-6'>
                            <Habilidades />
                            </div>

                            <div className='com-md-6'>
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