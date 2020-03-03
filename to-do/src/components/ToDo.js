import React from 'react';
import { todoReducer } from '../reducers';


const ToDo = props => {
    
    console.log(props);

    return (
        <div onClick={e => props.toggleRemover(props.id)}>
         {props.item}
         {props.completed}
         {props.id}
        </div>
    )

}

export default ToDo;