import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Plus } from "react-bootstrap-icons";

import "./AddItem.css";

export function AddItem({ onAdd }) {
  const [text, setText] = useState("");
  const [toDoNameError, setToDoNameError] = useState(false);
  const [nameError, setNameError] = useState("");
  let errorCount = 0;

  const handleChange = (value) => {
    setText(value);
  };

  const handleAdd = () => {
    const item = { toDoID: 0, toDoName: text, isDone: false };
    validateForm(item);

    if (errorCount === 0) {
      onAdd(item);
      setText("");
      setToDoNameError(false);
    }
  };

  const validateForm = (item) => {
    if (item.toDoName === "") {
      setNameError("Вы не ввели задачу");
      setToDoNameError(true);
      errorCount++;
    }
    if (item.toDoName.length > 30) {
      setNameError("Слишком длинная задача");
      setToDoNameError(true);
      errorCount++;
    }
  };

  return (
    <div className="add-item__container">
      {toDoNameError && <label className="add-item__error">{nameError}</label>}
      <Form.Group className="add-item__item">
        <Form.Control
          type="text"
          className="add-item__input"
          value={text}
          onChange={(event) => handleChange(event.target.value)}
        />
        <Button
          type="button"
          variant="primary"
          className="add-item__button"
          onClick={handleAdd}
        >
          <Plus />
        </Button>
      </Form.Group>
    </div>
  );
}
