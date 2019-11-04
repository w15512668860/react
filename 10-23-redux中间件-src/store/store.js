import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import cityReducer from './reducers/cityReducer'

// 合并reducer
let reducers = combineReducers({
    cityReducer: cityReducer,
})

let store = createStore(reducers, applyMiddleware(thunk, promise, logger))
/**
 * createStore(reducers, initstate | applyMiddleware, applyMiddleware )
 * applyMiddleware 中间件 对dispatch改造
 * redux-logger 打印action日志
 * redux-thunk 异步操作
 * redux-promise 异步操作
 */

export default store