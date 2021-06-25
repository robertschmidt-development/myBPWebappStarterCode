import React from 'react'

const SchwerpunkteRow = props => {

    const {row, onEdit, onDelete} = props

    return(
        <>
            <tr>
                <td>{row.todo}</td>
                <td>{row.baureihen}</td>
                <td>{row.baujahre}</td>
                <td>{row.bemerkung}</td>
                {/* <td>{row.bilder}</td> */}
                <td><button type="button" className="btn btn-outline-warning" onClick={() => onEdit(row)}>Edit</button></td>
                <td><button type="button" className="btn btn-outline-danger" onClick={() => onDelete(row)}>Löschen</button></td>
            </tr>
        </>
    )
}

export default SchwerpunkteRow