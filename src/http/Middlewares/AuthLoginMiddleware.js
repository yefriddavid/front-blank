//import ReactGA from 'react-ga'
import * as appStorage from '../../services/SessionStorage'
import * as history from '../../history/browserHistory'
import { APP_PREFIX } from '../../services/config'

export function* onLoginSuccessfull(response) {

  appStorage.setSessionInfoData(response.data)
  history.default.push(`/${APP_PREFIX}/app/home`)
}


export function* onRefreshTokenSuccessfull(response) {
  //let beginAt = new Date()

  //const data = { ...response.data, beginAt }

  //appStorage.setDataStorage(data)
alert("esto ya no va porque va en el intercept de axios")
  //history.default.push(`/${APP_PREFIX}/app/home`)
}

