import React, { Component } from 'react'

export default class Nav extends Component {

    // state = {
    //     list: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    // }

    render() {
        return (
            <nav>
                {this.props.list.map((v, i) => (
                    <span key={i}>{v}</span>
                ))}
            </nav>
        )
    }
}
