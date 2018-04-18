import * as accessActions from '../actions/access'
import * as authActions from '../actions/auth'
//import { takeOut } from '../actions/websocket'

import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'


const initial = {
  access: {
    data: {},
    fetching: false,
    loadedLibrary: false,
    success: false,
    pingApiTest: "untested",
    apiAuthenticationTest: "untested",
    status: null,
    //state: "OUT", // [in, out]
    error: {}
  },
  ping: {
    message: null,
    response: {},
    success: false
  },
  authtest: {
    message: null,
    response: {},
    success: false
  },
  login: {
    data: [],
    status: null,
    success: false,
    entities: {},
    error: {}
  },
};

const ACCESS = createReducer({
  [accessActions.request]: (state, payload) => {
    return { ...state, isFetching: true }
  },
  [accessActions.fetch]: (state, payload) => {
    return { ...state, loadedLibrary: true }
  },
  [accessActions.received]: (state, payload) => {
    return { ...state, isFetching: false, success: true, error: {},
      status: payload.status,
      data: payload.data
    }
  },
  [authActions.clear]: (state, payload) => {
    return initial.access
  },
  [accessActions.errorRequest]: (state, payload) => {
    return { ...state, isFetching: false, data: {}, error: payload }
  },
}, initial.access)

const PING = createReducer({
  [accessActions.pingResponseSuccess]: (state, payload) => {
    return { ...state, message: "response connected", success: true, response: {} }
  },
  [accessActions.beginPing]: (state, payload) => {
    return { ...state, message: "begin", success: false, response: payload }
  },
  [accessActions.pingResponseError]: (state, payload) => {
    return { ...state, message: "ping error", success: false, response: payload }
  },
  [authActions.clear]: (state, payload) => {
    return initial.ping
  },
}, initial.ping)

const AUTHTEST = createReducer({
  [accessActions.testAuthenticationResponseSuccess]: (state, payload) => {
    return { ...state, message: "response authenticated", success: true, response: payload }
  },
  [accessActions.beginTestAuthentication]: (state, payload) => {
    return { ...state, message: "begin test", success: false, response: payload }
  },
  [accessActions.testAuthenticationResponseError]: (state, payload) => {
    return { ...state, message: "authentication error", success: false, respose: payload }
  },
  [authActions.clear]: (state, payload) => {
    return initial.authtest
  },
}, initial.authtest)

const LOGIN = createReducer({
  [authActions.request]: (state, payload) => {
    return { ...state, isFetching: true, success: false }
  },
  [authActions.received]: (state, payload) => {
    return { ...state,
      isFetching: false,
      error: {},
      status: payload.status,
      //success: true,
      //data: payload.data
    }
  },
  [authActions.clear]: (state, payload) => {
    return initial.login
  },
  [authActions.errorRequest]: (state, payload) => {
    return { ...state, isFetching: false, data: {}, error: payload, success: false }
  },
  /*[authActions.logout]: (state, payload) => {
    return initial.login
  },*/
}, initial.login)

export default combineReducers(
  {
    access: ACCESS,
    login: LOGIN,
    authtest: AUTHTEST,
    ping: PING
  }
);



