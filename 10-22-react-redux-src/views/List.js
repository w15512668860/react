import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'


// UI组件
class List extends Component {

    getList(){
        axios.get('/list').then(res => {
            this.props.setList(res.data.values)
        })
    }

    componentDidMount(){
        if (this.props.list.length <= 0) {
            this.getList()
        }
    }

    addCartList = (goods, index) => {
        if (goods.count > 0) {
            alert('已经添加过此商品')
            return false
        }
        // 往购物车里添加商品
        this.props.addCartList(index)
    }

    render() {
        let { list } = this.props
        return (
            <div className="list-wrap">
                {list.map((v, i) => (
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



let mapStateToProps = (state) => {
    console.log('mapStateToProps',state.cartReducer.list)
    return {
        list: state.cartReducer.list
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setList(values){
            dispatch({type: "ADD_LIST", values})
        },
        addCartList(index){
            dispatch({type: 'ADD_CART_LIST', index})
        }
    }
}
// 高阶组件
List = connect(mapStateToProps, mapDispatchToProps)(List)

export default List
