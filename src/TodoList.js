import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
  // Use an array to store multiple selected indexes
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (index) => {
    if (selectedItems.includes(index)) {
      // If already selected, remove it (filter it out)
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      // If not selected, add it to the array
      setSelectedItems([...selectedItems, index]);
    }
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo}
          index={index}
          deleteTodo={deleteTodo}
          selectedItems={selectedItems}
          toggleSelection={toggleSelection}
        />
      ))}
    </ul>
  );
}

export default TodoList;