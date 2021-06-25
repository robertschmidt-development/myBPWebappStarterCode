import React, {useState, useEffect, useRef} from 'react'
import { Status } from '../../enums/statusnames'
import FehlerAnzeige from './FehlerAnzeige/FehlerAnzeige'
import Pdf from '../../Pdf/Pdf'

const Auftrag = props => {

    const {auftrag, closeAuftrag, fehlerData, setShow} = props

    const [bildVid, setBildVid] = useState(auftrag.bildVid === "0" ? false : true);
    const bildVidRef = useRef()
    const [status, setStatus] = useState(auftrag.status)
    const statusRef = useRef()
    const [aufgabe, setAufgabe] = useState(auftrag.aufgaben)
    const aufgabeRef = useRef()
    const [notiz, setNotiz] = useState(auftrag.notiz)
    const notizRef = useRef()

    const getFehlerOfAuftrag = () => {
        const finIdentifier = auftrag.fin.substring(3,6) 
        const arr = []

        fehlerData.forEach(a => {
            const baureihen = a.baureihen.split(",").map(item => item.trim())
            baureihen.forEach(b => {
                const baureihenIndentifier = b.substring(1,4)
                if(isNaN(baureihenIndentifier)) arr.push({id: a.id, todo: a.todo, baujahre: a.baujahre, bemerkung: a.bemerkung})
                if(baureihenIndentifier === finIdentifier) arr.push({id: a.id, todo: a.todo, baujahre: a.baujahre, bemerkung: a.bemerkung})
            })
        });

        return arr
    }

    const changeStatus = e => {
        if(e.target.value === Status.AUFGABE){
            if(aufgabe.length === 0) {
                alert("Sie müssen zunächst Aufgaben auswählen.")
                return
            }
        }
        setStatus(e.target.value)
    }

    const changeCheckedAufgabe = (checked, fehlerId) => {
        if(checked){
            setAufgabe([...aufgabe, {fehler_id: fehlerId}])
        } else {
            setAufgabe(aufgabe.filter(obj => obj.fehler_id !== fehlerId))
        }
    }

    const createPdf = (created, auftragsnummer, kennzeichen, fin, erstzulassung, allAufgaben, aufgabe) => {
        const pdf = new Pdf()
        pdf.createPdf(created, auftragsnummer, kennzeichen, fin, erstzulassung, allAufgaben, aufgabe)
        pdf.savePdf(auftragsnummer)
    }

    useEffect(() => {
        bildVidRef.current = bildVid
        statusRef.current = status
        aufgabeRef.current = aufgabe
        notizRef.current = notiz
      }, [bildVid, status, aufgabe, notiz])

    useEffect(() => {
        // componentWillUnmount
        return () => {
            closeAuftrag(bildVidRef.current, auftrag.id, statusRef.current, aufgabeRef.current, notizRef.current)
        }
    }, [])



    return (<>
            <div style={{borderLeft:'1px solid #dee2e6', borderRight:'1px solid #dee2e6', borderBottom:'1px solid #dee2e6', padding:'30px'}}>
                <br />
                <div className="col text-center">
                    <button type="button" className="btn btn-light btn-block" onClick={() => setShow({comp: 'table', id: undefined})}>schließen</button>
                </div>
                <br />
                <h2>Service-Auftrag am {auftrag.created}</h2>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td className="pr-5">Auftragsnummer:</td>
                            <td>{auftrag.auftragsnummer}</td>
                        </tr>
                        <tr>
                            <td>Kennzeichen:</td>
                            <td>{auftrag.kennzeichen}</td>
                        </tr>
                        <tr>
                            <td>FIN:</td>
                            <td>{auftrag.fin}</td>
                        </tr>
                        <tr>
                            <td>Erstzulassung:</td>
                            <td>{auftrag.erstzulassung}</td>
                        </tr>
                    </tbody>
                </table>
                <br /><br />
                {getFehlerOfAuftrag() && getFehlerOfAuftrag().map((el, index) => <FehlerAnzeige key={index} fehler={el} aufgabe={aufgabe} changeCheckedAufgabe={changeCheckedAufgabe}/>)}
                <br />
                <div className="row">
                    <div className="col-3">
                        <div className="form-check">
                            <label className="form-check-label"><input type="checkbox" defaultChecked={bildVid} onChange={() => setBildVid(!bildVid)}/>&nbsp;&nbsp;Bilder/ Video gemacht</label>
                        </div>
                        <br />
                        <div className="form-group ml-3">
                            <select className="form-control" onChange={e => changeStatus(e)} value={status}>
                                <option value={Status.OFFEN}>Offen</option>
                                <option value={Status.NEUER_TERMIN}>Neuer Termin</option>
                                <option value={Status.AUFGABE}>Aufgabe</option>
                                <option value={Status.ERLEDIGT}>Erledigt</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-8">
                        <textarea className="form-control" rows="4" cols="50" placeholder="Notizen" value={notiz} onChange={e => setNotiz(e.target.value)}></textarea>
                    </div>
                </div>
                {status === Status.AUFGABE && 
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-outline-success btn-block ml-3 mt-3" 
                            onClick={() => createPdf(auftrag.created, auftrag.auftragsnummer, auftrag.kennzeichen, auftrag.fin, auftrag.erstzulassung, getFehlerOfAuftrag(), aufgabe)}>
                                PDF mit Aufgaben herunterladen</button>
                        </div>
                    </div>}
            </div>
            <br />
            <br />
            </>
    )
}

export default Auftrag