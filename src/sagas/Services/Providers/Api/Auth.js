import * as apiAuthProvider from '../../../../services/providers/Api/Auth'
import * as appStorage from '../../../../services/SessionStorage'
import { fork, take, call, put } from 'redux-saga/effects'
import * as accessActions from '../../../../actions/access'
import * as sessionActions from '../../../../actions/session'
import * as scopesActions from '../../../../actions/scope'
import * as authActions from '../../../../actions/auth'


export function* signin(user, pass, req){
  try{
    yield put(authActions.request())
    const response = yield call(apiAuthProvider.signin, user, pass, req)
    let beginAt = new Date()

    response.data.beginAt = beginAt
    yield put(authActions.received(response))
    appStorage.setDataStorage(response.data)
  } catch (e){
    yield put(authActions.errorRequest(e))
  }
}


export function* signout(req){
  try{
    yield call(apiAuthProvider.signout, req)
    yield put(authActions.clear())
  } catch(e){
    yield put(authActions.errorRequest(e))
  }
}

export function* refreshToken(req) {
  while(true){
    try{
      const { payload } = yield take(`${authActions.refreshToken}`)
      const response = yield call(apiAuthProvider.refreshToken, req)
      yield put(authActions.received())
    } catch (e) {
      yield put(authActions.errorRequest())
    }
  }
}

