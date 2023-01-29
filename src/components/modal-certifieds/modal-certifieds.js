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
                <div className='col-md-10 content-certified'>
                   
                </div>

            </Modal>
        </div>

    );
}

export default Certificados