import * as apiAuth from './providers/Api/Auth'
import * as apiSession from './providers/Api/Session'
import * as apiCampaigns from './providers/Api/Campaigns'
import * as sessionStorage from './SessionStorage'
import { fork, take, call, put } from 'redux-saga/effects'
import * as accessActions from '../actions/access'
import * as sessionActions from '../actions/session'
import * as scopesActions from '../actions/scope'
import * as authActions from '../actions/auth'


export function* access(req) {
  while (true) {
    try{
      yield take(`${accessActions.post}`);
      yield put(accessActions.request())
      const response = yield call(apiAuth.access, req)
      yield put(accessActions.received(response))
    } catch(e){
      yield put(accessActions.errorRequest(e))
    }
  }
}


export function* ping(req) {
  while (true) {
    const { payload } = yield take(`${accessActions.ping}`);
    try{
      yield put(accessActions.beginPing())
      const response = yield call(apiAuth.ping, payload)
      yield put(accessActions.pingResponseSuccess(response))
    } catch(e){
      yield put(accessActions.pingResponseError(e))
    }
  }
}

export function* refresh(req) {
  //alert("refresh")
    try{
      //yield put(accessActions.request())
      alert("test")
      //const response = yield call(apiServices.refresh, req)
      const response = yield call(apiAuth.refresh, req)
      //sessionStorage.setDataStorage(response.data)
      return true
      //yield put(accessActions.received(response))
    } catch(e){
      return false
      //yield put(accessActions.errorRequest(e))
    }
}

export function* scopes (req) {
  while (true) {
    const { payload } = yield take(`${scopesActions.fetch}`)
    try{
      yield put(scopesActions.request())
      const response = yield call(apiAuth.scopes, req, payload)
      yield put(scopesActions.received(response))
    } catch(e){
      yield put(scopesActions.errorRequest(e))
    }
  }
}






export function* handler(req) {
  yield fork(access, req)
  yield fork(ping, req)
  yield fork(scopes, req)

  //yield fork(refresh, req)
  //yield fork(signout, request)
}




