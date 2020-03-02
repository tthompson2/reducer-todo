import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

import { initialState, todoReducer } from "./reducers/index";

function App() {

  const [ newElement, setNewElement ] = 

  const  [ state, dispatch ] = useReducer(initialState, todoReducer);

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
      </header>
    </div>
  );
}

export default App;
