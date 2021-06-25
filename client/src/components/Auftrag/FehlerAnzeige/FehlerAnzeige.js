import React from 'react'

const FehlerAnzeige = props => {

    const {fehler, aufgabe, changeCheckedAufgabe} = props

    const isAufgabeChecked = () => {
        // impliziert, dass uncheck das ganze object entfernt. Ist es vorhanden, ist es auch gecheckt, sonst nicht
        return aufgabe.some(obj => obj.fehler_id === fehler.id)
    }

    return (
            <><input type="checkbox" checked={isAufgabeChecked()} onChange={() => changeCheckedAufgabe(!isAufgabeChecked(), fehler.id)}/><label style={{fontSize:'0.8em'}}>&nbsp;Aufgabe (pdf)</label>
                <h5>{fehler.todo}</h5>
                <table>
                    <tbody>
                        <tr>
                            <td style={{paddingRight:'105px'}}>Baujahre:</td>
                            <td>{fehler.baujahre}</td>
                        </tr>
                        <tr>
                            <td>Bemerkung:</td>
                            <td>{fehler.bemerkung}</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
            </>
    )
}

export default FehlerAnzeige