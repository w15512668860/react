import React, { Component } from 'react'
import store from '../store/store'
import countReducer from '../store/reducers/countReducer'

console.log(store.getState())

export default class Count extends Component {

    constructor(props){
        super(props)
        // 监听store改变
        store.subscribe(() => {
            this.setState({
                count: store.getState().countReducer.count
            })
        })
    }

    state = {
        price: store.getState().countReducer.price,
        count: store.getState().countReducer.count
    }

    add = () => {
        // 修改state数据 store.dispatch(action)
        store.dispatch({type: 'ADD', value: 1})
    }

    render() {
        return (
            <div>
                <h2>大白菜</h2>
                <p>单价：¥{this.state.price}</p>
                <button>-</button>
                {this.state.count}
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}
