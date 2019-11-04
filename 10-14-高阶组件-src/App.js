import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import Menu from './components/Menu'
import DragComponent from './components/Drag'

// function DragComponent(Com) {
//     class DragCom extends Component {

//         render() {
//             return <div>
//                 <h1>drag</h1>
//                 <Com {...this.props} />
//             </div>
//         }
//     }
//     return DragCom
// }

let WithDragComponentNav = DragComponent(Nav);
let WithDragComponentMenu = DragComponent(Menu);

export default class App extends Component {

    state = {
        list: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }

    render() {
        
        return (
            <div className="wrap">
                <WithDragComponentNav list={this.state.list} />
                <WithDragComponentMenu />
            </div>
        )
    }
}
