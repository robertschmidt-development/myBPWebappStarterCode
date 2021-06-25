import React, {useState} from 'react'
import UseSortableData from '../UseSortableData/UseSortableData'
import TableSearch from '../UseSortableData/TableSearch'
import SchwerpunkteForm from './SchwerpunkteForm/SchwerpunkteForm'
import SchwerpunkteTable from './SchwerpunkteTable/SchwerpunkteTable'
import SchwerpunkteNeuerButton from './SchwerpunkteNeuerButton/SchwerpunkteNeuerButton'
import {useDispatch, useSelector} from 'react-redux'
import { Loading } from '../../enums/actionnames'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import ErrorBadge from '../ErrorBadge/ErrorBadge'
import { createNewFehlerAction, updateFehlerAction, deleteFehlerAction } from '../../actions/fehler'

const SchwerpunkteFunctions = props => {

    const {data} = props

    // table sort and search functions 
    let { items, requestSort } = UseSortableData(data)
    const keys = ['todo', 'baureihen', 'baujahre', 'bemerkung']
    let { itemsfiltered, requestSearch, searchValue } = TableSearch(data, keys)
    if(searchValue !== '') items = itemsfiltered

    // what ui to show
    const [showForm, setShowForm] = useState(false)
    const loading = useSelector(state => state.loadingReducer)

    // fill form and validation
    const initialObj = {todo: '', baureihen: '', baujahre: '', bemerkung: ''}
    const [definition, setDefinition] = useState(initialObj)
    const [validationFailed, setValidationFailed] = useState(false)

    const closeForm = () => {
        setShowForm(false)
        setValidationFailed(false)
        setDefinition(initialObj)
    }

    const dispatch = useDispatch()
    const saveDefinition = () => {
        if(definition.baureihen.match(/^(W[0-9]{3}\s{0,2},?\s{0,2})*$/) === null){ 
            setValidationFailed(true)
            alert("Geben Sie die Baureihen in folgender Form ein: W123, W345, ...")
            return
        }

        if(definition.id){
            dispatch(updateFehlerAction(definition))
        } else {
            dispatch(createNewFehlerAction(definition))
        }
        setValidationFailed(false)
        setShowForm(false)
        setDefinition(initialObj)
    }

    // Table Buttons
    const onAdd = () => {
        setShowForm(true)
    }

    const onEdit = row => {
        setShowForm(true)
        setDefinition(row)
    }

    const onDelete = row => {
        const result = window.confirm("Wollen Sie den Datensatz wirklich löschen?")
        if(!result) return
        dispatch(deleteFehlerAction(row))
    }


    // render ui
    if(loading === Loading.LOADING) return <LoadingSpinner />
    if(loading === Loading.ERROR) return <ErrorBadge />
    if(showForm) return <>
                            <SchwerpunkteForm 
                                closeForm={closeForm} 
                                saveDefinition={saveDefinition} 
                                definition={definition} 
                                setDefinition={setDefinition}
                                validationFailed={validationFailed}
                            />
                            <SchwerpunkteTable 
                                requestSearch={requestSearch} 
                                requestSort={requestSort} 
                                items={items}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        </>
    return <>
                <br />
                <SchwerpunkteNeuerButton 
                    onAdd={onAdd}
                />
                <SchwerpunkteTable 
                    requestSearch={requestSearch} 
                    requestSort={requestSort} 
                    items={items}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </>
}

export default SchwerpunkteFunctions

