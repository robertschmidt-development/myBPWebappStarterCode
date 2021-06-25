import {Loading} from '../enums/actionnames'

const loadingReducer = (initialData='init', action) => {

    switch (action.type) {
        case Loading.CHANGE_STATE:
            return action.payload
        default:
            return initialData
    }
}

export default loadingReducer