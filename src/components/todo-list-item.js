import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        this.myInput = React.createRef();
    }
    renderTaskSection() {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };
        if (this.state.isEditing) {
            return (
                <TableCell>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <Input id="edit-input" inputRef={this.myInput} defaultValue={task} inputProps={{ 'aria-label': 'description' }} />
                    </form>
                </TableCell>
            );
        };
        return (
            <TableCell style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
            >
            <Typography variant="h6">{task}</Typography>
            </TableCell>
        );
    };
    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <TableCell align="right">
                    <div>
                <Button size="medium" onClick={this.onSaveClick.bind(this)} variant="outlined" color="primary">Save</Button>
                <Button size="medium" onClick={this.onCancelClick.bind(this)} variant="outlined" color="primary">Cancel</Button>
                </div>
                </TableCell>
            );
        }    
        return (
            <TableCell align="right">
                <Button size="medium" onClick={this.onEditClick.bind(this)} variant="text" color="primary">Edit</Button>
                <Button size="medium" onClick={this.props.deleteTask.bind(this, this.props.task)} variant="text" color="primary">Delete</Button>
            </TableCell>
        );    
    }

    render() {
        return (
            <TableRow>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </TableRow>
        );
    }
    onEditClick() {
        this.setState( {isEditing: true });
    }
    onCancelClick() {
        this.setState( {isEditing: false})
    }
    onSaveClick(event) {
        event.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.myInput.current.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
}

export default TodoListItem;
