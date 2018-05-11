import React, { Component } from 'react'

import LoginPage from './containers/LoginPageContainer'
import HomePage from './containers/HomePageContainer'

import { Provider } from "react-redux";
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import configureStore from './store/configurateStore'
import history from './history/browserHistory'
import { fakeAuth } from './http/fakeAuth'
//import { PrivateRoutes, FriendlyRoutes } from './routes/PrivateRoutes'
import FriendlyRoutesMiddleware from './routes/PrivateRoutesMiddleware'
//import AccessingMiddleware from './routes/AccessingMiddleware'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter basename="/myApp/">
            <Switch>
              <Route path="/xx" render={(props) => (
                <Redirect to={{pathname: "/auth/login"}} />
              )} />
              <Route path="/auth/login" component={ LoginPage } />
              <FriendlyRoutesMiddleware path="/app/home" component={ HomePage } />
            </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}




export default App
