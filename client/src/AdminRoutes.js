import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Menu } from './enums/menunames'
import ServiceBeraterFunctions from './components/ServiceBerater/ServiceBeraterFunctions'
import SchwerpunkteFunctions from './components/Schwerpunkte/SchwerpunkteFunctions'

const AdminRoutes = props => {

    const {fehlerData, beraterData} = props

    return (
        <Switch>
            {/* <Route path={process.env.REACT_APP_ROUTERLINKS} exact component={Home} /> */}
            <Route disabled path={process.env.REACT_APP_ROUTERLINKS + Menu.SCHWERPUNKTE} component={() => (<SchwerpunkteFunctions data={fehlerData}/>)} />
            <Route path={process.env.REACT_APP_ROUTERLINKS + Menu.SERVICE_BERATER} component={() => (<ServiceBeraterFunctions data={beraterData}/>)} />
        </Switch>
    )
}

export default AdminRoutes