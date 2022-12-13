import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import './modal-about.css'
import Git from "../../assets/imgs/skills/git.png"
import Mongo from "../../assets/imgs/skills/mongo.jpg"
import Mysql from "../../assets/imgs/skills/mySQL.png"
import Phyton from "../../assets/imgs/skills/python.jpg"
import ReactImg from "../../assets/imgs/skills/react.png"
import Django from "../../assets/imgs/skills/django.png"
import Laravel from "../../assets/imgs/skills/laravel.png"
import Php from "../../assets/imgs/skills/php.png"
import $ from 'jquery'



function Teste() {

    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    $(document).ready(function () {
        $(".option").click(function () {
            $(".option").removeClass("active");
            $(this).addClass("active");
        });
    });
    return (
        <div className='container' >
            <button className=' button-inter item9' onClick={handleShow}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
Habilidades
            </button>

            <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
                <Modal.Header closeButton>
                    <h1 className='modal-title'>Habilidades</h1>
                </Modal.Header>
                <div className='modal-body container'>
                    <div className="options">
                        <div className="option active " style={{ backgroundImage: "url(" + Django + ")" }}>
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="info">
                                    <div className="main">Django</div>
                                    <div className="progress-div">
                                        <div className="progress-percentage">85%</div>
                                        <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="option" style={{ backgroundImage: "url(" + Phyton + ")" }}>
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="info">
                                    <div className="main">Phyton</div>
                                    <div className="progress-div">
                                        <div className="progress-percentage">85%</div>
                                        <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="option" style={{ backgroundImage: "url(" + ReactImg + ")" }}>
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="info">
                                    <div className="main">React</div>
                                    <div className="progress-div">
                                        <div className="progress-percentage">85%</div>
                                        <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ backgroundImage: "url(" + Php + ")" }}>
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="info">
                                    <div className="main">PHP</div>
                                    <div className="progress-div">
                                        <div className="progress-percentage">85%</div>
                                        <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="option" style={{ backgroundImage: "url(" + Laravel + ")" }}>
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="info">
                                    <div className="main">Laravel</div>
                                    <div className="progress-div">
                                        <div className="progress-percentage">85%</div>
                                        <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="option" style={{ backgroundImage: "url(" + Mysql + ")" }}>
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="info">
                                    <div className="main">Mysql</div>
                                    <div className="progress-div">
                                        <div className="progress-percentage">85%</div>
                                        <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ backgroundImage: "url(" + Mongo + ")" }}>
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="info">
                                    <div className="main">Mongo</div>
                                    <div className="progress-div">
                                        <div className="progress-percentage">85%</div>
                                        <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ backgroundImage: "url(" + Git + ")" }}>
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="info">
                                    <div className="main">Git</div>
                                    <div className="progress-div">
                                        <div className="progress-percentage">85%</div>
                                        <div className="progress-fuel"><span class="progress-full" style={{ width: "65%" }}></span></div>
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

export default Teste