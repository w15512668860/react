import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Deatil extends Component {
    render() {
        return (
            <div>
                <NavLink to="/list">跳转到list</NavLink>
                Detail
            </div>
        )
    }
}
