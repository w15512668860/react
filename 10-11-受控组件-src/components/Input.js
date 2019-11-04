import React, { Component } from 'react'

// 受控组件
export default class Input extends Component {

    state = {
        text: 'ssss',
        checked: true
    }

    changeValue = (ev) => {
        this.setState({
            text: ev.target.value
        });
    }

    changeChecked = (ev) => {
        this.setState({
            checked: ev.target.checked
        });
    }

    render() {
        let { text, checked } = this.state
        return (
            <div>
                {/* <input value={text} onChange={this.changeValue} type="text"/> */}
                {/* <textarea name="" id="" cols="30" rows="10" value={text} onChange={this.changeValue}></textarea> */}
                {/* <select name="" id="" value={text} onChange={this.changeValue}>
                    <option value="北京">北京</option>
                    <option value="上海">上海</option>
                    <option value="宿迁">宿迁</option>
                </select> */}
                {/* <input type="checkbox" checked={checked} onChange={this.changeChecked}/> */}
                {/* <input type="radio" checked={checked} onChange={this.changeChecked}/> */}
                <p>{JSON.stringify(checked)}</p>
            </div>
        )
    }
}
