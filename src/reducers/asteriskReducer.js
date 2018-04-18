import {
  login,
  errorRequest,
  //received
} from '../actions/asterisk'

import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'


const initial = {
  rest: {
    data: {},
    fetching: false,
    error: {}
  },
  otherthing: {
    list: [],
    entities: {}
  },
};

const rest = createReducer({
  [login]: (state, payload) => {
    return { ...state }
  },
  /*[putSip]: (state, payload) => {
    return { ...state, sipObject: payload }
  },*/
  [errorRequest]: (state, payload) => {
    return { ...state, isFetching: false, data: {}, error: payload }
  },
}, initial.rest);


export default combineReducers(
  { rest }
);


