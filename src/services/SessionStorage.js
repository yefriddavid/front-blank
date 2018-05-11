import * as config from "../services/config"

let localStorage
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = global.window.localStorage
} else {
  localStorage = sessionStorage
}

export const getRefreshToken = () => {
  const { refresh_token } = getDataStorage() || { refresh_token: false }
  return refresh_token
}
export const getAccessToken = () => {
  const { access_token } = getDataStorage() || { access_token: false }
  return access_token
}

export function getDataStorage(){

  if( loggedIn() === false )
    return  undefined

  const serializedState = localStorage.getItem(`${config.PREFIX_SESSION_KEYS}.auth`)
  return JSON.parse(serializedState)
}

export function setDataStorage(data){
  sessionStorage.removeItem(`${config.PREFIX_SESSION_KEYS}.auth`)
  const serializedState = JSON.stringify(data)
  sessionStorage.setItem(`${config.PREFIX_SESSION_KEYS}.auth`, serializedState)
  return true
}
export const getBeginAt = () => {
  const { beginAt } = getDataStorage() || { beginAt: false }
  return beginAt
}
export const getExpiredIn = () => {
  const { expired_in } = getDataStorage() || { expired_in: false }
  return expired_in
}
export const getFinishAt = () => {
  if( loggedIn() === false )
    return  undefined
  else{
    let beginAt = getBeginAt()
    let finishAt = new Date()
    finishAt.setSeconds(finishAt.getSeconds() + getExpiredIn())
    return finishAt
  }
}


export function loggedIn() {
  const serializedState = localStorage.getItem(`${config.PREFIX_SESSION_KEYS}.auth`)
  if( serializedState === null )
    return false
  else
    return true

}

export function getHeaders(){
  let headers = []
  headers['Authorization'] = 'Bearer ' + getAccessToken()
  return headers
}
export const clearSignData = (data) => {
  localStorage.removeItem(`${config.PREFIX_SESSION_KEYS}.auth`)
}
export function fullLoggedIn() {
  if(loggedIn() === true){
    let beginAt = getBeginAt()
    let finishAt = getFinishAt()
    if(beginAt !== false && finishAt !== false){
      if(beginAt < finishAt){
        return true
      }
    }
  }

  return false
}


