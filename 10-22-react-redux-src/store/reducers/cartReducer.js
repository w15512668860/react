let initState = {
    // 所有数据
    list: [],
    // 购物车列表
    cartList: [],
    // 总价
    totalNum: 0
}

function total(list){
    return list.reduce((prev, val) => {
        return prev + val.count * val.price
    }, 0)
}

let reducerAction = {
    ADD_LIST(state, action){
        // 存所有数据
        state.list = [...action.values]
    },
    ADD_CART_LIST(state, action){
        // 往购物车添加数据
        // 找到点击的对象数量加一
        state.list[action.index].count = 1;
        // 把点击的对象添加到购物车
        state.cartList.push(state.list[action.index]);
        // 计算总价
        state.totalNum = total(state.cartList)
    },
    CHANGE_COUNT(state, action){
        // 从所有数据中找到的商品的下标
        let index = state.list.findIndex(v => v.id === action.id);
        // // 修改商品的数量
        state.list[index].count = action.count;
        
        // 找到购物车中点击的对象进行赋值
        state.cartList[action.index].count = action.count;
        
        if (action.count <=0 ) {
            // 数量等于0删除商品
            state.cartList.splice(action.index, 1);
        }
        // 计算总价
        state.totalNum = total(state.cartList);
    }
}

let cartReducer = function (state = initState, action) {
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    reducerAction[action.type] && reducerAction[action.type](newState, action);
    return {...newState}
}

export default cartReducer