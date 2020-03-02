import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

import { initialState, todoReducer } from "./reducers/index";

function App() {

  const [newElement, setNewElement] = useState("");

  const [state, dispatch] = useReducer(initialState, todoReducer);

  const addTodo = e => {
    dispatch({type: "ADD_TODO"});
  }

  const addClear = e => {
    dispatch({type: "ADD_CLEAR"});
  }

  const toggleRemover = e => {
    dispatch({type: "TOGGLE_REMOVER"});
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
            addFunction={addTodo} />
        </div>
        <div>
          <ToDoList 
          state={state}/>
        </div>
      </header>
    </div>
  );
}

export default App;
