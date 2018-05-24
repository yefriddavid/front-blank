import React, { Component } from 'react'
import davidx, { ExampleComponent as david, LoginScreen, StandardFormLogin as FormLogin } from "callcenter2_react_components"

export default class LoginPage extends Component {
  render() {
    return (
      <LoginScreen>
        <FormLogin {...this.props} />
      </LoginScreen>
    )
  }
}


