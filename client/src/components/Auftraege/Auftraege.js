import React, {useState} from 'react'
import SortingArrow from '../UseSortableData/SortingArrow'
import UseSortableData from '../UseSortableData/UseSortableData'
import AuftraegeRow from './AuftraegeRow/AuftraegeRow'
import styles from './style'
import TableSearch from '../UseSortableData/TableSearch'
import Auftrag from '../Auftrag/Auftrag'
import {useDispatch, useSelector} from 'react-redux'
import { changeAufgabeAction, changeBildVidAction, changeStatusAction, changeNotizAction } from '../../actions/data';
import { Loading } from '../../enums/actionnames'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import ErrorBadge from '../ErrorBadge/ErrorBadge'

const Auftraege = props => {
    const {data, fehlerData, erledigt } = props
    const initial = {comp: 'table', id: undefined}
    const [show, setShow] = useState(initial)

    const openAuftrag = id => {
        setShow({comp: 'auftrag', id: id})
    }

    const dispatch = useDispatch()

    const closeAuftrag = (bildVid, id, status, aufgaben, notiz) => {
        setShow(initial)
        dispatch(changeBildVidAction(bildVid, id))
        dispatch(changeStatusAction(status, id))
        dispatch(changeAufgabeAction(aufgaben, id))
        dispatch(changeNotizAction(notiz, id))
    }

    let { items, requestSort } = UseSortableData(data)
    const keys = ['auftragsnummer', 'kennzeichen', 'fin', 'erstzulassung', 'created', 'notiz']
    let { itemsfiltered, requestSearch, searchValue } = TableSearch(data, keys)
    if(searchValue !== '') items = itemsfiltered

    const loading = useSelector(state => state.loadingReducer)

    const table = (
        <>
            <br />
            <input className="form-control" placeholder='Suche' onChange={(e) => requestSearch(e.target.value)}/>
            <br />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th onClick={() => requestSort('auftragsnummer')} style={styles.tableHeader}>Auftragsnummer <SortingArrow /></th>
                        <th onClick={() => requestSort('kennzeichen')} style={styles.tableHeader}>Kennzeichen <SortingArrow /></th>
                        <th onClick={() => requestSort('fin')} style={styles.tableHeader}>FIN <SortingArrow /></th>
                        <th onClick={() => requestSort('erstzulassung')} style={styles.tableHeader}>Erstzulassung <SortingArrow /></th>
                        <th onClick={() => requestSort('created')} style={styles.tableHeader}>Erstellt am <SortingArrow /></th>
                        <th onClick={() => requestSort('notiz')} style={styles.tableHeader}>Notiz <SortingArrow /></th>
                    </tr>
                </thead>
                <tbody>
                    {items && items.map((el, index) => <AuftraegeRow key={index} row={el} openAuftrag={openAuftrag}/>)}
                </tbody>
            </table>
            </>
    )

    const auftrag = <Auftrag auftrag={data.filter(el => el.id === show.id)[0]} closeAuftrag={closeAuftrag} fehlerData={fehlerData} erledigt={erledigt} setShow={setShow}/>

    if(loading === Loading.LOADING) return <LoadingSpinner />
    if(loading === Loading.ERROR) return <ErrorBadge />
    if(loading === Loading.LOADED && show.comp === 'auftrag') return auftrag
    return table
}

export default Auftraege