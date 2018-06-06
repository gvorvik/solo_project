import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import StudentCard from '../StudentCard/StudentCard';

const mapStateToProps = reduxState => ({
    reduxState,
});

class StudentList extends Component {

    render() {

        let students = this.props.reduxState.student.studentReducer.map((student) => {
            return <Grid key={student.id} item xs={12} sm={6} md={4}> <StudentCard
                key={student.id}
                id={student.id}
                firstName={student.first_name}
                lastName={student.last_name}
                grade={student.grade}
                goal={student.goal}
                initialScore={student.initial_score}

            /></Grid>
        });

        return (
            <div>
                <Grid container spacing={32}>
                    {students}
                </Grid>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StudentList);