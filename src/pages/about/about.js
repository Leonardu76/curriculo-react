import React from 'react'
import './about.css'
import Menu from '../../components/menu/menu'
import Teste from '../../components/modal-about/modal-about'


const About = () => {
    // const [data, setData] = useState([])

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
                <p>Meu nome é Leonardo Oliveira Souza, tenho 24 anos. <br />
                Sou Desenvolvedor Web Jr.</p>
                <p>  Faço Análise e Desenvolvimento de Sistemas pela Cruzeiro do Sul. <br />
                    Venho estudando programação há pouco mais de um ano e estou sempre   me aprimorando.</p>
                </div>
                <div className='col-md-12'>
                <Teste/>

                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default About