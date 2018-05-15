import { createAction } from 'redux-act'



export const ping = createAction('ping')
export const request = createAction('ping begin')
export const received = createAction('ping response ok')
export const errorRequest = createAction('ping response error')


