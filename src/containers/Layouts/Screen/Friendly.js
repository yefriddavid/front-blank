import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../../containers/HomePage'
import UsersPage from '../../../containers/UsersPage'

export default class Screen extends Component {
  render() {
    return(
      <div className="FriendlyLayout">
        <NavBar withButtons={ true }/>
        <Route path="/app/home" component={ Home } />
        <Route path="/app/users" component={ UsersPage } />
      </div>
    );
  }
}






