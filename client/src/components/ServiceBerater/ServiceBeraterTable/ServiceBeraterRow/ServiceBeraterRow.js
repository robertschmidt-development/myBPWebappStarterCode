import React from 'react'

const ServiceBeraterRow = props => {

    const {row, onEdit, onDelete} = props

    return(
        <>
            <tr>
                <td>{row.vorname}</td>
                <td>{row.name}</td>
                <td>{row.standort}</td>
                <td>{row.kuerzel}</td>
                <td>{row.email}</td>
                <td><button type="button" className="btn btn-outline-warning" onClick={() => onEdit(row)}>Edit</button></td>
                <td><button type="button" className="btn btn-outline-danger" onClick={() => onDelete(row)}>Löschen</button></td>
            </tr>
        </>
    )
}

export default ServiceBeraterRow