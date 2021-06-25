import {Fehler} from '../enums/actionnames'

const fehlerReducer = (initialData=[], action) => {

    switch (action.type) {
        case Fehler.LOAD_INTO_STATE:
            return action.payload
        case Fehler.CREATE:
            return [...initialData, action.payload]
        case Fehler.DELETE:
            return initialData.filter(el => el.id !== action.payload)
        case Fehler.UPDATE:
            return initialData.map(el => {
                if(el.id === action.payload.id)  el = action.payload
                return el
            })
        default:
            return initialData
    }
}

export default fehlerReducer