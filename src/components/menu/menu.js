import React from 'react'
import './menu.css'
import { Link } from "react-router-dom"


const Menu = (props) => {
    // const [data, setData] = useState([])

    const { url } = props



    return (
            <div className="menu-card col-md-2">
 

                <div className="menu-ul">
                    <Link to={"/"}  className={url === 'home' ? ('active ') : ('menu-li')}>
                        <span>Home</span>
                    </Link>
                    <div>
                        <Link to={"/about"}  className={url === 'about' ? ('active') : ('menu-li')}>
                            <span>About</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/resume"}  className={url === 'resume' ? ('active') : ('menu-li')}>
                            <span>Resume</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/portfolio"}  className={url === 'portfolio' ? ('active') : ('menu-li')}>
                            <span>Portfolios</span>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/contact"} className={url === 'contact' ? ('active') : ('menu-li')} >
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>
                {/* <div class="menu">
    <ul>
        <li class="react-tabs__tab" role="tab" id="react-tabs-0" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-1"><span class="menu_content">Home</span></li>
        <li class="react-tabs__tab" role="tab" id="react-tabs-2" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-3"><span class="menu_content">About</span></li>
        <li class="react-tabs__tab react-tabs__tab--selected" role="tab" id="react-tabs-4" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-5"
        ><span class="menu_content">Portfolio</span></li>
        <li class="react-tabs__tab" role="tab" id="react-tabs-6" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-7"><span class="menu_content">News</span></li>
        <li class="react-tabs__tab" role="tab" id="react-tabs-8" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-9"><span class="menu_content"> Contact</span></li>
    </ul>
</div> */}
                </div>


              

    )
}

export default Menu