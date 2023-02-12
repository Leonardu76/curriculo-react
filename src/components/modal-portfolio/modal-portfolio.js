import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './modal-portfolio.css'
import Pokedex from "../../assets/imgs/projects/img-project-pokedex.png"
import { VscGithubAlt } from "react-icons/vsc";
import { VscLinkExternal } from "react-icons/vsc";


function Port(props) {

    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    const { language } = props

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }


    return (
        <div className='container' >
          <button className='title-tec-spam' onClick={handleShow}>
            {language}
            </button>
       

            <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
                <Modal.Header closeButton>
                    <h1 className='modal-title'>React</h1>
                </Modal.Header>
                <div className='portfolio-div col-md-8'>

<div className='portfolio-div-header'>
    <h1 className='portfolio-title'>Port</h1>
</div>
<div className='portfolio-t'>
    <div className='portfolio-div-body row'>
        <div className='portfolio-background col-md-8'>
            <h3 className='portfolio-background-title'>Pokedex</h3>
            <div className='portfolio-img' >
                <img src={Pokedex} alt="" className='project-img' />
            </div>
        </div>


        <div className='portfolio-content col-md-4' >
            <div className='portfolio-content-title' >
                <h3>name</h3>
            </div>
            <div className='portfolio-description card' >
                Lorem ipsum dolor sit amet consec
                tetur adipisicing elit. Dolores, volupt
                dent eveniet exercitationem, nemo corrupti cupiditate?
            </div>
            <div className='portfolio-content-tecnologies'>

                <div className='div-tecnologies'>
                    <VscLinkExternal class='icon-tecnologies' />
                    <span className='resume-tec-spam'>Ir ao site</span>
                </div>

                <div className='div-tecnologies'>
                    <VscGithubAlt class='icon-tecnologies' />
                    <span className='resume-tec-spam'>Is ao Github</span>
                </div>

            </div>
        </div>

    </div>


    <div className='portfolio-div-body row'>
        <div className='portfolio-background col-md-8'>
            <h3 className='portfolio-background-title'>Pokedex</h3>
            <div className='portfolio-img' >
                <img src={Pokedex} alt="" className='project-img' />
            </div>
        </div>


        <div className='portfolio-content col-md-4' >
            <div className='portfolio-content-title' >
                <h3>name</h3>
            </div>
            <div className='portfolio-description card' >
                Lorem ipsum dolor sit amet consec
                tetur adipisicing elit. Dolores, volupt
                dent eveniet exercitationem, nemo corrupti cupiditate?
            </div>
            <div className='portfolio-content-tecnologies'>

                <div className='div-tecnologies'>
                    <VscLinkExternal class='icon-tecnologies' />
                    <span className='resume-tec-spam'>Ir ao site</span>
                </div>

                <div className='div-tecnologies'>
                    <VscGithubAlt class='icon-tecnologies' />
                    <span className='resume-tec-spam'>Is ao Github</span>
                </div>

            </div>
        </div>

    </div>

</div>
</div>
            </Modal>
</div>


    );
}

export default Port