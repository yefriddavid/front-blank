import { combineReducers } from 'redux'
import auth from '../reducers/authReducer'
import session from '../reducers/sessionReducer'
import users from '../reducers/usersReducer'
import chat from '../reducers/chatReducer'


const combinedReducers = combineReducers({
  auth,
  users,
  session,
  chat
})


export default combinedReducers

