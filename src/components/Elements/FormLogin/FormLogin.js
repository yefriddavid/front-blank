import React, { Component } from 'react'
//import MicroIcon from 'react-microvoz-icons';
import { Grid, Row, Form, FormGroup, Col, Checkbox, ControlLabel, Button, FormControl, Panel } from 'react-bootstrap'

import './FormLogin.css'


class FormLogin extends Component {
  contructor(props){
    this.setState({
      username: null,
      password: null
    })
    //this.onSubmit = this.onSubmit.bind(this)
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

    return (
<div className="container">
  <div className="row">
    <div className="col-sm-6 col-md-4 col-md-offset-4">
      <h1 className="text-center FormLogin__Title">Sign in</h1>
        <div className="FormLogin__Wall">
          <img className="FormLogin__ProfileImage" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
              alt="" />
          <Form className="FormLogin" onSubmit={ this.onSubmit.bind(this) } >
            {/*<input type="text" className="form-control FormLogin__Input FormLogin__Input--email" placeholder="Email" required autofocus />
            {/*<input type="password" className="form-control FormLogin__Input FormLogin__Input--password" placeholder="Password" required />*/}
  <FormControl className="FormLogin__Input FormLogin__Input--email" type="text" id="email" placeholder="Email" value={ username } onChange = { this.onInputChange.bind(this) } />
  <FormControl className="FormLogin__Input FormLogin__Input--password" type="password" id="password" placeholder="Password" value={ username } onChange = { this.onInputChange.bind(this) } />
            <Button type="submit"  className="btn-lg btn-primary btn-block">Sign in</Button>
            {/*}<label className="FormLogin__Rememberme checkbox pull-left">*/}
              <Checkbox className='FormLogin__Rememberme__Input'>Remember me</Checkbox>
              {/*}<input className='FormLogin__Rememberme__Input' type="checkbox" value="remember-me" />
                Remember me*/}
                {/*}</label>*/}
            <a href="#" className="pull-right FormLogin__NeedHelp">Need help? </a>
            <span class="clearfix"></span>
          </Form>
        </div>
      <a href="#" className="text-center FormLogin__NewAccount">Create an account </a>
    </div>
  </div>
</div>
    )
  }
}

export default FormLogin
