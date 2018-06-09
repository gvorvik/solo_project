import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { STUDENT_ACTIONS } from '../../redux/actions/studentActions';

const mapStateToProps = reduxState => ({
    reduxState,
});

class StudentDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentID: '',
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: STUDENT_ACTIONS.FETCH_STUDENTS });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios({
            method: 'GET',
            url: `/api/students/studentinfo/${this.state.studentID}`
        })
        .then((response) => {
            const student = response.data[0];
            const action = {
                type: STUDENT_ACTIONS.SET_STUDENT_ID_IN_STORE,
                payload: {
                  id: student.id,
                  firstName: student.first_name,
                  lastName: student.last_name
                },
              }
            this.props.dispatch(action);
            this.props.getStudentScores(student.id);
        })
        .catch(err => console.log(err));

    }


    handleChange = (event) => {
        this.setState({
                studentID: Number(event.target.value),
        })
    }

    render() {

        let students = this.props.reduxState.student.studentReducer.map((student) => {
            return <option key={student.id} value={student.id}>
                        {student.first_name} {student.last_name}
                   </option>
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                        {students}
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(StudentDropdown);