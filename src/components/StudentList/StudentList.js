import React, { Component } from 'react';
import { connect } from 'react-redux';

import StudentCard from '../StudentCard/StudentCard';

const mapStateToProps = reduxState => ({
    reduxState,
});

class StudentList extends Component {

    navigateToStudentPage = (id) => {
        console.log(`button was clicked`, id);
    }

    render() {

        let students = this.props.reduxState.student.studentReducer.map((student) => {
            return <StudentCard
                key={student.id}
                id={student.id}
                firstName={student.first_name}
                lastName={student.last_name}
                grade={student.grade}
                goal={student.goal}
                initialScore={student.initial_score}

            />
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