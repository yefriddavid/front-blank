import { createAction } from 'redux-act'

export const request = createAction('access request begin')
export const received = createAction('access received data')
export const errorRequest = createAction('access error request data')
export const cenceled = createAction('access canceled request')
export const fetch = createAction('access fetch data')
export const clear = createAction('access clear data')
export const post = createAction('access post')
//export const login = createAction('access fetch')



export const invalidUser = createAction('access error invalid user')
export const licenseLimitReached = createAction('access error license limit reached')


export const ping = createAction('ping')
export const beginPing = createAction('ping begin')
export const pingResponseSuccess = createAction('ping response ok')
export const pingResponseError = createAction('ping response error')

export const beginTestAuthentication = createAction('begin authentication test')
export const testAuthenticationResponseSuccess = createAction('test authentication response ok')
export const testAuthenticationResponseError = createAction('test authentication response error')

