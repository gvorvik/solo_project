import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import student from './studentReducer';

const store = combineReducers({
  user,
  login,
  student,
});

export default store;
