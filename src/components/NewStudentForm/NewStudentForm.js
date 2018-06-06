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
            goal: 0,
            initialScore: 0,
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
            goal: 0,
            initialScore: 0,
        });
    }

    render() {
        return (
            <div>
                <h1 id="formHeader">Add New Student</h1>
                <form id="newStudentForm">
                    <div id="formInputWrapper">

                        <label className="formLabel" htmlFor="firstName">First Name</label>
                        <input onChange={this.handleChange} type="text" name="firstName" id="firstName" placeholder="First Name" />


                        <label className="formLabel" htmlFor="lastName">Last Name</label>
                        <input onChange={this.handleChange} type="text" name="lastName" id="lastName" placeholder="Last Name" />


                        <label className="formLabel" htmlFor="grade">Grade</label>
                        <input onChange={this.handleChange} type="text" name="grade" id="grade" placeholder="Grade" />

                        <label className="formLabel" htmlFor="goal">Goal</label>
                        <input onChange={this.handleChange} type="number" name="goal" id="goal" placeholder="Goal" />

                        <label className="formLabel" htmlFor="initialScore">Initial Score</label>
                        <input onChange={this.handleChange} type="number" name="initialScore" id="initialScore" placeholder="Initial Score" />
                    </div>
                    <input onClick={this.postStudent} type="submit" />
                </form>
            </div>
        );
    }
}

export default connect()(NewStudentForm);