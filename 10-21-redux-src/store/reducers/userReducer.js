// 定义初始值
let userState = {
    username: '还没定义用户名',
}
// 定义和修改state
// state => 修改完的state
let userReducer = function (state = userState, action) {
    // action => {type: '修改类型', ...数据}
    switch(action.type) {
        case "EDIT":
            state.username = action.username;
            // 返回新的state
            return {...state}
        default:
            return {...state}
    }
}

export default userReducer