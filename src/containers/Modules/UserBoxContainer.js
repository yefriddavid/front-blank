import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as asteriskActions from '../../actions/asterisk'
import { connect } from 'react-redux'
import UserBox from '../../components/Elements/UserBox/UserBox'
/*import Softphone from '../components/Softphone/Softphone'
import CheckAccess from '../components/Softphone/CheckAccess'
import * as authActions from '../actions/auth'
import * as accessActions from '../actions/access'
import * as wsActions from '../actions/websocket'
import history from '../history/browserHistory'
import { Redirect } from 'react-router-dom';*/



class UserBoxContainer extends Component {
  render() {
    return (
      <UserBox {...this.props.access}/>
    )
  }
}


const mapStateToProps = (state) => {
  //const { auth } = state
  const { access } = state.auth
  //const { webSockets } = state
  return {
    //webSocket: webSockets,
    //ping,
    //asterisk,
    //authtest,
    //login,
    access
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      //auth: bindActionCreators(authActions, dispatch),
      //asterisk: bindActionCreators(asteriskActions, dispatch),
      //access: bindActionCreators(accessActions, dispatch),
      //websocket: bindActionCreators(wsActions, dispatch)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserBoxContainer)

