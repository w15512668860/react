import React, { Component } from 'react'
import './App.css'
import Father from './Father'
import { WrapContext } from './context'

/**
 * Provider 提供数据的组件
 * Consumer 使用数据的组件
 * 
 * Fragment React内置组件不渲染到页面 类似vue template
 */

export default class App extends Component {

    state = {
        text: '你爹打你就告诉我'
    }

    getTal = (text) => {
        this.setState({
            text: '莫慌～我去收拾他'
        })
    }

    render() {
        return (
            <WrapContext.Provider value={{ ...this.state, talk: this.getTal }}>
                <div className="app">
                    App
                    <Father />
                </div>
            </WrapContext.Provider>
            
        )
    }
}
