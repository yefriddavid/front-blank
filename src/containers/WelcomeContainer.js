import React, { Component } from 'react'
import Welcome from '../components/Welcome/Welcome'
import { connect } from 'react-redux'
import * as authActions from '../actions/auth'
import * as accessActions from '../actions/access'
import * as wsActions from '../actions/websocket'
import { bindActionCreators } from 'redux'

class WelcomeContainer extends Component {

  render() {
    return (
      <Welcome />
    );
  }
}


const mapStateToProps = (state) => {

  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)



