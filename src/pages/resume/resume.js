import React from 'react'
import './resume.css'
import Menu from '../../components/menu/menu'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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

                <VerticalTimeline >
                    <VerticalTimelineElement
                        key="001"
                        dateText="12/2022 – Present"
                    >
                        <h3 className='resume-title'>Desenvolvedor Web Jr</h3>
                        <h4 className='resume-title'>Construsite Brasil</h4>
                        <p className='resume-description'>
                        Programação, alteração e correção de sites em PHP.
                        </p>
                    
                   
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        key="002"
                        dateText="08/2022 – 12/2022">
                        <h3  className='resume-title'>Estágiario de Desenvolvimento Web</h3>
                        <h4 className='resume-title'>Construsite Brasil</h4>
                        <p className='resume-description'>
                        Programação, alteração e correção de sites em PHP.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        key="003"
                        dateText="08/2022 – 12/2022">
                        <h3 className='resume-title'>Whobots</h3>
                        <h4 className='resume-title'>Desenvolvedor Python</h4>
                        <p className='resume-description'>
                            Auxilio no desenvolvimento de chatbots para o Telegram.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
   
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
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