import React, { Component } from 'react'
import LoginPage from '../components/LoginPage/LoginPage'
import * as authActions from '../actions/auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import md5 from "react-native-md5";


class RefreshTokenPageContainer extends Component {
  componentDidMount(){
    //this.props.actions.auth.applyRefreshToken()
    this.props.actions.auth.refreshToken()

  }
  render() {
    console.log(this)
    return (
      <div>
        refresh token
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RefreshTokenPageContainer)



