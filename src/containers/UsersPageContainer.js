import React, { Component } from 'react'
import UsersPageComponent from '../components/UsersPage/UsersPageComponent'
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
      <UsersPageComponent {...this.props} />
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



