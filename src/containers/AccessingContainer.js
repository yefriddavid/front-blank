import React, { Component } from 'react'
import Accessing from '../components/Accessing/Accessing'
import { connect } from 'react-redux'
import * as asteriskActions from '../actions/asterisk'
import * as authActions from '../actions/auth'
import * as accessActions from '../actions/access'
import * as wsActions from '../actions/websocket'
import { bindActionCreators } from 'redux'
import history from '../history/browserHistory'
import { Redirect } from 'react-router-dom';



class AccessingContainer extends Component {
  render() {

    if(
      //this.props.login.success === true &&
      this.props.access.success === true
    )
      return <Redirect to={`/y/softphone`} />


    return (
      <Accessing {...this.props} />
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
    //asterisk,
    authtest,
    login,
    access
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      auth: bindActionCreators(authActions, dispatch),
      asterisk: bindActionCreators(asteriskActions, dispatch),
      access: bindActionCreators(accessActions, dispatch),
      websocket: bindActionCreators(wsActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccessingContainer)
//export default AccessingContainer



