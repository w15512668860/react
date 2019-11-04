import React, { Component, Fragment } from 'react'
import './App.scss'
import routes from './router/rotuer-config'
import RouterView from './router/RouterView'
import { BrowserRouter as Router } from 'react-router-dom'
import './mock/index'
import { Provider } from 'react-redux'
import store from './store/store'
export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <RouterView routes={routes} />
                </Router>
            </Provider>
        )
    }
}
