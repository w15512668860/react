import React, { Component } from 'react'
import Input from './components/Input'
import './App.css'
/**
 * 受控组件
 * state绑定value 通过onChange改变实现双向绑定
 * 
 * 非受控组件通过ref获取值
 * input设置默认值 defaultValue
 * checkbox设置默认值 defaultChecked
 * 默认值只渲染一次
 */
export default class App extends Component {

    state = {
        text: '',
        flag: true
    }

    changeValue = () => {
        this.setState({
            text: this.input.value
        })
    }

    changeChecked = () => {
        this.setState({
            flag: this.checkbox.checked
        })
    }

    render() {
        return (
            <div>
                <Input />
                {/* 非受控组件 */}
                <input type="text" defaultValue="我是非受控组件默认值" ref={el => this.input = el} onChange={this.changeValue} />
                <input type="checkbox" defaultChecked={true} ref={el => this.checkbox = el} onChange={this.changeChecked} />
                <p>{this.state.text}</p>
                {JSON.stringify(this.state.flag)}
            </div>
        )
    }
}
