import React, { Component } from 'react'
import store from '../store/store'

export default class User extends Component {

    constructor(props){
        super(props)
        store.subscribe(() => {
            this.setState({
                username: store.getState().userReducer.username
            })
        })
    }

    state = {
        username: store.getState().userReducer.username
    }

    componentWillUnmount(){
        // 取消监听
        store.unsubscribe();
    }

    render() {
        return (
            <div>
                用户名：{this.state.username}
            </div>
        )
    }
}
