import {combineReducers} from 'redux'
import loadingReducer from './loading'
import dataReducer from './data'
import fehlerReducer from './fehler'
import beraterReducer from './berater'

const allReducers = combineReducers({
    loadingReducer, dataReducer, fehlerReducer, beraterReducer
})

export default allReducers