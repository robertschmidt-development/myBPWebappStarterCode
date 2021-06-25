import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { Menu } from '../../enums/menunames'

const NavAdmin = () => {

    const location = useLocation()

    const activeTab = (name) => {
        let loc = location.pathname
        if (loc.slice(-1) === '/') loc = loc.substring(0, loc.length - 1);
        return loc === process.env.REACT_APP_ROUTERLINKS + name ? 'nav-link active' : 'nav-link'
    }

    return (
        <ul className="nav nav-tabs nav-justified" role="tablist">
             <li className="nav-item">
                <Link to={process.env.REACT_APP_ROUTERLINKS + Menu.SCHWERPUNKTE} className={activeTab(Menu.SCHWERPUNKTE)}>Schwerpunkte</Link>
            </li>
            <li className="nav-item">
                <Link to={process.env.REACT_APP_ROUTERLINKS + Menu.SERVICE_BERATER} className={activeTab(Menu.SERVICE_BERATER)}>Service-Berater</Link>
            </li>
      </ul>
    )
}

export default NavAdmin

