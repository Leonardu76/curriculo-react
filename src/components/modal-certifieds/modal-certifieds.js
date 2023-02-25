import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import './modal-certifieds.css'


function Certificados() {

    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }


    return (
        <div className='container' >
            <button className=' button-inter item9' onClick={handleShow}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Certificados
            </button>

            <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
                <Modal.Header closeButton>
                    <h1 className='modal-title'>Certificados</h1>
                </Modal.Header>
                <div className='col-md-12 content-certified'>
            
                <p><b>Análise e desenvolvimento de sistemas - Cruzeiro do Sul - 2023</b> </p>
            
            <a class="link" href="https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/"
                target="_blank" rel="noreferrer">
                <p><b> React do Zero a Maestria - Udemy - 28 Horas - Em andamento...</b></p>
            </a>

            <a class="link" href="https://www.udemy.com/course/php-orientado-a-objetos-para-iniciantes/"
                target="_blank" rel="noreferrer">
                <p><b> PHP Orientado a Objetos Completo - Udemy - 27 Horas - Em andamento...</b></p>
            </a>

            <a class="link" href="https://www.udemy.com/certificate/UC-9b041266-49ab-4694-86fa-57e9d7a0472f/"
                target="_blank" rel="noreferrer">
                <p><b>PHP do Zero a Maestria - Udemy - 33 Horas</b></p>
            </a>
            <a class="link" rel="noreferrer" href="https://certificates.digitalinnovation.one/C0A2EEC6" target="_blank">
                <p><b>Conhecendo funções e validação de dados com PHP - Digital Innovation One - 4 Horas</b></p>
            </a>
           
            <a class="link" rel="noreferrer" href="https://certificates.digitalinnovation.one/D8471A49" target="_blank">
                <p><b>Lógica de Programação Essencial - Digital Innovation One - 4 Horas </b></p>
            </a>
           
            <a class="link" rel="noreferrer"  href="https://www.udemy.com/certificate/UC-6a67b54a-cf46-4fa3-a997-457f963b292e/"
                target="_blank">
                <p> <b>Algoritmos e lógica de programação com Python 3 - Udemy - 12 Horas</b></p>
            </a>
           
            <a class="link" rel="noreferrer" href="https://www.linkedin.com/in/leonardo-oliveira-3b0446176/details/certifications/"
                    target="_blank">

                    Ver mais...
            </a>
            </div>            


            </Modal>
        </div>

    );
}

export default Certificados