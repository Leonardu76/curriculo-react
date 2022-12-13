import React from 'react'
import './portfolio.css'
import Menu from '../../components/menu/menu'



const Portfolio = () => {
    // const [data, setData] = useState([])

   
    let url = 'portfolio'


    return (
        <div className='col-md-12 row'>
            <div className='col-md-5'>
                <Menu url={url} />
            </div>
            <div className='home col-md-5'>

                <h1>Port</h1>

            </div>        </div>

    )
}

export default Portfolio