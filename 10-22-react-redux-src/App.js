import React, { Component, Fragment } from 'react'
import './App.scss'
import routes from './router/rotuer-config'
import RouterView from './router/RouterView'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './mock/index'
export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="wrap">
                    <main>
                        <RouterView routes={routes} />
                    </main>
                    <footer>
                        <NavLink to="/list">首页</NavLink>
                        <NavLink to="/cart">购物车</NavLink>
                    </footer>
                </div>
            </Router>
        )
    }
}
