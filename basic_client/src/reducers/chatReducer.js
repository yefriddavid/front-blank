import * as chatActions from '../actions/chatActions'
import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'
import moment from 'moment'


const initial = {
  ping: {
    isFetching: false,
    error: false
  },
  connect: {
    isFetching: false,
    connected: false,
    error: false
  },
  send: {
    messages: [],
    timeConfirmReceive: null,
    error: false,
    payload: {},
    errorDetails: {}
  },
  receive: {
    message: null,
    name: null,
    error: false,
    payload: {},
    errorDetails: {}
  },
}

const ping = createReducer({
  [chatActions.ReceivePing]: (state, payload) => {
    return { ...state,
      isFetching: true,
      error: false,
    }
  },
  [chatActions.SendPing]: (state, payload) => {
    return { ...state,
      isFetching: true,
      error: false,
    }
  }
}, initial.ping)

const connect = createReducer({
  [chatActions.Connect]: (state, payload) => {
    return { ...state
    }
  },
  [chatActions.Disconnect]: (state, payload) => {
    return { ...state,
      connected: false
    }
  },
  [chatActions.ConnectBegin]: (state, payload) => {
    return { ...state,
      connected: false,
      isFetching: true,
      error: false,
    }
  },
  [chatActions.ConnectSuccesfull]: (state, payload) => {
    return { ...state,
      connected: true,
      isFetching: false,
      error: false,
    }
  }
}, initial.connect)

const send = createReducer({
  [chatActions.SendMessage]: (state, payload) => {
    const { messages } = state
    messages.push(
        {
          message: payload.message
        }
    )

    return { ...state,
      isFetching: true,
      messages,
      error: false
    }
  },
  [chatActions.SendMessageBegin]: (state, payload) => {
    //alert("ssssss here")
    return { ...state,
      isFetching: false,
      error: false,
      //message: initial.send.message,
      //payload: initial.send.payload
    }
  },
  [chatActions.SendMessageSuccesfull]: (state, payload) => {
    return { ...state,
      isFetching: false,
      error: false,
      timeConfirmReceive: moment().format("h:mm:ss"),
      payload: payload
    }
  },
  [chatActions.SendMessageError]: (state, payload) => {
    return { ...state,
      isFetching: false,
      error: false,
      payload: initial.send.payload,
      errorDetails: payload
    }
  },
}, initial.send)


const receive = createReducer({
  [chatActions.ReceiveMessage]: (state, payload) => {
    return { ...state,
      isFetching: true,
      error: false,
      message: payload.message,
      payload: payload
    }
  }
}, initial.receive)

export default combineReducers(
  {
    send,
    connect,
    ping,
    receive
  }
)


