import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>Hadi's Todo List</header>
      <Form 
      todos={todos} 
      inputText={inputText}
      setTodos={setTodos}
      setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;

