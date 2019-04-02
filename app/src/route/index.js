import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../views/login'

export default class RouteConfig extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}