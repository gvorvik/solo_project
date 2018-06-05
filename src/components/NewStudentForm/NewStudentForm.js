import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewStudentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            grade: '',
            goal: 0,
            initialScore: 0,
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    };

    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
      <div >
        <form>
            <h1>Add New Student</h1>
            <input onChange={this.handleChange} type="text" name="firstName" placeholder="First Name"/>
            <input onChange={this.handleChange} type="text" name="lastName" placeholder="Last Name"/>
            <input onChange={this.handleChange} type="text" name="grade" placeholder="Grade"/>
            <input onChange={this.handleChange} type="number" name="goal" placeholder="Goal" />
            <input onChange={this.handleChange} type="number" name="initialScore" placeholder="Initial Score" />
            <input onClick={this.handleClick} type="submit"/>
        </form>
      </div>
    );
  }
}

export default connect()(NewStudentForm);