import React, { Component } from 'react'
import axios from 'axios'
import store from '../store/store'
export default class List extends Component {

    constructor(props){
        super(props)
        // 监听state改变
        this.unsbuscribe = store.subscribe(() => {
            this.setState({
                // 获取cartReducerlist
                list: store.getState().cartReducer.list
            })
        })
    }

    state = {
        list: store.getState().cartReducer.list
    }

    getList(){
        axios.get('/list').then(res => {
            store.dispatch({type: "ADD_LIST", values: res.data.values})
        })
    }

    componentDidMount(){
        if (this.state.list.length <= 0) {
            this.getList()
        }
    }

    componentWillUnmount(){
        this.unsbuscribe()
    }

    addCartList = (goods, index) => {
        if (goods.count > 0) {
            alert('已经添加过此商品')
            return false
        }
        // 往购物车里添加商品
        store.dispatch({type: 'ADD_CART_LIST', index})
    }

    render() {
        return (
            <div className="list-wrap">
                {this.state.list.map((v, i) => (
                    <div className="item" key={v.id}>
                        <h2>{v.title}</h2>
                        <p>¥{v.price}</p>
                        <p>数量{v.count}</p>
                        <button onClick={() => this.addCartList(v, i)}>添加</button>
                    </div>
                ))}
            </div>
        )
    }
}

