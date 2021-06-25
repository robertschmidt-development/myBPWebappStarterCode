import React, { useState } from 'react'
import Auftraege from '../Auftraege/Auftraege'

const Aufgabe = props => {

    const {data, fehlerData} = props
    
    return <> 
                <Auftraege data={data} fehlerData={fehlerData} erledigt={true}/>
            </>
}

export default Aufgabe