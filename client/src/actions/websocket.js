import { createAction } from 'redux-act'

//export const login = createAction('login')
export const receiveSettingsConnection = createAction('receive settings connection')
export const login = createAction('web socket login')
export const logout = createAction('web socket logout')

//export const addUser = createAction('add user')
//export const removeUser = createAction('remove user')

export const newMessage = createAction('web socket - new message')
export const sendMessage = createAction('web socket - send message')


export const pong = createAction('web socket pong');
export const disconnection = createAction('web socket - disconnection websocket')
export const connection = createAction('web sokcet - connection websocket')
export const joinTo = createAction('web socket join to')
export const takeOut = createAction('web socket take out from server')//sacaron a este servidor de qlogin desde el servidor


export const loginAccess = createAction('web socket - login access') //

export const clear = createAction('web socket - clear data')

  /*export function loginApi(user, pass) {
  //alert("Aca estoy" + user)
  return {
    type: BEGIN_INIT,
    user,
    pass
  }
}*/

  /*export function authFailure(user, pass){
  alert('failure')
  return {
    type: BEGIN_AUTH_FAILURE,
    user,
    pass
  }

}*/

