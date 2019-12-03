import _ from 'lodash';
import React, { Component } from 'react';
import TodoListHeader from './todo-list-header';
import TodoListItem from './todo-list-item';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
class ToDoList extends Component {
    renderItems() {
        const props = _.omit(this.props, 'todo');

        return _.map(this.props.todo, (todo, index) => 
        <TodoListItem key={index} {...todo} {...props}/>);
    }

    render() {
        return (
            <Table>
                <TodoListHeader/>
                <TableBody>
                    {this.renderItems()}
                </TableBody>
            </Table>
        );
    }
}



export default ToDoList;
