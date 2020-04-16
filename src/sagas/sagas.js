import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../services/services'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUsers(action) {
   try {
      const user = yield call(Api.fetchUsers);

      yield put({type: "USER_FETCH_SUCCEEDED", users: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}
function* loggedin(action) {
    yield put({type: "USER_IS_LOGGEDIN"});
 }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUsers);
  yield takeLatest("USER_LOGGEDIN", loggedin);
  
}

export default mySaga;