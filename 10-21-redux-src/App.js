import React, { Component } from 'react'
import './App.scss'
import Count from './components/Count'
import Total from './components/Total'
import User from './components/User'
import Edit from './components/Edit'
export default class App extends Component {

    render() {
        return (
            <div style={{padding: '30px'}}>
                <Count />
                <Total />
                <hr />
                <User />
                <Edit />
            </div>
        )
    }
}
