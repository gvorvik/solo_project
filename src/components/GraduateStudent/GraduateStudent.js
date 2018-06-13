import React, { Component } from 'react';

class Graduate extends Component {

    render() {
        return (
            <div>
                <button onClick={() => {this.props.graduateStudent(this.props.studentID)}}>Push Me</button>
            </div>
        );
    }
}

export default Graduate;