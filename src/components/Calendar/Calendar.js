import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
});

class Calendar extends Component {
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    render() {

        let content = null;

        if (this.props.user.userName) {
            content = (
                <div id="calendarDiv">
                    <iframe id="calendar" title="GregCalendar" src="https://calendar.google.com/calendar/embed?src=gvorvik%40gmail.com&ctz=America%2FChicago" style={{ frameborder: "0", scrolling: "no" }}></iframe>
                </div>
            );
        }

        return (
            <div>
                <Nav />
                {content}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Calendar);