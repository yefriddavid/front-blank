import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Col, Row, ButtonToolbar, Button } from 'react-bootstrap'
//import scriptLoader from 'react-async-script-loader'
import ScreenContainer from '../Layouts/Screen/Screen'

import UserBox from '../../containers/Modules/UserBoxContainer'
import ListBox, { BasicItem, BodyItem } from '../Elements/ListBox/ListBox'
//import CampaingBox from '../Elements/CampaingBox/CampaingBox'
import CheckAccess from '../Accessing/CheckAccess'
import Body from '../../containers/Modules/StandardBodyContainer'
import Campaign from '../../containers/Modules/CampaignContainer'

//import UserBox from '../UserBox/UserBox'
//import CampaingBox from '../CampaingBox/CampaingBox'
//import CallBox from '../CallBox/CallBox'
import CallBox from '../../containers/Modules/CallBoxContainer'
import PausedView from '../PausedView/PausedView'


export default class Softphone extends Component {
  onSelectCampaign(campaignId){
    alert(campaignId)
  }
  render() {
    /*const { access, webSocket, login: loginData, ping, authtest } = this.props
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
      wsTextState = "Conectado"*/



    //<div className="ListBoxClass">
    if(process.env.NODE_ENV === "production")
      return (
        <div>
          <ListBox>
            <BasicItem>
              <UserBox withError={ true }/>
            </BasicItem>
            <BasicItem>
              <Campaign inCampaing={ false }/>
            </BasicItem>
            <BodyItem>
              <CallBox callStatus={ "online" } nivel= { 1 } color = "#4285f4" labelText= "ONLINE" />
            </BodyItem>
          </ListBox>
        </div>
    );
    else
      return (
      <div>
        <ListBox>
          <BasicItem>
            <UserBox withError={ true }/>
          </BasicItem>
          <BasicItem>
            <Campaign inCampaing={ false }/>
          </BasicItem>
          <BodyItem>
            <CallBox callStatus={ "online" } nivel= { 1 } labelText= "ONLINE" color="#4285f4" />
          </BodyItem>
          <BodyItem>
            <CallBox callStatus={ "online" } nivel= { 4 } labelText= "DISCANDO" />
          </BodyItem>
          <BodyItem>
            <CallBox callStatus={ "finalizada" } nivel= { 2 } labelText="LLAMADA FINALIZADA" description="54110413480" color="red"/>
          </BodyItem>
          <BodyItem>
            <CallBox callStatus={ "hablando" } nivel= { 2 } labelText="WRAP UP TIME" description="54110413480" color="red"/>
          </BodyItem>
          <BodyItem>
            <CallBox callStatus={ "hablando" } nivel= { 5 } labelText="LLAMADA FINALIZADA" description="54110413480" color="red"/>
          </BodyItem>
          <BodyItem>
            <CallBox callStatus={ "hablando" } nivel= { 3 } labelText="HABLANDO" description="54110413480" />
          </BodyItem>

        </ListBox>
        {/* menu pausa
        <PausedView />
        fin menu pausa */}

        {
          /*<UserBox {...this.props.access} withError={ false }/>
            <CallBox callStatus={ "online" } />
            */
        }





        {/*<Grid>
          <Col>
            <Row>
              <ButtonToolbar>
                <Button disabled= { access.success === false } bsStyle="primary">Atender</Button>
                <Button disabled= { access.success === false } bsStyle="success">Cortar</Button>
                <Button disabled= { access.success === false } bsStyle="info">Terminar</Button>
                <Button disabled= { access.success === false } bsStyle="warning" onClick = { e => this.props.authSignout() }>Cerrar Session</Button>
                <Button disabled= { access.success === false } bsStyle="success" onClick = { e => this.props.initCall() }>iniciar llamado</Button>
                <Button disabled= { access.success === true  || loginData.isFetching === true } bsStyle="warning" onClick = { e => this.props.authSignin() }>Conectar</Button>
              </ButtonToolbar>
            </Row>
          </Col>
        </Grid>*/}


      </div>
    );
  }
}


