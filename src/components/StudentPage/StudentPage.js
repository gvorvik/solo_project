import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import Nav from '../Nav/Nav';


const mapStateToProps = reduxState => ({
    reduxState,
});

class StudentPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentID: 1,
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


    render() {
        let content = null;

        if (this.props.reduxState.user.userName) {
            content = (
                <div>
                    <Nav />
                    <h1>Student Page</h1>
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