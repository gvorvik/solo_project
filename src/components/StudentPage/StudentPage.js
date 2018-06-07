import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScoreChart from '../ScoreChart/ScoreChart';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import Nav from '../Nav/Nav';


const mapStateToProps = reduxState => ({
    reduxState,
});

class StudentPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.reduxState.user.isLoading && this.props.reduxState.user.userName === null) {
            this.props.history.push('home');
        }
    }

    render() {
        let content = null;

        if (this.props.reduxState.user.userName) {
            content = (
                <div>
                    <Nav />
                    <h1 id="studentPageHeader">{this.props.reduxState.student.studentPageID.firstName} {this.props.reduxState.student.studentPageID.lastName}</h1>
                    <p>The current student ID is {this.props.reduxState.student.studentPageID.id}</p>
                    <ScoreChart />
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