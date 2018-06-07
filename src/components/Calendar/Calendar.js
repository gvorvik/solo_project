import React, { Component } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Nav from '../Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { STUDENT_ACTIONS } from '../../redux/actions/studentActions';

const mapStateToProps = state => ({
    user: state.user,
    events: [{}]
});

BigCalendar.momentLocalizer(moment);
const minTime = new Date();
minTime.setHours(8, 0, 0);
const maxTime = new Date();
maxTime.setHours(16, 30, 0);

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minTime,
            maxTime,
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ type: STUDENT_ACTIONS.FETCH_STUDENTS });
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
                <div style={{ width: '85%', margin: '20px auto 0' }}>
                    <h1>Placeholder for Calendar</h1>
                    {/* <BigCalendar
                        events={this.state.events}
                        startAccessor='startDate'
                        endAccessor='endDate'
                        view='day'
                        views={['day', 'agenda', 'week']}
                        min={this.state.minTime}
                        max={this.state.maxTime}
                    /> */}
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