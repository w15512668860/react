import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export default class RouterView extends Component {
    render() {
        let { routes } = this.props;
        let redirect = routes.filter(v => v.redirect);
        let realRoutes = routes.filter(v => !v.redirect);

        return (
            <Switch>
                {
                    realRoutes.map((v, i) => {
                        return <Route key={i} path={v.path} component={v.component}></Route>
                    })
                }
                {
                    redirect.map((v,i) => <Redirect key={i} from={v.path} to={v.redirect} />)
                }
            </Switch>
        )
    }
}
