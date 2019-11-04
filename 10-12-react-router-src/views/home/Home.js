import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                home
                <NavLink to="/detail">跳转到detail</NavLink>
            </div>
        )
    }
}
