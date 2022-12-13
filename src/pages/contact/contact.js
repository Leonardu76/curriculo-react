import React from 'react'
import './contact.css'
import Menu from '../../components/menu/menu'


const Contact = () => {
    // const [data, setData] = useState([])

    let url = 'contact'



    return (
        <div className='col-md-12 row'>
            <div className='col-md-5'>
                <Menu url={url} />
            </div>
            <div className='home col-md-5'>

                <h1>Contact</h1>

            </div>        </div>

    )
}

export default Contact