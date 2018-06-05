import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { STUDENT_ACTIONS } from '../actions/studentActions';



function* fetchStudents() {
  try {
    const students = yield call(axios.get, '/api/students');
    yield put({
      type: STUDENT_ACTIONS.SET_STUDENTS,
      payload: students.data
    });
  } catch(err) {
    console.log(err);
  }
}

function* addStudent(action) {
  try{
    const response = yield call(axios.post, '/api/students', action.payload);
    console.log(response);
  }catch (error) {
    console.log(error);
  }
}

function* studentSaga() {
  yield takeEvery(STUDENT_ACTIONS.FETCH_STUDENTS, fetchStudents);
  yield takeEvery(STUDENT_ACTIONS.ADD_STUDENT, addStudent);
}


export default studentSaga;