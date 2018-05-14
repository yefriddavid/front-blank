import { put, call, take, fork, race, select } from 'redux-saga/effects'
import * as apiAuth from './Services/Providers/Api/Auth'
import * as apiServicesProvider from './Services/Providers/Api/Index'
import * as appStorage from '../services/SessionStorage'
import AuthLoginResponse from '../http/Middlewares/AuthLoginResponse'

import * as socketActions from '../actions/websocket'
import * as authActions from '../actions/auth'
import * as accessActions from '../actions/access'
import * as selectors from '../reducers/selectors'
import request from '../services/Request'


export function* authFlow() {
  while(true){
    try{
      const { payload } = yield take(`${authActions.login}`)
      yield call(apiAuth.signin, payload.username, payload.password, request)
      //let loginState = yield select(selectors.selectedLogin)
      yield fork(logoutFlow)
      yield fork(watchStartBackgroundApiTask, request)
    } catch (e) {

    }
  }
}

export function* watchStartBackgroundApiTask(req) {
  yield race({
    task: call(apiServicesProvider.handler, req),
    cancel: take(`${authActions.cancelConnections}`)
  })
}


export function* logoutFlow(req) {
  while (true) {
    yield take(`${authActions.logout}`)
    yield call(apiAuth.signout, req)
    //yield call(asteriskServices.signout)
    yield put(authActions.cancelConnections())
  }
}

export function* onLoginSuccessfull() {
  while (true) {
    const { payload } = yield take(`${authActions.errorRequest}`)
    //alert("mundo")
    yield call(AuthLoginResponse, payload)
  }
}

export default function* root() {
  yield fork(authFlow)
  yield fork(onLoginSuccessfull)

    /*yield all([
    take(`${authActions.received}`, AuthLoginResponse),
    //takeEvery(`${authActions.errorRequest}`, AuthLoginResponse)
  ])*/
  //  alert("xxzzz")
  if(appStorage.fullLoggedIn()){
    yield fork(logoutFlow, request)
    yield fork(watchStartBackgroundApiTask, request)
  }
}


