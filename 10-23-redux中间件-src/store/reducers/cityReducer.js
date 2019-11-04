let initState = {
    currentCity: '北京',
    cityList: []
}

let actions = {
    SET_CITY_LIST(state, action){
        state.cityList = action.values
    },
    SET_CITY(state, action){
        state.currentCity = action.city
    }
}

let cityReducer = function(state = initState, action){
    let newState = JSON.parse(JSON.stringify(state))
    actions[action.type] && actions[action.type](newState, action);
    return {...newState}
}

export default cityReducer