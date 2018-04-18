import React, { Component } from 'react'
import PausedView from '../components/PausedView/PausedView'
//import CheckAccess from '../components/Accessing/CheckAccess'
import { connect } from 'react-redux'
import * as asteriskActions from '../actions/asterisk'
//import * as authActions from '../actions/auth'
import * as sessionActions from '../actions/session'
//import * as wsActions from '../actions/websocket'
import { bindActionCreators } from 'redux'
import history from '../history/browserHistory'
import { Redirect } from 'react-router-dom';

class PausedViewContainer extends Component {
  constructor(props){
    super(props)
    this.startPause = this.startPause.bind(this)
    this.endPause = this.endPause.bind(this)
  }

  componentDidMount(){
    //this.startPause()
    this.endPause()
  }
  startPause(){
    this.props.actions.session.pauseCampaign({ action: "start" })
    //alert("ss")
  }
  endPause(){
    this.props.actions.session.pauseCampaign({ action: "end" })
    //alert("ss")
  }
  render() {
    return (
      <PausedView  {...this.props} />
    );
  }
}


const mapStateToProps = (state) => {
  const { auth } = state
  const { access, login, ping, authtest } = auth
  const { webSockets } = state
  return {
    access
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      session: bindActionCreators(sessionActions, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PausedViewContainer)



