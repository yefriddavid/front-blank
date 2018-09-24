import * as apiUsers from '../../../../services/providers/Api/Users'
import { take, call, put } from 'redux-saga/effects'
import * as usersActions from '../../../../actions/users'



export function* collection() {
  while (true) {
    const { payload } = yield take(`${usersActions.collection}`);
    try{
      yield put(usersActions.requestCollection())
      const response = yield call(apiUsers.collection, payload)
      yield put(usersActions.receivedCollection(response))
    } catch(e){
      yield put(usersActions.errorRequestCollection(e))
    }
  }
}

