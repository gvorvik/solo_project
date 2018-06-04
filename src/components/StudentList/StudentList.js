import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = reduxState => ({
    reduxState,
});

class StudentList extends Component {

    navigateToStudentPage = (id) => {
        console.log(`button was clicked`, id);
    }

    render() {

        let students = this.props.reduxState.student.studentReducer.map((student) => {
            return <p key={student.id}>{student.first_name} {student.last_name} in grade {student.grade} has a goal of {student.goal} words per minute
                    <button onClick={() => {this.navigateToStudentPage(student.id)}}>Go To Student</button></p>
        });

        return (
            <div>
                {students}
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StudentList);