import { refreshToken } from './Auth'
import { fork, take, call, put } from 'redux-saga/effects'




//aca solo va un handerler con todos los accesos

export function* handler(req) {
  //yield fork(access, req)
  //yield fork(ping, req)
  //yield fork(scopes, req)

  yield fork(refreshToken, req)
  //yield fork(signout, request)
}
