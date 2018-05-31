import { combineReducers } from 'redux'
import auth from '../reducers/authReducer'
import session from '../reducers/sessionReducer'
import users from '../reducers/usersReducer'


const combinedReducers = combineReducers({
  auth,
  users,
  session,
});

export default combinedReducers

