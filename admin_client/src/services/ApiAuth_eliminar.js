import * as apiAuthProvider from './providers/Api/Auth'
import * as sessionStorage from './SessionStorage'
import { fork, take, call, put } from 'redux-saga/effects'
import * as accessActions from '../actions/access'
import * as sessionActions from '../actions/session'
import * as scopesActions from '../actions/scope'
import * as authActions from '../actions/auth'



export function* signin(user, pass, req){
  try{
    yield put(authActions.request())
    const response = yield call(apiAuthProvider.signin, user, pass, req)
    //let finishAt = new Date()
    let beginAt = new Date()
    //finishAt.setMilliseconds(finishAt.getMilliseconds() + response.data.expires_in)
    //finishAt.setSeconds(finishAt.getMilliseconds() + response.data.expires_in)

    response.data.beginAt = beginAt
    //response.data.finishAt = finishAt
    yield put(authActions.received(response))
    sessionStorage.setDataStorage(response.data)
    //return true
  } catch (e){
    yield put(authActions.errorRequest(e))
    return true
    //reject(false)
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





