import React, { Component } from 'react'

export default class Menu extends Component {

    state = {
        list: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }

    render() {
        return (
            <ul>
                {this.state.list.map((v, i) => (
                    <li key={i}>{v}</li>
                ))}
            </ul>
        )
    }
}
