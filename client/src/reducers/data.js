import {Data} from '../enums/actionnames'

const dataReducer = (initialData=[], action) => {

    switch (action.type) {
        case Data.LOAD_INTO_STATE:
            return action.payload
        case Data.CHANGE_BILDVID:
            const val = action.payload.checked === true ? "1" : "0"
            return initialData.map(el => el.id === action.payload.id ? {...el, bildVid: val} : el)
        case Data.CHANGE_STATUS:
            return initialData.map(el => el.id === action.payload.id ? {...el, status: action.payload.status} : el)
        case Data.CHANGE_AUFGABE: 
            return initialData.map(el => el.id === action.payload.id ? {...el, aufgaben: action.payload.aufgaben} : el)
        case Data.CHANGE_NOTIZ:
            return initialData.map(el => el.id === action.payload.id ? {...el, notiz: action.payload.notiz} : el)
        default:
            return initialData
    }
}

export default dataReducer