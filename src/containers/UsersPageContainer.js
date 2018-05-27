import React, { Component } from 'react'
import UsersPageComponent from '../components/UsersPage/UsersPageComponent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActions from '../actions/users'



class UsersPageContainer extends Component {
  componentDidMount(){
    this.props.actions.users.collection();
  }
  render() {

    return (
      <UsersPageComponent {...this.props} />
    );
  }
}


const mapStateToProps = (state) => {
  const { users } = state
  return {
    users
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      users: bindActionCreators(usersActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer)



