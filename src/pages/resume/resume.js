import React from 'react'
import './resume.css'
import Menu from '../../components/menu/menu'


const Resume = () => {
    // const [data, setData] = useState([])

    let url = 'resume'



    return (
        <div className='col-md-12 row'>
            <div className='col-md-5'>
                <Menu url={url} />
            </div>
            <div className='home col-md-5'>

                <h1>Resume</h1>

            </div>        </div>

    )
}

export default Resume