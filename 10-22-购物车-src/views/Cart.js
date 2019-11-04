import React, { Component } from 'react'
import store from '../store/store'

export default class Cart extends Component {

    constructor(props){
        super(props)
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                cartList: store.getState().cartReducer.cartList,
                totalNum: store.getState().cartReducer.totalNum,
            })
        })
    }

    componentWillUnmount(){
        this.unsubscribe()
    }

    state = {
        cartList: store.getState().cartReducer.cartList,
        totalNum: store.getState().cartReducer.totalNum,
    }

    sub = (count, index, id) => {
        store.dispatch({type: 'CHANGE_COUNT', count: count - 1, index, id });
    }

    add = (count, index, id) => {
        store.dispatch({type: 'CHANGE_COUNT', count: count + 1, index, id})
    }

    render() {
        return (
            <div className="cart-wrap">
                {this.state.cartList.map((v, i) => (
                    <div className="item" key={v.id}>
                        <h3>{v.title}</h3>
                        <p>¥{v.price}</p>
                        <p>
                            <button onClick={() => this.sub(v.count, i, v.id)}>-</button>
                            {v.count}
                            <button onClick={() => this.add(v.count, i, v.id)}>+</button>
                        </p>
                    </div>
                ))}
                <footer>
                    总价：{this.state.totalNum}
                </footer>
            </div>
        )
    }
}
