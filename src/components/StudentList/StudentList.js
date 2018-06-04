import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = reduxState => ({
    reduxState,
});

class StudentList extends Component {

    render() {
        console.log(this.props.reduxState.user.studentReducer);

        let students = this.props.reduxState.user.studentReducer.map((student) => {
            return <p key={student.id}>{student.first_name} {student.last_name} in grade {student.grade} has a goal of {student.goal} words per minute</p>
        });

        return (
            <div>
                <h1>Hello Student List</h1>
                {students}
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StudentList);