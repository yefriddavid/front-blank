import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';

import SelectCmp from '../SelectCmp/SelectCmp'
import { Grid, Col, Row, ButtonToolbar, Button } from 'react-bootstrap'

import './CampaingBox.css';

/*const CampaingBox = props => {
  return (
    <div className="CampaingBox">
      <Grid>
        <Row>
          <Col md={4} xs={12}>
            <span className="CampaingBox__label">Campaña</span>
          </Col>
          <Col md={ 6 }>

            <div className="CampaingBox__campaing">
              <SelectCmp />
              <ButtonCmp title={"Entrar"} />
            </div>

          </Col>
        </Row>
      </Grid>
    </div>
  )
};*/

const CampaingBox = props => {
  return (
    <div className="CampaingBox">
      <span className="CampaingBox__label">Campaña</span>
      { props.children }
    </div>
  )
};


export default CampaingBox;
