import { useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");
  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };
  return (
    <div className="input-box" style={{display:"flex", justifyContent:"center", background:"white"}}>
      
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button className="add-btn" onClick={handleAdd}>  ➤  </button>  
      </div>
  );
}

export default TodoInput;