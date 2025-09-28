import React from 'react'
import './about.css'
import Menu from '../../components/menu/menu'
import Habilidades from '../../components/modal-about/modal-about'


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
                          Formado em Análise e Desenvolvimento de Sistemas, com sólida experiência no desenvolvimento de soluções web. <br />

Atuação com PHP/Laravel, React.js, Vue.js, criando aplicações escaláveis e interativas.
                            </div>

                        <div className='nav about-btns'>
                            <div className=''>
                            <Habilidades />
                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About