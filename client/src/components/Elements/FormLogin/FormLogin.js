import React, { Component } from 'react'
import cx from "classnames"

import { Grid, Row, Form, FormGroup, Col, Checkbox, ControlLabel, Button, FormControl, Panel } from 'react-bootstrap'

import styles from './FormLogin.css'


class FormLogin extends Component {
  contructor(props){
    this.setState({
      username: null,
      password: null
    })
  }
  onInputChange(e){
    this.setState({[e.target.id]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state)
  }
  render() {
    const { username, password } = this.state || { username: "", password: "" }
    //console.log(styles)
    return (
        <div>
          <h1 className={ cx({"text-center": true, [styles.FormLogin__Title]:true}) }>Sign in</h1>
          <div className={ cx({[styles.FormLogin__Wall]: true}) }>
            <img className={ styles.FormLogin__ProfileImage} src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                alt="" />
            <Form className={styles.FormLogin} onSubmit={ this.onSubmit.bind(this) } >
              <FormControl className={cx({[styles.FormLogin__Input]:true, [styles["FormLogin__Input--email"]]: true})} type="text" id="email" placeholder="Email" value={ username } onChange = { this.onInputChange.bind(this) } />
              <FormControl className={cx({[styles.FormLogin__Input]: true, [styles["FormLogin__Input--password"]]: true})} type="password" id="password" placeholder="Password" value={ username } onChange = { this.onInputChange.bind(this) } />
              <Button type="submit"  className="btn-lg btn-primary btn-block">Sign in</Button>
              <Checkbox className= {styles.FormLogin__Rememberme__Input}>Remember me</Checkbox>
              <a href="#" className="pull-right FormLogin__NeedHelp">Need help? </a>
              <span className="clearfix"></span>
            </Form>
          </div>
          <a href="#" className="text-center FormLogin__NewAccount">Create an account </a>
        </div>
    )
  }
}

export default FormLogin
