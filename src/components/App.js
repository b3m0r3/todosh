import React, { Component } from 'react';
import ToDoList from './todo-list';
import CreateTodo from './create-todo';
import TitleBar from './TitleBar';
import Paper from '@material-ui/core/Paper';

const todo = [
    {
        task: 'task 1',
        isCompleted: false
    },
    {
        task: 'task 2',
        isCompleted: true
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo
        };
    };

    render() {
        return (
            <Paper>
                <TitleBar/>
                <CreateTodo todo={this.state.todo} createTask={this.createTask.bind(this)}/>
                <ToDoList todo={this.state.todo}
                          toggleTask={this.toggleTask.bind(this)}
                          saveTask={this.saveTask.bind(this)}
                          deleteTask={this.deleteTask.bind(this)}
                />
            </Paper>
        );
    };

    toggleTask(task) {
        const foundTodo = _.find(this.state.todo, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todo: this.state.todo});
    };

    createTask(task) {
        this.state.todo.push({
            task,
            isCompleted: false
        });
        this.setState({ todo: this.state.todo });
    };

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todo, todo => todo.task === oldTask);
        
        foundTodo.task = newTask;
        this.setState({todo: this.state.todo});
    };

    deleteTask(taskToDelete) {
        _.remove(this.state.todo, todo => todo.task === taskToDelete);
        this.setState({ todo: this.state.todo});
    };
}



export default App;