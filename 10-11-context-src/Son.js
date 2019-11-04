import React, { Component, Fragment } from 'react'
import './App.css'
import { WrapContext, FatherContext } from './context'

class Sister extends Component {
    render() {
        return (
            <FatherContext.Consumer>
                {value => (
                    <Fragment>
                        <h2>title</h2>
                        <div style={{border: '1px solid'}}>Sister {value}</div>
                    </Fragment>
                )}
            </FatherContext.Consumer>
            
        )
    }
}

/**
 * Provider 提供数据的组件
 * Consumer 使用数据的组件
 */

export default class Son extends Component {
    render() {
        return (
            <WrapContext.Consumer>
                {value => (
                    <div className="son">
                        Son
                        <b>{value.text}</b>
                        <button onClick={() => value.talk('我爹打我了')}>我爹打我了</button>
                        <Sister />
                    </div>
                )}
            </WrapContext.Consumer>
            
        )
    }
}
