import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        console.log(this.props)
        // 参数存在内存
        // 获取query参数 this.props.location.query 刷新参数消失
        // 获取state参数 this.props.location.state 刷新参数不消失，直接进页面获取不到参数

        // 参数存在地址栏
        // 获取params参数 this.props.match.params 刷新页面不消失
        return (
            <div>
                detail
            </div>
        )
    }
}
