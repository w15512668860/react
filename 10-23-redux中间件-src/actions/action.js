import axios from 'axios'

export function getList(dispatch){
    axios.get('/list').then(res => {
        dispatch({type: 'SET_CITY_LIST', values: res.data.values})
    })
}

export function getListPromise(){
    return new Promise((resolve, reject) => {
        axios.get('/list').then(res => {
            resolve({type: 'SET_CITY_LIST', values: res.data.values})
        })
    })
}