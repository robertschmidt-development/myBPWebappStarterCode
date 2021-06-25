import React from 'react'
import SortingArrow from '../../UseSortableData/SortingArrow'
import ServiceBeraterRow from './ServiceBeraterRow/ServiceBeraterRow'
import classes from '../../Schwerpunkte/SchwerpunkteTable/SchwerpunkteTable.module.css'

const ServiceBeraterTable = props => {

    const {requestSearch, requestSort, items, onEdit, onDelete} = props

    return  <>
                <br />
                <input className="form-control" placeholder='Suche' onChange={e => requestSearch(e.target.value)}/>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th onClick={() => requestSort('vorname')} className={classes.thPointer}>Vorname <SortingArrow /></th>
                            <th onClick={() => requestSort('name')} className={classes.thPointer}>Name <SortingArrow /></th>
                            <th onClick={() => requestSort('standort')} className={classes.thPointer}>Standort <SortingArrow /></th>
                            <th onClick={() => requestSort('kuerzel')} className={classes.thPointer}>Namenskürzel <SortingArrow /></th>
                            <th onClick={() => requestSort('email')} className={classes.thPointer}>E-Mail <SortingArrow /></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items && items.map((el, index) => <ServiceBeraterRow key={index} row={el} onEdit={onEdit} onDelete={onDelete}/>)}
                    </tbody>
                </table>
            </>
    
}

export default ServiceBeraterTable
