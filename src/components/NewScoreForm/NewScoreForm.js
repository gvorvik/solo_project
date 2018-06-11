import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
        const scoreToSend = {
            ...this.state, 
            id: this.props.reduxState.student.studentPageID.id
        };
        console.log(scoreToSend)
        
        axios({
            method: 'POST',
            url: '/api/students/score',
            data: scoreToSend,
        })
        .then((response) => {
            console.log(response);
            this.props.getStudentScores(this.props.reduxState.student.studentPageID.id);
        })
        .catch(error => console.log(error));
        
        this.setState({
            score: '',
            date: '',
            notes: '',
        });
    }

    render() {
        return (
            <div>
                <h1 id="formHeader">Add New Score</h1>
                <form onSubmit={this.postScore} className="dataForm">
                    <div id="formInputWrapper">

                        <label className="formLabel" htmlFor="score">Words Per Minute</label>
                        <input onChange={this.handleChange} type="number" name="score" id="score" placeholder="Student Score" />


                        <label className="formLabel" htmlFor="lastName">Date</label>
                        <input onChange={this.handleChange} type="date" name="date" id="date" />


                        <label className="formLabel" htmlFor="notes">Notes</label>
                        <textarea onChange={this.handleChange} type="text" name="notes" id="notes" placeholder="Notes"></textarea>

                    </div>
                    <input className="submitData" type="submit" />
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NewScoreForm);