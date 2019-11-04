import React, { Component } from 'react'
import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import Home from './views/home/Home'
import Detail from './views/detail/Detail'
import List from './views/list/List'

import './App.css'
/**
 * 请求接口 axios
 * mock数据 mockjs
 * 路由 react-router-dom
 * 
 * <HashRouter></HashRouter> => 路由跟组件 有# 通过onhashchange 实现
 * <BrowserRouter></BrowserRouter> => 路由跟组件 无# 通过h5 history
 * 
 * <Route exact path="/home" component={Home}></Route> => 配置路由组件
 * <Link exact to="/home">home</Link> => 跳转
 * exact => 精准匹配
 * 
 * <NavLink activeClassName="active" activeStyle={{background: 'black'}} to="/home">home</NavLink> => 导航跳转
 * activeClassName => 高亮类名
 * activeStyle={{background: 'black'}} => 高亮样式
 * 
 * Switch => 只匹配第一个路由
 * 
 * <Redirect from="/" to="/home" /> => 重定向组件
 * from => 从哪个路径过来
 * to => 到哪个路由
 */

export default class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    {/* <Link to="/home">home</Link>
                        <Link to="/detail">detail</Link> */}
                        {/* <NavLink activeClassName="active" activeStyle={{background: 'black'}} to="/home">home</NavLink>
                        <NavLink activeClassName="active" to="/detail">detail</NavLink> */}
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/detail" component={Detail}></Route>
                        <Route path="/list" component={List}></Route>
                        <Redirect from="/" to="/home" />
                    </Switch>                    
                </HashRouter>
            </div>
        )
    }
}
