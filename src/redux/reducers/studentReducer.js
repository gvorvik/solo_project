import { combineReducers } from 'redux';
import { STUDENT_ACTIONS } from '../actions/studentActions';

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case STUDENT_ACTIONS.SET_STUDENTS:
      return action.payload;
    default:
      return state;
  }
}

const studentPageID = (state = {id:1}, action) => {
  switch (action.type) {
    case STUDENT_ACTIONS.SET_STUDENT_ID_IN_STORE:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  studentReducer,
  studentPageID,
});