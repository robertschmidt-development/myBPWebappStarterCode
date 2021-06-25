import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Menu } from './enums/menunames'
import OffeneAuftraege from './components/OffeneAuftraege/OffeneAuftraege'
import Erledigt from './components/Erledigt/Erledigt'
import NeuerTermin from './components/NeuerTermin/NeuerTermin'
import Aufgabe from './components/Aufgabe/Aufgabe'

const UserRoutes = props => {

    const {offeneAuftraege, erledigt, neuerTermin, aufgabe, fehlerData} = props

    return (
        <Switch>
            {/* <Route path={process.env.REACT_APP_ROUTERLINKS} exact component={Home} /> */}
            <Route path={process.env.REACT_APP_ROUTERLINKS + Menu.OFFENE_AUTRAEGE} component={() => (<OffeneAuftraege data={offeneAuftraege} fehlerData={fehlerData}/>)} />
            <Route path={process.env.REACT_APP_ROUTERLINKS + Menu.NEUER_TERMIN} component={() => (<NeuerTermin data={neuerTermin} fehlerData={fehlerData}/>)} />
            <Route path={process.env.REACT_APP_ROUTERLINKS + Menu.AUFGABE} component={() => (<Aufgabe data={aufgabe} fehlerData={fehlerData}/>)} />
            <Route path={process.env.REACT_APP_ROUTERLINKS + Menu.ERLEDIGT} component={() => (<Erledigt data={erledigt} fehlerData={fehlerData}/>)} />
        </Switch>
    )
}

export default UserRoutes