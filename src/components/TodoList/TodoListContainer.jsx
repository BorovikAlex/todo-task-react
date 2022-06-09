import React from "react";
import { useSelector } from "react-redux";

import { TodoList } from "./TodoList";

export function TodoListContainer() {
  const doneItems = useSelector((state) =>
    state.todos.filter((item) => item.isDone)
  );
  const todoItems = useSelector((state) =>
    state.todos.filter((item) => !item.isDone)
  );

  return <TodoList doneItems={doneItems} todoItems={todoItems} />;
}
