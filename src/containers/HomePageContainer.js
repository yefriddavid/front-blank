import React, { Component } from 'react'
import HomePage from '../components/HomePage/HomePage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class HomePageContainer extends Component {
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
      //websocket: bindActionCreators(wsActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)



