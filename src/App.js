import React, { Component } from 'react'

import LoginPage from './containers/LoginPageContainer'
//import HomePage from './containers/HomePageContainer'
import FriendlyRoutesLayout from './containers/Layouts/Friendly'

//import 'bootstrap/dist/css/bootstrap.min.css';


import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import configureStore from './store/configurateStore'
import { FriendlyRoutes } from "callcenter2_react_components"

const store = configureStore()
const RouteNames = {
  root: '/app',
  home: '/app/home',
  users: '/app/users',
  login: '/oauth/login'
}



class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter basename= {`/${process.env.REACT_APP_PREFIX}/`}>
          <Switch>
            <Route path="/" exact render={(props) => (
              <Redirect to={{pathname: RouteNames.login}} />
            )} />
            <Route path={ RouteNames.login } component={ LoginPage } />
            <FriendlyRoutes path={ RouteNames.root } component={ FriendlyRoutesLayout } />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}




export default App
