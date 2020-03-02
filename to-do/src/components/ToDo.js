import React from 'react';
import { todoReducer } from '../reducers';


const ToDo = props => {

    return (
        <div>
         {props.item}
         {props.completed}
         {props.false}
        </div>
    )

}

export default ToDo;