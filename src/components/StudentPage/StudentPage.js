import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getStudentScores(this.props.reduxState.student.studentPageID);
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
                studentScores: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }


    render() {
        let content = null;

        let scores = this.state.studentScores.map((score) => {
            return <li>{score.score}</li>
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