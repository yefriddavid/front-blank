import { fork } from 'redux-saga/effects'
import { ping } from './Guest'
import * as users from './Users'

//aca solo va un handerler con todos los accesos
export function* handler() {
  yield [
    fork(ping),
    fork(users.collection)
  ]
  //yield fork(scopes, req)

  //yield fork(refreshToken, req)
  //yield fork(signout, request)
}
