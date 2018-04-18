import { combineReducers } from 'redux'
import webSockets from '../reducers/socketsReducer'
import auth from '../reducers/authReducer'
import asterisk from '../reducers/asteriskReducer'
import session from '../reducers/sessionReducer'
//import login from '../reducers/loginReducer'
//import { routerReducer } from 'react-router-redux'


const combinedReducers = combineReducers({
  webSockets,
  auth,
  asterisk,
  session,
  //login//,
  //access
  //routing: routerReducer
});

export default combinedReducers

