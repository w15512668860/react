import React from 'react'
import { connect } from 'react-redux'

function Cart (props) {
    let { cartList, totalNum, changeCount } = props
    return (
        <div className="cart-wrap">
            {cartList.map((v, i) => (
                <div className="item" key={v.id}>
                    <h3>{v.title}</h3>
                    <p>¥{v.price}</p>
                    <p>
                        <button onClick={() => changeCount(v.count - 1, i, v.id)}>-</button>
                        {v.count}
                        <button onClick={() => changeCount(v.count + 1, i, v.id)}>+</button>
                    </p>
                </div>
            ))}
            <footer>
                总价：{totalNum}
            </footer>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        cartList: state.cartReducer.cartList,
        totalNum: state.cartReducer.totalNum,
    }
}

let mapDispatchToProps = dispatch => {
    return {
        changeCount(count, index, id){
            dispatch({type: 'CHANGE_COUNT', count, index, id})
        },

    }
}

Cart = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default Cart