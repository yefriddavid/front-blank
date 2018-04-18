import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as asteriskActions from '../../actions/asterisk'
import { connect } from 'react-redux'
import CallBox, { KeyPad } from '../../components/Elements/CallBox/CallBox'


class CallBoxContainer extends Component {
  render() {
    let IconId
    if(true && this.props.nivel !== 1)
      IconId = "settings"

    switch (this.props.nivel) {
      case 1:
        return (
          <BasicBox {...this.props} IconId = { IconId }/>
        )
      case 2:
        return (
          <MediumBox {...this.props} IconId = { IconId }/>
        )

      case 3:
        return (
          <OncallBox {...this.props} IconId = { IconId } showMute= { true }/>
        )
      case 4:
        return (
          <BasicBox {...this.props} IconId = { IconId } />
        )
      case 5:
        return (
          <BasicBox {...this.props} IconId = { IconId } hiddenCounter={ true } />
        )
    }
  }
}


class BasicBox extends Component {
  render() {
    return (
      <CallBox {...this.props}/>
    )
  }
}

class MediumBox extends Component {
  render() {
    return (
      <CallBox {...this.props}/>
    )
  }
}

class OncallBox extends Component {
  render() {
    return (
      <div>
        <CallBox {...this.props}/>
        <KeyPad />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      //auth: bindActionCreators(authActions, dispatch),
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CallBoxContainer)

