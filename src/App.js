//import logo from './logo.svg';

import React, {useState} from "react";
import './App.css';
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const[inputText , setInputText] = useState(" ");
  const[todos , setTodos] = useState([]);
  const[status, setStatus] = useState('all');
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form inputText={inputText}  setInputText={setInputText} todos={todos} setTodos={setTodos}  setStatus={setStatus} status={status}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
