import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../../containers/HomeContainer';
import Welcome from '../../../containers/WelcomeContainer';
import Pause from '../../../containers/PausedViewContainer';
import Accessing from '../../../containers/AccessingContainer';
import NavBar from '../../Elements/NavBar/NavBar';

export default class Screen extends Component {
  render() {
    return(
      <div className="FriendlyLayout">
        <NavBar withButtons={ true }/>
        <Route path="/y/softphone" component={ Home } />
        <Route path="/y/pause/:reazonId" component={ Pause } />
      </div>
    );
  }
}






