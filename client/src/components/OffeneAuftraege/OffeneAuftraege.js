import React from 'react'
import Auftraege from '../Auftraege/Auftraege'

const OffeneAuftraege = props => {

    const {data, fehlerData} = props
    
    return <Auftraege data={data} fehlerData={fehlerData}/>
}

export default OffeneAuftraege