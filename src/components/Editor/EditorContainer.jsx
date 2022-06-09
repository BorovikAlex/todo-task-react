import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Editor } from "./Editor";
import { setTodoDone, setTodoText, deleteTodo } from "../../store/thunks";

export function EditorContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos);

  const handleTextChange = (item, toDoName) => {
    item.toDoName = toDoName;
    dispatch(setTodoText(item));
  };

  const handleToggle = (item, isDone) => {
    item.isDone = isDone;
    dispatch(setTodoDone(item));
  };
  const handleRemove = (toDoID) => {
    dispatch(deleteTodo(toDoID));
  };
  return (
    <Editor
      items={items}
      onTextChange={handleTextChange}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  );
}
