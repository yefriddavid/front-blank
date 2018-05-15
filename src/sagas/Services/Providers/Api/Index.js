import { refreshToken } from './Auth'
import { fork, take, call, put } from 'redux-saga/effects'
//import { onRefreshTokenSuccessfull } from '../../../../http/Middlewares/AuthLoginMiddleware'
import * as authActions from '../../../../actions/auth'
import { ping } from './Guest'



  /*export function* onSagasRefreshToken() {
  while (true) {
    //const { payload } = yield take(`${authActions.errorRequest}`)
    const { payload } = yield take(`${authActions.refreshToken}`)
    yield call(onRefreshTokenSuccessfull, payload)
  }
}*/

//aca solo va un handerler con todos los accesos

export function* handler() {
  //yield fork(access, req)
  yield fork(ping)
  //yield fork(scopes, req)

  //yield fork(refreshToken, req)
  //yield fork(signout, request)
}
