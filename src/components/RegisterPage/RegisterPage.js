import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import TextField from '@material-ui/core/TextField';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      message: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const body = {
        username: this.state.username,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      };

      // making the request to the server to post the new user's registration
      axios.post('/api/user/register/', body)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/home');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        <Header title="Reading Tracker"/>
        {this.renderAlert()}
        <form className="loginForm" onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="password">
              First Name:
              <TextField
                type="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChangeFor('firstName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Last Name:
              <TextField
                type="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChangeFor('lastName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="username">
              Username:
              <TextField
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <TextField
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              style={{backgroundColor: "#979797"}}
              type="submit"
              name="submit"
              value="Register"
            />
            <Link to="/home">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;

