import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = reduxState => ({
    reduxState,
});

class UserImage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            image: '',
        }
    }

    // componentDidMount() {
    //     this.props.dispatch({ type: USER_ACTIONS.FETCH_IMAGE });
    // }

    render() {

        return (
            <div id="userImageWrapper">
                <img src="images/greg_orvik.jpg" alt="user" id="userPhoto"/>
                <h3>Logged in as Greg</h3>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserImage);