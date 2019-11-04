import React, { Component } from 'react'
import './App.css'
import Swiper from './components/Swiper'
export default class App extends Component {

    state = {
        arr: ['a', 'b', 'c', 'd']
    }

    render() {
        return (
            <div>
                <Swiper title="my-swiper" h2={<h2>这是传入的react元素</h2>}>
                    {this.state.arr.map(v => (
                        <div key={v}>{v}</div>
                    ))}
                </Swiper>
            </div>
        )
    }
}
