import React from 'react'

const ServiceBeraterNeuerButton = props => {

    const {onAdd} = props

    return <button type="button" className="btn btn-success btn-block" onClick={onAdd}>Neuer Service Berater</button>
}

export default ServiceBeraterNeuerButton
