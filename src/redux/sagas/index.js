import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import studentSaga from './studentSaga'


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    studentSaga(),
    // watchIncrementAsync()
  ]);
}
