import React, { Component } from 'react';
//import { Button, Glyphicon, PageHeader, Navbar, MenuItem, NavDropdown , Nav, NavItem } from 'react-bootstrap'
import Login from '../../../containers/LoginContainer'
import Welcome from '../../../containers/WelcomeContainer'

import Accessing from '../../../containers/AccessingContainer'
import AutoLogin from '../../../containers/AutoLoginContainer'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../../Elements/NavBar/NavBar';

import './Common.css'

export default class Screen extends Component {
  render() {
    return(
      <div>
        <NavBar withButtons={ false }/>

        <Route path="/n/nut" component={ AutoLogin } />
        <Route path="/n/welcome" component={ Welcome } />
        <Route path="/n/accessing" component={ Accessing } />
        <Route path="/n/login" render={(props) => (
          <Redirect to={{pathname: "/n/welcome"}} />
        )} />
    </div>
    );
  }
}






