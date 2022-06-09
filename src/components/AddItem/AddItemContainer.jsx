import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/thunks";
import { AddItem } from "./AddItem";

export function AddItemContainer() {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    console.log(item);
    dispatch(addTodo(item));
  };

  return <AddItem onAdd={handleAdd} />;
}
