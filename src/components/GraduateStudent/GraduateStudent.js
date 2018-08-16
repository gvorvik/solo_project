import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const Graduate = (props) => {
    return (
        <div id="graduateStudent">
            <Button variant="raised" color="primary" onClick={() => {props.graduateStudent(props.studentID)}}>Graduate Student</Button>
        </div>
    );
}

export default Graduate;