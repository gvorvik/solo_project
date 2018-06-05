import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = reduxState => ({
  reduxState,
});

class Nav extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_WELCOME_INFO });
  }

  render() {

    const imgPath = `images/${this.props.reduxState.user.welcomeUser.img_path}`;

    return <nav>
    <div className="row">
      <img src={imgPath} alt="user" id="userPhoto" />
      <ul id="navbarList">
        <li>
          <Link to="/user">
            Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            Admin
          </Link>
        </li>
        <li>
          <Link to="/student">
            Student
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  }
};

export default connect(mapStateToProps)(Nav);
