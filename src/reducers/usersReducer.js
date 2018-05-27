import * as userActions from '../actions/users'

import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'


const initial = {
  collection: {
    payload: [],
    isFetching: false,
    errorDefails: [],
    error: false
  },
  otherthing: {
    list: [],
    entities: {}
  },
};

const collection = createReducer({
  [userActions.requestCollection]: (state, payload) => {
    return { ...state, isFetching: true }
  },
  [userActions.receivedCollection]: (state, payload) => {
    return { ...state,
      isFetching: false,
      payload,
    }
  },
  [userActions.errorRequestCollection]: (state, payload) => {
    return { ...state, isFetching: false, data: {}, error: payload }
  },
  [userActions.errorRequestCollection]: (state, payload) => {
    return { ...state, isFetching: false, data: {}, error: payload }
  }
}, initial.collection);


export default combineReducers(
  {
    collection
  }
)






