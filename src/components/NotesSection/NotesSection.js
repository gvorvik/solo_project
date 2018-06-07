import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
  });

class NotesSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        }
    }


    render() {
        let notes = this.props.notes.map((note) => {
            return <li>{note.note}</li>
        });

        return (
            <div>
                <h1>Notes Section</h1>
                <ul>
                    {notes}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NotesSection);