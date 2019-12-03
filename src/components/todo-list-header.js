import React, { Component } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

class TodoListHeader extends Component {
    render() {
        return (
            <TableHead>
                <TableRow>
                    <TableCell><Typography variant="h4">Task</Typography></TableCell>
                    <TableCell align="right"><Typography variant="h4">Options</Typography></TableCell>
                </TableRow>
            </TableHead>
        );
    }
}

export default TodoListHeader;
