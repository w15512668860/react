import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import RouterView from '../../router/RouterView'
export default class Home extends Component {
    render() {
        return (
            <div className="wrap-home">
                <nav>
                    <NavLink to="/home/movie">电影</NavLink>
                    <NavLink to="/home/star">明星</NavLink>
                </nav>
                <div className="home-con">
                    <RouterView routes={this.props.routes} />
                </div>
            </div>
        )
    }
}
