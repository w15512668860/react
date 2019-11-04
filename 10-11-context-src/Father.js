import React, { Component } from 'react'
import Son from './Son'
import './App.css'
import { FatherContext } from './context'

export default  class Father extends Component {
    render() {
        return (
            <FatherContext.Provider value={'我是你爹'}>
                <div className="father">
                    Father
                    <Son />
                </div>
            </FatherContext.Provider>
        )
    }
}
