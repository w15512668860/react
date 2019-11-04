import React, { Component } from 'react'
import './App.scss'
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import RouterView from './router/RouterView'
import routes from './router/rotuer-config'
export default class App extends Component {

    render() {
        return (
            <Router>
                <RouterView routes={routes} />
            </Router>
        )
    }
}
