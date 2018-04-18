import {
  pong,
  disconnection,
  connection,
  receiveSettingsConnection
} from '../actions/websocket'
import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'


const initial = {
  settings: {
    message: null,
    webSocketConnectionState: false
  },
  app: {
    username: null
  },
  users: {},
  messages: {
    list: [],
    entities: {}
  },
};

const settings = createReducer({
  [pong]: (state, payload) => {
    return { ...state, webSocketConnectionState: true, message: payload.message }
  },
  [receiveSettingsConnection]: (state, payload) => {
    return { ...state, webSocketConnectionState: true, data: payload }
  },
  /*[joinTo]: (state, payload) => {
    return { ...state, webSocketConnectionState: true, data: payload }
  },*/
  [connection]: (state, payload) => {
    //alert("Me confirmaron la coneccion")
    //return { ...state, webSocketConnectionState: true, payload }
    return { ...state, webSocketConnectionState: true }
  },
  [disconnection]: (state, payload) => {
    return { ...state, webSocketConnectionState: false }
  },
}, initial.settings);


export default combineReducers(
  { settings }
);

  /*export default function webScokets(state = {  }, action) {
      console.log("data 1", action.type)
  switch (action.type) {
    case 'message':
      return Object.assign({}, {message:action.data});
    default:
      return state;
  }
}*/


