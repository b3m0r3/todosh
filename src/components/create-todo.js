import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
        this.myInput = React.createRef();
    };
    
    renderError() {
        if (!this.state.error) { return null;}

        return <div style={{ color: 'red'}}>{this.state.error}</div>
    };

    render() {
        
        return (
            <div id="what-div">
            <form>
                <TextField inputProps={{style: {fontSize: 20}}} InputLabelProps={{style: {fontSize: 20}}} inputRef={this.myInput}  id="what-to-do" label="What to do?" variant="outlined" />
                <div id="create-btn"><Button id="create-btn" size="large" onClick={this.handleCreate.bind(this)} variant="contained" color="primary">Create</Button>
                </div>
                {this.renderError()}
            </form>
            </div>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.myInput.current;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput});
            return;
        }

        this.setState({ error: null});
        this.props.createTask(task);
        createInput.value = '';
    }
    validateInput(task) {
        if (!task) {
            return 'Please enter a task.'
        } else if (_.find(this.props.todo, todo => todo.task ===task)) {
            return 'This task already exists.'
        } else {
            return null;
        }
    }
}

export default CreateTodo;
