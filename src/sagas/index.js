import { put, call, take, fork, race, select } from 'redux-saga/effects'
import * as socketServices from '../services/Socket'
import * as apiServices from '../services/Api'
//import * as apiProvider from '../services/providers/Api'
import * as asteriskServices from '../services/Asterisk'
import * as sessionStorage from '../services/SessionStorage'

import * as socketActions from '../actions/websocket'
import * as authActions from '../actions/auth'
import * as accessActions from '../actions/access'
import * as selectors from '../reducers/selectors'
import request from '../services/Request'


export function* authFlow() {
  while(true){
    try{
      const { payload } = yield take(`${authActions.login}`)
      yield call(apiServices.signin, payload.user, payload.pass, request)
      //let loginState = yield select(selectors.selectedLogin)
      yield fork(authFlow)
      yield fork(watchStartBackgroundApiTask, request)
    } catch (e) {

    }
  }
}

export function* accessFlow(){

  while(true){
    yield take(`${accessActions.fetch}`)
    yield put(accessActions.post())




    yield take(`${accessActions.received}`)
    const loginState = yield select(selectors.selectedLogin)
    const accessState = yield select(selectors.selectedAccess)


    const socket = yield call(socketServices.connect)
    const asterisk = yield call(asteriskServices.connect)

    yield fork(watchStartBackgroundSocketTask, socket, asterisk)
    yield put(socketActions.login({user_id: accessState.data.user_id, access_token: sessionStorage.getAccessToken() }))
    yield put(socketActions.joinTo('user_' + accessState.data.user_id))
    yield put(socketActions.joinTo('gestion'))

  }
}

export function* watchStartBackgroundApiTask(req) {
  yield race({
    task: call(apiServices.handler, req),
    cancel: take(`${authActions.cancelConnections}`)
  })
}
function* watchStartBackgroundSocketTask(socket, asterisk) {

  yield race([
    [
      fork(asteriskServices.handler, asterisk),
      fork(socketServices.handleIO, socket)
    ],
    take(`${authActions.cancelConnections}`)
  ])
}


export function* logoutFlow(req) {
  while (true) {
    yield take(`${authActions.logout}`)
    yield call(apiServices.signout, req)
    yield call(asteriskServices.signout)
    yield put(authActions.cancelConnections())
  }
}


export function* apiTestConnection(){
  try{
    yield put(accessActions.beginTestAuthentication())
    yield call(apiServices.scopes)
    yield put(accessActions.testAuthenticationResponseSuccess())
  } catch(e){
    yield put(accessActions.testAuthenticationResponseError())

  }
}
export default function* root() {
  //yield fork(apiPing)
  //yield fork(pingFlow)
  yield fork(accessFlow)
  yield fork(authFlow)
  //yield fork(logoutFlow)


  const loginState = yield select(selectors.selectedLogin)
  //if(loginState.data.access_token){
  if(sessionStorage.fullLoggedIn()){
    yield fork(logoutFlow, request)
  }
  yield fork(watchStartBackgroundApiTask, request)
  //yield fork(apiPing)
}


