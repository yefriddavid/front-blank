// import { refreshToken } from './Auth'
import { fork } from 'redux-saga/effects'
//import { onRefreshTokenSuccessfull } from '../../../../http/Middlewares/AuthLoginMiddleware'
// import * as authActions from '../../../../actions/auth'
import { ping } from './Guest'

//aca solo va un handerler con todos los accesos
export function* handler() {
  //yield fork(access, req)
  yield fork(ping)
  //yield fork(scopes, req)

  //yield fork(refreshToken, req)
  //yield fork(signout, request)
}
