import * as api from '../apis/myApi'
import { Fehler, Loading } from '../enums/actionnames'
import { v4 as uuidv4 } from 'uuid';

export const getFehlerDataAction = () => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        const response = await api.getFehlerData()
        if(response.status === 200){
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
            dispatch({type: Fehler.LOAD_INTO_STATE, payload: response.data.data})
        }
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const createNewFehlerAction = (row) => async (dispatch) => {
    try {
        const obj = {...row, id: uuidv4()}
        dispatch({type: Fehler.CREATE, payload: obj})
        const response = await api.createNewFehler(JSON.stringify(obj))
        if(response.status !== 200){
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
        }
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const updateFehlerAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Fehler.UPDATE, payload: row})
        await api.updateFehler(JSON.stringify(row))
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const deleteFehlerAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Fehler.DELETE, payload: row.id})
        const response = await api.deleteFehler(row.id)
        if(response.status !== 200){
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        }
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}
