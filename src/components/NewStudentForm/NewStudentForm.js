import React, { Component } from 'react';
import { connect } from 'react-redux';

import { STUDENT_ACTIONS } from '../../redux/actions/studentActions';


class NewStudentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            grade: '',
            goal: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    };

    postStudent = (event) => {
        event.preventDefault();
        const studentToSend = this.state;
        console.log(this.state);
        const action = {
            type: STUDENT_ACTIONS.ADD_STUDENT,
            payload: studentToSend
        }
        this.props.dispatch(action);
        this.setState({
            firstName: '',
            lastName: '',
            grade: '',
            goal: '',
        });
    }

    render() {
        return (
            <div>
                <h1 id="formHeader">Add New Student</h1>
                <form onSubmit={this.postStudent} className="dataForm">
                    <div id="formInputWrapper">

                        <label className="formLabel" htmlFor="firstName">First Name</label>
                        <input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" id="firstName" placeholder="First Name" />


                        <label className="formLabel" htmlFor="lastName">Last Name</label>
                        <input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" id="lastName" placeholder="Last Name" />


                        <label className="formLabel" htmlFor="grade">Grade</label>
                        <input onChange={this.handleChange} value={this.state.grade} type="text" name="grade" id="grade" placeholder="Grade" />

                        <label className="formLabel" htmlFor="goal">Goal</label>
                        <input onChange={this.handleChange} value={this.state.goal} type="number" name="goal" id="goal" placeholder="Goal" />

                    </div>
                    <input className="submitData" type="submit" />
                </form>
            </div>
        );
    }
}

export default connect()(NewStudentForm);