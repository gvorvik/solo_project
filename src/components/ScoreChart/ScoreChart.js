import React, { Component } from 'react';
import { connect } from 'react-redux';


class ScoreChart extends Component {

    render() {
        return (
            <div>
              <h1>Hello Score Chart</h1>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect()(ScoreChart);