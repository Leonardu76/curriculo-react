import React from 'react'
import './resume.css'
import Menu from '../../components/menu/menu'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';


const Resume = () => {
    // const [data, setData] = useState([])

    let url = 'resume'



    return (
        <>
        <div>
        <Menu url={url} />
    </div>
        <div className='container'>
        <div className=' content-resume'>
         
            <div className='home col-md-11'>

                <h1 className='content-resume-title'>Resume</h1>

                <Timeline >
                    <TimelineItem
                        key="001"
                        dateText="12/2022 – Present"
                    >
                        <h3 className='resume-title'>Desenvolvedor Web Jr</h3>
                        <h4 className='resume-title'>Construsite Brasil</h4>
                        <p className='resume-description'>
                        Programação, alteração e correção de sites em PHP.
                        </p>
                    
                   
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="08/2022 – 12/2022">
                        <h3  className='resume-title'>Estágiario de Desenvolvimento Web</h3>
                        <h4 className='resume-title'>Construsite Brasil</h4>
                        <p className='resume-description'>
                        Programação, alteração e correção de sites em PHP.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateText="08/2022 – 12/2022">
                        <h3 className='resume-title'>Whobots</h3>
                        <h4 className='resume-title'>Desenvolvedor Python</h4>
                        <p className='resume-description'>
                            Auxilio no desenvolvimento de chatbots para o Telegram.
                        </p>
                    </TimelineItem>

                </Timeline>
            </div>
        </div>
        </div>
        </>
    )
}

export default Resume