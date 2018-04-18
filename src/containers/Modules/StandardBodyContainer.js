import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as asteriskActions from '../../actions/asterisk'
import { connect } from 'react-redux'
import Tick from '../../components/Elements/Body/Standard/Tick/Tick'
/*import Softphone from '../components/Softphone/Softphone'
import CheckAccess from '../components/Softphone/CheckAccess'
import * as authActions from '../actions/auth'
import * as accessActions from '../actions/access'
import * as wsActions from '../actions/websocket'
import history from '../history/browserHistory'
import { Redirect } from 'react-router-dom';*/



class StandardBodyContainer extends Component {
  hold() {
    alert("quieres pausar la llamada")
  }
  render() {

    //const response = this.props.access

    return (
      <Tick>
        soy el body
      </Tick>
    )
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
      //auth: bindActionCreators(authActions, dispatch),
      asterisk: bindActionCreators(asteriskActions, dispatch),
      //access: bindActionCreators(accessActions, dispatch),
      //websocket: bindActionCreators(wsActions, dispatch)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StandardBodyContainer)

