import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TaskAdd from "./components/taskForm/TaskAddForm";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Header</h1>

        <TaskAdd></TaskAdd>
      </div>
    </div>
  );
}

export default App;
