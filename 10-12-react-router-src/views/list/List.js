import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class List extends Component {
    render() {
        return (
            <div>
                <NavLink to="/home">返回到home</NavLink>
                list
            </div>
        )
    }
}
