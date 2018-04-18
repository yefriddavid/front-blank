import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Col, Row, ButtonToolbar, Button } from 'react-bootstrap'
import scriptLoader from 'react-async-script-loader'
import ScreenContainer from '../Layouts/Screen/Screen'





class Softphone extends Component {
		//let loadTypeKit = null;
		constructor(props){
			super(props)

			//me.david()
		}
		componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
			if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
				if (isScriptLoadSucceed) {
							var params = {
													realm: "10.10.0.60",
													impi: "1059",
													impu: "sip:1059@10.10.0.60",
													password: "microvoz123a",
													display_name: "1059",
													websocket_proxy_url: "ws://10.10.0.60:8088/ws",
													outbound_proxy_url: "",
													ice_servers: "",
													enable_rtcweb_breaker: "",
													//events_listener: ,
													enable_early_ims: true,
													enable_media_stream_cache: true,
													bandwidth: undefined,
													video_size: undefined,
													sip_headers: [
																	{ name: 'User-Agent', value: 'IM-client/OMA1.0 sipML5-v1.2016.03.04' },
																	{ name: 'Organization', value: 'Doubango Telecom' }
													]
											};
          //this.actions.asterisk.putSip()
          //let david = new window.SIPml.Stack(params)
          //console.info(david)

      }
      else this.props.onError()
    }
		}
  componentDidMount(){

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
    const { status: accessCode } = access || { status: '' }
    const { message: apiAuthenticationTest } = authtest
    const { message: pingApiTest } = ping


    let wsTextState = "Desconectado"

    if (wsState===true)
      wsTextState = "Conectado"

    return (
      <ScreenContainer>
      <div className="well">

        <Grid>
          <Col>
            <Row>
              <ButtonToolbar>
                <Button disabled= { access.success === false } bsStyle="primary">Atender</Button>
                <Button disabled= { access.success === false } bsStyle="success">Cortar</Button>
                <Button disabled= { access.success === false } bsStyle="info">Terminar</Button>
                <Button disabled= { access.success === false } bsStyle="warning" onClick = { e => this.props.authSignout() }>Cerrar Session</Button>
                <Button disabled= { access.success === true  || loginData.isFetching === true } bsStyle="warning" onClick = { e => this.props.authSignin() }>Conectar</Button>
              </ButtonToolbar>
            </Row>

            <Col>
              <Row>
                <h2>Estado de conexion</h2>
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
                    <b>{ accessCode } </b>
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
              </Row>
              </Col>
          </Col>

        </Grid>

<ListGroup>
  <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
  <ListGroupItem header="Heading 2" href="#">
    Linked item
  </ListGroupItem>
  <ListGroupItem header="Heading 2" href="#">
    Linked item
  </ListGroupItem>
  <ListGroupItem header="Heading 3" bsStyle="danger">
    Danger styling
  </ListGroupItem>
</ListGroup>


      </div>
    </ScreenContainer>
    );
  }
}


export default scriptLoader(
  [
    "https://www.doubango.org/sipml5/SIPml-api.js"
  ],
  //'/assets/sip.js'
)(Softphone)


//export default Softphone


