import React, { Component, Children } from 'react'
import swiper from 'swiper'
import 'swiper/css/swiper.css'

export default class Swiper extends Component {

    componentDidUpdate(){
        // 等props修改并更新视图的时候创建swiper
        this.mySwiper = new swiper(this.swiper, {
            loop: true,
            autoplay: true
        })
    }

    render() {
        return (
            <div className="swiper-container" ref={el => this.swiper = el}>
                <div className="swiper-wrapper">
                    {Children.map(this.props.children, (v, i) => (
                        <div className="swiper-slide" key={i}>
                            {v}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
