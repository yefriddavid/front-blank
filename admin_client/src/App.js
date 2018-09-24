import React, { Component } from 'react'

import LoginPage from './containers/LoginPageContainer'
import FriendlyRoutesLayout from './containers/Layouts/Friendly'
import GuestRoutesLayout from './containers/Layouts/Guest'

import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import configureStore from './store/configurateStore'
import { FriendlyRoutes } from "callcenter2_react_components"
import { RouteNames } from './routes/Miscellany'

const store = configureStore()


class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter basename= {`/${process.env.REACT_APP_PREFIX}/`}>
          <Switch>
            <Route path="/" exact render={(props) => (
              <Redirect to={{pathname: RouteNames.login}} />
            )} />
            <Route path={ RouteNames.rootOauth } component={ GuestRoutesLayout } />
            <FriendlyRoutes path={ RouteNames.root } component={ FriendlyRoutesLayout } />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}




export default App
