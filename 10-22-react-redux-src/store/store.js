import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import cartReducer from './reducers/cartReducer'

let reducers = combineReducers({
    cartReducer
})

let store = createStore(reducers, applyMiddleware(logger));
/**
 * store.getState()  => 调用reducer 获取state
 * store.dispatch()  => 调用reducer 并且传action => 通知reducer修改state
 */
export default store
