import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Graduate extends Component {

    render() {
        return (
            <div id="graduateStudent">
                <Button variant="raised" color="primary" onClick={() => {this.props.graduateStudent(this.props.studentID)}}>Graduate Student</Button>
            </div>
        );
    }
}

export default Graduate;