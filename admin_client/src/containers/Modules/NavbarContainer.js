import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NavbarComponent from '../../components/Elements/Navbar/NavbarComponent'


class NavbarContainer extends Component {
  render() {
    return (
    <NavbarComponent {...this.props} />
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


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)

