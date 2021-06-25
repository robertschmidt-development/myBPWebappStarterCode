import React, {useState} from 'react'
import UseSortableData from '../UseSortableData/UseSortableData'
import TableSearch from '../UseSortableData/TableSearch'
import {useDispatch, useSelector} from 'react-redux'
import { Loading } from '../../enums/actionnames'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import ErrorBadge from '../ErrorBadge/ErrorBadge'
import { createNewBeraterAction, updateBeraterAction, deleteBeraterAction } from '../../actions/berater'
import ServiceBeraterForm from './ServiceBeraterForm/ServiceBeraterForm'
import ServiceBeraterTable from './ServiceBeraterTable/ServiceBeraterTable'
import ServiceBeraterNeuerButton from './ServiceBeraterNeuerButton/ServiceBeraterNeuerButton'

const ServiceBeraterFunctions = props => {

    const {data} = props

    // table sort and search functions 
    let { items, requestSort } = UseSortableData(data)
    const keys = ['vorname', 'name', 'standort', 'kuerzel', 'email']
    let { itemsfiltered, requestSearch, searchValue } = TableSearch(data, keys)
    if(searchValue !== '') items = itemsfiltered

    // what ui to show
    const [showForm, setShowForm] = useState(false)
    const loading = useSelector(state => state.loadingReducer)

    // fill form and validation
    const initialObj = {vorname: '', name: '', standort: '', kuerzel: '', email: ''}
    const [definition, setDefinition] = useState(initialObj)
    const [validationFailed, setValidationFailed] = useState(false)

    const closeForm = () => {
        setShowForm(false)
        setValidationFailed(false)
        setDefinition(initialObj)
    }


    

    const dispatch = useDispatch()
    const saveDefinition = () => {
        if(definition.email.match(/^([a-zA-Z0-9._-]+@wackenhut\.de,?\s*?)*$/) === null){ 
            setValidationFailed(true)
            alert("Geben Sie die Email-Adressen kommagetrennt in folgender Form ein: m.mustermann@wackenhut.de, ...")
            return
        }

        if(definition.id){
            dispatch(updateBeraterAction(definition))
        } else {
            dispatch(createNewBeraterAction(definition))
        }
        setShowForm(false)
        setValidationFailed(false)
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
        dispatch(deleteBeraterAction(row))
    }


    // render ui
    if(loading === Loading.LOADING) return <LoadingSpinner />
    if(loading === Loading.ERROR) return <ErrorBadge />
    if(showForm) return <>
                            <ServiceBeraterForm
                                closeForm={closeForm} 
                                saveDefinition={saveDefinition} 
                                definition={definition} 
                                setDefinition={setDefinition}
                                validationFailed={validationFailed}
                            />
                            <ServiceBeraterTable 
                                requestSearch={requestSearch} 
                                requestSort={requestSort} 
                                items={items}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        </>
    return <>
                <br />
                <ServiceBeraterNeuerButton
                    onAdd={onAdd}
                />
                <ServiceBeraterTable
                    requestSearch={requestSearch} 
                    requestSort={requestSort} 
                    items={items}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </>
}

export default ServiceBeraterFunctions

