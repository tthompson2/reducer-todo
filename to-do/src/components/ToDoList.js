import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => {

    console.log(props.state); 

    return (
        <div>
         {props.state.todos.map(element => { 
         return <ToDo item={element.item} completed={element.completed} id={element.id} toggleRemover={props.toggleRemover} />
         })}   
        
        </div>
    )

}

export default ToDoList;