import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';

class Calendar extends Component {

    render() {

        return (
            <div>
                <Nav />
                <div id="calendarDiv">
                    <iframe title="GregCalendar" src="https://calendar.google.com/calendar/embed?src=gvorvik%40gmail.com&ctz=America%2FChicago" style={{ width: "800px", height: "600px", frameborder: "0", scrolling: "no"}}></iframe>
                </div>
            </div>
        );
    }
}

export default connect()(Calendar);