import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        return (
            <div>
                <TodoItem text="2018-10-01"/>
                <TodoItem text="2018-10-02"/>
                <TodoItem text="2018-10-03"/>
            </div>
        )
    }
}

export default TodoItemList;