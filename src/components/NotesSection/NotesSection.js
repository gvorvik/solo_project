import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
        let notes = this.props.notes.map((note, i) => {
            return <TableRow key={i}><TableCell>{note.date}</TableCell><TableCell>{note.score}</TableCell><TableCell>{note.note}</TableCell></TableRow>
        });

        return (
            <div style={{width:"90%", margin: "0 auto" }}>
                <h1 id="notesHeader">Notes</h1>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Score</TableCell>
                            <TableCell>Note</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notes}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NotesSection);