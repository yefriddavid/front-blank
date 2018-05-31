import React, { Component } from 'react'
import FormLogin from "../Elements/FormLogin/FormLogin"

import styles from './LoginPage.css'
export default class LoginPage extends Component {
  render() {
    console.log(styles)
    return (
      <FormLogin className={styles} {...this.props} />
    )
  }
}


