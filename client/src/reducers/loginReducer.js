import {
  request,
  logout,
  errorRequest,
  limitAttemptsExceeded,
  received
} from '../actions/auth'

import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'


const initial = {
  rest: {
    data: {},
    fetching: false,
    limitAttemptsExceeded: false,
    error: {}
  },
  otherthing: {
    list: [],
    entities: {}
  },
};

const rest = createReducer({
  [request]: (state, payload) => {
    return { ...state, isFetching: true }
  },
  [received]: (state, payload) => {
    //alert("david")
    return { ...state,
      isFetching: false,
      data: payload,
      //responseData: payload.response
    }
  },
  [limitAttemptsExceeded]: (state, payload) => {
    return { ...state, isFetching: false, data: {}, error: payload, limitAttemptsExceeded: true }
  },
  [errorRequest]: (state, payload) => {
    return { ...state, isFetching: false, data: {}, error: payload }
  },
  [logout]: (state, payload) => {
    return initial.rest
  },
}, initial.rest);


export default combineReducers(
  { rest }
);

  /*export default function webScokets(state = {  }, action) {
      console.log("data 1", action.type)
  switch (action.type) {
    case 'message':
      return Object.assign({}, {message:action.data});
    default:
      return state;
  }
}*/


