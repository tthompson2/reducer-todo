import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => {

    return (
        <div>
         {props.state.map(element => { 
         return <ToDo item={element.item} completed={element.completed} false={element.false} />
         })}   
        
        </div>
    )

}

export default ToDoList;