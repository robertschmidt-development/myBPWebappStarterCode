import {Berater} from '../enums/actionnames'

const BeraterReducer = (initialData=[], action) => {

    switch (action.type) {
        case Berater.LOAD_INTO_STATE:
            return action.payload
        case Berater.CREATE:
            return [...initialData, action.payload]
        case Berater.DELETE:
            return initialData.filter(el => el.id !== action.payload)
        case Berater.UPDATE:
            return initialData.map(el => {
                if(el.id === action.payload.id)  el = action.payload
                return el
            })
        default:
            return initialData
    }
}

export default BeraterReducer