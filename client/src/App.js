import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { Status } from './enums/statusnames'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import NavAdmin from './components/NavAdmin/NavAdmin'
import NavUser from './components/NavUser/NavUser'
import wackenhut from './Pdf/wackenhut.png'
import { getInitialDataAction } from './actions/data'
import { getFehlerDataAction } from './actions/fehler'
import { getServiceBerater } from './actions/berater'


const App = () => {

    const [loggedIn, setLoggedIn] = useState(true)

    // const testData = [
    //     {id: "1", auftragsnummer: "12345", kennzeichen: "AB-123", fin: 'WDD2042461F2245071', erstzulassung: '12.12.1999', created: '12.12.2020', status: Status.OFFEN, bildVid: "0", aufgaben:[{fehler_id: "2"}, {fehler_id: "4"}], notiz:"hand"},
    //     {id: "2", auftragsnummer: "22345", kennzeichen: "CD-123", fin: 'WDD1182461F2245071', erstzulassung: '11.12.1999', created: '11.12.2020', status: Status.OFFEN, bildVid: "1", aufgaben:[], notiz: "my note adf ad afd afasd fa fa "},
    //     {id: "3", auftragsnummer: "32345", kennzeichen: "EF-123", fin: 'WDD2302461F2245071', erstzulassung: '10.12.1999', created: '10.12.2020', status: Status.OFFEN, bildVid: "0", aufgaben:[], notiz:"thomas"},

    //     {id: "4", auftragsnummer: "52345", kennzeichen: "MN-123", fin: 'WDD1182461F2245071', erstzulassung: '11.12.1999', created: '11.12.2020', status: Status.ERLEDIGT, bildVid: "1", aufgaben:[], notiz:"12345678"},
    //     {id: "5", auftragsnummer: "42345", kennzeichen: "OP-123", fin: 'WDD2302461F2245071', erstzulassung: '10.12.1999', created: '10.12.2020', status: Status.ERLEDIGT, bildVid: "0", aufgaben:[], notiz:""},

    //     {id: "6", auftragsnummer: "64345", kennzeichen: "GH-123", fin: 'WDD2042461F2245071', erstzulassung: '12.12.1999', created: '12.12.2020', status: Status.NEUER_TERMIN, bildVid: "1", aufgaben:[], notiz:"123456"},
    //     {id: "7", auftragsnummer: "72345", kennzeichen: "IJ-123", fin: 'WDD2042461F2245071', erstzulassung: '11.12.1999', created: '11.12.2020', status: Status.NEUER_TERMIN, bildVid: "0", aufgaben:[], notiz:""},

    //     {id: "8", auftragsnummer: "84345", kennzeichen: "LM-123", fin: 'WDD2042461F2245071', erstzulassung: '12.12.1999', created: '12.12.2020', status: Status.AUFGABE, bildVid: "1", aufgaben:[{fehler_id: "1"}], notiz:""},
    //     {id: "9", auftragsnummer: "92345", kennzeichen: "OP-123", fin: 'WDD2042461F2245071', erstzulassung: '11.12.1999', created: '11.12.2020', status: Status.AUFGABE, bildVid: "0", aufgaben:[{fehler_id: "2"}], notiz:"c"}
    // ]

    // const fehlerData = [
    //     {id: '1', todo: 'Lackschaden Stoßfänger hinten prüfen', baureihen: 'W118, W177, W247, W213', baujahre: 'blabla', bemerkung: 'blablabemerk'},
    //     {id: '2', todo: 'SBC Hydraulikanlage auf Geräusche prüfen', baureihen: 'W211, W219, W230, W204', baujahre: 'blibli', bemerkung: 'bliblibemerk'},
    //     {id: '3', todo: 'Steuerkette rasselt bei Motorstart M271', baureihen: 'W172, W204, W207, W212', baujahre: 'blublu', bemerkung: 'blublubemerk'},
    //     {id: '4', todo: 'Kühlkreislauf auf Dichtigkeit prüfen', baureihen: 'sämtliche Baureihen', baujahre: 'blublu', bemerkung: 'blublubemerkblublubem'}
    // ]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInitialDataAction())
        dispatch(getFehlerDataAction())
        dispatch(getServiceBerater())
    }, [])


    const fehlerData = useSelector(state => state.fehlerReducer)
    const beraterData = useSelector(state => state.beraterReducer)

    const data = useSelector(state => state.dataReducer)
    
    const offeneAuftraege = data.filter(el => el.status === Status.OFFEN)
    const erledigt = data.filter(el => el.status === Status.ERLEDIGT)
    const neuerTermin = data.filter(el => el.status === Status.NEUER_TERMIN)
    const aufgabe = data.filter(el => el.status === Status.AUFGABE)

    return (<>
                <div className="container">
                    <br />
                    <div className="page-header pb-4" style={{borderBottom: '2px dashed grey'}}>
                        <h1 className="display-2"> SPC-Digital <img
                                src={wackenhut} className="float-right pt-4"
                                alt="wackenhut_logo" width="18%" height="18%" /></h1>
                    </div>
                    <br />
                    <br />
                    <br />
                    {loggedIn ? 
                    <>
                        <NavAdmin />
                        <AdminRoutes fehlerData={fehlerData} beraterData={beraterData}/>
                    </>
                     : 
                    <>
                        <NavUser offeneAuftraege={offeneAuftraege} erledigt={erledigt} neuerTermin={neuerTermin} aufgabe={aufgabe}/>
                        <UserRoutes offeneAuftraege={offeneAuftraege} erledigt={erledigt} neuerTermin={neuerTermin} aufgabe={aufgabe} fehlerData={fehlerData}/>
                    </>}
                </div>
            </>
    )
}

export default App