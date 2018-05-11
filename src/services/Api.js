//import Request from './Request'
//import * as conf from './config'
import * as apiServices from './providers/Api'
import * as apiSession from './providers/Api/Session'
import * as apiCampaigns from './providers/Api/Campaigns'
import * as sessionStorage from './SessionStorage'
import { fork, take, call, put } from 'redux-saga/effects'
//import * as selectors from '../reducers/selectors'
import * as accessActions from '../actions/access'
import * as sessionActions from '../actions/session'
import * as scopesActions from '../actions/scope'
import * as authActions from '../actions/auth'
//import * as conf from './config'


export function* access(req) {
  while (true) {
    try{
      yield take(`${accessActions.post}`);
      yield put(accessActions.request())
      const response = yield call(apiServices.access, req)
      yield put(accessActions.received(response))
    } catch(e){
      yield put(accessActions.errorRequest(e))
    }
  }
}

export function* signin(user, pass, req){
  try{
    yield put(authActions.request())
    const response = yield call(apiServices.signin, user, pass, req)
    //let finishAt = new Date()
    let beginAt = new Date()
    //finishAt.setMilliseconds(finishAt.getMilliseconds() + response.data.expires_in)
    //finishAt.setSeconds(finishAt.getMilliseconds() + response.data.expires_in)

    response.data.beginAt = beginAt
    //response.data.finishAt = finishAt
    yield put(authActions.received(response))
    sessionStorage.setDataStorage(response.data)
    return true
  } catch (e){
    yield put(authActions.errorRequest(e))
    return true
    //reject(false)
  }


}

export function* signout(req){
  try{
    yield call(apiServices.signout, req)
    yield put(authActions.clear())
  } catch(e){
    yield put(authActions.errorRequest(e))
  }
}

export function* ping(req) {
  while (true) {
    const { payload } = yield take(`${accessActions.ping}`);
    try{
      yield put(accessActions.beginPing())
      const response = yield call(apiServices.ping, payload)
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
      const response = yield call(apiServices.refresh, req)
      sessionStorage.setDataStorage(response.data)
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
      const response = yield call(apiServices.scopes, req, payload)
      yield put(scopesActions.received(response))
    } catch(e){
      yield put(scopesActions.errorRequest(e))
    }
  }
}




export function* loginCampaign (req) {
  while (true) {
    const { payload } = yield take(`${sessionActions.loginCampaign}`)
    try{
      yield put(sessionActions.loginCampaignRequest())
      const response = yield call(apiSession.loginCampaign, req, payload.data)
      yield put(sessionActions.loginCampaignResponse(payload))
    } catch(e){
      yield put(sessionActions.loginCampaignErrorRequest(e))
    }
  }
}
export function* logoutCampaign (req) {
  while (true) {
    const { payload } = yield take(`${sessionActions.logoutCampaign}`)
    try{
      yield put(sessionActions.logoutCampaignRequest())
      const response = yield call(apiSession.logoutCampaign, req, payload)
      yield put(sessionActions.logoutCampaignResponse(response))
    } catch(e){
      yield put(sessionActions.logoutCampaignErrorRequest(e))
    }
  }
}

export function* loadCampaigns (req) {
  try{
    yield put(sessionActions.loadCampaignRequest())
    const response = yield call(apiSession.loadCampaigns, req)
    yield put(sessionActions.loadCampaignResponse(response))
  } catch(e){
    yield put(sessionActions.loadCampaignErrorRequest(e))
  }
}

export function* loadCampaignDetails (req) {
  while (true) {
    const { payload } = yield take(`${sessionActions.loginCampaignResponse}`)
    try{
      //yield put(sessionActions.logoutCampaignRequest())
      const response = yield call(apiCampaigns.getCampaign, req, payload.campaign_id)
      yield put(sessionActions.loadCampaignDetailsResponse(response))
    } catch(e){
      //yield put(sessionActions.logoutCampaignErrorRequest(e))
    }
  }
}

export function* pauseCampaign (req) {
  while (true) {
    const { payload } = yield take(`${sessionActions.pauseCampaign}`)
    try{
      //yield put(sessionActions.logoutCampaignRequest())
      const response = yield call(apiSession.pauseCampaign, req, payload)
      //const response = yield call(apiSession.endPauseCampaign, req, {})
      yield put(sessionActions.pauseCampaignResponse(response))
    } catch(e){
      //yield put(sessionActions.logoutCampaignErrorRequest(e))
    }
  }
}



export function* handler(req) {
  yield fork(access, req)
  yield fork(ping, req)
  yield fork(scopes, req)
  yield fork(loginCampaign, req)
  yield fork(logoutCampaign, req)

  yield fork(loadCampaigns, req)
  yield fork(loadCampaignDetails, req)
  yield fork(pauseCampaign, req)
  //yield fork(refresh, req)
  //yield fork(signout, request)
}




