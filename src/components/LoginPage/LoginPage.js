import React, { Component } from 'react'
import FormLogin from '../Elements/FormLogin/FormLogin'
//import { ListGroup, ListGroupItem, Grid, Col, Row, ButtonToolbar, Button } from 'react-bootstrap'
import './LoginPage.css'

export default class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <FormLogin {...this.props} />
      </div>
    )
  }
}


