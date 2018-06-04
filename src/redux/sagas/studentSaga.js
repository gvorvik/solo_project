import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { STUDENT_ACTIONS } from '../actions/studentActions';



function* fetchStudents() {
  try {
    const students = yield call(axios.get, '/api/students');
    console.log(students.data);
    yield put({
      type: STUDENT_ACTIONS.SET_STUDENTS,
      payload: students.data
    });
  } catch(err) {
    console.log(err);
  }
}

function* studentSaga() {
  yield takeEvery(STUDENT_ACTIONS.FETCH_STUDENTS, fetchStudents);
}


export default studentSaga;