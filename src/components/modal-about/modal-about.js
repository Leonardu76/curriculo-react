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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


function Habilidades() {

    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
              },
            },
            ],
    };

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
                <div className='modal-body col-md-10'>
                <div>
                        <Slider {...settings}>


                            <div className='div-img content-img-home'>
                                <div className='box-img-home' style={{ backgroundImage: "url(" + Php + ")" }}>
                                    <div className="shadow"></div>
                                    <div className="label2">
                                        <div className="info">
                                            <div className="main">PHP</div>
                                            <div className="progress-div">
                                                <div className="progress-percentage">85%</div>
                                                <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='div-img content-img-home'>
                                <div className='box-img-home' style={{ backgroundImage: "url(" + Laravel + ")" }}>
                                    <div className="shadow"></div>
                                    <div className="label2">
                                        <div className="info">
                                            <div className="main">Laravel</div>
                                            <div className="progress-div">
                                                <div className="progress-percentage">85%</div>
                                                <div className="progress-fuel"><span className="progress-full" style={{ width:'20px' }}></span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='div-img content-img-home'>
                                <div className='box-img-home' style={{ backgroundImage: "url(" + ReactImg + ")" }}>
                                    <div className="shadow"></div>
                                    <div className="label2">
                                        <div className="info">
                                            <div className="main">React</div>
                                            <div className="progress-div">
                                                <div className="progress-percentage">85%</div>
                                                <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='div-img content-img-home'>
                                <div className='box-img-home' style={{ backgroundImage: "url(" + Phyton + ")" }}>
                                    <div className="shadow"></div>
                                    <div className="label2">
                                        <div className="info">
                                            <div className="main">Phyton</div>
                                            <div className="progress-div">
                                                <div className="progress-percentage">85%</div>
                                                <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='div-img content-img-home'>
                                <div className='box-img-home' style={{ backgroundImage: "url(" + Django + ")" }}>
                                    <div className="shadow"></div>
                                    <div className="label2">
                                        <div className="info">
                                            <div className="main">Django</div>
                                            <div className="progress-div">
                                                <div className="progress-percentage">85%</div>
                                                <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='div-img content-img-home'>
                                <div className='box-img-home' style={{ backgroundImage: "url(" + Mysql + ")" }}>
                                    <div className="shadow"></div>
                                    <div className="label2">
                                        <div className="info">
                                            <div className="main">Mysql</div>
                                            <div className="progress-div">
                                                <div className="progress-percentage">85%</div>
                                                <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='div-img content-img-home'>
                                <div className='box-img-home' style={{ backgroundImage: "url(" + Mongo + ")" }}>
                                    <div className="shadow"></div>
                                    <div className="label2">
                                        <div className="info">
                                            <div className="main">Mongo</div>
                                            <div className="progress-div">
                                                <div className="progress-percentage">85%</div>
                                                <div className="progress-fuel"><span className="progress-full" style={{ width: "65%" }}></span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='div-img content-img-home'>
                                <div className='box-img-home' style={{ backgroundImage: "url(" + Git + ")" }}>
                                    <div className="shadow"></div>
                                    <div className="label2">
                                        <div className="info">
                                            <div className="main">Git</div>
                                            <div className="progress-div">
                                                <div className="progress-percentage">75%</div>
                                                <div className="progress-fuel"><span className="progress-full" style={{ width: "45%" }}></span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>




                </div>

            </Modal>
        </div>

    );
}

export default Habilidades