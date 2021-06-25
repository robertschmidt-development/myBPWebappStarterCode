import React from 'react'
import Auftraege from '../Auftraege/Auftraege'

const Erledigt = props => {

    const {data, fehlerData} = props
    
    return <Auftraege data={data} fehlerData={fehlerData} erledigt={true}/>
}

export default Erledigt