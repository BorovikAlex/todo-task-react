import { createAction } from "@reduxjs/toolkit";

export const INIT_TODOS = "INIT_TODOS";
export const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";
export const UPDATE_TODO_DONE = "UPDATE_TODO_DONE";
export const DELETE_TODO = "DELETE_TODO";

export const initTodos = createAction(INIT_TODOS);

export const updateTodoText = createAction(UPDATE_TODO_TEXT, [
  "toDoID",
  "toDoName",
]);

export const updateTodoDone = createAction(UPDATE_TODO_DONE, [
  "toDoID",
  "isDone",
]);

export const deleteTodo = createAction(DELETE_TODO, ["id"]);
