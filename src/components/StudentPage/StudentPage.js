import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ScoreChart from '../ScoreChart/ScoreChart';
import NewScoreForm from '../NewScoreForm/NewScoreForm';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import Nav from '../Nav/Nav';


const mapStateToProps = reduxState => ({
    reduxState,
});

class StudentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentScores: [],
            chartData: {}
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
            this.setState({
                studentScores: response.data.map(score => score.score),
                chartData: {
                    labels: [1, 2, 3],
                    datasets: [
                        {
                            label: 'Population',
                            data: response.data.map(score => score.score),
                            backgroundColor: 'rgba(255, 99, 132, 0.6)'
                        }
                    ]
                }
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }


    render() {
        let content = null;

        let scores = this.state.studentScores.map((score, i) => {
            return <li key={i}>{score.score}</li>
        })

        if (this.props.reduxState.user.userName) {
            content = (
                <div>
                    <Nav />
                    <h1>Student Page</h1>
                    <p>The current student ID is {this.props.reduxState.student.studentPageID}</p>
                    <ul>
                        {scores}
                    </ul>
                    <ScoreChart 
                        getScores = {this.getStudentScores}
                    />
                    <NewScoreForm 
                        getScores = {this.getStudentScores}
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

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StudentPage);