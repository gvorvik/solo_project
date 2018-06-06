import React, { Component } from 'react';
import { connect } from 'react-redux';

import { STUDENT_ACTIONS } from '../../redux/actions/studentActions';

const mapStateToProps = reduxState => ({
    reduxState,
  });

class NewScoreForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            score: '',
            date: '',
            notes: '',
            studentId: this.props.reduxState.student.studentPageID,
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    };

    postScore = (event) => {
        event.preventDefault();
        const scoreToSend = this.state;
        console.log(scoreToSend);
        const action = {
            type: STUDENT_ACTIONS.ADD_SCORE,
            payload: scoreToSend,
        }
        this.props.dispatch(action);
        this.setState({
            score: '',
            date: '',
            notes: '',
            studentId: this.props.reduxState.student.studentPageID,
        });
    }

    render() {
        return (
            <div>
                <h1 id="formHeader">Add New Score</h1>
                <form className="dataForm">
                    <div id="formInputWrapper">

                        <label className="formLabel" htmlFor="score">Words Per Minute</label>
                        <input onChange={this.handleChange} type="number" name="score" id="score" placeholder="Student Score" />


                        <label className="formLabel" htmlFor="lastName">Date</label>
                        <input onChange={this.handleChange} type="date" name="date" id="date" />


                        <label className="formLabel" htmlFor="notes">Notes</label>
                        <textarea onChange={this.handleChange} type="text" name="notes" id="notes" placeholder="Notes"></textarea>

                    </div>
                    <input onClick={this.postScore} className="submitData" type="submit" />
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NewScoreForm);