import { createAction } from 'redux-act'


export const collection = createAction('users collection')
export const requestCollection = createAction('users request collection')
export const receivedCollection = createAction('users received collection')
export const errorRequestCollection = createAction('users error request collection')


