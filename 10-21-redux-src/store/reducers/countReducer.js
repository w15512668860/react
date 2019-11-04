// 定义初始值
let countState = {
    count: 0,
    price: 2
}
// 定义和修改state
// state => 修改完的state
let countReducer = function (state = countState, action) {
    // action => {type: '修改类型', ...数据}
    switch(action.type) {
        case "ADD":
            state.count += action.value;
            // 返回新的state
            return {...state}
        default:
            return {...state}
    }
}

export default countReducer