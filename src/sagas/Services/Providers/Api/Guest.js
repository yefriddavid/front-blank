//import * as apiAuth from './providers/Api/Auth'
import * as apiGuest from '../../../../services/providers/Api/Guest'
import { take, call, put } from 'redux-saga/effects'
import * as guestActions from '../../../../actions/ping'



export function* ping(req) {
  while (true) {
    const { payload } = yield take(`${guestActions.ping}`);
    try{
      yield put(guestActions.request())
      const response = yield call(apiGuest.ping, payload)
      yield put(guestActions.received(response))
    } catch(e){
      yield put(guestActions.errorRequest(e))
    }
  }
}

  /*export function* friendlyPing(req) {
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
}*/
