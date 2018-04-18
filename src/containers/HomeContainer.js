import React, { Component } from 'react'
import HomeComponent from '../components/Home/Home'
//import CheckAccess from '../components/Accessing/CheckAccess'
import { connect } from 'react-redux'
import * as asteriskActions from '../actions/asterisk'
import * as authActions from '../actions/auth'
import * as accessActions from '../actions/access'
import * as wsActions from '../actions/websocket'
import { bindActionCreators } from 'redux'
import history from '../history/browserHistory'
import { Redirect } from 'react-router-dom';



class SoftphoneContainer extends Component {
  /*constructor(props){
    super(props)
  }*/

  componentWillMount() {
    //this.props.actions.access.fetch()
  }
  /*componentWillMount() {
    let url = window.location.href
    let q = /q=([^&]+)/.exec(url)
    let p = /p=([^&]+)/.exec(url)

    //this.context.router.transitionTo('/')

    if(q === null || p === null)
      history.push('/login')
    else{
      const data = { user: p[1], pass: q[1]  }
      this.props.actions.auth.login(data)
    }
  }*/
  logout() {
    //alert("ddd")
    this.props.actions.auth.logout();
    //this.props.actions.asterisk.initCall()
    //alert("abcd")
  }
  signin() {
    var url = window.location //"http://www.example.com/index.php?myParam=384&login=admin"; // or window.location.href for current url
    let q = /q=([^&]+)/.exec(url)
    let p = /p=([^&]+)/.exec(url)

    const data = { user: p[1], pass: q[1]  }
    this.props.actions.auth.login(data)
    //this.props.actions.access.ping();
  }
  initCall(){
    //this.props.actions.asterisk.initCall()
  }
  render() {

    const response = this.props.access.error.response || { response: { status: false } }
    //console.log("me", response)
    //console.log("me", this.props.access.error)
    if(response.status === 401)
      return <Redirect to={`/n/login`} />

        //console.log("-----------------------", this.props.login.success)
        //console.log("-----------------------", this.props.access.success)

    if(
      //this.props.login.access === false
      //||
      this.props.access.success === false
    ){
      return <Redirect to={`/n/accessing`} />
        //window.location.href = "/accessing"

        //return (<CheckAccess>Validando acceso</CheckAccess>)
    }

    return (
      <HomeComponent {...this.props} initCall= { this.initCall.bind(this) } authSignout = { this.logout.bind(this) } authSignin= { this.signin.bind(this)} />
    );
  }
}


const mapStateToProps = (state) => {
  const { auth } = state
  const { access, login, ping, authtest } = auth
  const { webSockets } = state
  return {
    //webSocket: webSockets,
    //ping,
    //asterisk,
    //authtest,
    //login,
    access
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      auth: bindActionCreators(authActions, dispatch),
      //asterisk: bindActionCreators(asteriskActions, dispatch),
      //access: bindActionCreators(accessActions, dispatch),
      //websocket: bindActionCreators(wsActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoftphoneContainer)



