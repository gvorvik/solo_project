import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import StudentCard from '../StudentCard/StudentCard';

const mapStateToProps = reduxState => ({
    reduxState,
});

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            search: [event.target.value]
        })
        console.log(this.state.search);
    }


    render() {

        let filteredStudents = this.props.reduxState.student.studentReducer.filter((contact) => {
            return contact.first_name.indexOf(this.state.search) !== -1 ||
                   contact.last_name.indexOf(this.state.search) !== -1 ;
        });

        let students = filteredStudents.map((student) => {
            return <Grid key={student.id} item xs={12} sm={6} md={4}> 
                        <StudentCard
                            key={student.id}
                            id={student.id}
                            firstName={student.first_name}
                            lastName={student.last_name}
                            grade={student.grade}
                            goal={student.goal}
                            initialScore={student.initial_score}
                            changePage = {this.props.changePage}
                    /></Grid>
        });

        return (
            <div>
                <div id="searchDiv">
                    <h1>Search Students</h1>
                    <input id="searchInput" type="text" placeholder="Student Name" onChange={this.handleChange}/>
                </div>
                <Grid container spacing={32}>
                    {students}
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps)(StudentList);