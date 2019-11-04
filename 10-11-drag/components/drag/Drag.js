import React, { Component } from 'react'

export default class Drag extends Component {

    state = {
        top: 0,
        left: 0,
    }

    mousedown = (ev) => {
        // 鼠标按下位置
        let { pageX, pageY } = ev;

        // div距离窗口的距离
        let { offsetLeft, offsetTop } = ev.target;

        // 鼠标到div的距离
        this.disX = pageX - offsetLeft;
        this.disY = pageY - offsetTop;

        document.addEventListener('mousemove', this.mousemove, false)
        document.addEventListener('mouseup', this.mouseup , false)
    }

    mousemove = (e) => {
        // 鼠标移动位置
        let movePageX = e.pageX;
        let movePageY = e.pageY;

        this.setState({
            top: movePageY - this.disY,
            left: movePageX - this.disX,
        })
    }

    mouseup = () => {
        document.removeEventListener('mousemove', this.mousemove);
        document.removeEventListener('mouseup', this.mouseup);
    }

    render() {
        let { left, top } = this.state
        return (
            <div className="drag" style={{top: top, left: left}} onMouseDown={this.mousedown}></div>
        )
    }
}
