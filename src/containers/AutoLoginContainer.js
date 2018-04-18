import React, { Component } from 'react'
import AutoLogin, { LoginFailed } from '../components/AutoLogin/AutoLogin'
import { connect } from 'react-redux'
import * as authActions from '../actions/auth'
import * as accessActions from '../actions/access'
import * as wsActions from '../actions/websocket'
import { bindActionCreators } from 'redux'
import history from '../history/browserHistory'
import { Redirect } from 'react-router-dom';

class AutoLoginContainer extends Component {
  componentWillMount() {
    let { state: params } = this.props.location || { state: false }

    if(params===undefined)
      return <Redirect to={`/n/iogin`} />
        //window.location.href = "/login";

    params = params.from.search
    let q = /q=([^&]+)/.exec(params)
    let p = /p=([^&]+)/.exec(params)

    if(q === null || p === null){
      return <Redirect to={`/n/iogin`} />
        //window.location.href = "/login";

    }else{
      const data = { user: p[1], pass: q[1]  }
      this.props.actions.auth.login(data)
    }
  }
  render() {
    const { login } = this.props
    let loginStatusCode  = login.status || false
      /*if(accessStatusCode === false)
      accessStatusCode = access.status
    else
      accessStatusCode = accessStatusCode.status*/


    if(loginStatusCode === 200)
      return <Redirect to={`/n/accessing`} />


    if(loginStatusCode === 401)
      return (
        <LoginFailed />
      )


    return (
      <AutoLogin />
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

export default connect(mapStateToProps, mapDispatchToProps)(AutoLoginContainer)



