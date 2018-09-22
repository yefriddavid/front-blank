import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import HomePage from '../HomePageContainer'
import UsersPage from '../UsersPageContainer'
import Navbar from '../Modules/NavbarContainer'
import FriendlyComponent from '../../components/Layouts/Friendly/FriendlyComponent'


export default class Friendly extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <FriendlyComponent className="FriendlyLayout">
        <Route exac path="/app/home" component={ HomePage } />
        <Route exac path="/app/users" component={ UsersPage } />
      </FriendlyComponent>
    )
  }
}






