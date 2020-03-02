import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => {

    return (
        <div>
        <ToDo
        item={props.item}
        completed={props.completed}
        false={props.false} 
        />
        </div>
    )

}

export default ToDoList;