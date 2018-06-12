import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { STUDENT_ACTIONS } from '../../redux/actions/studentActions';

import StudentList from '../StudentList/StudentList';
import NewStudentForm from '../NewStudentForm/NewStudentForm';


const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: STUDENT_ACTIONS.FETCH_STUDENTS });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  changePage = () => {
    this.props.history.push('/student');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <StudentList changePage = {this.changePage} />
          <NewStudentForm />
        </div>
      );
    }

    return (
      <div>
        <Nav />

        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

