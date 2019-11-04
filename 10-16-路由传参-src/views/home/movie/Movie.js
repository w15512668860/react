import React, { Component } from 'react'
import RouterView from '../../../router/RouterView'
import { NavLink } from 'react-router-dom'

export default class Movie extends Component {
    render() {
        return (
            <div>
                <h1>
                    <NavLink to={{pathname: "/home/movie/hot", query: {title: '正在热映'}}}>正在热映</NavLink>
                    <NavLink to={{pathname: "will"}}>即将上映</NavLink>
                </h1>
                <RouterView routes={this.props.routes}  />
            </div>
        )
    }
}
