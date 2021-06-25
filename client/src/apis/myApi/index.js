import axios from 'axios'

const urlGetInitialLogData = process.env.REACT_APP_API_URL + 'log/api'
export const getLogData = () => axios.get(urlGetInitialLogData)
const urlUpdateBildVid = process.env.REACT_APP_API_URL + 'log/updatebildvid'
export const changeBildVid = (data) => axios.post(urlUpdateBildVid, data, {headers: {'Accept': 'application/json'}}) 
const urlUpdateStatus = process.env.REACT_APP_API_URL + 'log/updatestatus'
export const changeStatus = (data) => axios.post(urlUpdateStatus, data, {headers: {'Accept': 'application/json'}})
const urlUpdateAufgaben = process.env.REACT_APP_API_URL + 'log/updateaufgaben'
export const changeAufgaben = (data) => axios.post(urlUpdateAufgaben, data, {headers: {'Accept': 'application/json'}}) 
const urlUpdateNotiz = process.env.REACT_APP_API_URL + 'log/updatenotiz'
export const changeNotiz = (data) => axios.post(urlUpdateNotiz, data, {headers: {'Accept': 'application/json'}}) 


const urlGetFehlerData = process.env.REACT_APP_API_URL + 'fehler/api'
export const getFehlerData = () => axios.get(urlGetFehlerData)
export const createNewFehler = (data) => axios.post(urlGetFehlerData, data, {headers: {'Accept': 'application/json'}}) 
export const deleteFehler = (id) => axios.delete(`${urlGetFehlerData}/${id}`)
export const updateFehler = (data) => axios.put(urlGetFehlerData, data, {headers: {'Accept': 'application/json'}}) 

// export const deleteFehler = () => {
//     var url = "http://localhost:8080/spcdigital/api/fehler/api/dasfasdfasd";

// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url);

// xhr.onreadystatechange = function () {
//    if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//    }};

// xhr.send();
// }

// const deleteMethod = {
//     method: 'GET', // Method itself
//     headers: {
//      'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
//     },
//     // No need to have body, because we don't send nothing to the server.
//    }

// export const deleteFehler = (id) => fetch(`${urlGetFehlerData}/${id}`, deleteMethod) 
//    .then(response => response.json())
//    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
//    .catch(err => console.log(err)) // Do something with the error
 
   




const urlGetBeraterData = process.env.REACT_APP_API_URL + 'berater/api'
export const getBeraterData = () => axios.get(urlGetBeraterData)


// const urlAliasCreate = process.env.REACT_APP_API_URL + 'server/alias/create'
// export const createAlias = (newAlias) => axios.post(urlAliasCreate, newAlias, {headers: { 'Content-Type': 'multipart/form-data' }}, {withCredentials: true})

// const urlFixkosten = 'http://127.0.0.1:5000/fixkosten'
// export const fetchFixkosten = () => axios.get(urlFixkosten)
// export const createFixkostenpunkt = (newFKP) => axios.post(urlFixkosten, newFKP)
// export const deleteFixkostenpunkt = (id) => axios.delete(`${urlFixkosten}/${id}`)
// export const updateFixkostenpunkt = (id) => axios.put(`${urlFixkosten}/${id}`) 