import React, { Component } from 'react';
import { Grid, Col, Row, ButtonToolbar, Button } from 'react-bootstrap'
import MicroIcon from 'react-microvoz-icons';


class Loading extends Component {
  render() {
    return (
      <div>
        <div className="StatusBox">
          <MicroIcon icon={"power"} color={"#B3B3B3"} size={"68px"}/>
          <h3 className="StatusBox__message">Validando Autenticacion...</h3>
        </div>
      </div>
    );
  }
}

export class LoginFailed extends Component {
  render() {
    return (
      <div>
        <div className="StatusBox">
          <MicroIcon icon={"warning"} color={"#FBB03B"} size={"68px"}/>
          <p className="StatusBox__message StatusBox__message--warning">Usuario o contraseña incorrecta. Intente nuevamente o contacte al supervisor.</p>
        </div>
      </div>
    );
  }
}

export default Loading


