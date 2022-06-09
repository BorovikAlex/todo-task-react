import React from "react";

import "./TodoList.css";

export function TodoList({ doneItems, todoItems }) {
  return (
    <div className="todo-list__container">
      <div className="todo-list__items-container">
        <h2>Todo:</h2>
        <ul>
          {todoItems.map((item) => (
            <li key={item.toDoID} className="todo-list__item">
              <span className="todo-list__item-text">{item.toDoName}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="todo-list__items-container">
        <h2>Done:</h2>
        <ul>
          {doneItems.map((item) => (
            <li key={item.toDoID} className="todo-list__item">
              <span className="todo-list__item-text">{item.toDoName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
