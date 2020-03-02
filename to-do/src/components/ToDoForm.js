import React from 'react';

const ToDoForm = props => {
   
    return (
        <div>
            <input
               type="text"
               name="itemText"
               value={props.newElement}
               onChange={props.addFunction}
            />
        </div>
    )
}

export default ToDoForm;