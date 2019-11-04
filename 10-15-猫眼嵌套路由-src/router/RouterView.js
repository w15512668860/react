import React, { Component } from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

export default class RouterView extends Component {
    render() {
        // 传进来的路由配置
        let { routes } = this.props;
        // 筛选出来重定向组件
        let redirect = routes.filter(v => v.redirect);
        // 筛选出来路由组件
        routes = routes.filter(v => !v.redirect);

        return (
            <Switch>

                {routes.map((v, i) =>  {
                    if (v.children) {
                        return <Route key={i} path={v.path}
                            render={(props) => {
                                // props => 路由对象 必须手动传
                                // 能给组件传参
                                return <v.component routes={v.children} {...props}></v.component>
                            }}
                        ></Route>
                    } else {
                        // 直接把路由对象添加到组件的props里面
                        // 不能给组件传参
                        return <Route key={i} path={v.path} component={v.component}></Route>
                    }
                })}

                {redirect.map((v, i) => <Redirect key={i} from={v.path} to={v.redirect} />)}
                
            </Switch>
        )
    }
}
