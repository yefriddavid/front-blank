import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FormLogin from '../../components/Elements/FormLogin'


class FormLoginContainer extends Component {
  render() {
    return (
    <FormLogin {...this.props} />
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
      //auth: bindActionCreators(authActions, dispatch),
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CallBoxContainer)

