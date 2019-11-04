import React, { Component } from 'react'
import RouterView from '../../../router/RouterView'
import { NavLink } from 'react-router-dom'
export default class Movie extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>
                    <NavLink to="/home/movie/hot">正在热映</NavLink>
                    <NavLink to="/home/movie/will">即将上映</NavLink>
                </h1>
                <RouterView routes={this.props.routes}  />
            </div>
        )
    }
}
