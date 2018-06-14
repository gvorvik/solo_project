import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import ScoreChart from '../ScoreChart/ScoreChart';
import StudentDropdown from '../StudentDropdown/StudentDropdown';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import Nav from '../Nav/Nav';
import Graduate from '../GraduateStudent/GraduateStudent';


const mapStateToProps = reduxState => ({
    reduxState,
});

class StudentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
           chartData: {},
           notes: [],
           goal: 0,
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.reduxState.user.isLoading && this.props.reduxState.user.userName === null) {
            this.props.history.push('home');
        }
    }

    getStudentScores = (id) => {
        axios({
            method: 'GET',
            url: `/api/students/scores/${id}`
        })
        .then((response) => {
            console.log(response.data);
            this.setState({
                chartData: {
                    labels: response.data.map((score) => {
                        let scoreDate = moment(score.date).format("MMM Do YYYY");
                        return scoreDate;
                    }),
                    datasets: [
                        {
                            label: 'Words Per Minute',
                            data: response.data.map(score => score.score),
                            backgroundColor: 'rgba(230, 126, 34, 0.6)'
                        }
                    ]
                },
                notes: response.data.map((score) => {
                    return {
                        note: score.notes,
                        date: moment(score.date).format("MMM Do YYYY"),
                        score: score.score,
                    }
                }),
                goal: response.data[0].goal
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    graduateStudent = (id) => {
        axios({
            method: 'PUT',
            url: `/api/students/${id}`,
        })
        .then((response) => {
            console.log(response.data);
            this.props.history.push('/user');
        })
        .catch(err => console.log(err));
    }


    render() {
        let content = null;

        if (this.props.reduxState.user.userName) {
            content = (
                <div>
                    <Nav />
                    <h1 id="studentPageHeader">{this.props.reduxState.student.studentPageID.firstName} {this.props.reduxState.student.studentPageID.lastName}</h1>
                    <h2 id="goalHeader">Goal: {this.props.reduxState.student.studentPageID.goal} words per minute</h2>
                    <StudentDropdown getStudentScores={this.getStudentScores} />
                    <ScoreChart 
                        getStudentScores={this.getStudentScores} 
                        chartData={this.state.chartData}
                        notes={this.state.notes}
                        goal={this.state.goal}
                    />
                    <Graduate 
                        graduateStudent={this.graduateStudent}
                        studentID={this.props.reduxState.student.studentPageID.id}
                    />
                </div>
            );
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}


export default connect(mapStateToProps)(StudentPage);