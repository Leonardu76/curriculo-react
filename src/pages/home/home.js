import React from 'react'
import './home.css'
import Menu from '../../components/menu/menu'
import Photo from "../../assets/imgs/perfil.jpg"

import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineWhatsApp } from "react-icons/ai";


const Home = () => {
    // const [data, setData] = useState([])

    let url = 'home'


    return (           

        <div class='col-md-12 row'>
            <div class='col-md-3'>
                <Menu url={url} />
            </div>
            <div class='content-home col-md-8'>
                <div class='h1 line '>
                    <h1 class='col-md-3'>Olá, eu sou <strong>Leonardo Souza!</strong></h1>
                </div>
                <div class='content-home row'>
                    <div class='content-img-home col-md-2'>
                        <div class="box-img-home img-fluid" style={{ backgroundImage: "url(" + Photo + ")" }}>
                            <img class='photo-home' src="" alt="" />
                        </div>
                    </div>
                    <div class='col-md-7'>
                        <p class='content-resume-home'>
                            Desenvolvedor Web Jr <br />
                            Sou um estudante em constante aprendizado <hr />
                            Belo Horizonte
                        </p>
                        <div class='redes-home'>
                            <a target={'_blank'}  rel="noreferrer" href='https://www.linkedin.com/in/leonardo-oliveira-3b0446176/' class='icon-border'>
                                <SlSocialLinkedin class='icon' />
                            </a>

                            <a target={'_blank'} rel="noreferrer" href='https://github.com/Leonardu76' class='icon-border'>
                                <VscGithubAlt class='icon' />
                            </a>

                            <a target={'_blank'}  rel="noreferrer" href='https://api.whatsapp.com/send?phone=5531985808502' class='icon-border'>
                                <AiOutlineWhatsApp class='icon' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Home