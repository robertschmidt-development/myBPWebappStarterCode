import * as api from '../apis/myApi'
import { Berater, Loading } from '../enums/actionnames'
import { v4 as uuidv4 } from 'uuid';

export const getServiceBerater = () => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        const response = await api.getBeraterData()
        if(response.status === 200){
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
            dispatch({type: Berater.LOAD_INTO_STATE, payload: response.data.data})
        }
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const createNewBeraterAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        // const response = await api.getFehlerData()
        // if(response.status === 200){
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
            dispatch({type: Berater.CREATE, payload: {...row, id: uuidv4()}})
        // }
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const updateBeraterAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        // const response = await api.getFehlerData()
        // if(response.status === 200){
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
            dispatch({type: Berater.UPDATE, payload: row})
        // }
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const deleteBeraterAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        // const response = await api.getFehlerData()
        // if(response.status === 200){
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
            dispatch({type: Berater.DELETE, payload: row.id})
        // }
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}