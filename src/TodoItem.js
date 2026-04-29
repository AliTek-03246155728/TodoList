function TodoItem({ text, index, deleteTodo, selectedItems, toggleSelection }) {
  return (
    <li className="todo-item" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input
        type="checkbox"
        // Check if this specific index exists in our selection state
        checked={selectedItems.includes(index)}
        onChange={() => toggleSelection(index)}
      />
      <span style={{ flexGrow: 1 }}>{text}</span>
      <button onClick={() => deleteTodo(index)}>&times;</button>
    </li>
  );
}

export default TodoItem;