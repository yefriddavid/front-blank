import { put, call, take, fork, race } from 'redux-saga/effects'
import * as apiAuth from './Services/Providers/Api/Auth'
import * as apiServicesProvider from './Services/Providers/Api/Index'
import * as history from '../history/browserHistory'
import * as authActions from '../actions/authActions'
import { Request as request, onLoginSuccessfull, appStore as appStorage } from 'callcenter2_react_components'
import io from 'socket.io-client'

/*var socket = io('/')
socket.on('connect', function (data) {
  alert("jupy")
});
socket.on('news', function (data) {
  console.log(data)
  socket.emit('my other event', { my: 'data' })
});*/


export function* authFlow() {
  while(true){
    try{
      const { payload } = yield take(`${authActions.login}`)
      yield call(apiAuth.signin, payload.username, payload.password, request)
      yield fork(logoutFlow)

      //alert("ssssaaaaastrabbxxxx")
      //const socket = yield call(connect)
      //alert("ssssaaaaastra")

      //const task = yield fork(handleIO, socket)
      //socket.emit('ping', { username: payload.username })
      //socket.emit('login', { username: payload.username })

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
    yield put(authActions.cancelConnections())
  }
}

export function* onSagasLoginSuccessfull() {
  while (true) {
    const { payload } = yield take(`${authActions.received}`)
    yield call(onLoginSuccessfull, payload, history)
  }
}

export default function* root() {
  yield fork(authFlow)
  yield fork(onSagasLoginSuccessfull)
    /*yield all([
    take(`${authActions.received}`, AuthLoginResponse),
    //takeEvery(`${authActions.errorRequest}`, AuthLoginResponse)
  ])*/
  //if(appStorage.fullLoggedIn()){
  if(appStorage.loggedIn()){
    yield fork(logoutFlow, request)
    yield fork(watchStartBackgroundApiTask, request)
  }
}
