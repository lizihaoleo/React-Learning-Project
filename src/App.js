import React from 'react';
import './App.css';
import Timer from './Timer/timer';
import RadioList from './Assignment2/RadioList';
import TodoList from './Assignment2/TodoList';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h1>Assignment1</h1>
        <Timer></Timer>
        <br></br>
        <h1>Assignment2</h1>
        <RadioList></RadioList>
        <br></br>
        <TodoList></TodoList>
      </header>

    </div>
  );
}

export default App;
