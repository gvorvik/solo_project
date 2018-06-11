import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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
                console.log(student);
                const action = {
                    type: STUDENT_ACTIONS.SET_STUDENT_ID_IN_STORE,
                    payload: {
                        id: student.id,
                        firstName: student.first_name,
                        lastName: student.last_name,
                        goal: student.goal
                    },
                }
                console.log(action);
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
            return <MenuItem key={student.id} value={student.id}>{student.first_name} {student.last_name}</MenuItem>
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>
                    <FormControl style={{width: "200px"}}>
                        <InputLabel>Student</InputLabel>
                        <Select
                            value={this.state.studentID}
                            onChange={this.handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {students}
                        </Select>
                    </FormControl>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(StudentDropdown);