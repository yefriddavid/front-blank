import React, { Component } from 'react'
import LoginPage from '../components/LoginPage/LoginPage'
import * as authActions from '../actions/authActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import md5 from "react-native-md5";


class LoginPageContainer extends Component {
  signin(payload){

    const { username, password } = payload
    //this.props.actions.auth.received()
    this.props.actions.auth.login({ username, password: md5.hex_md5(password)})

  }
  render() {
    return (
      <LoginPage {...this.props} onSubmit= { this.signin.bind(this)} />
    )
  }
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      auth: bindActionCreators(authActions, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer)



