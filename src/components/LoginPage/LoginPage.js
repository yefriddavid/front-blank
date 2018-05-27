import React, { Component } from 'react'
import FormLogin from "../Elements/FormLogin/FormLogin"

export default class LoginPage extends Component {
  render() {
    return (
      <FormLogin {...this.props} />
    )
  }
}


