import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import LoginPage from '../LoginPageContainer'
import GuestComponent from '../../components/Layouts/Guest/GuestComponent'
import { RouteNames } from '../../routes/Miscellany'


export default class Guest extends Component {
  render() {
    return(
      <GuestComponent>
        <Route exac path={ RouteNames.login } component={ LoginPage } />
      </GuestComponent>
    );
  }
}






