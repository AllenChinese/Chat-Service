import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../views/login'
import ChatRoom from '../views/chatRoom'

export default class RouteConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/chatRoom" component={ChatRoom} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}