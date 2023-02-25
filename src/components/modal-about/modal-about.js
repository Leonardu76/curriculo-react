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
import jquery from "../../assets/imgs/skills/jquery.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"


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
                slidesToScroll: 1,

              },
            },
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,

              },
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

              },
            },
            ],
    };

    const tecnologies = [
        {
            "id": 1,
            "nome": "React",
            "img": ReactImg,
            "percentage": "65%"
        },
        {
            "id": 2,
            "nome": "PHP",
            "img": Php,
            "percentage": "85%"

        },
        {

            "id": 3,
            "nome": "Python",
            "img": Phyton,
            "percentage": "65%"

        },
        {

            "id": 4,
            "nome": "Laravel",
            "img": Laravel,
            "percentage": "45%"

        }
        ,
        {

            "id": 6,
            "nome": "Django",
            "img": Django,
            "percentage": "65%"

        },
        {

            "id": 7,
            "nome": "Mysql",
            "img": Mysql,
            "percentage": "85%"

        },
        {

            "id": 8,
            "nome": "Mongo",
            "img": Mongo,
            "percentage": "65%"

        }
        ,
        {

            "id": 9,
            "nome": "Git",
            "img": Git,
            "percentage": "85%"

        },
        {
            "id": 10,
            "nome": "Jquery",
            "img": jquery,
            "percentage": "45%"
        },
    ]
    const url = '../projects/'
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


                        {tecnologies.map((tecnologie) => (                
<>                    <Link to={ tecnologie.nome == 'PHP' || tecnologie.nome == 'Laravel' ? url+'php' : tecnologie.nome == 'Python' || tecnologie.nome == 'Django' ?  url+'python'  : tecnologie.nome == 'React' ?  url+'react' : null} >                    

                            <div className='div-img content-img-home'>
                                <div className='box-img-home' style={{ backgroundImage: "url(" + tecnologie.img + ")" }}>
                                    <div className="shadow"></div>
                                    <div className="label2">
                                        <div className="info">
                                            <div className="main">{tecnologie.nome}</div>
                                            <div className="progress-div">
                                                <div className="progress-percentage">{tecnologie.percentage}</div>
                                                <div className="progress-fuel">
                                                <span className={ tecnologie.percentage == '85%' ? 'progress-full' : tecnologie.percentage == '65%' ? 'progress-full-2' : ('progress-full-3')}></span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            </>  ))}
                        </Slider>
                    </div>




                </div>

            </Modal>
        </div>

    );
}

export default Habilidades