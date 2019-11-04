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

let cartReducer = function (state = initState, action) {
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'ADD_LIST':
            // 存所有数据
            newState.list = [...action.values]
            return {...newState}
        case 'ADD_CART_LIST':
            // 往购物车添加数据
            // 找到点击的对象数量加一
            newState.list[action.index].count = 1;
            // 把点击的对象添加到购物车
            newState.cartList.push(newState.list[action.index]);
            // 计算总价
            newState.totalNum = total(newState.cartList)
            return {...newState}
        case 'CHANGE_COUNT':

            // 从所有数据中找到的商品的下标
            let index = newState.list.findIndex(v => v.id === action.id);
            // // 修改商品的数量
            newState.list[index].count = action.count;
            
            // 找到购物车中点击的对象进行赋值
            newState.cartList[action.index].count = action.count;
            
            if (action.count <=0 ) {
                // 数量等于0删除商品
                newState.cartList.splice(action.index, 1);
            }

            // 计算总价
            newState.totalNum = total(newState.cartList);
            return {...newState}
        default: 
            return {...newState}
    }
}

export default cartReducer