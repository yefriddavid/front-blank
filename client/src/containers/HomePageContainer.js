import React, { Component } from 'react'
import HomePage from '../components/HomePage/HomePage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pingActions from '../actions/ping'



class HomePageContainer extends Component {
  componentDidMount(){
    this.props.actions.guest.ping();
  }
  render() {
    //const response = this.props.access.error.response || { response: { status: false } }

    return (
      <HomePage {...this.props} />
    );
  }
}


const mapStateToProps = (state) => {
  return {

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      guest: bindActionCreators(pingActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)



