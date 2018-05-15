import React, { Component } from 'react'

import LoginPage from './containers/LoginPageContainer'
import HomePage from './containers/HomePageContainer'
import { APP_PREFIX } from './services/config'

import { Provider } from "react-redux";
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import configureStore from './store/configurateStore'
import history from './history/browserHistory'
import { fakeAuth } from './http/fakeAuth'
//import { PrivateRoutes, FriendlyRoutes } from './routes/PrivateRoutes'
import FriendlyRoutesMiddleware from './routes/PrivateRoutesMiddleware'
//import AccessingMiddleware from './routes/AccessingMiddleware'

const store = configureStore()

const RouteNames = {
  home: '/app/home',
  login: '/oauth/login'
}


class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter basename= {`/${APP_PREFIX}/`}>
            <Switch>
              <Route path="/" exact render={(props) => (
                <Redirect to={{pathname: RouteNames.login}} />
              )} />
              <Route path={ RouteNames.login } component={ LoginPage } />
              <FriendlyRoutesMiddleware path={ RouteNames.home } component={ HomePage } />
            </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}




export default App
