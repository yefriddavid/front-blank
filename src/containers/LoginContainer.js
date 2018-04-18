import React, { Component } from 'react'
import Login from '../components/Login/Login'
import { connect } from 'react-redux'
import * as authActions from '../actions/auth'
import * as accessActions from '../actions/access'
import * as wsActions from '../actions/websocket'
import { bindActionCreators } from 'redux'

class SoftphoneContainer extends Component {

  logout() {
    this.props.actions.auth.logout();
  }
  signin() {
    this.props.actions.access.ping();
  }
  render() {
    return (
      <Login {...this.props} authSignout = { this.logout.bind(this) } authSignin= { this.signin.bind(this)} />
    );
  }
}


const mapStateToProps = (state) => {
  const { auth } = state
  const { access, login, ping, authtest } = auth
  const { webSockets } = state

  return {
    webSocket: webSockets,
    ping,
    authtest,
    login,
    access
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      auth: bindActionCreators(authActions, dispatch),
      access: bindActionCreators(accessActions, dispatch),
      websocket: bindActionCreators(wsActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoftphoneContainer)



