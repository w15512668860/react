import { createStore, combineReducers } from 'redux';

import countReducer from './reducers/countReducer'
import userReducer from './reducers/userReducer'
/**
 * 三大原则
 * 唯一数据源 store.getState()
 * state只读 修改state的唯一方式store.dispatch(action)
 * 纯函数来执行修改 reducer是纯函数 => 不依赖外界的因素并且不会对外界产生影响
 */

// 合并reducer
let reducers = combineReducers({
    userReducer,
    countReducer
})


let store = createStore(reducers);

export default store