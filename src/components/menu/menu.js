import React from 'react'
import './menu.css'
import { Link } from "react-router-dom"


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

        </div>




    )
}

export default Menu