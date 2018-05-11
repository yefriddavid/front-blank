import { fakeAuth } from '../http/fakeAuth'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';


//si tiene token, validarlo es


//primero valigar la fecha
//si esta vencido usar el refresh token
//si no funciona el refresh barrar el session token out and redirect to login
const FriendlyRoutes = ({ component: Component, ...rest }) => {
  let element
  //alert(fakeAuth.tokenIsValidDate())

  if(fakeAuth.isAuthenticated()){
    if(fakeAuth.tokenIsValidDate()){
      element = (<Component {...rest} />)
    }else{
      //validar el refresh token
      //this.props.actions.auth.applyRefreshToken()
    }
  }else
    element = (<Component {...rest} />)
  //element = (<Redirect to={{ pathname: '/auth/login', state: { from: rest.location }}} />)

  return (
    <Route {...rest} render={ (props) => (element)} />
  )
}

FriendlyRoutes.propTypes = {
  //accessState: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  //accessState: state.auth.access.success
})

export default connect(mapStateToProps)(FriendlyRoutes)

