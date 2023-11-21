import React, { useState } from "react";

export default function TodoList() {
  const [inputTask, setInputTask] = useState("");
  const [list, setList] = useState([]);

  function handleInputChange(event) {
    setInputTask(event.target.value);
  }

  function handleAddTodo(todo) {
    const newTask = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTask]);
    setInputTask("");
  }

  function handleDeleteTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  return (
    <div className="Todo">
      <h1>My To-Do List</h1>
      <div className="Top">
        <input
          className="input"
          type="text"
          value={inputTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={() => handleAddTodo(inputTask)} className="btn">
          ADD
        </button>
      </div>
      <ul>
        {list.map((todo) => (
          <li className="task" key={todo.id}>
            {todo.todo}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
