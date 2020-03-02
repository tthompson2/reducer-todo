import React from 'react';

const ToDoForm = props => {
   
    return (
        <div>
            <input
               type="text"
               name="itemText"
               value={props.item}
            />
        </div>
    )
}

export default ToDoForm;