import React, { Component } from 'react'
import ChatPage from './containers/ChatPageContainer'
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import configureStore from './store/configurateStore'


const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ ChatPage } />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}




export default App
