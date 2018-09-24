import { createAction } from 'redux-act'

export const request = createAction('scopes request begin')
export const received = createAction('scopes received data')
export const errorRequest = createAction('scopes error request data')
export const cenceled = createAction('scopes canceled request')
export const fetch = createAction('scopes fetch data')
export const post = createAction('scopes post')
export const put = createAction('scopes put')


