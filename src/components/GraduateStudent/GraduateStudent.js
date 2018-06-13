import React, { Component } from 'react';

class Graduate extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.graduateStudent}>Push Me</button>
            </div>
        );
    }
}

export default Graduate;