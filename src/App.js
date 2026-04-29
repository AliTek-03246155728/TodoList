import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, text]);
  };

  // Delete Task
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;