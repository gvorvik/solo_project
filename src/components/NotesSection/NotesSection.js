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
            return <tr><td>{note.date}</td><td>{note.note}</td></tr>
        });

        return (
            <div>
                <h1>Notes Section</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NotesSection);