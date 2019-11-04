import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import RouterView from './router/RouterView'
import routes from './router/router-config'
import './App.css'
import './mock/index'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routes={routes} />
            </BrowserRouter>
        )
    }
}
