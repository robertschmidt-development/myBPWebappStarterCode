import React from 'react'

const SchwerpunkteForm = props => {

    const {closeForm, saveDefinition, definition, setDefinition, validationFailed} = props

    const form = <>
                    <br />
                    <input type="text" className="form-control" placeholder="Was" value={definition.todo} onChange={e => setDefinition({...definition, todo: e.target.value})}/>
                    <br />
                    <input type="text" className="form-control" style={validationFailed ? {border:'2px solid #d9534f'} : null} placeholder="Baureihen" value={definition.baureihen} onChange={e => setDefinition({...definition, baureihen: e.target.value})}/>
                    <br />
                    <input type="text" className="form-control" placeholder="Baujahre" value={definition.baujahre} onChange={e => setDefinition({...definition, baujahre: e.target.value})}/>
                    <br />
                    <input type="text" className="form-control" placeholder="Bemerkung" value={definition.bemerkung} onChange={e => setDefinition({...definition, bemerkung: e.target.value})}/>
                    <br />
                    {/* <input type="text" class="form-control" placeholder="Bilder" value={definition.bilder} />
                    <br /> */}
                    <div className="row">
                        <div className="col-8">
                        <button type="button" className="btn btn-success btn-block" onClick={saveDefinition}>Speichern</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-secondary btn-block" onClick={closeForm}>Abbrechen</button>
                        </div>
                    </div>
                </>

    return form
}

export default SchwerpunkteForm