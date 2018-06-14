import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const GraduateTable = (props) => {
    return <div id="graduatedStudentsDiv">
        <h1>Graduated Students</h1>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.graduates}
            </TableBody>
        </Table>
    </div>
}

export default GraduateTable;