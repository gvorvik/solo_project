import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    render() {
        return (
            <div>
                <Nav />
                <h1>Student Page</h1>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StudentPage);