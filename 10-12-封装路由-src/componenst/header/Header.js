import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <span>官网首页</span>
                <input type="text" placeholder="搜索"/>
            </header>
        )
    }
}
