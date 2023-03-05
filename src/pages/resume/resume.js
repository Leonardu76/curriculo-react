import React from 'react'
import './resume.css'
import Menu from '../../components/menu/menu'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineHomeWork, MdOutlineWorkOutline } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import Curriculo from "../../assets/pdf/Leonardo Souza.pdf"

const Resume = () => {

    let url = 'resume'



    return (
        <>
        <div>
        <Menu url={url} />
    </div>
        <div className='container'>
        <div className=' content-resume row'>
        <div className='col-md-2 btn-resume-content'>
                <button className=' button-inter item9 btn-resume' >
                <a href={Curriculo} download style={{color: "white"}}>
                <AiOutlineDownload/>
                </a>
              
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <span className='resume-text-spam'>Baixar currículo</span>

            </div>
            <div className='home col-md-10'>

                <h1 className='content-resume-title'>Experiências</h1>
              
                <VerticalTimeline >
                    <VerticalTimelineElement
                        icon={<MdOutlineWorkOutline />}
                        date="12/2022 – Present">
                        <h3 className='resume-title'>Desenvolvedor Web Jr</h3>
                        <h4 className='resume-title'>Construsite Brasil</h4>
                        <p className='resume-description'>
                        Programação, alteração e correção de sites em PHP.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        icon={<MdOutlineWorkOutline />}
                        date="08/2022 – 12/2022">
                        <h3  className='resume-title'>Estagiário em Desenvolvimento Web</h3>
                        <h4 className='resume-title'>Construsite Brasil</h4>
                        <p className='resume-description'>
                        Programação, alteração e correção de sites em PHP.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        icon={<MdOutlineHomeWork />}
                        date="08/2022 – 12/2022">
                        <h3 className='resume-title'>Whobots</h3>
                        <h4 className='resume-title'>Desenvolvedor Python</h4>
                        <p className='resume-description'>
                            Auxílio no desenvolvimento de chatbots para o Telegram.
                        </p>
                    </VerticalTimelineElement>
                
                </VerticalTimeline>
            </div>
        </div>
        </div>
        </>
    )
}

export default Resume