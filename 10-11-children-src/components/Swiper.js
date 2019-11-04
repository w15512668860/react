import React, { Component, Children } from 'react'
import swiper from 'swiper'
import 'swiper/css/swiper.css'

export default class Swiper extends Component {
    componentDidMount(){
        new swiper(this.swiper)
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

/**
 * children
 * <Swiper>
 *  <div></div>
 * </Swiper>
 * this.props.children
 * 1. => Object
 * 2以上 => Array
 * 
 * React.Children.map(this.props.children, callback) => 把this.props.children 转成数组
 * React.Children.forEach(this.props.children, callback) => 没有返回值 用来筛选数据
 * React.Children.count(this.props.children) => 返回children 的长度
 * React.Children.toArray(this.props.children) => 转化为数组
 * React.Children.only(this.props.children) => 验证 children 是否只有一个子节点（一个 React 元素），如果有则返回它，否则此方法会抛出错误。
 * 
 */

