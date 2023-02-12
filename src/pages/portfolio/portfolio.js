import React from 'react'
import './portfolio.css'
import Menu from '../../components/menu/menu'
import Port from '../../components/modal-portfolio/modal-portfolio'
import ReactImg from "../../assets/imgs/skills/react.png"
import Php from "../../assets/imgs/skills/php.png"



const Portfolio = () => {
    // const [data, setData] = useState([])


    let url = 'portfolio'


    return (
        <>
            <div>

                <Menu url={url} />
            </div>
            <div className='container'>
                <div className='div-project row'>
                    <div className='col-md-6 margin-bottom'>
                        <div className='div-project-border'>
                            <div class="borderTopLeft"></div>
                            <div class="borderTopRight"></div>

                            <div className='img-div-project'>

                                <div className='img-div-background' style={{ backgroundImage: "url(" + ReactImg + ")" }}>
                                    <Port language={'react'} />
                                </div>
                            </div>

                            <div class="borderBottomLeft"></div>
                            <div class="borderBottomRight"></div>

                        </div>

                    </div>
                    <div className='col-md-6 margin-bottom'>
                        <div className='div-project-border'>
                            <div class="borderTopLeft"></div>
                            <div class="borderTopRight"></div>

                            <div className='img-div-project'>

                                <div className='img-div-background' style={{ backgroundImage: "url(" + Php + ")" }}>
                                    <Port language={'Php'} />
                                </div>
                            </div>

                            <div class="borderBottomLeft"></div>
                            <div class="borderBottomRight"></div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio