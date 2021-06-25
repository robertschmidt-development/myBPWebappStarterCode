import React from 'react'


const AuftraegeRow = props => {

    const {row, openAuftrag} = props

    return(
        <>
            <tr onClick={() => openAuftrag(row.id)} style={{cursor:'pointer'}}>
                <td>{row.auftragsnummer}</td>
                <td>{row.kennzeichen}</td>
                <td>{row.fin}</td>
                <td>{row.erstzulassung}</td>
                <td>{row.created}</td>
                <td>{row.notiz.length < 7 ? row.notiz : row.notiz.substring(0, 7) + ' ...'}</td>
            </tr>
        </>
    )
}

export default AuftraegeRow