import React, { Component } from 'react'
import ChatPageComponent from '../components/ChatPage/ChatPage'
import * as chatActions from '../actions/chatActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import md5 from "react-native-md5"


class ChatPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: null
    }
  }
  sendMessage = e => {
    e.preventDefault()
    const { message } = this.state
    this.props.actions.chat.SendMessage({ message: message })
  }
  onChangeInputMessage = e => {
    this.setState({message: e.target.value})
  }
  componentDidMount(){
    this.props.actions.chat.Connect()
  }
  render() {
    const { connected } = this.props
    return (
      <ChatPageComponent onSubmit= { this.sendMessage } connected={connected} onChangeInputMessage={this.onChangeInputMessage} />
    )
  }
}


const mapStateToProps = (state) => {
  const { connected } = state.chat.connect
  return {
    connected: connected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      chat: bindActionCreators(chatActions, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)



