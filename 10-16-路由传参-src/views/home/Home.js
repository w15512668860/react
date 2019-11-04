import React, { Component } from 'react'
import RouterView from '../../router/RouterView'
import { NavLink} from 'react-router-dom'


export default class Home extends Component {

    state = {
        navlist: [
            {
                text: '影院',
                path: '/home/movie'
            },
            {
                text: '电影',
                path: '/home/cinema'
            },
            {
                text: '我的',
                path: '/home/my'
            }
        ]
    }

    render() {
        console.log('这是home组件',this.props)
        return (
            <div className="home-wrap">
                <div className="home-main">
                    <RouterView routes={this.props.routes} />
                </div>
                <nav>
                    {this.state.navlist.map((v, i) => (
                        <NavLink activeClassName="active" to={v.path} key={i}>{v.text}</NavLink>
                    ))}
                </nav>
            </div>
        )
    }
}
