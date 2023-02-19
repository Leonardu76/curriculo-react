// import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import './modal-portfolio.css'
// import Pokedex from "../../assets/imgs/projects/img-project-pokedex.png"
// import { VscGithubAlt } from "react-icons/vsc";
// import { useState } from 'react';
// import { VscLinkExternal } from "react-icons/vsc";
// import $ from 'jquery';


// function Port(props) {

//     const [data, setData] = useState([])
//     const [datae, setDatae] = useState([])

//     const [show, setShow] = useState(false);
//     const [fullscreen, setFullscreen] = useState(true);
//     const handleClose = () => setShow(false);
//     const { language, id } = props

//     function handleShow(breakpoint) {
//         setFullscreen(breakpoint);
//         setShow(true);
//     }
//     const React = [
//         {
//             "id": 1,
//             "nome": "Pokedex",
//             "img": Pokedex,
//             "tecnologies": "Lorem ipsum,Lorem ipsum, Lorem ipsum, Lorem ipsum ",
//             "descricao": "Quem nunca teve a curiosidade de saber qual é a segunda evolução de um pokemon? ou queria saber qual pokemon era aquele? Pensando nisso criei a Pokedex!.",
//             "url_git": "https://github.com/Leonardu76/Pokedex-React",
//             "url_site": "https://dapper-pie-836bf4.netlify.app/"
//         }
//     ]
//     const python = [
//         {
//             "id": 1,
//             "nome": "Em andamento",
//             "img": null,
//             "tecnologies": "Lorem ipsum,Lorem ipsum, Lorem ipsum, Lorem ipsum ",
//             "descricao": "Lorem ipsum dolor sit amet consec tetur adipisicing elit. Dolores, volupt dent eveniet exercitationem, nemo corrupti cupiditate?.",
//             "url_git": null,
//             "url_site": null

//         },
//         {
//             "id": 1,
//             "nome": "Em andamento",
//             "img": null,
//             "tecnologies": "Lorem ipsum,Lorem ipsum, Lorem ipsum, Lorem ipsum ",
//             "descricao": "Lorem ipsum dolor sit amet consec tetur adipisicing elit. Dolores, volupt dent eveniet exercitationem, nemo corrupti cupiditate?.",
//             "url_git": null,
//             "url_site": null

//         }

//     ]

//     const php = [
//         {
//             "id": 1,
//             "nome": "Em andamento",
//             "img": null,
//             "tecnologies": "Lorem ipsum,Lorem ipsum, Lorem ipsum, Lorem ipsum ",
//             "descricao": "Lorem ipsum dolor sit amet consec tetur adipisicing elit. Dolores, volupt dent eveniet exercitationem, nemo corrupti cupiditate?.",
//             "url_git": null,
//             "url_site": null
//         }
//     ]
// $( document ).ready(function() {
//     // const a = $('.margin-bottom').data('id')
//     // $('.title-tec-spam').html(a)
//     // console.log(a)  
//     $(".title-tec-spam").click(function () {
//         setData($('.displayNone').data('id'));
//         console.log(data)
// });
// });
//     // {data ==  'Python' &&
//     // setDatae(python)
//     // console.log(datae)
//     //   }



//     //   if(language == 'php'){
//     //     setData(projects.react)
//     //   }
//     return (
//         <div className='container' >
//             <button id="title-tec-spa" onClick={handleShow}></button>


//             <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
//                 <Modal.Header closeButton>
//                     <h1 className='modal-title'>React</h1>
//                 </Modal.Header>
//                 <div className='portfolio-div col-md-8'>
       

//                     {datae.map((project) => (
//                         <div className='portfolio-div-body row'>

//                             <div className='portfolio-background col-md-8'>
//                                 <h3 className='portfolio-background-title'>Pokedex</h3>
//                                 <div className='portfolio-img' >
//                                     <img src={Pokedex} alt="" className='project-img' />
//                                 </div>
//                             </div>


//                             <div className='portfolio-content col-md-4' >
//                                 <div className='portfolio-content-title' >
//                                     <h3>name</h3>
//                                 </div>
//                                 <div className='portfolio-description card' >
//                                     Lorem ipsum dolor sit amet consec
//                                     tetur adipisicing elit. Dolores, volupt
//                                     dent eveniet exercitationem, nemo corrupti cupiditate?
//                                 </div>
//                                 <div className='portfolio-content-tecnologies'>

//                                     <div className='div-tecnologies'>
//                                         <VscLinkExternal class='icon-tecnologies' />
//                                         <span className='resume-tec-spam'>Ir ao site</span>
//                                     </div>

//                                     <div className='div-tecnologies'>
//                                         <VscGithubAlt class='icon-tecnologies' />
//                                         <span className='resume-tec-spam'>Is ao Github</span>
//                                     </div>

//                                 </div>
//                             </div>

//                         </div>
//                     ))}


//                 </div>
//             </Modal>
//         </div>


//     );
// }

// export default Port