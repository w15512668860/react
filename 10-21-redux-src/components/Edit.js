import React, { Component } from 'react'
import store from '../store/store'

export default class Edit extends Component {

    change = () => {
        store.dispatch({type: 'EDIT', username: this.input.value})
    }

    render() {
        return (
            <div>
                修改用户名<input type="text" ref={el => this.input = el} onChange={this.change}/>
            </div>
        )
    }
}
