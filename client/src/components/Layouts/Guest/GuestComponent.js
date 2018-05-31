import React, { Component } from 'react'
//import './Guest.css'
//import { Container, Row, Col } from 'reactstrap'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Guest extends Component {
  render() {
    return(
      <Grid>
        <Row>
          <Col sm='6' md={4} mdOffset= {4}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}

