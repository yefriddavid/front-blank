import React, { Component } from 'react'
//import MicroIcon from 'react-microvoz-icons';
import { Grid, Row, Form, FormGroup, Col, Checkbox, ControlLabel, Button, FormControl, Panel } from 'react-bootstrap'

import './FormLogin.css'


class FormLogin extends Component {
  contructor(props){
    this.state = {
      username: null,
      password: null
    }

    //this.onSubmit = this.onSubmit.bind(this)
  }
  onInputChange(e){
    this.setState({[e.target.id]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    //console.log(this.props)
    this.props.onSubmit(this.state)
  }
  render() {
    const { username, password } = this.state || { username: "", password: "" }

    return (
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <Grid>
            <Row>
              <Col md={2}>

              </Col>
              <Col xs={12} md={6}>
                <Panel>
                  <Panel.Heading>Login - Microvoz</Panel.Heading>
                    <Panel.Body>
                      <Form className="FormLogin" onSubmit={ this.onSubmit.bind(this) } >
                        <FormGroup controlId="username">
                          <Col componentClass={ControlLabel} sm={2}>
                            Email
                          </Col>
                          <Col sm={10}>
                            <FormControl type="text" placeholder="Email" value={ username } onChange = { this.onInputChange.bind(this) } />
                          </Col>
                        </FormGroup>

                        <FormGroup controlId="password">
                          <Col componentClass={ControlLabel} sm={2}>
                            Password
                          </Col>
                          <Col sm={10}>
                            <FormControl type="password" placeholder="Password" value={ password } onChange = { this.onInputChange.bind(this) } />
                          </Col>
                        </FormGroup>

                        <FormGroup>
                          <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                          </Col>
                        </FormGroup>

                        <FormGroup>
                          <Col smOffset={2} sm={10}>
                            <Button type="submit">Sign in</Button>
                          </Col>
                        </FormGroup>
                      </Form>

                      </Panel.Body>
                    </Panel>
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
    )
  }
}

export default FormLogin
