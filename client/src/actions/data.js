import * as api from '../apis/myApi'
import { Data, Loading } from '../enums/actionnames'
import moment from 'moment'

export const getInitialDataAction = () => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        const response = await api.getLogData()
        if(response.status === 200){
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
            const obj = response.data.data
            obj.forEach(el => {
                el.aufgaben = JSON.parse(el.aufgaben)
                el.created = moment(el.created).utc().format('DD.MM.YYYY') 
            })
            dispatch({type: Data.LOAD_INTO_STATE, payload: obj})
        }
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const changeBildVidAction = (checked, id) => async (dispatch) => {
    try {
        const data = {id: id, checked: checked}
        const response = await api.changeBildVid(JSON.stringify(data))
        if(response.status === 200){
            dispatch({type: Data.CHANGE_BILDVID, payload: {checked: checked, id: id}})
        }
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const changeStatusAction = (status, id) => async (dispatch) => {
    try { 
        dispatch({type: Data.CHANGE_STATUS, payload: {status: status, id: id}})
        const data = {id: id, status: status}
        await api.changeStatus(JSON.stringify(data))
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const changeAufgabeAction = (aufgaben, id) => async (dispatch) => {
    try {
        const data = {id: id, aufgaben: aufgaben}
        const response = await api.changeAufgaben(JSON.stringify(data))
        if(response.status === 200){
            dispatch({type: Data.CHANGE_AUFGABE, payload: {aufgaben: aufgaben, id: id}})
        }   
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const changeNotizAction = (notiz, id) => async (dispatch) => {
    try {
        const data = {id: id, notiz: notiz}
        const response = await api.changeNotiz(JSON.stringify(data))
        if(response.status === 200){
            dispatch({type: Data.CHANGE_NOTIZ, payload: {notiz: notiz, id: id}})
        }   
        
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}
