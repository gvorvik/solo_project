import React, { Component } from 'react';
import { connect } from 'react-redux';

import {USER_ACTIONS} from '../../redux/actions/userActions';


const mapStateToProps = reduxState => ({
    reduxState,
});


class UserImage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_WELCOME_INFO });
    }
    
    render() {
        
        const imgPath = `images/${this.props.reduxState.user.welcomeUser.img_path}`;

        return (
            <div id="userImageWrapper">
                <img src={imgPath} alt="user" id="userPhoto"/>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserImage);