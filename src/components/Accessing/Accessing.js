import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Col, Row, ButtonToolbar, Button } from 'react-bootstrap'
import scriptLoader from 'react-async-script-loader'
import ScreenContainer from '../Layouts/Screen/Screen'

import MicroIcon from 'react-microvoz-icons';
import './Accessing.css';

class Softphone extends Component {
		constructor(props){
			super(props)
		}
		componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
      //if (this.props.access.loadedLibrary === false) { // load finished
			if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
				if (isScriptLoadSucceed) {
          this.props.actions.access.fetch()
        }
        else this.props.onError()
    }
  }
  render() {
    const { access, webSocket, login: loginData, ping, authtest } = this.props
    const wsState = webSocket.settings.webSocketConnectionState
    const { data: dataAccess } = access || { data: {  } }
    ///const { data: dataLogin } = login.rest.data || { data: {  } }

    const accessState = access.status

    const { exten } = dataAccess || { exten: "Cargando..." }
    const { full_name } = dataAccess || { full_name: 'Cargando...' }
    const { status: loginStatus } = loginData || { status: '...' }
    //const { status: accessCode } = access || { status: '' }
    const { message: apiAuthenticationTest } = authtest
    const { message: pingApiTest } = ping

    let accessStatusCode  = access.error.response || false
    if(accessStatusCode === false)
      accessStatusCode = access.status
    else
      accessStatusCode = accessStatusCode.status

    let wsTextState = "Desconectado"

    if (wsState===true)
      wsTextState = "Conectado"

    if(accessStatusCode === 401)
    return (
           <div className="StatusBox">
              <MicroIcon icon={"warning"} color={"#FBB03B"} size={"68px"}/>
              <h3 className="StatusBox__message StatusBox__message--warning">No tiene acceso al sistema <br />[error 401].</h3>
          </div>
    )

    if(accessStatusCode === 500)
    return (
           <div className="StatusBox">
              <MicroIcon icon={"warning"} color={"#FBB03B"} size={"68px"}/>
              <h3 className="StatusBox__message StatusBox__message--warning">Error Interno en el servidor <br />[error 500].</h3>
          </div>
    )



    return (

      <div>
              <div className="StatusBox">
                <MicroIcon icon={"power"} color={"#B3B3B3"} size={"68px"}/>
                <h3 className="StatusBox__message">Accediendo al sistema...</h3>
              </div>
      <Grid>
        <Row>
          <Col>

                <ul>
                  <li>
                    Estado Socket Servidor: {' '}
                    <b>{wsTextState}</b>
                  </li>

                  <li>
                    Estado Socket Asterisk: {' '}
                    <b>En espera</b>
                  </li>

                  <li>
                    Estado Acceso: {' '}
                    <b>{accessState}</b>
                  </li>
                  <li>
                    Usuario: {' '}
                    <b>{full_name}</b>
                  </li>
                  <li>
                    Extension: {' '}
                    <b>{exten}</b>
                  </li>
                  <li>
                    Codigo de Acceso: {' '}
                    <b>{ accessStatusCode } </b>
                  </li>
                  <li>
                    Codigo de Login: {' '}
                    <b>{ loginStatus } </b>
                  </li>
                  <li>
                    Ping Api State: {' '}
                    <b>{ pingApiTest } </b>
                  </li>
                  <li>
                    Estado Api Autenticado: {' '}
                    <b>{ apiAuthenticationTest } </b>
                  </li>
                </ul>
              <br/>


          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}


export default scriptLoader(
  [
    "https://www.doubango.org/sipml5/SIPml-api.js"
  ],
  //'/assets/sip.js'
)(Softphone)



