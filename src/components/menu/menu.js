import React from 'react'
import './menu.css'
import { Link } from "react-router-dom"
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Menu = (props) => {

    const { url } = props



    return (
        <div className="menu-card col-md-2">


            <div className="menu-ul">
                <Link to={"/"} className={url === 'home' ? ('active ') : ('menu-li')}>
                    <span>Início</span>
                </Link>
                <div>
                    <Link to={"/about"} className={url === 'about' ? ('active') : ('menu-li')}>
                        <span>Sobre</span>
                    </Link>
                </div>
                <div>
                    <Link to={"/resume"} className={url === 'resume' ? ('active') : ('menu-li')}>
                        <span>Experiências</span>
                    </Link>
                </div>
                <div>
                    <Link to={"/portfolio"} className={url === 'portfolio' ? ('active') : ('menu-li')}>
                        <span>Projetos</span>
                    </Link>
                </div>

                <div>
                    <Link to={"/contact"} className={url === 'contact' ? ('active') : ('menu-li')} >
                        <span>Contato</span>
                    </Link>
                </div>
            </div>

            <div class='redes-menu'>
                            <a target={'_blank'}  rel="noreferrer" href='https://www.linkedin.com/in/leonardo-oliveira-3b0446176/' class='icon-border-menu'>
                                <SlSocialLinkedin class='icon' />
                            </a>

                            <a target={'_blank'} rel="noreferrer" href='https://github.com/Leonardu76' class='icon-border-menu'>
                                <VscGithubAlt class='icon' />
                            </a>

                            <a target={'_blank'}  rel="noreferrer" href='https://api.whatsapp.com/send?phone=5531985808502&text=Olá! Vim através do site' class='icon-border-menu'>
                                <AiOutlineWhatsApp class='icon' />
                            </a>
                        </div>
        </div>




    )
}

export default Menu