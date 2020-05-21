import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from "./components/ToDoForm";
import ToDoList  from "./components/ToDoList";

import { initialState, todoReducer } from "./reducers/index";

function App() {

  const [newElement, setNewElement] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // console.log(state);

  const handleChanges = e => {
    setNewElement(e.target.value);
  }

  const addTodo = e => {
    e.preventDefault();
    dispatch({type: "ADD_TODO", payload: newElement});
  }

  const addClear = e => {
    dispatch({type: "ADD_CLEAR"});
  }

  const toggleRemover = id => {
    console.log(id);
    dispatch({type: "TOGGLE_REMOVER", payload: id });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <ToDoForm
            newElement={newElement}
            addClear={addClear}
            addFunction={addTodo}
            handleChanges={handleChanges}/>
        </div>
        <div>
          <ToDoList 
          state={state}
          toggleRemover={toggleRemover}/>
        </div>
      </header>
    </div>
  );
}

export default App;
